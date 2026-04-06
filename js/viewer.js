/**
 * Runtime Viewer script - initialized via the SLDViewer library.
 */

function initViewer() {
    const saved = localStorage.getItem('sld-config');
    if (!saved) {
        document.getElementById('viewer-container').innerHTML = `
            <div style="color:white; padding: 40px; font-family: sans-serif; text-align:center;">
                <h3>No configuration found.</h3>
                <p>Please go back to the <a href="index.html" style="color: #3b82f6;">Designer</a> and save a diagram first.</p>
            </div>
        `;
        return;
    }

    try {
        const config = JSON.parse(saved);
        
        // Use the UMD global SLDViewer
        const SLDV = window.SLDViewer.default || window.SLDViewer;
        
        const viewer = new SLDV('viewer-container', {
            config: config,
            poll: {
                interval: 2000,
                fetch: async () => {
                    // Mock polling data with HTML support
                    const updates = {};
                    config.nodes.forEach(node => {
                        updates[node.id] = {
                            voltage: `<b>${(220 + Math.random() * 5).toFixed(1)}</b> V`,
                            status: Math.random() > 0.9 ? 'alarm' : 'online'
                        };
                    });
                    return updates;
                }
            }
        });

    } catch (e) {
        console.error("Error initializing viewer:", e);
    }
}

window.onload = initViewer;
