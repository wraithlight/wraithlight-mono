import { HandlerContextModel } from "./handler-context.model";

export const DEFAULT_STATE: HandlerContextModel = {
  params: [],
  filters: [],
  methods: [],
  class: {
    basePath: "",
    injectionToken: ""
  }
};

export const COUNTER_NAME = "CONTROLLER_INJECTION_TOKEN";
export const INJECTION_PREFIX = "WLCONTROLLER_";
