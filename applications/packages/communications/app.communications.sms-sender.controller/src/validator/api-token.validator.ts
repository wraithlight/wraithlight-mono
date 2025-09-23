import {
  ServerCommsSSSConfigReader
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
    const config = ServerCommsSSSConfigReader
      .getInstance(CoreEnvironment.getEnvironmentType())
    ;

    const tokens = config.get(m => m.apiTokens.npsTokens);
    this.addValidationRule(
      m => m,
      ValidationRule
        .toBeString()
        .toBeInArray(tokens)
    );
  }

}
