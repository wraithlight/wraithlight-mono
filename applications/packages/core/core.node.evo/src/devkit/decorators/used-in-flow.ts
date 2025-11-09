export interface IUsedInFlow {
  methodName: string;
  flowName: string;
}

const usedInFlows: Array<IUsedInFlow> = [];

export const UsedInFlow = (
  flowName: string
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
) => (
  _target: unknown, methodName: string
) => {
  usedInFlows.push({
    methodName: methodName,
    flowName: flowName
  });
};

export const getUsedInFlows = (): ReadonlyArray<IUsedInFlow> => usedInFlows;
