import { Rule } from "eslint";

export const rule = {
  create: function (context: Rule.RuleContext) {
    return {
      Literal: function (node: Rule.Node) {
        if (node.type === "Literal" && node.value === null) {
          context.report({
            node: node,
            message: "Import `GLOBAL_NULL` or `T_GLOBAL_NULL` from `@wraighlight/kernel.null` instead."
          });
        }
      }
    };
  }
};