import type { WindowState, WorkerMessage } from "./types";

let windowState: { windowState: WindowState; id: number; port: MessagePort };

onconnect = ({ ports }) => {
  const port = ports[0];
  port.onmessage = (event: MessageEvent<WorkerMessage>) => {
    console.log("worker received message", event.data);
  }
}
