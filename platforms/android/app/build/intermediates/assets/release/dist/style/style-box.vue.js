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
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-rewriter?id=data-v-4349af4b!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./style-box.vue?entry=true\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(202),
	  /* template */
	  __webpack_require__(203),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\style\\style-box.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] style-box.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4349af4b", Component.options)
	  } else {
	    hotAPI.reload("data-v-4349af4b", Component.options)
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

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-rewriter?id=data-v-2f02c67a!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./style-item.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(195),
	  /* template */
	  __webpack_require__(196),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\style\\style-item.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] style-item.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2f02c67a", Component.options)
	  } else {
	    hotAPI.reload("data-v-2f02c67a", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },

/***/ 195:
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
	    value: { default: '' },
	    type: { default: '0' } // 0, 1
	  },
	  computed: {
	    bgColor: function () {
	      return this.type == '1' ? '#7BA3A8' : '#BEAD92';
	    }
	  }
	};

/***/ },

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('text', {
	    staticClass: "item txt",
	    style: ({
	      backgroundColor: _vm.bgColor
	    }),
	    attrs: {
	      "value": _vm.value
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2f02c67a", module.exports)
	  }
	}

/***/ },

/***/ 202:
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
	
	module.exports = {
	  components: {
	    panel: __webpack_require__(3),
	    tip: __webpack_require__(11),
	    styleItem: __webpack_require__(194)
	  }
	};

