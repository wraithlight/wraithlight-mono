import {
  ValidationRule,
  Validator
} from "@wraithlight/core.validator";
import {
  ApplicationId
} from "@wraithlight/domain.application-info.constants";

export class ContextIdValidator extends Validator<string> {

  public setupRules(): void {
    const contextIds = [
      ApplicationId.CONTENT,
      ApplicationId.EDITOR,
      ApplicationId.FORUM,
      ApplicationId.GAME_APPLICATION,
      ApplicationId.GAME_WEBSITE,
      ApplicationId.LOGS,
      ApplicationId.NOTIFIER,
      ApplicationId.REMOTE_CONFIG,
      ApplicationId.WEBSITE
    ];
    this.addValidationRule(
      m => m,
      ValidationRule
        .toBeString()
        .toBeGuid()
        .toBeInArray(contextIds)
    );
  }

}
