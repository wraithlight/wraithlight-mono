export interface RuleCase<T> {
    (item: T): boolean;
}

export interface RuleCaseItem<T> {
    callback: RuleCase<T>;
    error: string;
}
