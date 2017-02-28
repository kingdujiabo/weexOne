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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(118),
	  /* template */
	  __webpack_require__(119),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\modules\\clipboard.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] clipboard.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2e6afc88", Component.options)
	  } else {
	    hotAPI.reload("data-v-2e6afc88", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },

/***/ 1:
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

/***/ 3:
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

/***/ 4:
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

/***/ 5:
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

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-rewriter?id=data-v-34379bef!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./button.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(7),
	  /* template */
	  __webpack_require__(8),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\include\\button.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] button.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-34379bef", Component.options)
	  } else {
	    hotAPI.reload("data-v-34379bef", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },

/***/ 7:
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
	    type: { default: 'default' },
	    size: { default: 'large' },
	    value: { default: '' }
	  }
	};

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['btn', 'btn-' + _vm.type, 'btn-sz-' + _vm.size]
	  }, [_c('text', {
	    class: ['btn-txt', 'btn-txt-' + _vm.type, 'btn-txt-sz-' + _vm.size]
	  }, [_vm._v(_vm._s(_vm.value))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-34379bef", module.exports)
	  }
	}

/***/ },

/***/ 11:
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

/***/ 12:
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

/***/ 13:
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

/***/ 118:
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
	
	var modal = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/modal\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var clipboard = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/clipboard\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	module.exports = {
	  data: function () {
	    return {
	      textToCopy: '',
	      textFromPaste: '',
	      tips: ''
	    };
	  },
	  components: {
	    panel: __webpack_require__(3),
	    tip: __webpack_require__(11),
	    button: __webpack_require__(6)
	  },
	  mounted: function () {
	    this.tips = "1. Just click COPY button. It will auto generate a string with random text, and copy to system clipboard. \n 2. do copy in another app, then come back and click PASTE button.";
	  },
	  methods: {
	    doCopy: function () {
	      modal.toast({ 'message': 'doCopy!', duration: 0.5 });
	      textToCopy = "autoGenerateTextToCopy" + Math.random();
	      clipboard.setString(textToCopy);
	      this.textToCopy = textToCopy;
	      this.tips = "copy done. Now system clipboard has string of '" + textToCopy + "', try PASTE button, or paste in another app.";
	    },
	    doPaste: function () {
	      var me = this;
	      modal.toast({ 'message': 'doPaste!', duration: 0.5 });
	      clipboard.getString(function (ret) {
	        console.log("paste result is " + JSON.stringify(ret));
	        me.textFromPaste = ret.data;
	        me.tips = "Paste done. Only support native(Android/iOS) NOW. according to security reason, paste in html5 is not supported.";
	      });
	    }
	  }
	};

/***/ },

