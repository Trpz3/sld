// Global State
const appState = {
    mode: 'select', // 'select' | 'connect' | 'connect-custom'
    nodes: [],
    connections: [],
    selectedNodeId: null,
    selectedConnId: null,
    connectFromId: null,
    customWaypoints: [],
    isDataLive: false,
    nextNodeId: 1000,
    nextConnId: 1000,
    zoom: 1.0,
    hideSlotKeys: false,
};

// History State for Undo/Redo
let historyStack = [];
let historyIndex = -1;

function saveHistory() {
    const stateCopy = {
        nodes: JSON.parse(JSON.stringify(appState.nodes)),
        connections: JSON.parse(JSON.stringify(appState.connections)),
        nextNodeId: appState.nextNodeId,
        nextConnId: appState.nextConnId
    };
    if (historyIndex < historyStack.length - 1) {
        historyStack = historyStack.slice(0, historyIndex + 1);
    }
    historyStack.push(stateCopy);
    if (historyStack.length > 50) historyStack.shift();
    else historyIndex++;
}

function undo() {
    if (historyIndex > 0) {
        historyIndex--;
        restoreHistoryState(historyStack[historyIndex]);
    }
}

function redo() {
    if (historyIndex < historyStack.length - 1) {
        historyIndex++;
        restoreHistoryState(historyStack[historyIndex]);
    }
}

function restoreHistoryState(state) {
    if (!state) return;
    appState.nodes = JSON.parse(JSON.stringify(state.nodes));
    appState.connections = JSON.parse(JSON.stringify(state.connections));
    appState.nextConnId = state.nextConnId;
    if (state.hideSlotKeys !== undefined) {
        appState.hideSlotKeys = state.hideSlotKeys;
        chkHideKeys.checked = appState.hideSlotKeys;
    }
    appState.selectedNodeId = null;
    appState.selectedConnId = null;
    updatePropPanel();
    renderAll();
}

function duplicateSelected() {
    if (appState.selectedNodeId) {
        const node = appState.nodes.find(n => n.id === appState.selectedNodeId);
        if (node) {
            const id = `node_${appState.nextNodeId++}`;
            appState.nodes.push({
                ...JSON.parse(JSON.stringify(node)),
                id,
                x: node.x + 20,
                y: node.y + 20
            });
            saveHistory();
            selectNode(id);
        }
    }
}

// DOM References
const paletteList = document.getElementById('palette-list');
const canvas = document.getElementById('sld-canvas');
const layerNodes = document.getElementById('layer-nodes');
const layerConnections = document.getElementById('layer-connections');

const btnSelect = document.getElementById('btn-select');
const btnConnect = document.getElementById('btn-connect');
const btnConnectCustom = document.getElementById('btn-connect-custom');
const btnJson = document.getElementById('btn-json');
const btnSave = document.getElementById('btn-save');
const btnMock = document.getElementById('btn-mock-data');

const panelNoSel = document.getElementById('no-selection-msg');
const panelNode = document.getElementById('node-properties');
const panelConn = document.getElementById('connection-properties');

const propNodeId = document.getElementById('prop-node-id');
const propNodeName = document.getElementById('prop-node-name');
const propNodeStatus = document.getElementById('prop-node-status');
const propNodeSize = document.getElementById('prop-node-size');
const propNodeStatusRequired = document.getElementById('prop-node-status-required');
const sizeValueText = document.getElementById('size-value');
const btnDeleteNode = document.getElementById('btn-delete-node');
const btnRotateNode = document.getElementById('btn-rotate-node');

const slotSide = document.getElementById('slot-side');
const slotKey = document.getElementById('slot-key');
const btnAddSlot = document.getElementById('btn-add-slot');
const slotList = document.getElementById('slot-list');

const propConnId = document.getElementById('prop-conn-id');
const btnDeleteConn = document.getElementById('btn-delete-conn');

const btnZoomIn = document.getElementById('btn-zoom-in');
const btnZoomOut = document.getElementById('btn-zoom-out');
const btnZoomReset = document.getElementById('btn-zoom-reset');
const zoomLevelText = document.getElementById('zoom-level');
const chkHideKeys = document.getElementById('chk-hide-keys');
const propConnArrows = document.getElementById('prop-conn-arrows');

