import { Event } from "./utils/Event";

/**
 * @public
 */
export type ConnectionOpenCallback = (connectionEvent?: any) => Promise<void> | void;
export type ConnectionCloseCallback = (connectionEvent?: any) => Promise<void> | void;
export type ConnectionErrorCallback = (connectionEvent?: any) => Promise<void> | void;
export type ConnectionRetryCallback = (connectionEvent?: any) => Promise<void> | void;
export type MessageReceivedCallback = (connectionEvent?: any) => Promise<void> | void;

export class WSMessageEvents {
  private readonly _onConnectionOpen = new Event<[any]>("WS Connection Open");
  private readonly _onConnectionClose = new Event<[any]>("WS Connection Close");
  private readonly _onConnectionError = new Event<[any]>("WS Connection Error");
  private readonly _onConnectionRetry = new Event<[any]>("WS Connection Retry");
  private readonly _onMessageReceived = new Event<[any]>("WS Message Received");

  // ********* Connection Related ***********
  /**
   * @internal
   */
  public _raiseOnConnectionOpen(connectionEvent?: any): void {
    this._onConnectionOpen.raise(connectionEvent);
  }

  /**
   * Add callback: Raised when a WS connection opens.
   */
  public addConnectionOpen(cb: ConnectionOpenCallback): () => void {
    return this._onConnectionOpen.addHandler(cb);
  }

  /**
   * Add callback: Raised when a WS connection opens.
   */
  public removeConnectionOpen(cb: ConnectionOpenCallback): void {
    this._onConnectionOpen.removeHandler(cb);
  }

  /**
   * @internal
   */
  public _raiseOnConnectionClose(connectionEvent?: any): void {
    this._onConnectionClose.raise(connectionEvent);
  }

  /**
   * Add callback: Raised when a WS connection closes.
   */
  public addConnectionClose(cb: ConnectionCloseCallback): () => void {
    return this._onConnectionClose.addHandler(cb);
  }

  /**
   * Remove callback: Raised when a WS connection closes.
   */
  public removeConnectionClose(cb: ConnectionCloseCallback): void {
    this._onConnectionClose.removeHandler(cb);
  }
  /**
   * @internal
   */
  public _raiseOnConnectionError(connectionEvent?: any): void {
    this._onConnectionError.raise(connectionEvent);
  }

  /**
   * Add callback: Raised when a WS connection errors out.
   */
  public addConnectionError(cb: ConnectionErrorCallback): () => void {
    return this._onConnectionError.addHandler(cb);
  }

  /**
   * Remove callback: Raised when a WS connection errors out.
   */
  public removeConnectionError(cb: ConnectionErrorCallback): void {
    this._onConnectionError.removeHandler(cb);
  }
  /**
   * @internal
   */
  public _raiseOnConnectionRetry(connectionEvent?: any): void {
    this._onConnectionRetry.raise(connectionEvent);
  }

  /**
   * Remove callback: Raised when a WS connection is retried.
   */
  public addConnectionRetry(cb: ConnectionRetryCallback): () => void {
    return this._onConnectionRetry.addHandler(cb);
  }

  /**
   * Remove callback: Raised when a WS connection is retried.
   */
  public removeConnectionRetry(cb: ConnectionRetryCallback): void {
    this._onConnectionRetry.removeHandler(cb);
  }

  // ********* Messages ***********
  /**
   * @internal
   */
  public _raiseOnMessageReceived(message: any): void {
    this._onMessageReceived.raise(message);
  }

  /**
   * Add callback: Raised when a WS message arrives.
   */
  public addMessageReceived(cb: MessageReceivedCallback): () => void {
    return this._onMessageReceived.addHandler(cb);
  }

  /**
   * Remove callback: Raised when a WS message arrives.
   */
  public removeMessageReceived(cb: MessageReceivedCallback): void {
    this._onMessageReceived.removeHandler(cb);
  }
}
