export interface WSNotificationClientSettings {
  webSocketRemote: string;
  exponentialBackoffInitial?: number;
  exponentialBackoffExpMax?: number;
}

const DefaultExponentialBackoffInitial = 100;
const DefaultExponentialBackoffExpMax = 7;

export class WSNotificationClientSettingsStore {
  public readonly webSocketRemote: string;
  public readonly exponentialBackoffInitial: number;
  public readonly exponentialBackoffExpMax: number;

  public constructor({
    webSocketRemote,
    exponentialBackoffInitial = DefaultExponentialBackoffInitial,
    exponentialBackoffExpMax = DefaultExponentialBackoffExpMax,
  }: WSNotificationClientSettings) {
    this.webSocketRemote = webSocketRemote;
    this.exponentialBackoffInitial = exponentialBackoffInitial;
    this.exponentialBackoffExpMax = exponentialBackoffExpMax;
  }
}
