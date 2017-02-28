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
	  __webpack_require__(124),
	  /* template */
	  __webpack_require__(125),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\modules\\storage.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] storage.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-c5831526", Component.options)
	  } else {
	    hotAPI.reload("data-v-c5831526", Component.options)
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

/***/ 124:
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
	
	var storage = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/storage\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	module.exports = {
	  data: function () {
	    return {
	      setItemResult: 'loading',
	      getItemResult: 'loading',
	      removeItemResult: 'loading',
	      lengthResult: 'loading',
	      getAllKeysResult: 'loading'
	    };
	  },
	  components: {
	    panel: __webpack_require__(3)
	  },
	  created: function () {
	    var me = this;
	
	    //setItem
	    storage.setItem('foo', 'foo-value', function (e) {
	      console.log('set [foo<->foo-value]:' + JSON.stringify(e));
	      me.setItemResult = 'foo:' + JSON.stringify(e) + '\n';
	    });
	    storage.setItem('bar', 'bar-value', function (e) {
	      console.log('set [bar<->bar-value]:' + JSON.stringify(e));
	      me.setItemResult = me.setItemResult + 'bar:' + JSON.stringify(e);
	    });
	
	    //getItem
	    storage.getItem('foo', function (e) {
	      console.log('get foo result:' + JSON.stringify(e));
	      me.getItemResult = 'get foo,value is ' + e.data + '\n';
	    });
	    storage.getItem('bar', function (e) {
	      console.log('get bar result:' + JSON.stringify(e));
	      me.getItemResult += 'get bar,value is ' + e.data;
	    });
	
	    //length
	    storage.length(function (e) {
	      console.log('length:' + JSON.stringify(e));
	      me.lengthResult = 'current length is ' + e.data;
	    });
	
	    //getAllKeys
	    storage.getAllKeys(function (e) {
	      console.log('getAllKeys:' + JSON.stringify(e));
	      me.getAllKeysResult = '' + e.data;
	      //me.getAllKeysResult +=' '+ typeof e.data
	    });
	
	    //removeItem
	    storage.removeItem('foo', function (e) {
	      console.log('remove foo:' + JSON.stringify(e));
	      me.removeItemResult = 'remove item foo ' + e.result;
	    });
	  }
	};

/***/ },

