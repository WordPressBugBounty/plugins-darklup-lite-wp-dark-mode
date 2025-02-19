// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3wBV8":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 11509;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "1cae90a58387c9d0";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _tinycolorMinJs = require("./../node_modules/tinycolor2/dist/tinycolor-min.js");
var _tinycolorMinJsDefault = parcelHelpers.interopDefault(_tinycolorMinJs);
/**
 * Optimization Idea
 * Remove Pro/ Unused function
 * Remove Exclusions
 * Refactor
 */ class Darklup {
    constructor(){
        this.topContents();
        this.setRequiredVariables();
        // if (this.isGutenburg || this.isCustomizer || this.isOxygenBuilder) {
        if (this.isCustomizer || this.isOxygenBuilder) {
            this.htmlElement.style.display = "block";
            return;
        }
        this.addUsersDynamicStyles();
        this.getExcludedElements();
        this.getExcludedBgOverlay();
        this.getAllElements();
        // console.log(this.allElements);
        // this.getExcludedBgOverlay();
        // this.applyDarklupDarkModeToAll();
        // this.handleScrollEvent();
        // this.handleRootVariables();
        // this.htmlElement.style.display = "block";
        // return;
        this.handleRootVariables();
        // this.getAllCSSRules();
        // this.getCDNData();
        if (this.isWpAdmin) this.dashboardDarkMode();
        else this.frontEndDarkMode();
        this.htmlElement.style.display = "block";
    }
    addUsersDynamicStyles() {
        let htmlDarkClass = "html.darkluplite-dark-mode-enabled";
        if (this.isWpAdmin) htmlDarkClass = "html.darkluplite-admin-dark-mode-enabled";
        this.usersDynamicCss = `
      ${htmlDarkClass}  *:not(:is(.darkluplite-dark-ignore, .darkluplite-dark-ignore *)){
        color: var(--darkluplite-dynamic-color) !important;
        border-color: var(--darkluplite-dynamic-border-color) !important;
      }
      ${htmlDarkClass} *:not(:is(.darkluplite-dark-ignore, .darkluplite-dark-ignore *)):before,
      ${htmlDarkClass} *:not(:is(.darkluplite-dark-ignore, .darkluplite-dark-ignore *)):after {
        color: var(--darkluplite-dynamic-sudo-color) !important;
      }
      ${htmlDarkClass} a :not(:is(.darkluplite-dark-ignore, .darkluplite-dark-ignore *)):before,
      ${htmlDarkClass} a *:not(:is(.darkluplite-dark-ignore, .darkluplite-dark-ignore *)):after,
      ${htmlDarkClass}  a *:not(:is(.darkluplite-dark-ignore, .darkluplite-dark-ignore *)),
      ${htmlDarkClass}  a:not(:is(.darkluplite-dark-ignore, .darkluplite-dark-ignore *)){
        color: var(--darkluplite-dynamic-link-color) !important;
      }
      ${htmlDarkClass} a:hover :not(:is(.darkluplite-dark-ignore, .darkluplite-dark-ignore *)):before,
      ${htmlDarkClass} a:hover *:not(:is(.darkluplite-dark-ignore, .darkluplite-dark-ignore *)):after,
      ${htmlDarkClass}  a:hover *:not(:is(.darkluplite-dark-ignore, .darkluplite-dark-ignore *)),
      ${htmlDarkClass}  a:hover:not(:is(.darkluplite-dark-ignore, .darkluplite-dark-ignore *)){
        color: var(--darkluplite-dynamic-link-hover-color) !important;
      }
      ${htmlDarkClass}  button:not(:is(.darkluplite-dark-ignore, .darkluplite-dark-ignore *)){
        color: var(--darkluplite-dynamic-btn-text-color) !important;
      }
    `;
    // console.log(frontendObject);
    // console.log(this.usersDynamicCss);
    // this.usersDynamicCss = this.usersDynamicCss.trim();
    // this.usersDynamicCss = this.usersDynamicCss.replace(/\s+/g, ' ').trim();
    // console.log(this.usersDynamicCss);
    }
    topContents() {
        // console.log('top contents');
        this.isWpAdmin = false;
        this.isWpLogin = false;
        // Top level variables
        this.htmlElement = document.querySelector("html");
        this.bodyElement = document.querySelector("body");
        if (this.bodyElement.classList.contains("wp-admin")) this.isWpAdmin = true;
        if (this.bodyElement.classList.contains("login")) this.isWpLogin = true;
        // Darken Levels
        this.darkenLevel = 75;
        this.brandingDarkenLevel = 10;
        //Image Overlay
        this.imgGrad = `linear-gradient(rgba(0, 0, 0, ${DarklupJs.bg_image_dark_opacity}), rgba(0, 0, 0,${DarklupJs.bg_image_dark_opacity}))`;
        // Box shadow
        this.darklupBoxShadow = "0px 5px 10px rgba(255, 255, 255, 0.04);";
        // Bg overlay
        this.applyBgOverlay = false;
        if (DarklupJs.apply_bg_overlay == "yes") this.applyBgOverlay = true;
        // logos
        this.darklupDarkLogo = frontendObject.darklogo;
        this.darklupLightLogo = frontendObject.lightlogo;
        // Exclude Elements
        if (this.isWpAdmin) this.excludeSelectors = [
            ".button.wp-color-result"
        ];
        else this.excludeSelectors = [];
        // this.excludeSelectors = [".button.wp-color-result"];
        //Background Exclude
        if (this.isWpLogin) this.excludeBgOverlay = [
            ".login h1 a"
        ];
        else this.excludeBgOverlay = [];
    // this.excludeBgOverlay = ['.login h1 a'];
    }
    setRequiredVariables() {
        this.allElements = [];
        this.cssAllSelectors = [];
        this.allAnchors = [];
        this.allButtons = [];
        this.allInputs = [];
        this.allImages = [];
        this.allInlineSvgs = [];
        this.elementsWithText = [];
        this.elementsWithRealBgColor = [];
        this.elementsWithRealBorder = [];
        this.elementsWithBgImage = [];
        this.elementsWithAlphaBg = [];
        this.elementsWithBoxShadow = [];
        // this.isWpAdmin = false;
        this.isGutenburg = false;
        this.isCustomizer = false;
        this.isOxygenBuilder = false;
        this.bgColors = [];
        this.bgVars = [];
        this.colorVars = [];
        this.bgDarkenColors = [];
        this.bgTinyColors = [];
        this.excludedBgOverlays = [];
        this.excludedElements = [];
        this.bgColorsCount = 0;
        this.maxArea = 0;
        // this.htmlElement = document.querySelector("html");
        this.switcherCheckbox = document.querySelector(".switch-trigger");
        // this.switcherFont = document.querySelector(".switch-font-trigger");
        this.switcherCheckboxes = document.querySelectorAll(".switch-trigger");
        this.switchTrigger = ".switch-trigger";
        this.switchWrapper = document.querySelector(".darkluplite-mode-switcher");
        this.switchWrapper2 = document.querySelector("#wp-admin-bar-darkluplite-admin-switch");
        this.switchWrapper3 = document.querySelector(".darkluplite-menu-switch");
        this.switchWrappers = [
            this.switchWrapper,
            this.switchWrapper2,
            this.switchWrapper3
        ];
        this.floatingSwitch = this.switchWrapper?.querySelector(".switch-trigger");
        this.adminSwitch = this.switchWrapper2?.querySelector(".switch-trigger");
        this.menuSwitch = this.switchWrapper3?.querySelector(".switch-trigger");
        this.switches = [
            this.floatingSwitch,
            this.adminSwitch,
            this.menuSwitch
        ];
        this.darkEnabledClass = "darkluplite-dark-mode-enabled";
        this.adminDarkEnabledClass = "darkluplite-admin-dark-mode-enabled";
        // Set Body Width And Primary BG
        if (this.bodyElement.classList.contains("block-editor-page")) this.isGutenburg = true;
        if (this.bodyElement.classList.contains("site-editor-php")) this.isGutenburg = true;
        if (this.bodyElement.classList.contains("wp-customizer")) this.isCustomizer = true;
        if (this.bodyElement.classList.contains("oxygen-builder-body")) this.isOxygenBuilder = true;
        let bodyBg = this.hasBgColor(this.bodyElement);
        let htmlBg = this.hasBgColor(this.htmlElement);
        if (bodyBg) this.primaryBg = bodyBg;
        else if (htmlBg) this.primaryBg = htmlBg;
        else {
            this.primaryBg = "rgb(255, 255, 255)";
            this.bodyElement.classList.add("darklup_bg_0");
        }
    }
    getAllElements() {
        let excludes, selectAll;
        excludes = [
            "head",
            "meta",
            "link",
            "title",
            "style",
            "script",
            ".darklup-mode-switcher",
            ".darklup-mode-switcher *",
            ".darklup-menu-switch",
            ".darklup-menu-switch *",
            ".darklup-switch-preview-inner",
            ".darklup-switch-preview-inner *",
            ".darklup-admin-settings-area .on-off-toggle",
            ".darklup-admin-settings-area .on-off-toggle *",
            ".wp-core-ui .darklup-section-title .button",
            ".darklup-pro-ribbon",
            "#adminmenuwrap",
            "#adminmenuwrap *",
            ".wpc-color-picker--input",
            ".wpc-color-picker--input *",
            ".darklup-single-popup-wrapper .darklup-single-popup",
            ".darklup-main-area .darklup-menu-area ul li a",
            ".darklup-dark-ignore",
            ".darklup-switch-container",
            ".darklup-switch-container *",
            // ".darklup-dark-ignore *",
            // ".darklup-settings-area",
            // "a",
            // "a *",
            // "input",
            // "button",
            // "button *",
            // "select",
            // "textarea",
            // "svg",
            // "img",
            // "i",
            // '.elementor-element-overlay',
            // '.elementor-background-overlay',
            "video",
            "mark",
            "code",
            "pre",
            "ins",
            "option",
            "progress",
            "iframe",
            ".mejs-iframe-overlay",
            "svg *",
            "path",
            "canvas",
            "#wpadminbar",
            "#wpadminbar *",
            "#wpadminbar a",
            "noscript"
        ];
        if (this.excludeSelectors.length > 0) {
            excludes = [
                ...this.excludeSelectors,
                ...excludes
            ];
            this.darkModeIgnoreInheritedBg(this.excludeSelectors);
            this.darkModeIgnoreInheritedColor(this.excludeSelectors);
        }
        selectAll = this.excludeAndSelect(excludes, "html, html *");
        this.allElements = document.querySelectorAll(selectAll);
    }
    applyDarklupDarkModeToAll() {
        for (let element of this.allElements){
            this.handleCommonElement(element);
            this.handleBoxShadow(element);
        }
        this.handleNewBgColors();
    }
    applyDarkModeToDynamicElement(element) {
        let tag = element.tagName?.toLowerCase();
        if (tag == "a") {
            let bgColor = this.hasBgColor(element);
            if (!bgColor) element.classList.add("darklup--link");
        } else if (tag == "button") element.classList.add("darklup--btn");
        else if (tag == "img") element.classList.add("darklup--img");
        else if (tag == "svg") element.classList.add("darklup--inline-svg");
        else if (tag == "input" || tag == "textarea" || tag == "select") element.classList.add("darklup--input");
        else if (tag == "del") element.classList.add("darklup--text");
        else element.classList.add("darklup--observed");
        this.handleCommonElement(element);
    }
    checkRgbColorValues(s) {
        let color = false;
        const parts = s.split(",");
        if (parts.length !== 3) return color;
        const [r, g, b] = parts.map((part)=>parseInt(part));
        if (isNaN(r) || isNaN(g) || isNaN(b)) return color;
        else color = `rgb(${r}, ${g}, ${b})`;
        return color;
    }
    getDarkenColorValues(c) {
        let color = "";
        let darkColor = this.getTinyDarkenBg(c).toRgb();
        color = `${darkColor.r}, ${darkColor.g}, ${darkColor.b}`;
        return color;
    }
    getRootCSSCustomProperties() {
        let cssString = "";
        let darkBg;
        let darkVal;
        for (const stylesheet of document.styleSheets)try {
            for (const rule of stylesheet.cssRules)if (rule.type === CSSRule.STYLE_RULE) {
                let properties = "";
                for (const propertyName of rule.style)if (propertyName.startsWith("--")) {
                    let proValue = rule.style.getPropertyValue(propertyName);
                    let colorValues = this.checkRgbColorValues(proValue);
                    let isColor = (0, _tinycolorMinJsDefault.default)(proValue.trim());
                    darkBg = this.addDarklupWithVars(propertyName, "--darklup-bg");
                    if (isColor.isValid() && !propertyName.includes("darklup") && propertyName !== "") properties += `    ${darkBg}: ${this.getDarkenBg(proValue.trim())};\n`;
                    else if (proValue.includes("url")) properties += `    ${darkBg}: ${proValue};\n`;
                    else if (colorValues) properties += `    ${darkBg}: ${this.getDarkenColorValues(colorValues)};\n`;
                    else if (proValue.includes("var")) {
                        darkVal = this.addDarklupWithVars(proValue, "--darklup-bg");
                        properties += `    ${darkBg}: ${darkVal};\n`;
                    //--------------------------------------------------------------------- Optimization
                    // console.log(propertyName, proValue);
                    // console.log(darkBg, darkVal);
                    }
                }
                if (properties) cssString += `${rule.selectorText} {\n${properties}}\n`;
            }
        } catch (error) {}
        return cssString;
    }
    handleRootVariables() {
        const rootCSSCustomProperties = this.getRootCSSCustomProperties();
        this.addGlobalInlineCSS(rootCSSCustomProperties, "darklup-variables-css");
    // console.log(rootCSSCustomProperties);
    }
    handleCommonElement(element) {
        let BgImage, bgColor;
        BgImage = this.hasBgImage(element);
        if (BgImage) this.elementsWithBgImage.push(element);
        bgColor = this.hasBgColor(element);
        if (bgColor) {
            if (!this.bgColors.includes(bgColor)) {
                this.bgColors.push(bgColor);
                element.classList.add(`darklup_bg_${this.bgColorsCount}`);
                this.bgColorsCount++;
            } else element.classList.add(`darklup_bg_${this.bgColors.indexOf(bgColor)}`);
            // element.dataset.realBgColor = bgColor;
            element.classList.add("darklup_bg");
        }
    }
    getAllCSSRules() {
        const styleSheets = document.styleSheets;
        let cssRules = "body{background-color:#242525;}";
        for(let i = 0; i < styleSheets.length; i++){
            const styleSheet = styleSheets[i];
            if (styleSheet.href === null) {
                let id = styleSheet?.ownerNode?.id;
                if (id.includes("darklup")) continue;
            }
            try {
                const rules = styleSheet.cssRules || styleSheet.rules;
                let element;
                if (rules) for(let j = 0; j < rules.length; j++){
                    const rule = rules[j];
                    let filteredStyle = "";
                    // console.log(rule.cssText);
                    let darkenImg = true;
                    /*************** Do Optimize Exclusion ****************** */ /*************** Do Optimize Exclusion ****************** */ // console.log(this.excludedBgOverlays);
                    if (this.excludeBgOverlay.length > 0) {
                        if (rule.selectorText) {
                            element = document.querySelector(rule.selectorText);
                            if (element) {
                                if (this.excludedBgOverlays.includes(element)) darkenImg = false;
                            }
                        }
                    }
                    // console.log(this.excludeBgOverlay);
                    // console.log(this.excludeSelectors);
                    if (this.excludeSelectors.length > 0) {
                        if (rule.selectorText) {
                            element = document.querySelector(rule.selectorText);
                            if (element) {
                                // if (!allElements.includes(element)) continue;
                                if (this.excludedElements.includes(element)) continue;
                            }
                        }
                    }
                    if (rule.style) {
                        let darkBg;
                        let darkImage;
                        let bgApplied = false;
                        let bgColor = rule.style.backgroundColor;
                        let bgImage = rule.style.backgroundImage;
                        let boxShadow = rule.style.boxShadow;
                        if (boxShadow && boxShadow !== "none") filteredStyle += `box-shadow: ${this.darklupBoxShadow};`;
                        let bg = rule.style.background;
                        if (bg) {
                            if (bg.includes("var")) {
                                darkBg = this.addDarklupWithVars(bg, "--darklup-bg");
                                filteredStyle += `background: ${darkBg} !important;`;
                            } else {
                                let bg2 = (0, _tinycolorMinJsDefault.default)(bg);
                                if (bg2.isValid()) filteredStyle += `background-color: ${this.getDarkenBg(bg)} !important;`;
                            }
                        }
                        if (bgColor) {
                            if (bgColor.includes("var")) {
                                darkBg = this.addDarklupWithVars(bgColor, "--darklup-bg");
                                filteredStyle += `background-color: ${darkBg} !important;`;
                            } else {
                                let bgColor2 = (0, _tinycolorMinJsDefault.default)(bgColor);
                                if (bgColor2.isValid()) filteredStyle += `background-color: ${this.getDarkenBg(bgColor)} !important;`;
                            }
                        }
                        if (bgImage && this.isBgImage(bgImage)) {
                            if (bgImage.includes("var")) darkImage = this.addDarklupWithManyVars(bgImage, "--darklup-bg");
                            else {
                                // Fix broken link from CSS files
                                if (bgImage.startsWith("url(")) {
                                    let imageUrl = bgImage.slice(4, -1).replace(/["']/g, "");
                                    let fullUrl = new URL(imageUrl, styleSheet.href).href;
                                    bgImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${fullUrl})`;
                                } else if (bgImage.includes("url")) {
                                    let urlRegex = /url\(["']?(.*?)["']?\)/g;
                                    bgImage = bgImage.replace(urlRegex, this.replaceUrlWithFullUrl.bind({
                                        styleSheetHref: styleSheet.href
                                    }));
                                }
                                console.log("das asd as das as");
                                if (darkenImg) darkImage = this.getDarkenBgImage(bgImage);
                            }
                            if (darkenImg && darkImage) {
                                filteredStyle += `background-image: ${darkImage} !important;`;
                                bgApplied = true;
                            }
                        }
                    }
                    if (filteredStyle.length > 0) {
                        if (rule.selectorText.includes(",")) {
                            const splitStr = rule.selectorText.split(", ");
                            const modifiedStr = splitStr.map((s)=>s + ":not(.darkluplite-dark-ignore)").join(", ");
                            cssRules += `${modifiedStr} {${filteredStyle}}\n`;
                        } else cssRules += `${rule.selectorText}:not(.darkluplite-dark-ignore) {${filteredStyle}}\n`;
                    }
                }
            } catch (e) {}
        }
        // console.log(cssRules);
        // console.log(this.cssAllSelectors);
        cssRules += this.usersDynamicCss;
        return cssRules;
    // console.log(bgRules);
    // console.log(this.bgVars);
    // console.log(this.colorVars);
    // this.addGlobalInlineCSS(cssRules);
    }
    getExcludedBgOverlay() {
        if (this.excludeBgOverlay.length > 0) this.excludeBgOverlay.forEach((e)=>{
            let thisElement = document.querySelectorAll(e);
            this.excludedBgOverlays = [
                ...thisElement,
                ...this.excludedBgOverlays
            ];
        });
    }
    getExcludedElements() {
        if (this.excludeSelectors.length > 0) this.excludeSelectors.forEach((e)=>{
            let thisElement = document.querySelectorAll(e);
            this.excludedElements = [
                ...thisElement,
                ...this.excludedElements
            ];
        });
        this.excludedElements.forEach((e)=>{
            e.classList.add("darkluplite-dark-ignore");
        });
    }
    replaceUrlWithFullUrl(match, p1, offset, string) {
        let fullUrl = new URL(p1, this.styleSheetHref).href;
        return `url(${fullUrl})`;
    }
    capitalize(s) {
        return s[0].toUpperCase() + s.slice(1);
    }
    addGlobalInlineCSS(cssRules, id = "darklup-global-css") {
        const darklupStyle = document.createElement("style");
        darklupStyle.setAttribute("id", id);
        darklupStyle.textContent = cssRules;
        document.head.appendChild(darklupStyle);
    }
    removeGlobalInlineCSS(id = "darklup-global-css") {
        const darklupStyle = document.getElementById("darklup-global-css");
        darklupStyle.remove();
    }
    addDarklupWithVars(originalString, textToInsert) {
        return originalString.replace("--", `${textToInsert}--`);
    }
    addDarklupWithManyVars(originalString, textToInsert) {
        return originalString.replace(/(var\()\s*--/g, "$1--darklup-bg--");
    }
    isRealColor(color) {
        let isRealColor = color !== "rgba(0, 0, 0, 0)" && color !== "transparent" && color !== "inherit" && color !== "initial";
        // let isRealColor = color !== "rgba(0, 0, 0, 0)" && color !== "transparent" && color !== "inherit" && color !== "initial" && color !== "none" && color !== "none transparent" && color !== "0px 0px";
        if (isRealColor) {
            // if (color.includes("var")) {
            //   return color;
            // }
            if (color.includes("rgba")) {
                let alphaValue;
                alphaValue = this.getRgbaAlpha(color);
                if (alphaValue && alphaValue == 0) return false;
            }
            return color;
        } else return false;
    }
    handleNewBgColors() {
        this.bgColors.forEach((c)=>{
            this.bgDarkenColors.push(this.getDarkenBg(c));
            this.bgDarkenColors.push(this.getDarkenBg(c));
        });
    }
    getDarkenBg(c) {
        let darkBg = (0, _tinycolorMinJsDefault.default)(c);
        if (darkBg.getLuminance() * 10 > 4) darkBg = darkBg.darken(this.darkenLevel).toRgbString();
        else darkBg = darkBg.darken(this.brandingDarkenLevel).toRgbString();
        return darkBg;
    }
    getTinyDarkenBg(c) {
        let darkBg = (0, _tinycolorMinJsDefault.default)(c);
        if (darkBg.getLuminance() * 10 > 4) darkBg = darkBg.darken(this.darkenLevel);
        else darkBg = darkBg.darken(this.brandingDarkenLevel);
        return darkBg;
    }
    addInlineCSS() {
        const darklupStyle = document.createElement("style");
        darklupStyle.setAttribute("id", "darklup-inline-css");
        let darklupCSS = "";
        this.bgDarkenColors.forEach((c, i)=>{
            darklupCSS += `.darklup_bg_${i}{background-color: ${c} !important;}`;
        });
        darklupStyle.textContent = darklupCSS;
        document.head.appendChild(darklupStyle);
    }
    removeInlineCSS() {
        let darklupStyle = document.getElementById("darklup-inline-css");
        if (darklupStyle) darklupStyle.parentNode.removeChild(darklupStyle);
    }
    handleBoxShadow(element) {
        let boxShadow = getComputedStyle(element).boxShadow;
        if (boxShadow !== "none") {
            this.elementsWithBoxShadow.push(element);
            element.classList.add("wpc--darklup-box-shadow");
            let bgColor = this.hasBgColor(element);
            if (!bgColor) element.classList.add("darklup-non-bg-box-shadow");
        }
    }
    addDarkModeIgnoreClass(excludes) {
        console.log(excludes);
        if (excludes.length > 0) excludes.forEach((e)=>{
            // thisElement = document.querySelector(e);
            // e.classList?.add("darklup-dark-ignore");
            document.querySelector(e)?.classList.add("darklup-dark-ignore");
        });
    }
    darkModeIgnoreInheritedBg(excludes) {
        if (excludes.length > 0) excludes.forEach((e)=>{
            if (!e.includes("*")) {
                let elements = document.querySelectorAll(e);
                if (elements) elements.forEach((element)=>{
                    if (!this.hasBgColor(element)) {
                        let inheritedBg = this.getCloseParentBg(element);
                        element.dataset.inheritedBg = inheritedBg;
                    }
                });
            }
        });
    }
    darkModeIgnoreInheritedColor(excludes) {
        this.excludedElements.forEach((element)=>{
            if (this.hasOwnText(element)) {
                if (!this.hasOwnColor(element)) {
                    let inheritedColor = this.getCloseParentColor(element);
                    element.dataset.inheritedColor = inheritedColor;
                }
            }
        });
    }
    handleDarklupExcluded() {
        let allExcluded = document.querySelectorAll(".darkluplite-dark-ignore");
        allExcluded.forEach((e)=>{
            e.style.backgroundColor = e.dataset.inheritedBg;
            e.style.color = e.dataset.inheritedColor;
        });
    }
    dashboardDarkMode() {
        this.dashboardWindowOnLoad();
        this.dashboardDarkModeSwitchEvent();
        this.windowOnLoaded();
    }
    frontEndDarkMode() {
        if (typeof darklupPageExcluded == "undefined") {
            this.prevWindowOnLoad();
            this.prevDarkModeSwitchEvent();
            this.fontSwitchEvent();
            this.prevHandleKeyShortcut();
            this.windowOnLoaded();
            this.prevHandleOSDark();
        }
    }
    dashboardWindowOnLoad() {
        let adminDarkMode = this.isAdminDarkModeEnabled();
        if (adminDarkMode) {
            this.enableAdminDarkMode();
            this.addGlobalInlineCSS(this.getAllCSSRules());
        }
    }
    prevWindowOnLoad() {
        if (this.isActiveDarkMode()) {
            this.enableDarkMode();
            this.addGlobalInlineCSS(this.getAllCSSRules());
        }
    }
    isActiveDarkMode() {
        let darkModeActivity = false;
        let lightOnDefaultDarkMode = localStorage.getItem("lightOnDefaultDarkMode");
        let lightOnOSDarkChecked = localStorage.getItem("lightOnOSDarkChecked");
        let lightOnTimeBasedDarkMode = localStorage.getItem("lightOnTimeBasedDarkMode");
        let defaultDarkMode = false;
        if (typeof isDefaultDarkModeEnabled !== "undefined") defaultDarkMode = isDefaultDarkModeEnabled;
        let OSDarkMode = false;
        if (typeof isOSDarkModeEnabled !== "undefined") OSDarkMode = isOSDarkModeEnabled;
        let darkMode = this.isDarkModeEnabled();
        if (darkMode) darkModeActivity = true;
        else if (defaultDarkMode && !lightOnDefaultDarkMode) darkModeActivity = true;
        else if (OSDarkMode && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && !lightOnOSDarkChecked) darkModeActivity = true;
        else if (this.isActiveTimeBasedDarkMode() && !lightOnTimeBasedDarkMode) darkModeActivity = true;
        return darkModeActivity;
    }
    isActiveTimeBasedDarkMode() {
        let darkModeActivity = false;
        if (frontendObject.time_based_mode_active == "yes") {
            let startTime = this.createDateObject(frontendObject.time_based_mode_start_time);
            let endTime = this.createDateObject(frontendObject.time_based_mode_end_time);
            let currentTime = new Date();
            // console.log(currentTime, startTime, endTime);
            currentTime = Date.parse(currentTime) / 1000;
            startTime = Date.parse(startTime) / 1000;
            endTime = Date.parse(endTime) / 1000;
            if (startTime > endTime) {
                if (currentTime <= endTime) darkModeActivity = true;
                endTime += 86400;
            }
            if (currentTime >= startTime && currentTime <= endTime) darkModeActivity = true;
        // console.log(currentTime, startTime, endTime, darkModeActivity);
        }
        return darkModeActivity;
    }
    createDateObject(timeString) {
        // Split the time string into hour and minute components
        var parts = timeString.split(":");
        var hours = parseInt(parts[0]);
        var minutes = parseInt(parts[1]);
        // Create a new Date object with today's date and the specified time
        var now = new Date();
        var dateObject = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
        return dateObject;
    }
    dashboardDarkModeSwitchEvent() {
        this.switchWrappers.forEach((s)=>{
            s?.addEventListener("click", (e)=>{
                if (e.target.classList.contains("switch-trigger")) {
                    let thisTrigger = e.target;
                    if (thisTrigger.checked) {
                        this.activateAdminDarkMode();
                        this.addGlobalInlineCSS(this.getAllCSSRules());
                    } else {
                        this.deactivateAdminDarkMode();
                        this.removeGlobalInlineCSS();
                    }
                }
            });
        });
    }
    prevDarkModeSwitchEvent() {
        this.switchWrappers.forEach((s)=>{
            s?.addEventListener("click", (e)=>{
                if (e.target.classList.contains("switch-trigger")) {
                    let thisTrigger = e.target;
                    if (thisTrigger.checked) {
                        this.activateDarkMode();
                        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) localStorage.removeItem("lightOnOSDarkChecked");
                        if (this.switchWrapper.contains(thisTrigger)) {
                            if (this.menuSwitch) this.menuSwitch.checked = true;
                        } else if (this.floatingSwitch) this.floatingSwitch.checked = true;
                    } else {
                        this.deactivateDarkMode();
                        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) localStorage.setItem("lightOnOSDarkChecked", true);
                        if (isDefaultDarkModeEnabled) localStorage.setItem("lightOnDefaultDarkMode", true);
                        if (frontendObject.time_based_mode_active) localStorage.setItem("lightOnTimeBasedDarkMode", true);
                        if (this.switchWrapper.contains(thisTrigger)) {
                            if (this.menuSwitch) this.menuSwitch.checked = false;
                        } else if (this.floatingSwitch) this.floatingSwitch.checked = false;
                    }
                }
            });
        });
    }
    fontSwitchEvent() {
        const switchFontTrigger = document.querySelector(".switch-font-trigger");
        switchFontTrigger?.addEventListener("click", ()=>{
            this.htmlElement.classList.toggle("darklup-font-mode-enabled");
        });
    }
    prevHandleOSDark() {
        if (typeof isOSDarkModeEnabled == "undefined") return;
        if (isOSDarkModeEnabled) {
            let lightOnOSDarkChecked = localStorage.getItem("lightOnOSDarkChecked");
            window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e)=>{
                const newColorScheme = e.matches ? "dark" : "light";
                if (newColorScheme === "dark") {
                    if (!lightOnOSDarkChecked) this.activateDarkMode();
                } else this.deactivateDarkMode();
            });
        }
    }
    prevHandleKeyShortcut() {
        if (typeof isKeyShortDarkModeEnabled == "undefined") return;
        if (isKeyShortDarkModeEnabled) {
            let ctrlDown = false;
            document.addEventListener("keydown", (e)=>{
                if (e.which === 17) ctrlDown = true;
            });
            document.addEventListener("keyup", (e)=>{
                if (e.which === 17) ctrlDown = false;
            });
            document.addEventListener("keydown", (event)=>{
                if (ctrlDown && event.altKey && event.which === 68) {
                    let darkMode = this.isDarkModeEnabled();
                    if (darkMode) this.deactivateDarkMode();
                    else this.activateDarkMode();
                }
            });
        }
    }
    activateDarkMode() {
        this.saveDarkModeStatus();
        this.enableDarkMode();
        this.addGlobalInlineCSS(this.getAllCSSRules());
    }
    deactivateDarkMode() {
        this.removeDarkModeStatus();
        this.disableDarkMode();
        this.removeGlobalInlineCSS();
    }
    activateAdminDarkMode() {
        this.saveAdminDarkModeStatus();
        this.enableAdminDarkMode();
    }
    deactivateAdminDarkMode() {
        this.removeAdminDarkModeStatus();
        this.disableAdminDarkMode();
    }
    saveDarkModeStatus() {
        localStorage.setItem("darklupModeEnabled", this.darkEnabledClass);
        localStorage.setItem("triggerCheked", "checked");
    }
    removeDarkModeStatus() {
        localStorage.removeItem("darklupModeEnabled");
        localStorage.removeItem("triggerCheked");
    }
    saveAdminDarkModeStatus() {
        localStorage.setItem("adminDarklupModeEnabled", this.darkEnabledClass);
        localStorage.setItem("adminTriggerChecked", "checked");
    }
    removeAdminDarkModeStatus() {
        localStorage.removeItem("adminDarklupModeEnabled");
        localStorage.removeItem("adminTriggerChecked");
    }
    disableDarkMedia() {
        if (typeof frontendObject == "undefined") return;
        const darkLogo = document.querySelector('[src="' + this.darklupDarkLogo + '"]');
        if (darkLogo) {
            darkLogo.src = this.darklupLightLogo;
            darkLogo.srcset = this.darklupLightLogo;
        }
        frontendObject.darkimages.forEach(function(item) {
            const darkImg = document.querySelector('[src="' + item[1] + '"]');
            if (darkImg) {
                darkImg.src = item[0];
                darkImg.srcset = item[0];
            }
        });
    }
    enableDarkMedia() {
        if (typeof frontendObject == "undefined") return;
        var lightLogo = document.querySelector('[src="' + this.darklupLightLogo + '"]');
        if (lightLogo) {
            lightLogo.src = this.darklupDarkLogo;
            lightLogo.srcset = this.darklupDarkLogo;
        }
        frontendObject.darkimages?.forEach(function(item) {
            var lightImg = document.querySelector('[src="' + item[0] + '"]');
            if (lightImg) {
                lightImg.src = item[1];
                lightImg.srcset = item[1];
            }
        });
    }
    enableDarkMode() {
        this.htmlElement.classList.add(this.darkEnabledClass);
        this.applyDynamicStyles();
        this.switches.forEach((s)=>{
            if (s) s.checked = true;
        });
    }
    disableDarkMode() {
        this.htmlElement.classList.remove(this.darkEnabledClass);
        this.resetDynamicStyles();
        this.switches.forEach((s)=>{
            if (s) s.checked = false;
        });
    }
    enableAdminDarkMode() {
        this.htmlElement.classList.add(this.adminDarkEnabledClass);
        this.applyDynamicStyles();
        this.switches.forEach((s)=>{
            if (s) s.checked = true;
        });
        let darkIcon = document.querySelectorAll(".admin-dark-icon");
        let lightIcon = document.querySelectorAll(".admin-light-icon");
        darkIcon.forEach((i)=>{
            i.style.display = "block";
        });
        lightIcon.forEach((i)=>{
            i.style.display = "none";
        });
    }
    disableAdminDarkMode() {
        this.htmlElement.classList.remove(this.adminDarkEnabledClass);
        this.resetDynamicStyles();
        this.switches.forEach((s)=>{
            if (s) s.checked = false;
        });
        let darkIcon = document.querySelectorAll(".admin-dark-icon");
        let lightIcon = document.querySelectorAll(".admin-light-icon");
        darkIcon.forEach((i)=>{
            i.style.display = "none";
        });
        lightIcon.forEach((i)=>{
            i.style.display = "block";
        });
    }
    // removed, may need for dashboard support
    dynamicSwitchStyle() {
        if (this.isWpAdmin) {
            let adminDarkMode = this.isAdminDarkModeEnabled();
            if (adminDarkMode) this.applyDynamicStyles();
            else this.resetDynamicStyles();
        } else {
            let darkMode = this.isDarkModeEnabled();
            if (darkMode) this.applyDynamicStyles();
            else this.resetDynamicStyles();
        }
    }
    documentOnReady() {
        console.log("Document Ready");
        document.addEventListener("DOMContentLoaded", ()=>{});
    }
    windowOnLoaded() {
        window.addEventListener("load", ()=>{
            this.handleDynamicContents();
        });
    }
    applyBoxShadow(e) {
        let boxShadow = getComputedStyle(e).boxShadow;
        let newShadow = this.makeDarkenString(boxShadow);
        if (newShadow) {
            e.dataset.boxshadow = boxShadow;
            e.style.setProperty("box-shadow", newShadow, "important");
        }
    }
    handleOsDarkMode() {
        if (isOSDarkModeEnabled) {
            let WpcFrontEndSwitcherClicked = localStorage.getItem("WpcFrontEndSwitcherClicked");
            if (!WpcFrontEndSwitcherClicked) window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e)=>{
                const newColorScheme = e.matches ? "dark" : "light";
                if (newColorScheme === "dark") this.applyDynamicStyles();
                else this.resetDynamicStyles();
            });
        }
    }
    activateSwitches() {
        if (this.isWpAdmin) {
            let adminDarkMode = this.isAdminDarkModeEnabled();
            if (adminDarkMode) this.switches.forEach((s)=>{
                if (s) s.checked = true;
            });
        } else if (this.isActiveDarkMode()) this.switches.forEach((s)=>{
            if (s) s.checked = true;
        });
    }
    getParentBg(element) {
        let parentBg = "primary";
        const closeBg = element.closest(".darklup--bg-applied");
        if (closeBg) {
            if (closeBg.classList.contains("darklup--bg")) parentBg = "primary";
            else if (closeBg.classList.contains("darklup--secondary-bg")) parentBg = "secondary";
            else if (closeBg.classList.contains("darklup--tertiary-bg")) parentBg = "tertiary";
        }
        return parentBg;
    }
    getCloseParentBg(element) {
        let parent = element.parentNode;
        let parentBg = false;
        while(parent){
            let thisParentBg = this.hasBgColor(parent);
            if (thisParentBg) {
                parentBg = thisParentBg;
                break;
            // return parentBg;
            }
            parent = parent.parentNode;
        }
        return parentBg;
    }
    getCloseParentColor(element) {
        let parent = element.parentNode;
        let parentColor = false;
        while(parent){
            let thisParentColor = this.hasOwnColor(parent);
            if (thisParentColor) {
                parentColor = thisParentColor;
                break;
            // return parentColor;
            }
            parent = parent.parentNode;
        }
        return parentColor;
    }
    parentHasTertiary(element) {
        let hasTertiary = false;
        let closeBg = element.closest(".darklup--bg-applied");
        if (closeBg) {
            if (closeBg.classList.contains("darklup--tertiary-bg")) hasTertiary = true;
        }
        return hasTertiary;
    }
    hasBorderWidth(e) {
        let borderTopWidth, borderRightWidth, borderBottomWidth, borderLeftWidth;
        let style = window.getComputedStyle(e);
        borderTopWidth = parseFloat(style.getPropertyValue("border-top-width"));
        borderRightWidth = parseFloat(style.getPropertyValue("border-right-width"));
        borderBottomWidth = parseFloat(style.getPropertyValue("border-bottom-width"));
        borderLeftWidth = parseFloat(style.getPropertyValue("border-left-width"));
        if (borderTopWidth > 0 || borderRightWidth > 0 || borderBottomWidth > 0 || borderLeftWidth > 0) return true;
        else return false;
    }
    hasOwnBgColor(e) {
        const computedStyle = window.getComputedStyle(e);
        const color = computedStyle.backgroundColor;
        if (color !== "rgba(0, 0, 0, 0)" && color !== "transparent") {
            const parentElement = e.parentElement;
            const parentComputedStyle = parentElement ? window.getComputedStyle(parentElement) : null;
            const parentColor = parentComputedStyle ? parentComputedStyle.backgroundColor : null;
            if (color !== parentColor) return color;
            else return false;
        } else return false;
    }
    hasBgColor(e) {
        let style = window.getComputedStyle(e);
        let bgColor = style.getPropertyValue("background-color");
        let isColored = bgColor !== "rgba(0, 0, 0, 0)" && bgColor !== "transparent" && bgColor !== "inherit";
        if (isColored) {
            if (bgColor.includes("rgba")) {
                let alphaValue;
                alphaValue = this.getRgbaAlpha(bgColor);
                if (alphaValue && alphaValue == 0) return false;
            }
            return bgColor;
        } else return false;
    }
    hasColor(e) {
        let style = window.getComputedStyle(e);
        let color = style.color;
        const parentElement = e.parentElement;
        const parentComputedStyle = parentElement ? window.getComputedStyle(parentElement) : null;
        const parentColor = parentComputedStyle ? parentComputedStyle.color : null;
        if (color == parentColor) return false;
        // if (color !== "rgba(0, 0, 0, 1)" && color !== "black") {
        if (color !== "rgba(0, 0, 0, 0)" && color !== "transparent") return color;
        else return false;
    }
    hasOwnColor(e) {
        const computedStyle = window.getComputedStyle(e);
        const color = computedStyle.color;
        if (color !== "rgba(0, 0, 0, 0)" && color !== "transparent") {
            const parentElement = e.parentElement;
            const parentComputedStyle = parentElement ? window.getComputedStyle(parentElement) : null;
            const parentColor = parentComputedStyle ? parentComputedStyle.color : null;
            if (color !== parentColor) return color;
            else return false;
        } else return false;
    }
    hasOwnText(e) {
        let txtVal;
        txtVal = e.childNodes[0]?.nodeValue?.trim();
        if (!txtVal) txtVal = e.childNodes[e.childNodes.length - 1]?.nodeValue?.trim();
        if (txtVal !== "" && typeof txtVal !== "undefined" && txtVal !== "inherit") return true;
        else return false;
    }
    getRgbaAlpha(color) {
        let alphaValue = false;
        let rgbaMatch = color.match(/rgba?\((\d{1,3}), (\d{1,3}), (\d{1,3}),? ?([\d\.]*)?\)/);
        if (rgbaMatch) alphaValue = rgbaMatch[4] ? rgbaMatch[4] : false;
        return alphaValue;
    }
    hasAlphaBgColor(e) {
        let style = window.getComputedStyle(e);
        let bgColor = style.getPropertyValue("background-color");
        let rgbaMatch = bgColor.match(/rgba?\((\d{1,3}), (\d{1,3}), (\d{1,3}),? ?([\d\.]*)?\)/);
        let alphaValue = false;
        if (rgbaMatch) alphaValue = rgbaMatch[4] ? parseFloat(rgbaMatch[4]) : false;
        return alphaValue;
    }
    getBgColor(e) {
        let style = window.getComputedStyle(e);
        let appliedBgColor = style.getPropertyValue("background-color");
        return appliedBgColor;
    }
    applyAlphaBgColor(e) {
        let alphaValue = this.hasAlphaBgColor(e);
        if (alphaValue) {
            let newBg = DarklupJs.secondary_bg;
            let style = window.getComputedStyle(e);
            let bgColor = style.getPropertyValue("background-color");
            e.dataset.alphabg = bgColor;
            let alphaBg = newBg.replace(")", `, ${alphaValue})`).replace("rgb", "rgba");
            e.style.backgroundColor = alphaBg;
        }
    }
    hasBgImage(e) {
        let bgImage = getComputedStyle(e).backgroundImage;
        if (bgImage !== "none" && (bgImage.includes("linear-gradient") || bgImage.includes("url"))) return bgImage;
        else return false;
    }
    isBgImage(bgImage) {
        if (bgImage !== "none" && (bgImage.includes("linear-gradient") || bgImage.includes("url"))) return bgImage;
        else return false;
    }
    applyBgImage(element) {
        let BgImage = this.hasBgImage(element);
        if (BgImage) {
            if (BgImage.includes("linear-gradient") && BgImage.includes("url")) {
                this.applyGradientBgImage(element, BgImage);
                element.classList.add("darklup-bg-gradient--image");
            } else if (BgImage.includes("url")) {
                element.classList.add("darklup-bg--image");
                if (!this.alreadyHasOverlay(element)) {
                    if (this.excludedBgOverlays.includes(element)) ;
                    else if (this.applyBgOverlay) {
                        let imgOverlay = `${this.imgGrad}, ${BgImage}`;
                        element.style.setProperty("background-image", imgOverlay);
                    }
                // element.dataset.add
                }
                this.addDarkenClassToChild(element);
            } else if (BgImage.includes("linear-gradient")) {
                element.classList.add("darklup-bg-gradient");
                this.applyGradientBgImage(element, BgImage);
                this.addDarkenClassToChild(element);
            }
            // element.setAttribute("data-lightbg", BgImage);
            element.dataset.lightbg = BgImage;
        }
    }
    getDarkenBgImage(BgImage) {
        let newBg;
        if (BgImage.includes("linear-gradient") && BgImage.includes("url")) newBg = this.getGradientBgImage(BgImage);
        else if (BgImage.includes("url")) {
            if (this.applyBgOverlay) {
                let imgOverlay = `${this.imgGrad}, ${BgImage}`;
                newBg = imgOverlay;
            }
        } else if (BgImage.includes("linear-gradient")) newBg = this.getGradientBgImage(BgImage);
        return newBg;
    }
    getGradientBgImage(currentBg) {
        // console.log(`Current Gradient ${currentBg}`);
        let newGradient;
        const colorRegexMatch = /rgba?\((\s*\d{1,3}\s*,){2}\s*\d{1,3}\s*(,\s*[0-9\.]+)?\)/g;
        const rgbaMatches = currentBg.match(colorRegexMatch);
        // console.log(rgbaMatches);
        rgbaMatches.forEach((c, i)=>{
            let tinyBg = this.getTinyDarkenBg(c);
            let alphaValue = tinyBg.getAlpha();
            if (alphaValue < 0.4) {
                alphaValue = 0.4;
                tinyBg.setAlpha(alphaValue);
            }
            newGradient = currentBg?.replace(rgbaMatches[i], tinyBg.toRgbString());
            currentBg = newGradient;
        });
        // console.log(`newGradient ${newGradient}`);
        return newGradient;
    }
    alreadyHasOverlay(element) {
        let hasOverlay = false;
        if (element.classList.contains("darklup-under-darken-bg")) hasOverlay = true;
        let overlay = element.querySelector(":scope > .elementor-background-overlay");
        if (overlay) {
            let overlayBgImage = this.hasBgImage(overlay);
            let overlayBgColor = this.hasBgColor(overlay);
            if (overlayBgImage) hasOverlay = true;
            else if (overlayBgColor) hasOverlay = true;
        }
        return hasOverlay;
    }
    applyGradientBgImage(element, currentBg) {
        // console.log(`Current Gradient ${currentBg}`);
        if (currentBg !== "none" && currentBg.includes("linear-gradient")) {
            let newGradient;
            const colorRegexMatch = /rgba?\((\s*\d{1,3}\s*,){2}\s*\d{1,3}\s*(,\s*[0-9\.]+)?\)/g;
            const rgbaMatches = currentBg.match(colorRegexMatch);
            // console.log(rgbaMatches);
            rgbaMatches.forEach((c, i)=>{
                let tinyBg = this.getTinyDarkenBg(c);
                let alphaValue = tinyBg.getAlpha();
                if (alphaValue < 0.4) {
                    alphaValue = 0.4;
                    tinyBg.setAlpha(alphaValue);
                }
                newGradient = currentBg?.replace(rgbaMatches[i], tinyBg.toRgbString());
                currentBg = newGradient;
            });
            if (rgbaMatches) {
                if (newGradient) element.style.backgroundImage = newGradient;
            }
        // console.log(`newGradient ${newGradient}`);
        }
    }
    makeDarkenString(currentStr) {
        let newStr = "";
        const colorRegexMatch = /rgba?\((\s*\d{1,3}\s*,){2}\s*\d{1,3}\s*(,\s*[0-9\.]+)?\)/g;
        const rgbaMatches = currentStr.match(colorRegexMatch);
        rgbaMatches.forEach((c, i)=>{
            newStr = currentStr?.replace(rgbaMatches[i], this.getDarkenBg(c));
            currentStr = newStr;
        });
        // console.log(`New Str: ${newStr}`);
        return newStr;
    }
    addDarkenClassToChild(element) {
        let darkenChild = element.querySelectorAll(`*`);
        if (darkenChild) darkenChild.forEach((e)=>{
            e.classList.add("darklup-under-darken-bg");
        });
    }
    resetBgImage(e) {
        e.style.backgroundImage = e.dataset.lightbg;
    }
    resetAlphaBgColor(e) {
        e.style.backgroundColor = e.dataset.alphabg;
    }
    resetBoxShadow(e) {
        e.style.boxShadow = e.dataset.boxshadow;
    }
    excludeAndSelect(excludes = [], selector = "html *") {
        selector += `:not(:is(${excludes.join(", ")}))`;
        return selector;
    }
    isDarkModeEnabled() {
        let darkMode = localStorage.getItem("darklupModeEnabled");
        let getTriggerChecked = localStorage.getItem("triggerCheked");
        if (darkMode && getTriggerChecked) return true;
        else return false;
    }
    isAdminDarkModeEnabled() {
        let darkMode = localStorage.getItem("adminDarklupModeEnabled");
        let getTriggerChecked = localStorage.getItem("adminTriggerChecked");
        if (darkMode && getTriggerChecked) return true;
        else return false;
    }
    applyDynamicStyles() {
        this.elementsWithBgImage?.forEach((element)=>this.applyBgImage(element));
        this.elementsWithBoxShadow?.forEach((element)=>this.applyBoxShadow(element));
        this.addInlineCSS();
        this.handleDarklupExcluded();
    }
    resetDynamicStyles() {
        this.elementsWithBgImage?.forEach((element)=>this.resetBgImage(element));
        this.elementsWithBoxShadow?.forEach((element)=>this.resetBoxShadow(element));
        this.removeInlineCSS();
    }
    isIterable(obj) {
        if (typeof obj !== "undefined") return typeof obj[Symbol.iterator] === "function";
        else return false;
    }
    getDynamicExcluded(node) {
        let dynamicExcludes = [];
        if (this.excludeSelectors.length > 0) this.excludeSelectors.forEach((e)=>{
            let thisElement = node.parentElement?.querySelectorAll(e);
            if (typeof thisElement !== "undefined" && this.isIterable(thisElement)) // console.log(thisElement);
            // console.log('yes');
            dynamicExcludes = [
                ...thisElement,
                ...dynamicExcludes
            ];
        // dynamicExcludes = [...thisElement, ...dynamicExcludes];
        });
        dynamicExcludes.forEach((element)=>{
            element.classList.add("darkluplite-dark-ignore");
        });
        return dynamicExcludes;
    }
    // Initializes the mutation observer for dynamically added elements
    handleDynamicContents() {
        const observerConfig = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };
        const parentElement = document.querySelector("body");
        const newObserver = new MutationObserver((mutations)=>{
            mutations.forEach((mutation)=>{
                mutation.addedNodes.forEach((node)=>{
                    if (!(node instanceof HTMLElement)) return;
                    node.classList?.add("darklup-observer--node");
                    let nodeExclude = this.getDynamicExcluded(node);
                    this.applyDarkModeToDynamicElement(node);
                    const childNodes = node.querySelectorAll("*");
                    childNodes.forEach((childNode)=>{
                        if (childNode.nodeType === Node.ELEMENT_NODE) {
                            this.applyDarkModeToDynamicElement(childNode);
                            let nodeExclude2 = this.getDynamicExcluded(childNode);
                        }
                    });
                });
            });
        });
        newObserver.observe(parentElement.parentNode, observerConfig);
    }
}
// let darklup = new Darklup();
// Document on Ready
document.addEventListener("DOMContentLoaded", function() {
    let darklup = new Darklup();
});

},{"./../node_modules/tinycolor2/dist/tinycolor-min.js":"lHkTe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lHkTe":[function(require,module,exports) {
// This file is autogenerated.
// It's here at this path for backwards compatibility for links to it
// but the npm package now exports both CJS and ESM.
// See https://github.com/bgrins/TinyColor/ for instructions.
!function(t, r) {
    module.exports = r();
}(this, function() {
    "use strict";
    function t(r) {
        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, t(r);
    }
    var r = /^\s+/, e = /\s+$/;
    function n(a, i) {
        if (i = i || {}, (a = a || "") instanceof n) return a;
        if (!(this instanceof n)) return new n(a, i);
        var o = function(n) {
            var a = {
                r: 0,
                g: 0,
                b: 0
            }, i = 1, o = null, h = null, s = null, f = !1, u = !1;
            "string" == typeof n && (n = function(t) {
                t = t.replace(r, "").replace(e, "").toLowerCase();
                var n, a = !1;
                if (y[t]) t = y[t], a = !0;
                else if ("transparent" == t) return {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0,
                    format: "name"
                };
                if (n = T.rgb.exec(t)) return {
                    r: n[1],
                    g: n[2],
                    b: n[3]
                };
                if (n = T.rgba.exec(t)) return {
                    r: n[1],
                    g: n[2],
                    b: n[3],
                    a: n[4]
                };
                if (n = T.hsl.exec(t)) return {
                    h: n[1],
                    s: n[2],
                    l: n[3]
                };
                if (n = T.hsla.exec(t)) return {
                    h: n[1],
                    s: n[2],
                    l: n[3],
                    a: n[4]
                };
                if (n = T.hsv.exec(t)) return {
                    h: n[1],
                    s: n[2],
                    v: n[3]
                };
                if (n = T.hsva.exec(t)) return {
                    h: n[1],
                    s: n[2],
                    v: n[3],
                    a: n[4]
                };
                if (n = T.hex8.exec(t)) return {
                    r: w(n[1]),
                    g: w(n[2]),
                    b: w(n[3]),
                    a: F(n[4]),
                    format: a ? "name" : "hex8"
                };
                if (n = T.hex6.exec(t)) return {
                    r: w(n[1]),
                    g: w(n[2]),
                    b: w(n[3]),
                    format: a ? "name" : "hex"
                };
                if (n = T.hex4.exec(t)) return {
                    r: w(n[1] + "" + n[1]),
                    g: w(n[2] + "" + n[2]),
                    b: w(n[3] + "" + n[3]),
                    a: F(n[4] + "" + n[4]),
                    format: a ? "name" : "hex8"
                };
                if (n = T.hex3.exec(t)) return {
                    r: w(n[1] + "" + n[1]),
                    g: w(n[2] + "" + n[2]),
                    b: w(n[3] + "" + n[3]),
                    format: a ? "name" : "hex"
                };
                return !1;
            }(n));
            "object" == t(n) && (E(n.r) && E(n.g) && E(n.b) ? (l = n.r, c = n.g, d = n.b, a = {
                r: 255 * A(l, 255),
                g: 255 * A(c, 255),
                b: 255 * A(d, 255)
            }, f = !0, u = "%" === String(n.r).substr(-1) ? "prgb" : "rgb") : E(n.h) && E(n.s) && E(n.v) ? (o = H(n.s), h = H(n.v), a = function(t, r, e) {
                t = 6 * A(t, 360), r = A(r, 100), e = A(e, 100);
                var n = Math.floor(t), a = t - n, i = e * (1 - r), o = e * (1 - a * r), h = e * (1 - (1 - a) * r), s = n % 6, f = [
                    e,
                    o,
                    i,
                    i,
                    h,
                    e
                ][s], u = [
                    h,
                    e,
                    e,
                    o,
                    i,
                    i
                ][s], l = [
                    i,
                    i,
                    h,
                    e,
                    e,
                    o
                ][s];
                return {
                    r: 255 * f,
                    g: 255 * u,
                    b: 255 * l
                };
            }(n.h, o, h), f = !0, u = "hsv") : E(n.h) && E(n.s) && E(n.l) && (o = H(n.s), s = H(n.l), a = function(t, r, e) {
                var n, a, i;
                function o(t, r, e) {
                    return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? t + 6 * (r - t) * e : e < .5 ? r : e < 2 / 3 ? t + (r - t) * (2 / 3 - e) * 6 : t;
                }
                if (t = A(t, 360), r = A(r, 100), e = A(e, 100), 0 === r) n = a = i = e;
                else {
                    var h = e < .5 ? e * (1 + r) : e + r - e * r, s = 2 * e - h;
                    n = o(s, h, t + 1 / 3), a = o(s, h, t), i = o(s, h, t - 1 / 3);
                }
                return {
                    r: 255 * n,
                    g: 255 * a,
                    b: 255 * i
                };
            }(n.h, o, s), f = !0, u = "hsl"), n.hasOwnProperty("a") && (i = n.a));
            var l, c, d;
            return i = x(i), {
                ok: f,
                format: n.format || u,
                r: Math.min(255, Math.max(a.r, 0)),
                g: Math.min(255, Math.max(a.g, 0)),
                b: Math.min(255, Math.max(a.b, 0)),
                a: i
            };
        }(a);
        this._originalInput = a, this._r = o.r, this._g = o.g, this._b = o.b, this._a = o.a, this._roundA = Math.round(100 * this._a) / 100, this._format = i.format || o.format, this._gradientType = i.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = o.ok;
    }
    function a(t, r, e) {
        t = A(t, 255), r = A(r, 255), e = A(e, 255);
        var n, a, i = Math.max(t, r, e), o = Math.min(t, r, e), h = (i + o) / 2;
        if (i == o) n = a = 0;
        else {
            var s = i - o;
            switch(a = h > .5 ? s / (2 - i - o) : s / (i + o), i){
                case t:
                    n = (r - e) / s + (r < e ? 6 : 0);
                    break;
                case r:
                    n = (e - t) / s + 2;
                    break;
                case e:
                    n = (t - r) / s + 4;
            }
            n /= 6;
        }
        return {
            h: n,
            s: a,
            l: h
        };
    }
    function i(t, r, e) {
        t = A(t, 255), r = A(r, 255), e = A(e, 255);
        var n, a, i = Math.max(t, r, e), o = Math.min(t, r, e), h = i, s = i - o;
        if (a = 0 === i ? 0 : s / i, i == o) n = 0;
        else {
            switch(i){
                case t:
                    n = (r - e) / s + (r < e ? 6 : 0);
                    break;
                case r:
                    n = (e - t) / s + 2;
                    break;
                case e:
                    n = (t - r) / s + 4;
            }
            n /= 6;
        }
        return {
            h: n,
            s: a,
            v: h
        };
    }
    function o(t, r, e, n) {
        var a = [
            S(Math.round(t).toString(16)),
            S(Math.round(r).toString(16)),
            S(Math.round(e).toString(16))
        ];
        return n && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
    }
    function h(t, r, e, n) {
        return [
            S(R(n)),
            S(Math.round(t).toString(16)),
            S(Math.round(r).toString(16)),
            S(Math.round(e).toString(16))
        ].join("");
    }
    function s(t, r) {
        r = 0 === r ? 0 : r || 10;
        var e = n(t).toHsl();
        return e.s -= r / 100, e.s = k(e.s), n(e);
    }
    function f(t, r) {
        r = 0 === r ? 0 : r || 10;
        var e = n(t).toHsl();
        return e.s += r / 100, e.s = k(e.s), n(e);
    }
    function u(t) {
        return n(t).desaturate(100);
    }
    function l(t, r) {
        r = 0 === r ? 0 : r || 10;
        var e = n(t).toHsl();
        return e.l += r / 100, e.l = k(e.l), n(e);
    }
    function c(t, r) {
        r = 0 === r ? 0 : r || 10;
        var e = n(t).toRgb();
        return e.r = Math.max(0, Math.min(255, e.r - Math.round(-r / 100 * 255))), e.g = Math.max(0, Math.min(255, e.g - Math.round(-r / 100 * 255))), e.b = Math.max(0, Math.min(255, e.b - Math.round(-r / 100 * 255))), n(e);
    }
    function d(t, r) {
        r = 0 === r ? 0 : r || 10;
        var e = n(t).toHsl();
        return e.l -= r / 100, e.l = k(e.l), n(e);
    }
    function g(t, r) {
        var e = n(t).toHsl(), a = (e.h + r) % 360;
        return e.h = a < 0 ? 360 + a : a, n(e);
    }
    function b(t) {
        var r = n(t).toHsl();
        return r.h = (r.h + 180) % 360, n(r);
    }
    function m(t, r) {
        if (isNaN(r) || r <= 0) throw new Error("Argument to polyad must be a positive number");
        for(var e = n(t).toHsl(), a = [
            n(t)
        ], i = 360 / r, o = 1; o < r; o++)a.push(n({
            h: (e.h + o * i) % 360,
            s: e.s,
            l: e.l
        }));
        return a;
    }
    function p(t) {
        var r = n(t).toHsl(), e = r.h;
        return [
            n(t),
            n({
                h: (e + 72) % 360,
                s: r.s,
                l: r.l
            }),
            n({
                h: (e + 216) % 360,
                s: r.s,
                l: r.l
            })
        ];
    }
    function _(t, r, e) {
        r = r || 6, e = e || 30;
        var a = n(t).toHsl(), i = 360 / e, o = [
            n(t)
        ];
        for(a.h = (a.h - (i * r >> 1) + 720) % 360; --r;)a.h = (a.h + i) % 360, o.push(n(a));
        return o;
    }
    function v(t, r) {
        r = r || 6;
        for(var e = n(t).toHsv(), a = e.h, i = e.s, o = e.v, h = [], s = 1 / r; r--;)h.push(n({
            h: a,
            s: i,
            v: o
        })), o = (o + s) % 1;
        return h;
    }
    n.prototype = {
        isDark: function() {
            return this.getBrightness() < 128;
        },
        isLight: function() {
            return !this.isDark();
        },
        isValid: function() {
            return this._ok;
        },
        getOriginalInput: function() {
            return this._originalInput;
        },
        getFormat: function() {
            return this._format;
        },
        getAlpha: function() {
            return this._a;
        },
        getBrightness: function() {
            var t = this.toRgb();
            return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3;
        },
        getLuminance: function() {
            var t, r, e, n = this.toRgb();
            return t = n.r / 255, r = n.g / 255, e = n.b / 255, .2126 * (t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) + .7152 * (r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4)) + .0722 * (e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4));
        },
        setAlpha: function(t) {
            return this._a = x(t), this._roundA = Math.round(100 * this._a) / 100, this;
        },
        toHsv: function() {
            var t = i(this._r, this._g, this._b);
            return {
                h: 360 * t.h,
                s: t.s,
                v: t.v,
                a: this._a
            };
        },
        toHsvString: function() {
            var t = i(this._r, this._g, this._b), r = Math.round(360 * t.h), e = Math.round(100 * t.s), n = Math.round(100 * t.v);
            return 1 == this._a ? "hsv(" + r + ", " + e + "%, " + n + "%)" : "hsva(" + r + ", " + e + "%, " + n + "%, " + this._roundA + ")";
        },
        toHsl: function() {
            var t = a(this._r, this._g, this._b);
            return {
                h: 360 * t.h,
                s: t.s,
                l: t.l,
                a: this._a
            };
        },
        toHslString: function() {
            var t = a(this._r, this._g, this._b), r = Math.round(360 * t.h), e = Math.round(100 * t.s), n = Math.round(100 * t.l);
            return 1 == this._a ? "hsl(" + r + ", " + e + "%, " + n + "%)" : "hsla(" + r + ", " + e + "%, " + n + "%, " + this._roundA + ")";
        },
        toHex: function(t) {
            return o(this._r, this._g, this._b, t);
        },
        toHexString: function(t) {
            return "#" + this.toHex(t);
        },
        toHex8: function(t) {
            return function(t, r, e, n, a) {
                var i = [
                    S(Math.round(t).toString(16)),
                    S(Math.round(r).toString(16)),
                    S(Math.round(e).toString(16)),
                    S(R(n))
                ];
                if (a && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) && i[3].charAt(0) == i[3].charAt(1)) return i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0);
                return i.join("");
            }(this._r, this._g, this._b, this._a, t);
        },
        toHex8String: function(t) {
            return "#" + this.toHex8(t);
        },
        toRgb: function() {
            return {
                r: Math.round(this._r),
                g: Math.round(this._g),
                b: Math.round(this._b),
                a: this._a
            };
        },
        toRgbString: function() {
            return 1 == this._a ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
        },
        toPercentageRgb: function() {
            return {
                r: Math.round(100 * A(this._r, 255)) + "%",
                g: Math.round(100 * A(this._g, 255)) + "%",
                b: Math.round(100 * A(this._b, 255)) + "%",
                a: this._a
            };
        },
        toPercentageRgbString: function() {
            return 1 == this._a ? "rgb(" + Math.round(100 * A(this._r, 255)) + "%, " + Math.round(100 * A(this._g, 255)) + "%, " + Math.round(100 * A(this._b, 255)) + "%)" : "rgba(" + Math.round(100 * A(this._r, 255)) + "%, " + Math.round(100 * A(this._g, 255)) + "%, " + Math.round(100 * A(this._b, 255)) + "%, " + this._roundA + ")";
        },
        toName: function() {
            return 0 === this._a ? "transparent" : !(this._a < 1) && (M[o(this._r, this._g, this._b, !0)] || !1);
        },
        toFilter: function(t) {
            var r = "#" + h(this._r, this._g, this._b, this._a), e = r, a = this._gradientType ? "GradientType = 1, " : "";
            if (t) {
                var i = n(t);
                e = "#" + h(i._r, i._g, i._b, i._a);
            }
            return "progid:DXImageTransform.Microsoft.gradient(" + a + "startColorstr=" + r + ",endColorstr=" + e + ")";
        },
        toString: function(t) {
            var r = !!t;
            t = t || this._format;
            var e = !1, n = this._a < 1 && this._a >= 0;
            return r || !n || "hex" !== t && "hex6" !== t && "hex3" !== t && "hex4" !== t && "hex8" !== t && "name" !== t ? ("rgb" === t && (e = this.toRgbString()), "prgb" === t && (e = this.toPercentageRgbString()), "hex" !== t && "hex6" !== t || (e = this.toHexString()), "hex3" === t && (e = this.toHexString(!0)), "hex4" === t && (e = this.toHex8String(!0)), "hex8" === t && (e = this.toHex8String()), "name" === t && (e = this.toName()), "hsl" === t && (e = this.toHslString()), "hsv" === t && (e = this.toHsvString()), e || this.toHexString()) : "name" === t && 0 === this._a ? this.toName() : this.toRgbString();
        },
        clone: function() {
            return n(this.toString());
        },
        _applyModification: function(t, r) {
            var e = t.apply(null, [
                this
            ].concat([].slice.call(r)));
            return this._r = e._r, this._g = e._g, this._b = e._b, this.setAlpha(e._a), this;
        },
        lighten: function() {
            return this._applyModification(l, arguments);
        },
        brighten: function() {
            return this._applyModification(c, arguments);
        },
        darken: function() {
            return this._applyModification(d, arguments);
        },
        desaturate: function() {
            return this._applyModification(s, arguments);
        },
        saturate: function() {
            return this._applyModification(f, arguments);
        },
        greyscale: function() {
            return this._applyModification(u, arguments);
        },
        spin: function() {
            return this._applyModification(g, arguments);
        },
        _applyCombination: function(t, r) {
            return t.apply(null, [
                this
            ].concat([].slice.call(r)));
        },
        analogous: function() {
            return this._applyCombination(_, arguments);
        },
        complement: function() {
            return this._applyCombination(b, arguments);
        },
        monochromatic: function() {
            return this._applyCombination(v, arguments);
        },
        splitcomplement: function() {
            return this._applyCombination(p, arguments);
        },
        triad: function() {
            return this._applyCombination(m, [
                3
            ]);
        },
        tetrad: function() {
            return this._applyCombination(m, [
                4
            ]);
        }
    }, n.fromRatio = function(r, e) {
        if ("object" == t(r)) {
            var a = {};
            for(var i in r)r.hasOwnProperty(i) && (a[i] = "a" === i ? r[i] : H(r[i]));
            r = a;
        }
        return n(r, e);
    }, n.equals = function(t, r) {
        return !(!t || !r) && n(t).toRgbString() == n(r).toRgbString();
    }, n.random = function() {
        return n.fromRatio({
            r: Math.random(),
            g: Math.random(),
            b: Math.random()
        });
    }, n.mix = function(t, r, e) {
        e = 0 === e ? 0 : e || 50;
        var a = n(t).toRgb(), i = n(r).toRgb(), o = e / 100;
        return n({
            r: (i.r - a.r) * o + a.r,
            g: (i.g - a.g) * o + a.g,
            b: (i.b - a.b) * o + a.b,
            a: (i.a - a.a) * o + a.a
        });
    }, n.readability = function(t, r) {
        var e = n(t), a = n(r);
        return (Math.max(e.getLuminance(), a.getLuminance()) + .05) / (Math.min(e.getLuminance(), a.getLuminance()) + .05);
    }, n.isReadable = function(t, r, e) {
        var a, i, o = n.readability(t, r);
        switch(i = !1, (a = function(t) {
            var r, e;
            r = ((t = t || {
                level: "AA",
                size: "small"
            }).level || "AA").toUpperCase(), e = (t.size || "small").toLowerCase(), "AA" !== r && "AAA" !== r && (r = "AA");
            "small" !== e && "large" !== e && (e = "small");
            return {
                level: r,
                size: e
            };
        }(e)).level + a.size){
            case "AAsmall":
            case "AAAlarge":
                i = o >= 4.5;
                break;
            case "AAlarge":
                i = o >= 3;
                break;
            case "AAAsmall":
                i = o >= 7;
        }
        return i;
    }, n.mostReadable = function(t, r, e) {
        var a, i, o, h, s = null, f = 0;
        i = (e = e || {}).includeFallbackColors, o = e.level, h = e.size;
        for(var u = 0; u < r.length; u++)(a = n.readability(t, r[u])) > f && (f = a, s = n(r[u]));
        return n.isReadable(t, s, {
            level: o,
            size: h
        }) || !i ? s : (e.includeFallbackColors = !1, n.mostReadable(t, [
            "#fff",
            "#000"
        ], e));
    };
    var y = n.names = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
    }, M = n.hexNames = function(t) {
        var r = {};
        for(var e in t)t.hasOwnProperty(e) && (r[t[e]] = e);
        return r;
    }(y);
    function x(t) {
        return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
    }
    function A(t, r) {
        (function(t) {
            return "string" == typeof t && -1 != t.indexOf(".") && 1 === parseFloat(t);
        })(t) && (t = "100%");
        var e = function(t) {
            return "string" == typeof t && -1 != t.indexOf("%");
        }(t);
        return t = Math.min(r, Math.max(0, parseFloat(t))), e && (t = parseInt(t * r, 10) / 100), Math.abs(t - r) < 1e-6 ? 1 : t % r / parseFloat(r);
    }
    function k(t) {
        return Math.min(1, Math.max(0, t));
    }
    function w(t) {
        return parseInt(t, 16);
    }
    function S(t) {
        return 1 == t.length ? "0" + t : "" + t;
    }
    function H(t) {
        return t <= 1 && (t = 100 * t + "%"), t;
    }
    function R(t) {
        return Math.round(255 * parseFloat(t)).toString(16);
    }
    function F(t) {
        return w(t) / 255;
    }
    var C, q, N, T = (q = "[\\s|\\(]+(" + (C = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + C + ")[,|\\s]+(" + C + ")\\s*\\)?", N = "[\\s|\\(]+(" + C + ")[,|\\s]+(" + C + ")[,|\\s]+(" + C + ")[,|\\s]+(" + C + ")\\s*\\)?", {
        CSS_UNIT: new RegExp(C),
        rgb: new RegExp("rgb" + q),
        rgba: new RegExp("rgba" + N),
        hsl: new RegExp("hsl" + q),
        hsla: new RegExp("hsla" + N),
        hsv: new RegExp("hsv" + q),
        hsva: new RegExp("hsva" + N),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    });
    function E(t) {
        return !!T.CSS_UNIT.exec(t);
    }
    return n;
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["3wBV8","8lqZg"], "8lqZg", "parcelRequire633e")

//# sourceMappingURL=index.js.map
