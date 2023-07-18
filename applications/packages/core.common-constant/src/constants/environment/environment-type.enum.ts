export const enum EnvironmentType {
    /**
     * Local environment. Used when the applications are running on the local machine with `watch` command.
     */
    Local = "LOCAL",
    /**
     * Development enviroment. Used when the applications are running on the local Docker cluster.
     */
    Dev = "DEV",
    /**
     * Test environment. Used when the applications are runinin in the Cloud.
     */
    Test = "TEST"
}