/***/ 125:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', [_c('panel', {
	    attrs: {
	      "title": "storage API",
	      "type": "primary"
	    }
	  }, [_c('panel', {
	    attrs: {
	      "title": "setItem"
	    }
	  }, [_c('text', [_vm._v(_vm._s(_vm.setItemResult))])]), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "getItem"
	    }
	  }, [_c('text', [_vm._v(_vm._s(_vm.getItemResult))])]), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "length"
	    }
	  }, [_c('text', [_vm._v(_vm._s(_vm.lengthResult))])]), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "getAllKeys"
	    }
	  }, [_c('text', [_vm._v(_vm._s(_vm.getAllKeysResult))])]), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "removeItem"
	    }
	  }, [_c('text', [_vm._v(_vm._s(_vm.removeItemResult))])])], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-c5831526", module.exports)
	  }
	}

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQ/ZWQ2NCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvc3RvcmFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcz9kNGYzKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9wYW5lbC52dWU/NGVjNioqKioqKioqKioqIiwid2VicGFjazovLy9wYW5lbC52dWU/NWJhZCoqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9wYW5lbC52dWU/ZDliOCoqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vc3RvcmFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvc3RvcmFnZS52dWU/M2MwMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUErRSxpREFBaUQsSUFBSTtBQUNwSSxvQ0FBbUM7O0FBRW5DO0FBQ0EsYUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxFQUFDOztBQUVEOzs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4REFBNkQ7QUFDN0Q7QUFDQTtBQUNBLG9DQUFtQztBQUNuQyxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM3Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG9DQUFtQzs7QUFFbkM7QUFDQSxhQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7O3NCQUdBO3VCQUNBOzZCQUNBOzZCQUNBO2lDQUNBO3dCQUVBO0FBUEE7QUFEQSxHOzs7Ozs7O0FDNUJBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7cUJBRUE7O3NCQUVBO3NCQUNBO3lCQUNBO3FCQUNBO3lCQUVBO0FBTkE7QUFPQTs7Z0NBR0E7QUFGQTt3QkFHQTtjQUVBOztBQUNBO3NEQUNBOzZEQUNBO3VEQUNBO0FBQ0E7c0RBQ0E7NkRBQ0E7cUVBQ0E7QUFFQTs7QUFDQTt5Q0FDQTtzREFDQTt5REFDQTtBQUNBO3lDQUNBO3NEQUNBO21EQUNBO0FBRUE7O0FBQ0E7aUNBQ0E7OENBQ0E7a0RBQ0E7QUFFQTs7QUFDQTtxQ0FDQTtrREFDQTtvQ0FDQTtBQUNBO0FBRUE7O0FBQ0E7NENBQ0E7a0RBQ0E7b0RBQ0E7QUFDQTtBQUNBO0FBdERBLEc7Ozs7Ozs7QUMxQkEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJmaWxlIjoibW9kdWxlc1xcc3RvcmFnZS52dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2ZGI5YzAwODlmNmQzODhiNGI0ZCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3N0b3JhZ2UudnVlP2VudHJ5PXRydWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtYzU4MzE1MjYhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3N0b3JhZ2UudnVlP2VudHJ5PXRydWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6XFxcXHdlZWtTdHVkeVxcXFx3ZWV4MlxcXFx3ZWV4M1xcXFxzcmNcXFxcbW9kdWxlc1xcXFxzdG9yYWdlLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHN0b3JhZ2UudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWM1ODMxNTI2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYzU4MzE1MjZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvc3RvcmFnZS52dWU/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDQwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBzY29wZUlkLFxuICBjc3NNb2R1bGVzXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICAvLyBpbmplY3QgY3NzTW9kdWxlc1xuICBpZiAoY3NzTW9kdWxlcykge1xuICAgIHZhciBjb21wdXRlZCA9IG9wdGlvbnMuY29tcHV0ZWQgfHwgKG9wdGlvbnMuY29tcHV0ZWQgPSB7fSlcbiAgICBPYmplY3Qua2V5cyhjc3NNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBjc3NNb2R1bGVzW2tleV1cbiAgICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtb2R1bGUgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MCA2MSA2MiA2MyA2NCA2NSA2NiA2NyA2OCA2OSA3MCA3MSA3MiA3MyA3NCA3NSA3NiA3NyA3OCA3OSA4MCA4MSA4MiA4MyIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMWEzODEyNTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYW5lbC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcGFuZWwudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTFhMzgxMjUyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wYW5lbC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6XFxcXHdlZWtTdHVkeVxcXFx3ZWV4MlxcXFx3ZWV4M1xcXFxzcmNcXFxcaW5jbHVkZVxcXFxwYW5lbC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBwYW5lbC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMWEzODEyNTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xYTM4MTI1MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5jbHVkZS9wYW5lbC52dWVcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNiA3IDkgMTEgMzcgMzggMzkgNDAgNDEgNTYgNTcgNTggNTkgODMiLCI8IS0tIEluc3BpcmVkIGJ5IGJvb3RzdHJhcCBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8gLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2XHJcbiAgICA6Y2xhc3M9XCJbJ3BhbmVsJywgJ3BhbmVsLScgKyB0eXBlXVwiXHJcbiAgICA6c3R5bGU9XCJ7IGJvcmRlcldpZHRoOiBib3JkZXIgfVwiPlxyXG4gICAgPHRleHRcclxuICAgICAgOmNsYXNzPVwiWydwYW5lbC1oZWFkZXInLCAncGFuZWwtaGVhZGVyLScgKyB0eXBlXVwiXHJcbiAgICAgIDpzdHlsZT1cIntcclxuICAgICAgICBwYWRkaW5nVG9wOiBwYWRkaW5nSGVhZCxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiBwYWRkaW5nSGVhZCxcclxuICAgICAgICBwYWRkaW5nTGVmdDogcGFkZGluZ0hlYWQqMS41LFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDogcGFkZGluZ0hlYWQqMS41XHJcbiAgICAgIH1cIj57e3RpdGxlfX08L3RleHQ+XHJcbiAgICA8ZGl2XHJcbiAgICAgIDpjbGFzcz1cIlsncGFuZWwtYm9keScsICdwYW5lbC1ib2R5LScgKyB0eXBlXVwiXHJcbiAgICAgIDpzdHlsZT1cIntcclxuICAgICAgICBwYWRkaW5nVG9wOiBwYWRkaW5nQm9keSxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiBwYWRkaW5nQm9keSxcclxuICAgICAgICBwYWRkaW5nTGVmdDogcGFkZGluZ0JvZHkqMS41LFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDogcGFkZGluZ0JvZHkqMS41XHJcbiAgICAgIH1cIj5cclxuICAgICAgPHNsb3Q+PC9zbG90PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgdHlwZTogeyBkZWZhdWx0OiAnZGVmYXVsdCcgfSxcclxuICAgICAgdGl0bGU6IHsgZGVmYXVsdDogJycgfSxcclxuICAgICAgcGFkZGluZ0JvZHk6IHsgZGVmYXVsdDogMjAgfSxcclxuICAgICAgcGFkZGluZ0hlYWQ6IHsgZGVmYXVsdDogMjAgfSxcclxuICAgICAgZGF0YUNsYXNzOiB7IGRlZmF1bHQ6ICcnIH0sIC8vIEZJWE1FIHRyYW5zZmVyIGNsYXNzXHJcbiAgICAgIGJvcmRlcjp7IGRlZmF1bHQ6IDAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgLnBhbmVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLypib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsqL1xyXG4gICAgLypib3JkZXItcmFkaXVzOiAxMHB4OyovXHJcbiAgICAvKi13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA1KTsqL1xyXG4gICAgLypib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpOyovXHJcbiAgICBib3JkZXItY29sb3I6ICNkZGRkZGQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1kZWZhdWx0IHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1wcmltYXJ5IHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDQwLCA5NiwgMTQ0KTtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1zdWNjZXNzIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDc2LCAxNzQsIDc2KTtcclxuXHJcbiAgfVxyXG5cclxuICAucGFuZWwtaW5mbyB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig3MCwgMTg0LCAyMTgpO1xyXG5cclxuICB9XHJcblxyXG4gIC5wYW5lbC13YXJuaW5nIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIzOCwgMTYyLCA1NCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWRhbmdlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTIsIDYzLCA1OCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgLypwYWRkaW5nLWxlZnQ6IDEycHg7Ki9cclxuICAgIC8qcGFkZGluZy1yaWdodDogMTJweDsqL1xyXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xyXG4gICAgLypwYWRkaW5nLWJvdHRvbTogMjBweDsqL1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyLWRlZmF1bHQge1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlci1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXItc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDE4NCwgOTIpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyLWluZm8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkxLCAxOTIsIDIyMik7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXItd2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxNzMsIDc4KTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlci1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNywgODMsIDc5KTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHkge1xyXG4gICAgLypwYWRkaW5nLWxlZnQ6IDEycHg7Ki9cclxuICAgIC8qcGFkZGluZy1yaWdodDogMTJweDsqL1xyXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xyXG4gICAgLypwYWRkaW5nLWJvdHRvbTogMjBweDsqL1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHktZGVmYXVsdCB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtYm9keS1wcmltYXJ5IHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5LXN1Y2Nlc3Mge1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHktaW5mbyB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtYm9keS13YXJuaW5nIHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5LWRhbmdlciB7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcGFuZWwudnVlPzQ3YzIzZTQ2IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsncGFuZWwnLCAncGFuZWwtJyArIF92bS50eXBlXSxcbiAgICBzdHlsZTogKHtcbiAgICAgIGJvcmRlcldpZHRoOiBfdm0uYm9yZGVyXG4gICAgfSlcbiAgfSwgW19jKCd0ZXh0Jywge1xuICAgIGNsYXNzOiBbJ3BhbmVsLWhlYWRlcicsICdwYW5lbC1oZWFkZXItJyArIF92bS50eXBlXSxcbiAgICBzdHlsZTogKHtcbiAgICAgIHBhZGRpbmdUb3A6IF92bS5wYWRkaW5nSGVhZCxcbiAgICAgIHBhZGRpbmdCb3R0b206IF92bS5wYWRkaW5nSGVhZCxcbiAgICAgIHBhZGRpbmdMZWZ0OiBfdm0ucGFkZGluZ0hlYWQgKiAxLjUsXG4gICAgICBwYWRkaW5nUmlnaHQ6IF92bS5wYWRkaW5nSGVhZCAqIDEuNVxuICAgIH0pXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsncGFuZWwtYm9keScsICdwYW5lbC1ib2R5LScgKyBfdm0udHlwZV0sXG4gICAgc3R5bGU6ICh7XG4gICAgICBwYWRkaW5nVG9wOiBfdm0ucGFkZGluZ0JvZHksXG4gICAgICBwYWRkaW5nQm90dG9tOiBfdm0ucGFkZGluZ0JvZHksXG4gICAgICBwYWRkaW5nTGVmdDogX3ZtLnBhZGRpbmdCb2R5ICogMS41LFxuICAgICAgcGFkZGluZ1JpZ2h0OiBfdm0ucGFkZGluZ0JvZHkgKiAxLjVcbiAgICB9KVxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMWEzODEyNTJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTFhMzgxMjUyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvaW5jbHVkZS9wYW5lbC52dWVcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNiA3IDkgMTEgMzcgMzggMzkgNDAgNDEgNTYgNTcgNTggNTkgODMiLCI8dGVtcGxhdGU+XHJcbiAgPHNjcm9sbGVyPlxyXG4gICAgPHBhbmVsIHRpdGxlPVwic3RvcmFnZSBBUElcIiB0eXBlPVwicHJpbWFyeVwiPlxyXG4gICAgICA8cGFuZWwgdGl0bGU9XCJzZXRJdGVtXCI+XHJcbiAgICAgICAgPHRleHQ+e3tzZXRJdGVtUmVzdWx0fX08L3RleHQ+XHJcbiAgICAgIDwvcGFuZWw+XHJcbiAgICAgIDxwYW5lbCB0aXRsZT1cImdldEl0ZW1cIj5cclxuICAgICAgICA8dGV4dD57e2dldEl0ZW1SZXN1bHR9fTwvdGV4dD5cclxuICAgICAgPC9wYW5lbD5cclxuICAgICAgPHBhbmVsIHRpdGxlPVwibGVuZ3RoXCI+XHJcbiAgICAgICAgPHRleHQ+e3tsZW5ndGhSZXN1bHR9fTwvdGV4dD5cclxuICAgICAgPC9wYW5lbD5cclxuICAgICAgPHBhbmVsIHRpdGxlPVwiZ2V0QWxsS2V5c1wiPlxyXG4gICAgICAgIDx0ZXh0Pnt7Z2V0QWxsS2V5c1Jlc3VsdH19PC90ZXh0PlxyXG4gICAgICA8L3BhbmVsPlxyXG4gICAgICA8cGFuZWwgdGl0bGU9XCJyZW1vdmVJdGVtXCI+XHJcbiAgICAgICAgPHRleHQ+e3tyZW1vdmVJdGVtUmVzdWx0fX08L3RleHQ+XHJcbiAgICAgIDwvcGFuZWw+XHJcbiAgICA8L3BhbmVsPlxyXG4gIDwvc2Nyb2xsZXI+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG5cclxuPHNjcmlwdD5cclxuICB2YXIgc3RvcmFnZSA9IHJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9zdG9yYWdlJylcclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRJdGVtUmVzdWx0Oidsb2FkaW5nJyxcclxuICAgICAgICBnZXRJdGVtUmVzdWx0Oidsb2FkaW5nJyxcclxuICAgICAgICByZW1vdmVJdGVtUmVzdWx0Oidsb2FkaW5nJyxcclxuICAgICAgICBsZW5ndGhSZXN1bHQ6J2xvYWRpbmcnLFxyXG4gICAgICAgIGdldEFsbEtleXNSZXN1bHQ6J2xvYWRpbmcnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIHBhbmVsOiByZXF1aXJlKCcuLi9pbmNsdWRlL3BhbmVsLnZ1ZScpXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBtZSA9IHRoaXNcclxuXHJcbiAgICAgIC8vc2V0SXRlbVxyXG4gICAgICBzdG9yYWdlLnNldEl0ZW0oJ2ZvbycsJ2Zvby12YWx1ZScsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NldCBbZm9vPC0+Zm9vLXZhbHVlXTonK0pTT04uc3RyaW5naWZ5KGUpKVxyXG4gICAgICAgIG1lLnNldEl0ZW1SZXN1bHQgPSAnZm9vOicrSlNPTi5zdHJpbmdpZnkoZSkrJ1xcbidcclxuICAgICAgfSlcclxuICAgICAgc3RvcmFnZS5zZXRJdGVtKCdiYXInLCdiYXItdmFsdWUnLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZXQgW2JhcjwtPmJhci12YWx1ZV06JytKU09OLnN0cmluZ2lmeShlKSlcclxuICAgICAgICBtZS5zZXRJdGVtUmVzdWx0ID0gbWUuc2V0SXRlbVJlc3VsdCArICdiYXI6JytKU09OLnN0cmluZ2lmeShlKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy9nZXRJdGVtXHJcbiAgICAgIHN0b3JhZ2UuZ2V0SXRlbSgnZm9vJyxmdW5jdGlvbihlKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGZvbyByZXN1bHQ6JytKU09OLnN0cmluZ2lmeShlKSlcclxuICAgICAgICBtZS5nZXRJdGVtUmVzdWx0ID0gJ2dldCBmb28sdmFsdWUgaXMgJytlLmRhdGErJ1xcbidcclxuICAgICAgfSlcclxuICAgICAgc3RvcmFnZS5nZXRJdGVtKCdiYXInLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgYmFyIHJlc3VsdDonK0pTT04uc3RyaW5naWZ5KGUpKVxyXG4gICAgICAgIG1lLmdldEl0ZW1SZXN1bHQgKz0gJ2dldCBiYXIsdmFsdWUgaXMgJytlLmRhdGFcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vbGVuZ3RoXHJcbiAgICAgIHN0b3JhZ2UubGVuZ3RoKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsZW5ndGg6JytKU09OLnN0cmluZ2lmeShlKSlcclxuICAgICAgICBtZS5sZW5ndGhSZXN1bHQgPSAnY3VycmVudCBsZW5ndGggaXMgJyArIGUuZGF0YVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy9nZXRBbGxLZXlzXHJcbiAgICAgIHN0b3JhZ2UuZ2V0QWxsS2V5cyhmdW5jdGlvbihlKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0QWxsS2V5czonK0pTT04uc3RyaW5naWZ5KGUpKVxyXG4gICAgICAgIG1lLmdldEFsbEtleXNSZXN1bHQgPSAnJyArIGUuZGF0YVxyXG4gICAgICAgIC8vbWUuZ2V0QWxsS2V5c1Jlc3VsdCArPScgJysgdHlwZW9mIGUuZGF0YVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy9yZW1vdmVJdGVtXHJcbiAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSgnZm9vJyxmdW5jdGlvbihlKXtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlIGZvbzonK0pTT04uc3RyaW5naWZ5KGUpKVxyXG4gICAgICAgIG1lLnJlbW92ZUl0ZW1SZXN1bHQgPSAncmVtb3ZlIGl0ZW0gZm9vICcrZS5yZXN1bHRcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3RvcmFnZS52dWU/MTNjNTQwYzciLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3Njcm9sbGVyJywgW19jKCdwYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcInN0b3JhZ2UgQVBJXCIsXG4gICAgICBcInR5cGVcIjogXCJwcmltYXJ5XCJcbiAgICB9XG4gIH0sIFtfYygncGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJzZXRJdGVtXCJcbiAgICB9XG4gIH0sIFtfYygndGV4dCcsIFtfdm0uX3YoX3ZtLl9zKF92bS5zZXRJdGVtUmVzdWx0KSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJnZXRJdGVtXCJcbiAgICB9XG4gIH0sIFtfYygndGV4dCcsIFtfdm0uX3YoX3ZtLl9zKF92bS5nZXRJdGVtUmVzdWx0KSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJsZW5ndGhcIlxuICAgIH1cbiAgfSwgW19jKCd0ZXh0JywgW192bS5fdihfdm0uX3MoX3ZtLmxlbmd0aFJlc3VsdCkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiZ2V0QWxsS2V5c1wiXG4gICAgfVxuICB9LCBbX2MoJ3RleHQnLCBbX3ZtLl92KF92bS5fcyhfdm0uZ2V0QWxsS2V5c1Jlc3VsdCkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwicmVtb3ZlSXRlbVwiXG4gICAgfVxuICB9LCBbX2MoJ3RleHQnLCBbX3ZtLl92KF92bS5fcyhfdm0ucmVtb3ZlSXRlbVJlc3VsdCkpXSldKV0sIDEpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtYzU4MzE1MjZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWM1ODMxNTI2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvbW9kdWxlcy9zdG9yYWdlLnZ1ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAxMjVcbi8vIG1vZHVsZSBjaHVua3MgPSA0MCJdLCJzb3VyY2VSb290IjoiIn0=