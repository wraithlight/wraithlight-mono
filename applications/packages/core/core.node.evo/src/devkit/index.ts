import {
  CalledByApp as CalledByAppImpl,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ICalledByApp,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  IUsedInFlow,
  UsedInFlow as UsedInFlowImpl,
  getCalledByApps as getCalledByAppsFn,
  getUsedInFlows as getUsedInFlowsFn,
} from "./decorators";
import {
  addEndpoint as addEndpointFn,
  getEndpoints as getEndpointsFn,
} from "./get-endpoints.fn";

export namespace DevkitDecorators {
  export const CalledByApp = CalledByAppImpl;
  export const UsedInFlow = UsedInFlowImpl;
}

export namespace DevkitUtils {
  export const getCalledByApps = getCalledByAppsFn;
  export const getUsedInFlows = getUsedInFlowsFn;
  export const addEndpoint = addEndpointFn;
  export const getEndpoints = getEndpointsFn;
}
