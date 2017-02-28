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
	  __webpack_require__(126),
	  /* template */
	  __webpack_require__(127),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\modules\\stream.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] stream.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-a36c2e04", Component.options)
	  } else {
	    hotAPI.reload("data-v-a36c2e04", Component.options)
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

/***/ 126:
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
	
	var stream = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/stream\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	module.exports = {
	  data: function () {
	    return {
	      getJsonpResult: 'loading...',
	      getResult: 'loading...',
	      postResult: 'loading...',
	      putResult: 'loading...',
	      deleteResult: 'loading...',
	      headResult: 'loading...',
	      patchResult: 'loading...'
	    };
	  },
	  components: {
	    panel: __webpack_require__(3)
	  },
	  created: function () {
	    var me = this;
	    var GET_URL_JSONP = 'http://jsfiddle.net/echo/jsonp/?callback=anything&result=content_in_response';
	    var GET_URL = 'http://httpbin.org/get';
	    var POST_URL = 'http://httpbin.org/post';
	    var PUT_URL = 'http://httpbin.org/put';
	    var DELETE_URL = 'http://httpbin.org/delete';
	    var HEAD_URL = 'http://httpbin.org/status/418';
	    var PATCH_URL = 'http://httpbin.org/patch';
	
	    stream.fetch({
	      method: 'GET',
	      url: GET_URL_JSONP,
	      type: 'jsonp'
	    }, function (ret) {
	      if (!ret.ok) {
	        me.getJsonpResult = "request failed";
	      } else {
	        console.log('get:' + ret);
	        me.getJsonpResult = JSON.stringify(ret.data);
	      }
	    }, function (response) {
	      console.log('get jsonp in progress:' + response.length);
	      me.getJsonpResult = "bytes received:" + response.length;
	    });
	
	    stream.fetch({
	      method: 'GET',
	      url: GET_URL,
	      type: 'json'
	    }, function (ret) {
	      if (!ret.ok) {
	        me.getResult = "request failed";
	      } else {
	        console.log('get:' + ret);
	        me.getResult = JSON.stringify(ret.data);
	      }
	    }, function (response) {
	      console.log('get in progress:' + response.length);
	      me.getResult = "bytes received:" + response.length;
	    });
	
	    stream.fetch({
	      method: 'POST',
	      url: POST_URL,
	      type: 'json'
	    }, function (ret) {
	      if (!ret.ok) {
	        me.postResult = "request failed";
	      } else {
	        console.log('get:' + JSON.stringify(ret));
	        me.postResult = JSON.stringify(ret.data);
	      }
	    }, function (response) {
	      console.log('get in progress:' + response.length);
	      me.postResult = "bytes received:" + response.length;
	    });
	
	    stream.fetch({
	      method: 'PUT',
	      url: PUT_URL,
	      type: 'json'
	    }, function (ret) {
	      if (!ret.ok) {
	        me.putResult = "request failed";
	      } else {
	        console.log('get:' + JSON.stringify(ret));
	        me.putResult = JSON.stringify(ret.data);
	      }
	    }, function (response) {
	      console.log('get in progress:' + response.length);
	      me.putResult = "bytes received:" + response.length;
	    });
	
	    stream.fetch({
	      method: 'DELETE',
	      url: DELETE_URL,
	      type: 'json'
	    }, function (ret) {
	
	      if (!ret.ok) {
	        me.deleteResult = "request failed";
	      } else {
	        console.log('get:' + JSON.stringify(ret));
	        me.deleteResult = JSON.stringify(ret.data);
	      }
	    }, function (response) {
	      console.log('get in progress:' + response.length);
	      me.deleteResult = "bytes received:" + response.length;
	    });
	
	    stream.fetch({
	      method: 'HEAD',
	      url: HEAD_URL,
	      type: 'json'
	    }, function (ret) {
	      if (ret.statusText !== 'I\'m a teapot') {
	        me.headResult = "request failed";
	      } else {
	        console.log('get:' + JSON.stringify(ret));
	        me.headResult = ret.statusText;
	      }
	    }, function (response) {
	      console.log('get in progress:' + response.length);
	      me.headResult = "bytes received:" + response.length;
	    });
	
	    stream.fetch({
	      method: 'PATCH',
	      url: PATCH_URL,
	      type: 'json'
	    }, function (ret) {
	      if (!ret.ok) {
	        me.patchResult = "request failed";
	      } else {
	        console.log('get:' + JSON.stringify(ret));
	        me.patchResult = JSON.stringify(ret.data);
	      }
	    }, function (response) {
	      console.log('get in progress:' + response.length);
	      me.patchResult = "bytes received:" + response.length;
	    });
	  }
	};

/***/ },

