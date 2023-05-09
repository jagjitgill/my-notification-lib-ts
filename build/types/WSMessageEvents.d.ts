/**
 * @public
 */
export type ConnectionOpenCallback = (connectionEvent?: any) => Promise<void> | void;
export type ConnectionCloseCallback = (connectionEvent?: any) => Promise<void> | void;
export type ConnectionErrorCallback = (connectionEvent?: any) => Promise<void> | void;
export type ConnectionRetryCallback = (connectionEvent?: any) => Promise<void> | void;
export type MessageReceivedCallback = (connectionEvent?: any) => Promise<void> | void;
export declare class WSMessageEvents {
    private readonly _onConnectionOpen;
    private readonly _onConnectionClose;
    private readonly _onConnectionError;
    private readonly _onConnectionRetry;
    private readonly _onMessageReceived;
    /**
     * @internal
     */
    _raiseOnConnectionOpen(connectionEvent?: any): void;
    /**
     * Add callback: Raised when a WS connection opens.
     */
    addConnectionOpen(cb: ConnectionOpenCallback): () => void;
    /**
     * Add callback: Raised when a WS connection opens.
     */
    removeConnectionOpen(cb: ConnectionOpenCallback): void;
    /**
     * @internal
     */
    _raiseOnConnectionClose(connectionEvent?: any): void;
    /**
     * Add callback: Raised when a WS connection closes.
     */
    addConnectionClose(cb: ConnectionCloseCallback): () => void;
    /**
     * Remove callback: Raised when a WS connection closes.
     */
    removeConnectionClose(cb: ConnectionCloseCallback): void;
    /**
     * @internal
     */
    _raiseOnConnectionError(connectionEvent?: any): void;
    /**
     * Add callback: Raised when a WS connection errors out.
     */
    addConnectionError(cb: ConnectionErrorCallback): () => void;
    /**
     * Remove callback: Raised when a WS connection errors out.
     */
    removeConnectionError(cb: ConnectionErrorCallback): void;
    /**
     * @internal
     */
    _raiseOnConnectionRetry(connectionEvent?: any): void;
    /**
     * Remove callback: Raised when a WS connection is retried.
     */
    addConnectionRetry(cb: ConnectionRetryCallback): () => void;
    /**
     * Remove callback: Raised when a WS connection is retried.
     */
    removeConnectionRetry(cb: ConnectionRetryCallback): void;
    /**
     * @internal
     */
    _raiseOnMessageReceived(message: any): void;
    /**
     * Add callback: Raised when a WS message arrives.
     */
    addMessageReceived(cb: MessageReceivedCallback): () => void;
    /**
     * Remove callback: Raised when a WS message arrives.
     */
    removeMessageReceived(cb: MessageReceivedCallback): void;
}
