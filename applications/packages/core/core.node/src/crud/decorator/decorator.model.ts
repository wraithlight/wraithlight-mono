export type IDecoratorFactory<T> = (
    target: T,
    propertyKey: string
) => void;
