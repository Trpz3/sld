/**
 * Factory function to create an SLDViewer instance.
 * @param {HTMLElement|string} container - The target DOM element or its ID.
 * @param {Object} options - Configuration options.
 * @returns {SLDViewer}
 */
export function createSLDViewer(container: HTMLElement | string, options: any): SLDViewer;
/**
 * SLDViewer - A reusable Single Line Diagram viewer.
 */
export default class SLDViewer {
    /**
     * @param {HTMLElement|string} container - The target DOM element or its ID.
     * @param {Object} options - Configuration options.
     * @param {Object} options.config - The layout JSON (nodes and connections).
     * @param {Object} [options.liveData] - Initial live values for the nodes.
     * @param {number} [options.zoom=1.0] - Initial zoom level.
     * @param {boolean} [options.showToolbar=true] - Whether to show the top toolbar.
     * @param {Object} [options.poll] - Optional polling configuration.
     * @param {number} [options.poll.interval=2000] - Polling interval in ms.
     * @param {Function} [options.poll.fetch] - Async function that returns new live data.
     */
    constructor(container: HTMLElement | string, options?: {
        config: any;
        liveData?: any;
        zoom?: number;
        showToolbar?: boolean;
        poll?: {
            interval?: number;
            fetch?: Function;
        };
    });
    container: HTMLElement;
    config: any;
    liveData: any;
    options: {
        config: any;
        liveData?: any;
        zoom: number;
        showToolbar: boolean;
        poll?: {
            interval?: number;
            fetch?: Function;
        };
    };
    state: {
        nodes: any;
        connections: any;
        zoom: number;
        isDataLive: boolean;
        fullscreen: boolean;
    };
    pollTimer: number;
    initDOM(): void;
    viewerMain: HTMLDivElement;
    canvas: Element;
    layerNodes: Element;
    layerConnections: Element;
    canvasContainer: Element;
    zoomLevelText: Element;
    bindEvents(): void;
    updateZoom(newZoom: any): void;
    toggleFullscreen(): void;
    /**
     * Updates the live data and triggers a re-render.
     * @param {Object} newData - New live data object.
     */
    updateData(newData: any): void;
    render(): void;
    drawNode(node: any): void;
    /**
     * Simple HTML sanitizer to allow only safe formatting tags.
     */
    sanitizeHTML(str: any): string;
    drawSlots(g: any, node: any, nodeLiveData: any): void;
    drawConnection(conn: any): void;
    startPolling(): void;
    stopPolling(): void;
    destroy(): void;
}
