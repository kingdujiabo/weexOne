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
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter?id=data-v-74993c7a!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./goods.vue?entry=true\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(146),
	  /* template */
	  __webpack_require__(147),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\showcase\\include\\goods.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] goods.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-74993c7a", Component.options)
	  } else {
	    hotAPI.reload("data-v-74993c7a", Component.options)
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

/***/ 133:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(134),
	  /* template */
	  __webpack_require__(135),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\showcase\\include\\banner.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] banner.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-b73b38e2", Component.options)
	  } else {
	    hotAPI.reload("data-v-b73b38e2", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },

/***/ 134:
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//
	//
	
	var modal = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/modal\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	module.exports = {
	  props: ['width', 'height', 'src', 'href'],
	  data: function () {
	    return {
	      quality: 'normal'
	    };
	  },
	  methods: {
	    clickHandler: function () {
	      modal.toast({
	        message: 'click',
	        duration: 1
	      });
	    }
	  }
	};

/***/ },

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('image', {
	    style: ({
	      width: _vm.width,
	      height: _vm.height
	    }),
	    attrs: {
	      "src": _vm.src,
	      "image-quality": _vm.quality
	    },
	    on: {
	      "click": _vm.clickHandler
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-b73b38e2", module.exports)
	  }
	}

/***/ },

/***/ 146:
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
	
	module.exports = {
	  components: {
	    banner: __webpack_require__(133)
	  },
	  props: {
	    ds: {
	      default: function () {
	        return {};
	      }
	    }
	  },
	  data: function () {
	    return {
	      NUMBER_251: 251,
	      NUMBER_240: 240,
	      NUMBER_292: 292,
	      NUMBER_588: 588
	    };
	  }
	};

/***/ },

