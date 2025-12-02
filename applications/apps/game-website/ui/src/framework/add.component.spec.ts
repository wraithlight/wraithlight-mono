import { addComponent } from "./add-component";

jest.mock("knockout", () => {
  return {
    components: {
      register: jest.fn()
    }
  }
});

import { components } from "knockout";

describe("addComponentSpecs", () => {

  const MOCK_SELECTOR = "selector";
  const MOCK_TEMPLATE = "template";
  const MOCK_FACTORY = () => { };

  const registerSpy = jest.spyOn(components, "register");

  describe("given the utility is initialized", () => {
    describe("when i call it", () => {
      beforeEach(() => {
        addComponent(
          MOCK_SELECTOR,
          MOCK_TEMPLATE,
          MOCK_FACTORY
        );
      });
      it("should call the underlying SDK", () => {
        expect(registerSpy).toHaveBeenCalled();
        expect(registerSpy).toHaveBeenCalledTimes(1);
        expect(registerSpy).toHaveBeenCalledWith(
          MOCK_SELECTOR,
          {
            template: MOCK_TEMPLATE,
            viewModel: MOCK_FACTORY
          }
        );
      });
    });
  });
});
