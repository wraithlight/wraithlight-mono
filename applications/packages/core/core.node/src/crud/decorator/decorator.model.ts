/**
 * Import the respective decorator from `@wraithlight/core.decorator.types` instead.
 */
export type IDecoratorFactory<T> = (
  target: T,
  propertyKey: string
) => void;
