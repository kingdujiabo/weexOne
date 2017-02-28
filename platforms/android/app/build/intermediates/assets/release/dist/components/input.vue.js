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

	
	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-rewriter?id=data-v-35a27cf2!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./input.vue?entry=true\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(22),
	  /* template */
	  __webpack_require__(23),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\components\\input.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] input.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-35a27cf2", Component.options)
	  } else {
	    hotAPI.reload("data-v-35a27cf2", Component.options)
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

/***/ 22:
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
	
	var modal = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/modal\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	module.exports = {
	  data: function () {
	    return {
	      txtInput: '',
	      txtChange: ''
	    };
	  },
	  components: {
	    panel: __webpack_require__(3)
	  },
	  methods: {
	    onchange: function (event) {
	      this.txtChange = event.value;
	      modal.toast({
	        message: 'onchange: ' + event.value,
	        duration: 2
	      });
	    },
	    oninput: function (event) {
	      this.txtInput = event.value;
	      modal.toast({
	        message: 'onitput: ' + event.value,
	        duration: 1
	      });
	    }
	  }
	};

/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', [_c('panel', {
	    attrs: {
	      "title": "input",
	      "type": "primary"
	    }
	  }, [_c('input', {
	    staticClass: "input",
	    attrs: {
	      "type": "text",
	      "placeholder": "Text Input",
	      "autofocus": "true",
	      "value": ""
	    },
	    on: {
	      "change": _vm.onchange,
	      "input": _vm.oninput
	    }
	  }), _vm._v(" "), _c('text', [_vm._v("oninput: " + _vm._s(_vm.txtInput))]), _vm._v(" "), _c('text', [_vm._v("onchange: " + _vm._s(_vm.txtChange))])])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-35a27cf2", module.exports)
	  }
	}

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQ/ZWQ2NCoqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQudnVlIiwid2VicGFjazovLy8uL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanM/ZDRmMyoqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvcGFuZWwudnVlPzRlYzYqKioqIiwid2VicGFjazovLy9wYW5lbC52dWU/NWJhZCoqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvcGFuZWwudnVlP2Q5YjgqKioqIiwid2VicGFjazovLy9pbnB1dC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQudnVlPzUyMWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3JDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBK0UsaURBQWlELElBQUk7QUFDcEksb0NBQW1DOztBQUVuQztBQUNBLGFBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOERBQTZEO0FBQzdEO0FBQ0E7QUFDQSxvQ0FBbUM7QUFDbkMsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDN0NBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUErRSxpREFBaUQsSUFBSTtBQUNwSSxvQ0FBbUM7O0FBRW5DO0FBQ0EsYUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxFQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBOztzQkFHQTt1QkFDQTs2QkFDQTs2QkFDQTtpQ0FDQTt3QkFFQTtBQVBBO0FBREEsRzs7Ozs7OztBQzVCQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO3FCQUVBOztpQkFFQTtrQkFFQTtBQUhBO0FBSUE7O2dDQUdBO0FBRkE7O2dDQUlBOzhCQUNBOzt1Q0FFQTttQkFFQTtBQUhBO0FBSUE7K0JBQ0E7NkJBQ0E7O3NDQUVBO21CQUVBO0FBSEE7QUFLQTtBQWZBO0FBVkEsRzs7Ozs7OztBQzdCQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6ImNvbXBvbmVudHNcXGlucHV0LnZ1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZkYjljMDA4OWY2ZDM4OGI0YjRkIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0zNWEyN2NmMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2lucHV0LnZ1ZT9lbnRyeT10cnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2lucHV0LnZ1ZT9lbnRyeT10cnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTM1YTI3Y2YyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbnB1dC52dWU/ZW50cnk9dHJ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTpcXFxcd2Vla1N0dWR5XFxcXHdlZXgyXFxcXHdlZXgzXFxcXHNyY1xcXFxjb21wb25lbnRzXFxcXGlucHV0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGlucHV0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zNWEyN2NmMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTM1YTI3Y2YyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2lucHV0LnZ1ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgc2NvcGVJZCxcbiAgY3NzTW9kdWxlc1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgLy8gaW5qZWN0IGNzc01vZHVsZXNcbiAgaWYgKGNzc01vZHVsZXMpIHtcbiAgICB2YXIgY29tcHV0ZWQgPSBvcHRpb25zLmNvbXB1dGVkIHx8IChvcHRpb25zLmNvbXB1dGVkID0ge30pXG4gICAgT2JqZWN0LmtleXMoY3NzTW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbW9kdWxlID0gY3NzTW9kdWxlc1trZXldXG4gICAgICBjb21wdXRlZFtrZXldID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbW9kdWxlIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzcgMzggMzkgNDAgNDEgNDIgNDMgNDQgNDUgNDYgNDcgNDggNDkgNTAgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjAgNjEgNjIgNjMgNjQgNjUgNjYgNjcgNjggNjkgNzAgNzEgNzIgNzMgNzQgNzUgNzYgNzcgNzggNzkgODAgODEgODIgODMiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTFhMzgxMjUyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFuZWwudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3BhbmVsLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0xYTM4MTI1MiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcGFuZWwudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFx3ZWVrU3R1ZHlcXFxcd2VleDJcXFxcd2VleDNcXFxcc3JjXFxcXGluY2x1ZGVcXFxccGFuZWwudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcGFuZWwudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTFhMzgxMjUyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMWEzODEyNTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luY2x1ZGUvcGFuZWwudnVlXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDYgNyA5IDExIDM3IDM4IDM5IDQwIDQxIDU2IDU3IDU4IDU5IDgzIiwiPCEtLSBJbnNwaXJlZCBieSBib290c3RyYXAgaHR0cDovL2dldGJvb3RzdHJhcC5jb20vIC0tPlxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdlxyXG4gICAgOmNsYXNzPVwiWydwYW5lbCcsICdwYW5lbC0nICsgdHlwZV1cIlxyXG4gICAgOnN0eWxlPVwieyBib3JkZXJXaWR0aDogYm9yZGVyIH1cIj5cclxuICAgIDx0ZXh0XHJcbiAgICAgIDpjbGFzcz1cIlsncGFuZWwtaGVhZGVyJywgJ3BhbmVsLWhlYWRlci0nICsgdHlwZV1cIlxyXG4gICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgcGFkZGluZ1RvcDogcGFkZGluZ0hlYWQsXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogcGFkZGluZ0hlYWQsXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHBhZGRpbmdIZWFkKjEuNSxcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmdIZWFkKjEuNVxyXG4gICAgICB9XCI+e3t0aXRsZX19PC90ZXh0PlxyXG4gICAgPGRpdlxyXG4gICAgICA6Y2xhc3M9XCJbJ3BhbmVsLWJvZHknLCAncGFuZWwtYm9keS0nICsgdHlwZV1cIlxyXG4gICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgcGFkZGluZ1RvcDogcGFkZGluZ0JvZHksXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogcGFkZGluZ0JvZHksXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHBhZGRpbmdCb2R5KjEuNSxcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmdCb2R5KjEuNVxyXG4gICAgICB9XCI+XHJcbiAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHR5cGU6IHsgZGVmYXVsdDogJ2RlZmF1bHQnIH0sXHJcbiAgICAgIHRpdGxlOiB7IGRlZmF1bHQ6ICcnIH0sXHJcbiAgICAgIHBhZGRpbmdCb2R5OiB7IGRlZmF1bHQ6IDIwIH0sXHJcbiAgICAgIHBhZGRpbmdIZWFkOiB7IGRlZmF1bHQ6IDIwIH0sXHJcbiAgICAgIGRhdGFDbGFzczogeyBkZWZhdWx0OiAnJyB9LCAvLyBGSVhNRSB0cmFuc2ZlciBjbGFzc1xyXG4gICAgICBib3JkZXI6eyBkZWZhdWx0OiAwIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gIC5wYW5lbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7Ki9cclxuICAgIC8qYm9yZGVyLXJhZGl1czogMTBweDsqL1xyXG4gICAgLyotd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSk7Ki9cclxuICAgIC8qYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA1KTsqL1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkZGRkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtZGVmYXVsdCB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtcHJpbWFyeSB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtc3VjY2VzcyB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig3NiwgMTc0LCA3Nik7XHJcblxyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWluZm8ge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNzAsIDE4NCwgMjE4KTtcclxuXHJcbiAgfVxyXG5cclxuICAucGFuZWwtd2FybmluZyB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzgsIDE2MiwgNTQpO1xyXG5cclxuICB9XHJcblxyXG4gIC5wYW5lbC1kYW5nZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjEyLCA2MywgNTgpO1xyXG5cclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIC8qcGFkZGluZy1sZWZ0OiAxMnB4OyovXHJcbiAgICAvKnBhZGRpbmctcmlnaHQ6IDEycHg7Ki9cclxuICAgIC8qcGFkZGluZy10b3A6IDIwcHg7Ki9cclxuICAgIC8qcGFkZGluZy1ib3R0b206IDIwcHg7Ki9cclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlci1kZWZhdWx0IHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXItcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDk2LCAxNDQpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyLXN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCAxODQsIDkyKTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlci1pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MSwgMTkyLCAyMjIpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyLXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTczLCA3OCk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXItZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTcsIDgzLCA3OSk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5IHtcclxuICAgIC8qcGFkZGluZy1sZWZ0OiAxMnB4OyovXHJcbiAgICAvKnBhZGRpbmctcmlnaHQ6IDEycHg7Ki9cclxuICAgIC8qcGFkZGluZy10b3A6IDIwcHg7Ki9cclxuICAgIC8qcGFkZGluZy1ib3R0b206IDIwcHg7Ki9cclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5LWRlZmF1bHQge1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHktcHJpbWFyeSB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtYm9keS1zdWNjZXNzIHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5LWluZm8ge1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHktd2FybmluZyB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtYm9keS1kYW5nZXIge1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHBhbmVsLnZ1ZT80N2MyM2U0NiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIGNsYXNzOiBbJ3BhbmVsJywgJ3BhbmVsLScgKyBfdm0udHlwZV0sXG4gICAgc3R5bGU6ICh7XG4gICAgICBib3JkZXJXaWR0aDogX3ZtLmJvcmRlclxuICAgIH0pXG4gIH0sIFtfYygndGV4dCcsIHtcbiAgICBjbGFzczogWydwYW5lbC1oZWFkZXInLCAncGFuZWwtaGVhZGVyLScgKyBfdm0udHlwZV0sXG4gICAgc3R5bGU6ICh7XG4gICAgICBwYWRkaW5nVG9wOiBfdm0ucGFkZGluZ0hlYWQsXG4gICAgICBwYWRkaW5nQm90dG9tOiBfdm0ucGFkZGluZ0hlYWQsXG4gICAgICBwYWRkaW5nTGVmdDogX3ZtLnBhZGRpbmdIZWFkICogMS41LFxuICAgICAgcGFkZGluZ1JpZ2h0OiBfdm0ucGFkZGluZ0hlYWQgKiAxLjVcbiAgICB9KVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiBbJ3BhbmVsLWJvZHknLCAncGFuZWwtYm9keS0nICsgX3ZtLnR5cGVdLFxuICAgIHN0eWxlOiAoe1xuICAgICAgcGFkZGluZ1RvcDogX3ZtLnBhZGRpbmdCb2R5LFxuICAgICAgcGFkZGluZ0JvdHRvbTogX3ZtLnBhZGRpbmdCb2R5LFxuICAgICAgcGFkZGluZ0xlZnQ6IF92bS5wYWRkaW5nQm9keSAqIDEuNSxcbiAgICAgIHBhZGRpbmdSaWdodDogX3ZtLnBhZGRpbmdCb2R5ICogMS41XG4gICAgfSlcbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTFhMzgxMjUyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0xYTM4MTI1MiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2luY2x1ZGUvcGFuZWwudnVlXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDYgNyA5IDExIDM3IDM4IDM5IDQwIDQxIDU2IDU3IDU4IDU5IDgzIiwiPHRlbXBsYXRlPlxyXG4gIDxzY3JvbGxlcj5cclxuICAgIDxwYW5lbCB0aXRsZT1cImlucHV0XCIgdHlwZT1cInByaW1hcnlcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVGV4dCBJbnB1dFwiXHJcbiAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgYXV0b2ZvY3VzPVwidHJ1ZVwiXHJcbiAgICAgICAgdmFsdWU9XCJcIlxyXG4gICAgICAgIEBjaGFuZ2U9XCJvbmNoYW5nZVwiXHJcbiAgICAgICAgQGlucHV0PVwib25pbnB1dFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDx0ZXh0Pm9uaW5wdXQ6IHt7dHh0SW5wdXR9fTwvdGV4dD5cclxuICAgICAgPHRleHQ+b25jaGFuZ2U6IHt7dHh0Q2hhbmdlfX08L3RleHQ+XHJcbiAgICA8L3BhbmVsPlxyXG4gIDwvc2Nyb2xsZXI+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGU+XHJcbiAgLmlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIHZhciBtb2RhbCA9IHJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9tb2RhbCcpXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdHh0SW5wdXQ6ICcnLFxyXG4gICAgICAgIHR4dENoYW5nZTogJydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgcGFuZWw6IHJlcXVpcmUoJy4uL2luY2x1ZGUvcGFuZWwudnVlJylcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIG9uY2hhbmdlOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIHRoaXMudHh0Q2hhbmdlID0gZXZlbnQudmFsdWU7XHJcbiAgICAgICAgbW9kYWwudG9hc3Qoe1xyXG4gICAgICAgICAgbWVzc2FnZTogJ29uY2hhbmdlOiAnICsgZXZlbnQudmFsdWUsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMlxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uaW5wdXQ6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy50eHRJbnB1dCA9IGV2ZW50LnZhbHVlO1xyXG4gICAgICAgIG1vZGFsLnRvYXN0KHtcclxuICAgICAgICAgIG1lc3NhZ2U6ICdvbml0cHV0OiAnICsgZXZlbnQudmFsdWUsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGlucHV0LnZ1ZT8zNjc1MTQ3MyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnc2Nyb2xsZXInLCBbX2MoJ3BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiaW5wdXRcIixcbiAgICAgIFwidHlwZVwiOiBcInByaW1hcnlcIlxuICAgIH1cbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiVGV4dCBJbnB1dFwiLFxuICAgICAgXCJhdXRvZm9jdXNcIjogXCJ0cnVlXCIsXG4gICAgICBcInZhbHVlXCI6IFwiXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBfdm0ub25jaGFuZ2UsXG4gICAgICBcImlucHV0XCI6IF92bS5vbmlucHV0XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHQnLCBbX3ZtLl92KFwib25pbnB1dDogXCIgKyBfdm0uX3MoX3ZtLnR4dElucHV0KSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHQnLCBbX3ZtLl92KFwib25jaGFuZ2U6IFwiICsgX3ZtLl9zKF92bS50eHRDaGFuZ2UpKV0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zNWEyN2NmMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMzVhMjdjZjIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL2lucHV0LnZ1ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDQiXSwic291cmNlUm9vdCI6IiJ9