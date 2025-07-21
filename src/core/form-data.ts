import { type ReadStream as NodeReadStream } from "node:fs";
import { RUNTIME } from "./runtime";

export type UploadFile = FileLike | NodeReadStream;

export function isUploadFile(val: any): val is UploadFile {
  return isFileLike(val) || isNodeReadStream(val);
}

export function isNodeReadStream(val: any): val is NodeReadStream {
  // node read stream duck-typing check
  return (
    RUNTIME.type === "node" &&
    typeof val === "object" &&
    typeof val.bytesRead === "number" &&
    (typeof val.path === "string" || val.path instanceof Buffer) &&
    typeof val.pending === "boolean" &&
    typeof val.readable === "boolean" &&
    typeof val.read === "function" &&
    typeof val.setEncoding === "function" &&
    typeof val.pause === "function" &&
    typeof val.resume === "function" &&
    typeof val.isPaused === "function" &&
    typeof val.pipe === "function" &&
    typeof val.unpipe === "function" &&
    typeof val.unshift === "function" &&
    typeof val.wrap === "function"
  );
}

/**
 * Defines common File spec compatible with modern browser File, node-fetch, etc.
 */
export interface FileLike extends BlobLike {
  lastModified: number;
  name: string;
}

export function isFileLike(val: any): val is FileLike {
  // https://developer.mozilla.org/docs/Web/API/File
  // https://github.com/node-fetch/fetch-blob/blob/main/file.js
  return (
    typeof val?.lastModified === "number" &&
    typeof val?.name === "string" &&
    isBlobLike(val)
  );
}

/**
 * Defines common Blob spec compatible with modern browser Blob, fetch-blob, etc.
 */
export interface BlobLike {
  type: string;
  size: number;
  slice(start?: number, end?: number, type?: string): BlobLike;
  text(): Promise<string>;
  arrayBuffer(): Promise<ArrayBuffer>;
}

export function isBlobLike(val: any): val is BlobLike {
  // https://developer.mozilla.org/docs/Web/API/Blob
  // https://github.com/node-fetch/fetch-blob/blob/main/index.js
  return (
    typeof val?.size === "number" &&
    typeof val?.type === "string" &&
    typeof val?.slice === "function" &&
    typeof val?.text === "function" &&
    typeof val?.arrayBuffer === "function"
  );
}

function appendFormData(form: any, key: string, val: unknown) {
  if (val === null || typeof val === "undefined") {
    return;
  } else if (["string", "boolean", "number"].includes(typeof val)) {
    form.append(key, (val as string | boolean | number).toString());
  } else if (Array.isArray(val)) {
    for (const arrVal of val) {
      appendFormData(form, key, arrVal);
    }
  } else if (isUploadFile(val)) {
    form.append(key, val);
  } else if (typeof val === "object") {
    for (const [objKey, objVal] of Object.entries(val)) {
      appendFormData(form, `${key}[${objKey}]`, objVal);
    }
  } else {
    throw new TypeError(`Invalid value given to form: ${val}`);
  }
}

export function createForm(data: { [key: string]: unknown }): any {
  let form;
  if (RUNTIME.type === "node") {
    const NodeFormData = require("form-data");
    form = new NodeFormData();
  } else {
    form = new FormData();
  }

  for (const [key, val] of Object.entries(data)) {
    appendFormData(form, key, val);
  }

  return form;
}
