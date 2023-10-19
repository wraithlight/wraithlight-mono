import { mustacheFacade } from "./mustache.fn"

let isFailing = false
jest.mock("mustache", () => {
    return {
        render: jest.fn().mockImplementation((template: string, model: any) => {
            if(isFailing) {
                throw `MOCK ERROR`;
            }
            return template.replace("{{name}}", model.name);
        })
    }
})
import { render } from "mustache";

describe("mustacheFacadeSpecs", () => {
    const MOCK_TEMPLATE = "<h1>{{name}}</h1>";
    const MOCK_MODEL = { name: "wraithlight" };

    describe("given the utility is initialized", () => {
        describe("when i call it", () => {
            describe("and the model is valid", () => {
                let result: string;
                beforeEach(() => {
                    isFailing = false;
                    result = mustacheFacade(MOCK_TEMPLATE, MOCK_MODEL).renderedTemplate
                });
                it("should return the rendered template", () => {
                    expect(result).toStrictEqual("<h1>wraithlight</h1>");
                });
            });
            describe("and the model is invalid", () => {
                let result: string;
                beforeEach(() => {
                    isFailing = true;
                    result = mustacheFacade(MOCK_TEMPLATE, MOCK_MODEL).renderedTemplate
                });
                it("should return the original template", () => {
                    expect(result).toStrictEqual(MOCK_TEMPLATE);
                });
            });
        })
    })
})
