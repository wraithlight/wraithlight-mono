import { HealthCheckResultV1Model } from "@wraithlight/core.health-checker.types";

export const DEFAULT_STATE: HealthCheckResultV1Model = {
    numberOfErrorMessages: 0,
    numberOfWarningMessages: 0,
    numberOfInformationMessages: 0
};
