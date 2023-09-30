import "./body.component.scss";
import html from './body.component.html'

import { GameContextService } from "@wraithlight/core.game.context";
import { getDocumentRef } from "@wraithlight/core.dom";
import { observable } from "knockout";

import { addComponent } from "../../../framework";

class BodyComponent {

    private readonly _gameContextService = new GameContextService();

    public readonly canvasId = observable<string>("gameContent");

    public koDescendantsComplete(): void {
        const canvas = getDocumentRef().getElementById(this.canvasId()) as HTMLCanvasElement;
        this._gameContextService.initGame(canvas, "");
    }

}

addComponent(
    "game-website-body",
    html,
    () => new BodyComponent()
);