/***/ 127:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', [_c('panel', {
	    attrs: {
	      "title": "stream.fetch",
	      "type": "primary"
	    }
	  }, [_c('panel', {
	    attrs: {
	      "title": "method = GET"
	    }
	  }, [_c('text', [_vm._v(_vm._s(_vm.getResult))])]), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "method = GET / type = jsonp"
	    }
	  }, [_c('text', [_vm._v(_vm._s(_vm.getJsonpResult))])]), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "method = POST"
	    }
	  }, [_c('text', [_vm._v(_vm._s(_vm.postResult))])]), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "method = PUT"
	    }
	  }, [_c('text', [_vm._v(_vm._s(_vm.putResult))])]), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "method = DELETE"
	    }
	  }, [_c('text', [_vm._v(_vm._s(_vm.deleteResult))])]), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "method = HEAD"
	    }
	  }, [_c('text', [_vm._v(_vm._s(_vm.headResult))])]), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "method = PATCH"
	    }
	  }, [_c('text', [_vm._v(_vm._s(_vm.patchResult))])])], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-a36c2e04", module.exports)
	  }
	}

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQ/ZWQ2NCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3N0cmVhbS52dWUiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcz9kNGYzKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvcGFuZWwudnVlPzRlYzYqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vL3BhbmVsLnZ1ZT81YmFkKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9wYW5lbC52dWU/ZDliOCoqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vL3N0cmVhbS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvc3RyZWFtLnZ1ZT8wMjhjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG9DQUFtQzs7QUFFbkM7QUFDQSxhQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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anMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2ZGI5YzAwODlmNmQzODhiNGI0ZCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3N0cmVhbS52dWU/ZW50cnk9dHJ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1hMzZjMmUwNCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3RyZWFtLnZ1ZT9lbnRyeT10cnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFx3ZWVrU3R1ZHlcXFxcd2VleDJcXFxcd2VleDNcXFxcc3JjXFxcXG1vZHVsZXNcXFxcc3RyZWFtLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHN0cmVhbS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYTM2YzJlMDRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1hMzZjMmUwNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9zdHJlYW0udnVlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSA0MSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgc2NvcGVJZCxcbiAgY3NzTW9kdWxlc1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgLy8gaW5qZWN0IGNzc01vZHVsZXNcbiAgaWYgKGNzc01vZHVsZXMpIHtcbiAgICB2YXIgY29tcHV0ZWQgPSBvcHRpb25zLmNvbXB1dGVkIHx8IChvcHRpb25zLmNvbXB1dGVkID0ge30pXG4gICAgT2JqZWN0LmtleXMoY3NzTW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbW9kdWxlID0gY3NzTW9kdWxlc1trZXldXG4gICAgICBjb21wdXRlZFtrZXldID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbW9kdWxlIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzcgMzggMzkgNDAgNDEgNDIgNDMgNDQgNDUgNDYgNDcgNDggNDkgNTAgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjAgNjEgNjIgNjMgNjQgNjUgNjYgNjcgNjggNjkgNzAgNzEgNzIgNzMgNzQgNzUgNzYgNzcgNzggNzkgODAgODEgODIgODMiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTFhMzgxMjUyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFuZWwudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3BhbmVsLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0xYTM4MTI1MiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcGFuZWwudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFx3ZWVrU3R1ZHlcXFxcd2VleDJcXFxcd2VleDNcXFxcc3JjXFxcXGluY2x1ZGVcXFxccGFuZWwudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcGFuZWwudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTFhMzgxMjUyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMWEzODEyNTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luY2x1ZGUvcGFuZWwudnVlXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDYgNyA5IDExIDM3IDM4IDM5IDQwIDQxIDU2IDU3IDU4IDU5IDgzIiwiPCEtLSBJbnNwaXJlZCBieSBib290c3RyYXAgaHR0cDovL2dldGJvb3RzdHJhcC5jb20vIC0tPlxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdlxyXG4gICAgOmNsYXNzPVwiWydwYW5lbCcsICdwYW5lbC0nICsgdHlwZV1cIlxyXG4gICAgOnN0eWxlPVwieyBib3JkZXJXaWR0aDogYm9yZGVyIH1cIj5cclxuICAgIDx0ZXh0XHJcbiAgICAgIDpjbGFzcz1cIlsncGFuZWwtaGVhZGVyJywgJ3BhbmVsLWhlYWRlci0nICsgdHlwZV1cIlxyXG4gICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgcGFkZGluZ1RvcDogcGFkZGluZ0hlYWQsXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogcGFkZGluZ0hlYWQsXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHBhZGRpbmdIZWFkKjEuNSxcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmdIZWFkKjEuNVxyXG4gICAgICB9XCI+e3t0aXRsZX19PC90ZXh0PlxyXG4gICAgPGRpdlxyXG4gICAgICA6Y2xhc3M9XCJbJ3BhbmVsLWJvZHknLCAncGFuZWwtYm9keS0nICsgdHlwZV1cIlxyXG4gICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgcGFkZGluZ1RvcDogcGFkZGluZ0JvZHksXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogcGFkZGluZ0JvZHksXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHBhZGRpbmdCb2R5KjEuNSxcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmdCb2R5KjEuNVxyXG4gICAgICB9XCI+XHJcbiAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHR5cGU6IHsgZGVmYXVsdDogJ2RlZmF1bHQnIH0sXHJcbiAgICAgIHRpdGxlOiB7IGRlZmF1bHQ6ICcnIH0sXHJcbiAgICAgIHBhZGRpbmdCb2R5OiB7IGRlZmF1bHQ6IDIwIH0sXHJcbiAgICAgIHBhZGRpbmdIZWFkOiB7IGRlZmF1bHQ6IDIwIH0sXHJcbiAgICAgIGRhdGFDbGFzczogeyBkZWZhdWx0OiAnJyB9LCAvLyBGSVhNRSB0cmFuc2ZlciBjbGFzc1xyXG4gICAgICBib3JkZXI6eyBkZWZhdWx0OiAwIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gIC5wYW5lbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7Ki9cclxuICAgIC8qYm9yZGVyLXJhZGl1czogMTBweDsqL1xyXG4gICAgLyotd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSk7Ki9cclxuICAgIC8qYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA1KTsqL1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkZGRkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtZGVmYXVsdCB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtcHJpbWFyeSB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtc3VjY2VzcyB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig3NiwgMTc0LCA3Nik7XHJcblxyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWluZm8ge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNzAsIDE4NCwgMjE4KTtcclxuXHJcbiAgfVxyXG5cclxuICAucGFuZWwtd2FybmluZyB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzgsIDE2MiwgNTQpO1xyXG5cclxuICB9XHJcblxyXG4gIC5wYW5lbC1kYW5nZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjEyLCA2MywgNTgpO1xyXG5cclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIC8qcGFkZGluZy1sZWZ0OiAxMnB4OyovXHJcbiAgICAvKnBhZGRpbmctcmlnaHQ6IDEycHg7Ki9cclxuICAgIC8qcGFkZGluZy10b3A6IDIwcHg7Ki9cclxuICAgIC8qcGFkZGluZy1ib3R0b206IDIwcHg7Ki9cclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlci1kZWZhdWx0IHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXItcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDk2LCAxNDQpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyLXN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCAxODQsIDkyKTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlci1pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MSwgMTkyLCAyMjIpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyLXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTczLCA3OCk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXItZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTcsIDgzLCA3OSk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5IHtcclxuICAgIC8qcGFkZGluZy1sZWZ0OiAxMnB4OyovXHJcbiAgICAvKnBhZGRpbmctcmlnaHQ6IDEycHg7Ki9cclxuICAgIC8qcGFkZGluZy10b3A6IDIwcHg7Ki9cclxuICAgIC8qcGFkZGluZy1ib3R0b206IDIwcHg7Ki9cclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5LWRlZmF1bHQge1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHktcHJpbWFyeSB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtYm9keS1zdWNjZXNzIHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5LWluZm8ge1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHktd2FybmluZyB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtYm9keS1kYW5nZXIge1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHBhbmVsLnZ1ZT80N2MyM2U0NiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIGNsYXNzOiBbJ3BhbmVsJywgJ3BhbmVsLScgKyBfdm0udHlwZV0sXG4gICAgc3R5bGU6ICh7XG4gICAgICBib3JkZXJXaWR0aDogX3ZtLmJvcmRlclxuICAgIH0pXG4gIH0sIFtfYygndGV4dCcsIHtcbiAgICBjbGFzczogWydwYW5lbC1oZWFkZXInLCAncGFuZWwtaGVhZGVyLScgKyBfdm0udHlwZV0sXG4gICAgc3R5bGU6ICh7XG4gICAgICBwYWRkaW5nVG9wOiBfdm0ucGFkZGluZ0hlYWQsXG4gICAgICBwYWRkaW5nQm90dG9tOiBfdm0ucGFkZGluZ0hlYWQsXG4gICAgICBwYWRkaW5nTGVmdDogX3ZtLnBhZGRpbmdIZWFkICogMS41LFxuICAgICAgcGFkZGluZ1JpZ2h0OiBfdm0ucGFkZGluZ0hlYWQgKiAxLjVcbiAgICB9KVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiBbJ3BhbmVsLWJvZHknLCAncGFuZWwtYm9keS0nICsgX3ZtLnR5cGVdLFxuICAgIHN0eWxlOiAoe1xuICAgICAgcGFkZGluZ1RvcDogX3ZtLnBhZGRpbmdCb2R5LFxuICAgICAgcGFkZGluZ0JvdHRvbTogX3ZtLnBhZGRpbmdCb2R5LFxuICAgICAgcGFkZGluZ0xlZnQ6IF92bS5wYWRkaW5nQm9keSAqIDEuNSxcbiAgICAgIHBhZGRpbmdSaWdodDogX3ZtLnBhZGRpbmdCb2R5ICogMS41XG4gICAgfSlcbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTFhMzgxMjUyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0xYTM4MTI1MiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2luY2x1ZGUvcGFuZWwudnVlXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDYgNyA5IDExIDM3IDM4IDM5IDQwIDQxIDU2IDU3IDU4IDU5IDgzIiwiPHRlbXBsYXRlPlxyXG4gIDxzY3JvbGxlcj5cclxuICAgIDxwYW5lbCB0aXRsZT1cInN0cmVhbS5mZXRjaFwiIHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgIDxwYW5lbCB0aXRsZT1cIm1ldGhvZCA9IEdFVFwiPlxyXG4gICAgICAgIDx0ZXh0Pnt7Z2V0UmVzdWx0fX08L3RleHQ+XHJcbiAgICAgIDwvcGFuZWw+XHJcbiAgICAgIDxwYW5lbCB0aXRsZT1cIm1ldGhvZCA9IEdFVCAvIHR5cGUgPSBqc29ucFwiPlxyXG4gICAgICAgIDx0ZXh0Pnt7Z2V0SnNvbnBSZXN1bHR9fTwvdGV4dD5cclxuICAgICAgPC9wYW5lbD5cclxuICAgICAgPHBhbmVsIHRpdGxlPVwibWV0aG9kID0gUE9TVFwiPlxyXG4gICAgICAgIDx0ZXh0Pnt7cG9zdFJlc3VsdH19PC90ZXh0PlxyXG4gICAgICA8L3BhbmVsPlxyXG4gICAgICA8cGFuZWwgdGl0bGU9XCJtZXRob2QgPSBQVVRcIj5cclxuICAgICAgICA8dGV4dD57e3B1dFJlc3VsdH19PC90ZXh0PlxyXG4gICAgICA8L3BhbmVsPlxyXG4gICAgICA8cGFuZWwgdGl0bGU9XCJtZXRob2QgPSBERUxFVEVcIj5cclxuICAgICAgICA8dGV4dD57e2RlbGV0ZVJlc3VsdH19PC90ZXh0PlxyXG4gICAgICA8L3BhbmVsPlxyXG4gICAgICA8cGFuZWwgdGl0bGU9XCJtZXRob2QgPSBIRUFEXCI+XHJcbiAgICAgICAgPHRleHQ+e3toZWFkUmVzdWx0fX08L3RleHQ+XHJcbiAgICAgIDwvcGFuZWw+XHJcbiAgICAgIDxwYW5lbCB0aXRsZT1cIm1ldGhvZCA9IFBBVENIXCI+XHJcbiAgICAgICAgPHRleHQ+e3twYXRjaFJlc3VsdH19PC90ZXh0PlxyXG4gICAgICA8L3BhbmVsPlxyXG4gICAgPC93eGMtcGFuZWw+XHJcbiAgPC9zY3JvbGxlcj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgdmFyIHN0cmVhbSA9IHJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9zdHJlYW0nKTtcclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRKc29ucFJlc3VsdDogJ2xvYWRpbmcuLi4nLFxyXG4gICAgICAgIGdldFJlc3VsdDogJ2xvYWRpbmcuLi4nLFxyXG4gICAgICAgIHBvc3RSZXN1bHQ6ICdsb2FkaW5nLi4uJyxcclxuICAgICAgICBwdXRSZXN1bHQ6ICdsb2FkaW5nLi4uJyxcclxuICAgICAgICBkZWxldGVSZXN1bHQ6ICdsb2FkaW5nLi4uJyxcclxuICAgICAgICBoZWFkUmVzdWx0OiAnbG9hZGluZy4uLicsXHJcbiAgICAgICAgcGF0Y2hSZXN1bHQ6ICdsb2FkaW5nLi4uJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBwYW5lbDogcmVxdWlyZSgnLi4vaW5jbHVkZS9wYW5lbC52dWUnKVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgbWUgPSB0aGlzO1xyXG4gICAgICB2YXIgR0VUX1VSTF9KU09OUCA9ICdodHRwOi8vanNmaWRkbGUubmV0L2VjaG8vanNvbnAvP2NhbGxiYWNrPWFueXRoaW5nJnJlc3VsdD1jb250ZW50X2luX3Jlc3BvbnNlJztcclxuICAgICAgdmFyIEdFVF9VUkwgPSAnaHR0cDovL2h0dHBiaW4ub3JnL2dldCc7XHJcbiAgICAgIHZhciBQT1NUX1VSTCA9ICdodHRwOi8vaHR0cGJpbi5vcmcvcG9zdCc7XHJcbiAgICAgIHZhciBQVVRfVVJMID0gJ2h0dHA6Ly9odHRwYmluLm9yZy9wdXQnO1xyXG4gICAgICB2YXIgREVMRVRFX1VSTCA9ICdodHRwOi8vaHR0cGJpbi5vcmcvZGVsZXRlJztcclxuICAgICAgdmFyIEhFQURfVVJMID0gJ2h0dHA6Ly9odHRwYmluLm9yZy9zdGF0dXMvNDE4JztcclxuICAgICAgdmFyIFBBVENIX1VSTCA9ICdodHRwOi8vaHR0cGJpbi5vcmcvcGF0Y2gnO1xyXG5cclxuICAgICAgc3RyZWFtLmZldGNoKHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIHVybDogR0VUX1VSTF9KU09OUCxcclxuICAgICAgICB0eXBlOidqc29ucCdcclxuICAgICAgfSwgZnVuY3Rpb24ocmV0KSB7XHJcbiAgICAgICAgaWYoIXJldC5vayl7XHJcbiAgICAgICAgICBtZS5nZXRKc29ucFJlc3VsdCA9IFwicmVxdWVzdCBmYWlsZWRcIjtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXQ6JytyZXQpO1xyXG4gICAgICAgICAgbWUuZ2V0SnNvbnBSZXN1bHQgPSAgSlNPTi5zdHJpbmdpZnkocmV0LmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxmdW5jdGlvbihyZXNwb25zZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBqc29ucCBpbiBwcm9ncmVzczonK3Jlc3BvbnNlLmxlbmd0aCk7XHJcbiAgICAgICAgbWUuZ2V0SnNvbnBSZXN1bHQgPSBcImJ5dGVzIHJlY2VpdmVkOlwiK3Jlc3BvbnNlLmxlbmd0aDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzdHJlYW0uZmV0Y2goe1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgdXJsOiBHRVRfVVJMLFxyXG4gICAgICAgIHR5cGU6J2pzb24nXHJcbiAgICAgIH0sIGZ1bmN0aW9uKHJldCkge1xyXG4gICAgICAgIGlmKCFyZXQub2spe1xyXG4gICAgICAgICAgbWUuZ2V0UmVzdWx0ID0gXCJyZXF1ZXN0IGZhaWxlZFwiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2dldDonK3JldCk7XHJcbiAgICAgICAgICBtZS5nZXRSZXN1bHQgPSBKU09OLnN0cmluZ2lmeShyZXQuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGluIHByb2dyZXNzOicrcmVzcG9uc2UubGVuZ3RoKTtcclxuICAgICAgICBtZS5nZXRSZXN1bHQgPSBcImJ5dGVzIHJlY2VpdmVkOlwiK3Jlc3BvbnNlLmxlbmd0aDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzdHJlYW0uZmV0Y2goe1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUE9TVF9VUkwsXHJcbiAgICAgICAgdHlwZTonanNvbidcclxuICAgICAgfSwgZnVuY3Rpb24ocmV0KSB7XHJcbiAgICAgICAgaWYoIXJldC5vayl7XHJcbiAgICAgICAgICBtZS5wb3N0UmVzdWx0ID0gXCJyZXF1ZXN0IGZhaWxlZFwiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2dldDonK0pTT04uc3RyaW5naWZ5KHJldCkpO1xyXG4gICAgICAgICAgbWUucG9zdFJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHJldC5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgaW4gcHJvZ3Jlc3M6JytyZXNwb25zZS5sZW5ndGgpO1xyXG4gICAgICAgIG1lLnBvc3RSZXN1bHQgPSBcImJ5dGVzIHJlY2VpdmVkOlwiK3Jlc3BvbnNlLmxlbmd0aDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzdHJlYW0uZmV0Y2goe1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgdXJsOiBQVVRfVVJMLFxyXG4gICAgICAgIHR5cGU6J2pzb24nXHJcbiAgICAgIH0sIGZ1bmN0aW9uKHJldCkge1xyXG4gICAgICAgIGlmKCFyZXQub2spe1xyXG4gICAgICAgICAgbWUucHV0UmVzdWx0ID0gXCJyZXF1ZXN0IGZhaWxlZFwiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2dldDonK0pTT04uc3RyaW5naWZ5KHJldCkpO1xyXG4gICAgICAgICAgbWUucHV0UmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkocmV0LmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxmdW5jdGlvbihyZXNwb25zZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBpbiBwcm9ncmVzczonK3Jlc3BvbnNlLmxlbmd0aCk7XHJcbiAgICAgICAgbWUucHV0UmVzdWx0ID0gXCJieXRlcyByZWNlaXZlZDpcIityZXNwb25zZS5sZW5ndGg7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc3RyZWFtLmZldGNoKHtcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIHVybDogREVMRVRFX1VSTCxcclxuICAgICAgICB0eXBlOidqc29uJ1xyXG4gICAgICB9LCBmdW5jdGlvbihyZXQpIHtcclxuXHJcbiAgICAgICAgaWYoIXJldC5vayl7XHJcbiAgICAgICAgICBtZS5kZWxldGVSZXN1bHQgPSBcInJlcXVlc3QgZmFpbGVkXCI7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0OicrSlNPTi5zdHJpbmdpZnkocmV0KSk7XHJcbiAgICAgICAgICBtZS5kZWxldGVSZXN1bHQgPSBKU09OLnN0cmluZ2lmeShyZXQuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGluIHByb2dyZXNzOicrcmVzcG9uc2UubGVuZ3RoKTtcclxuICAgICAgICBtZS5kZWxldGVSZXN1bHQgPSBcImJ5dGVzIHJlY2VpdmVkOlwiK3Jlc3BvbnNlLmxlbmd0aDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzdHJlYW0uZmV0Y2goe1xyXG4gICAgICAgIG1ldGhvZDogJ0hFQUQnLFxyXG4gICAgICAgIHVybDogSEVBRF9VUkwsXHJcbiAgICAgICAgdHlwZTonanNvbidcclxuICAgICAgfSwgZnVuY3Rpb24ocmV0KSB7XHJcbiAgICAgICAgaWYocmV0LnN0YXR1c1RleHQgIT09ICdJXFwnbSBhIHRlYXBvdCcpe1xyXG4gICAgICAgICAgbWUuaGVhZFJlc3VsdCA9IFwicmVxdWVzdCBmYWlsZWRcIjtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXQ6JytKU09OLnN0cmluZ2lmeShyZXQpKTtcclxuICAgICAgICAgIG1lLmhlYWRSZXN1bHQgPSByZXQuc3RhdHVzVGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgIH0sZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgaW4gcHJvZ3Jlc3M6JytyZXNwb25zZS5sZW5ndGgpO1xyXG4gICAgICAgIG1lLmhlYWRSZXN1bHQgPSBcImJ5dGVzIHJlY2VpdmVkOlwiK3Jlc3BvbnNlLmxlbmd0aDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzdHJlYW0uZmV0Y2goe1xyXG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICB1cmw6IFBBVENIX1VSTCxcclxuICAgICAgICB0eXBlOidqc29uJ1xyXG4gICAgICB9LCBmdW5jdGlvbihyZXQpIHtcclxuICAgICAgICBpZighcmV0Lm9rKXtcclxuICAgICAgICAgIG1lLnBhdGNoUmVzdWx0ID0gXCJyZXF1ZXN0IGZhaWxlZFwiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2dldDonK0pTT04uc3RyaW5naWZ5KHJldCkpO1xyXG4gICAgICAgICAgbWUucGF0Y2hSZXN1bHQgPSBKU09OLnN0cmluZ2lmeShyZXQuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGluIHByb2dyZXNzOicrcmVzcG9uc2UubGVuZ3RoKTtcclxuICAgICAgICBtZS5wYXRjaFJlc3VsdCA9IFwiYnl0ZXMgcmVjZWl2ZWQ6XCIrcmVzcG9uc2UubGVuZ3RoO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHN0cmVhbS52dWU/NTNjMWJjYzkiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3Njcm9sbGVyJywgW19jKCdwYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcInN0cmVhbS5mZXRjaFwiLFxuICAgICAgXCJ0eXBlXCI6IFwicHJpbWFyeVwiXG4gICAgfVxuICB9LCBbX2MoJ3BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwibWV0aG9kID0gR0VUXCJcbiAgICB9XG4gIH0sIFtfYygndGV4dCcsIFtfdm0uX3YoX3ZtLl9zKF92bS5nZXRSZXN1bHQpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdwYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIm1ldGhvZCA9IEdFVCAvIHR5cGUgPSBqc29ucFwiXG4gICAgfVxuICB9LCBbX2MoJ3RleHQnLCBbX3ZtLl92KF92bS5fcyhfdm0uZ2V0SnNvbnBSZXN1bHQpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdwYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIm1ldGhvZCA9IFBPU1RcIlxuICAgIH1cbiAgfSwgW19jKCd0ZXh0JywgW192bS5fdihfdm0uX3MoX3ZtLnBvc3RSZXN1bHQpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdwYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIm1ldGhvZCA9IFBVVFwiXG4gICAgfVxuICB9LCBbX2MoJ3RleHQnLCBbX3ZtLl92KF92bS5fcyhfdm0ucHV0UmVzdWx0KSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJtZXRob2QgPSBERUxFVEVcIlxuICAgIH1cbiAgfSwgW19jKCd0ZXh0JywgW192bS5fdihfdm0uX3MoX3ZtLmRlbGV0ZVJlc3VsdCkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwibWV0aG9kID0gSEVBRFwiXG4gICAgfVxuICB9LCBbX2MoJ3RleHQnLCBbX3ZtLl92KF92bS5fcyhfdm0uaGVhZFJlc3VsdCkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwibWV0aG9kID0gUEFUQ0hcIlxuICAgIH1cbiAgfSwgW19jKCd0ZXh0JywgW192bS5fdihfdm0uX3MoX3ZtLnBhdGNoUmVzdWx0KSldKV0pXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1hMzZjMmUwNFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtYTM2YzJlMDQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9tb2R1bGVzL3N0cmVhbS52dWU/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gNDEiXSwic291cmNlUm9vdCI6IiJ9