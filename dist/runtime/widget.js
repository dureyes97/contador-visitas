System.register(["jimu-core/emotion","jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ },

/***/ "@emotion/react/jsx-runtime"
/*!************************************!*\
  !*** external "jimu-core/emotion" ***!
  \************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/contador-visitas/src/runtime/widget.tsx ***!
  \*************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/** @jsx jsx */

const Lucide = {
    Eye: (props) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", Object.assign({ width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, props, { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: "12", cy: "13", r: "3" })] }))),
    RefreshCw: (props) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", Object.assign({ width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, props, { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M21 3v5h-5" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M8 16H3v5" })] }))),
    TrendingUp: (props) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", Object.assign({ width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, props, { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", { points: "23 6 13.5 15.5 8.5 10.5 1 18" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", { points: "17 6 23 6 23 12" })] })))
};
const estiloContadorPortal = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.css) `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@700;800&display=swap');

  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #1e293b;
  display: flex;
  flex-direction: column;
  background: transparent;
  user-select: none;

  .portal-counter-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 0.75rem;
    padding: 0.9rem 1.1rem;
    box-sizing: border-box;
    box-shadow: 0 4px 12px -2px rgba(34, 45, 93, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04);
    position: relative;
    overflow: hidden;
  }

  /* ── Barra superior con el color institucional #222d5d del Portal ── */
  .portal-brand-stripe {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #222d5d 0%, #1a4d9b 50%, #2563eb 100%);
  }

  /* ── Header ── */
  .portal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.6rem;
    margin-top: 2px;
  }

  .portal-brand-left {
    display: flex;
    align-items: center;
    gap: 0.65rem;
  }

  .portal-logo-img {
    height: 28px;
    max-width: 110px;
    object-fit: contain;
    display: block;
  }

  .portal-title-block {
    display: flex;
    flex-direction: column;
  }

  .portal-sub-tag {
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #1a4d9b;
  }

  .portal-main-heading {
    font-size: 0.82rem;
    font-weight: 700;
    color: #222d5d;
    letter-spacing: -0.01em;
    margin: 0;
    line-height: 1.2;
  }

  .pulse-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background: #ecfdf5;
    border: 1px solid #a7f3d0;
    color: #059669;
    padding: 2px 7px;
    border-radius: 9999px;
    font-size: 0.62rem;
    font-weight: 600;
  }

  .pulse-dot {
    width: 6px;
    height: 6px;
    border-radius: 9999px;
    background: #10b981;
    box-shadow: 0 0 6px #10b981;
    animation: pulseGlow 2s infinite ease-in-out;
  }

  @keyframes pulseGlow {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.35; transform: scale(0.85); }
  }

  /* ── Visualizador de Dígitos Institucional (Brand #222d5d / #1a4d9b) ── */
  .portal-counter-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.6rem 0;
  }

  .digits-display-frame {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0.4rem 0.75rem;
    background: #f8fafc;
    border: 1px solid #cbd5e1;
    border-radius: 0.5rem;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.04);
  }

  .digit-tile {
    width: 26px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.45rem;
    font-weight: 800;
    color: #ffffff;
    background: linear-gradient(180deg, #222d5d 0%, #1a2547 100%);
    border-radius: 0.3rem;
    box-shadow: 0 2px 5px rgba(34, 45, 93, 0.25);
    letter-spacing: 0;
  }

  .counter-sub-caption {
    font-size: 0.68rem;
    color: #64748b;
    margin-top: 0.4rem;
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 600;
  }

  /* ── Footer ── */
  .portal-counter-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding-top: 0.5rem;
    border-top: 1px solid #f1f5f9;
  }

  .sync-status-text {
    font-size: 0.62rem;
    color: #94a3b8;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .btn-refresh-sync {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-size: 0.65rem;
    font-weight: 600;
    padding: 3px 8px;
    border-radius: 0.35rem;
    border: 1px solid #e2e8f0;
    background: #f8fafc;
    color: #475569;
    cursor: pointer;
    transition: all 0.15s ease;
    outline: none;
  }
  .btn-refresh-sync:hover {
    background: #f1f5f9;
    border-color: #cbd5e1;
    color: #1e293b;
  }

  .spin-icon {
    animation: spinRotate 1s linear infinite;
  }

  @keyframes spinRotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
const Widget = (props) => {
    var _a, _b, _c, _d;
    const portalUrl = ((_a = props.config) === null || _a === void 0 ? void 0 : _a.portalUrl) || 'https://eqchoco.gestiondelriesgo.gov.co/portal';
    const itemId = ((_b = props.config) === null || _b === void 0 ? void 0 : _b.itemId) || '4bb0f289f3ef4e5eb2524c5af0c1ad11';
    const widgetTitle = ((_c = props.config) === null || _c === void 0 ? void 0 : _c.widgetTitle) || 'Visitas del Portal';
    const refreshIntervalSec = ((_d = props.config) === null || _d === void 0 ? void 0 : _d.refreshIntervalSec) || 30;
    const [viewsCount, setViewsCount] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(512);
    const [isRefreshing, setIsRefreshing] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const [lastSyncTime, setLastSyncTime] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState('En línea');
    // Obtener estadísticas en tiempo real del ítem del Portal Web
    const fetchPortalStats = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((...args_1) => __awaiter(void 0, [...args_1], void 0, function* (isManual = false) {
        if (isManual)
            setIsRefreshing(true);
        try {
            const res = yield fetch(`${portalUrl}/sharing/rest/content/items/${itemId}?f=json`, {
                cache: 'no-store'
            });
            if (res.ok) {
                const data = yield res.json();
                if (data && typeof data.numViews === 'number') {
                    setViewsCount(data.numViews);
                    const now = new Date();
                    setLastSyncTime(now.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
                }
            }
        }
        catch (err) {
            console.warn('Error sincronizando visitas del portal:', err);
        }
        finally {
            setIsRefreshing(false);
        }
    }), [portalUrl, itemId]);
    // Carga inicial y auto-refresco
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        fetchPortalStats();
        const timer = setInterval(() => {
            fetchPortalStats();
        }, Math.max(10, refreshIntervalSec) * 1000);
        return () => clearInterval(timer);
    }, [fetchPortalStats, refreshIntervalSec]);
    // Formatear los dígitos del número para visualización digital
    const formattedDigits = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => {
        const numStr = String(viewsCount).padStart(5, '0');
        return numStr.split('');
    }, [viewsCount]);
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: estiloContadorPortal, className: "jimu-widget", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "portal-counter-container", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "portal-brand-stripe" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "portal-header", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "portal-brand-left", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: "https://eqchoco.gestiondelriesgo.gov.co/portal/sharing/rest/content/items/90af96c4ec1c46e9b47a691548365763/data", alt: "Logo UNGRD", className: "portal-logo-img", onError: (e) => {
                                        e.target.style.display = 'none';
                                    } }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "portal-title-block", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "portal-sub-tag", children: "UNGRD \u2022 CHOC\u00D3" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { className: "portal-main-heading", children: widgetTitle })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "pulse-badge", title: "Conexi\u00F3n en vivo con ArcGIS Enterprise", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "pulse-dot" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "En vivo" })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "portal-counter-body", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "digits-display-frame", children: formattedDigits.map((d, idx) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "digit-tile", children: d }, idx))) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "counter-sub-caption", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Lucide.Eye, {}), " Total de visualizaciones acumuladas"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "portal-counter-footer", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "sync-status-text", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Lucide.TrendingUp, {}), " Sincronizado: ", lastSyncTime] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { className: "btn-refresh-sync", onClick: () => fetchPortalStats(true), title: "Sincronizar visitas ahora", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: isRefreshing ? 'spin-icon' : '', children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Lucide.RefreshCw, {}) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Actualizar" })] })] })] }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb250YWRvci12aXNpdGFzL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BLDJCOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbkQsZUFBZTtBQUNpRDtBQVloRSxNQUFNLE1BQU0sR0FBRztJQUNiLEdBQUcsRUFBRSxDQUFDLEtBQVcsRUFBRSxFQUFFLENBQUMsQ0FDcEIsd0ZBQUssS0FBSyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsY0FBYyxFQUFDLFdBQVcsRUFBQyxHQUFHLEVBQUMsYUFBYSxFQUFDLE9BQU8sRUFBQyxjQUFjLEVBQUMsT0FBTyxJQUFLLEtBQUssZUFDdEosMEVBQU0sQ0FBQyxFQUFDLDhDQUE4QyxHQUFFLDhFQUFRLEVBQUUsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsR0FBRyxHQUFFLEtBQ25GLENBQ1A7SUFDRCxTQUFTLEVB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LElBQzVDLEVBRVAsNkVBQ0UsU0FBUyxFQUFDLGtCQUFrQixFQUM1QixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQ3JDLEtBQUssRUFBQywyQkFBMkIsYUFFakMsMEVBQU0sU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQzlDLGdFQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUcsR0FDZixFQUNQLG1HQUF1QixJQUNoQixJQUNMLElBRUYsR0FDRixDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlLE1BQU07QUFFYixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvZW1vdGlvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29udGFkb3ItdmlzaXRhcy9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIHR5cGUgQWxsV2lkZ2V0UHJvcHMsIGpzeCwgY3NzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcblxuaW50ZXJmYWNlIFNpdGVTdGF0cyB7XG4gIG51bVZpZXdzOiBudW1iZXJcbiAgdGl0bGU6IHN0cmluZ1xuICBjcmVhdGVkOiBudW1iZXJcbiAgbW9kaWZpZWQ6IG51bWJlclxuICBvd25lcjogc3RyaW5nXG4gIGFjY2Vzczogc3RyaW5nXG59XG5cbmNvbnN0IEx1Y2lkZSA9IHtcbiAgRXllOiAocHJvcHM/OiBhbnkpID0+IChcbiAgICA8c3ZnIHdpZHRoPVwiMTVcIiBoZWlnaHQ9XCIxNVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiB7Li4ucHJvcHN9PlxuICAgICAgPHBhdGggZD1cIk0yIDEyczMtNyAxMC03IDEwIDcgMTAgNy0zIDctMTAgNy0xMC03LTEwLTdaXCIvPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTNcIiByPVwiM1wiLz5cbiAgICA8L3N2Zz5cbiAgKSxcbiAgUmVmcmVzaEN3OiAocHJvcHM/OiBhbnkpID0+IChcbiAgICA8c3ZnIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiB7Li4ucHJvcHN9PlxuICAgICAgPHBhdGggZD1cIk0zIDEyYTkgOSAwIDAgMSA5LTkgOS43NSA5Ljc1IDAgMCAxIDYuNzQgMi43NEwyMSA4XCIvPjxwYXRoIGQ9XCJNMjEgM3Y1aC01XCIvPjxwYXRoIGQ9XCJNMjEgMTJhOSA5IDAgMCAxLTkgOSA5Ljc1IDkuNzUgMCAwIDEtNi43NC0yLjc0TDMgMTZcIi8+PHBhdGggZD1cIk04IDE2SDN2NVwiLz5cbiAgICA8L3N2Zz5cbiAgKSxcbiAgVHJlbmRpbmdVcDogKHByb3BzPzogYW55KSA9PiAoXG4gICAgPHN2ZyB3aWR0aD1cIjEzXCIgaGVpZ2h0PVwiMTNcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgey4uLnByb3BzfT5cbiAgICAgIDxwb2x5bGluZSBwb2ludHM9XCIyMyA2IDEzLjUgMTUuNSA4LjUgMTAuNSAxIDE4XCIvPjxwb2x5bGluZSBwb2ludHM9XCIxNyA2IDIzIDYgMjMgMTJcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuY29uc3QgZXN0aWxvQ29udGFkb3JQb3J0YWwgPSBjc3NgXG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzUwMDs2MDA7NzAwOzgwMCZmYW1pbHk9SmV0QnJhaW5zK01vbm86d2dodEA3MDA7ODAwJmRpc3BsYXk9c3dhcCcpO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMxZTI5M2I7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAucG9ydGFsLWNvdW50ZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbiAgICBwYWRkaW5nOiAwLjlyZW0gMS4xcmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCAtMnB4IHJnYmEoMzQsIDQ1LCA5MywgMC4wOCksIDAgMnB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAvKiDilIDilIAgQmFycmEgc3VwZXJpb3IgY29uIGVsIGNvbG9yIGluc3RpdHVjaW9uYWwgIzIyMmQ1ZCBkZWwgUG9ydGFsIOKUgOKUgCAqL1xuICAucG9ydGFsLWJyYW5kLXN0cmlwZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzIyMmQ1ZCAwJSwgIzFhNGQ5YiA1MCUsICMyNTYzZWIgMTAwJSk7XG4gIH1cblxuICAvKiDilIDilIAgSGVhZGVyIOKUgOKUgCAqL1xuICAucG9ydGFsLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDAuNnJlbTtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gIH1cblxuICAucG9ydGFsLWJyYW5kLWxlZnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNjVyZW07XG4gIH1cblxuICAucG9ydGFsLWxvZ28taW1nIHtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgbWF4LXdpZHRoOiAxMTBweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnBvcnRhbC10aXRsZS1ibG9jayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnBvcnRhbC1zdWItdGFnIHtcbiAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzFhNGQ5YjtcbiAgfVxuXG4gIC5wb3J0YWwtbWFpbi1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDAuODJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzIyMmQ1ZDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgfVxuXG4gIC5wdWxzZS1iYWRnZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZWNmZGY1O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhN2YzZDA7XG4gICAgY29sb3I6ICMwNTk2Njk7XG4gICAgcGFkZGluZzogMnB4IDdweDtcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgZm9udC1zaXplOiAwLjYycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuICAucHVsc2UtZG90IHtcbiAgICB3aWR0aDogNnB4O1xuICAgIGhlaWdodDogNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICBiYWNrZ3JvdW5kOiAjMTBiOTgxO1xuICAgIGJveC1zaGFkb3c6IDAgMCA2cHggIzEwYjk4MTtcbiAgICBhbmltYXRpb246IHB1bHNlR2xvdyAycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgcHVsc2VHbG93IHtcbiAgICAwJSwgMTAwJSB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbiAgICA1MCUgeyBvcGFjaXR5OiAwLjM1OyB0cmFuc2Zvcm06IHNjYWxlKDAuODUpOyB9XG4gIH1cblxuICAvKiDilIDilIAgVmlzdWFsaXphZG9yIGRlIETDrWdpdG9zIEluc3RpdHVjaW9uYWwgKEJyYW5kICMyMjJkNWQgLyAjMWE0ZDliKSDilIDilIAgKi9cbiAgLnBvcnRhbC1jb3VudGVyLWJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMC42cmVtIDA7XG4gIH1cblxuICAuZGlnaXRzLWRpc3BsYXktZnJhbWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDRweDtcbiAgICBwYWRkaW5nOiAwLjRyZW0gMC43NXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICB9XG5cbiAgLmRpZ2l0LXRpbGUge1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGhlaWdodDogMzhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdKZXRCcmFpbnMgTW9ubycsIG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDEuNDVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMjIyZDVkIDAlLCAjMWEyNTQ3IDEwMCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgzNCwgNDUsIDkzLCAwLjI1KTtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgfVxuXG4gIC5jb3VudGVyLXN1Yi1jYXB0aW9uIHtcbiAgICBmb250LXNpemU6IDAuNjhyZW07XG4gICAgY29sb3I6ICM2NDc0OGI7XG4gICAgbWFyZ2luLXRvcDogMC40cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgLyog4pSA4pSAIEZvb3RlciDilIDilIAgKi9cbiAgLnBvcnRhbC1jb3VudGVyLWZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmNWY5O1xuICB9XG5cbiAgLnN5bmMtc3RhdHVzLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMC42MnJlbTtcbiAgICBjb2xvcjogIzk0YTNiODtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA0cHg7XG4gIH1cblxuICAuYnRuLXJlZnJlc2gtc3luYyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDRweDtcbiAgICBmb250LXNpemU6IDAuNjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICAgIGNvbG9yOiAjNDc1NTY5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIC5idG4tcmVmcmVzaC1zeW5jOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICAgIGJvcmRlci1jb2xvcjogI2NiZDVlMTtcbiAgICBjb2xvcjogIzFlMjkzYjtcbiAgfVxuXG4gIC5zcGluLWljb24ge1xuICAgIGFuaW1hdGlvbjogc3BpblJvdGF0ZSAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cblxuICBAa2V5ZnJhbWVzIHNwaW5Sb3RhdGUge1xuICAgIGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICB9XG5gXG5cbmNvbnN0IFdpZGdldCA9IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSA9PiB7XG4gIGNvbnN0IHBvcnRhbFVybCA9IHByb3BzLmNvbmZpZz8ucG9ydGFsVXJsIHx8ICdodHRwczovL2VxY2hvY28uZ2VzdGlvbmRlbHJpZXNnby5nb3YuY28vcG9ydGFsJ1xuICBjb25zdCBpdGVtSWQgPSBwcm9wcy5jb25maWc/Lml0ZW1JZCB8fCAnNGJiMGYyODlmM2VmNGU1ZWIyNTI0YzVhZjBjMWFkMTEnXG4gIGNvbnN0IHdpZGdldFRpdGxlID0gcHJvcHMuY29uZmlnPy53aWRnZXRUaXRsZSB8fCAnVmlzaXRhcyBkZWwgUG9ydGFsJ1xuICBjb25zdCByZWZyZXNoSW50ZXJ2YWxTZWMgPSBwcm9wcy5jb25maWc/LnJlZnJlc2hJbnRlcnZhbFNlYyB8fCAzMFxuXG4gIGNvbnN0IFt2aWV3c0NvdW50LCBzZXRWaWV3c0NvdW50XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oNTEyKVxuICBjb25zdCBbaXNSZWZyZXNoaW5nLCBzZXRJc1JlZnJlc2hpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gIGNvbnN0IFtsYXN0U3luY1RpbWUsIHNldExhc3RTeW5jVGltZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCdFbiBsw61uZWEnKVxuXG4gIC8vIE9idGVuZXIgZXN0YWTDrXN0aWNhcyBlbiB0aWVtcG8gcmVhbCBkZWwgw610ZW0gZGVsIFBvcnRhbCBXZWJcbiAgY29uc3QgZmV0Y2hQb3J0YWxTdGF0cyA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jIChpc01hbnVhbDogYm9vbGVhbiA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKGlzTWFudWFsKSBzZXRJc1JlZnJlc2hpbmcodHJ1ZSlcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwb3J0YWxVcmx9L3NoYXJpbmcvcmVzdC9jb250ZW50L2l0ZW1zLyR7aXRlbUlkfT9mPWpzb25gLCB7XG4gICAgICAgIGNhY2hlOiAnbm8tc3RvcmUnXG4gICAgICB9KVxuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgICAgICBpZiAoZGF0YSAmJiB0eXBlb2YgZGF0YS5udW1WaWV3cyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBzZXRWaWV3c0NvdW50KGRhdGEubnVtVmlld3MpXG4gICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxuICAgICAgICAgIHNldExhc3RTeW5jVGltZShub3cudG9Mb2NhbGVUaW1lU3RyaW5nKCdlcy1DTycsIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0Jywgc2Vjb25kOiAnMi1kaWdpdCcgfSkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUud2FybignRXJyb3Igc2luY3Jvbml6YW5kbyB2aXNpdGFzIGRlbCBwb3J0YWw6JywgZXJyKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc1JlZnJlc2hpbmcoZmFsc2UpXG4gICAgfVxuICB9LCBbcG9ydGFsVXJsLCBpdGVtSWRdKVxuXG4gIC8vIENhcmdhIGluaWNpYWwgeSBhdXRvLXJlZnJlc2NvXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hQb3J0YWxTdGF0cygpXG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBmZXRjaFBvcnRhbFN0YXRzKClcbiAgICB9LCBNYXRoLm1heCgxMCwgcmVmcmVzaEludGVydmFsU2VjKSAqIDEwMDApXG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcilcbiAgfSwgW2ZldGNoUG9ydGFsU3RhdHMsIHJlZnJlc2hJbnRlcnZhbFNlY10pXG5cbiAgLy8gRm9ybWF0ZWFyIGxvcyBkw61naXRvcyBkZWwgbsO6bWVybyBwYXJhIHZpc3VhbGl6YWNpw7NuIGRpZ2l0YWxcbiAgY29uc3QgZm9ybWF0dGVkRGlnaXRzID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgbnVtU3RyID0gU3RyaW5nKHZpZXdzQ291bnQpLnBhZFN0YXJ0KDUsICcwJylcbiAgICByZXR1cm4gbnVtU3RyLnNwbGl0KCcnKVxuICB9LCBbdmlld3NDb3VudF0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17ZXN0aWxvQ29udGFkb3JQb3J0YWx9IGNsYXNzTmFtZT1cImppbXUtd2lkZ2V0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRhbC1jb3VudGVyLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRhbC1icmFuZC1zdHJpcGVcIiAvPlxuXG4gICAgICAgIHsvKiDilIDilIAgRW5jYWJlemFkbyBJbnN0aXR1Y2lvbmFsIEJyYW5kIFVOR1JEIOKUgOKUgCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0YWwtaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0YWwtYnJhbmQtbGVmdFwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2VxY2hvY28uZ2VzdGlvbmRlbHJpZXNnby5nb3YuY28vcG9ydGFsL3NoYXJpbmcvcmVzdC9jb250ZW50L2l0ZW1zLzkwYWY5NmM0ZWMxYzQ2ZTliNDdhNjkxNTQ4MzY1NzYzL2RhdGFcIlxuICAgICAgICAgICAgICBhbHQ9XCJMb2dvIFVOR1JEXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9ydGFsLWxvZ28taW1nXCJcbiAgICAgICAgICAgICAgb25FcnJvcj17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRhbC10aXRsZS1ibG9ja1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3J0YWwtc3ViLXRhZ1wiPlVOR1JEIOKAoiBDSE9Dw5M8L3NwYW4+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwb3J0YWwtbWFpbi1oZWFkaW5nXCI+e3dpZGdldFRpdGxlfTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVsc2UtYmFkZ2VcIiB0aXRsZT1cIkNvbmV4acOzbiBlbiB2aXZvIGNvbiBBcmNHSVMgRW50ZXJwcmlzZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsc2UtZG90XCIgLz5cbiAgICAgICAgICAgIDxzcGFuPkVuIHZpdm88L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiDilIDilIAgVmlzdWFsaXphZG9yIGRlIETDrWdpdG9zIOKUgOKUgCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0YWwtY291bnRlci1ib2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWdpdHMtZGlzcGxheS1mcmFtZVwiPlxuICAgICAgICAgICAge2Zvcm1hdHRlZERpZ2l0cy5tYXAoKGQsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9XCJkaWdpdC10aWxlXCI+XG4gICAgICAgICAgICAgICAge2R9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGVyLXN1Yi1jYXB0aW9uXCI+XG4gICAgICAgICAgICA8THVjaWRlLkV5ZSAvPiBUb3RhbCBkZSB2aXN1YWxpemFjaW9uZXMgYWN1bXVsYWRhc1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7Lyog4pSA4pSAIFBpZSBkZSBtw6l0cmljYXMg4pSA4pSAICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRhbC1jb3VudGVyLWZvb3RlclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN5bmMtc3RhdHVzLXRleHRcIj5cbiAgICAgICAgICAgIDxMdWNpZGUuVHJlbmRpbmdVcCAvPiBTaW5jcm9uaXphZG86IHtsYXN0U3luY1RpbWV9XG4gICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXJlZnJlc2gtc3luY1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmZXRjaFBvcnRhbFN0YXRzKHRydWUpfVxuICAgICAgICAgICAgdGl0bGU9XCJTaW5jcm9uaXphciB2aXNpdGFzIGFob3JhXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2lzUmVmcmVzaGluZyA/ICdzcGluLWljb24nIDogJyd9PlxuICAgICAgICAgICAgICA8THVjaWRlLlJlZnJlc2hDdyAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+QWN0dWFsaXphcjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpZGdldFxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==