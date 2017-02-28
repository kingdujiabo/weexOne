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
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-rewriter?id=data-v-9e6cdac4!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./calculator.vue?entry=true\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(128),
	  /* template */
	  __webpack_require__(129),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\showcase\\calculator.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] calculator.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-9e6cdac4", Component.options)
	  } else {
	    hotAPI.reload("data-v-9e6cdac4", Component.options)
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

/***/ 128:
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
	
	var OP = ['+', '-', '*', '/'];
	var modal = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/modal\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	module.exports = {
	  data: function () {
	    return {
	      result: '',
	      inputs: []
	    };
	  },
	  methods: {
	    input: function (e) {
	      modal.toast({ message: 'input: ' + e.target.attr.value, duration: 1 });
	      var value = e.target.attr['value'];
	      var inputs = this.inputs;
	      var lastOne = inputs.length ? inputs[inputs.length - 1] : '';
	      if (OP.indexOf(lastOne) > -1 && OP.indexOf(value) > -1) {
	        return;
	      }
	      inputs.push(value);
	      var buf = [],
	          char;
	      for (var i = 0; i < inputs.length; i++) {
	        char = inputs[i];
	        if (OP.indexOf(char) > -1) {
	          char = ' ' + char + ' ';
	        }
	        buf.push(char);
	      }
	      this.result = buf.join('');
	    },
	    calculate: function () {
	      var result = eval(this.result);
	      this.inputs = [result];
	      this.result = result;
	    },
	    clear: function () {
	      this.inputs = [];
	      this.result = '';
	    }
	  }
	};

/***/ },

