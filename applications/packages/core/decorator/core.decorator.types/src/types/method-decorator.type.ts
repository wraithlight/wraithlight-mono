export type IMethodDecoratorFactory<T extends object> = (
  target: T,
  propertyKey: string,
  propertyDescriptor: PropertyDescriptor
) => void;