/***/ 147:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (!_vm.ds.isHide) ? _c('div', [(_vm.ds.floorTitle) ? _c('image', {
	    staticClass: "title",
	    attrs: {
	      "src": _vm.ds.floorTitle
	    }
	  }) : _vm._e(), _vm._v(" "), _c('slider', {
	    staticClass: "slider",
	    attrs: {
	      "show-indicators": "true",
	      "auto-play": "true",
	      "interval": "3000"
	    }
	  }, [_vm._l((_vm.ds.bannerItems), function(item) {
	    return _c('div', {
	      staticClass: "pannel"
	    }, [_c('div', [_c('banner', {
	      staticStyle: {
	        "margin-bottom": "4"
	      },
	      attrs: {
	        "width": _vm.NUMBER_251,
	        "height": _vm.NUMBER_292,
	        "src": item.img1,
	        "href": item.url1
	      }
	    }), _vm._v(" "), _c('banner', {
	      attrs: {
	        "width": _vm.NUMBER_251,
	        "height": _vm.NUMBER_292,
	        "src": item.img2,
	        "href": item.url2
	      }
	    })], 1), _vm._v(" "), _c('div', {
	      staticClass: "middle-col"
	    }, [_c('banner', {
	      attrs: {
	        "width": _vm.NUMBER_240,
	        "height": _vm.NUMBER_588,
	        "src": item.img3,
	        "href": item.url3
	      }
	    })], 1), _vm._v(" "), _c('div', [_c('banner', {
	      staticStyle: {
	        "margin-bottom": "4"
	      },
	      attrs: {
	        "width": _vm.NUMBER_251,
	        "height": _vm.NUMBER_292,
	        "src": item.img4,
	        "href": item.url4
	      }
	    }), _vm._v(" "), _c('banner', {
	      attrs: {
	        "width": _vm.NUMBER_251,
	        "height": _vm.NUMBER_292,
	        "src": item.img5,
	        "href": item.url5
	      }
	    })], 1)])
	  }), _vm._v(" "), _c('indicator', {
	    staticStyle: {
	      "position": "absolute",
	      "width": "714",
	      "height": "200",
	      "left": "10",
	      "bottom": "-80",
	      "itemSize": "20",
	      "itemColor": "#999999",
	      "itemSelectedColor": "#000000"
	    }
	  })], 2)], 1) : _vm._e()
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-74993c7a", module.exports)
	  }
	}

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQ/ZWQ2NCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9zaG93Y2FzZS9pbmNsdWRlL2dvb2RzLnZ1ZT83YjZjIiwid2VicGFjazovLy8uL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanM/ZDRmMyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9zaG93Y2FzZS9pbmNsdWRlL2Jhbm5lci52dWU/MTJlZSoqKiIsIndlYnBhY2s6Ly8vYmFubmVyLnZ1ZT8yZmE4KioqIiwid2VicGFjazovLy8uL3NyYy9zaG93Y2FzZS9pbmNsdWRlL2Jhbm5lci52dWU/NjE3YyoqKiIsIndlYnBhY2s6Ly8vZ29vZHMudnVlIiwid2VicGFjazovLy8uL3NyYy9zaG93Y2FzZS9pbmNsdWRlL2dvb2RzLnZ1ZT9hYWRkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNyQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG9DQUFtQzs7QUFFbkM7QUFDQSxhQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhEQUE2RDtBQUM3RDtBQUNBO0FBQ0Esb0NBQW1DO0FBQ25DLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBK0UsaURBQWlELElBQUk7QUFDcEksb0NBQW1DOztBQUVuQztBQUNBLGFBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO3FDQUVBO3FCQUNBOztnQkFHQTtBQUZBO0FBR0E7OytCQUVBOztrQkFFQTttQkFFQTtBQUhBO0FBS0E7QUFQQTtBQVBBLEc7Ozs7Ozs7QUNQQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMyQkE7O2lDQUlBO0FBRkE7Ozs0QkFLQTtnQkFDQTtBQUdBO0FBTEE7QUFEQTtxQkFPQTs7bUJBRUE7bUJBQ0E7bUJBQ0E7bUJBRUE7QUFMQTtBQU1BO0FBbEJBLEc7Ozs7Ozs7QUNqREEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJzaG93Y2FzZVxcaW5jbHVkZVxcZ29vZHMudnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTc0OTkzYzdhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vZ29vZHMudnVlP2VudHJ5PXRydWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZ29vZHMudnVlP2VudHJ5PXRydWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNzQ5OTNjN2EhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2dvb2RzLnZ1ZT9lbnRyeT10cnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFx3ZWVrU3R1ZHlcXFxcd2VleDJcXFxcd2VleDNcXFxcc3JjXFxcXHNob3djYXNlXFxcXGluY2x1ZGVcXFxcZ29vZHMudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZ29vZHMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTc0OTkzYzdhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzQ5OTNjN2FcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Nob3djYXNlL2luY2x1ZGUvZ29vZHMudnVlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSA0OCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgc2NvcGVJZCxcbiAgY3NzTW9kdWxlc1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgLy8gaW5qZWN0IGNzc01vZHVsZXNcbiAgaWYgKGNzc01vZHVsZXMpIHtcbiAgICB2YXIgY29tcHV0ZWQgPSBvcHRpb25zLmNvbXB1dGVkIHx8IChvcHRpb25zLmNvbXB1dGVkID0ge30pXG4gICAgT2JqZWN0LmtleXMoY3NzTW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbW9kdWxlID0gY3NzTW9kdWxlc1trZXldXG4gICAgICBjb21wdXRlZFtrZXldID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbW9kdWxlIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzcgMzggMzkgNDAgNDEgNDIgNDMgNDQgNDUgNDYgNDcgNDggNDkgNTAgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjAgNjEgNjIgNjMgNjQgNjUgNjYgNjcgNjggNjkgNzAgNzEgNzIgNzMgNzQgNzUgNzYgNzcgNzggNzkgODAgODEgODIgODMiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9iYW5uZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWI3M2IzOGUyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9iYW5uZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFx3ZWVrU3R1ZHlcXFxcd2VleDJcXFxcd2VleDNcXFxcc3JjXFxcXHNob3djYXNlXFxcXGluY2x1ZGVcXFxcYmFubmVyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGJhbm5lci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYjczYjM4ZTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1iNzNiMzhlMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hvd2Nhc2UvaW5jbHVkZS9iYW5uZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzNcbi8vIG1vZHVsZSBjaHVua3MgPSA0NCA0NSA0NiA0OCA0OSA1MSA1MiA1MyA1NSIsIjx0ZW1wbGF0ZT5cclxuICA8aW1hZ2UgOnN0eWxlPVwieyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH1cIiA6c3JjPVwic3JjXCIgOmltYWdlLXF1YWxpdHk9XCJxdWFsaXR5XCJcclxuICAgIEBjbGljaz1cImNsaWNrSGFuZGxlclwiPjwvaW1hZ2U+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbiAgdmFyIG1vZGFsID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL21vZGFsJylcclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHByb3BzOiBbJ3dpZHRoJywgJ2hlaWdodCcsICdzcmMnLCAnaHJlZiddLFxyXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHF1YWxpdHk6ICdub3JtYWwnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGNsaWNrSGFuZGxlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1vZGFsLnRvYXN0KHtcclxuICAgICAgICAgIG1lc3NhZ2U6ICdjbGljaycsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBiYW5uZXIudnVlPzZkZWFkNWZkIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdpbWFnZScsIHtcbiAgICBzdHlsZTogKHtcbiAgICAgIHdpZHRoOiBfdm0ud2lkdGgsXG4gICAgICBoZWlnaHQ6IF92bS5oZWlnaHRcbiAgICB9KSxcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogX3ZtLnNyYyxcbiAgICAgIFwiaW1hZ2UtcXVhbGl0eVwiOiBfdm0ucXVhbGl0eVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmNsaWNrSGFuZGxlclxuICAgIH1cbiAgfSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtYjczYjM4ZTJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWI3M2IzOGUyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvc2hvd2Nhc2UvaW5jbHVkZS9iYW5uZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzVcbi8vIG1vZHVsZSBjaHVua3MgPSA0NCA0NSA0NiA0OCA0OSA1MSA1MiA1MyA1NSIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IHYtaWY9XCIhZHMuaXNIaWRlXCI+XHJcbiAgICA8aW1hZ2Ugdi1pZj1cImRzLmZsb29yVGl0bGVcIiBjbGFzcz1cInRpdGxlXCIgOnNyYz1cImRzLmZsb29yVGl0bGVcIj48L2ltYWdlPlxyXG4gICAgPHNsaWRlciBjbGFzcz1cInNsaWRlclwiIHNob3ctaW5kaWNhdG9ycz1cInRydWVcIiBhdXRvLXBsYXk9XCJ0cnVlXCIgaW50ZXJ2YWw9XCIzMDAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwYW5uZWxcIiB2LWZvcj1cIml0ZW0gaW4gZHMuYmFubmVySXRlbXNcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJhbm5lciBzdHlsZT1cIm1hcmdpbi1ib3R0b206NFwiIDp3aWR0aD1cIk5VTUJFUl8yNTFcIiA6aGVpZ2h0PVwiTlVNQkVSXzI5MlwiIDpzcmM9XCJpdGVtLmltZzFcIiA6aHJlZj1cIml0ZW0udXJsMVwiPjwvYmFubmVyPlxyXG4gICAgICAgICAgPGJhbm5lciA6d2lkdGg9XCJOVU1CRVJfMjUxXCIgOmhlaWdodD1cIk5VTUJFUl8yOTJcIiA6c3JjPVwiaXRlbS5pbWcyXCIgOmhyZWY9XCJpdGVtLnVybDJcIj48L2Jhbm5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICBjbGFzcz1cIm1pZGRsZS1jb2xcIj5cclxuICAgICAgICAgIDxiYW5uZXIgOndpZHRoPVwiTlVNQkVSXzI0MFwiIDpoZWlnaHQ9XCJOVU1CRVJfNTg4XCIgOnNyYz1cIml0ZW0uaW1nM1wiIDpocmVmPVwiaXRlbS51cmwzXCI+PC9iYW5uZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxiYW5uZXIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjRcIiA6d2lkdGg9XCJOVU1CRVJfMjUxXCIgOmhlaWdodD1cIk5VTUJFUl8yOTJcIiA6c3JjPVwiaXRlbS5pbWc0XCIgOmhyZWY9XCJpdGVtLnVybDRcIj48L2Jhbm5lcj5cclxuICAgICAgICAgIDxiYW5uZXIgOndpZHRoPVwiTlVNQkVSXzI1MVwiIDpoZWlnaHQ9XCJOVU1CRVJfMjkyXCIgOnNyYz1cIml0ZW0uaW1nNVwiIDpocmVmPVwiaXRlbS51cmw1XCI+PC9iYW5uZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aW5kaWNhdG9yXHJcbiAgICAgICAgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDo3MTQ7aGVpZ2h0OjIwMDtsZWZ0OjEwO2JvdHRvbTotODA7aXRlbVNpemU6MjA7aXRlbUNvbG9yOiM5OTk5OTk7aXRlbVNlbGVjdGVkQ29sb3I6IzAwMDAwMDtcIj48L2luZGljYXRvcj5cclxuICAgIDwvc2xpZGVyPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlPlxyXG4gIC50aXRsZSB7XHJcbiAgICB3aWR0aDogNzUwO1xyXG4gICAgaGVpZ2h0OiAxMDA7XHJcbiAgfVxyXG5cclxuICAuc2xpZGVyIHtcclxuICAgIGhlaWdodDogNjUyO1xyXG4gIH1cclxuXHJcbiAgLnBhbm5lbCB7XHJcbiAgICB3aWR0aDogNzUwO1xyXG4gICAgaGVpZ2h0OiA1OTI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuXHJcbiAgLm1pZGRsZS1jb2wge1xyXG4gICAgbWFyZ2luLWxlZnQ6NDtcclxuICAgIG1hcmdpbi1yaWdodDo0O1xyXG4gICAgd2lkdGg6IDI0MDtcclxuICAgIGhlaWdodDogNTg4O1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIGJhbm5lcjogcmVxdWlyZSgnLi9iYW5uZXIudnVlJylcclxuICAgIH0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBkczoge1xyXG4gICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiB7fVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBOVU1CRVJfMjUxOiAyNTEsXHJcbiAgICAgICAgTlVNQkVSXzI0MDogMjQwLFxyXG4gICAgICAgIE5VTUJFUl8yOTI6IDI5MixcclxuICAgICAgICBOVU1CRVJfNTg4OiA1ODhcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBnb29kcy52dWU/MTFlYzE0ZWMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gKCFfdm0uZHMuaXNIaWRlKSA/IF9jKCdkaXYnLCBbKF92bS5kcy5mbG9vclRpdGxlKSA/IF9jKCdpbWFnZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uZHMuZmxvb3JUaXRsZVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NsaWRlcicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzbGlkZXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzaG93LWluZGljYXRvcnNcIjogXCJ0cnVlXCIsXG4gICAgICBcImF1dG8tcGxheVwiOiBcInRydWVcIixcbiAgICAgIFwiaW50ZXJ2YWxcIjogXCIzMDAwXCJcbiAgICB9XG4gIH0sIFtfdm0uX2woKF92bS5kcy5iYW5uZXJJdGVtcyksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInBhbm5lbFwiXG4gICAgfSwgW19jKCdkaXYnLCBbX2MoJ2Jhbm5lcicsIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwibWFyZ2luLWJvdHRvbVwiOiBcIjRcIlxuICAgICAgfSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwid2lkdGhcIjogX3ZtLk5VTUJFUl8yNTEsXG4gICAgICAgIFwiaGVpZ2h0XCI6IF92bS5OVU1CRVJfMjkyLFxuICAgICAgICBcInNyY1wiOiBpdGVtLmltZzEsXG4gICAgICAgIFwiaHJlZlwiOiBpdGVtLnVybDFcbiAgICAgIH1cbiAgICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2Jhbm5lcicsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwid2lkdGhcIjogX3ZtLk5VTUJFUl8yNTEsXG4gICAgICAgIFwiaGVpZ2h0XCI6IF92bS5OVU1CRVJfMjkyLFxuICAgICAgICBcInNyY1wiOiBpdGVtLmltZzIsXG4gICAgICAgIFwiaHJlZlwiOiBpdGVtLnVybDJcbiAgICAgIH1cbiAgICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWlkZGxlLWNvbFwiXG4gICAgfSwgW19jKCdiYW5uZXInLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcIndpZHRoXCI6IF92bS5OVU1CRVJfMjQwLFxuICAgICAgICBcImhlaWdodFwiOiBfdm0uTlVNQkVSXzU4OCxcbiAgICAgICAgXCJzcmNcIjogaXRlbS5pbWczLFxuICAgICAgICBcImhyZWZcIjogaXRlbS51cmwzXG4gICAgICB9XG4gICAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnYmFubmVyJywge1xuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJtYXJnaW4tYm90dG9tXCI6IFwiNFwiXG4gICAgICB9LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ3aWR0aFwiOiBfdm0uTlVNQkVSXzI1MSxcbiAgICAgICAgXCJoZWlnaHRcIjogX3ZtLk5VTUJFUl8yOTIsXG4gICAgICAgIFwic3JjXCI6IGl0ZW0uaW1nNCxcbiAgICAgICAgXCJocmVmXCI6IGl0ZW0udXJsNFxuICAgICAgfVxuICAgIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYmFubmVyJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ3aWR0aFwiOiBfdm0uTlVNQkVSXzI1MSxcbiAgICAgICAgXCJoZWlnaHRcIjogX3ZtLk5VTUJFUl8yOTIsXG4gICAgICAgIFwic3JjXCI6IGl0ZW0uaW1nNSxcbiAgICAgICAgXCJocmVmXCI6IGl0ZW0udXJsNVxuICAgICAgfVxuICAgIH0pXSwgMSldKVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2luZGljYXRvcicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgICBcIndpZHRoXCI6IFwiNzE0XCIsXG4gICAgICBcImhlaWdodFwiOiBcIjIwMFwiLFxuICAgICAgXCJsZWZ0XCI6IFwiMTBcIixcbiAgICAgIFwiYm90dG9tXCI6IFwiLTgwXCIsXG4gICAgICBcIml0ZW1TaXplXCI6IFwiMjBcIixcbiAgICAgIFwiaXRlbUNvbG9yXCI6IFwiIzk5OTk5OVwiLFxuICAgICAgXCJpdGVtU2VsZWN0ZWRDb2xvclwiOiBcIiMwMDAwMDBcIlxuICAgIH1cbiAgfSldLCAyKV0sIDEpIDogX3ZtLl9lKClcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNzQ5OTNjN2FcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTc0OTkzYzdhIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvc2hvd2Nhc2UvaW5jbHVkZS9nb29kcy52dWU/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gNDgiXSwic291cmNlUm9vdCI6IiJ9