/***/ 129:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      "padding": "5px"
	    }
	  }, [_c('text', {
	    staticClass: "result"
	  }, [_vm._v(_vm._s(_vm.result))]), _vm._v(" "), _c('div', {
	    staticClass: "row"
	  }, [_c('text', {
	    staticClass: "btn",
	    on: {
	      "click": _vm.input
	    }
	  }, [_vm._v("1")]), _vm._v(" "), _c('text', {
	    staticClass: "btn",
	    on: {
	      "click": _vm.input
	    }
	  }, [_vm._v("2")]), _vm._v(" "), _c('text', {
	    staticClass: "btn",
	    on: {
	      "click": _vm.input
	    }
	  }, [_vm._v("3")]), _vm._v(" "), _c('text', {
	    staticClass: "btn btn-operator",
	    on: {
	      "click": _vm.input
	    }
	  }, [_vm._v("+")])]), _vm._v(" "), _c('div', {
	    staticClass: "row"
	  }, [_c('text', {
	    staticClass: "btn",
	    on: {
	      "click": _vm.input
	    }
	  }, [_vm._v("4")]), _vm._v(" "), _c('text', {
	    staticClass: "btn",
	    on: {
	      "click": _vm.input
	    }
	  }, [_vm._v("5")]), _vm._v(" "), _c('text', {
	    staticClass: "btn",
	    on: {
	      "click": _vm.input
	    }
	  }, [_vm._v("6")]), _vm._v(" "), _c('text', {
	    staticClass: "btn btn-operator",
	    on: {
	      "click": _vm.input
	    }
	  }, [_vm._v("-")])]), _vm._v(" "), _c('div', {
	    staticClass: "row"
	  }, [_c('text', {
	    staticClass: "btn",
	    on: {
	      "click": _vm.input
	    }
	  }, [_vm._v("7")]), _vm._v(" "), _c('text', {
	    staticClass: "btn",
	    on: {
	      "click": _vm.input
	    }
	  }, [_vm._v("8")]), _vm._v(" "), _c('text', {
	    staticClass: "btn",
	    on: {
	      "click": _vm.input
	    }
	  }, [_vm._v("9")]), _vm._v(" "), _c('text', {
	    staticClass: "btn btn-operator",
	    on: {
	      "click": _vm.input
	    }
	  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
	    staticClass: "row"
	  }, [_c('text', {
	    staticClass: "btn",
	    on: {
	      "click": _vm.input
	    }
	  }, [_vm._v("0")]), _vm._v(" "), _c('text', {
	    staticClass: "btn",
	    on: {
	      "click": _vm.input
	    }
	  }, [_vm._v(".")]), _vm._v(" "), _c('text', {
	    staticClass: "btn",
	    on: {
	      "click": _vm.clear
	    }
	  }, [_vm._v("AC")]), _vm._v(" "), _c('text', {
	    staticClass: "btn btn-operator",
	    on: {
	      "click": _vm.calculate
	    }
	  }, [_vm._v("=")])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-9e6cdac4", module.exports)
	  }
	}

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nob3djYXNlL2NhbGN1bGF0b3IudnVlIiwid2VicGFjazovLy8uL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vL2NhbGN1bGF0b3IudnVlIiwid2VicGFjazovLy8uL3NyYy9zaG93Y2FzZS9jYWxjdWxhdG9yLnZ1ZT84NTc4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNyQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG9DQUFtQzs7QUFFbkM7QUFDQSxhQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhEQUE2RDtBQUM3RDtBQUNBO0FBQ0Esb0NBQW1DO0FBQ25DLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaUJBO0FBQ0E7QUFDQTtxQkFFQTs7ZUFFQTtlQUVBO0FBSEE7QUFJQTs7eUJBRUE7eUVBQ0E7aUNBQ0E7eUJBQ0E7aUVBQ0E7K0RBQ0E7QUFDQTtBQUNBO21CQUNBOztXQUNBOytDQUNBO3VCQUNBO29DQUNBOytCQUNBO0FBQ0E7a0JBQ0E7QUFDQTs4QkFDQTtBQUNBOzRCQUNBOzhCQUNBO3NCQUNBO3FCQUNBO0FBQ0E7d0JBQ0E7cUJBQ0E7cUJBQ0E7QUFFQTtBQTdCQTtBQVBBLEc7Ozs7Ozs7QUNsRUEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJzaG93Y2FzZVxcY2FsY3VsYXRvci52dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2ZGI5YzAwODlmNmQzODhiNGI0ZCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtOWU2Y2RhYzQhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9jYWxjdWxhdG9yLnZ1ZT9lbnRyeT10cnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NhbGN1bGF0b3IudnVlP2VudHJ5PXRydWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtOWU2Y2RhYzQhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NhbGN1bGF0b3IudnVlP2VudHJ5PXRydWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6XFxcXHdlZWtTdHVkeVxcXFx3ZWV4MlxcXFx3ZWV4M1xcXFxzcmNcXFxcc2hvd2Nhc2VcXFxcY2FsY3VsYXRvci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjYWxjdWxhdG9yLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi05ZTZjZGFjNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTllNmNkYWM0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaG93Y2FzZS9jYWxjdWxhdG9yLnZ1ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gNDIiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIHNjb3BlSWQsXG4gIGNzc01vZHVsZXNcbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIC8vIGluamVjdCBjc3NNb2R1bGVzXG4gIGlmIChjc3NNb2R1bGVzKSB7XG4gICAgdmFyIGNvbXB1dGVkID0gb3B0aW9ucy5jb21wdXRlZCB8fCAob3B0aW9ucy5jb21wdXRlZCA9IHt9KVxuICAgIE9iamVjdC5rZXlzKGNzc01vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG1vZHVsZSA9IGNzc01vZHVsZXNba2V5XVxuICAgICAgY29tcHV0ZWRba2V5XSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vZHVsZSB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IDM4IDM5IDQwIDQxIDQyIDQzIDQ0IDQ1IDQ2IDQ3IDQ4IDQ5IDUwIDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDU5IDYwIDYxIDYyIDYzIDY0IDY1IDY2IDY3IDY4IDY5IDcwIDcxIDcyIDczIDc0IDc1IDc2IDc3IDc4IDc5IDgwIDgxIDgyIDgzIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgc3R5bGU9XCJwYWRkaW5nOiA1cHg7XCI+XHJcbiAgICA8dGV4dCBjbGFzcz1cInJlc3VsdFwiPnt7cmVzdWx0fX08L3RleHQ+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwiYnRuXCIgQGNsaWNrPVwiaW5wdXRcIj4xPC90ZXh0PlxyXG4gICAgICA8dGV4dCBjbGFzcz1cImJ0blwiIEBjbGljaz1cImlucHV0XCI+MjwvdGV4dD5cclxuICAgICAgPHRleHQgY2xhc3M9XCJidG5cIiBAY2xpY2s9XCJpbnB1dFwiPjM8L3RleHQ+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwiYnRuIGJ0bi1vcGVyYXRvclwiIEBjbGljaz1cImlucHV0XCI+KzwvdGV4dD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8dGV4dCBjbGFzcz1cImJ0blwiIEBjbGljaz1cImlucHV0XCI+NDwvdGV4dD5cclxuICAgICAgPHRleHQgY2xhc3M9XCJidG5cIiBAY2xpY2s9XCJpbnB1dFwiPjU8L3RleHQ+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwiYnRuXCIgQGNsaWNrPVwiaW5wdXRcIj42PC90ZXh0PlxyXG4gICAgICA8dGV4dCBjbGFzcz1cImJ0biBidG4tb3BlcmF0b3JcIiBAY2xpY2s9XCJpbnB1dFwiPi08L3RleHQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgPHRleHQgY2xhc3M9XCJidG5cIiBAY2xpY2s9XCJpbnB1dFwiPjc8L3RleHQ+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwiYnRuXCIgQGNsaWNrPVwiaW5wdXRcIj44PC90ZXh0PlxyXG4gICAgICA8dGV4dCBjbGFzcz1cImJ0blwiIEBjbGljaz1cImlucHV0XCI+OTwvdGV4dD5cclxuICAgICAgPHRleHQgY2xhc3M9XCJidG4gYnRuLW9wZXJhdG9yXCIgQGNsaWNrPVwiaW5wdXRcIj4qPC90ZXh0PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwiYnRuXCIgQGNsaWNrPVwiaW5wdXRcIj4wPC90ZXh0PlxyXG4gICAgICA8dGV4dCBjbGFzcz1cImJ0blwiIEBjbGljaz1cImlucHV0XCI+LjwvdGV4dD5cclxuICAgICAgPHRleHQgY2xhc3M9XCJidG5cIiBAY2xpY2s9XCJjbGVhclwiPkFDPC90ZXh0PlxyXG4gICAgICA8dGV4dCBjbGFzcz1cImJ0biBidG4tb3BlcmF0b3JcIiBAY2xpY2s9XCJjYWxjdWxhdGVcIj49PC90ZXh0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGU+XHJcbiAgLnJvdyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuXHJcbiAgLnJlc3VsdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuYnRuIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0biwgLnJlc3VsdCB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1vcGVyYXRvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY5O1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgdmFyIE9QID0gWycrJywgJy0nLCAnKicsICcvJ107XHJcbiAgdmFyIG1vZGFsID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL21vZGFsJylcclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICByZXN1bHQ6ICcnLFxyXG4gICAgICAgIGlucHV0czogW11cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgaW5wdXQ6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBtb2RhbC50b2FzdCh7IG1lc3NhZ2U6ICdpbnB1dDogJyArIGUudGFyZ2V0LmF0dHIudmFsdWUsIGR1cmF0aW9uOiAxIH0pXHJcbiAgICAgICAgdmFyIHZhbHVlID0gZS50YXJnZXQuYXR0clsndmFsdWUnXTtcclxuICAgICAgICB2YXIgaW5wdXRzID0gdGhpcy5pbnB1dHM7XHJcbiAgICAgICAgdmFyIGxhc3RPbmUgPSBpbnB1dHMubGVuZ3RoID8gaW5wdXRzW2lucHV0cy5sZW5ndGggLSAxXSA6ICcnO1xyXG4gICAgICAgIGlmIChPUC5pbmRleE9mKGxhc3RPbmUpID4gLTEgJiYgT1AuaW5kZXhPZih2YWx1ZSkgPiAtMSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dHMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgdmFyIGJ1ZiA9IFtdLCBjaGFyO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBjaGFyID0gaW5wdXRzW2ldO1xyXG4gICAgICAgICAgaWYgKE9QLmluZGV4T2YoY2hhcikgPiAtMSkge1xyXG4gICAgICAgICAgICBjaGFyID0gJyAnICsgY2hhciArICcgJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1Zi5wdXNoKGNoYXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc3VsdCA9IGJ1Zi5qb2luKCcnKTtcclxuICAgICAgfSxcclxuICAgICAgY2FsY3VsYXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gZXZhbCh0aGlzLnJlc3VsdCk7XHJcbiAgICAgICAgdGhpcy5pbnB1dHMgPSBbcmVzdWx0XTtcclxuICAgICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcclxuICAgICAgfSxcclxuICAgICAgY2xlYXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRzID0gW107XHJcbiAgICAgICAgdGhpcy5yZXN1bHQgPSAnJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjYWxjdWxhdG9yLnZ1ZT80Yzg5YWYzMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcInBhZGRpbmdcIjogXCI1cHhcIlxuICAgIH1cbiAgfSwgW19jKCd0ZXh0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJlc3VsdFwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5yZXN1bHQpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygndGV4dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG5cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uaW5wdXRcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCIxXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0blwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5pbnB1dFxuICAgIH1cbiAgfSwgW192bS5fdihcIjJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmlucHV0XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiM1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW9wZXJhdG9yXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmlucHV0XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiK1wiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCd0ZXh0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0blwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5pbnB1dFxuICAgIH1cbiAgfSwgW192bS5fdihcIjRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmlucHV0XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiNVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG5cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uaW5wdXRcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCI2XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3BlcmF0b3JcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uaW5wdXRcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCItXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ3RleHQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmlucHV0XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiN1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG5cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uaW5wdXRcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCI4XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0blwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5pbnB1dFxuICAgIH1cbiAgfSwgW192bS5fdihcIjlcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vcGVyYXRvclwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5pbnB1dFxuICAgIH1cbiAgfSwgW192bS5fdihcIipcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygndGV4dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG5cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uaW5wdXRcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCIwXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0blwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5pbnB1dFxuICAgIH1cbiAgfSwgW192bS5fdihcIi5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmNsZWFyXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQUNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vcGVyYXRvclwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5jYWxjdWxhdGVcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCI9XCIpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTllNmNkYWM0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi05ZTZjZGFjNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3Nob3djYXNlL2NhbGN1bGF0b3IudnVlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDQyIl0sInNvdXJjZVJvb3QiOiIifQ==