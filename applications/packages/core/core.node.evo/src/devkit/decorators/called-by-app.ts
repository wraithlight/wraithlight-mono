import { Guid } from "@wraithlight/core.guid";

export interface ICalledByApp {
  appId: Guid;
  appType: "FE" | "BE",
  methodName: string
}

const calledByApps: Array<ICalledByApp> = [];

export const CalledByApp = (
  appId: Guid,
  appType: "BE" | "FE"
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
) => (
  _target: unknown, methodName: string
) => {
  calledByApps.push({
    methodName: methodName,
    appId: appId,
    appType: appType
  });
};

export const getCalledByApps = (): ReadonlyArray<ICalledByApp> => calledByApps;
