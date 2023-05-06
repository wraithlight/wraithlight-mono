import "./body.component.scss";

import { GameContextService } from "@wraithlight/game.context";
import { observable } from "knockout";

import { addComponent } from "../../../framework";

export class BodyComponent {

    private readonly _gameContextService = new GameContextService();

    public readonly canvasId = observable<string>("gameContent");

    public koDescendantsComplete(): void {
        const canvas = document.getElementById(this.canvasId()) as HTMLCanvasElement;
        this._gameContextService.initGame(canvas, "");
    }

}

addComponent(
    "game-website-body",
    require("./body.component.html").default,
    () => new BodyComponent()
);
