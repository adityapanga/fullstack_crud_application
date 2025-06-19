/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/sql_query/route";
exports.ids = ["app/api/sql_query/route"];
exports.modules = {

/***/ "(rsc)/./app/api/sql_query/route.ts":
/*!************************************!*\
  !*** ./app/api/sql_query/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zod */ \"(rsc)/../../node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/prisma/client */ \"(rsc)/./prisma/client.ts\");\n\n\n\nconst schema = zod__WEBPACK_IMPORTED_MODULE_2__.z.object({\n    text_query: zod__WEBPACK_IMPORTED_MODULE_2__.z.string().min(1)\n});\nasync function GET() {\n    const queries = await _prisma_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tracer.findMany();\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        data: queries\n    });\n}\nasync function POST(request) {\n    const body = await request.json();\n    const validation = schema.safeParse(body);\n    if (!validation.success) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            errors: validation.error.errors\n        }, {\n            status: 400\n        });\n    }\n    try {\n        const result = await _prisma_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].$queryRawUnsafe(body.text_query);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            data: result\n        });\n    } catch (err) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: err.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NxbF9xdWVyeS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3RDtBQUNoQztBQUNhO0FBRXJDLE1BQU1HLFNBQVNGLGtDQUFDQSxDQUFDRyxNQUFNLENBQUM7SUFDdEJDLFlBQVlKLGtDQUFDQSxDQUFDSyxNQUFNLEdBQUdDLEdBQUcsQ0FBQztBQUM3QjtBQUVPLGVBQWVDO0lBQ3BCLE1BQU1DLFVBQVUsTUFBTVAsc0RBQU1BLENBQUNRLE1BQU0sQ0FBQ0MsUUFBUTtJQUM1QyxPQUFPWCxxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1FBQUVDLE1BQU1KO0lBQVE7QUFDM0M7QUFFTyxlQUFlSyxLQUFLQyxPQUFvQjtJQUM3QyxNQUFNQyxPQUFPLE1BQU1ELFFBQVFILElBQUk7SUFDL0IsTUFBTUssYUFBYWQsT0FBT2UsU0FBUyxDQUFDRjtJQUVwQyxJQUFJLENBQUNDLFdBQVdFLE9BQU8sRUFBRTtRQUN2QixPQUFPbkIscURBQVlBLENBQUNZLElBQUksQ0FDdEI7WUFBRVEsUUFBUUgsV0FBV0ksS0FBSyxDQUFDRCxNQUFNO1FBQUMsR0FDbEM7WUFBRUUsUUFBUTtRQUFJO0lBRWxCO0lBRUEsSUFBSTtRQUNGLE1BQU1DLFNBQVMsTUFBTXJCLHNEQUFNQSxDQUFDc0IsZUFBZSxDQUFDUixLQUFLWCxVQUFVO1FBQzNELE9BQU9MLHFEQUFZQSxDQUFDWSxJQUFJLENBQUM7WUFBRUMsTUFBTVU7UUFBTztJQUMxQyxFQUFFLE9BQU9FLEtBQVU7UUFDakIsT0FBT3pCLHFEQUFZQSxDQUFDWSxJQUFJLENBQUM7WUFBRVMsT0FBT0ksSUFBSUMsT0FBTztRQUFDLEdBQUc7WUFBRUosUUFBUTtRQUFJO0lBQ2pFO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWNlclxcT25lRHJpdmVcXERlc2t0b3BcXEFiaGlsb2Fuc1xcZnVsbHN0YWNrX2NydWRfYXBwbGljYXRpb25cXGFwcFxcYXBpXFxzcWxfcXVlcnlcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9wcmlzbWEvY2xpZW50XCI7XHJcblxyXG5jb25zdCBzY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgdGV4dF9xdWVyeTogei5zdHJpbmcoKS5taW4oMSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICBjb25zdCBxdWVyaWVzID0gYXdhaXQgcHJpc21hLnRyYWNlci5maW5kTWFueSgpO1xyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGRhdGE6IHF1ZXJpZXMgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gIGNvbnN0IHZhbGlkYXRpb24gPSBzY2hlbWEuc2FmZVBhcnNlKGJvZHkpO1xyXG5cclxuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IGVycm9yczogdmFsaWRhdGlvbi5lcnJvci5lcnJvcnMgfSxcclxuICAgICAgeyBzdGF0dXM6IDQwMCB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS4kcXVlcnlSYXdVbnNhZmUoYm9keS50ZXh0X3F1ZXJ5KTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGRhdGE6IHJlc3VsdCB9KTtcclxuICB9IGNhdGNoIChlcnI6IGFueSkge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IGVyci5tZXNzYWdlIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJ6IiwicHJpc21hIiwic2NoZW1hIiwib2JqZWN0IiwidGV4dF9xdWVyeSIsInN0cmluZyIsIm1pbiIsIkdFVCIsInF1ZXJpZXMiLCJ0cmFjZXIiLCJmaW5kTWFueSIsImpzb24iLCJkYXRhIiwiUE9TVCIsInJlcXVlc3QiLCJib2R5IiwidmFsaWRhdGlvbiIsInNhZmVQYXJzZSIsInN1Y2Nlc3MiLCJlcnJvcnMiLCJlcnJvciIsInN0YXR1cyIsInJlc3VsdCIsIiRxdWVyeVJhd1Vuc2FmZSIsImVyciIsIm1lc3NhZ2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/sql_query/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsql_query%2Froute&page=%2Fapi%2Fsql_query%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsql_query%2Froute.ts&appDir=C%3A%5CUsers%5CAcer%5COneDrive%5CDesktop%5CAbhiloans%5Cfullstack_crud_application%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAcer%5COneDrive%5CDesktop%5CAbhiloans%5Cfullstack_crud_application&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsql_query%2Froute&page=%2Fapi%2Fsql_query%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsql_query%2Froute.ts&appDir=C%3A%5CUsers%5CAcer%5COneDrive%5CDesktop%5CAbhiloans%5Cfullstack_crud_application%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAcer%5COneDrive%5CDesktop%5CAbhiloans%5Cfullstack_crud_application&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Acer_OneDrive_Desktop_Abhiloans_fullstack_crud_application_app_api_sql_query_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/sql_query/route.ts */ \"(rsc)/./app/api/sql_query/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/sql_query/route\",\n        pathname: \"/api/sql_query\",\n        filename: \"route\",\n        bundlePath: \"app/api/sql_query/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\Abhiloans\\\\fullstack_crud_application\\\\app\\\\api\\\\sql_query\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Acer_OneDrive_Desktop_Abhiloans_fullstack_crud_application_app_api_sql_query_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzcWxfcXVlcnklMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnNxbF9xdWVyeSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnNxbF9xdWVyeSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBY2VyJTVDT25lRHJpdmUlNUNEZXNrdG9wJTVDQWJoaWxvYW5zJTVDZnVsbHN0YWNrX2NydWRfYXBwbGljYXRpb24lNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0FjZXIlNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUNBYmhpbG9hbnMlNUNmdWxsc3RhY2tfY3J1ZF9hcHBsaWNhdGlvbiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDd0Q7QUFDckk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEFjZXJcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxBYmhpbG9hbnNcXFxcZnVsbHN0YWNrX2NydWRfYXBwbGljYXRpb25cXFxcYXBwXFxcXGFwaVxcXFxzcWxfcXVlcnlcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3NxbF9xdWVyeS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3NxbF9xdWVyeVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc3FsX3F1ZXJ5L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcQWNlclxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXEFiaGlsb2Fuc1xcXFxmdWxsc3RhY2tfY3J1ZF9hcHBsaWNhdGlvblxcXFxhcHBcXFxcYXBpXFxcXHNxbF9xdWVyeVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsql_query%2Froute&page=%2Fapi%2Fsql_query%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsql_query%2Froute.ts&appDir=C%3A%5CUsers%5CAcer%5COneDrive%5CDesktop%5CAbhiloans%5Cfullstack_crud_application%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAcer%5COneDrive%5CDesktop%5CAbhiloans%5Cfullstack_crud_application&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./prisma/client.ts":
/*!**************************!*\
  !*** ./prisma/client.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? prismaClientSingleton();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9wcmlzbWEvY2xpZW50LnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxNQUFNQyx3QkFBd0I7SUFDNUIsT0FBTyxJQUFJRCx3REFBWUE7QUFDekI7QUFJQSxNQUFNRSxrQkFBa0JDO0FBSXhCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJSDtBQUV6QyxpRUFBZUcsTUFBTUEsRUFBQTtBQUVyQixJQUFJQyxJQUFxQyxFQUFFSCxnQkFBZ0JFLE1BQU0sR0FBR0EiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWNlclxcT25lRHJpdmVcXERlc2t0b3BcXEFiaGlsb2Fuc1xcZnVsbHN0YWNrX2NydWRfYXBwbGljYXRpb25cXHByaXNtYVxcY2xpZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xyXG5cclxuY29uc3QgcHJpc21hQ2xpZW50U2luZ2xldG9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJpc21hQ2xpZW50KClcclxufVxyXG5cclxudHlwZSBQcmlzbWFDbGllbnRTaW5nbGV0b24gPSBSZXR1cm5UeXBlPHR5cGVvZiBwcmlzbWFDbGllbnRTaW5nbGV0b24+XHJcblxyXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWxUaGlzIGFzIHVua25vd24gYXMge1xyXG4gIHByaXNtYTogUHJpc21hQ2xpZW50U2luZ2xldG9uIHwgdW5kZWZpbmVkXHJcbn1cclxuXHJcbmNvbnN0IHByaXNtYSA9IGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPz8gcHJpc21hQ2xpZW50U2luZ2xldG9uKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaXNtYVxyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWEiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hQ2xpZW50U2luZ2xldG9uIiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsInByb2Nlc3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./prisma/client.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsql_query%2Froute&page=%2Fapi%2Fsql_query%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsql_query%2Froute.ts&appDir=C%3A%5CUsers%5CAcer%5COneDrive%5CDesktop%5CAbhiloans%5Cfullstack_crud_application%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAcer%5COneDrive%5CDesktop%5CAbhiloans%5Cfullstack_crud_application&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();