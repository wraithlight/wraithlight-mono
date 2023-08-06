export interface CommonServer {
    paths: {
        base: string;
        wildcard: string;
    },
    files: {
        frontend: {
            static: string
        }
    }
}
