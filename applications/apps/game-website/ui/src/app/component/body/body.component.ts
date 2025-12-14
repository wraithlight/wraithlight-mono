import "./body.component.scss";

import { getDocumentRef } from "@wraithlight/core.dom";
import { GameContextService } from "@wraithlight/core.game.context";
import { observable } from "knockout";

import { addComponent } from "../../../framework";

import { template } from "./body.component.html";

class BodyComponent {

  private readonly _gameContextService = new GameContextService();

  public readonly canvasId = observable<string>("gameContent");

  public koDescendantsComplete(): void {
    const element = getDocumentRef().getElementById(this.canvasId());
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const canvas = element as HTMLCanvasElement;
    this._gameContextService.initGame(
      canvas,
      ""
    );
  }

}

addComponent(
  "game-website-body",
  template,
  () => new BodyComponent()
);
