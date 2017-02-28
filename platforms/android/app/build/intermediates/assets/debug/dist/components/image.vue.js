/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-rewriter?id=data-v-4b18e298!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./image.vue?entry=true\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(20),
	  /* template */
	  __webpack_require__(21),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\components\\image.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] image.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4b18e298", Component.options)
	  } else {
	    hotAPI.reload("data-v-4b18e298", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}
	
	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }
	
	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports
	
	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }
	
	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }
	
	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }
	
	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-rewriter?id=data-v-1a381252!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./panel.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(4),
	  /* template */
	  __webpack_require__(5),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\include\\panel.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] panel.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1a381252", Component.options)
	  } else {
	    hotAPI.reload("data-v-1a381252", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
	  props: {
	    type: { default: 'default' },
	    title: { default: '' },
	    paddingBody: { default: 20 },
	    paddingHead: { default: 20 },
	    dataClass: { default: '' }, // FIXME transfer class
	    border: { default: 0 }
	  }
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['panel', 'panel-' + _vm.type],
	    style: ({
	      borderWidth: _vm.border
	    })
	  }, [_c('text', {
	    class: ['panel-header', 'panel-header-' + _vm.type],
	    style: ({
	      paddingTop: _vm.paddingHead,
	      paddingBottom: _vm.paddingHead,
	      paddingLeft: _vm.paddingHead * 1.5,
	      paddingRight: _vm.paddingHead * 1.5
	    })
	  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
	    class: ['panel-body', 'panel-body-' + _vm.type],
	    style: ({
	      paddingTop: _vm.paddingBody,
	      paddingBottom: _vm.paddingBody,
	      paddingLeft: _vm.paddingBody * 1.5,
	      paddingRight: _vm.paddingBody * 1.5
	    })
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1a381252", module.exports)
	  }
	}

/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-rewriter?id=data-v-36c25cae!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./tip.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(12),
	  /* template */
	  __webpack_require__(13),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\include\\tip.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] tip.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-36c25cae", Component.options)
	  } else {
	    hotAPI.reload("data-v-36c25cae", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
	  props: {
	    type: { default: 'success' },
	    value: { default: '' }
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['tip', 'tip-' + _vm.type]
	  }, [_c('text', {
	    class: ['tip-txt', 'tip-txt-' + _vm.type]
	  }, [_vm._v(_vm._s(_vm.value))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-36c25cae", module.exports)
	  }
	}

/***/ },
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
	  data: function () {
	    return {
	      img: '//gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg'
	    };
	  },
	  components: {
	    panel: __webpack_require__(3),
	    tip: __webpack_require__(11)
	  }
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', [_c('panel', {
	    attrs: {
	      "title": "width x height",
	      "type": "primary"
	    }
	  }, [_c('tip', {
	    staticStyle: {
	      "margin-bottom": "20px"
	    },
	    attrs: {
	      "type": "warning",
	      "value": "Weex screen width is 750"
	    }
	  }), _vm._v(" "), _c('div', {
	    staticStyle: {
	      "flex-direction": "row"
	    }
	  }, [_c('image', {
	    staticClass: "img",
	    staticStyle: {
	      "width": "300px",
	      "height": "300px"
	    },
	    attrs: {
	      "src": _vm.img
	    }
	  }), _vm._v(" "), _c('image', {
	    staticClass: "img",
	    staticStyle: {
	      "width": "200px",
	      "height": "200px"
	    },
	    attrs: {
	      "src": _vm.img
	    }
	  }), _vm._v(" "), _c('image', {
	    staticClass: "img",
	    staticStyle: {
	      "width": "50px",
	      "height": "50px"
	    },
	    attrs: {
	      "src": _vm.img
	    }
	  })])], 1), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "GIF Animation",
	      "type": "primary"
	    }
	  }, [_c('tip', {
	    staticStyle: {
	      "margin-bottom": "20px"
	    },
	    attrs: {
	      "type": "warning",
	      "value": "Depanding on Native ImageSDK"
	    }
	  }), _vm._v(" "), _c('div', {
	    staticStyle: {
	      "flex-direction": "row"
	    }
	  }, [_c('image', {
	    staticClass: "img",
	    staticStyle: {
	      "width": "96px",
	      "height": "96px"
	    },
	    attrs: {
	      "src": "https://gtd.alicdn.com/tps/i4/T1HcvHXd4nXXb6ROYh-48-48.gif"
	    }
	  }), _vm._v(" "), _c('image', {
	    staticClass: "img",
	    staticStyle: {
	      "width": "68px",
	      "height": "68px",
	      "margin-left": "20px"
	    },
	    attrs: {
	      "src": "https://gw.alicdn.com/tps/TB1El.mKXXXXXXyapXXXXXXXXXX-34-34.gif"
	    }
	  })])], 1), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "Base64",
	      "type": "primary"
	    }
	  }, [_c('tip', {
	    staticStyle: {
	      "margin-bottom": "20px"
	    },
	    attrs: {
	      "type": "warning",
	      "value": "Depanding on Native ImageSDK"
	    }
	  }), _vm._v(" "), _c('div', {
	    staticStyle: {
	      "flex-direction": "row"
	    }
	  }, [_c('image', {
	    staticClass: "img",
	    staticStyle: {
	      "width": "96px",
	      "height": "96px"
	    },
	    attrs: {
	      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAO1QTFRFhomSb3J8XGBrdnqDgYWNlJefV1tmfoGKU1diT1NfgISNgoWOYmZwio2Vi4+Wc3eAkJObZGhzUlZiaGt2U1djfYCKZGdyhYiQeHyFio6VgYWOVVllbHB6XWFsY2ZxaWx3jZCYXmFsfYCJcnZ/UVVham54V1tng4aPb3N8WV1pX2JtZWl0YWVvVlpmiYyUWVxohomRd3uEdHiBeX2GZ2t1hIeQVFhkf4OMbnJ8fYGKdnqEb3N9kJScY2dycnaAjpKZdHeBjpKajI+Yc3eBhYiRf4KLXmFtio6Wi4+XjZCZkJSbkZScjI+XlJifTlJe+rAZcwAAAZBJREFUeNp0lOeWgjAQhSdUBQRRbFjX7tpW3XUt23tL3v9xNigJIHh/zRk+5iR3ZgIkULWmwgv+A7VWDWWBR/nSt2gLUzIVbLH1lo8RRW1wEfqxPtCKUaKTMUhURuUhTIi6Q07l6LuAEFdpEld6tWNEx00CKKJ3jsR1xSHJcj4bB+LmkpxT49Yj8mqQUVBBciUk8ITepESJ+5AqY1+uwny5IjDPcADoN0BIwjLOsjKZOewtbi/9fvi338a44CetIai2H/cokPLj9tfEj2wVzD4rIWMlfpu+CXc5Pw4qh5X7AUw4gZIswUENGT8lAN1fMBVeAxIIxYR3Nin0imOe52emdxkyP8aY+0S9Y2d63cNoxvACRTaeI70slst+cjYCAnXmuuS1RKKmy1hKBX0hzaC3KOsxsmz2Ir2NzMcEbVCo+cf5oDOWOzNAucpxxoglnZlT1+KzXk4kymKwL4ttN+73dhHeuWV85zLL073Vw3v7MdDuE3a/JRrCmqwFQ2yV8gmvg/d+aPCMH0GLvB//AgwAo1MTpxsaxVoAAAAASUVORK5CYII="
	    }
	  }), _vm._v(" "), _c('image', {
	    staticClass: "img",
	    staticStyle: {
	      "width": "68px",
	      "height": "68px",
	      "margin-left": "20px"
	    },
	    attrs: {
	      "src": "data:image/gif;base64,R0lGODlhIgAiANU7AMvLy83Nzdra2srKysnJyejo6MbGxtzc3M7Ozuzs7NTU1N3d3fz8/NfX1/j4+Ovr6+/v79DQ0Obm5v39/d/f3/f398/Pz9vb2+np6fn5+f7+/tXV1fX19dnZ2erq6tHR0fb29sjIyMfHx+Li4vLy8u7u7ufn5/r6+uPj49bW1tPT09LS0sTExPT09ODg4O3t7eHh4eTk5MXFxd7e3vHx8fPz8/Dw8OXl5djY2P///8zMzP///wAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0Q0QxODlDNENEOEQxMUUzOEIzM0I1ODVGNjU1MjBBQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0Q0QxODlDNUNEOEQxMUUzOEIzM0I1ODVGNjU1MjBBQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRDRDE4OUMyQ0Q4RDExRTM4QjMzQjU4NUY2NTUyMEFCIiBzdFJl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"
	    }
	  })])], 1), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "resize",
	      "type": "primary"
	    }
	  }, [_c('panel', {
	    attrs: {
	      "title": "resize=stretch(default) 600 x 200 "
	    }
	  }, [_c('image', {
	    staticClass: "img",
	    staticStyle: {
	      "width": "600px",
	      "height": "200px",
	      "border-style": "solid",
	      "border-width": "1px",
	      "border-color": "#333"
	    },
	    attrs: {
	      "src": _vm.img,
	      "resize": "stretch"
	    }
	  })]), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "resize=contain 600 x 200 "
	    }
	  }, [_c('image', {
	    staticClass: "img",
	    staticStyle: {
	      "width": "600px",
	      "height": "200px",
	      "border-style": "solid",
	      "border-width": "1px",
	      "border-color": "#333"
	    },
	    attrs: {
	      "src": _vm.img,
	      "resize": "contain"
	    }
	  })]), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "resize=cover 600 x 200"
	    }
	  }, [_c('image', {
	    staticClass: "img",
	    staticStyle: {
	      "width": "600px",
	      "height": "200px",
	      "border-style": "solid",
	      "border-width": "1px",
	      "border-color": "#333"
	    },
	    attrs: {
	      "src": _vm.img,
	      "resize": "cover"
	    }
	  })])], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-4b18e298", module.exports)
	  }
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQ/ZWQ2NCoqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbWFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcz9kNGYzKioqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3BhbmVsLnZ1ZT80ZWM2KioqIiwid2VicGFjazovLy9wYW5lbC52dWU/NWJhZCoqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9wYW5lbC52dWU/ZDliOCoqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS90aXAudnVlPzY3NDQiLCJ3ZWJwYWNrOi8vL3RpcC52dWU/NzBhNCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS90aXAudnVlPzdmNGUqIiwid2VicGFjazovLy9pbWFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UudnVlPzY0ZmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDckNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUErRSxpREFBaUQsSUFBSTtBQUNwSSxvQ0FBbUM7O0FBRW5DO0FBQ0EsYUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxFQUFDOztBQUVEOzs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6ImNvbXBvbmVudHNcXGltYWdlLnZ1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZkYjljMDA4OWY2ZDM4OGI0YjRkIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi00YjE4ZTI5OCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2ltYWdlLnZ1ZT9lbnRyeT10cnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2ltYWdlLnZ1ZT9lbnRyeT10cnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTRiMThlMjk4IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbWFnZS52dWU/ZW50cnk9dHJ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTpcXFxcd2Vla1N0dWR5XFxcXHdlZXgyXFxcXHdlZXgzXFxcXHNyY1xcXFxjb21wb25lbnRzXFxcXGltYWdlLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGltYWdlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00YjE4ZTI5OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTRiMThlMjk4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2ltYWdlLnZ1ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgc2NvcGVJZCxcbiAgY3NzTW9kdWxlc1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgLy8gaW5qZWN0IGNzc01vZHVsZXNcbiAgaWYgKGNzc01vZHVsZXMpIHtcbiAgICB2YXIgY29tcHV0ZWQgPSBvcHRpb25zLmNvbXB1dGVkIHx8IChvcHRpb25zLmNvbXB1dGVkID0ge30pXG4gICAgT2JqZWN0LmtleXMoY3NzTW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbW9kdWxlID0gY3NzTW9kdWxlc1trZXldXG4gICAgICBjb21wdXRlZFtrZXldID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbW9kdWxlIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzcgMzggMzkgNDAgNDEgNDIgNDMgNDQgNDUgNDYgNDcgNDggNDkgNTAgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjAgNjEgNjIgNjMgNjQgNjUgNjYgNjcgNjggNjkgNzAgNzEgNzIgNzMgNzQgNzUgNzYgNzcgNzggNzkgODAgODEgODIgODMiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTFhMzgxMjUyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFuZWwudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3BhbmVsLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0xYTM4MTI1MiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcGFuZWwudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFx3ZWVrU3R1ZHlcXFxcd2VleDJcXFxcd2VleDNcXFxcc3JjXFxcXGluY2x1ZGVcXFxccGFuZWwudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcGFuZWwudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTFhMzgxMjUyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMWEzODEyNTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luY2x1ZGUvcGFuZWwudnVlXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDYgNyA5IDExIDM3IDM4IDM5IDQwIDQxIDU2IDU3IDU4IDU5IDgzIiwiPCEtLSBJbnNwaXJlZCBieSBib290c3RyYXAgaHR0cDovL2dldGJvb3RzdHJhcC5jb20vIC0tPlxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdlxyXG4gICAgOmNsYXNzPVwiWydwYW5lbCcsICdwYW5lbC0nICsgdHlwZV1cIlxyXG4gICAgOnN0eWxlPVwieyBib3JkZXJXaWR0aDogYm9yZGVyIH1cIj5cclxuICAgIDx0ZXh0XHJcbiAgICAgIDpjbGFzcz1cIlsncGFuZWwtaGVhZGVyJywgJ3BhbmVsLWhlYWRlci0nICsgdHlwZV1cIlxyXG4gICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgcGFkZGluZ1RvcDogcGFkZGluZ0hlYWQsXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogcGFkZGluZ0hlYWQsXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHBhZGRpbmdIZWFkKjEuNSxcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmdIZWFkKjEuNVxyXG4gICAgICB9XCI+e3t0aXRsZX19PC90ZXh0PlxyXG4gICAgPGRpdlxyXG4gICAgICA6Y2xhc3M9XCJbJ3BhbmVsLWJvZHknLCAncGFuZWwtYm9keS0nICsgdHlwZV1cIlxyXG4gICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgcGFkZGluZ1RvcDogcGFkZGluZ0JvZHksXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogcGFkZGluZ0JvZHksXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHBhZGRpbmdCb2R5KjEuNSxcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmdCb2R5KjEuNVxyXG4gICAgICB9XCI+XHJcbiAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHR5cGU6IHsgZGVmYXVsdDogJ2RlZmF1bHQnIH0sXHJcbiAgICAgIHRpdGxlOiB7IGRlZmF1bHQ6ICcnIH0sXHJcbiAgICAgIHBhZGRpbmdCb2R5OiB7IGRlZmF1bHQ6IDIwIH0sXHJcbiAgICAgIHBhZGRpbmdIZWFkOiB7IGRlZmF1bHQ6IDIwIH0sXHJcbiAgICAgIGRhdGFDbGFzczogeyBkZWZhdWx0OiAnJyB9LCAvLyBGSVhNRSB0cmFuc2ZlciBjbGFzc1xyXG4gICAgICBib3JkZXI6eyBkZWZhdWx0OiAwIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gIC5wYW5lbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7Ki9cclxuICAgIC8qYm9yZGVyLXJhZGl1czogMTBweDsqL1xyXG4gICAgLyotd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSk7Ki9cclxuICAgIC8qYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA1KTsqL1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkZGRkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtZGVmYXVsdCB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtcHJpbWFyeSB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtc3VjY2VzcyB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig3NiwgMTc0LCA3Nik7XHJcblxyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWluZm8ge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNzAsIDE4NCwgMjE4KTtcclxuXHJcbiAgfVxyXG5cclxuICAucGFuZWwtd2FybmluZyB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzgsIDE2MiwgNTQpO1xyXG5cclxuICB9XHJcblxyXG4gIC5wYW5lbC1kYW5nZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjEyLCA2MywgNTgpO1xyXG5cclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIC8qcGFkZGluZy1sZWZ0OiAxMnB4OyovXHJcbiAgICAvKnBhZGRpbmctcmlnaHQ6IDEycHg7Ki9cclxuICAgIC8qcGFkZGluZy10b3A6IDIwcHg7Ki9cclxuICAgIC8qcGFkZGluZy1ib3R0b206IDIwcHg7Ki9cclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlci1kZWZhdWx0IHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXItcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDk2LCAxNDQpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyLXN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCAxODQsIDkyKTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlci1pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MSwgMTkyLCAyMjIpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyLXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTczLCA3OCk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXItZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTcsIDgzLCA3OSk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5IHtcclxuICAgIC8qcGFkZGluZy1sZWZ0OiAxMnB4OyovXHJcbiAgICAvKnBhZGRpbmctcmlnaHQ6IDEycHg7Ki9cclxuICAgIC8qcGFkZGluZy10b3A6IDIwcHg7Ki9cclxuICAgIC8qcGFkZGluZy1ib3R0b206IDIwcHg7Ki9cclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5LWRlZmF1bHQge1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHktcHJpbWFyeSB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtYm9keS1zdWNjZXNzIHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5LWluZm8ge1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHktd2FybmluZyB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtYm9keS1kYW5nZXIge1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHBhbmVsLnZ1ZT80N2MyM2U0NiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIGNsYXNzOiBbJ3BhbmVsJywgJ3BhbmVsLScgKyBfdm0udHlwZV0sXG4gICAgc3R5bGU6ICh7XG4gICAgICBib3JkZXJXaWR0aDogX3ZtLmJvcmRlclxuICAgIH0pXG4gIH0sIFtfYygndGV4dCcsIHtcbiAgICBjbGFzczogWydwYW5lbC1oZWFkZXInLCAncGFuZWwtaGVhZGVyLScgKyBfdm0udHlwZV0sXG4gICAgc3R5bGU6ICh7XG4gICAgICBwYWRkaW5nVG9wOiBfdm0ucGFkZGluZ0hlYWQsXG4gICAgICBwYWRkaW5nQm90dG9tOiBfdm0ucGFkZGluZ0hlYWQsXG4gICAgICBwYWRkaW5nTGVmdDogX3ZtLnBhZGRpbmdIZWFkICogMS41LFxuICAgICAgcGFkZGluZ1JpZ2h0OiBfdm0ucGFkZGluZ0hlYWQgKiAxLjVcbiAgICB9KVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiBbJ3BhbmVsLWJvZHknLCAncGFuZWwtYm9keS0nICsgX3ZtLnR5cGVdLFxuICAgIHN0eWxlOiAoe1xuICAgICAgcGFkZGluZ1RvcDogX3ZtLnBhZGRpbmdCb2R5LFxuICAgICAgcGFkZGluZ0JvdHRvbTogX3ZtLnBhZGRpbmdCb2R5LFxuICAgICAgcGFkZGluZ0xlZnQ6IF92bS5wYWRkaW5nQm9keSAqIDEuNSxcbiAgICAgIHBhZGRpbmdSaWdodDogX3ZtLnBhZGRpbmdCb2R5ICogMS41XG4gICAgfSlcbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTFhMzgxMjUyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0xYTM4MTI1MiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2luY2x1ZGUvcGFuZWwudnVlXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDYgNyA5IDExIDM3IDM4IDM5IDQwIDQxIDU2IDU3IDU4IDU5IDgzIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0zNmMyNWNhZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RpcC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGlwLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zNmMyNWNhZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdGlwLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTpcXFxcd2Vla1N0dWR5XFxcXHdlZXgyXFxcXHdlZXgzXFxcXHNyY1xcXFxpbmNsdWRlXFxcXHRpcC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0aXAudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTM2YzI1Y2FlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMzZjMjVjYWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luY2x1ZGUvdGlwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMzcgNTcgNTggODMiLCI8IS0tIEluc3BpcmVkIGJ5IGJvb3RzdHJhcCBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8gLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2IDpjbGFzcz1cIlsndGlwJywgJ3RpcC0nICsgdHlwZV1cIj5cclxuICAgIDx0ZXh0IDpjbGFzcz1cIlsndGlwLXR4dCcsICd0aXAtdHh0LScgKyB0eXBlXVwiPnt7dmFsdWV9fTwvdGV4dD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB0eXBlOiB7IGRlZmF1bHQ6ICdzdWNjZXNzJyB9LFxyXG4gICAgICB2YWx1ZTogeyBkZWZhdWx0OiAnJyB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICAudGlwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzZweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDM2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gIC50aXAtdHh0e1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgLnRpcC1zdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmYwZDg7XHJcbiAgICBib3JkZXItY29sb3I6ICNkNmU5YzY7XHJcbiAgfVxyXG5cclxuICAudGlwLXR4dC1zdWNjZXNzIHtcclxuICAgIGNvbG9yOiAjM2M3NjNkO1xyXG4gIH1cclxuXHJcbiAgLnRpcC1pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWVkZjc7XHJcbiAgICBib3JkZXItY29sb3I6ICNiY2U4ZjE7XHJcbiAgfVxyXG5cclxuICAudGlwLXR4dC1pbmZvIHtcclxuICAgIGNvbG9yOiAjMzE3MDhmO1xyXG4gIH1cclxuXHJcbiAgLnRpcC13YXJuaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7XHJcbiAgICBib3JkZXItY29sb3I6ICNmYWViY2M7XHJcbiAgfVxyXG5cclxuICAudGlwLXR4dC13YXJuaW5nIHtcclxuICAgIGNvbG9yOiAjOGE2ZDNiO1xyXG4gIH1cclxuXHJcbiAgLnRpcC1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZGVkZTtcclxuICAgIGJvcmRlci1jb2xvcjogI2ViY2NkMTtcclxuICB9XHJcblxyXG4gIC50aXAtdHh0LWRhbmdlciB7XHJcbiAgICBjb2xvcjogI2E5NDQ0MjtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0aXAudnVlPzgwZGEyMDVjIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsndGlwJywgJ3RpcC0nICsgX3ZtLnR5cGVdXG4gIH0sIFtfYygndGV4dCcsIHtcbiAgICBjbGFzczogWyd0aXAtdHh0JywgJ3RpcC10eHQtJyArIF92bS50eXBlXVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udmFsdWUpKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMzZjMjVjYWVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTM2YzI1Y2FlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvaW5jbHVkZS90aXAudnVlXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAzNyA1NyA1OCA4MyIsIjx0ZW1wbGF0ZT5cclxuICA8c2Nyb2xsZXI+XHJcbiAgICA8cGFuZWwgdGl0bGU9XCJ3aWR0aCB4IGhlaWdodFwiIHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgIDx0aXAgdHlwZT1cIndhcm5pbmdcIiB2YWx1ZT1cIldlZXggc2NyZWVuIHdpZHRoIGlzIDc1MFwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMjBweDtcIj48L3RpcD5cclxuICAgICAgPGRpdiBzdHlsZT1cImZsZXgtZGlyZWN0aW9uOnJvd1wiPlxyXG4gICAgICAgIDxpbWFnZSBjbGFzcz1cImltZ1wiIHN0eWxlPVwid2lkdGg6IDMwMHB4OyBoZWlnaHQ6IDMwMHB4O1wiIDpzcmM9XCJpbWdcIj48L2ltYWdlPlxyXG4gICAgICAgIDxpbWFnZSBjbGFzcz1cImltZ1wiIHN0eWxlPVwid2lkdGg6IDIwMHB4OyBoZWlnaHQ6IDIwMHB4O1wiIDpzcmM9XCJpbWdcIj48L2ltYWdlPlxyXG4gICAgICAgIDxpbWFnZSBjbGFzcz1cImltZ1wiIHN0eWxlPVwid2lkdGg6IDUwcHg7IGhlaWdodDogNTBweDtcIiA6c3JjPVwiaW1nXCI+PC9pbWFnZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3BhbmVsPlxyXG4gICAgPHBhbmVsIHRpdGxlPVwiR0lGIEFuaW1hdGlvblwiIHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgIDx0aXAgdHlwZT1cIndhcm5pbmdcIiB2YWx1ZT1cIkRlcGFuZGluZyBvbiBOYXRpdmUgSW1hZ2VTREtcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDIwcHg7XCI+PC90aXA+XHJcbiAgICAgIDxkaXYgc3R5bGU9XCJmbGV4LWRpcmVjdGlvbjpyb3dcIj5cclxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJpbWdcIiBzdHlsZT1cIndpZHRoOiA5NnB4OyBoZWlnaHQ6IDk2cHg7XCIgc3JjPVwiaHR0cHM6Ly9ndGQuYWxpY2RuLmNvbS90cHMvaTQvVDFIY3ZIWGQ0blhYYjZST1loLTQ4LTQ4LmdpZlwiPjwvaW1hZ2U+XHJcbiAgICAgICAgPGltYWdlIGNsYXNzPVwiaW1nXCIgc3R5bGU9XCJ3aWR0aDogNjhweDsgaGVpZ2h0OiA2OHB4O21hcmdpbi1sZWZ0OjIwcHg7XCIgc3JjPVwiaHR0cHM6Ly9ndy5hbGljZG4uY29tL3Rwcy9UQjFFbC5tS1hYWFhYWHlhcFhYWFhYWFhYWFgtMzQtMzQuZ2lmXCI+PC9pbWFnZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3BhbmVsPlxyXG4gICAgPHBhbmVsIHRpdGxlPVwiQmFzZTY0XCIgdHlwZT1cInByaW1hcnlcIj5cclxuICAgICAgPHRpcCB0eXBlPVwid2FybmluZ1wiIHZhbHVlPVwiRGVwYW5kaW5nIG9uIE5hdGl2ZSBJbWFnZVNES1wiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMjBweDtcIj48L3RpcD5cclxuICAgICAgPGRpdiBzdHlsZT1cImZsZXgtZGlyZWN0aW9uOnJvd1wiPlxyXG4gICAgICAgIDxpbWFnZSBjbGFzcz1cImltZ1wiIHN0eWxlPVwid2lkdGg6IDk2cHg7IGhlaWdodDogOTZweDtcIiBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNFQUFBQWhDQU1BQUFCZ09qSmRBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQU8xUVRGUkZob21TYjNKOFhHQnJkbnFEZ1lXTmxKZWZWMXRtZm9HS1UxZGlUMU5mZ0lTTmdvV09ZbVp3aW8yVmk0K1djM2VBa0pPYlpHaHpVbFppYUd0MlUxZGpmWUNLWkdkeWhZaVFlSHlGaW82VmdZV09WVmxsYkhCNlhXRnNZMlp4YVd4M2paQ1lYbUZzZllDSmNuWi9VVlZoYW01NFYxdG5nNGFQYjNOOFdWMXBYMkp0WldsMFlXVnZWbHBtaVl5VVdWeG9ob21SZDN1RWRIaUJlWDJHWjJ0MWhJZVFWRmhrZjRPTWJuSjhmWUdLZG5xRWIzTjlrSlNjWTJkeWNuYUFqcEtaZEhlQmpwS2FqSStZYzNlQmhZaVJmNEtMWG1GdGlvNldpNCtYalpDWmtKU2JrWlNjakkrWGxKaWZUbEplK3JBWmN3QUFBWkJKUkVGVWVOcDBsT2VXZ2pBUWhTZFVCUVJSYkZqWDd0cFczWFV0MjN0TDN2OXhOaWdKSUhoL3pSays1aVIzWmdJa1VMV213Z3YrQTdWV0RXV0JSL25TdDJnTFV6SVZiTEgxbG84UlJXMXdFZnF4UHRDS1VhS1RNVWhVUnVVaFRJaTZRMDdsNkx1QUVGZHBFbGQ2dFdORXgwMENLS0ozanNSMXhTSEpjajRiQitMbWtweFQ0OVlqOG1xUVVWQkJjaVVrOElUZXBFU0orNUFxWTErdXdueTVJakRQY0FEb04wQkl3akxPc2pLWk9ld3RiaS85ZnZpMzM4YTQ0Q2V0SWFpMkgvY29rUExqOXRmRWoyd1Z6RDRySVdNbGZwdStDWGM1UHc0cWg1WDdBVXc0Z1pJc3dVRU5HVDhsQU4xZk1CVmVBeElJeFlSM05pbjBpbU9lNTJlbWR4a3lQOGFZKzBTOVkyZDYzY05veHZBQ1JUYWVJNzBzbHN0K2NqWUNBblhtdXVTMVJLS215MWhLQlgwaHphQzNLT3N4c216MklyMk56TWNFYlZDbytjZjVvRE9XT3pOQXVjcHh4b2dsblpsVDErS3pYazRreW1Ld0w0dHROKzczZGhIZXVXVjg1ekxMMDczVnczdjdNZER1RTNhL0pSckNtcXdGUTJ5VjhnbXZnL2QrYVBDTUgwR0x2Qi8vQWd3QW8xTVRweHNheFZvQUFBQUFTVVZPUks1Q1lJST1cIj48L2ltYWdlPlxyXG4gICAgICAgIDxpbWFnZSBjbGFzcz1cImltZ1wiIHN0eWxlPVwid2lkdGg6IDY4cHg7IGhlaWdodDogNjhweDttYXJnaW4tbGVmdDoyMHB4O1wiIHNyYz1cImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaElnQWlBTlU3QU12THk4M056ZHJhMnNyS3lzbkp5ZWpvNk1iR3h0emMzTTdPenV6czdOVFUxTjNkM2Z6OC9OZlgxL2o0K092cjYrL3Y3OURRME9ibTV2MzkvZC9mMy9mMzk4L1B6OXZiMitucDZmbjUrZjcrL3RYVjFmWDE5ZG5aMmVycTZ0SFIwZmIyOXNqSXlNZkh4K0xpNHZMeTh1N3U3dWZuNS9yNit1UGo0OWJXMXRQVDA5TFMwc1RFeFBUMDlPRGc0TzN0N2VIaDRlVGs1TVhGeGQ3ZTN2SHg4ZlB6OC9EdzhPWGw1ZGpZMlAvLy84ek16UC8vL3dBQUFBQUFBQUFBQUFBQUFDSC9DMDVGVkZORFFWQkZNaTR3QXdFQUFBQWgvd3RZVFZBZ1JHRjBZVmhOVUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1TXkxak1ERXhJRFkyTGpFME5UWTJNU3dnTWpBeE1pOHdNaTh3TmkweE5EbzFOam95TnlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVOVE5pQW9UV0ZqYVc1MGIzTm9LU0lnZUcxd1RVMDZTVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRG8wUTBReE9EbERORU5FT0VReE1VVXpPRUl6TTBJMU9EVkdOalUxTWpCQlFpSWdlRzF3VFUwNlJHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEbzBRMFF4T0RsRE5VTkVPRVF4TVVVek9FSXpNMEkxT0RWR05qVTFNakJCUWlJK0lEeDRiWEJOVFRwRVpYSnBkbVZrUm5KdmJTQnpkRkpsWmpwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09qUkRSREU0T1VNeVEwUTRSREV4UlRNNFFqTXpRalU0TlVZMk5UVXlNRUZDSWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2pSRFJERTRPVU16UTBRNFJERXhSVE00UWpNelFqVTROVVkyTlRVeU1FRkNJaTgrSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUE4UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrQWYvKy9mejcrdm40OS9iMTlQUHk4ZkR2N3UzczYrcnA2T2ZtNWVUajR1SGczOTdkM052YTJkalgxdFhVMDlMUjBNL096Y3pMeXNuSXg4YkZ4TVBDd2NDL3ZyMjh1N3E1dUxlMnRiU3pzckd3cjY2dHJLdXFxYWlucHFXa282S2hvSitlblp5Ym1wbVlsNWFWbEpPU2taQ1BqbzJNaTRxSmlJZUdoWVNEZ29HQWYzNTlmSHQ2ZVhoM2RuVjBjM0p4Y0c5dWJXeHJhbWxvWjJabFpHTmlZV0JmWGwxY1cxcFpXRmRXVlZSVFVsRlFUMDVOVEV0S1NVaEhSa1ZFUTBKQlFEOCtQVHc3T2prNE56WTFORE15TVRBdkxpMHNLeW9wS0NjbUpTUWpJaUVnSHg0ZEhCc2FHUmdYRmhVVUV4SVJFQThPRFF3TENna0lCd1lGQkFNQ0FRQUFJZmtFQlFBQU93QXNBQUFBQUNJQUlnQUFCdi9BblhCSUZESUVueG1veUd3Nmh3NkxUcmRLUEs5UGhtSTZsV0MveFFOM2FnV0RNV05kaERUSm1aK2dTMW9YVURVb0Q4ZGJPSGswNW9BSUhTOGFZRFJiZ0lsVERUVlhHaWlLa1Z3RlRnd2RrcGc2R0UxeW1aSVJKVVVqbnBrVVJCQ2ttUUpEREJ1ZUFRR0pBQ0VBT3F0Q0NhUWhCZ09BQXhFQUFBdENHUUtlQkFBSXlHa2lGemszSWk2NFVwZ2hDZzQ1RXN0VEFBWVFPUzBETVVLam1MTVBPVGtWQVFSYzNkOGNBWlE3WXBnREF6YnBIRHJ0M0FZbE9UZ2dlQ0RFbUwwQjN3THljK2N0QndnRUhncG11cGR3WHo4ZEFHVEFDMkJDQ0lXSkJBQ3FZemZHd0lFY0hrU00yMUVnRmlZUkM5STl1RGNtMklvQUFHQUlhWUZJRWdCa0FoOFVCSnZUYlVDQVlVSWtrRExBd2lnZ1dMYWdSRWlGNlphUUFsUWxJUjNTS2V1Y0FKdUlUTGprTmMyQ0UweU9sT1dpSXNPVEFnaktObkI3cFlLTHVLUWltSmhneGtFQkpDN25XRkJ3d0FQYVBUczBrSkJ3SU1XR0RTa2FIRUNSb01LVElBQWgrUVFGQUFBN0FDd1BBQTBBRWdBSkFBQUdSTUNkVUtjVEdvM0U0akY1UkRLSFNhVXpDZHRGbjlhcjVJclZCVVFzQStKQkRCa01JU3VTSUpBc2Rna0FnRklvakhhRHBtM25PSktFRlFGcFRUc2dVaStFaVVKQkFDSDVCQVVBQURzQUxBOEFFUUFTQUFnQUFBWWZRSjF3U0N6cUVBK2pjbWg1TFplV3hGT0o4RXlWa3FzUnBpMHV1a1JCRUFBaCtRUUZBQUE3QUN3UEFCRUFFZ0FJQUFBR1djQ2RjRWdVQmtRc0F6RmtNSVNLTzRKQXNrQWtBQUJLb1REYURZWUFneTNuUUhnR0ExSXVWd2s4aFFBWkpBZlNtUWFFMTdwTklCb09PUjRpTVRzaUMyc1BhRVJZS3dFQWNBUWZDbGhRWVFNQmZpeVhVRHNCbUR0QkFDSDVCQVVBQURzQUxBOEFEUUFTQUFrQUFBWlJ3SjF3U0J3Q0FNVmRZSmtNaEdTaVlZREFZaG1TSVZ5SlFuRHRDQXBUWVhZMHlpQzUxaUFHQ0QxeXVjclVhRUJ6QW9YQndBYm5mT2tsT1g0UGVtaUNmMFFRT3lDSlFodzZCRWs3ZDBNbGtwZEJBQ0g1QkFVQUFEc0FMQkFBRFFBUUFBUUFBQVltd04wdUVCQWFqeUdBTVdRWUhJVzZRUVFBME8wQUNJTHlLTHJrYnFMUXpwR1RFSjZHWXhBQUlma0VCUUFBT3dBc0VBQU5BQkFBQkFBQUJpVEEzVTZuRXhxUGdLSXdRRHd1UXpLUkxyQmpzUXhLWXdoWG9oQUlPOU9EQW5ES2prRUFJZmtFQlFBQU93QXNEd0FOQUJJQUNRQUFCa1BBblhCSUhPcDB4UjB5cVR3dW04Nms4d2lEVG8xVG5TUWJGZW9DSXBZQjhUaUdESWFRMGtnUVNCYTdCQUJBS1JSR3UwSFJ0bk1RU1VJVkFXcEpJRTh2VElsQkFDSDVCQVVBQURzQUxBOEFFUUFTQUFnQUFBWWZRSjF3U0N6cUVBK2pjbWg1TFplV3hGT0o4RXlWa3FzUnBpMHV1a1JCRUFBaCtRUUZBQUE3QUN3UEFCRUFFZ0FJQUFBR1djQ2RjRWdVQmtRc0F6RmtNSVNLTzRKQXNrQWtBQUJLb1REYURZWUFneTNuUUhnR0ExSXVWd2s4aFFBWkpBZlNtUWFFMTdwTklCb09PUjRpTVRzaUMyc1BhRVJZS3dFQWNBUWZDbGhRWVFNQmZpeVhVRHNCbUR0QkFDSDVCQVVBQURzQUxBOEFEUUFTQUFrQUFBWlF3SjF3U0J3Q0FNVmRJQ2tNaEdTaVlZREFZaG1TSVZ5SlFuRHRDQXJUZzNJMHlpQzUxaUFHQ0QxeXVjclVhRUJ6QW9YQndBYm5mT2tsT1g0UGVtaUNmMFFRT3lDSlFodzZCRXgzUXlWTWxrRUFJZmtFQldRQU93QXNFQUFOQUJBQUJBQUFCaWJBM1M0UUVCcVBJWUF4WkJnY2hicEJCQURRN1FBSWd2SW91dVJ1b3RET2taTVFub1pqRUFBN1wiPjwvaW1hZ2U+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9wYW5lbD5cclxuICAgIDxwYW5lbCB0aXRsZT1cInJlc2l6ZVwiIHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgIDxwYW5lbCB0aXRsZT1cInJlc2l6ZT1zdHJldGNoKGRlZmF1bHQpIDYwMCB4IDIwMCBcIj5cclxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJpbWdcIiBzdHlsZT1cIiB3aWR0aDogNjAwcHg7IGhlaWdodDogMjAwcHg7Ym9yZGVyLXN0eWxlOiBzb2xpZDtib3JkZXItd2lkdGg6IDFweDtib3JkZXItY29sb3I6ICMzMzM7XCIgOnNyYz1cImltZ1wiIHJlc2l6ZT1cInN0cmV0Y2hcIj48L2ltYWdlPlxyXG4gICAgICA8L3BhbmVsPlxyXG4gICAgICA8cGFuZWwgdGl0bGU9XCJyZXNpemU9Y29udGFpbiA2MDAgeCAyMDAgXCI+XHJcbiAgICAgICAgPGltYWdlIGNsYXNzPVwiaW1nXCIgc3R5bGU9XCIgd2lkdGg6IDYwMHB4OyBoZWlnaHQ6IDIwMHB4O2JvcmRlci1zdHlsZTogc29saWQ7Ym9yZGVyLXdpZHRoOiAxcHg7Ym9yZGVyLWNvbG9yOiAjMzMzO1wiIDpzcmM9XCJpbWdcIiByZXNpemU9XCJjb250YWluXCI+PC9pbWFnZT5cclxuICAgICAgPC9wYW5lbD5cclxuICAgICAgPHBhbmVsIHRpdGxlPVwicmVzaXplPWNvdmVyIDYwMCB4IDIwMFwiPlxyXG4gICAgICAgIDxpbWFnZSBjbGFzcz1cImltZ1wiIHN0eWxlPVwiIHdpZHRoOiA2MDBweDsgaGVpZ2h0OiAyMDBweDtib3JkZXItc3R5bGU6IHNvbGlkO2JvcmRlci13aWR0aDogMXB4O2JvcmRlci1jb2xvcjogIzMzMztcIiA6c3JjPVwiaW1nXCIgcmVzaXplPVwiY292ZXJcIj48L2ltYWdlPlxyXG4gICAgICA8L3BhbmVsPlxyXG4gICAgPC9wYW5lbD5cclxuICA8L3Njcm9sbGVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlPlxyXG4gIC5pbWcge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGltZzogJy8vZ3cuYWxpY2RuLmNvbS90cHMvaTIvVEIxRHBzbU1wWFhYWGFiYVhYWDIweVNRVlhYLTUxMi01MTIucG5nXzQwMHg0MDAuanBnJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBwYW5lbDogcmVxdWlyZSgnLi4vaW5jbHVkZS9wYW5lbC52dWUnKSxcclxuICAgICAgdGlwOiByZXF1aXJlKCcuLi9pbmNsdWRlL3RpcC52dWUnKVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBpbWFnZS52dWU/MDhhMDk4MjYiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3Njcm9sbGVyJywgW19jKCdwYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIndpZHRoIHggaGVpZ2h0XCIsXG4gICAgICBcInR5cGVcIjogXCJwcmltYXJ5XCJcbiAgICB9XG4gIH0sIFtfYygndGlwJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIyMHB4XCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ3YXJuaW5nXCIsXG4gICAgICBcInZhbHVlXCI6IFwiV2VleCBzY3JlZW4gd2lkdGggaXMgNzUwXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImZsZXgtZGlyZWN0aW9uXCI6IFwicm93XCJcbiAgICB9XG4gIH0sIFtfYygnaW1hZ2UnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW1nXCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIzMDBweFwiLFxuICAgICAgXCJoZWlnaHRcIjogXCIzMDBweFwiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogX3ZtLmltZ1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdpbWFnZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbWdcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjIwMHB4XCIsXG4gICAgICBcImhlaWdodFwiOiBcIjIwMHB4XCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uaW1nXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2ltYWdlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImltZ1wiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiNTBweFwiLFxuICAgICAgXCJoZWlnaHRcIjogXCI1MHB4XCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uaW1nXG4gICAgfVxuICB9KV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdwYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIkdJRiBBbmltYXRpb25cIixcbiAgICAgIFwidHlwZVwiOiBcInByaW1hcnlcIlxuICAgIH1cbiAgfSwgW19jKCd0aXAnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwibWFyZ2luLWJvdHRvbVwiOiBcIjIwcHhcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcIndhcm5pbmdcIixcbiAgICAgIFwidmFsdWVcIjogXCJEZXBhbmRpbmcgb24gTmF0aXZlIEltYWdlU0RLXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImZsZXgtZGlyZWN0aW9uXCI6IFwicm93XCJcbiAgICB9XG4gIH0sIFtfYygnaW1hZ2UnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW1nXCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCI5NnB4XCIsXG4gICAgICBcImhlaWdodFwiOiBcIjk2cHhcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly9ndGQuYWxpY2RuLmNvbS90cHMvaTQvVDFIY3ZIWGQ0blhYYjZST1loLTQ4LTQ4LmdpZlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2ltYWdlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImltZ1wiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiNjhweFwiLFxuICAgICAgXCJoZWlnaHRcIjogXCI2OHB4XCIsXG4gICAgICBcIm1hcmdpbi1sZWZ0XCI6IFwiMjBweFwiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMUVsLm1LWFhYWFhYeWFwWFhYWFhYWFhYWC0zNC0zNC5naWZcIlxuICAgIH1cbiAgfSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJCYXNlNjRcIixcbiAgICAgIFwidHlwZVwiOiBcInByaW1hcnlcIlxuICAgIH1cbiAgfSwgW19jKCd0aXAnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwibWFyZ2luLWJvdHRvbVwiOiBcIjIwcHhcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcIndhcm5pbmdcIixcbiAgICAgIFwidmFsdWVcIjogXCJEZXBhbmRpbmcgb24gTmF0aXZlIEltYWdlU0RLXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImZsZXgtZGlyZWN0aW9uXCI6IFwicm93XCJcbiAgICB9XG4gIH0sIFtfYygnaW1hZ2UnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW1nXCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCI5NnB4XCIsXG4gICAgICBcImhlaWdodFwiOiBcIjk2cHhcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDRUFBQUFoQ0FNQUFBQmdPakpkQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUFPMVFURlJGaG9tU2IzSjhYR0JyZG5xRGdZV05sSmVmVjF0bWZvR0tVMWRpVDFOZmdJU05nb1dPWW1ad2lvMlZpNCtXYzNlQWtKT2JaR2h6VWxaaWFHdDJVMWRqZllDS1pHZHloWWlRZUh5RmlvNlZnWVdPVlZsbGJIQjZYV0ZzWTJaeGFXeDNqWkNZWG1Gc2ZZQ0pjblovVVZWaGFtNTRWMXRuZzRhUGIzTjhXVjFwWDJKdFpXbDBZV1Z2VmxwbWlZeVVXVnhvaG9tUmQzdUVkSGlCZVgyR1oydDFoSWVRVkZoa2Y0T01ibko4ZllHS2RucUViM045a0pTY1kyZHljbmFBanBLWmRIZUJqcEthakkrWWMzZUJoWWlSZjRLTFhtRnRpbzZXaTQrWGpaQ1prSlNia1pTY2pJK1hsSmlmVGxKZStyQVpjd0FBQVpCSlJFRlVlTnAwbE9lV2dqQVFoU2RVQlFSUmJGalg3dHBXM1hVdDIzdEwzdjl4TmlnSklIaC96UmsrNWlSM1pnSWtVTFdtd2d2K0E3VldEV1dCUi9uU3QyZ0xVeklWYkxIMWxvOFJSVzF3RWZxeFB0Q0tVYUtUTVVoVVJ1VWhUSWk2UTA3bDZMdUFFRmRwRWxkNnRXTkV4MDBDS0tKM2pzUjF4U0hKY2o0YkIrTG1rcHhUNDlZajhtcVFVVkJCY2lVazhJVGVwRVNKKzVBcVkxK3V3bnk1SWpEUGNBRG9OMEJJd2pMT3NqS1pPZXd0YmkvOWZ2aTMzOGE0NENldElhaTJIL2Nva1BMajl0ZkVqMndWekQ0cklXTWxmcHUrQ1hjNVB3NHFoNVg3QVV3NGdaSXN3VUVOR1Q4bEFOMWZNQlZlQXhJSXhZUjNOaW4waW1PZTUyZW1keGt5UDhhWSswUzlZMmQ2M2NOb3h2QUNSVGFlSTcwc2xzdCtjallDQW5YbXV1UzFSS0tteTFoS0JYMGh6YUMzS09zeHNtejJJcjJOek1jRWJWQ28rY2Y1b0RPV096TkF1Y3B4eG9nbG5abFQxK0t6WGs0a3ltS3dMNHR0Tis3M2RoSGV1V1Y4NXpMTDA3M1Z3M3Y3TWREdUUzYS9KUnJDbXF3RlEyeVY4Z212Zy9kK2FQQ01IMEdMdkIvL0Fnd0FvMU1UcHhzYXhWb0FBQUFBU1VWT1JLNUNZSUk9XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW1hZ2UnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW1nXCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCI2OHB4XCIsXG4gICAgICBcImhlaWdodFwiOiBcIjY4cHhcIixcbiAgICAgIFwibWFyZ2luLWxlZnRcIjogXCIyMHB4XCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaElnQWlBTlU3QU12THk4M056ZHJhMnNyS3lzbkp5ZWpvNk1iR3h0emMzTTdPenV6czdOVFUxTjNkM2Z6OC9OZlgxL2o0K092cjYrL3Y3OURRME9ibTV2MzkvZC9mMy9mMzk4L1B6OXZiMitucDZmbjUrZjcrL3RYVjFmWDE5ZG5aMmVycTZ0SFIwZmIyOXNqSXlNZkh4K0xpNHZMeTh1N3U3dWZuNS9yNit1UGo0OWJXMXRQVDA5TFMwc1RFeFBUMDlPRGc0TzN0N2VIaDRlVGs1TVhGeGQ3ZTN2SHg4ZlB6OC9EdzhPWGw1ZGpZMlAvLy84ek16UC8vL3dBQUFBQUFBQUFBQUFBQUFDSC9DMDVGVkZORFFWQkZNaTR3QXdFQUFBQWgvd3RZVFZBZ1JHRjBZVmhOVUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1TXkxak1ERXhJRFkyTGpFME5UWTJNU3dnTWpBeE1pOHdNaTh3TmkweE5EbzFOam95TnlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVOVE5pQW9UV0ZqYVc1MGIzTm9LU0lnZUcxd1RVMDZTVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRG8wUTBReE9EbERORU5FT0VReE1VVXpPRUl6TTBJMU9EVkdOalUxTWpCQlFpSWdlRzF3VFUwNlJHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEbzBRMFF4T0RsRE5VTkVPRVF4TVVVek9FSXpNMEkxT0RWR05qVTFNakJCUWlJK0lEeDRiWEJOVFRwRVpYSnBkbVZrUm5KdmJTQnpkRkpsWmpwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09qUkRSREU0T1VNeVEwUTRSREV4UlRNNFFqTXpRalU0TlVZMk5UVXlNRUZDSWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2pSRFJERTRPVU16UTBRNFJERXhSVE00UWpNelFqVTROVVkyTlRVeU1FRkNJaTgrSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUE4UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrQWYvKy9mejcrdm40OS9iMTlQUHk4ZkR2N3UzczYrcnA2T2ZtNWVUajR1SGczOTdkM052YTJkalgxdFhVMDlMUjBNL096Y3pMeXNuSXg4YkZ4TVBDd2NDL3ZyMjh1N3E1dUxlMnRiU3pzckd3cjY2dHJLdXFxYWlucHFXa282S2hvSitlblp5Ym1wbVlsNWFWbEpPU2taQ1BqbzJNaTRxSmlJZUdoWVNEZ29HQWYzNTlmSHQ2ZVhoM2RuVjBjM0p4Y0c5dWJXeHJhbWxvWjJabFpHTmlZV0JmWGwxY1cxcFpXRmRXVlZSVFVsRlFUMDVOVEV0S1NVaEhSa1ZFUTBKQlFEOCtQVHc3T2prNE56WTFORE15TVRBdkxpMHNLeW9wS0NjbUpTUWpJaUVnSHg0ZEhCc2FHUmdYRmhVVUV4SVJFQThPRFF3TENna0lCd1lGQkFNQ0FRQUFJZmtFQlFBQU93QXNBQUFBQUNJQUlnQUFCdi9BblhCSUZESUVueG1veUd3Nmh3NkxUcmRLUEs5UGhtSTZsV0MveFFOM2FnV0RNV05kaERUSm1aK2dTMW9YVURVb0Q4ZGJPSGswNW9BSUhTOGFZRFJiZ0lsVERUVlhHaWlLa1Z3RlRnd2RrcGc2R0UxeW1aSVJKVVVqbnBrVVJCQ2ttUUpEREJ1ZUFRR0pBQ0VBT3F0Q0NhUWhCZ09BQXhFQUFBdENHUUtlQkFBSXlHa2lGemszSWk2NFVwZ2hDZzQ1RXN0VEFBWVFPUzBETVVLam1MTVBPVGtWQVFSYzNkOGNBWlE3WXBnREF6YnBIRHJ0M0FZbE9UZ2dlQ0RFbUwwQjN3THljK2N0QndnRUhncG11cGR3WHo4ZEFHVEFDMkJDQ0lXSkJBQ3FZemZHd0lFY0hrU00yMUVnRmlZUkM5STl1RGNtMklvQUFHQUlhWUZJRWdCa0FoOFVCSnZUYlVDQVlVSWtrRExBd2lnZ1dMYWdSRWlGNlphUUFsUWxJUjNTS2V1Y0FKdUlUTGprTmMyQ0UweU9sT1dpSXNPVEFnaktObkI3cFlLTHVLUWltSmhneGtFQkpDN25XRkJ3d0FQYVBUczBrSkJ3SU1XR0RTa2FIRUNSb01LVElBQWgrUVFGQUFBN0FDd1BBQTBBRWdBSkFBQUdSTUNkVUtjVEdvM0U0akY1UkRLSFNhVXpDZHRGbjlhcjVJclZCVVFzQStKQkRCa01JU3VTSUpBc2Rna0FnRklvakhhRHBtM25PSktFRlFGcFRUc2dVaStFaVVKQkFDSDVCQVVBQURzQUxBOEFFUUFTQUFnQUFBWWZRSjF3U0N6cUVBK2pjbWg1TFplV3hGT0o4RXlWa3FzUnBpMHV1a1JCRUFBaCtRUUZBQUE3QUN3UEFCRUFFZ0FJQUFBR1djQ2RjRWdVQmtRc0F6RmtNSVNLTzRKQXNrQWtBQUJLb1REYURZWUFneTNuUUhnR0ExSXVWd2s4aFFBWkpBZlNtUWFFMTdwTklCb09PUjRpTVRzaUMyc1BhRVJZS3dFQWNBUWZDbGhRWVFNQmZpeVhVRHNCbUR0QkFDSDVCQVVBQURzQUxBOEFEUUFTQUFrQUFBWlJ3SjF3U0J3Q0FNVmRZSmtNaEdTaVlZREFZaG1TSVZ5SlFuRHRDQXBUWVhZMHlpQzUxaUFHQ0QxeXVjclVhRUJ6QW9YQndBYm5mT2tsT1g0UGVtaUNmMFFRT3lDSlFodzZCRWs3ZDBNbGtwZEJBQ0g1QkFVQUFEc0FMQkFBRFFBUUFBUUFBQVltd04wdUVCQWFqeUdBTVdRWUhJVzZRUVFBME8wQUNJTHlLTHJrYnFMUXpwR1RFSjZHWXhBQUlma0VCUUFBT3dBc0VBQU5BQkFBQkFBQUJpVEEzVTZuRXhxUGdLSXdRRHd1UXpLUkxyQmpzUXhLWXdoWG9oQUlPOU9EQW5ES2prRUFJZmtFQlFBQU93QXNEd0FOQUJJQUNRQUFCa1BBblhCSUhPcDB4UjB5cVR3dW04Nms4d2lEVG8xVG5TUWJGZW9DSXBZQjhUaUdESWFRMGtnUVNCYTdCQUJBS1JSR3UwSFJ0bk1RU1VJVkFXcEpJRTh2VElsQkFDSDVCQVVBQURzQUxBOEFFUUFTQUFnQUFBWWZRSjF3U0N6cUVBK2pjbWg1TFplV3hGT0o4RXlWa3FzUnBpMHV1a1JCRUFBaCtRUUZBQUE3QUN3UEFCRUFFZ0FJQUFBR1djQ2RjRWdVQmtRc0F6RmtNSVNLTzRKQXNrQWtBQUJLb1REYURZWUFneTNuUUhnR0ExSXVWd2s4aFFBWkpBZlNtUWFFMTdwTklCb09PUjRpTVRzaUMyc1BhRVJZS3dFQWNBUWZDbGhRWVFNQmZpeVhVRHNCbUR0QkFDSDVCQVVBQURzQUxBOEFEUUFTQUFrQUFBWlF3SjF3U0J3Q0FNVmRJQ2tNaEdTaVlZREFZaG1TSVZ5SlFuRHRDQXJUZzNJMHlpQzUxaUFHQ0QxeXVjclVhRUJ6QW9YQndBYm5mT2tsT1g0UGVtaUNmMFFRT3lDSlFodzZCRXgzUXlWTWxrRUFJZmtFQldRQU93QXNFQUFOQUJBQUJBQUFCaWJBM1M0UUVCcVBJWUF4WkJnY2hicEJCQURRN1FBSWd2SW91dVJ1b3RET2taTVFub1pqRUFBN1wiXG4gICAgfVxuICB9KV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdwYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcInJlc2l6ZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwicHJpbWFyeVwiXG4gICAgfVxuICB9LCBbX2MoJ3BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwicmVzaXplPXN0cmV0Y2goZGVmYXVsdCkgNjAwIHggMjAwIFwiXG4gICAgfVxuICB9LCBbX2MoJ2ltYWdlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImltZ1wiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiNjAwcHhcIixcbiAgICAgIFwiaGVpZ2h0XCI6IFwiMjAwcHhcIixcbiAgICAgIFwiYm9yZGVyLXN0eWxlXCI6IFwic29saWRcIixcbiAgICAgIFwiYm9yZGVyLXdpZHRoXCI6IFwiMXB4XCIsXG4gICAgICBcImJvcmRlci1jb2xvclwiOiBcIiMzMzNcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS5pbWcsXG4gICAgICBcInJlc2l6ZVwiOiBcInN0cmV0Y2hcIlxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwicmVzaXplPWNvbnRhaW4gNjAwIHggMjAwIFwiXG4gICAgfVxuICB9LCBbX2MoJ2ltYWdlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImltZ1wiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiNjAwcHhcIixcbiAgICAgIFwiaGVpZ2h0XCI6IFwiMjAwcHhcIixcbiAgICAgIFwiYm9yZGVyLXN0eWxlXCI6IFwic29saWRcIixcbiAgICAgIFwiYm9yZGVyLXdpZHRoXCI6IFwiMXB4XCIsXG4gICAgICBcImJvcmRlci1jb2xvclwiOiBcIiMzMzNcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS5pbWcsXG4gICAgICBcInJlc2l6ZVwiOiBcImNvbnRhaW5cIlxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwicmVzaXplPWNvdmVyIDYwMCB4IDIwMFwiXG4gICAgfVxuICB9LCBbX2MoJ2ltYWdlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImltZ1wiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiNjAwcHhcIixcbiAgICAgIFwiaGVpZ2h0XCI6IFwiMjAwcHhcIixcbiAgICAgIFwiYm9yZGVyLXN0eWxlXCI6IFwic29saWRcIixcbiAgICAgIFwiYm9yZGVyLXdpZHRoXCI6IFwiMXB4XCIsXG4gICAgICBcImJvcmRlci1jb2xvclwiOiBcIiMzMzNcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS5pbWcsXG4gICAgICBcInJlc2l6ZVwiOiBcImNvdmVyXCJcbiAgICB9XG4gIH0pXSldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTRiMThlMjk4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi00YjE4ZTI5OCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvaW1hZ2UudnVlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJzb3VyY2VSb290IjoiIn0=