import {
    Application,
    IRouterMatcher,
    Response,
    Request
} from "express";

import { BaseController } from "../controller";
// TODO: Export these from internal's public api
import { CONTROLLER_METADATA_KEY } from "../internal/controller-metadata.const";
import { ControllerMetadata } from "../internal/controller-metadata.model";
import { FILTER_METADATA_KEY } from "../internal/filter-metadata.const";
import { MethodMetadata } from "../internal/method-metadata.model";
import { Invoker } from "../internal";

export class ControllerBinder {

    public static bindControllers(
        app: Application,
        controllers: ReadonlyArray<BaseController>
    ): void {
        for(const controller of controllers) {
            this.bindController(app, controller);
        }
    }

    private static bindController(
        app: Application,
        controller: BaseController
    ): void {
        const metadata = this.getControllerMetadata(controller);
        for(const methodMetadata of metadata.methods) {
            const handler = this.getAppMethod(app, methodMetadata);
            const path = this.getMethodPath(metadata, methodMetadata);
            const method = this.getMethod(controller, methodMetadata);
            handler(path, async (req: Request, res: Response) => {
                const filters = this.getFilters(controller, methodMetadata.name);
                for (const invoker of filters) {
                    const result = await invoker(req);
                    if (!result.success) {
                        res.status(result.errorHttpCode!);
                        res.send();
                        return;
                    }
                }
                const params = this.getParams(req);
                controller.setResponseContext(res);
                method.apply(controller, [...params]);
            });
        }
    }

    private static getFilters(
        controller: BaseController,
        methodName: string
    ): ReadonlyArray<Invoker> {
        if (!controller[FILTER_METADATA_KEY]) {
            return [];
        }

        if (!controller[FILTER_METADATA_KEY][methodName]) {
            return [];
        }

        return controller[FILTER_METADATA_KEY][methodName];
    }

    private static getMethod(
        controller: BaseController,
        methodMetadata: MethodMetadata
    ): Function {
        return controller[methodMetadata.name] as Function;
    }

    private static getParams(
        req: Request
    ): Array<unknown> {
        const result = [];
        const body = this.getBodyParams(req);
        if (body && Object.keys(body).length > 0) {
            result.push(body);
        }
        const query = this.getRequestQueryParams(req);
        if (query && Object.keys(query).length > 0) {
            result.push(...Object.values(query));
        }
        const path = this.getRequestPathParams(req);
        if (path && Object.keys(path).length > 0) {
            result.push(...Object.values(path));
        }
        return result;
    }

    private static getBodyParams(
        req: Request
    ): unknown {
        return this.getParamsFromRequest(req, "body");
    }

    private static getRequestQueryParams(
        req: Request
    ): Object {
        return this.getParamsFromRequest(req, "query") as Object;
    }

    private static getRequestPathParams(
        req: Request
    ): Object {
        return this.getParamsFromRequest(req, "params") as Object;
    }

    private static getParamsFromRequest(
        req: Request,
        container: "body" | "query" | "params"
    ): unknown {
        return req[container];
    }

    private static getMethodPath(
        metadata: ControllerMetadata,
        method: MethodMetadata
    ): string {
        return `${metadata.baseUrl}${method.path}`;
    }

    private static getAppMethod(
        app: Application,
        methodMetadata: MethodMetadata
    ): IRouterMatcher<Application> {
        switch(methodMetadata.type) {
            case "GET": return app.get.bind(app);
            case "POST": return app.post.bind(app);
            default: throw `No HTTP method was found for type: '${methodMetadata.type}'!`;
        }
    }

    private static getControllerMetadata(
        controller: BaseController
    ): ControllerMetadata {
        return controller[CONTROLLER_METADATA_KEY]!;
    }
}
