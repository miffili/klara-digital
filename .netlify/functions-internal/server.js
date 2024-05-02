var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => AppWithProviders,
  links: () => links,
  meta: () => meta
});
var import_react3 = require("@remix-run/react"), import_clsx = require("clsx");

// utils/theme-provider.tsx
var import_react2 = require("react"), import_jsx_runtime2 = require("react/jsx-runtime");
var ThemeContext = (0, import_react2.createContext)(void 0), prefersDarkMQ = "(prefers-color-scheme: dark)", getPreferredTheme = () => window.matchMedia(prefersDarkMQ).matches ? "dark" /* DARK */ : "light" /* LIGHT */, ThemeProvider = ({ children }) => {
  let [theme, setTheme] = (0, import_react2.useState)(() => typeof window != "object" ? null : getPreferredTheme());
  return (0, import_react2.useEffect)(() => {
    let mediaQuery = window.matchMedia(prefersDarkMQ), handleChange = () => {
      setTheme(mediaQuery.matches ? "dark" /* DARK */ : "light" /* LIGHT */);
    };
    return mediaQuery.addEventListener("change", handleChange), () => mediaQuery.removeEventListener("change", handleChange);
  }, []), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ThemeContext.Provider, { value: [theme, setTheme], children });
}, useTheme = () => {
  let context = (0, import_react2.useContext)(ThemeContext);
  if (context === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}, clientThemeCode = `
;(() => {
  const theme = window.matchMedia(${JSON.stringify(prefersDarkMQ)}).matches
    ? 'dark'
    : 'light';
  const cl = document.documentElement.classList;
  const themeAlreadyApplied = cl.contains('light') || cl.contains('dark');
  if (themeAlreadyApplied) {
    // this script shouldn't exist if the theme is already applied!
    console.warn(
      "Hi there, could you let Matt know you're seeing this message? Thanks!",
    );
  } else {
    cl.add(theme);
  }
})();
`, NonFlashOfWrongThemeEls = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("script", { dangerouslySetInnerHTML: { __html: clientThemeCode } });

// app/styles/app.css
var app_default = "/build/_assets/app-7OWLNLJG.css";

// app/root.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "\u{1F331} Klara's Digital Garden",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  let [theme] = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("html", { lang: "en", className: (0, import_clsx.clsx)(theme), children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Links, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(NonFlashOfWrongThemeEls, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("body", { className: "bg-white dark:bg-slate-800 text-slate-800 dark:text-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.LiveReload, {})
    ] })
  ] });
}
function AppWithProviders() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(App, {}) });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_jsx_runtime4 = require("react/jsx-runtime");
function Index() {
  let [theme, setTheme] = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "m-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h1", { className: "mb-4 text-xl font-semibold", children: "Welcome to Remix" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { className: "mb-2", children: [
      "Current theme: ",
      theme
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "button",
      {
        onClick: () => {
          setTheme(
            (prevTheme) => prevTheme === "light" /* LIGHT */ ? "dark" /* DARK */ : "light" /* LIGHT */
          );
        },
        className: "py-2 px-4 bg-slate-800 dark:bg-white text-white dark:text-slate-800 rounded-md",
        children: "Toggle theme"
      }
    )
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-7OGQFYQW.js", imports: ["/build/_shared/chunk-WWBEWFZ5.js", "/build/_shared/chunk-DWFMXSZ6.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-7MZJHSXK.js", imports: ["/build/_shared/chunk-CCOAVAMH.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: "index", index: void 0, caseSensitive: void 0, module: "/build/routes/index-QYD4IIU6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "5c97e583", hmr: void 0, url: "/build/manifest-5C97E583.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "index",
    index: void 0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});