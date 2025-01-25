import {
  ServerUserManagementConfigReader
} from "@wraithlight/common.environment-static.server";
import {
  CoreEnvironment
} from "@wraithlight/core.env.sdk";
import {
  ValidationRule,
  Validator
} from "@wraithlight/core.validator";

export class ApiTokenValidator extends Validator<string> {

  public setupRules(): void {
    const config = ServerUserManagementConfigReader
      .getInstance(CoreEnvironment.getEnvironmentType())
    ;

    const tokens = config.get(m => m.apiTokens);
    this.addValidationRule(
      m => m,
      ValidationRule
        .toBeString()
        .toBeInArray(tokens)
    );
  }

}