/***/ 119:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', [_c('panel', {
	    attrs: {
	      "title": "Clipboard",
	      "type": "primary"
	    }
	  }, [_c('panel', {
	    attrs: {
	      "title": "Copy to clipboard5"
	    }
	  }, [_c('text', {
	    staticStyle: {
	      "line-height": "40px",
	      "font-size": "28px"
	    }
	  }, [_vm._v(_vm._s(_vm.textToCopy))]), _vm._v(" "), _c('button', {
	    attrs: {
	      "type": "info",
	      "size": "middle",
	      "value": "Copy"
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.doCopy($event)
	      }
	    }
	  })]), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "Paste from clipboard"
	    }
	  }, [_c('text', {
	    staticStyle: {
	      "line-height": "40px",
	      "font-size": "28px"
	    }
	  }, [_vm._v(_vm._s(_vm.textFromPaste))]), _vm._v(" "), _c('button', {
	    attrs: {
	      "type": "info",
	      "size": "middle",
	      "value": "Paste"
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.doPaste($event)
	      }
	    }
	  })]), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "Result"
	    }
	  }, [_c('tip', {
	    staticStyle: {
	      "margin-bottom": "20px"
	    },
	    attrs: {
	      "value": _vm.tips
	    }
	  })], 1)], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2e6afc88", module.exports)
	  }
	}

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQ/ZWQ2NCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvY2xpcGJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzP2Q0ZjMqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3BhbmVsLnZ1ZSIsIndlYnBhY2s6Ly8vcGFuZWwudnVlIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3BhbmVsLnZ1ZT9kOWI4KioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL2J1dHRvbi52dWU/NjlkNyoqKiIsIndlYnBhY2s6Ly8vYnV0dG9uLnZ1ZT84NGQ2KioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9idXR0b24udnVlPzM1NDYqKioqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3RpcC52dWU/Njc0NCoiLCJ3ZWJwYWNrOi8vL3RpcC52dWU/NzBhNCoqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3RpcC52dWU/N2Y0ZSoqIiwid2VicGFjazovLy9jbGlwYm9hcmQudnVlIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NsaXBib2FyZC52dWU/NzJlYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7MENBQ0E7eURBQ0E7Z0NBQ0E7bUJBQ0E7QUFDQTtBQUVBO0FBakJBO0FBaEJBLEc7Ozs7Ozs7QUN6QkEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJtb2R1bGVzXFxjbGlwYm9hcmQudnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9jbGlwYm9hcmQudnVlP2VudHJ5PXRydWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMmU2YWZjODghLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NsaXBib2FyZC52dWU/ZW50cnk9dHJ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTpcXFxcd2Vla1N0dWR5XFxcXHdlZXgyXFxcXHdlZXgzXFxcXHNyY1xcXFxtb2R1bGVzXFxcXGNsaXBib2FyZC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjbGlwYm9hcmQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJlNmFmYzg4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMmU2YWZjODhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvY2xpcGJvYXJkLnZ1ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMzciLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIHNjb3BlSWQsXG4gIGNzc01vZHVsZXNcbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIC8vIGluamVjdCBjc3NNb2R1bGVzXG4gIGlmIChjc3NNb2R1bGVzKSB7XG4gICAgdmFyIGNvbXB1dGVkID0gb3B0aW9ucy5jb21wdXRlZCB8fCAob3B0aW9ucy5jb21wdXRlZCA9IHt9KVxuICAgIE9iamVjdC5rZXlzKGNzc01vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG1vZHVsZSA9IGNzc01vZHVsZXNba2V5XVxuICAgICAgY29tcHV0ZWRba2V5XSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vZHVsZSB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IDM4IDM5IDQwIDQxIDQyIDQzIDQ0IDQ1IDQ2IDQ3IDQ4IDQ5IDUwIDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDU5IDYwIDYxIDYyIDYzIDY0IDY1IDY2IDY3IDY4IDY5IDcwIDcxIDcyIDczIDc0IDc1IDc2IDc3IDc4IDc5IDgwIDgxIDgyIDgzIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0xYTM4MTI1MiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhbmVsLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wYW5lbC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMWEzODEyNTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3BhbmVsLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTpcXFxcd2Vla1N0dWR5XFxcXHdlZXgyXFxcXHdlZXgzXFxcXHNyY1xcXFxpbmNsdWRlXFxcXHBhbmVsLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHBhbmVsLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xYTM4MTI1MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTFhMzgxMjUyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmNsdWRlL3BhbmVsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA2IDcgOSAxMSAzNyAzOCAzOSA0MCA0MSA1NiA1NyA1OCA1OSA4MyIsIjwhLS0gSW5zcGlyZWQgYnkgYm9vdHN0cmFwIGh0dHA6Ly9nZXRib290c3RyYXAuY29tLyAtLT5cclxuPHRlbXBsYXRlPlxyXG4gIDxkaXZcclxuICAgIDpjbGFzcz1cIlsncGFuZWwnLCAncGFuZWwtJyArIHR5cGVdXCJcclxuICAgIDpzdHlsZT1cInsgYm9yZGVyV2lkdGg6IGJvcmRlciB9XCI+XHJcbiAgICA8dGV4dFxyXG4gICAgICA6Y2xhc3M9XCJbJ3BhbmVsLWhlYWRlcicsICdwYW5lbC1oZWFkZXItJyArIHR5cGVdXCJcclxuICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgIHBhZGRpbmdUb3A6IHBhZGRpbmdIZWFkLFxyXG4gICAgICAgIHBhZGRpbmdCb3R0b206IHBhZGRpbmdIZWFkLFxyXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBwYWRkaW5nSGVhZCoxLjUsXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nSGVhZCoxLjVcclxuICAgICAgfVwiPnt7dGl0bGV9fTwvdGV4dD5cclxuICAgIDxkaXZcclxuICAgICAgOmNsYXNzPVwiWydwYW5lbC1ib2R5JywgJ3BhbmVsLWJvZHktJyArIHR5cGVdXCJcclxuICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgIHBhZGRpbmdUb3A6IHBhZGRpbmdCb2R5LFxyXG4gICAgICAgIHBhZGRpbmdCb3R0b206IHBhZGRpbmdCb2R5LFxyXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBwYWRkaW5nQm9keSoxLjUsXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nQm9keSoxLjVcclxuICAgICAgfVwiPlxyXG4gICAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB0eXBlOiB7IGRlZmF1bHQ6ICdkZWZhdWx0JyB9LFxyXG4gICAgICB0aXRsZTogeyBkZWZhdWx0OiAnJyB9LFxyXG4gICAgICBwYWRkaW5nQm9keTogeyBkZWZhdWx0OiAyMCB9LFxyXG4gICAgICBwYWRkaW5nSGVhZDogeyBkZWZhdWx0OiAyMCB9LFxyXG4gICAgICBkYXRhQ2xhc3M6IHsgZGVmYXVsdDogJycgfSwgLy8gRklYTUUgdHJhbnNmZXIgY2xhc3NcclxuICAgICAgYm9yZGVyOnsgZGVmYXVsdDogMCB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICAucGFuZWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAvKmJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyovXHJcbiAgICAvKmJvcmRlci1yYWRpdXM6IDEwcHg7Ki9cclxuICAgIC8qLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpOyovXHJcbiAgICAvKmJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSk7Ki9cclxuICAgIGJvcmRlci1jb2xvcjogI2RkZGRkZDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWRlZmF1bHQge1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLXByaW1hcnkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNDAsIDk2LCAxNDQpO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLXN1Y2Nlc3Mge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNzYsIDE3NCwgNzYpO1xyXG5cclxuICB9XHJcblxyXG4gIC5wYW5lbC1pbmZvIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDcwLCAxODQsIDIxOCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLnBhbmVsLXdhcm5pbmcge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM4LCAxNjIsIDU0KTtcclxuXHJcbiAgfVxyXG5cclxuICAucGFuZWwtZGFuZ2VyIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIxMiwgNjMsIDU4KTtcclxuXHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAvKnBhZGRpbmctbGVmdDogMTJweDsqL1xyXG4gICAgLypwYWRkaW5nLXJpZ2h0OiAxMnB4OyovXHJcbiAgICAvKnBhZGRpbmctdG9wOiAyMHB4OyovXHJcbiAgICAvKnBhZGRpbmctYm90dG9tOiAyMHB4OyovXHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXItZGVmYXVsdCB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA5NiwgMTQ0KTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlci1zdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgMTg0LCA5Mik7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXItaW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDE5MiwgMjIyKTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlci13YXJuaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE3MywgNzgpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyLWRhbmdlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE3LCA4MywgNzkpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtYm9keSB7XHJcbiAgICAvKnBhZGRpbmctbGVmdDogMTJweDsqL1xyXG4gICAgLypwYWRkaW5nLXJpZ2h0OiAxMnB4OyovXHJcbiAgICAvKnBhZGRpbmctdG9wOiAyMHB4OyovXHJcbiAgICAvKnBhZGRpbmctYm90dG9tOiAyMHB4OyovXHJcbiAgfVxyXG5cclxuICAucGFuZWwtYm9keS1kZWZhdWx0IHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5LXByaW1hcnkge1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHktc3VjY2VzcyB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtYm9keS1pbmZvIHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5LXdhcm5pbmcge1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHktZGFuZ2VyIHtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwYW5lbC52dWU/NDdjMjNlNDYiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBjbGFzczogWydwYW5lbCcsICdwYW5lbC0nICsgX3ZtLnR5cGVdLFxuICAgIHN0eWxlOiAoe1xuICAgICAgYm9yZGVyV2lkdGg6IF92bS5ib3JkZXJcbiAgICB9KVxuICB9LCBbX2MoJ3RleHQnLCB7XG4gICAgY2xhc3M6IFsncGFuZWwtaGVhZGVyJywgJ3BhbmVsLWhlYWRlci0nICsgX3ZtLnR5cGVdLFxuICAgIHN0eWxlOiAoe1xuICAgICAgcGFkZGluZ1RvcDogX3ZtLnBhZGRpbmdIZWFkLFxuICAgICAgcGFkZGluZ0JvdHRvbTogX3ZtLnBhZGRpbmdIZWFkLFxuICAgICAgcGFkZGluZ0xlZnQ6IF92bS5wYWRkaW5nSGVhZCAqIDEuNSxcbiAgICAgIHBhZGRpbmdSaWdodDogX3ZtLnBhZGRpbmdIZWFkICogMS41XG4gICAgfSlcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogWydwYW5lbC1ib2R5JywgJ3BhbmVsLWJvZHktJyArIF92bS50eXBlXSxcbiAgICBzdHlsZTogKHtcbiAgICAgIHBhZGRpbmdUb3A6IF92bS5wYWRkaW5nQm9keSxcbiAgICAgIHBhZGRpbmdCb3R0b206IF92bS5wYWRkaW5nQm9keSxcbiAgICAgIHBhZGRpbmdMZWZ0OiBfdm0ucGFkZGluZ0JvZHkgKiAxLjUsXG4gICAgICBwYWRkaW5nUmlnaHQ6IF92bS5wYWRkaW5nQm9keSAqIDEuNVxuICAgIH0pXG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMildKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0xYTM4MTI1MlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMWEzODEyNTIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9pbmNsdWRlL3BhbmVsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA2IDcgOSAxMSAzNyAzOCAzOSA0MCA0MSA1NiA1NyA1OCA1OSA4MyIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMzQzNzliZWYhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9idXR0b24udnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2J1dHRvbi52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMzQzNzliZWYhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2J1dHRvbi52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6XFxcXHdlZWtTdHVkeVxcXFx3ZWV4MlxcXFx3ZWV4M1xcXFxzcmNcXFxcaW5jbHVkZVxcXFxidXR0b24udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gYnV0dG9uLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zNDM3OWJlZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTM0Mzc5YmVmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmNsdWRlL2J1dHRvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDcgMTIgMTMgMzcgMzkgODMiLCI8IS0tIEluc3BpcmVkIGJ5IGJvb3RzdHJhcCBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8gLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2IDpjbGFzcz1cIlsnYnRuJywgJ2J0bi0nICsgdHlwZSwgJ2J0bi1zei0nICsgc2l6ZV1cIj5cclxuICAgIDx0ZXh0IDpjbGFzcz1cIlsnYnRuLXR4dCcsICdidG4tdHh0LScgKyB0eXBlLCAnYnRuLXR4dC1zei0nICsgc2l6ZV1cIj57e3ZhbHVlfX08L3RleHQ+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgdHlwZTogeyBkZWZhdWx0OiAnZGVmYXVsdCcgfSxcclxuICAgICAgc2l6ZTogeyBkZWZhdWx0OiAnbGFyZ2UnIH0sXHJcbiAgICAgIHZhbHVlOiB7IGRlZmF1bHQ6ICcnIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gIC5idG4ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzMzMztcclxuXHJcbiAgICAvKndoaXRlLXNwYWNlOiBub3dyYXA7Ki9cclxuICAgIC8qdmVydGljYWwtYWxpZ246IG1pZGRsZTsqL1xyXG4gICAgLyp0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjsqL1xyXG4gICAgLypjdXJzb3I6IHBvaW50ZXI7Ki9cclxuICAgIC8qLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsqL1xyXG4gICAgLypiYWNrZ3JvdW5kLWltYWdlOiBub25lOyovXHJcbiAgICAvKmJvcmRlci1pbWFnZS1zb3VyY2U6IGluaXRpYWw7Ki9cclxuICAgIC8qYm9yZGVyLWltYWdlLXNsaWNlOiBpbml0aWFsOyovXHJcbiAgICAvKmJvcmRlci1pbWFnZS13aWR0aDogaW5pdGlhbDsqL1xyXG4gICAgLypib3JkZXItaW1hZ2Utb3V0c2V0OiBpbml0aWFsOyovXHJcbiAgICAvKmJvcmRlci1pbWFnZS1yZXBlYXQ6IGluaXRpYWw7Ki9cclxuICB9XHJcblxyXG4gIC5idG4tdHh0IHtcclxuXHJcbiAgfVxyXG5cclxuICAvKipUWVBFKiovXHJcblxyXG4gIC5idG4tZGVmYXVsdCB7XHJcbiAgICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XHJcbiAgfVxyXG5cclxuICAuYnRuLXN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCAxODQsIDkyKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDc2LCAxNzQsIDc2KTtcclxuICB9XHJcblxyXG4gIC5idG4taW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDE5MiwgMjIyKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDcwLCAxODQsIDIxOCk7XHJcbiAgfVxyXG5cclxuICAuYnRuLXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTczLCA3OCk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzgsIDE2MiwgNTQpO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNywgODMsIDc5KTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIxMiwgNjMsIDU4KTtcclxuICB9XHJcblxyXG4gIC5idG4tbGluayB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcblxyXG4gIC5idG4tdHh0LWRlZmF1bHQge1xyXG4gICAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcclxuICB9XHJcblxyXG4gIC5idG4tdHh0LXByaW1hcnkge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB9XHJcblxyXG4gIC5idG4tdHh0LXN1Y2Nlc3Mge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB9XHJcblxyXG4gIC5idG4tdHh0LWluZm8ge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB9XHJcblxyXG4gIC5idG4tdHh0LXdhcm5pbmcge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB9XHJcblxyXG4gIC5idG4tdHh0LWRhbmdlciB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi10eHQtbGluayB7XHJcbiAgICBjb2xvcjogcmdiKDUxLCAxMjIsIDE4Myk7XHJcbiAgICAvKmZvbnQtd2VpZ2h0OiA0MDA7Ki9cclxuICB9XHJcblxyXG4gIC8qKlNJWkUqKi9cclxuXHJcbiAgLmJ0bi1zei1sYXJnZSB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICAvKmxpbmUtaGVpZ2h0OiAxLjMzMzMzOyovXHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1zei1taWRkbGUge1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICAvKmxpbmUtaGVpZ2h0OiAxLjQyODU3OyovXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1zei1zbWFsbCB7XHJcbiAgICB3aWR0aDogMTcwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgIC8qbGluZS1oZWlnaHQ6IDEuNTsqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi10eHQtc3otbGFyZ2Uge1xyXG4gICAgZm9udC1zaXplOiA0NXB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi10eHQtc3otbWlkZGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICB9XHJcblxyXG4gIC5idG4tdHh0LXN6LXNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcblxyXG4gIC8qRElTQUJMRUQqL1xyXG5cclxuICAuZGlzYWJsZWQge1xyXG5cclxuICB9XHJcblxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYnV0dG9uLnZ1ZT9jZDg2YmIwMiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIGNsYXNzOiBbJ2J0bicsICdidG4tJyArIF92bS50eXBlLCAnYnRuLXN6LScgKyBfdm0uc2l6ZV1cbiAgfSwgW19jKCd0ZXh0Jywge1xuICAgIGNsYXNzOiBbJ2J0bi10eHQnLCAnYnRuLXR4dC0nICsgX3ZtLnR5cGUsICdidG4tdHh0LXN6LScgKyBfdm0uc2l6ZV1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnZhbHVlKSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTM0Mzc5YmVmXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zNDM3OWJlZiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2luY2x1ZGUvYnV0dG9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyAxMiAxMyAzNyAzOSA4MyIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMzZjMjVjYWUhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90aXAudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RpcC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMzZjMjVjYWUhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RpcC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6XFxcXHdlZWtTdHVkeVxcXFx3ZWV4MlxcXFx3ZWV4M1xcXFxzcmNcXFxcaW5jbHVkZVxcXFx0aXAudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdGlwLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zNmMyNWNhZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTM2YzI1Y2FlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmNsdWRlL3RpcC52dWVcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDM3IDU3IDU4IDgzIiwiPCEtLSBJbnNwaXJlZCBieSBib290c3RyYXAgaHR0cDovL2dldGJvb3RzdHJhcC5jb20vIC0tPlxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdiA6Y2xhc3M9XCJbJ3RpcCcsICd0aXAtJyArIHR5cGVdXCI+XHJcbiAgICA8dGV4dCA6Y2xhc3M9XCJbJ3RpcC10eHQnLCAndGlwLXR4dC0nICsgdHlwZV1cIj57e3ZhbHVlfX08L3RleHQ+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgdHlwZTogeyBkZWZhdWx0OiAnc3VjY2VzcycgfSxcclxuICAgICAgdmFsdWU6IHsgZGVmYXVsdDogJycgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgLnRpcCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDM2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAudGlwLXR4dHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICB9XHJcblxyXG4gIC50aXAtc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmMGQ4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZDZlOWM2O1xyXG4gIH1cclxuXHJcbiAgLnRpcC10eHQtc3VjY2VzcyB7XHJcbiAgICBjb2xvcjogIzNjNzYzZDtcclxuICB9XHJcblxyXG4gIC50aXAtaW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllZGY3O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYmNlOGYxO1xyXG4gIH1cclxuXHJcbiAgLnRpcC10eHQtaW5mbyB7XHJcbiAgICBjb2xvcjogIzMxNzA4ZjtcclxuICB9XHJcblxyXG4gIC50aXAtd2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmFlYmNjO1xyXG4gIH1cclxuXHJcbiAgLnRpcC10eHQtd2FybmluZyB7XHJcbiAgICBjb2xvcjogIzhhNmQzYjtcclxuICB9XHJcblxyXG4gIC50aXAtZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmRlZGU7XHJcbiAgICBib3JkZXItY29sb3I6ICNlYmNjZDE7XHJcbiAgfVxyXG5cclxuICAudGlwLXR4dC1kYW5nZXIge1xyXG4gICAgY29sb3I6ICNhOTQ0NDI7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGlwLnZ1ZT84MGRhMjA1YyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIGNsYXNzOiBbJ3RpcCcsICd0aXAtJyArIF92bS50eXBlXVxuICB9LCBbX2MoJ3RleHQnLCB7XG4gICAgY2xhc3M6IFsndGlwLXR4dCcsICd0aXAtdHh0LScgKyBfdm0udHlwZV1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnZhbHVlKSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTM2YzI1Y2FlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zNmMyNWNhZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2luY2x1ZGUvdGlwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMzcgNTcgNTggODMiLCI8dGVtcGxhdGU+XHJcbiAgPHNjcm9sbGVyPlxyXG4gICAgPHBhbmVsIHRpdGxlPVwiQ2xpcGJvYXJkXCIgdHlwZT1cInByaW1hcnlcIj5cclxuICAgICAgPHBhbmVsIHRpdGxlPVwiQ29weSB0byBjbGlwYm9hcmQ1XCI+XHJcbiAgICAgICAgPHRleHQgc3R5bGU9XCJsaW5lLWhlaWdodDogNDBweDsgZm9udC1zaXplOiAyOHB4XCI+e3t0ZXh0VG9Db3B5fX08L3RleHQ+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiaW5mb1wiIHNpemU9XCJtaWRkbGVcIiB2YWx1ZT1cIkNvcHlcIiBAY2xpY2submF0aXZlPVwiZG9Db3B5XCI+PC9idXR0b24+XHJcbiAgICAgIDwvcGFuZWw+XHJcblxyXG4gICAgICA8cGFuZWwgdGl0bGU9XCJQYXN0ZSBmcm9tIGNsaXBib2FyZFwiPlxyXG4gICAgICAgIDx0ZXh0IHN0eWxlPVwibGluZS1oZWlnaHQ6IDQwcHg7IGZvbnQtc2l6ZTogMjhweFwiPnt7dGV4dEZyb21QYXN0ZX19PC90ZXh0PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImluZm9cIiBzaXplPVwibWlkZGxlXCIgdmFsdWU9XCJQYXN0ZVwiIEBjbGljay5uYXRpdmU9XCJkb1Bhc3RlXCI+PC9idXR0b24+XHJcbiAgICAgIDwvcGFuZWw+XHJcblxyXG4gICAgICA8cGFuZWwgdGl0bGU9XCJSZXN1bHRcIj5cclxuICAgICAgICA8dGlwIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMjBweDtcIiA6dmFsdWU9XCJ0aXBzXCI+PC90aXA+XHJcbiAgICAgIDwvcGFuZWw+XHJcblxyXG4gICAgPC9wYW5lbD5cclxuICA8L3Njcm9sbGVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICB2YXIgbW9kYWwgPSByZXF1aXJlKCdAd2VleC1tb2R1bGUvbW9kYWwnKVxyXG4gIHZhciBjbGlwYm9hcmQgPSByZXF1aXJlKCdAd2VleC1tb2R1bGUvY2xpcGJvYXJkJylcclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0ZXh0VG9Db3B5IDogJycsXHJcbiAgICAgICAgdGV4dEZyb21QYXN0ZTogJycsXHJcbiAgICAgICAgdGlwcyA6ICcnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIHBhbmVsOiByZXF1aXJlKCcuLi9pbmNsdWRlL3BhbmVsLnZ1ZScpLFxyXG4gICAgICB0aXA6IHJlcXVpcmUoJy4uL2luY2x1ZGUvdGlwLnZ1ZScpLFxyXG4gICAgICBidXR0b246IHJlcXVpcmUoJy4uL2luY2x1ZGUvYnV0dG9uLnZ1ZScpXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMudGlwcyA9IFwiMS4gSnVzdCBjbGljayBDT1BZIGJ1dHRvbi4gSXQgd2lsbCBhdXRvIGdlbmVyYXRlIGEgc3RyaW5nIHdpdGggcmFuZG9tIHRleHQsIGFuZCBjb3B5IHRvIHN5c3RlbSBjbGlwYm9hcmQuIFxcbiAyLiBkbyBjb3B5IGluIGFub3RoZXIgYXBwLCB0aGVuIGNvbWUgYmFjayBhbmQgY2xpY2sgUEFTVEUgYnV0dG9uLlwiXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBkb0NvcHk6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG1vZGFsLnRvYXN0KHsnbWVzc2FnZSc6ICdkb0NvcHkhJywgZHVyYXRpb246IDAuNX0pXHJcbiAgICAgICAgdGV4dFRvQ29weSA9IFwiYXV0b0dlbmVyYXRlVGV4dFRvQ29weVwiICsgTWF0aC5yYW5kb20oKVxyXG4gICAgICAgIGNsaXBib2FyZC5zZXRTdHJpbmcodGV4dFRvQ29weSlcclxuICAgICAgICB0aGlzLnRleHRUb0NvcHkgPSB0ZXh0VG9Db3B5XHJcbiAgICAgICAgdGhpcy50aXBzID0gXCJjb3B5IGRvbmUuIE5vdyBzeXN0ZW0gY2xpcGJvYXJkIGhhcyBzdHJpbmcgb2YgJ1wiICsgdGV4dFRvQ29weSArIFwiJywgdHJ5IFBBU1RFIGJ1dHRvbiwgb3IgcGFzdGUgaW4gYW5vdGhlciBhcHAuXCJcclxuICAgICAgfSxcclxuICAgICAgZG9QYXN0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIG1lID0gdGhpc1xyXG4gICAgICAgIG1vZGFsLnRvYXN0KHsnbWVzc2FnZSc6ICdkb1Bhc3RlIScsIGR1cmF0aW9uOiAwLjV9KVxyXG4gICAgICAgIGNsaXBib2FyZC5nZXRTdHJpbmcoZnVuY3Rpb24ocmV0KSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInBhc3RlIHJlc3VsdCBpcyBcIiArIEpTT04uc3RyaW5naWZ5KHJldCkpXHJcbiAgICAgICAgICBtZS50ZXh0RnJvbVBhc3RlID0gcmV0LmRhdGFcclxuICAgICAgICAgIG1lLnRpcHMgPSBcIlBhc3RlIGRvbmUuIE9ubHkgc3VwcG9ydCBuYXRpdmUoQW5kcm9pZC9pT1MpIE5PVy4gYWNjb3JkaW5nIHRvIHNlY3VyaXR5IHJlYXNvbiwgcGFzdGUgaW4gaHRtbDUgaXMgbm90IHN1cHBvcnRlZC5cIlxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpcGJvYXJkLnZ1ZT80ZjQ3N2EzYiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnc2Nyb2xsZXInLCBbX2MoJ3BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiQ2xpcGJvYXJkXCIsXG4gICAgICBcInR5cGVcIjogXCJwcmltYXJ5XCJcbiAgICB9XG4gIH0sIFtfYygncGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJDb3B5IHRvIGNsaXBib2FyZDVcIlxuICAgIH1cbiAgfSwgW19jKCd0ZXh0Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImxpbmUtaGVpZ2h0XCI6IFwiNDBweFwiLFxuICAgICAgXCJmb250LXNpemVcIjogXCIyOHB4XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50ZXh0VG9Db3B5KSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiaW5mb1wiLFxuICAgICAgXCJzaXplXCI6IFwibWlkZGxlXCIsXG4gICAgICBcInZhbHVlXCI6IFwiQ29weVwiXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmRvQ29weSgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJQYXN0ZSBmcm9tIGNsaXBib2FyZFwiXG4gICAgfVxuICB9LCBbX2MoJ3RleHQnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwibGluZS1oZWlnaHRcIjogXCI0MHB4XCIsXG4gICAgICBcImZvbnQtc2l6ZVwiOiBcIjI4cHhcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRleHRGcm9tUGFzdGUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJpbmZvXCIsXG4gICAgICBcInNpemVcIjogXCJtaWRkbGVcIixcbiAgICAgIFwidmFsdWVcIjogXCJQYXN0ZVwiXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmRvUGFzdGUoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiUmVzdWx0XCJcbiAgICB9XG4gIH0sIFtfYygndGlwJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIyMHB4XCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS50aXBzXG4gICAgfVxuICB9KV0sIDEpXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yZTZhZmM4OFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMmU2YWZjODghLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9tb2R1bGVzL2NsaXBib2FyZC52dWU/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMzciXSwic291cmNlUm9vdCI6IiJ9