export enum ServerStopReason {
  stopSignal = "STOP_SIGNAL",
  sigterm = "SIGTERM",
  sigint = "SIGINT"
}

export enum RequestEndReason {
  filterFail = "FILTER_FAILURE",
  paramFail = "PARAM_FAILURE",
  controllerGetFail = "CONTROLLER_GET_FAILURE",
  methodGetFail = "METHOD_GET_FAILURE",
  methodResultLegacy = "METHOD_LEGACY",
  methodResult = "METHOD",
  methodFail = "METHOD_FAIL",
}
