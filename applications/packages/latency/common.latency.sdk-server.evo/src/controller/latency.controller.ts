import { LATENCY_API_ENDPOINTS } from "@wraithlight/core.latency.constants";
import { LatencyResponseModel } from "@wraithlight/core.latency.types";
import {
  BaseController,
  HttpDecorators
} from "@wraithlight/core.node.evo";
import { dateISOSerialize, utcNow } from "@wraithlight/framework.date";

@HttpDecorators.httpController(LATENCY_API_ENDPOINTS.v1.controller)
export class LatencyController extends BaseController {

  @HttpDecorators.httpGet(LATENCY_API_ENDPOINTS.v1.getLatency)
  public getLatency(): void {
    const payload: LatencyResponseModel = {
      receivedAtUtc: dateISOSerialize(utcNow())
    };
    super.ok(payload);
  }

}
