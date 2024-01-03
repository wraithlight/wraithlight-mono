export const mustacheFacade = jest
    .fn()
    .mockImplementation((template: string) => {
        return { renderedTemplate: template }
    })
;
