import {
  AuthKey,
  CoreClient,
  ResourceClientOptions,
} from "petstore_sample_api_ts/core";
import { Environment } from "petstore_sample_api_ts/environment";
import { PetClient } from "petstore_sample_api_ts/resources/pet";
import { StoreClient } from "petstore_sample_api_ts/resources/store";

export interface ClientOptions extends ResourceClientOptions {
  baseUrl?: string;
  environment?: Environment;
  timeout?: number;
  lazyLoad?: boolean;
  apiKey?: string;
}

export class Client {
  private _petLazy?: PetClient; // lazy-loading cache
  private _storeLazy?: StoreClient; // lazy-loading cache

  protected _client: CoreClient;
  protected _opts: ResourceClientOptions;

  constructor(opts?: ClientOptions) {
    this._client = new CoreClient({
      baseUrl: opts?.baseUrl ?? opts?.environment ?? Environment.Environment,
      timeout: opts?.timeout,
    });
    this._opts = { lazyLoad: opts?.lazyLoad };
    this._client.registerAuth(
      "api_key",
      new AuthKey("api_key", "header", opts?.apiKey),
    );
    if (this._opts.lazyLoad === false) {
      this.pet;
      this.store;
    }
  }
  get pet(): PetClient {
    return (
      this._petLazy ??
      (this._petLazy = new (require("./resources/pet").PetClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get store(): StoreClient {
    return (
      this._storeLazy ??
      (this._storeLazy = new (require("./resources/store").StoreClient)(
        this._client,
        this._opts,
      ))
    );
  }
}