const rotTop = document.getElementById('rot-top');
const rotRight = document.getElementById('rot-right');
const rotBottom = document.getElementById('rot-bottom');
const rotLeft = document.getElementById('rot-left');
const sidebar = document.getElementById('sidebar');
const propertyPanel = document.querySelector('.property-panel');
const btnToggleSidebar = document.getElementById('toggle-sidebar');
const btnToggleProperties = document.getElementById('toggle-properties');

const jsonPreview = document.getElementById('json-export-preview');
const jsonModalOverlay = document.getElementById('json-modal-overlay');
const btnCloseJson = document.getElementById('btn-close-json');
const btnDownloadJson = document.getElementById('btn-download-json');

// Temporary trace element
let tracerNode = null;

// Initialization
function init() {
    loadPalette();
    bindEvents();

    const saved = localStorage.getItem('sld-config');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            appState.nodes = data.nodes || [];
            appState.connections = data.connections || [];
            if (data.hideSlotKeys !== undefined) {
                appState.hideSlotKeys = data.hideSlotKeys;
                chkHideKeys.checked = appState.hideSlotKeys;
            }
            if (state.hideSlotKeys !== undefined) {
                appState.hideSlotKeys = state.hideSlotKeys;
                chkHideKeys.checked = appState.hideSlotKeys;
            }
            appState.nodes.forEach(n => {
                if (n.size === undefined) n.size = 100;
                if (n.statusRequired === undefined) n.statusRequired = true;
                const num = parseInt(n.id.replace('node_', '')) || 0;
                if (num >= appState.nextNodeId) appState.nextNodeId = num + 1;
            });
            appState.connections.forEach(c => {
                const num = parseInt(c.id.replace('conn_', '')) || 0;
                if (num >= appState.nextConnId) appState.nextConnId = num + 1;
            });
        } catch (e) { }
    }

    saveHistory();
    renderAll();
}

function loadPalette() {
    const symbols = window.SLDSymbols || [];
    symbols.forEach(sym => {
        const item = document.createElement('div');
        item.className = 'palette-item';
        item.draggable = true;
        let innerSvg = sym.svg.replace('<svg ', '<svg width="40" height="40" ');
        item.innerHTML = `
            ${innerSvg}
            <span>${sym.name}</span>
        `;

        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', sym.id);
            e.dataTransfer.effectAllowed = 'copy';
        });

        paletteList.appendChild(item);
    });
}

