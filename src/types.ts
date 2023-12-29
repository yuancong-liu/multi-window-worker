export type WindowState = {
  /**
   * The x coordinate of the window.
   * window.screenX
   */
  screenX: number;
  /**
   * The y coordinate of the window.
   * window.screenY
   */
  screenY: number;
  /**
   * The width of the window.
   * window.innerWidth
   */
  innerWidth: number;
  /**
   * The height of the window.
   * window.innerHeight
   */
  innerHeight: number;
};

export type GlobalState = {
  /**
   * The current window state.
   */
  current: WindowState;
  /**
   * The other window states.
   */
  other: WindowState[];
};

export type MessageT<Action extends string, Payload extends unknown> = {
  /**
   * The action to perform.
   */
  action: Action;
  /**
   * The payload to send.
   */
  payload: Payload;
};

type WindowStateChangePayload = {
  /**
   * The old window state.
   */
  oldWindowState: WindowState;
  /**
   * The new window state.
   */
  newWindowState: WindowState;
  /**
   * The id of the window that changed.
   */
  id: number;
};

type AttributedIdPayload = {
  /**
   * The id of the window that changed.
   */
  id: number;
};

type WindowUnloadPayload = {
  /**
   * The id of the window that changed.
   */
  id: number;
};

export type WorkerMessage =
  | MessageT<"connected", { state: WindowState }>
  | MessageT<"sync", { allWindows: { windowState: WindowState; id: number }[] }>
  | MessageT<"windowStateChange", WindowStateChangePayload>
  | MessageT<"attributedId", AttributedIdPayload>
  | MessageT<"windowUnload", WindowUnloadPayload>;
