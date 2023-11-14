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
        const index = this._layers.push(new Layer(this._canvas));
        return this.getLayerInternal(index - 1)!;
    }

    public getLayer(index: number): Nullable<Layer> {
        return this.getLayerInternal(index);
    }

    private getLayerInternal(index: number): Nullable<Layer> {
        return this._layers[index];
    }

}
