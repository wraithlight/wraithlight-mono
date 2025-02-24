export interface CurrentRoute {
    name: string;
    path: string;
    hash: string;
    queryParams: Record<string, string>;
    namedParams: Record<string, string>;
    childRoute: CurrentRoute;
}
