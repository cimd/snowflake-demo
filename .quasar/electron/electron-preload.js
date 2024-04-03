"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src-electron/electron-preload.ts
var import_electron = require("electron");
var snowflakeSDK = __toESM(require("snowflake-sdk"));
console.log("PRELOAD");
import_electron.contextBridge.exposeInMainWorld("snowflake", {
  sdk: snowflakeSDK
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjLWVsZWN0cm9uL2VsZWN0cm9uLXByZWxvYWQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogVGhpcyBmaWxlIGlzIHVzZWQgc3BlY2lmaWNhbGx5IGZvciBzZWN1cml0eSByZWFzb25zLlxuICogSGVyZSB5b3UgY2FuIGFjY2VzcyBOb2RlanMgc3R1ZmYgYW5kIGluamVjdCBmdW5jdGlvbmFsaXR5IGludG9cbiAqIHRoZSByZW5kZXJlciB0aHJlYWQgKGFjY2Vzc2libGUgdGhlcmUgdGhyb3VnaCB0aGUgXCJ3aW5kb3dcIiBvYmplY3QpXG4gKlxuICogV0FSTklORyFcbiAqIElmIHlvdSBpbXBvcnQgYW55dGhpbmcgZnJvbSBub2RlX21vZHVsZXMsIHRoZW4gbWFrZSBzdXJlIHRoYXQgdGhlIHBhY2thZ2UgaXMgc3BlY2lmaWVkXG4gKiBpbiBwYWNrYWdlLmpzb24gPiBkZXBlbmRlbmNpZXMgYW5kIE5PVCBpbiBkZXZEZXBlbmRlbmNpZXNcbiAqXG4gKiBFeGFtcGxlIChpbmplY3RzIHdpbmRvdy5teUFQSS5kb0FUaGluZygpIGludG8gcmVuZGVyZXIgdGhyZWFkKTpcbiAqXG4gKiAgIGltcG9ydCB7IGNvbnRleHRCcmlkZ2UgfSBmcm9tICdlbGVjdHJvbidcbiAqXG4gKiAgIGNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoJ215QVBJJywge1xuICogICAgIGRvQVRoaW5nOiAoKSA9PiB7fVxuICogICB9KVxuICpcbiAqIFdBUk5JTkchXG4gKiBJZiBhY2Nlc3NpbmcgTm9kZSBmdW5jdGlvbmFsaXR5IChsaWtlIGltcG9ydGluZyBAZWxlY3Ryb24vcmVtb3RlKSB0aGVuIGluIHlvdXJcbiAqIGVsZWN0cm9uLW1haW4udHMgeW91IHdpbGwgbmVlZCB0byBzZXQgdGhlIGZvbGxvd2luZyB3aGVuIHlvdSBpbnN0YW50aWF0ZSBCcm93c2VyV2luZG93OlxuICpcbiAqIG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7XG4gKiAgIC8vIC4uLlxuICogICB3ZWJQcmVmZXJlbmNlczoge1xuICogICAgIC8vIC4uLlxuICogICAgIHNhbmRib3g6IGZhbHNlIC8vIDwtLSB0byBiZSBhYmxlIHRvIGltcG9ydCBAZWxlY3Ryb24vcmVtb3RlIGluIHByZWxvYWQgc2NyaXB0XG4gKiAgIH1cbiAqIH1cbiAqL1xuaW1wb3J0IHsgY29udGV4dEJyaWRnZSB9IGZyb20gJ2VsZWN0cm9uJ1xuaW1wb3J0ICogYXMgc25vd2ZsYWtlU0RLIGZyb20gJ3Nub3dmbGFrZS1zZGsnXG5jb25zb2xlLmxvZygnUFJFTE9BRCcpXG5jb250ZXh0QnJpZGdlLmV4cG9zZUluTWFpbldvcmxkKCdzbm93Zmxha2UnLCB7XG4gIHNkazogc25vd2ZsYWtlU0RLLFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQSxzQkFBOEI7QUFDOUIsbUJBQThCO0FBQzlCLFFBQVEsSUFBSSxTQUFTO0FBQ3JCLDhCQUFjLGtCQUFrQixhQUFhO0FBQUEsRUFDM0MsS0FBSztBQUNQLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
