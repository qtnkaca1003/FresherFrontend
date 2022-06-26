"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./hooks/useRedux.ts":
/*!***************************!*\
  !*** ./hooks/useRedux.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAppDispatch\": () => (/* binding */ useAppDispatch),\n/* harmony export */   \"useAppSelector\": () => (/* binding */ useAppSelector)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable prettier/prettier */ \nconst useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)()\n;\nconst useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VSZWR1eC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQXNDLENBQ3NDO0FBR3JFLE1BQU1FLGNBQWMsR0FBRyxJQUFNRix3REFBVyxFQUFlO0FBQUE7QUFFdkQsTUFBTUcsY0FBYyxHQUFvQ0Ysb0RBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcnMtdWkvbmV4dC10ZW1wbGF0ZS1nbW8vLi9ob29rcy91c2VSZWR1eC50cz81YjM0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHByZXR0aWVyL3ByZXR0aWVyICovXHJcbmltcG9ydCB7IFR5cGVkVXNlU2VsZWN0b3JIb29rLCB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBSb290U3RhdGUsIEFwcERpc3BhdGNoIH0gZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCJcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBcHBEaXNwYXRjaCA9ICgpID0+IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpXHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXBwU2VsZWN0b3I6IFR5cGVkVXNlU2VsZWN0b3JIb29rPFJvb3RTdGF0ZT4gPSB1c2VTZWxlY3RvclxyXG4iXSwibmFtZXMiOlsidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useRedux.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hooks/useRedux */ \"./hooks/useRedux.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var pakagelogin_nhanqt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pakagelogin-nhanqt */ \"pakagelogin-nhanqt\");\n/* harmony import */ var pakagelogin_nhanqt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pakagelogin_nhanqt__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var redux_userSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux/userSlice */ \"./redux/userSlice.ts\");\n\n/* eslint-disable prettier/prettier */ \n\n\n\n\nconst Login = ()=>{\n    const dispatch = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();\n    const user = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.user\n    );\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { 0: userName , 1: setUserName  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const { 1: /* password */ setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const onClickLogin = (e)=>{\n        e.preventDefault();\n        const acc = {\n            accessToken: userName,\n            name: userName,\n            email: \"@gmail.com\"\n        };\n        dispatch((0,redux_userSlice__WEBPACK_IMPORTED_MODULE_5__.setUser)(acc));\n        router.push(\"/dashboard/dashboard\");\n    };\n    const changeUsername = (e)=>{\n        setUserName(e.target.value);\n    };\n    const changePassword = (e)=>{\n        setPassword(e.target.value);\n    };\n    const responseFacebook = (response)=>{\n        const addUser = {\n            name: response?.name,\n            accessToken: response.accessToken,\n            email: response.email,\n            picture: response.picture.data.url\n        };\n        dispatch((0,redux_userSlice__WEBPACK_IMPORTED_MODULE_5__.setUser)(addUser));\n        router.push(\"/dashboard/dashboard\");\n    };\n    const onSuccess = (res)=>{};\n    const onFailure = (res)=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(pakagelogin_nhanqt__WEBPACK_IMPORTED_MODULE_3__.PageIndex, {\n        onSuccess: onSuccess,\n        onFailure: onFailure,\n        callback: responseFacebook,\n        onChangePassword: changePassword,\n        onSubmit: onClickLogin,\n        onChangeUserName: changeUsername,\n        appId: \"575100697553277\",\n        clientId: \"887683151777-3lg3hnfsjgurkje2am2pn41ofpukro3o.apps.googleusercontent.com\",\n        paddingTitle: \"0 0 49px\",\n        /* onSubmit={onClickLogin}\n        onChangePassword={changePassword}\n        onChangeUserName={changeUsername} */ /*  LoginFb={signIn}\n        LoginGg={signIn} */ sizeButton: \"large\",\n        textButton: \"LOGIN\",\n        typeButton: \"button\"\n    }, void 0, false, {\n        fileName: \"F:\\\\nhan\\\\GMO\\\\src-gmo\\\\next\\\\nextjs\\\\pages\\\\index.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQURBLHNDQUFzQyxDQUN5QjtBQUN4QjtBQUNPO0FBQ0g7QUFDUztBQUVwRCxNQUFNTSxLQUFLLEdBQUcsSUFBTTtJQUNsQixNQUFNQyxRQUFRLEdBQUdQLDhEQUFjLEVBQUU7SUFDakMsTUFBTVEsSUFBSSxHQUFHUCw4REFBYyxDQUFDLENBQUNRLEtBQUssR0FBS0EsS0FBSyxDQUFDRCxJQUFJO0lBQUEsQ0FBQztJQUNsRCxNQUFNRSxNQUFNLEdBQUdSLHNEQUFTLEVBQUU7SUFDMUIsTUFBTSxFQVhSLEdBV1NTLFFBQVEsR0FYakIsR0FXbUJDLFdBQVcsTUFBSVIsK0NBQVEsQ0FBUyxFQUFFLENBQUM7SUFDcEQsTUFBTSxFQVpSLEdBWVcsY0FBYyxDQUFDUyxXQUFXLE1BQUlULCtDQUFRLENBQVMsRUFBRSxDQUFDO0lBQzNELE1BQU1VLFlBQVksR0FBRyxDQUFDQyxDQUFrQixHQUFLO1FBQzNDQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtRQUNsQixNQUFNQyxHQUFHLEdBQWM7WUFDckJDLFdBQVcsRUFBRVAsUUFBUTtZQUNyQlEsSUFBSSxFQUFFUixRQUFRO1lBQ2RTLEtBQUssRUFBRSxZQUFZO1NBQ3BCO1FBQ0RiLFFBQVEsQ0FBQ0Ysd0RBQU8sQ0FBQ1ksR0FBRyxDQUFDLENBQUM7UUFDdEJQLE1BQU0sQ0FBQ1csSUFBSSxDQUFDLHNCQUFzQixDQUFDO0tBQ3BDO0lBQ0QsTUFBTUMsY0FBYyxHQUFHLENBQUNQLENBQXNDLEdBQUs7UUFDakVILFdBQVcsQ0FBQ0csQ0FBQyxDQUFDUSxNQUFNLENBQUNDLEtBQUssQ0FBQztLQUM1QjtJQUNELE1BQU1DLGNBQWMsR0FBRyxDQUFDVixDQUFzQyxHQUFLO1FBQ2pFRixXQUFXLENBQUNFLENBQUMsQ0FBQ1EsTUFBTSxDQUFDQyxLQUFLLENBQUM7S0FDNUI7SUFDRCxNQUFNRSxnQkFBZ0IsR0FBRyxDQUFDQyxRQUFhLEdBQUs7UUFDMUMsTUFBTUMsT0FBTyxHQUFjO1lBQ3pCVCxJQUFJLEVBQUVRLFFBQVEsRUFBRVIsSUFBSTtZQUNwQkQsV0FBVyxFQUFFUyxRQUFRLENBQUNULFdBQVc7WUFDakNFLEtBQUssRUFBRU8sUUFBUSxDQUFDUCxLQUFLO1lBQ3JCUyxPQUFPLEVBQUVGLFFBQVEsQ0FBQ0UsT0FBTyxDQUFDQyxJQUFJLENBQUNDLEdBQUc7U0FDbkM7UUFDRHhCLFFBQVEsQ0FBQ0Ysd0RBQU8sQ0FBQ3VCLE9BQU8sQ0FBQyxDQUFDO1FBQzFCbEIsTUFBTSxDQUFDVyxJQUFJLENBQUMsc0JBQXNCLENBQUM7S0FDcEM7SUFDRCxNQUFNVyxTQUFTLEdBQUcsQ0FBQ0MsR0FBUSxHQUFLLEVBQUU7SUFDbEMsTUFBTUMsU0FBUyxHQUFHLENBQUNELEdBQVEsR0FBSyxFQUFFO0lBRWxDLHFCQUNFLDhEQUFDOUIseURBQVM7UUFDUjZCLFNBQVMsRUFBRUEsU0FBUztRQUNwQkUsU0FBUyxFQUFFQSxTQUFTO1FBQ3BCQyxRQUFRLEVBQUVULGdCQUFnQjtRQUMxQlUsZ0JBQWdCLEVBQUVYLGNBQWM7UUFDaENZLFFBQVEsRUFBRXZCLFlBQVk7UUFDdEJ3QixnQkFBZ0IsRUFBRWhCLGNBQWM7UUFDaENpQixLQUFLLEVBQUMsaUJBQWlCO1FBQ3ZCQyxRQUFRLEVBQUMsMEVBQTBFO1FBQ25GQyxZQUFZLEVBQUMsVUFBVTtRQUN2Qjs7NENBRXNDLENBQ3RDOzJCQUNxQixDQUNyQkMsVUFBVSxFQUFDLE9BQU87UUFDbEJDLFVBQVUsRUFBQyxPQUFPO1FBQ2xCQyxVQUFVLEVBQUMsUUFBUTs7Ozs7aUJBQ25CLENBQ0g7Q0FDRjtBQUVELGlFQUFldEMsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL0Bycy11aS9uZXh0LXRlbXBsYXRlLWdtby8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHByZXR0aWVyL3ByZXR0aWVyICovXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiaG9va3MvdXNlUmVkdXhcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IFBhZ2VJbmRleCB9IGZyb20gXCJwYWthZ2Vsb2dpbi1uaGFucXRcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBzZXRVc2VyLCBVc2VyU3RhdGUgfSBmcm9tIFwicmVkdXgvdXNlclNsaWNlXCJcblxuY29uc3QgTG9naW4gPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKVxuICBjb25zdCB1c2VyID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcbiAgY29uc3QgWywgLyogcGFzc3dvcmQgKi8gc2V0UGFzc3dvcmRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKVxuICBjb25zdCBvbkNsaWNrTG9naW4gPSAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgYWNjOiBVc2VyU3RhdGUgPSB7XG4gICAgICBhY2Nlc3NUb2tlbjogdXNlck5hbWUsXG4gICAgICBuYW1lOiB1c2VyTmFtZSxcbiAgICAgIGVtYWlsOiBcIkBnbWFpbC5jb21cIixcbiAgICB9XG4gICAgZGlzcGF0Y2goc2V0VXNlcihhY2MpKVxuICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZC9kYXNoYm9hcmRcIilcbiAgfVxuICBjb25zdCBjaGFuZ2VVc2VybmFtZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldFVzZXJOYW1lKGUudGFyZ2V0LnZhbHVlKVxuICB9XG4gIGNvbnN0IGNoYW5nZVBhc3N3b3JkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpXG4gIH1cbiAgY29uc3QgcmVzcG9uc2VGYWNlYm9vayA9IChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgY29uc3QgYWRkVXNlcjogVXNlclN0YXRlID0ge1xuICAgICAgbmFtZTogcmVzcG9uc2U/Lm5hbWUsXG4gICAgICBhY2Nlc3NUb2tlbjogcmVzcG9uc2UuYWNjZXNzVG9rZW4sXG4gICAgICBlbWFpbDogcmVzcG9uc2UuZW1haWwsXG4gICAgICBwaWN0dXJlOiByZXNwb25zZS5waWN0dXJlLmRhdGEudXJsLFxuICAgIH1cbiAgICBkaXNwYXRjaChzZXRVc2VyKGFkZFVzZXIpKVxuICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZC9kYXNoYm9hcmRcIilcbiAgfVxuICBjb25zdCBvblN1Y2Nlc3MgPSAocmVzOiBhbnkpID0+IHt9XG4gIGNvbnN0IG9uRmFpbHVyZSA9IChyZXM6IGFueSkgPT4ge31cblxuICByZXR1cm4gKFxuICAgIDxQYWdlSW5kZXhcbiAgICAgIG9uU3VjY2Vzcz17b25TdWNjZXNzfVxuICAgICAgb25GYWlsdXJlPXtvbkZhaWx1cmV9XG4gICAgICBjYWxsYmFjaz17cmVzcG9uc2VGYWNlYm9va31cbiAgICAgIG9uQ2hhbmdlUGFzc3dvcmQ9e2NoYW5nZVBhc3N3b3JkfVxuICAgICAgb25TdWJtaXQ9e29uQ2xpY2tMb2dpbn1cbiAgICAgIG9uQ2hhbmdlVXNlck5hbWU9e2NoYW5nZVVzZXJuYW1lfVxuICAgICAgYXBwSWQ9XCI1NzUxMDA2OTc1NTMyNzdcIlxuICAgICAgY2xpZW50SWQ9XCI4ODc2ODMxNTE3NzctM2xnM2huZnNqZ3Vya2plMmFtMnBuNDFvZnB1a3JvM28uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIlxuICAgICAgcGFkZGluZ1RpdGxlPVwiMCAwIDQ5cHhcIlxuICAgICAgLyogb25TdWJtaXQ9e29uQ2xpY2tMb2dpbn1cbiAgICAgICAgb25DaGFuZ2VQYXNzd29yZD17Y2hhbmdlUGFzc3dvcmR9XG4gICAgICAgIG9uQ2hhbmdlVXNlck5hbWU9e2NoYW5nZVVzZXJuYW1lfSAqL1xuICAgICAgLyogIExvZ2luRmI9e3NpZ25Jbn1cbiAgICAgICAgTG9naW5HZz17c2lnbklufSAqL1xuICAgICAgc2l6ZUJ1dHRvbj1cImxhcmdlXCJcbiAgICAgIHRleHRCdXR0b249XCJMT0dJTlwiXG4gICAgICB0eXBlQnV0dG9uPVwiYnV0dG9uXCJcbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luXG4iXSwibmFtZXMiOlsidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsInVzZVJvdXRlciIsIlBhZ2VJbmRleCIsInVzZVN0YXRlIiwic2V0VXNlciIsIkxvZ2luIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RhdGUiLCJyb3V0ZXIiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwic2V0UGFzc3dvcmQiLCJvbkNsaWNrTG9naW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJhY2MiLCJhY2Nlc3NUb2tlbiIsIm5hbWUiLCJlbWFpbCIsInB1c2giLCJjaGFuZ2VVc2VybmFtZSIsInRhcmdldCIsInZhbHVlIiwiY2hhbmdlUGFzc3dvcmQiLCJyZXNwb25zZUZhY2Vib29rIiwicmVzcG9uc2UiLCJhZGRVc2VyIiwicGljdHVyZSIsImRhdGEiLCJ1cmwiLCJvblN1Y2Nlc3MiLCJyZXMiLCJvbkZhaWx1cmUiLCJjYWxsYmFjayIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJvblN1Ym1pdCIsIm9uQ2hhbmdlVXNlck5hbWUiLCJhcHBJZCIsImNsaWVudElkIiwicGFkZGluZ1RpdGxlIiwic2l6ZUJ1dHRvbiIsInRleHRCdXR0b24iLCJ0eXBlQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./redux/userSlice.ts":
