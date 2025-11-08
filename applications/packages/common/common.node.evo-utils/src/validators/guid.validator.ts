import { Guid, isGuid } from "@wraithlight/core.guid";
import { IValidator, ValidationResult } from "@wraithlight/core.validator";

export class GuidValidator implements IValidator<Guid> {

  public validate(object: unknown): ValidationResult {
    if (typeof object !== "string") {
      return {
        success: false,
        errorList: [
          {
            propertyName: "object",
            errors: ["E_GUID_TYPE"]
          }
        ],
        ruleResults: [{
          success: false,
          propertyName: "object"
        }]
      };
    }
    const result = isGuid(object);
    if (!result) {
      return {
        success: false,
        errorList: [
          {
            propertyName: "object",
            errors: ["E_NOT_GUID"]
          }
        ],
        ruleResults: [{
          success: false,
          propertyName: "object"
        }]
      };
    }

    return {
      success: true,
      errorList: [],
      ruleResults: []
    };
  }

}
