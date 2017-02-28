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
	  __webpack_require__(189),
	  /* template */
	  __webpack_require__(190),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\showcase\\progress.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] progress.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-98d1e56e", Component.options)
	  } else {
	    hotAPI.reload("data-v-98d1e56e", Component.options)
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

/***/ 189:
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
	
	var INC = 20;
	module.exports = {
	  data: function () {
	    return {
	      fullW: 600,
	      w: 40
	    };
	  },
	  components: {
	    panel: __webpack_require__(3)
	  },
	  created: function () {
	    var me = this;
	    setInterval(function () {
	      if (me.w >= me.fullW) {
	        me.w = 0;
	      }
	      me.w = me.w + INC >= me.fullW ? me.fullW : me.w + INC;
	    }, 33);
	  }
	};

/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', [_c('panel', {
	    attrs: {
	      "title": "Basic",
	      "type": "primary"
	    }
	  }, [_c('div', {
	    style: ({
	      width: _vm.fullW,
	      borderColor: '#333',
	      borderWidth: 1,
	      borderStyle: 'solid'
	    })
	  }, [_c('div', {
	    style: ({
	      width: _vm.w,
	      height: 60,
	      backgroundColor: '#333'
	    })
	  })])])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-98d1e56e", module.exports)
	  }
	}

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQ/ZWQ2NCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nob3djYXNlL3Byb2dyZXNzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzP2Q0ZjMqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3BhbmVsLnZ1ZT80ZWM2KioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vcGFuZWwudnVlPzViYWQqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9wYW5lbC52dWU/ZDliOCoqKioqKioqKioqKioqIiwid2VicGFjazovLy9wcm9ncmVzcy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nob3djYXNlL3Byb2dyZXNzLnZ1ZT81YTdmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG9DQUFtQzs7QUFFbkM7QUFDQSxhQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhEQUE2RDtBQUM3RDtBQUNBO0FBQ0Esb0NBQW1DO0FBQ25DLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzdDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBK0UsaURBQWlELElBQUk7QUFDcEksb0NBQW1DOztBQUVuQztBQUNBLGFBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7c0JBR0E7dUJBQ0E7NkJBQ0E7NkJBQ0E7aUNBQ0E7d0JBRUE7QUFQQTtBQURBLEc7Ozs7Ozs7QUM1QkEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7cUJBRUE7O2NBRUE7VUFFQTtBQUhBO0FBSUE7O2dDQUdBO0FBRkE7d0JBR0E7Y0FDQTs2QkFDQTs2QkFDQTtnQkFDQTtBQUNBO3lEQUNBO1FBQ0E7QUFDQTtBQWxCQSxHOzs7Ozs7O0FDeEJBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJmaWxlIjoic2hvd2Nhc2VcXHByb2dyZXNzLnZ1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZkYjljMDA4OWY2ZDM4OGI0YjRkIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcHJvZ3Jlc3MudnVlP2VudHJ5PXRydWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtOThkMWU1NmUhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Byb2dyZXNzLnZ1ZT9lbnRyeT10cnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFx3ZWVrU3R1ZHlcXFxcd2VleDJcXFxcd2VleDNcXFxcc3JjXFxcXHNob3djYXNlXFxcXHByb2dyZXNzLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHByb2dyZXNzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi05OGQxZTU2ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTk4ZDFlNTZlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaG93Y2FzZS9wcm9ncmVzcy52dWU/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDU2IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBzY29wZUlkLFxuICBjc3NNb2R1bGVzXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICAvLyBpbmplY3QgY3NzTW9kdWxlc1xuICBpZiAoY3NzTW9kdWxlcykge1xuICAgIHZhciBjb21wdXRlZCA9IG9wdGlvbnMuY29tcHV0ZWQgfHwgKG9wdGlvbnMuY29tcHV0ZWQgPSB7fSlcbiAgICBPYmplY3Qua2V5cyhjc3NNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBjc3NNb2R1bGVzW2tleV1cbiAgICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtb2R1bGUgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MCA2MSA2MiA2MyA2NCA2NSA2NiA2NyA2OCA2OSA3MCA3MSA3MiA3MyA3NCA3NSA3NiA3NyA3OCA3OSA4MCA4MSA4MiA4MyIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMWEzODEyNTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYW5lbC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcGFuZWwudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTFhMzgxMjUyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wYW5lbC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6XFxcXHdlZWtTdHVkeVxcXFx3ZWV4MlxcXFx3ZWV4M1xcXFxzcmNcXFxcaW5jbHVkZVxcXFxwYW5lbC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBwYW5lbC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMWEzODEyNTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xYTM4MTI1MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5jbHVkZS9wYW5lbC52dWVcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNiA3IDkgMTEgMzcgMzggMzkgNDAgNDEgNTYgNTcgNTggNTkgODMiLCI8IS0tIEluc3BpcmVkIGJ5IGJvb3RzdHJhcCBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8gLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2XHJcbiAgICA6Y2xhc3M9XCJbJ3BhbmVsJywgJ3BhbmVsLScgKyB0eXBlXVwiXHJcbiAgICA6c3R5bGU9XCJ7IGJvcmRlcldpZHRoOiBib3JkZXIgfVwiPlxyXG4gICAgPHRleHRcclxuICAgICAgOmNsYXNzPVwiWydwYW5lbC1oZWFkZXInLCAncGFuZWwtaGVhZGVyLScgKyB0eXBlXVwiXHJcbiAgICAgIDpzdHlsZT1cIntcclxuICAgICAgICBwYWRkaW5nVG9wOiBwYWRkaW5nSGVhZCxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiBwYWRkaW5nSGVhZCxcclxuICAgICAgICBwYWRkaW5nTGVmdDogcGFkZGluZ0hlYWQqMS41LFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDogcGFkZGluZ0hlYWQqMS41XHJcbiAgICAgIH1cIj57e3RpdGxlfX08L3RleHQ+XHJcbiAgICA8ZGl2XHJcbiAgICAgIDpjbGFzcz1cIlsncGFuZWwtYm9keScsICdwYW5lbC1ib2R5LScgKyB0eXBlXVwiXHJcbiAgICAgIDpzdHlsZT1cIntcclxuICAgICAgICBwYWRkaW5nVG9wOiBwYWRkaW5nQm9keSxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiBwYWRkaW5nQm9keSxcclxuICAgICAgICBwYWRkaW5nTGVmdDogcGFkZGluZ0JvZHkqMS41LFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDogcGFkZGluZ0JvZHkqMS41XHJcbiAgICAgIH1cIj5cclxuICAgICAgPHNsb3Q+PC9zbG90PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgdHlwZTogeyBkZWZhdWx0OiAnZGVmYXVsdCcgfSxcclxuICAgICAgdGl0bGU6IHsgZGVmYXVsdDogJycgfSxcclxuICAgICAgcGFkZGluZ0JvZHk6IHsgZGVmYXVsdDogMjAgfSxcclxuICAgICAgcGFkZGluZ0hlYWQ6IHsgZGVmYXVsdDogMjAgfSxcclxuICAgICAgZGF0YUNsYXNzOiB7IGRlZmF1bHQ6ICcnIH0sIC8vIEZJWE1FIHRyYW5zZmVyIGNsYXNzXHJcbiAgICAgIGJvcmRlcjp7IGRlZmF1bHQ6IDAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgLnBhbmVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLypib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsqL1xyXG4gICAgLypib3JkZXItcmFkaXVzOiAxMHB4OyovXHJcbiAgICAvKi13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA1KTsqL1xyXG4gICAgLypib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpOyovXHJcbiAgICBib3JkZXItY29sb3I6ICNkZGRkZGQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1kZWZhdWx0IHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1wcmltYXJ5IHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDQwLCA5NiwgMTQ0KTtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1zdWNjZXNzIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDc2LCAxNzQsIDc2KTtcclxuXHJcbiAgfVxyXG5cclxuICAucGFuZWwtaW5mbyB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig3MCwgMTg0LCAyMTgpO1xyXG5cclxuICB9XHJcblxyXG4gIC5wYW5lbC13YXJuaW5nIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIzOCwgMTYyLCA1NCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWRhbmdlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTIsIDYzLCA1OCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgLypwYWRkaW5nLWxlZnQ6IDEycHg7Ki9cclxuICAgIC8qcGFkZGluZy1yaWdodDogMTJweDsqL1xyXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xyXG4gICAgLypwYWRkaW5nLWJvdHRvbTogMjBweDsqL1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyLWRlZmF1bHQge1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlci1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXItc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDE4NCwgOTIpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyLWluZm8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkxLCAxOTIsIDIyMik7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXItd2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxNzMsIDc4KTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlci1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNywgODMsIDc5KTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHkge1xyXG4gICAgLypwYWRkaW5nLWxlZnQ6IDEycHg7Ki9cclxuICAgIC8qcGFkZGluZy1yaWdodDogMTJweDsqL1xyXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xyXG4gICAgLypwYWRkaW5nLWJvdHRvbTogMjBweDsqL1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHktZGVmYXVsdCB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtYm9keS1wcmltYXJ5IHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5LXN1Y2Nlc3Mge1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHktaW5mbyB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtYm9keS13YXJuaW5nIHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5LWRhbmdlciB7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcGFuZWwudnVlPzQ3YzIzZTQ2IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsncGFuZWwnLCAncGFuZWwtJyArIF92bS50eXBlXSxcbiAgICBzdHlsZTogKHtcbiAgICAgIGJvcmRlcldpZHRoOiBfdm0uYm9yZGVyXG4gICAgfSlcbiAgfSwgW19jKCd0ZXh0Jywge1xuICAgIGNsYXNzOiBbJ3BhbmVsLWhlYWRlcicsICdwYW5lbC1oZWFkZXItJyArIF92bS50eXBlXSxcbiAgICBzdHlsZTogKHtcbiAgICAgIHBhZGRpbmdUb3A6IF92bS5wYWRkaW5nSGVhZCxcbiAgICAgIHBhZGRpbmdCb3R0b206IF92bS5wYWRkaW5nSGVhZCxcbiAgICAgIHBhZGRpbmdMZWZ0OiBfdm0ucGFkZGluZ0hlYWQgKiAxLjUsXG4gICAgICBwYWRkaW5nUmlnaHQ6IF92bS5wYWRkaW5nSGVhZCAqIDEuNVxuICAgIH0pXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsncGFuZWwtYm9keScsICdwYW5lbC1ib2R5LScgKyBfdm0udHlwZV0sXG4gICAgc3R5bGU6ICh7XG4gICAgICBwYWRkaW5nVG9wOiBfdm0ucGFkZGluZ0JvZHksXG4gICAgICBwYWRkaW5nQm90dG9tOiBfdm0ucGFkZGluZ0JvZHksXG4gICAgICBwYWRkaW5nTGVmdDogX3ZtLnBhZGRpbmdCb2R5ICogMS41LFxuICAgICAgcGFkZGluZ1JpZ2h0OiBfdm0ucGFkZGluZ0JvZHkgKiAxLjVcbiAgICB9KVxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMWEzODEyNTJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTFhMzgxMjUyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvaW5jbHVkZS9wYW5lbC52dWVcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNiA3IDkgMTEgMzcgMzggMzkgNDAgNDEgNTYgNTcgNTggNTkgODMiLCI8dGVtcGxhdGU+XHJcbiAgPHNjcm9sbGVyPlxyXG4gICAgPHBhbmVsIHRpdGxlPVwiQmFzaWNcIiB0eXBlPVwicHJpbWFyeVwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgICAgd2lkdGg6IGZ1bGxXLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMzMzJyxcclxuICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgYm9yZGVyU3R5bGU6ICdzb2xpZCdcclxuICAgICAgICB9XCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgICAgICB3aWR0aDogdyxcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MCxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzMzMydcclxuICAgICAgICAgIH1cIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3BhbmVsPlxyXG4gIDwvc2Nyb2xsZXI+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIHZhciBJTkMgPSAyMDtcclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBmdWxsVzogNjAwLFxyXG4gICAgICAgIHc6IDQwXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIHBhbmVsOiByZXF1aXJlKCcuLi9pbmNsdWRlL3BhbmVsLnZ1ZScpXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBtZSA9IHRoaXM7XHJcbiAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAobWUudyA+PSBtZS5mdWxsVykge1xyXG4gICAgICAgICAgbWUudyA9IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgbWUudyA9IChtZS53ICsgSU5DID49IG1lLmZ1bGxXKSA/IG1lLmZ1bGxXIDogbWUudyArIElOQ1xyXG4gICAgICB9LCAzMyk7XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHByb2dyZXNzLnZ1ZT9hN2QxMjcyYyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnc2Nyb2xsZXInLCBbX2MoJ3BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiQmFzaWNcIixcbiAgICAgIFwidHlwZVwiOiBcInByaW1hcnlcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3R5bGU6ICh7XG4gICAgICB3aWR0aDogX3ZtLmZ1bGxXLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjMzMzJyxcbiAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgYm9yZGVyU3R5bGU6ICdzb2xpZCdcbiAgICB9KVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdHlsZTogKHtcbiAgICAgIHdpZHRoOiBfdm0udyxcbiAgICAgIGhlaWdodDogNjAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzMzJ1xuICAgIH0pXG4gIH0pXSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTk4ZDFlNTZlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi05OGQxZTU2ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3Nob3djYXNlL3Byb2dyZXNzLnZ1ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAxOTBcbi8vIG1vZHVsZSBjaHVua3MgPSA1NiJdLCJzb3VyY2VSb290IjoiIn0=