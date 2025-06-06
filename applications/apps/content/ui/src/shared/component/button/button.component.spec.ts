import m, { mount } from "mithril";

import { ButtonComponent } from "./button.component";

describe("ButtonComponentSpecs", () => {

  const onClickSpy = jest.fn();
  const mockId = "button";

  describe("given the component is initialized", () => {
    mount(
      // eslint-disable-next-line no-restricted-globals
      document.body,
      {
        view: () => m(
          ButtonComponent,
          {
            isDisabled: false,
            onClick: onClickSpy,
            label: "aaa",
            type: "primary",
            isOutline: false,
            elementId: mockId
          }
        )
      }
    );

    describe("when i click on the button", () => {
      describe("and it is not disabled", () => {
        beforeEach(() => {
          // eslint-disable-next-line no-restricted-globals
          const button = document.getElementById(mockId);
          button?.click();
        });
        it("should emit the callback", () => {
          expect(onClickSpy).toHaveBeenCalled();
        });
      });
    });
  });

});