/***/ },

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('panel', {
	    attrs: {
	      "title": "Box Model",
	      "padding-body": "0",
	      "type": "primary"
	    }
	  }, [_c('text', {
	    staticClass: "box"
	  }, [_vm._v("Box")])]), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "border",
	      "type": "primary"
	    }
	  }, [_c('panel', {
	    attrs: {
	      "title": "border-width",
	      "type": ""
	    }
	  }, [_c('div', {
	    staticStyle: {
	      "flex-direction": "row"
	    }
	  }, [_c('style-item', {
	    staticStyle: {
	      "border-style": "solid",
	      "border-width": "2px",
	      "border-color": "#333"
	    },
	    attrs: {
	      "value": ""
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "border-style": "solid",
	      "border-width": "10px",
	      "border-color": "#333"
	    },
	    attrs: {
	      "value": ""
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "border-style": "solid",
	      "border-left-width": "4px",
	      "border-color": "#333"
	    },
	    attrs: {
	      "value": ""
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "border-style": "solid",
	      "border-bottom-width": "4px",
	      "border-color": "#333"
	    },
	    attrs: {
	      "value": ""
	    }
	  })], 1)]), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "border-color",
	      "type": ""
	    }
	  }, [_c('div', {
	    staticStyle: {
	      "flex-direction": "row"
	    }
	  }, [_c('style-item', {
	    staticStyle: {
	      "border-style": "solid",
	      "border-width": "4px",
	      "border-color": "#333"
	    },
	    attrs: {
	      "value": ""
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "border-style": "solid",
	      "border-width": "4px",
	      "border-color": "#ddd"
	    },
	    attrs: {
	      "value": ""
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "border-style": "solid",
	      "border-width": "4px",
	      "border-color": "red"
	    },
	    attrs: {
	      "value": ""
	    }
	  })], 1)]), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "border-style",
	      "type": ""
	    }
	  }, [_c('tip', {
	    staticStyle: {
	      "margin-bottom": "10px"
	    },
	    attrs: {
	      "type": "warning",
	      "value": "just support four edges"
	    }
	  }), _vm._v(" "), _c('div', {
	    staticStyle: {
	      "flex-direction": "row"
	    }
	  }, [_c('style-item', {
	    staticStyle: {
	      "border-style": "solid",
	      "border-width": "4px",
	      "border-color": "#333"
	    },
	    attrs: {
	      "value": ""
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "border-style": "dashed",
	      "border-width": "4px",
	      "border-color": "#333"
	    },
	    attrs: {
	      "value": "",
	      "type": ""
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "border-style": "dotted",
	      "border-width": "4px",
	      "border-color": "#333"
	    },
	    attrs: {
	      "value": ""
	    }
	  })], 1)], 1), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "border-radius",
	      "type": ""
	    }
	  }, [_c('div', {
	    staticStyle: {
	      "flex-direction": "row"
	    }
	  }, [_c('style-item', {
	    staticStyle: {
	      "width": "75px",
	      "border-radius": "38px"
	    },
	    attrs: {
	      "value": ""
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "border-radius": "20px"
	    },
	    attrs: {
	      "value": ""
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "border-top-left-radius": "20px",
	      "border-top-right-radius": "20px"
	    },
	    attrs: {
	      "value": ""
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "border-bottom-left-radius": "20px",
	      "border-bottom-right-radius": "20px"
	    },
	    attrs: {
	      "value": ""
	    }
	  })], 1)])], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-4349af4b", module.exports)
	  }
	}

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQ/ZWQ2NCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvc3R5bGUtYm94LnZ1ZT82MzFjIiwid2VicGFjazovLy8uL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanM/ZDRmMyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9wYW5lbC52dWU/NGVjNioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vcGFuZWwudnVlPzViYWQqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3BhbmVsLnZ1ZT9kOWI4KioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS90aXAudnVlPzY3NDQqKioiLCJ3ZWJwYWNrOi8vL3RpcC52dWU/NzBhNCoqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvdGlwLnZ1ZT83ZjRlKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvc3R5bGUtaXRlbS52dWU/MjI2MyIsIndlYnBhY2s6Ly8vc3R5bGUtaXRlbS52dWU/N2Y4NiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvc3R5bGUtaXRlbS52dWU/Y2JjYyoiLCJ3ZWJwYWNrOi8vL3N0eWxlLWJveC52dWU/NjdkYiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvc3R5bGUtYm94LnZ1ZT8xNzI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNyQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG9DQUFtQzs7QUFFbkM7QUFDQSxhQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhEQUE2RDtBQUM3RDtBQUNBO0FBQ0Esb0NBQW1DO0FBQ25DLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzdDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBK0UsaURBQWlELElBQUk7QUFDcEksb0NBQW1DOztBQUVuQztBQUNBLGFBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7c0JBR0E7dUJBQ0E7NkJBQ0E7NkJBQ0E7aUNBQ0E7d0JBRUE7QUFQQTtBQURBLEc7Ozs7Ozs7QUM1QkEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7OztBQzdCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBK0UsaURBQWlELElBQUk7QUFDcEksb0NBQW1DOztBQUVuQztBQUNBLGFBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTs7c0JBR0E7dUJBRUE7QUFIQTtBQURBLEc7Ozs7Ozs7QUNUQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7O0FDWkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG9DQUFtQzs7QUFFbkM7QUFDQSxhQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7O3VCQUdBOzRCQUVBO0FBSEE7OzBCQUtBOzZDQUNBO0FBRUE7QUFKQTtBQUxBLEc7Ozs7Ozs7QUNUQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNkNBOztnQ0FHQTs4QkFDQTtvQ0FFQTtBQUpBO0FBREEsRzs7Ozs7OztBQy9EQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJzdHlsZVxcc3R5bGUtYm94LnZ1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZkYjljMDA4OWY2ZDM4OGI0YjRkIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi00MzQ5YWY0YiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3N0eWxlLWJveC52dWU/ZW50cnk9dHJ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zdHlsZS1ib3gudnVlP2VudHJ5PXRydWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNDM0OWFmNGIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3N0eWxlLWJveC52dWU/ZW50cnk9dHJ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTpcXFxcd2Vla1N0dWR5XFxcXHdlZXgyXFxcXHdlZXgzXFxcXHNyY1xcXFxzdHlsZVxcXFxzdHlsZS1ib3gudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gc3R5bGUtYm94LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00MzQ5YWY0YlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQzNDlhZjRiXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZS9zdHlsZS1ib3gudnVlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSA1OCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgc2NvcGVJZCxcbiAgY3NzTW9kdWxlc1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgLy8gaW5qZWN0IGNzc01vZHVsZXNcbiAgaWYgKGNzc01vZHVsZXMpIHtcbiAgICB2YXIgY29tcHV0ZWQgPSBvcHRpb25zLmNvbXB1dGVkIHx8IChvcHRpb25zLmNvbXB1dGVkID0ge30pXG4gICAgT2JqZWN0LmtleXMoY3NzTW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbW9kdWxlID0gY3NzTW9kdWxlc1trZXldXG4gICAgICBjb21wdXRlZFtrZXldID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbW9kdWxlIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzcgMzggMzkgNDAgNDEgNDIgNDMgNDQgNDUgNDYgNDcgNDggNDkgNTAgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjAgNjEgNjIgNjMgNjQgNjUgNjYgNjcgNjggNjkgNzAgNzEgNzIgNzMgNzQgNzUgNzYgNzcgNzggNzkgODAgODEgODIgODMiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTFhMzgxMjUyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFuZWwudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3BhbmVsLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0xYTM4MTI1MiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcGFuZWwudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFx3ZWVrU3R1ZHlcXFxcd2VleDJcXFxcd2VleDNcXFxcc3JjXFxcXGluY2x1ZGVcXFxccGFuZWwudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcGFuZWwudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTFhMzgxMjUyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMWEzODEyNTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luY2x1ZGUvcGFuZWwudnVlXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDYgNyA5IDExIDM3IDM4IDM5IDQwIDQxIDU2IDU3IDU4IDU5IDgzIiwiPCEtLSBJbnNwaXJlZCBieSBib290c3RyYXAgaHR0cDovL2dldGJvb3RzdHJhcC5jb20vIC0tPlxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdlxyXG4gICAgOmNsYXNzPVwiWydwYW5lbCcsICdwYW5lbC0nICsgdHlwZV1cIlxyXG4gICAgOnN0eWxlPVwieyBib3JkZXJXaWR0aDogYm9yZGVyIH1cIj5cclxuICAgIDx0ZXh0XHJcbiAgICAgIDpjbGFzcz1cIlsncGFuZWwtaGVhZGVyJywgJ3BhbmVsLWhlYWRlci0nICsgdHlwZV1cIlxyXG4gICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgcGFkZGluZ1RvcDogcGFkZGluZ0hlYWQsXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogcGFkZGluZ0hlYWQsXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHBhZGRpbmdIZWFkKjEuNSxcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmdIZWFkKjEuNVxyXG4gICAgICB9XCI+e3t0aXRsZX19PC90ZXh0PlxyXG4gICAgPGRpdlxyXG4gICAgICA6Y2xhc3M9XCJbJ3BhbmVsLWJvZHknLCAncGFuZWwtYm9keS0nICsgdHlwZV1cIlxyXG4gICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgcGFkZGluZ1RvcDogcGFkZGluZ0JvZHksXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogcGFkZGluZ0JvZHksXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHBhZGRpbmdCb2R5KjEuNSxcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmdCb2R5KjEuNVxyXG4gICAgICB9XCI+XHJcbiAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHR5cGU6IHsgZGVmYXVsdDogJ2RlZmF1bHQnIH0sXHJcbiAgICAgIHRpdGxlOiB7IGRlZmF1bHQ6ICcnIH0sXHJcbiAgICAgIHBhZGRpbmdCb2R5OiB7IGRlZmF1bHQ6IDIwIH0sXHJcbiAgICAgIHBhZGRpbmdIZWFkOiB7IGRlZmF1bHQ6IDIwIH0sXHJcbiAgICAgIGRhdGFDbGFzczogeyBkZWZhdWx0OiAnJyB9LCAvLyBGSVhNRSB0cmFuc2ZlciBjbGFzc1xyXG4gICAgICBib3JkZXI6eyBkZWZhdWx0OiAwIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gIC5wYW5lbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7Ki9cclxuICAgIC8qYm9yZGVyLXJhZGl1czogMTBweDsqL1xyXG4gICAgLyotd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSk7Ki9cclxuICAgIC8qYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA1KTsqL1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkZGRkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtZGVmYXVsdCB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtcHJpbWFyeSB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtc3VjY2VzcyB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig3NiwgMTc0LCA3Nik7XHJcblxyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWluZm8ge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNzAsIDE4NCwgMjE4KTtcclxuXHJcbiAgfVxyXG5cclxuICAucGFuZWwtd2FybmluZyB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzgsIDE2MiwgNTQpO1xyXG5cclxuICB9XHJcblxyXG4gIC5wYW5lbC1kYW5nZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjEyLCA2MywgNTgpO1xyXG5cclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIC8qcGFkZGluZy1sZWZ0OiAxMnB4OyovXHJcbiAgICAvKnBhZGRpbmctcmlnaHQ6IDEycHg7Ki9cclxuICAgIC8qcGFkZGluZy10b3A6IDIwcHg7Ki9cclxuICAgIC8qcGFkZGluZy1ib3R0b206IDIwcHg7Ki9cclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlci1kZWZhdWx0IHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXItcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDk2LCAxNDQpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyLXN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCAxODQsIDkyKTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlci1pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MSwgMTkyLCAyMjIpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyLXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTczLCA3OCk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXItZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTcsIDgzLCA3OSk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5IHtcclxuICAgIC8qcGFkZGluZy1sZWZ0OiAxMnB4OyovXHJcbiAgICAvKnBhZGRpbmctcmlnaHQ6IDEycHg7Ki9cclxuICAgIC8qcGFkZGluZy10b3A6IDIwcHg7Ki9cclxuICAgIC8qcGFkZGluZy1ib3R0b206IDIwcHg7Ki9cclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5LWRlZmF1bHQge1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHktcHJpbWFyeSB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtYm9keS1zdWNjZXNzIHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5LWluZm8ge1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHktd2FybmluZyB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtYm9keS1kYW5nZXIge1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHBhbmVsLnZ1ZT80N2MyM2U0NiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIGNsYXNzOiBbJ3BhbmVsJywgJ3BhbmVsLScgKyBfdm0udHlwZV0sXG4gICAgc3R5bGU6ICh7XG4gICAgICBib3JkZXJXaWR0aDogX3ZtLmJvcmRlclxuICAgIH0pXG4gIH0sIFtfYygndGV4dCcsIHtcbiAgICBjbGFzczogWydwYW5lbC1oZWFkZXInLCAncGFuZWwtaGVhZGVyLScgKyBfdm0udHlwZV0sXG4gICAgc3R5bGU6ICh7XG4gICAgICBwYWRkaW5nVG9wOiBfdm0ucGFkZGluZ0hlYWQsXG4gICAgICBwYWRkaW5nQm90dG9tOiBfdm0ucGFkZGluZ0hlYWQsXG4gICAgICBwYWRkaW5nTGVmdDogX3ZtLnBhZGRpbmdIZWFkICogMS41LFxuICAgICAgcGFkZGluZ1JpZ2h0OiBfdm0ucGFkZGluZ0hlYWQgKiAxLjVcbiAgICB9KVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiBbJ3BhbmVsLWJvZHknLCAncGFuZWwtYm9keS0nICsgX3ZtLnR5cGVdLFxuICAgIHN0eWxlOiAoe1xuICAgICAgcGFkZGluZ1RvcDogX3ZtLnBhZGRpbmdCb2R5LFxuICAgICAgcGFkZGluZ0JvdHRvbTogX3ZtLnBhZGRpbmdCb2R5LFxuICAgICAgcGFkZGluZ0xlZnQ6IF92bS5wYWRkaW5nQm9keSAqIDEuNSxcbiAgICAgIHBhZGRpbmdSaWdodDogX3ZtLnBhZGRpbmdCb2R5ICogMS41XG4gICAgfSlcbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTFhMzgxMjUyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0xYTM4MTI1MiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2luY2x1ZGUvcGFuZWwudnVlXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDYgNyA5IDExIDM3IDM4IDM5IDQwIDQxIDU2IDU3IDU4IDU5IDgzIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0zNmMyNWNhZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RpcC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGlwLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zNmMyNWNhZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdGlwLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTpcXFxcd2Vla1N0dWR5XFxcXHdlZXgyXFxcXHdlZXgzXFxcXHNyY1xcXFxpbmNsdWRlXFxcXHRpcC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0aXAudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTM2YzI1Y2FlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMzZjMjVjYWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luY2x1ZGUvdGlwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMzcgNTcgNTggODMiLCI8IS0tIEluc3BpcmVkIGJ5IGJvb3RzdHJhcCBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8gLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2IDpjbGFzcz1cIlsndGlwJywgJ3RpcC0nICsgdHlwZV1cIj5cclxuICAgIDx0ZXh0IDpjbGFzcz1cIlsndGlwLXR4dCcsICd0aXAtdHh0LScgKyB0eXBlXVwiPnt7dmFsdWV9fTwvdGV4dD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB0eXBlOiB7IGRlZmF1bHQ6ICdzdWNjZXNzJyB9LFxyXG4gICAgICB2YWx1ZTogeyBkZWZhdWx0OiAnJyB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICAudGlwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzZweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDM2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gIC50aXAtdHh0e1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgLnRpcC1zdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmYwZDg7XHJcbiAgICBib3JkZXItY29sb3I6ICNkNmU5YzY7XHJcbiAgfVxyXG5cclxuICAudGlwLXR4dC1zdWNjZXNzIHtcclxuICAgIGNvbG9yOiAjM2M3NjNkO1xyXG4gIH1cclxuXHJcbiAgLnRpcC1pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWVkZjc7XHJcbiAgICBib3JkZXItY29sb3I6ICNiY2U4ZjE7XHJcbiAgfVxyXG5cclxuICAudGlwLXR4dC1pbmZvIHtcclxuICAgIGNvbG9yOiAjMzE3MDhmO1xyXG4gIH1cclxuXHJcbiAgLnRpcC13YXJuaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7XHJcbiAgICBib3JkZXItY29sb3I6ICNmYWViY2M7XHJcbiAgfVxyXG5cclxuICAudGlwLXR4dC13YXJuaW5nIHtcclxuICAgIGNvbG9yOiAjOGE2ZDNiO1xyXG4gIH1cclxuXHJcbiAgLnRpcC1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZGVkZTtcclxuICAgIGJvcmRlci1jb2xvcjogI2ViY2NkMTtcclxuICB9XHJcblxyXG4gIC50aXAtdHh0LWRhbmdlciB7XHJcbiAgICBjb2xvcjogI2E5NDQ0MjtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0aXAudnVlPzgwZGEyMDVjIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsndGlwJywgJ3RpcC0nICsgX3ZtLnR5cGVdXG4gIH0sIFtfYygndGV4dCcsIHtcbiAgICBjbGFzczogWyd0aXAtdHh0JywgJ3RpcC10eHQtJyArIF92bS50eXBlXVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udmFsdWUpKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMzZjMjVjYWVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTM2YzI1Y2FlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvaW5jbHVkZS90aXAudnVlXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAzNyA1NyA1OCA4MyIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMmYwMmM2N2EhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zdHlsZS1pdGVtLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zdHlsZS1pdGVtLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0yZjAyYzY3YSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3R5bGUtaXRlbS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6XFxcXHdlZWtTdHVkeVxcXFx3ZWV4MlxcXFx3ZWV4M1xcXFxzcmNcXFxcc3R5bGVcXFxcc3R5bGUtaXRlbS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBzdHlsZS1pdGVtLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yZjAyYzY3YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJmMDJjNjdhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZS9zdHlsZS1pdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk0XG4vLyBtb2R1bGUgY2h1bmtzID0gNTcgNTggNTkiLCI8dGVtcGxhdGU+XHJcbiAgPHRleHRcclxuICAgIDp2YWx1ZT1cInZhbHVlXCJcclxuICAgIDpzdHlsZT1cInsgYmFja2dyb3VuZENvbG9yOiBiZ0NvbG9yIH1cIlxyXG4gICAgY2xhc3M9XCJpdGVtIHR4dFwiPjwvdGV4dD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB2YWx1ZTogeyBkZWZhdWx0OiAnJyB9LFxyXG4gICAgICB0eXBlOiB7IGRlZmF1bHQ6ICcwJyB9IC8vIDAsIDFcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICBiZ0NvbG9yOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PSAnMScgPyAnIzdCQTNBOCcgOiAnI0JFQUQ5Mic7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gIC5pdGVtIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIC8qbWFyZ2luLWJvdHRvbTogMTBweDsqL1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICB9XHJcblxyXG4gIC50eHQge1xyXG4gICAgY29sb3I6ICNlZWU7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3R5bGUtaXRlbS52dWU/NzhmNzM4ZjkiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3RleHQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaXRlbSB0eHRcIixcbiAgICBzdHlsZTogKHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogX3ZtLmJnQ29sb3JcbiAgICB9KSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0udmFsdWVcbiAgICB9XG4gIH0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTJmMDJjNjdhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yZjAyYzY3YSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3N0eWxlL3N0eWxlLWl0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSAxOTZcbi8vIG1vZHVsZSBjaHVua3MgPSA1NyA1OCA1OSIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHBhbmVsIHRpdGxlPVwiQm94IE1vZGVsXCIgcGFkZGluZy1ib2R5PVwiMFwiIHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwiYm94XCI+Qm94PC90ZXh0PlxyXG4gICAgPC9wYW5lbD5cclxuXHJcbiAgICA8cGFuZWwgdGl0bGU9XCJib3JkZXJcIiB0eXBlPVwicHJpbWFyeVwiPlxyXG4gICAgICA8cGFuZWwgdGl0bGU9XCJib3JkZXItd2lkdGhcIiB0eXBlPVwiXCI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT1cImZsZXgtZGlyZWN0aW9uOiByb3c7XCI+XHJcbiAgICAgICAgICA8c3R5bGUtaXRlbSBzdHlsZT1cImJvcmRlci1zdHlsZTogc29saWQ7Ym9yZGVyLXdpZHRoOiAycHg7Ym9yZGVyLWNvbG9yOiAjMzMzO1wiIHZhbHVlPVwiXCI+PC9zdHlsZS1pdGVtPlxyXG4gICAgICAgICAgPHN0eWxlLWl0ZW0gc3R5bGU9XCJib3JkZXItc3R5bGU6IHNvbGlkO2JvcmRlci13aWR0aDogMTBweDtib3JkZXItY29sb3I6ICMzMzM7XCIgdmFsdWU9XCJcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgICAgICA8c3R5bGUtaXRlbSBzdHlsZT1cImJvcmRlci1zdHlsZTogc29saWQ7Ym9yZGVyLWxlZnQtd2lkdGg6IDRweDtib3JkZXItY29sb3I6ICMzMzM7XCIgdmFsdWU9XCJcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgICAgICA8c3R5bGUtaXRlbSBzdHlsZT1cImJvcmRlci1zdHlsZTogc29saWQ7Ym9yZGVyLWJvdHRvbS13aWR0aDogNHB4O2JvcmRlci1jb2xvcjogIzMzMztcIiB2YWx1ZT1cIlwiPjwvc3R5bGUtaXRlbT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9wYW5lbD5cclxuICAgICAgPHBhbmVsIHRpdGxlPVwiYm9yZGVyLWNvbG9yXCIgdHlwZT1cIlwiPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJmbGV4LWRpcmVjdGlvbjogcm93O1wiPlxyXG4gICAgICAgICAgPHN0eWxlLWl0ZW0gc3R5bGU9XCJib3JkZXItc3R5bGU6IHNvbGlkO2JvcmRlci13aWR0aDogNHB4O2JvcmRlci1jb2xvcjogIzMzMztcIiB2YWx1ZT1cIlwiPjwvc3R5bGUtaXRlbT5cclxuICAgICAgICAgIDxzdHlsZS1pdGVtIHN0eWxlPVwiYm9yZGVyLXN0eWxlOiBzb2xpZDtib3JkZXItd2lkdGg6IDRweDtib3JkZXItY29sb3I6ICNkZGQ7XCIgdmFsdWU9XCJcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgICAgICA8c3R5bGUtaXRlbSBzdHlsZT1cImJvcmRlci1zdHlsZTogc29saWQ7Ym9yZGVyLXdpZHRoOiA0cHg7Ym9yZGVyLWNvbG9yOiByZWQ7XCIgdmFsdWU9XCJcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvcGFuZWw+XHJcbiAgICAgIDxwYW5lbCB0aXRsZT1cImJvcmRlci1zdHlsZVwiIHR5cGU9XCJcIj5cclxuICAgICAgICA8dGlwIHR5cGU9XCJ3YXJuaW5nXCIgdmFsdWU9XCJqdXN0IHN1cHBvcnQgZm91ciBlZGdlc1wiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMTBweDtcIj48L3RpcD5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwiZmxleC1kaXJlY3Rpb246IHJvdztcIj5cclxuICAgICAgICAgIDxzdHlsZS1pdGVtIHN0eWxlPVwiYm9yZGVyLXN0eWxlOiBzb2xpZDtib3JkZXItd2lkdGg6IDRweDtib3JkZXItY29sb3I6ICMzMzM7XCIgdmFsdWU9XCJcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgICAgICA8c3R5bGUtaXRlbSBzdHlsZT1cImJvcmRlci1zdHlsZTogZGFzaGVkO2JvcmRlci13aWR0aDogNHB4O2JvcmRlci1jb2xvcjogIzMzMztcIiB2YWx1ZT1cIlwiIHR5cGU9XCJcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgICAgICA8c3R5bGUtaXRlbSBzdHlsZT1cImJvcmRlci1zdHlsZTogZG90dGVkO2JvcmRlci13aWR0aDogNHB4O2JvcmRlci1jb2xvcjogIzMzMztcIiB2YWx1ZT1cIlwiPjwvc3R5bGUtaXRlbT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9wYW5lbD5cclxuICAgICAgPHBhbmVsIHRpdGxlPVwiYm9yZGVyLXJhZGl1c1wiIHR5cGU9XCJcIj5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwiZmxleC1kaXJlY3Rpb246IHJvdztcIj5cclxuICAgICAgICAgIDxzdHlsZS1pdGVtIHN0eWxlPVwid2lkdGg6IDc1cHg7Ym9yZGVyLXJhZGl1czozOHB4XCIgdmFsdWU9XCJcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgICAgICA8c3R5bGUtaXRlbSBzdHlsZT1cImJvcmRlci1yYWRpdXM6MjBweFwiIHZhbHVlPVwiXCI+PC9zdHlsZS1pdGVtPlxyXG4gICAgICAgICAgPHN0eWxlLWl0ZW0gc3R5bGU9XCJib3JkZXItdG9wLWxlZnQtcmFkaXVzOjIwcHg7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MjBweFwiIHZhbHVlPVwiXCI+PC9zdHlsZS1pdGVtPlxyXG4gICAgICAgICAgPHN0eWxlLWl0ZW0gc3R5bGU9XCJib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjIwcHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MjBweFwiIHZhbHVlPVwiXCI+PC9zdHlsZS1pdGVtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3BhbmVsPlxyXG4gICAgPC9wYW5lbD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuICAuYm94IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICB3aWR0aDogMjYwcHg7XHJcbiAgICBoZWlnaHQ6IDI2MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiA0MHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMzMzO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBwYW5lbDogcmVxdWlyZSgnLi4vaW5jbHVkZS9wYW5lbC52dWUnKSxcclxuICAgICAgdGlwOiByZXF1aXJlKCcuLi9pbmNsdWRlL3RpcC52dWUnKSxcclxuICAgICAgc3R5bGVJdGVtOiByZXF1aXJlKCcuL3N0eWxlLWl0ZW0udnVlJylcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3R5bGUtYm94LnZ1ZT83YTdmYWQ0YSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdwYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIkJveCBNb2RlbFwiLFxuICAgICAgXCJwYWRkaW5nLWJvZHlcIjogXCIwXCIsXG4gICAgICBcInR5cGVcIjogXCJwcmltYXJ5XCJcbiAgICB9XG4gIH0sIFtfYygndGV4dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3hcIlxuICB9LCBbX3ZtLl92KFwiQm94XCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiYm9yZGVyXCIsXG4gICAgICBcInR5cGVcIjogXCJwcmltYXJ5XCJcbiAgICB9XG4gIH0sIFtfYygncGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJib3JkZXItd2lkdGhcIixcbiAgICAgIFwidHlwZVwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJmbGV4LWRpcmVjdGlvblwiOiBcInJvd1wiXG4gICAgfVxuICB9LCBbX2MoJ3N0eWxlLWl0ZW0nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiYm9yZGVyLXN0eWxlXCI6IFwic29saWRcIixcbiAgICAgIFwiYm9yZGVyLXdpZHRoXCI6IFwiMnB4XCIsXG4gICAgICBcImJvcmRlci1jb2xvclwiOiBcIiMzMzNcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzdHlsZS1pdGVtJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImJvcmRlci1zdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgICBcImJvcmRlci13aWR0aFwiOiBcIjEwcHhcIixcbiAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IFwiIzMzM1wiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3N0eWxlLWl0ZW0nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiYm9yZGVyLXN0eWxlXCI6IFwic29saWRcIixcbiAgICAgIFwiYm9yZGVyLWxlZnQtd2lkdGhcIjogXCI0cHhcIixcbiAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IFwiIzMzM1wiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3N0eWxlLWl0ZW0nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiYm9yZGVyLXN0eWxlXCI6IFwic29saWRcIixcbiAgICAgIFwiYm9yZGVyLWJvdHRvbS13aWR0aFwiOiBcIjRweFwiLFxuICAgICAgXCJib3JkZXItY29sb3JcIjogXCIjMzMzXCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiXCJcbiAgICB9XG4gIH0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiYm9yZGVyLWNvbG9yXCIsXG4gICAgICBcInR5cGVcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiZmxleC1kaXJlY3Rpb25cIjogXCJyb3dcIlxuICAgIH1cbiAgfSwgW19jKCdzdHlsZS1pdGVtJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImJvcmRlci1zdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgICBcImJvcmRlci13aWR0aFwiOiBcIjRweFwiLFxuICAgICAgXCJib3JkZXItY29sb3JcIjogXCIjMzMzXCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3R5bGUtaXRlbScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJib3JkZXItc3R5bGVcIjogXCJzb2xpZFwiLFxuICAgICAgXCJib3JkZXItd2lkdGhcIjogXCI0cHhcIixcbiAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IFwiI2RkZFwiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3N0eWxlLWl0ZW0nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiYm9yZGVyLXN0eWxlXCI6IFwic29saWRcIixcbiAgICAgIFwiYm9yZGVyLXdpZHRoXCI6IFwiNHB4XCIsXG4gICAgICBcImJvcmRlci1jb2xvclwiOiBcInJlZFwiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcIlwiXG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdwYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcImJvcmRlci1zdHlsZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygndGlwJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIxMHB4XCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ3YXJuaW5nXCIsXG4gICAgICBcInZhbHVlXCI6IFwianVzdCBzdXBwb3J0IGZvdXIgZWRnZXNcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiZmxleC1kaXJlY3Rpb25cIjogXCJyb3dcIlxuICAgIH1cbiAgfSwgW19jKCdzdHlsZS1pdGVtJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImJvcmRlci1zdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgICBcImJvcmRlci13aWR0aFwiOiBcIjRweFwiLFxuICAgICAgXCJib3JkZXItY29sb3JcIjogXCIjMzMzXCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3R5bGUtaXRlbScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJib3JkZXItc3R5bGVcIjogXCJkYXNoZWRcIixcbiAgICAgIFwiYm9yZGVyLXdpZHRoXCI6IFwiNHB4XCIsXG4gICAgICBcImJvcmRlci1jb2xvclwiOiBcIiMzMzNcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJcIixcbiAgICAgIFwidHlwZVwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3N0eWxlLWl0ZW0nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiYm9yZGVyLXN0eWxlXCI6IFwiZG90dGVkXCIsXG4gICAgICBcImJvcmRlci13aWR0aFwiOiBcIjRweFwiLFxuICAgICAgXCJib3JkZXItY29sb3JcIjogXCIjMzMzXCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiXCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiYm9yZGVyLXJhZGl1c1wiLFxuICAgICAgXCJ0eXBlXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImZsZXgtZGlyZWN0aW9uXCI6IFwicm93XCJcbiAgICB9XG4gIH0sIFtfYygnc3R5bGUtaXRlbScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjc1cHhcIixcbiAgICAgIFwiYm9yZGVyLXJhZGl1c1wiOiBcIjM4cHhcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzdHlsZS1pdGVtJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImJvcmRlci1yYWRpdXNcIjogXCIyMHB4XCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3R5bGUtaXRlbScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJib3JkZXItdG9wLWxlZnQtcmFkaXVzXCI6IFwiMjBweFwiLFxuICAgICAgXCJib3JkZXItdG9wLXJpZ2h0LXJhZGl1c1wiOiBcIjIwcHhcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzdHlsZS1pdGVtJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNcIjogXCIyMHB4XCIsXG4gICAgICBcImJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzXCI6IFwiMjBweFwiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcIlwiXG4gICAgfVxuICB9KV0sIDEpXSldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTQzNDlhZjRiXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi00MzQ5YWY0YiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3N0eWxlL3N0eWxlLWJveC52dWU/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gMjAzXG4vLyBtb2R1bGUgY2h1bmtzID0gNTgiXSwic291cmNlUm9vdCI6IiJ9