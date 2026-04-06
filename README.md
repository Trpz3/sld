# ⚡ SLD Designer & Viewer

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.1.0-green.svg)](https://github.com/Trpz3/sld)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Trpz3/sld/pulls)

A high-performance, professional-grade Single Line Diagram (SLD) logic designer and rendering engine. Built with vanilla JavaScript and SVG, designed for electrical engineering, industrial automation, and power systems monitoring.

[**Explore the Live Demo »**](https://your-live-demo-url.com)

---

![SLD Designer Screenshot](image.png)

## 🌟 Key Features

### 🎨 SLD Designer
- **Intuitive Drag-and-Drop**: Easily place symbols from a rich, searchable palette.
- **Smart Connections**: Auto-routing and custom pathing for complex electrical layouts.
- **Live Data Mapping**: Define "slots" on components to map real-time telemetry (voltage, current, status).
- **Responsive Workspace**: Infinite-feel canvas with zoom, pan, and collapsible sidebars for maximum focus.
- **Instant Export**: Download your configuration as a standardized JSON file.

### 👓 SLD Viewer (Production Module)
- **Zero Dependencies**: Lightweight 15KB bundle for seamless integration into any web app.
- **Real-time Synchronization**: Built-in polling and push support for live status indicators and telemetry.
- **Rich Formatting**: Support for HTML-enhanced labels and status colors.
- **Extensible**: Fully customizable SVG symbol library.

## 🚀 Quick Start

### 1. Installation
Clone the repository and install the development dependencies:

```bash
git clone https://github.com/Trpz3/sld.git
cd sld
npm install
```

### 2. Launch Designer
Start the local development server to use the Designer:

```bash
npm run dev
```
Navigate to `http://localhost:5173` to start building your diagram.

### 3. Production Build
Optimize the viewer library for production use:

```bash
npm run build
```
The output will be available in the `dist/` directory.

## 📂 Project Structure

```text
├── css/                # Global designer styles
├── dist/               # Production-ready viewer bundle (CSS + UMD/ESM JS)
├── js/
│   ├── lib/            # Core SLD Viewer source code
│   └── symbols/        # Master SVG symbol definitions
├── index.html          # Main Designer interface
├── viewer.html         # Standalone viewer example
└── README.md
```

## 🛠 Integration Example

Integrating the viewer into your existing dashboard is simple:

```javascript
import { SLDViewer } from './dist/sld-viewer.js';

const viewer = new SLDViewer('sld-container', {
    config: mySavedConfigJson, // The JSON exported from the Designer
    liveData: { "node_1001": { status: "healthy", voltage: "230V" } },
    poll: {
        interval: 5000,
        fetch: async () => {
            const response = await fetch('/api/power-metrics');
            return response.json();
        }
    }
});
```

## 🤝 Contributing

We welcome contributions! Whether it's adding new SVG symbols, fixing bugs, or suggesting features:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Built with ❤️ for the Electrical Engineering Community
</p>
