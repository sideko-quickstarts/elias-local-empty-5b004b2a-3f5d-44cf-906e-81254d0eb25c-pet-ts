import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "petstore_sample_api_ts/core";
import { OrderClient } from "petstore_sample_api_ts/resources/store/order";

export class StoreClient extends CoreResourceClient {
  private _orderLazy?: OrderClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.order;
    }
  }
  get order(): OrderClient {
    return (
      this._orderLazy ??
      (this._orderLazy = new (require("./order").OrderClient)(
        this._client,
        this._opts,
      ))
    );
  }
}
