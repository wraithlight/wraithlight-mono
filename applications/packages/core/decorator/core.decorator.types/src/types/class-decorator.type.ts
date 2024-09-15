export type IClassDecoratorFactory<T extends object> = (
  target: T,
  propertyKey: string,
) => void;
