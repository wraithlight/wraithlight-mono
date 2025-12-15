import { LATENCY_API_ENDPOINTS } from "@wraithlight/core.latency.constants";
import { LatencyResponseModel } from "@wraithlight/core.latency.types";
import {
  BaseController,
  HttpController,
  HttpGet
} from "@wraithlight/core.node";
import { dateISOSerialize, utcNow } from "@wraithlight/framework.date";

@HttpController(LATENCY_API_ENDPOINTS.v1.controller)
export class LatencyController extends BaseController {

  @HttpGet(LATENCY_API_ENDPOINTS.v1.getLatency)
  public getLatency(): void {
    const payload: LatencyResponseModel = {
      receivedAtUtc: dateISOSerialize(utcNow())
    };
    super.ok(payload);
  }

}
