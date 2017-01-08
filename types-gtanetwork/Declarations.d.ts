/// <reference path="index.d.ts" />

declare const API: GTANetwork.Javascript.ScriptContext;
import Keys = System.Windows.Forms.Keys;
import Point = System.Drawing.Point;
import PointF = System.Drawing.PointF;
import Size = System.Drawing.Size;

declare namespace resource {
}

declare interface IEvent<THandler> {
    connect(handler: THandler): void;
}

declare module Enums {
    export const enum Controls {}
}