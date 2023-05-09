export interface WSNotificationClientSettings {
    webSocketRemote: string;
    exponentialBackoffInitial?: number;
    exponentialBackoffExpMax?: number;
}
export declare class WSNotificationClientSettingsStore {
    readonly webSocketRemote: string;
    readonly exponentialBackoffInitial: number;
    readonly exponentialBackoffExpMax: number;
    constructor({ webSocketRemote, exponentialBackoffInitial, exponentialBackoffExpMax, }: WSNotificationClientSettings);
}
