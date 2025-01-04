import {
  Validator,
  ValidationRule
} from "@wraithlight/core.validator";
import {
  ServerUserManagementConfigReader
} from "@wraithlight/common.environment-static.server";
import {
  CoreEnvironment
} from "@wraithlight/core.env.sdk";

export class ApiTokenValidator extends Validator<string> {

  private readonly _config = ServerUserManagementConfigReader
    .getInstance(CoreEnvironment.getEnvironmentType());

  public setupRules(): void {
    this.addValidationRule(
      m => m,
      ValidationRule
        .toBeString()
        .toBeInArray(this._config.get(m => m.apiTokens))
    );
  }

}
