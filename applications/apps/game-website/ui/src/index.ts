import "./styles.scss";
import "./app";
import { getDocumentRef } from "@wraithlight/core.dom";
import { applyBindings } from "knockout";

const _document = getDocumentRef();

_document.addEventListener(
  "DOMContentLoaded",
  () => {
    bootstrap();
  }
);

function bootstrap(): void {
  applyBindings(_document.body);
}
