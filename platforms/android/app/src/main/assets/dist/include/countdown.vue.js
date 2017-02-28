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
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-rewriter?id=data-v-750acf04!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./countdown.vue?entry=true\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(69),
	  /* template */
	  __webpack_require__(70),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\include\\countdown.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] countdown.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-750acf04", Component.options)
	  } else {
	    hotAPI.reload("data-v-750acf04", Component.options)
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

/***/ 69:
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
	
	function format(str) {
	  if (str.length >= 2) {
	    return str;
	  } else {
	    return '0' + str;
	  }
	}
	
	function getTime(target, now) {
	  var remain = parseInt((target - now) / 1000);
	  var D = String(parseInt(remain / 86400));
	  var DD = format(D);
	  var h = String(parseInt((remain - parseInt(D) * 86400) / 3600));
	  var hh = format(h);
	  var H = String(parseInt(remain / 3600));
	  var HH = format(H);
	  var m = String(parseInt((remain - parseInt(H) * 3600) / 60));
	  var mm = format(m);
	  var M = String(parseInt(remain / 60));
	  var MM = format(M);
	  var s = String(remain - parseInt(M) * 60);
	  var ss = format(s);
	  var S = String(remain);
	  var SS = format(S);
	  return {
	    D: D, DD: DD,
	    h: h, hh: hh,
	    H: H, HH: HH,
	    m: m, mm: mm,
	    M: M, MM: MM,
	    s: s, ss: ss,
	    S: S, SS: SS
	  };
	}
	
	module.exports = {
	  props: {
	    remain: {
	      default: 0
	    }
	  },
	  data: function () {
	    return {
	      now: 0,
	      target: 0,
	      outofview: false
	    };
	  },
	  created: function () {
	    this.now = Date.now();
	    this.target = this.now + this.remain * 1000;
	    if (this.remain > 0) {
	      this.run();
	    }
	  },
	  methods: {
	    run: function () {
	      if (!this.outofview) {
	        this.now = Date.now();
	      }
	      var time = getTime(this.target, this.now);
	      if (this.target >= this.now) {
	        this.$emit('tick', time);
	      } else {
	        this.$emit('alarm', time);
	        return;
	      }
	      setTimeout(this.run.bind(this), 1000);
	    },
	    appeared: function () {
	      this.outofview = false;
	    },
	    disappeared: function () {
	      this.outofview = true;
	    }
	  }
	};

/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      "overflow": "hidden",
	      "flex-direction": "row"
	    },
	    on: {
	      "appear": _vm.appeared,
	      "disappear": _vm.disappeared
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-750acf04", module.exports)
	  }
	}

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQ/ZWQ2NCoqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL2NvdW50ZG93bi52dWU/MjQ5OSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzP2Q0ZjMqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vY291bnRkb3duLnZ1ZT9mYzE0KiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9jb3VudGRvd24udnVlPzFjMTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3JDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBK0UsaURBQWlELElBQUk7QUFDcEksb0NBQW1DOztBQUVuQztBQUNBLGFBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOERBQTZEO0FBQzdEO0FBQ0E7QUFDQSxvQ0FBbUM7QUFDbkMsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkEsc0JBQ0E7d0JBQ0E7WUFDQTtVQUNBO2tCQUNBO0FBQ0E7OztBQUVBLCtCQUNBOzBDQUNBO29DQUNBO21CQUNBOzREQUNBO21CQUNBO29DQUNBO21CQUNBOzJEQUNBO21CQUNBO29DQUNBO21CQUNBO3lDQUNBO21CQUNBO2tCQUNBO21CQUNBOztlQUVBO2VBQ0E7ZUFDQTtlQUNBO2VBQ0E7ZUFDQTtlQUVBO0FBUkE7OztBQVVBOzs7Z0JBTUE7QUFIQTtBQURBO3FCQUtBOztZQUVBO2VBQ0E7a0JBRUE7QUFKQTtBQUtBO3dCQUNBO3FCQUNBOzRDQUNBOzBCQUNBO1lBQ0E7QUFDQTtBQUNBOztzQkFFQTs0QkFDQTt5QkFDQTtBQUNBOzRDQUNBO29DQUNBOzRCQUNBO2NBQ0E7NkJBQ0E7QUFDQTtBQUNBO3VDQUNBO0FBQ0E7MkJBQ0E7d0JBQ0E7QUFDQTs4QkFDQTt3QkFDQTtBQUVBO0FBcEJBO0FBcEJBLEc7Ozs7Ozs7QUNuREEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJpbmNsdWRlXFxjb3VudGRvd24udnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTc1MGFjZjA0IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vY291bnRkb3duLnZ1ZT9lbnRyeT10cnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NvdW50ZG93bi52dWU/ZW50cnk9dHJ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi03NTBhY2YwNCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY291bnRkb3duLnZ1ZT9lbnRyeT10cnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFx3ZWVrU3R1ZHlcXFxcd2VleDJcXFxcd2VleDNcXFxcc3JjXFxcXGluY2x1ZGVcXFxcY291bnRkb3duLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGNvdW50ZG93bi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzUwYWNmMDRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03NTBhY2YwNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5jbHVkZS9jb3VudGRvd24udnVlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxNyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgc2NvcGVJZCxcbiAgY3NzTW9kdWxlc1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgLy8gaW5qZWN0IGNzc01vZHVsZXNcbiAgaWYgKGNzc01vZHVsZXMpIHtcbiAgICB2YXIgY29tcHV0ZWQgPSBvcHRpb25zLmNvbXB1dGVkIHx8IChvcHRpb25zLmNvbXB1dGVkID0ge30pXG4gICAgT2JqZWN0LmtleXMoY3NzTW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbW9kdWxlID0gY3NzTW9kdWxlc1trZXldXG4gICAgICBjb21wdXRlZFtrZXldID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbW9kdWxlIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzcgMzggMzkgNDAgNDEgNDIgNDMgNDQgNDUgNDYgNDcgNDggNDkgNTAgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjAgNjEgNjIgNjMgNjQgNjUgNjYgNjcgNjggNjkgNzAgNzEgNzIgNzMgNzQgNzUgNzYgNzcgNzggNzkgODAgODEgODIgODMiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBzdHlsZT1cIm92ZXJmbG93OiBoaWRkZW47IGZsZXgtZGlyZWN0aW9uOiByb3c7XCJcclxuICB2LW9uOmFwcGVhcj1cImFwcGVhcmVkXCJcclxuICB2LW9uOmRpc2FwcGVhcj1cImRpc2FwcGVhcmVkXCI+XHJcbiAgPHNsb3Q+PC9zbG90PlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuLndyYXAge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmZ1bmN0aW9uIGZvcm1hdCAoc3RyKSB7XHJcbiAgaWYgKHN0ci5sZW5ndGggPj0gMikge1xyXG4gICAgcmV0dXJuIHN0cjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuICcwJyArIHN0cjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRpbWUodGFyZ2V0LCBub3cpIHtcclxuICB2YXIgcmVtYWluID0gcGFyc2VJbnQoKHRhcmdldCAtIG5vdykgLyAxMDAwKVxyXG4gIHZhciBEID0gU3RyaW5nKHBhcnNlSW50KHJlbWFpbiAvIDg2NDAwKSlcclxuICB2YXIgREQgPSBmb3JtYXQoRClcclxuICB2YXIgaCA9IFN0cmluZyhwYXJzZUludCgocmVtYWluIC0gcGFyc2VJbnQoRCkgKiA4NjQwMCkgLyAzNjAwKSlcclxuICB2YXIgaGggPSBmb3JtYXQoaClcclxuICB2YXIgSCA9IFN0cmluZyhwYXJzZUludChyZW1haW4gLyAzNjAwKSlcclxuICB2YXIgSEggPSBmb3JtYXQoSClcclxuICB2YXIgbSA9IFN0cmluZyhwYXJzZUludCgocmVtYWluIC0gcGFyc2VJbnQoSCkgKiAzNjAwKSAvIDYwKSlcclxuICB2YXIgbW0gPSBmb3JtYXQobSlcclxuICB2YXIgTSA9IFN0cmluZyhwYXJzZUludChyZW1haW4gLyA2MCkpXHJcbiAgdmFyIE1NID0gZm9ybWF0KE0pXHJcbiAgdmFyIHMgPSBTdHJpbmcocmVtYWluIC0gcGFyc2VJbnQoTSkgKiA2MClcclxuICB2YXIgc3MgPSBmb3JtYXQocylcclxuICB2YXIgUyA9IFN0cmluZyhyZW1haW4pXHJcbiAgdmFyIFNTID0gZm9ybWF0KFMpXHJcbiAgcmV0dXJuIHtcclxuICAgIEQ6IEQsIEREOiBERCxcclxuICAgIGg6IGgsIGhoOiBoaCxcclxuICAgIEg6IEgsIEhIOiBISCxcclxuICAgIG06IG0sIG1tOiBtbSxcclxuICAgIE06IE0sIE1NOiBNTSxcclxuICAgIHM6IHMsIHNzOiBzcyxcclxuICAgIFM6IFMsIFNTOiBTU1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgcHJvcHM6IHtcclxuICAgIHJlbWFpbjoge1xyXG4gICAgICBkZWZhdWx0OiAwXHJcbiAgICB9XHJcbiAgfSxcclxuICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBub3c6IDAsXHJcbiAgICAgIHRhcmdldDogMCxcclxuICAgICAgb3V0b2Z2aWV3OiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLm5vdyA9IERhdGUubm93KCk7XHJcbiAgICB0aGlzLnRhcmdldCA9IHRoaXMubm93ICsgdGhpcy5yZW1haW4gKiAxMDAwXHJcbiAgICBpZiAodGhpcy5yZW1haW4gPiAwKSB7XHJcbiAgICAgIHRoaXMucnVuKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBydW46IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAoIXRoaXMub3V0b2Z2aWV3KSB7XHJcbiAgICAgICAgdGhpcy5ub3cgPSBEYXRlLm5vdygpXHJcbiAgICAgIH1cclxuICAgICAgdmFyIHRpbWUgPSBnZXRUaW1lKHRoaXMudGFyZ2V0LCB0aGlzLm5vdylcclxuICAgICAgaWYgKHRoaXMudGFyZ2V0ID49IHRoaXMubm93KSB7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgndGljaycsIHRpbWUpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnYWxhcm0nLCB0aW1lKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIHNldFRpbWVvdXQodGhpcy5ydW4uYmluZCh0aGlzKSwgMTAwMClcclxuICAgIH0sXHJcbiAgICBhcHBlYXJlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMub3V0b2Z2aWV3ID0gZmFsc2VcclxuICAgIH0sXHJcbiAgICBkaXNhcHBlYXJlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMub3V0b2Z2aWV3ID0gdHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvdW50ZG93bi52dWU/NWU0NDIyN2IiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLFxuICAgICAgXCJmbGV4LWRpcmVjdGlvblwiOiBcInJvd1wiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJhcHBlYXJcIjogX3ZtLmFwcGVhcmVkLFxuICAgICAgXCJkaXNhcHBlYXJcIjogX3ZtLmRpc2FwcGVhcmVkXG4gICAgfVxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTc1MGFjZjA0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi03NTBhY2YwNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2luY2x1ZGUvY291bnRkb3duLnZ1ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDE3Il0sInNvdXJjZVJvb3QiOiIifQ==