/*!****************************!*\
  !*** ./redux/userSlice.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"deleteUser\": () => (/* binding */ deleteUser),\n/* harmony export */   \"setUser\": () => (/* binding */ setUser),\n/* harmony export */   \"userSlice\": () => (/* binding */ userSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable prettier/prettier */ \nconst initialState = {\n    name: \"\",\n    accessToken: \"\",\n    email: \"\",\n    picture: \"\"\n};\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState,\n    reducers: {\n        setUser: (state, action)=>{\n            state.accessToken = action.payload.accessToken, state.email = action.payload.email, state.name = action.payload.name, state.picture = action.payload.picture;\n        },\n        deleteUser: (state, action)=>{\n            state.accessToken = \" \", state.email = \"\", state.name = \"\", state.picture = \"\";\n        }\n    }\n});\nconst { setUser , deleteUser  } = userSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC91c2VyU2xpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsc0NBQXNDLENBQ3VCO0FBUzdELE1BQU1DLFlBQVksR0FBYztJQUM5QkMsSUFBSSxFQUFFLEVBQUU7SUFDUkMsV0FBVyxFQUFFLEVBQUU7SUFDZkMsS0FBSyxFQUFFLEVBQUU7SUFDVEMsT0FBTyxFQUFFLEVBQUU7Q0FDWjtBQUVNLE1BQU1DLFNBQVMsR0FBR04sNkRBQVcsQ0FBQztJQUNuQ0UsSUFBSSxFQUFFLE1BQU07SUFDWkQsWUFBWTtJQUNaTSxRQUFRLEVBQUU7UUFDUkMsT0FBTyxFQUFFLENBQUNDLEtBQUssRUFBRUMsTUFBZ0MsR0FBSztZQUNsREQsS0FBSyxDQUFDTixXQUFXLEdBQUdPLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDUixXQUFXLEVBQzdDTSxLQUFLLENBQUNMLEtBQUssR0FBR00sTUFBTSxDQUFDQyxPQUFPLENBQUNQLEtBQUssRUFDbENLLEtBQUssQ0FBQ1AsSUFBSSxHQUFHUSxNQUFNLENBQUNDLE9BQU8sQ0FBQ1QsSUFBSSxFQUNoQ08sS0FBSyxDQUFDSixPQUFPLEdBQUdLLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDTixPQUFPO1NBQzFDO1FBQ0RPLFVBQVUsRUFBRSxDQUFDSCxLQUFLLEVBQUVDLE1BQWdDLEdBQUs7WUFDckRELEtBQUssQ0FBQ04sV0FBVyxHQUFHLEdBQUcsRUFDdEJNLEtBQUssQ0FBQ0wsS0FBSyxHQUFHLEVBQUUsRUFDaEJLLEtBQUssQ0FBQ1AsSUFBSSxHQUFHLEVBQUUsRUFDZk8sS0FBSyxDQUFDSixPQUFPLEdBQUcsRUFBRTtTQUN0QjtLQUNGO0NBQ0YsQ0FBQztBQUVLLE1BQU0sRUFBRUcsT0FBTyxHQUFFSSxVQUFVLEdBQUUsR0FBR04sU0FBUyxDQUFDTyxPQUFPO0FBRXhELGlFQUFlUCxTQUFTLENBQUNRLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcnMtdWkvbmV4dC10ZW1wbGF0ZS1nbW8vLi9yZWR1eC91c2VyU2xpY2UudHM/Y2NhMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlclN0YXRlIHtcclxuICBuYW1lPzogc3RyaW5nXHJcbiAgYWNjZXNzVG9rZW4/OiBzdHJpbmdcclxuICBlbWFpbD86IHN0cmluZ1xyXG4gIHBpY3R1cmU/OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBVc2VyU3RhdGUgPSB7XHJcbiAgbmFtZTogXCJcIixcclxuICBhY2Nlc3NUb2tlbjogXCJcIixcclxuICBlbWFpbDogXCJcIixcclxuICBwaWN0dXJlOiBcIlwiLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwidXNlclwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0VXNlcjogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248VXNlclN0YXRlPikgPT4ge1xyXG4gICAgICA7KHN0YXRlLmFjY2Vzc1Rva2VuID0gYWN0aW9uLnBheWxvYWQuYWNjZXNzVG9rZW4pLFxyXG4gICAgICAgIChzdGF0ZS5lbWFpbCA9IGFjdGlvbi5wYXlsb2FkLmVtYWlsKSxcclxuICAgICAgICAoc3RhdGUubmFtZSA9IGFjdGlvbi5wYXlsb2FkLm5hbWUpLFxyXG4gICAgICAgIChzdGF0ZS5waWN0dXJlID0gYWN0aW9uLnBheWxvYWQucGljdHVyZSlcclxuICAgIH0sXHJcbiAgICBkZWxldGVVc2VyOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxVc2VyU3RhdGU+KSA9PiB7XHJcbiAgICAgIDsoc3RhdGUuYWNjZXNzVG9rZW4gPSBcIiBcIiksXHJcbiAgICAgICAgKHN0YXRlLmVtYWlsID0gXCJcIiksXHJcbiAgICAgICAgKHN0YXRlLm5hbWUgPSBcIlwiKSxcclxuICAgICAgICAoc3RhdGUucGljdHVyZSA9IFwiXCIpXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRVc2VyLCBkZWxldGVVc2VyIH0gPSB1c2VyU2xpY2UuYWN0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclNsaWNlLnJlZHVjZXJcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwibmFtZSIsImFjY2Vzc1Rva2VuIiwiZW1haWwiLCJwaWN0dXJlIiwidXNlclNsaWNlIiwicmVkdWNlcnMiLCJzZXRVc2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZGVsZXRlVXNlciIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/userSlice.ts\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "pakagelogin-nhanqt":
/*!*************************************!*\
  !*** external "pakagelogin-nhanqt" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("pakagelogin-nhanqt");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();