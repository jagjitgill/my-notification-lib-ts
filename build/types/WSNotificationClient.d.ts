import { WSMessageEvents } from "./WSMessageEvents";
import { WSNotificationClientSettings, WSNotificationClientSettingsStore } from "./WSNotificationClientSettings";
import { Logger } from "./utils/Logger";
export declare class WSNotificationClient {
    protected readonly _logger: Logger;
    readonly settings: WSNotificationClientSettingsStore;
    WebSocket?: any;
    protected readonly _events: WSMessageEvents;
    constructor(settings: WSNotificationClientSettings);
    connect: () => any;
    get events(): WSMessageEvents;
    private handleMessage;
}
