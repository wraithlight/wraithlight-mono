import {
  BaseController,
  HttpDecorators,
} from "@wraithlight/core.node.evo";
import { Authorize } from "./test.filter";

/**
 * @public To ignore fake knip error.
 */
@HttpDecorators.httpController("/test")
export class TestController extends BaseController {

  @Authorize()
  @HttpDecorators.httpGet("/200/:id")
  public thisReturnsOk(
    @HttpDecorators.fromPath("id") id: string,
    @HttpDecorators.fromQuery("test") test: string,
  ) {
    return super.ok({
      welcome: "hey",
      name: "momci",
      id: id,
      test: test
    });
  }

  @HttpDecorators.httpGet("/202")
  public thisReturnsAccepted() {
    return super.accepted();
  }

}
