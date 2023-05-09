import { WebsocketBuilder, ExponentialBackoff } from "websocket-ts";
import { WSMessageEvents } from "./WSMessageEvents";
import {
  WSNotificationClientSettings,
  WSNotificationClientSettingsStore,
} from "./WSNotificationClientSettings";
import { Logger } from "./utils/Logger";

export class WSNotificationClient {
  protected readonly _logger = new Logger('WSNotificationClient');
  public readonly settings: WSNotificationClientSettingsStore;
  public WebSocket?: any;
  protected readonly _events: WSMessageEvents;

  constructor(settings: WSNotificationClientSettings) {
    this._logger.debug("Library constructor loaded");
    this.settings = new WSNotificationClientSettingsStore(settings);
    this._events = new WSMessageEvents();
  }

  public connect = (): any => {
    this.WebSocket = new WebsocketBuilder(this.settings.webSocketRemote)
      .onOpen((_i, ev) => {
        this._events._raiseOnConnectionOpen(ev);
        this._logger.debug("Opened", ev);
      })
      .onClose((_i, ev) => {
        this._logger.debug("Closed, ev");
        this._events._raiseOnConnectionClose(ev);
      })
      .onError((_i, ev) => {
        this._logger.error("Error", ev);
        this._events._raiseOnConnectionError(ev);
      })
      .onMessage((_i, ev) => {
        this._logger.debug("Message", ev?.data);
        this.handleMessage(ev?.data);
      })
      .onRetry((_i, ev) => {
        this._logger.warn("Retry", ev);
        this._events._raiseOnConnectionRetry(ev);
      })
      .withBackoff(
        new ExponentialBackoff(
          this.settings.exponentialBackoffInitial,
          this.settings.exponentialBackoffExpMax
        )
      )
      .build();
  };

  public get events(): WSMessageEvents {
    return this._events;
  }

  private handleMessage = (message: any): void => {
    const messageType = message.type ?? undefined;
    switch (messageType) {
      // Specific message event
      case "a.b.c":
        // this._events._raiseOnABC(message);
        break;

      default:
        this._events._raiseOnMessageReceived(message);
        break;
    }
  };
}
