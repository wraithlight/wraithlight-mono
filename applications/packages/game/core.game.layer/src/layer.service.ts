import { Nullable } from "@wraithlight/core.nullable";

import { Layer } from "./layer";

export class LayerService {

    private _layers: Array<Layer> = [];

    constructor(
        private readonly _canvas: HTMLCanvasElement
    ) { }

    public reset(): void {
        this._layers.forEach(m => m.dispose());
        this._layers = [];
    }

    public addLayer(): Layer {
        const layer = new Layer(this._canvas)
        this._layers.push(layer);
        return layer;
    }

    public getLayer(index: number): Nullable<Layer> {
        return this._layers[index];
    }

}
