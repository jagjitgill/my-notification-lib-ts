import { WSNotificationClient } from "../lib";
import { Log } from "../lib/utils/Logger";

Log.setLogger(console);
Log.setLevel(Log.DEBUG)

const myLibraryInstance = new WSNotificationClient({
  webSocketRemote: "wss://socketsbay.com/wss/v2/1/demo/",
});

myLibraryInstance.connect();
myLibraryInstance.events.addMessageReceived((data) => {
  console.log("Callback called with ", data);
  //   let div = document.createElement("div");
  //   div.textContent(data ?? '-');
  document.querySelector("body")?.append(`Message: ${data}` ?? "");
});
