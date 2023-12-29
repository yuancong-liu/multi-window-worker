import { WindowState } from "./types";

export const getCurrentWindowState = (): WindowState => ({
  screenX: window.screenX,
  screenY: window.screenY,
  innerWidth: window.innerWidth,
  innerHeight: window.innerHeight,
});
