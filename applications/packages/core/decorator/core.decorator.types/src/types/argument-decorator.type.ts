export type IArgumentDecoratorFactory<T extends object> = (
  target: T,
  propertyKey: string,
  parameterIndex: number
) => void;
