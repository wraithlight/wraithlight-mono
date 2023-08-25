import "./styles.scss";
import "./app";
import { applyBindings } from "knockout";
import { getDocumentRef } from "@wraithlight/core.dom";

const _document = getDocumentRef();

_document.addEventListener("DOMContentLoaded", () => {
    bootstrap();
});

function bootstrap() {
    applyBindings(_document.body);
}
