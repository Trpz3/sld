import { SLDSymbols } from './SLDSymbols.js';
import './SLDViewer.css';

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
    constructor(container, options = {}) {
        this.container = typeof container === 'string' ? document.getElementById(container) : container;
        if (!this.container) throw new Error('SLDViewer: Container not found.');

        this.config = options.config || { nodes: [], connections: [] };
        this.liveData = options.liveData || {};
        this.options = {
            zoom: 1.0,
            showToolbar: true,
            ...options
        };

        this.state = {
            nodes: JSON.parse(JSON.stringify(this.config.nodes || [])),
            connections: JSON.parse(JSON.stringify(this.config.connections || [])),
            zoom: this.options.zoom,
            isDataLive: !!(options.poll && options.poll.fetch),
            fullscreen: false
        };

        this.pollTimer = null;
        this.initDOM();
        this.render();

        if (this.state.isDataLive) {
            this.startPolling();
        }
    }

    initDOM() {
        this.container.classList.add('sld-viewer-container');
        this.viewerMain = document.createElement('div');
        this.viewerMain.className = 'sld-viewer-main';
        this.viewerMain.innerHTML = `
            <div class="sld-toolbar" style="${this.options.showToolbar ? '' : 'display:none'}">
                <span class="sld-title">SLD Dashboard</span>
                <div class="sld-zoom-controls">
                    <button class="sld-btn sld-zoom-out">-</button>
                    <span class="sld-zoom-level">100%</span>
                    <button class="sld-btn sld-zoom-in">+</button>
                    <button class="sld-btn sld-zoom-reset">Reset</button>
                </div>
                <button class="sld-btn sld-fullscreen">Fullscreen</button>
            </div>
            <div class="sld-canvas-container">
                <svg class="sld-canvas" xmlns="http://www.w3.org/2000/svg" width="2400" height="2400">
                    <defs>
                        <!-- Standard Arrowhead (Target Side) -->
                        <marker id="sld-marker-end" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255,255,255,0.7)" />
                        </marker>
                        <!-- Reversed Arrowhead (Source Side) -->
                        <marker id="sld-marker-start" markerWidth="10" markerHeight="7" refX="1" refY="3.5" orient="auto">
                            <polygon points="10 0, 0 3.5, 10 7" fill="rgba(255,255,255,0.7)" />
                        </marker>
                    </defs>
                    <g class="layer-connections"></g>
                    <g class="layer-nodes"></g>
                </svg>
            </div>
        `;
        this.container.appendChild(this.viewerMain);

        this.canvas = this.viewerMain.querySelector('.sld-canvas');
        this.layerNodes = this.viewerMain.querySelector('.layer-nodes');
        this.layerConnections = this.viewerMain.querySelector('.layer-connections');
        this.canvasContainer = this.viewerMain.querySelector('.sld-canvas-container');
        this.zoomLevelText = this.viewerMain.querySelector('.sld-zoom-level');

        this.bindEvents();
    }

    bindEvents() {
        this.viewerMain.querySelector('.sld-zoom-in').onclick = () => this.updateZoom(this.state.zoom + 0.1);
        this.viewerMain.querySelector('.sld-zoom-out').onclick = () => this.updateZoom(this.state.zoom - 0.1);
        this.viewerMain.querySelector('.sld-zoom-reset').onclick = () => {
            this.updateZoom(1.0);
            this.canvasContainer.scrollLeft = 0;
            this.canvasContainer.scrollTop = 0;
        };
        this.viewerMain.querySelector('.sld-fullscreen').onclick = () => this.toggleFullscreen();

        document.addEventListener('fullscreenchange', () => {
            this.state.fullscreen = !!document.fullscreenElement;
            this.viewerMain.querySelector('.sld-fullscreen').textContent = this.state.fullscreen ? "Exit Fullscreen" : "Fullscreen";
        });
    }

    updateZoom(newZoom) {
        this.state.zoom = Math.max(0.1, Math.min(3, newZoom));
        this.canvas.style.transform = `scale(${this.state.zoom})`;
        if (this.zoomLevelText) {
            this.zoomLevelText.textContent = Math.round(this.state.zoom * 100) + '%';
        }
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            this.viewerMain.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }

    /**
     * Updates the live data and triggers a re-render.
     * @param {Object} newData - New live data object.
     */
    updateData(newData) {
        this.liveData = { ...this.liveData, ...newData };
        this.render();
    }

    render() {
        this.layerNodes.innerHTML = '';
        this.layerConnections.innerHTML = '';

        this.state.connections.forEach(conn => this.drawConnection(conn));
        this.state.nodes.forEach(node => this.drawNode(node));
    }

    drawNode(node) {
        const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g.setAttribute("class", "sld-node-group");
        g.setAttribute("transform", `translate(${node.x}, ${node.y})`);

        const symbolInfo = SLDSymbols.find(s => s.id === node.symbolId);
        if (symbolInfo) {
            const symWrap = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            symWrap.setAttribute("width", node.width);
            symWrap.setAttribute("height", node.height);
            symWrap.setAttribute("viewBox", "0 0 100 100");
            symWrap.classList.add("sld-node-symbol");
            const svgContent = symbolInfo.svg.replace(/<svg[^>]*>/, '').replace(/<\/svg>/, '');
            symWrap.innerHTML = `<g transform="rotate(${node.rotation || 0} 50 50)">${svgContent}</g>`;
            g.appendChild(symWrap);
        }

        // Use node.liveData if it exists in node object, or from our global this.liveData
        const nodeLiveData = this.liveData[node.id] || node.liveData || {};

        if (node.statusRequired !== false) {
            const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            const dotSize = Math.max(2, node.width * 0.05);
            dot.setAttribute("cx", node.width - dotSize - (node.width * 0.05));
            dot.setAttribute("cy", dotSize + (node.height * 0.05));
            dot.setAttribute("r", dotSize);

            const resolvedStatus = nodeLiveData.status || node.status || 'white';
            let color = resolvedStatus;
            
            if (resolvedStatus === 'alarm' || resolvedStatus.includes('red')) { 
                color = '#ef4444'; 
                dot.classList.add('sld-blink'); 
            } else if (resolvedStatus === 'stale') {
                color = '#eab308';
            } else if (resolvedStatus === 'healthy' || resolvedStatus === 'online' || resolvedStatus === 'green') {
                color = '#22c55e';
            } else if (resolvedStatus === 'white') {
                color = '#ffffff';
            }

            dot.setAttribute("fill", color);
            dot.setAttribute("class", `sld-status-indicator ${dot.classList.contains('sld-blink') ? 'sld-blink' : ''}`);
            g.appendChild(dot);
        }

        this.drawSlots(g, node, nodeLiveData);
        this.layerNodes.appendChild(g);
    }

    /**
     * Simple HTML sanitizer to allow only safe formatting tags.
     */
    sanitizeHTML(str) {
        const doc = new DOMParser().parseFromString(str, 'text/html');
        const allowedTags = ['B', 'I', 'U', 'SPAN', 'STRONG', 'SMALL', 'BR', 'EM'];
        
        const clean = (node) => {
            for (let i = node.childNodes.length - 1; i >= 0; i--) {
                const child = node.childNodes[i];
                if (child.nodeType === 1) { // Element
                    if (!allowedTags.includes(child.tagName)) {
                        const text = document.createTextNode(child.textContent);
                        node.replaceChild(text, child);
                    } else {
                        // Clean attributes (only allow style for colors/weight if needed)
                        for (let j = child.attributes.length - 1; j >= 0; j--) {
                            const attr = child.attributes[j];
                            if (attr.name !== 'style') child.removeAttribute(attr.name);
                        }
                        clean(child);
                    }
                }
            }
        };
        clean(doc.body);
        return doc.body.innerHTML;
    }

    drawSlots(g, node, nodeLiveData) {
        const margin = 10;
        const lineHeight = 16;

        const resolveValue = (key) => {
            if (key === 'name' || key === 'label') return node.name;
            if (key === 'id') return node.id;
            if (nodeLiveData[key] !== undefined) return nodeLiveData[key];
            return `[${key}]`;
        };

        const drawSide = (side, keys, baseX, baseY, align, dx, dy) => {
            if (!keys || keys.length === 0) return;

            const sideGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
            sideGroup.setAttribute("class", `sld-side-group sld-side-${side}`);
            
            // Calculate total stack size for centering
            const totalWidth = (keys.length - 1) * dx * lineHeight;
            const totalHeight = (keys.length - 1) * dy * lineHeight;
            
            // Adjust starting point to center the entire stack around (baseX, baseY)
            const startX = baseX - totalWidth / 2;
            const startY = baseY - totalHeight / 2;

            // Handle Rotation around the new visual center
            const rotation = (node.slotRotation && node.slotRotation[side]) || 0;
            if (rotation !== 0) {
                sideGroup.setAttribute("transform", `rotate(${rotation}, ${baseX}, ${baseY})`);
            }

            keys.forEach((key, idx) => {
                const val = resolveValue(key);
                const showKey = !this.options.hideSlotKeys && key !== 'label' && key !== 'name';
                const labelStr = showKey ? `${key.toUpperCase()}: ${val}` : `${val}`;
                const htmlContent = this.sanitizeHTML(labelStr);
                
                // Use foreignObject for HTML support
                const fo = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
                
                const px = startX + dx * idx * lineHeight;
                const py = startY + dy * idx * lineHeight;

                // Center the FO itself around px
                const foWidth = 300; 
                const foHeight = 24; // Increased height to allow CSS flex-centering room

                fo.setAttribute("width", foWidth);
                fo.setAttribute("height", foHeight);
                
                const foX = px - foWidth / 2;
                const foY = py - foHeight / 2 + 1; // +1 nudge for baseline balance

                fo.setAttribute("x", foX);
                fo.setAttribute("y", foY);
                fo.setAttribute("class", "sld-slot-fo");

                fo.innerHTML = `
                    <div xmlns="http://www.w3.org/1999/xhtml" class="sld-slot-wrapper" style="width: ${foWidth}px; display: flex; justify-content: center; align-items: center;">
                        <div class="sld-slot-html">
                            ${htmlContent}
                        </div>
                    </div>
                `;

                sideGroup.appendChild(fo);
            });
            g.appendChild(sideGroup);
        };

        const slots = node.slots || { top: [], right: [], bottom: [], left: [] };
        drawSide('top', slots.top, node.width / 2, -margin - (lineHeight/2), 'middle', 0, -1);
        drawSide('bottom', slots.bottom, node.width / 2, node.height + margin + (lineHeight/2), 'middle', 0, 1);
        drawSide('right', slots.right, node.width + margin + 15, node.height / 2, 'middle', 0, 1);
        drawSide('left', slots.left, -margin - 15, node.height / 2, 'middle', 0, 1);
    }

    drawConnection(conn) {
        const from = this.state.nodes.find(n => n.id === conn.from);
        const to = this.state.nodes.find(n => n.id === conn.to);
        if (!from || !to) return;

        const x1c = from.x + from.width / 2;
        const y1c = from.y + from.height / 2;
        const x2c = to.x + to.width / 2;
        const y2c = to.y + to.height / 2;

        const SYMBOL_OFFSET_X = from.width / 2;
        const SYMBOL_OFFSET_Y = from.height / 2;

        let x1 = x1c, y1 = y1c, x2 = x2c, y2 = y2c;
        let d = "";

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("class", "sld-connection-line");

        if (conn.type === 'custom') {
            // For custom paths, we only offset the start and end of the multi-segment line
            const firstWP = (conn.waypoints && conn.waypoints[0]) || { x: x2c, y: y2c };
            const lastWP = (conn.waypoints && conn.waypoints[conn.waypoints.length - 1]) || { x: x1c, y: y1c };

            // Offset Start
            if (Math.abs(firstWP.x - x1c) > Math.abs(firstWP.y - y1c)) {
                x1 = x1c + (firstWP.x > x1c ? SYMBOL_OFFSET_X : -SYMBOL_OFFSET_X);
            } else {
                y1 = y1c + (firstWP.y > y1c ? SYMBOL_OFFSET_Y : -SYMBOL_OFFSET_Y);
            }

            // Offset End
            if (Math.abs(x2c - lastWP.x) > Math.abs(y2c - lastWP.y)) {
                x2 = x2c + (x2c > lastWP.x ? -SYMBOL_OFFSET_X : SYMBOL_OFFSET_X);
            } else {
                y2 = y2c + (y2c > lastWP.y ? -SYMBOL_OFFSET_Y : SYMBOL_OFFSET_Y);
            }

            d = `M ${x1} ${y1} `;
            if (conn.waypoints) {
                conn.waypoints.forEach(wp => { d += `L ${wp.x} ${wp.y} `; });
            }
            d += `L ${x2} ${y2}`;
        } else {
            const dx = Math.abs(x2c - x1c);
            const dy = Math.abs(y2c - y1c);

            if (dx > dy) {
                // Horizontal first logic
                x1 = x1c + (x2c > x1c ? SYMBOL_OFFSET_X : -SYMBOL_OFFSET_X);
                x2 = x2c + (x2c > x1c ? -SYMBOL_OFFSET_X : SYMBOL_OFFSET_X);
                const midX = x1 + (x2 - x1) / 2;
                d = `M ${x1} ${y1} L ${midX} ${y1} L ${midX} ${y2} L ${x2} ${y2}`;
            } else {
                // Vertical first logic
                y1 = y1c + (y2c > y1c ? SYMBOL_OFFSET_Y : -SYMBOL_OFFSET_Y);
                y2 = y2c + (y2c > y1c ? -SYMBOL_OFFSET_Y : SYMBOL_OFFSET_Y);
                const midY = y1 + (y2 - y1) / 2;
                d = `M ${x1} ${y1} L ${x1} ${midY} L ${x2} ${midY} L ${x2} ${y2}`;
            }
        }

        path.setAttribute("d", d);
        
        const arrow = conn.arrowMode || 'none';
        if (arrow === 'forward' || arrow === 'both') {
            path.setAttribute("marker-end", "url(#sld-marker-end)");
        }
        if (arrow === 'backward' || arrow === 'both') {
            path.setAttribute("marker-start", "url(#sld-marker-start)");
        }

        this.layerConnections.appendChild(path);
    }

    startPolling() {
        if (this.pollTimer) return;
        const interval = (this.options.poll && this.options.poll.interval) || 2000;
        const fetchFn = this.options.poll && this.options.poll.fetch;

        if (!fetchFn) return;

        const loop = async () => {
            try {
                const newData = await fetchFn();
                this.updateData(newData);
            } catch (e) {
                console.error("SLDViewer Polling Error:", e);
            }
            this.pollTimer = setTimeout(loop, interval);
        };
        loop();
    }

    stopPolling() {
        if (this.pollTimer) {
            clearTimeout(this.pollTimer);
            this.pollTimer = null;
        }
    }

    destroy() {
        this.stopPolling();
        this.viewerMain.remove();
        this.container.classList.remove('sld-viewer-container');
    }
}
