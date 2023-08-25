export type DocumentRef = Document;

export function getDocumentRef(): DocumentRef {
    // eslint-disable-next-line no-restricted-globals
    return document;
}
