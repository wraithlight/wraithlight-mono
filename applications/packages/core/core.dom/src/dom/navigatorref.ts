export type NavigatorRef = Navigator;

export function getNavigatorRef(): NavigatorRef {
    // eslint-disable-next-line no-restricted-globals
    return navigator;
}