function bindEvents() {
    const btnSearch = document.getElementById('palette-search');
    if (btnSearch) {
        btnSearch.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const items = paletteList.querySelectorAll('.palette-item');
            items.forEach(item => {
                const text = item.querySelector('span').textContent.toLowerCase();
                item.style.display = text.includes(term) ? 'flex' : 'none';
            });
        });
    }

    btnSelect.onclick = () => setMode('select');
    btnConnect.onclick = () => setMode('connect');
    if (btnConnectCustom) btnConnectCustom.onclick = () => setMode('connect-custom');

    const canvasContainer = document.getElementById('canvas-container');
    canvasContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    });

    canvasContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        const rect = canvasContainer.getBoundingClientRect();
        let x = (e.clientX - rect.left + canvasContainer.scrollLeft) / appState.zoom - 50;
        let y = (e.clientY - rect.top + canvasContainer.scrollTop) / appState.zoom - 50;
        x = Math.floor(x / 20) * 20;
        y = Math.floor(y / 20) * 20;

        const symbolId = e.dataTransfer.getData('text/plain');
        if (symbolId) createNode(symbolId, x, y);
    });

    canvasContainer.addEventListener('mousemove', (e) => {
        if (appState.mode === 'connect-custom' && appState.connectFromId) {
            const rect = canvasContainer.getBoundingClientRect();
            let x = (e.clientX - rect.left + canvasContainer.scrollLeft) / appState.zoom;
            let y = (e.clientY - rect.top + canvasContainer.scrollTop) / appState.zoom;

            if (!tracerNode) {
                tracerNode = document.createElementNS("http://www.w3.org/2000/svg", "path");
                tracerNode.setAttribute('class', 'tracer-line');
                layerConnections.appendChild(tracerNode);
            }

            const from = appState.nodes.find(n => n.id === appState.connectFromId);
            if (!from) return;

            const cx = from.x + from.width / 2;
            const cy = from.y + from.height / 2;

            let d = `M ${cx} ${cy} `;
            appState.customWaypoints.forEach(wp => {
                d += `L ${wp.x} ${wp.y} `;
            });
            d += `L ${x} ${y}`;
            tracerNode.setAttribute("d", d);
        }
    });

    canvas.addEventListener('mousedown', (e) => {
        if (e.target === canvas || e.target.id === 'layer-bg') {
            if (appState.mode === 'connect-custom' && appState.connectFromId) {
                const rect = canvasContainer.getBoundingClientRect();
                appState.customWaypoints.push({
                    x: (e.clientX - rect.left + canvasContainer.scrollLeft) / appState.zoom,
                    y: (e.clientY - rect.top + canvasContainer.scrollTop) / appState.zoom
                });
                return;
            }

            selectNode(null);
            selectConnection(null);

            if (appState.mode === 'connect') {
                appState.connectFromId = null;
            }
            if (appState.mode === 'connect-custom') {
                appState.connectFromId = null;
                appState.customWaypoints = [];
                if (tracerNode) { tracerNode.remove(); tracerNode = null; }
            }
        }
    });

    propNodeName.onchange = (e) => {
        const node = getSelectedNode();
        if (node) { node.name = e.target.value; saveHistory(); renderAll(); }
    };
    propNodeStatus.onchange = (e) => {
        const node = getSelectedNode();
        if (node) { node.status = e.target.value; saveHistory(); renderAll(); }
    };
    if (propNodeStatusRequired) {
        propNodeStatusRequired.onchange = (e) => {
            const node = getSelectedNode();
            if (node) { node.statusRequired = e.target.checked; saveHistory(); renderAll(); }
        };
    }
    if (propNodeSize) {
        propNodeSize.oninput = (e) => {
            const val = e.target.value;
            sizeValueText.textContent = val;
            const node = getSelectedNode();
            if (node) {
                node.size = parseInt(val);
                node.width = node.size;
                node.height = node.size;
                saveHistory();
                renderAll();
            }
        };
    }

    const handleRotChange = (side) => {
        return (e) => {
            const node = getSelectedNode();
            if (node) {
                if (!node.slotRotation) node.slotRotation = { top: 0, right: 0, bottom: 0, left: 0 };
                node.slotRotation[side] = parseInt(e.target.value) || 0;
                saveHistory();
                renderAll();
            }
        };
    };

    rotTop.onchange = handleRotChange('top');
    rotRight.onchange = handleRotChange('right');
    rotBottom.onchange = handleRotChange('bottom');
    rotLeft.onchange = handleRotChange('left');

    chkHideKeys.onchange = (e) => {
        appState.hideSlotKeys = e.target.checked;
        saveHistory();
        renderAll();
    };

    propConnArrows.onchange = (e) => {
        const conn = appState.connections.find(c => c.id === appState.selectedConnId);
        if (conn) {
            conn.arrowMode = e.target.value;
            saveHistory();
            renderAll();
        }
    };

    btnDeleteNode.onclick = () => {
        if (appState.selectedNodeId) { deleteNode(appState.selectedNodeId); }
    };
    btnDeleteConn.onclick = () => {
        if (appState.selectedConnId) {
            appState.connections = appState.connections.filter(c => c.id !== appState.selectedConnId);
            selectConnection(null);
            saveHistory();
            renderAll();
        }
    }

    if (btnRotateNode) {
        btnRotateNode.onclick = () => {
            const node = getSelectedNode();
            if (node) {
                node.rotation = ((node.rotation || 0) + 90) % 360;
                saveHistory();
                renderAll();
            }
        };
    }

    btnAddSlot.onclick = () => {
        const node = getSelectedNode();
        if (!node) return;
        const side = slotSide.value;
        const key = slotKey.value.trim();
        if (!key) return;
        if (!node.slots[side].includes(key)) {
            node.slots[side].push(key);
            slotKey.value = '';
            saveHistory();
            updatePropPanel();
            renderAll();
        }
    };

    const updateZoom = (newZoom) => {
        appState.zoom = Math.max(0.2, Math.min(3, newZoom));
        canvas.style.transform = `scale(${appState.zoom})`;
        if (zoomLevelText) zoomLevelText.textContent = Math.round(appState.zoom * 100) + '%';
    };

    if (btnZoomIn) btnZoomIn.onclick = () => updateZoom(appState.zoom + 0.1);
    if (btnZoomOut) btnZoomOut.onclick = () => updateZoom(appState.zoom - 0.1);
    if (btnZoomReset) btnZoomReset.onclick = () => {
        updateZoom(1.0);
        canvasContainer.scrollLeft = 0;
        canvasContainer.scrollTop = 0;
    };

    btnJson.onclick = () => {
        const configStr = JSON.stringify({
            nodes: appState.nodes,
            connections: appState.connections,
            version: "1.0"
        }, null, 2);
        jsonPreview.textContent = configStr;
        jsonModalOverlay.style.display = 'flex';
    };

    btnCloseJson.onclick = () => {
        jsonModalOverlay.style.display = 'none';
    };

    btnDownloadJson.onclick = () => {
        const config = {
            nodes: appState.nodes,
            connections: appState.connections,
            version: "1.0"
        };
        const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `sld-config-${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    // Close on overlay click
    jsonModalOverlay.onclick = (e) => {
        if (e.target === jsonModalOverlay) {
            jsonModalOverlay.style.display = 'none';
        }
    };

    btnSave.onclick = () => {
        const config = { nodes: appState.nodes, connections: appState.connections, version: "1.0" };
        localStorage.setItem('sld-config', JSON.stringify(config));
        alert('Config saved to LocalStorage! You can now use the Viewer.');
    };

    btnMock.onclick = () => {
        appState.isDataLive = !appState.isDataLive;
        btnMock.textContent = appState.isDataLive ? "Stop Live Data" : "Toggle Live Data";
        if (appState.isDataLive) mockDataLoop();
    };

    if (btnToggleSidebar) {
        btnToggleSidebar.onclick = () => {
            sidebar.classList.toggle('collapsed');
        };
    }

    if (btnToggleProperties) {
        btnToggleProperties.onclick = () => {
            propertyPanel.classList.toggle('collapsed');
        };
    }

    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

        if (e.key === 'Delete' || e.key === 'Backspace') {
            if (appState.selectedNodeId) deleteNode(appState.selectedNodeId);
            else if (appState.selectedConnId) {
                appState.connections = appState.connections.filter(c => c.id !== appState.selectedConnId);
                selectConnection(null);
                saveHistory();
                renderAll();
            }
        }

        if (e.key === 'r' || e.key === 'R') {
            const node = getSelectedNode();
            if (node) {
                node.rotation = ((node.rotation || 0) + 90) % 360;
                saveHistory();
                renderAll();
            }
        }

        if (e.ctrlKey || e.metaKey) {
            if (e.key === 'd' || e.key === 'D') { e.preventDefault(); duplicateSelected(); }
            if (e.key === 'z' || e.key === 'Z') {
                e.preventDefault();
                if (e.shiftKey) redo();
                else undo();
            }
            if (e.key === 'y' || e.key === 'Y') { e.preventDefault(); redo(); }
            if (e.key === 'Escape') {
                if (tracerNode) { tracerNode.remove(); tracerNode = null; }
                appState.connectFromId = null;
                appState.customWaypoints = [];
                setMode('select');
            }
        }
    });
}

function setMode(mode) {
    appState.mode = mode;
    appState.connectFromId = null;
    appState.customWaypoints = [];
    if (tracerNode) { tracerNode.remove(); tracerNode = null; }

    btnSelect.style.border = mode === 'select' ? '1px solid var(--accent)' : '';
    btnConnect.style.border = mode === 'connect' ? '1px solid var(--accent)' : '';
    if (btnConnectCustom) btnConnectCustom.style.border = mode === 'connect-custom' ? '1px solid var(--accent)' : '';
}

function createNode(symbolId, x, y) {
    const symbolInfo = (window.SLDSymbols || []).find(s => s.id === symbolId);
    if (!symbolInfo) return;

    const id = `node_${appState.nextNodeId++}`;
    appState.nodes.push({
        id, symbolId, name: symbolInfo.name,
        x, y, width: 100, height: 100,
        size: 100,
        status: 'white',
        statusRequired: true,
        rotation: 0,
        slots: { top: [], right: [], bottom: [], left: [] },
        slotRotation: { top: 0, right: 0, bottom: 0, left: 0 },
        liveData: {}
    });
    saveHistory();
    selectNode(id);
}

function deleteNode(id) {
    appState.nodes = appState.nodes.filter(n => n.id !== id);
    appState.connections = appState.connections.filter(c => c.from !== id && c.to !== id);
    if (appState.selectedNodeId === id) selectNode(null);
    saveHistory();
    renderAll();
}

function selectNode(id) {
    appState.selectedNodeId = id;
    if (id) appState.selectedConnId = null;
    updatePropPanel();
    renderAll();
}

function selectConnection(id) {
    appState.selectedConnId = id;
    if (id) appState.selectedNodeId = null;
    updatePropPanel();
    renderAll();
}

function getSelectedNode() {
    return appState.nodes.find(n => n.id === appState.selectedNodeId);
}

function renderAll() {
    layerNodes.innerHTML = '';
    layerConnections.innerHTML = '';

    appState.connections.forEach(conn => drawConnection(conn));
    appState.nodes.forEach(node => drawNode(node));
}

function drawNode(node) {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", `node-group interactable ${node.id === appState.selectedNodeId ? 'selected' : ''}`);
    g.setAttribute("transform", `translate(${node.x}, ${node.y})`);

    const bounds = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    bounds.setAttribute("class", "bounds");
    bounds.setAttribute("width", node.width);
    bounds.setAttribute("height", node.height);
    bounds.setAttribute("fill", "transparent");
    bounds.setAttribute("stroke", "none");
    g.appendChild(bounds);

    const symbolInfo = (window.SLDSymbols || []).find(s => s.id === node.symbolId);
    if (symbolInfo) {
        const symWrap = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        symWrap.setAttribute("width", node.width);
        symWrap.setAttribute("height", node.height);
        symWrap.setAttribute("viewBox", "0 0 100 100");
        symWrap.classList.add("node-symbol");
        const svgContent = symbolInfo.svg.replace(/<svg[^>]*>/, '').replace(/<\/svg>/, '');
        symWrap.innerHTML = `<g transform="rotate(${node.rotation || 0} 50 50)">${svgContent}</g>`;
        g.appendChild(symWrap);
    }

    if (node.statusRequired !== false) {
        const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        const dotSize = Math.max(2, node.width * 0.05);
        dot.setAttribute("cx", node.width - dotSize - (node.width * 0.02));
        dot.setAttribute("cy", dotSize + (node.height * 0.02));
        dot.setAttribute("r", dotSize);
        const resolvedStatus = appState.isDataLive ? (node.liveData.status || node.status) : node.status;
        let color = resolvedStatus;
        if (resolvedStatus === 'alarm' || resolvedStatus.includes('red')) { color = '#ef4444'; dot.classList.add('blink'); }
        else if (resolvedStatus === 'stale') color = '#eab308';
        else if (resolvedStatus === 'healthy' || resolvedStatus === 'online') color = '#22c55e';
        dot.setAttribute("fill", color);
        dot.setAttribute("class", `status-indicator ${dot.classList.contains('blink') ? 'blink' : ''}`);
        g.appendChild(dot);
    }

    drawSlots(g, node);

    g.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        if (appState.mode === 'connect' || appState.mode === 'connect-custom') {
            if (!appState.connectFromId) {
                appState.connectFromId = node.id;
                appState.customWaypoints = [];
            } else if (appState.connectFromId !== node.id) {
                appState.connections.push({
                    id: `conn_${appState.nextConnId++}`,
                    type: appState.mode === 'connect-custom' ? 'custom' : 'auto',
                    from: appState.connectFromId,
                    to: node.id,
                    waypoints: [...appState.customWaypoints]
                });
                appState.connectFromId = null;
                appState.customWaypoints = [];
                if (tracerNode) { tracerNode.remove(); tracerNode = null; }
                setMode('select');
                saveHistory();
            }
            renderAll();
            return;
        }

        selectNode(node.id);

        let startX = e.clientX;
        let startY = e.clientY;
        const initialX = node.x;
        const initialY = node.y;
        let moved = false;

        const moveHandler = (ev) => {
            moved = true;
            const dx = ev.clientX - startX;
            const dy = ev.clientY - startY;
            node.x = initialX + dx;
            node.y = initialY + dy;
            node.x = Math.floor(node.x / 20) * 20;
            node.y = Math.floor(node.y / 20) * 20;
            renderAll();
        };
        const upHandler = () => {
            if (moved) {
                saveHistory();
                renderAll();
            }
            document.removeEventListener('mousemove', moveHandler);
            document.removeEventListener('mouseup', upHandler);
        };
        document.addEventListener('mousemove', moveHandler);
        document.addEventListener('mouseup', upHandler);
    });

    layerNodes.appendChild(g);
}

function drawSlots(g, node) {
    const margin = 10;
    const lineHeight = 16;

    const resolveData = (key) => {
        if (key === 'name' || key === 'label') return node.name;
        if (key === 'id') return node.id;
        if (appState.isDataLive && node.liveData[key] !== undefined) return node.liveData[key];
        return `[${key}]`;
    };

    const drawSide = (side, keys, baseX, baseY, align, dx, dy) => {
        if (!keys || keys.length === 0) return;

        const sideGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");

        // Calculate total stack size for centering
        const totalWidth = (keys.length - 1) * dx * lineHeight;
        const totalHeight = (keys.length - 1) * dy * lineHeight;

        // Adjust starting point to center the entire stack around (baseX, baseY)
        const startX = baseX - totalWidth / 2;
        const startY = baseY - totalHeight / 2;

        // Apply rotation to the entire side group
        const rotation = (node.slotRotation && node.slotRotation[side]) || 0;
        if (rotation !== 0) {
            sideGroup.setAttribute("transform", `rotate(${rotation}, ${baseX}, ${baseY})`);
        }

        keys.forEach((key, idx) => {
            const textGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
            const val = resolveData(key);

            const showKey = !appState.hideSlotKeys && key !== 'label' && key !== 'name';
            const str = showKey ? `${key.toUpperCase()}: ${val}` : `${val}`;

            const t = document.createElementNS("http://www.w3.org/2000/svg", "text");
            t.setAttribute("class", "slot-text");
            t.setAttribute("text-anchor", "middle");

            const px = startX + dx * idx * lineHeight;
            const py = startY + dy * idx * lineHeight;

            t.setAttribute("x", px);
            t.setAttribute("y", py);
            t.textContent = str;

            const bg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            bg.setAttribute("class", "slot-bg");
            const w = str.length * 7.5;
            const h = lineHeight;
            bg.setAttribute("width", w);
            bg.setAttribute("height", h);

            bg.setAttribute("x", px - w / 2);
            bg.setAttribute("y", py - h + 3);

            textGroup.appendChild(bg);
            textGroup.appendChild(t);
            sideGroup.appendChild(textGroup);
        });
        g.appendChild(sideGroup);
    };

    drawSide('top', node.slots.top, node.width / 2, -margin - (lineHeight / 2), 'middle', 0, -1);
    drawSide('bottom', node.slots.bottom, node.width / 2, node.height + margin + (lineHeight / 2) + 2, 'middle', 0, 1);
    drawSide('right', node.slots.right, node.width + margin + 15, node.height / 2 + 1, 'middle', 0, 1);
    drawSide('left', node.slots.left, -margin - 15, node.height / 2 + 1, 'middle', 0, 1);
}

function drawConnection(conn) {
    const from = appState.nodes.find(n => n.id === conn.from);
    const to = appState.nodes.find(n => n.id === conn.to);
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
    path.setAttribute("class", `connection-line ${conn.id === appState.selectedConnId ? 'selected' : ''}`);

    if (conn.type === 'custom') {
        const firstWP = (conn.waypoints && conn.waypoints[0]) || { x: x2c, y: y2c };
        const lastWP = (conn.waypoints && conn.waypoints[conn.waypoints.length - 1]) || { x: x1c, y: y1c };

        if (Math.abs(firstWP.x - x1c) > Math.abs(firstWP.y - y1c)) {
            x1 = x1c + (firstWP.x > x1c ? SYMBOL_OFFSET_X : -SYMBOL_OFFSET_X);
        } else {
            y1 = y1c + (firstWP.y > y1c ? SYMBOL_OFFSET_Y : -SYMBOL_OFFSET_Y);
        }

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
            x1 = x1c + (x2c > x1c ? SYMBOL_OFFSET_X : -SYMBOL_OFFSET_X);
            x2 = x2c + (x2c > x1c ? -SYMBOL_OFFSET_X : SYMBOL_OFFSET_X);
            const midX = x1 + (x2 - x1) / 2;
            d = `M ${x1} ${y1} L ${midX} ${y1} L ${midX} ${y2} L ${x2} ${y2}`;
        } else {
            y1 = y1c + (y2c > y1c ? SYMBOL_OFFSET_Y : -SYMBOL_OFFSET_Y);
            y2 = y2c + (y2c > y1c ? -SYMBOL_OFFSET_Y : SYMBOL_OFFSET_Y);
            const midY = y1 + (y2 - y1) / 2;
            d = `M ${x1} ${y1} L ${x1} ${midY} L ${x2} ${midY} L ${x2} ${y2}`;
        }
    }

    path.setAttribute("d", d);

    // Handle Arrows
    const arrow = conn.arrowMode || 'none';
    if (arrow === 'forward' || arrow === 'both') {
        path.setAttribute("marker-end", "url(#sld-marker-end)");
    }
    if (arrow === 'backward' || arrow === 'both') {
        path.setAttribute("marker-start", "url(#sld-marker-start)");
    }

    path.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        selectConnection(conn.id);
    });

    layerConnections.appendChild(path);
}

function updatePropPanel() {
    panelNoSel.style.display = 'none';
    panelNode.style.display = 'none';
    panelConn.style.display = 'none';

    if (appState.selectedNodeId) {
        panelNode.style.display = 'block';
        const node = getSelectedNode();
        if (!node) return;

        propNodeId.value = node.id;
        propNodeName.value = node.name;
        propNodeStatus.value = node.status;
        if (propNodeStatusRequired) {
            propNodeStatusRequired.checked = node.statusRequired !== false;
        }
        if (propNodeSize) {
            propNodeSize.value = node.size || 100;
            sizeValueText.textContent = node.size || 100;
        }

        if (!node.slotRotation) node.slotRotation = { top: 0, right: 0, bottom: 0, left: 0 };
        rotTop.value = node.slotRotation.top || 0;
        rotRight.value = node.slotRotation.right || 0;
        rotBottom.value = node.slotRotation.bottom || 0;
        rotLeft.value = node.slotRotation.left || 0;

        slotList.innerHTML = '';
        Object.entries(node.slots).forEach(([side, keys]) => {
            keys.forEach(key => {
                const row = document.createElement('div');
                row.className = 'placeholder-item';
                row.innerHTML = `
                    <span><b>${side.toUpperCase()}</b>: ${key}</span>
                    <button style="background:none; border:none; color:var(--danger); cursor:pointer;">&times;</button>
                `;
                row.querySelector('button').onclick = () => {
                    node.slots[side] = node.slots[side].filter(k => k !== key);
                    saveHistory();
                    updatePropPanel();
                    renderAll();
                };
                slotList.appendChild(row);
            });
        });

    } else if (appState.selectedConnId) {
        panelConn.style.display = 'block';
        propConnId.value = appState.selectedConnId;
        const conn = appState.connections.find(c => c.id === appState.selectedConnId);
        if (conn) {
            propConnArrows.value = conn.arrowMode || 'none';
        }
    } else {
        panelNoSel.style.display = 'block';
    }
}

function mockDataLoop() {
    if (!appState.isDataLive) return;
    appState.nodes.forEach(node => {
        node.liveData = {
            voltage: (220 + Math.random() * 20).toFixed(1) + ' V',
            power: (Math.random() * 50).toFixed(2) + ' kW',
            kwh: (Math.random() * 1000).toFixed(1),
            status: Math.random() > 0.9 ? 'alarm' : (Math.random() > 0.8 ? 'stale' : 'healthy')
        };
    });
    renderAll();
    setTimeout(mockDataLoop, 2000);
}

window.onload = init;
