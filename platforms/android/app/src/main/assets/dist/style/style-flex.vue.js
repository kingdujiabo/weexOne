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
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-rewriter?id=data-v-0a443ea9!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./style-flex.vue?entry=true\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(204),
	  /* template */
	  __webpack_require__(205),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\style\\style-flex.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] style-flex.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0a443ea9", Component.options)
	  } else {
	    hotAPI.reload("data-v-0a443ea9", Component.options)
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

/***/ 204:
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	    styleItem: __webpack_require__(194)
	  }
	};

/***/ },

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('panel', {
	    attrs: {
	      "title": "flex-direction",
	      "type": "primary"
	    }
	  }, [_c('div', {
	    staticClass: "row",
	    staticStyle: {
	      "flex-direction": "row"
	    }
	  }, [_c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    },
	    attrs: {
	      "value": "row"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    attrs: {
	      "type": "1"
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "row",
	    staticStyle: {
	      "flex-direction": "column"
	    }
	  }, [_c('style-item', {
	    attrs: {
	      "value": "column"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    attrs: {
	      "type": "1"
	    }
	  })], 1)]), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "justify-content",
	      "type": "primary"
	    }
	  }, [_c('div', {
	    staticClass: "row",
	    staticStyle: {
	      "justify-content": "flex-start"
	    }
	  }, [_c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    },
	    attrs: {
	      "type": "1"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "row",
	    staticStyle: {
	      "justify-content": "flex-end"
	    }
	  }, [_c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    },
	    attrs: {
	      "type": "1"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "row",
	    staticStyle: {
	      "justify-content": "center"
	    }
	  }, [_c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    },
	    attrs: {
	      "type": "1"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "row",
	    staticStyle: {
	      "justify-content": "space-between"
	    }
	  }, [_c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    },
	    attrs: {
	      "type": "1"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    }
	  })], 1)]), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "align-items",
	      "type": "primary"
	    }
	  }, [_c('div', {
	    staticClass: "row row-align",
	    staticStyle: {
	      "align-items": "flex-start"
	    }
	  }, [_c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    },
	    attrs: {
	      "type": "1"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "row row-align",
	    staticStyle: {
	      "align-items": "flex-end"
	    }
	  }, [_c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    },
	    attrs: {
	      "type": "1"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "row row-align",
	    staticStyle: {
	      "align-items": "center"
	    }
	  }, [_c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    },
	    attrs: {
	      "type": "1"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "row row-align",
	    staticStyle: {
	      "align-items": "stretch"
	    }
	  }, [_c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    },
	    attrs: {
	      "type": "1"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    }
	  })], 1)]), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "flex",
	      "type": "primary"
	    }
	  }, [_c('div', {
	    staticClass: "row",
	    staticStyle: {
	      "align-items": "flex-start"
	    }
	  }, [_c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    },
	    attrs: {
	      "value": "no flex"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    },
	    attrs: {
	      "value": "no flex",
	      "type": "1"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    },
	    attrs: {
	      "value": "no flex"
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "row",
	    staticStyle: {
	      "align-items": "flex-start"
	    }
	  }, [_c('style-item', {
	    staticStyle: {
	      "margin-right": "0"
	    },
	    attrs: {
	      "value": "no flex"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "margin-right": "0",
	      "flex": "1"
	    },
	    attrs: {
	      "type": "1",
	      "value": "flex:1"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "margin-right": "0",
	      "flex": "2"
	    },
	    attrs: {
	      "value": "flex:2"
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "row",
	    staticStyle: {
	      "align-items": "flex-start"
	    }
	  }, [_c('style-item', {
	    staticStyle: {
	      "margin-right": "0",
	      "flex": "1"
	    },
	    attrs: {
	      "value": "flex:1"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "margin-right": "0",
	      "flex": "1"
	    },
	    attrs: {
	      "type": "1",
	      "value": "flex:1"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "margin-right": "0",
	      "flex": "1"
	    },
	    attrs: {
	      "value": "flex:1"
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "row",
	    staticStyle: {
	      "align-items": "flex-start"
	    }
	  }, [_c('style-item', {
	    staticStyle: {
	      "margin-right": "0",
	      "flex": "1"
	    },
	    attrs: {
	      "value": "flex:1"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "margin-right": "0",
	      "flex": "2"
	    },
	    attrs: {
	      "type": "1",
	      "value": "flex:2"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    staticStyle: {
	      "margin-right": "0",
	      "flex": "3"
	    },
	    attrs: {
	      "value": "flex:3"
	    }
	  })], 1)]), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "flex-wrap",
	      "type": "primary"
	    }
	  }, [_c('div', {
	    staticClass: "row",
	    staticStyle: {
	      "flex-wrap": "wrap",
	      "background-color": "grey",
	      "padding": "10"
	    }
	  }, [_c('style-item', {
	    attrs: {
	      "value": "1:wrap"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    attrs: {
	      "value": "2:wrap"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    attrs: {
	      "value": "3:wrap"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    attrs: {
	      "value": "4:wrap"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    attrs: {
	      "value": "5:wrap"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    attrs: {
	      "value": "6:wrap"
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "row",
	    staticStyle: {
	      "flex-wrap": "nowrap",
	      "background-color": "grey",
	      "padding": "10"
	    }
	  }, [_c('style-item', {
	    attrs: {
	      "value": "1:nowrap"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    attrs: {
	      "value": "2:nowrap"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    attrs: {
	      "value": "3:nowrap"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    attrs: {
	      "value": "4:nowrap"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    attrs: {
	      "value": "5:nowrap"
	    }
	  }), _vm._v(" "), _c('style-item', {
	    attrs: {
	      "value": "6:nowrap"
	    }
	  })], 1)])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0a443ea9", module.exports)
	  }
	}

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQ/ZWQ2NCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL3N0eWxlLWZsZXgudnVlPzRkZjAiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcz9kNGYzKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9wYW5lbC52dWU/NGVjNioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vL3BhbmVsLnZ1ZT81YmFkKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvcGFuZWwudnVlP2Q5YjgqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvc3R5bGUtaXRlbS52dWU/MjI2MyoiLCJ3ZWJwYWNrOi8vL3N0eWxlLWl0ZW0udnVlPzdmODYqIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9zdHlsZS1pdGVtLnZ1ZT9jYmNjKioiLCJ3ZWJwYWNrOi8vL3N0eWxlLWZsZXgudnVlPzkzZDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL3N0eWxlLWZsZXgudnVlPzYyYmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3JDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBK0UsaURBQWlELElBQUk7QUFDcEksb0NBQW1DOztBQUVuQztBQUNBLGFBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOERBQTZEO0FBQzdEO0FBQ0E7QUFDQSxvQ0FBbUM7QUFDbkMsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDN0NBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUErRSxpREFBaUQsSUFBSTtBQUNwSSxvQ0FBbUM7O0FBRW5DO0FBQ0EsYUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxFQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBOztzQkFHQTt1QkFDQTs2QkFDQTs2QkFDQTtpQ0FDQTt3QkFFQTtBQVBBO0FBREEsRzs7Ozs7OztBQzVCQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7O0FDN0JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUErRSxpREFBaUQsSUFBSTtBQUNwSSxvQ0FBbUM7O0FBRW5DO0FBQ0EsYUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxFQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBOzt1QkFHQTs0QkFFQTtBQUhBOzswQkFLQTs2Q0FDQTtBQUVBO0FBSkE7QUFMQSxHOzs7Ozs7O0FDVEEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcUdBOztnQ0FHQTtvQ0FFQTtBQUhBO0FBREEsRzs7Ozs7OztBQ3ZIQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJmaWxlIjoic3R5bGVcXHN0eWxlLWZsZXgudnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTBhNDQzZWE5IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3R5bGUtZmxleC52dWU/ZW50cnk9dHJ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zdHlsZS1mbGV4LnZ1ZT9lbnRyeT10cnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTBhNDQzZWE5IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zdHlsZS1mbGV4LnZ1ZT9lbnRyeT10cnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFx3ZWVrU3R1ZHlcXFxcd2VleDJcXFxcd2VleDNcXFxcc3JjXFxcXHN0eWxlXFxcXHN0eWxlLWZsZXgudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gc3R5bGUtZmxleC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMGE0NDNlYTlcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wYTQ0M2VhOVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGUvc3R5bGUtZmxleC52dWU/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDU5IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBzY29wZUlkLFxuICBjc3NNb2R1bGVzXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICAvLyBpbmplY3QgY3NzTW9kdWxlc1xuICBpZiAoY3NzTW9kdWxlcykge1xuICAgIHZhciBjb21wdXRlZCA9IG9wdGlvbnMuY29tcHV0ZWQgfHwgKG9wdGlvbnMuY29tcHV0ZWQgPSB7fSlcbiAgICBPYmplY3Qua2V5cyhjc3NNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBjc3NNb2R1bGVzW2tleV1cbiAgICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtb2R1bGUgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MCA2MSA2MiA2MyA2NCA2NSA2NiA2NyA2OCA2OSA3MCA3MSA3MiA3MyA3NCA3NSA3NiA3NyA3OCA3OSA4MCA4MSA4MiA4MyIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMWEzODEyNTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYW5lbC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcGFuZWwudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTFhMzgxMjUyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wYW5lbC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6XFxcXHdlZWtTdHVkeVxcXFx3ZWV4MlxcXFx3ZWV4M1xcXFxzcmNcXFxcaW5jbHVkZVxcXFxwYW5lbC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBwYW5lbC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMWEzODEyNTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xYTM4MTI1MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5jbHVkZS9wYW5lbC52dWVcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNiA3IDkgMTEgMzcgMzggMzkgNDAgNDEgNTYgNTcgNTggNTkgODMiLCI8IS0tIEluc3BpcmVkIGJ5IGJvb3RzdHJhcCBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8gLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2XHJcbiAgICA6Y2xhc3M9XCJbJ3BhbmVsJywgJ3BhbmVsLScgKyB0eXBlXVwiXHJcbiAgICA6c3R5bGU9XCJ7IGJvcmRlcldpZHRoOiBib3JkZXIgfVwiPlxyXG4gICAgPHRleHRcclxuICAgICAgOmNsYXNzPVwiWydwYW5lbC1oZWFkZXInLCAncGFuZWwtaGVhZGVyLScgKyB0eXBlXVwiXHJcbiAgICAgIDpzdHlsZT1cIntcclxuICAgICAgICBwYWRkaW5nVG9wOiBwYWRkaW5nSGVhZCxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiBwYWRkaW5nSGVhZCxcclxuICAgICAgICBwYWRkaW5nTGVmdDogcGFkZGluZ0hlYWQqMS41LFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDogcGFkZGluZ0hlYWQqMS41XHJcbiAgICAgIH1cIj57e3RpdGxlfX08L3RleHQ+XHJcbiAgICA8ZGl2XHJcbiAgICAgIDpjbGFzcz1cIlsncGFuZWwtYm9keScsICdwYW5lbC1ib2R5LScgKyB0eXBlXVwiXHJcbiAgICAgIDpzdHlsZT1cIntcclxuICAgICAgICBwYWRkaW5nVG9wOiBwYWRkaW5nQm9keSxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiBwYWRkaW5nQm9keSxcclxuICAgICAgICBwYWRkaW5nTGVmdDogcGFkZGluZ0JvZHkqMS41LFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDogcGFkZGluZ0JvZHkqMS41XHJcbiAgICAgIH1cIj5cclxuICAgICAgPHNsb3Q+PC9zbG90PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgdHlwZTogeyBkZWZhdWx0OiAnZGVmYXVsdCcgfSxcclxuICAgICAgdGl0bGU6IHsgZGVmYXVsdDogJycgfSxcclxuICAgICAgcGFkZGluZ0JvZHk6IHsgZGVmYXVsdDogMjAgfSxcclxuICAgICAgcGFkZGluZ0hlYWQ6IHsgZGVmYXVsdDogMjAgfSxcclxuICAgICAgZGF0YUNsYXNzOiB7IGRlZmF1bHQ6ICcnIH0sIC8vIEZJWE1FIHRyYW5zZmVyIGNsYXNzXHJcbiAgICAgIGJvcmRlcjp7IGRlZmF1bHQ6IDAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgLnBhbmVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLypib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsqL1xyXG4gICAgLypib3JkZXItcmFkaXVzOiAxMHB4OyovXHJcbiAgICAvKi13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA1KTsqL1xyXG4gICAgLypib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpOyovXHJcbiAgICBib3JkZXItY29sb3I6ICNkZGRkZGQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1kZWZhdWx0IHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1wcmltYXJ5IHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDQwLCA5NiwgMTQ0KTtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1zdWNjZXNzIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDc2LCAxNzQsIDc2KTtcclxuXHJcbiAgfVxyXG5cclxuICAucGFuZWwtaW5mbyB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig3MCwgMTg0LCAyMTgpO1xyXG5cclxuICB9XHJcblxyXG4gIC5wYW5lbC13YXJuaW5nIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIzOCwgMTYyLCA1NCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWRhbmdlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTIsIDYzLCA1OCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgLypwYWRkaW5nLWxlZnQ6IDEycHg7Ki9cclxuICAgIC8qcGFkZGluZy1yaWdodDogMTJweDsqL1xyXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xyXG4gICAgLypwYWRkaW5nLWJvdHRvbTogMjBweDsqL1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyLWRlZmF1bHQge1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlci1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXItc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDE4NCwgOTIpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyLWluZm8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkxLCAxOTIsIDIyMik7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXItd2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxNzMsIDc4KTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlci1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNywgODMsIDc5KTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHkge1xyXG4gICAgLypwYWRkaW5nLWxlZnQ6IDEycHg7Ki9cclxuICAgIC8qcGFkZGluZy1yaWdodDogMTJweDsqL1xyXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xyXG4gICAgLypwYWRkaW5nLWJvdHRvbTogMjBweDsqL1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHktZGVmYXVsdCB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtYm9keS1wcmltYXJ5IHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5LXN1Y2Nlc3Mge1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHktaW5mbyB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtYm9keS13YXJuaW5nIHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5LWRhbmdlciB7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcGFuZWwudnVlPzQ3YzIzZTQ2IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsncGFuZWwnLCAncGFuZWwtJyArIF92bS50eXBlXSxcbiAgICBzdHlsZTogKHtcbiAgICAgIGJvcmRlcldpZHRoOiBfdm0uYm9yZGVyXG4gICAgfSlcbiAgfSwgW19jKCd0ZXh0Jywge1xuICAgIGNsYXNzOiBbJ3BhbmVsLWhlYWRlcicsICdwYW5lbC1oZWFkZXItJyArIF92bS50eXBlXSxcbiAgICBzdHlsZTogKHtcbiAgICAgIHBhZGRpbmdUb3A6IF92bS5wYWRkaW5nSGVhZCxcbiAgICAgIHBhZGRpbmdCb3R0b206IF92bS5wYWRkaW5nSGVhZCxcbiAgICAgIHBhZGRpbmdMZWZ0OiBfdm0ucGFkZGluZ0hlYWQgKiAxLjUsXG4gICAgICBwYWRkaW5nUmlnaHQ6IF92bS5wYWRkaW5nSGVhZCAqIDEuNVxuICAgIH0pXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsncGFuZWwtYm9keScsICdwYW5lbC1ib2R5LScgKyBfdm0udHlwZV0sXG4gICAgc3R5bGU6ICh7XG4gICAgICBwYWRkaW5nVG9wOiBfdm0ucGFkZGluZ0JvZHksXG4gICAgICBwYWRkaW5nQm90dG9tOiBfdm0ucGFkZGluZ0JvZHksXG4gICAgICBwYWRkaW5nTGVmdDogX3ZtLnBhZGRpbmdCb2R5ICogMS41LFxuICAgICAgcGFkZGluZ1JpZ2h0OiBfdm0ucGFkZGluZ0JvZHkgKiAxLjVcbiAgICB9KVxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMWEzODEyNTJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTFhMzgxMjUyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvaW5jbHVkZS9wYW5lbC52dWVcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNiA3IDkgMTEgMzcgMzggMzkgNDAgNDEgNTYgNTcgNTggNTkgODMiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTJmMDJjNjdhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3R5bGUtaXRlbS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vc3R5bGUtaXRlbS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMmYwMmM2N2EhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3N0eWxlLWl0ZW0udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFx3ZWVrU3R1ZHlcXFxcd2VleDJcXFxcd2VleDNcXFxcc3JjXFxcXHN0eWxlXFxcXHN0eWxlLWl0ZW0udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gc3R5bGUtaXRlbS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMmYwMmM2N2FcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yZjAyYzY3YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGUvc3R5bGUtaXRlbS52dWVcbi8vIG1vZHVsZSBpZCA9IDE5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDU3IDU4IDU5IiwiPHRlbXBsYXRlPlxyXG4gIDx0ZXh0XHJcbiAgICA6dmFsdWU9XCJ2YWx1ZVwiXHJcbiAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogYmdDb2xvciB9XCJcclxuICAgIGNsYXNzPVwiaXRlbSB0eHRcIj48L3RleHQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgdmFsdWU6IHsgZGVmYXVsdDogJycgfSxcclxuICAgICAgdHlwZTogeyBkZWZhdWx0OiAnMCcgfSAvLyAwLCAxXHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgYmdDb2xvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT0gJzEnID8gJyM3QkEzQTgnIDogJyNCRUFEOTInO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICAuaXRlbSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAvKm1hcmdpbi1ib3R0b206IDEwcHg7Ki9cclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5cclxuICAudHh0IHtcclxuICAgIGNvbG9yOiAjZWVlO1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHN0eWxlLWl0ZW0udnVlPzc4ZjczOGY5IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd0ZXh0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0gdHh0XCIsXG4gICAgc3R5bGU6ICh7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IF92bS5iZ0NvbG9yXG4gICAgfSksXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLnZhbHVlXG4gICAgfVxuICB9KVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yZjAyYzY3YVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMmYwMmM2N2EhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9zdHlsZS9zdHlsZS1pdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk2XG4vLyBtb2R1bGUgY2h1bmtzID0gNTcgNTggNTkiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxwYW5lbCB0aXRsZT1cImZsZXgtZGlyZWN0aW9uXCIgdHlwZT1cInByaW1hcnlcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwiZmxleC1kaXJlY3Rpb246IHJvdztcIj5cclxuICAgICAgICA8c3R5bGUtaXRlbSB2YWx1ZT1cInJvd1wiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAwO1wiPjwvc3R5bGUtaXRlbT5cclxuICAgICAgICA8c3R5bGUtaXRlbSB0eXBlPVwiMVwiPjwvc3R5bGUtaXRlbT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cIj5cclxuICAgICAgICA8c3R5bGUtaXRlbSB2YWx1ZT1cImNvbHVtblwiPjwvc3R5bGUtaXRlbT5cclxuICAgICAgICA8c3R5bGUtaXRlbSB0eXBlPVwiMVwiPjwvc3R5bGUtaXRlbT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3BhbmVsPlxyXG5cclxuICAgIDxwYW5lbCB0aXRsZT1cImp1c3RpZnktY29udGVudFwiIHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogZmxleC1zdGFydFwiPlxyXG4gICAgICAgIDxzdHlsZS1pdGVtIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjA7XCI+PC9zdHlsZS1pdGVtPlxyXG4gICAgICAgIDxzdHlsZS1pdGVtIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjA7XCIgdHlwZT1cIjFcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgICAgPHN0eWxlLWl0ZW0gc3R5bGU9XCJtYXJnaW4tcmlnaHQ6MDtcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXCI+XHJcbiAgICAgICAgPHN0eWxlLWl0ZW0gc3R5bGU9XCJtYXJnaW4tcmlnaHQ6MDtcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgICAgPHN0eWxlLWl0ZW0gc3R5bGU9XCJtYXJnaW4tcmlnaHQ6MDtcIiB0eXBlPVwiMVwiPjwvc3R5bGUtaXRlbT5cclxuICAgICAgICA8c3R5bGUtaXRlbSBzdHlsZT1cIm1hcmdpbi1yaWdodDowO1wiPjwvc3R5bGUtaXRlbT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyXCI+XHJcbiAgICAgICAgPHN0eWxlLWl0ZW0gc3R5bGU9XCJtYXJnaW4tcmlnaHQ6MDtcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgICAgPHN0eWxlLWl0ZW0gc3R5bGU9XCJtYXJnaW4tcmlnaHQ6MDtcIiB0eXBlPVwiMVwiPjwvc3R5bGUtaXRlbT5cclxuICAgICAgICA8c3R5bGUtaXRlbSBzdHlsZT1cIm1hcmdpbi1yaWdodDowO1wiPjwvc3R5bGUtaXRlbT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICAgIDxzdHlsZS1pdGVtIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjA7XCI+PC9zdHlsZS1pdGVtPlxyXG4gICAgICAgIDxzdHlsZS1pdGVtIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjA7XCIgdHlwZT1cIjFcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgICAgPHN0eWxlLWl0ZW0gc3R5bGU9XCJtYXJnaW4tcmlnaHQ6MDtcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9wYW5lbD5cclxuXHJcbiAgICA8cGFuZWwgdGl0bGU9XCJhbGlnbi1pdGVtc1wiIHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LWFsaWduXCIgc3R5bGU9XCJhbGlnbi1pdGVtczogZmxleC1zdGFydFwiPlxyXG4gICAgICAgIDxzdHlsZS1pdGVtIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjA7XCI+PC9zdHlsZS1pdGVtPlxyXG4gICAgICAgIDxzdHlsZS1pdGVtIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjA7XCIgdHlwZT1cIjFcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgICAgPHN0eWxlLWl0ZW0gc3R5bGU9XCJtYXJnaW4tcmlnaHQ6MDtcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy1hbGlnblwiIHN0eWxlPVwiYWxpZ24taXRlbXM6IGZsZXgtZW5kXCI+XHJcbiAgICAgICAgPHN0eWxlLWl0ZW0gc3R5bGU9XCJtYXJnaW4tcmlnaHQ6MDtcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgICAgPHN0eWxlLWl0ZW0gc3R5bGU9XCJtYXJnaW4tcmlnaHQ6MDtcIiB0eXBlPVwiMVwiPjwvc3R5bGUtaXRlbT5cclxuICAgICAgICA8c3R5bGUtaXRlbSBzdHlsZT1cIm1hcmdpbi1yaWdodDowO1wiPjwvc3R5bGUtaXRlbT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LWFsaWduXCIgc3R5bGU9XCJhbGlnbi1pdGVtczogY2VudGVyXCI+XHJcbiAgICAgICAgPHN0eWxlLWl0ZW0gc3R5bGU9XCJtYXJnaW4tcmlnaHQ6MDtcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgICAgPHN0eWxlLWl0ZW0gc3R5bGU9XCJtYXJnaW4tcmlnaHQ6MDtcIiB0eXBlPVwiMVwiPjwvc3R5bGUtaXRlbT5cclxuICAgICAgICA8c3R5bGUtaXRlbSBzdHlsZT1cIm1hcmdpbi1yaWdodDowO1wiPjwvc3R5bGUtaXRlbT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LWFsaWduXCIgc3R5bGU9XCJhbGlnbi1pdGVtczogc3RyZXRjaFwiPlxyXG4gICAgICAgIDxzdHlsZS1pdGVtIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjA7XCI+PC9zdHlsZS1pdGVtPlxyXG4gICAgICAgIDxzdHlsZS1pdGVtIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjA7XCIgdHlwZT1cIjFcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgICAgPHN0eWxlLWl0ZW0gc3R5bGU9XCJtYXJnaW4tcmlnaHQ6MDtcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9wYW5lbD5cclxuXHJcbiAgICA8cGFuZWwgdGl0bGU9XCJmbGV4XCIgdHlwZT1cInByaW1hcnlcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwiYWxpZ24taXRlbXM6IGZsZXgtc3RhcnRcIj5cclxuICAgICAgICA8c3R5bGUtaXRlbSBzdHlsZT1cIm1hcmdpbi1yaWdodDowO1wiIHZhbHVlPVwibm8gZmxleFwiPjwvc3R5bGUtaXRlbT5cclxuICAgICAgICA8c3R5bGUtaXRlbSBzdHlsZT1cIm1hcmdpbi1yaWdodDowO1wiIHZhbHVlPVwibm8gZmxleFwiIHR5cGU9XCIxXCI+PC9zdHlsZS1pdGVtPlxyXG4gICAgICAgIDxzdHlsZS1pdGVtIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjA7XCIgdmFsdWU9XCJubyBmbGV4XCI+PC9zdHlsZS1pdGVtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwiYWxpZ24taXRlbXM6IGZsZXgtc3RhcnRcIj5cclxuICAgICAgICA8c3R5bGUtaXRlbSBzdHlsZT1cIm1hcmdpbi1yaWdodDowO1wiIHZhbHVlPVwibm8gZmxleFwiPjwvc3R5bGUtaXRlbT5cclxuICAgICAgICA8c3R5bGUtaXRlbSBzdHlsZT1cIm1hcmdpbi1yaWdodDowOyBmbGV4OjE7XCIgdHlwZT1cIjFcIiB2YWx1ZT1cImZsZXg6MVwiPjwvc3R5bGUtaXRlbT5cclxuICAgICAgICA8c3R5bGUtaXRlbSBzdHlsZT1cIm1hcmdpbi1yaWdodDowOyBmbGV4OjI7XCIgdmFsdWU9XCJmbGV4OjJcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCIgc3R5bGU9XCJhbGlnbi1pdGVtczogZmxleC1zdGFydFwiPlxyXG4gICAgICAgIDxzdHlsZS1pdGVtIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjA7IGZsZXg6MTtcIiB2YWx1ZT1cImZsZXg6MVwiPjwvc3R5bGUtaXRlbT5cclxuICAgICAgICA8c3R5bGUtaXRlbSBzdHlsZT1cIm1hcmdpbi1yaWdodDowOyBmbGV4OjE7XCIgdHlwZT1cIjFcIiB2YWx1ZT1cImZsZXg6MVwiPjwvc3R5bGUtaXRlbT5cclxuICAgICAgICA8c3R5bGUtaXRlbSBzdHlsZT1cIm1hcmdpbi1yaWdodDowOyBmbGV4OjE7XCIgdmFsdWU9XCJmbGV4OjFcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCIgc3R5bGU9XCJhbGlnbi1pdGVtczogZmxleC1zdGFydFwiPlxyXG4gICAgICAgIDxzdHlsZS1pdGVtIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjA7IGZsZXg6MTtcIiB2YWx1ZT1cImZsZXg6MVwiPjwvc3R5bGUtaXRlbT5cclxuICAgICAgICA8c3R5bGUtaXRlbSBzdHlsZT1cIm1hcmdpbi1yaWdodDowOyBmbGV4OjI7XCIgdHlwZT1cIjFcIiB2YWx1ZT1cImZsZXg6MlwiPjwvc3R5bGUtaXRlbT5cclxuICAgICAgICA8c3R5bGUtaXRlbSBzdHlsZT1cIm1hcmdpbi1yaWdodDowOyBmbGV4OjM7XCIgdmFsdWU9XCJmbGV4OjNcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9wYW5lbD5cclxuICAgIFxyXG4gICAgPHBhbmVsIHRpdGxlPVwiZmxleC13cmFwXCIgdHlwZT1cInByaW1hcnlcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwiZmxleC13cmFwOndyYXA7YmFja2dyb3VuZC1jb2xvcjpncmV5O3BhZGRpbmc6MTA7XCI+XHJcbiAgICAgICAgPHN0eWxlLWl0ZW0gdmFsdWU9XCIxOndyYXBcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgICAgPHN0eWxlLWl0ZW0gdmFsdWU9XCIyOndyYXBcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgICAgPHN0eWxlLWl0ZW0gdmFsdWU9XCIzOndyYXBcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgICAgPHN0eWxlLWl0ZW0gdmFsdWU9XCI0OndyYXBcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgICAgPHN0eWxlLWl0ZW0gdmFsdWU9XCI1OndyYXBcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgICAgPHN0eWxlLWl0ZW0gdmFsdWU9XCI2OndyYXBcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCIgc3R5bGU9XCJmbGV4LXdyYXA6bm93cmFwO2JhY2tncm91bmQtY29sb3I6Z3JleTtwYWRkaW5nOjEwO1wiPlxyXG4gICAgICAgIDxzdHlsZS1pdGVtIHZhbHVlPVwiMTpub3dyYXBcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgICAgPHN0eWxlLWl0ZW0gdmFsdWU9XCIyOm5vd3JhcFwiPjwvc3R5bGUtaXRlbT5cclxuICAgICAgICA8c3R5bGUtaXRlbSB2YWx1ZT1cIjM6bm93cmFwXCI+PC9zdHlsZS1pdGVtPlxyXG4gICAgICAgIDxzdHlsZS1pdGVtIHZhbHVlPVwiNDpub3dyYXBcIj48L3N0eWxlLWl0ZW0+XHJcbiAgICAgICAgPHN0eWxlLWl0ZW0gdmFsdWU9XCI1Om5vd3JhcFwiPjwvc3R5bGUtaXRlbT5cclxuICAgICAgICA8c3R5bGUtaXRlbSB2YWx1ZT1cIjY6bm93cmFwXCI+PC9zdHlsZS1pdGVtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvcGFuZWw+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGU+XHJcbiAgLnJvdyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gIC5yb3ctYWxpZ24ge1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIGJvcmRlci13aWR0aDogM3B4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBwYW5lbDogcmVxdWlyZSgnLi4vaW5jbHVkZS9wYW5lbC52dWUnKSxcclxuICAgICAgc3R5bGVJdGVtOiByZXF1aXJlKCcuL3N0eWxlLWl0ZW0udnVlJylcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3R5bGUtZmxleC52dWU/NTg5NmI0MDYiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygncGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJmbGV4LWRpcmVjdGlvblwiLFxuICAgICAgXCJ0eXBlXCI6IFwicHJpbWFyeVwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJmbGV4LWRpcmVjdGlvblwiOiBcInJvd1wiXG4gICAgfVxuICB9LCBbX2MoJ3N0eWxlLWl0ZW0nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwibWFyZ2luLXJpZ2h0XCI6IFwiMFwiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInJvd1wiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3N0eWxlLWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcIjFcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJmbGV4LWRpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gICAgfVxuICB9LCBbX2MoJ3N0eWxlLWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJjb2x1bW5cIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzdHlsZS1pdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCIxXCJcbiAgICB9XG4gIH0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwianVzdGlmeS1jb250ZW50XCIsXG4gICAgICBcInR5cGVcIjogXCJwcmltYXJ5XCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImp1c3RpZnktY29udGVudFwiOiBcImZsZXgtc3RhcnRcIlxuICAgIH1cbiAgfSwgW19jKCdzdHlsZS1pdGVtJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpbi1yaWdodFwiOiBcIjBcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzdHlsZS1pdGVtJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpbi1yaWdodFwiOiBcIjBcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcIjFcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzdHlsZS1pdGVtJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpbi1yaWdodFwiOiBcIjBcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJqdXN0aWZ5LWNvbnRlbnRcIjogXCJmbGV4LWVuZFwiXG4gICAgfVxuICB9LCBbX2MoJ3N0eWxlLWl0ZW0nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwibWFyZ2luLXJpZ2h0XCI6IFwiMFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3N0eWxlLWl0ZW0nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwibWFyZ2luLXJpZ2h0XCI6IFwiMFwiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiMVwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3N0eWxlLWl0ZW0nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwibWFyZ2luLXJpZ2h0XCI6IFwiMFwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImp1c3RpZnktY29udGVudFwiOiBcImNlbnRlclwiXG4gICAgfVxuICB9LCBbX2MoJ3N0eWxlLWl0ZW0nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwibWFyZ2luLXJpZ2h0XCI6IFwiMFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3N0eWxlLWl0ZW0nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwibWFyZ2luLXJpZ2h0XCI6IFwiMFwiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiMVwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3N0eWxlLWl0ZW0nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwibWFyZ2luLXJpZ2h0XCI6IFwiMFwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImp1c3RpZnktY29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIlxuICAgIH1cbiAgfSwgW19jKCdzdHlsZS1pdGVtJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpbi1yaWdodFwiOiBcIjBcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzdHlsZS1pdGVtJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpbi1yaWdodFwiOiBcIjBcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcIjFcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzdHlsZS1pdGVtJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpbi1yaWdodFwiOiBcIjBcIlxuICAgIH1cbiAgfSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJhbGlnbi1pdGVtc1wiLFxuICAgICAgXCJ0eXBlXCI6IFwicHJpbWFyeVwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3cgcm93LWFsaWduXCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiYWxpZ24taXRlbXNcIjogXCJmbGV4LXN0YXJ0XCJcbiAgICB9XG4gIH0sIFtfYygnc3R5bGUtaXRlbScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIwXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3R5bGUtaXRlbScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIwXCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCIxXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3R5bGUtaXRlbScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIwXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93IHJvdy1hbGlnblwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImFsaWduLWl0ZW1zXCI6IFwiZmxleC1lbmRcIlxuICAgIH1cbiAgfSwgW19jKCdzdHlsZS1pdGVtJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpbi1yaWdodFwiOiBcIjBcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzdHlsZS1pdGVtJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpbi1yaWdodFwiOiBcIjBcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcIjFcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzdHlsZS1pdGVtJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpbi1yaWdodFwiOiBcIjBcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3cgcm93LWFsaWduXCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiYWxpZ24taXRlbXNcIjogXCJjZW50ZXJcIlxuICAgIH1cbiAgfSwgW19jKCdzdHlsZS1pdGVtJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpbi1yaWdodFwiOiBcIjBcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzdHlsZS1pdGVtJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpbi1yaWdodFwiOiBcIjBcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcIjFcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzdHlsZS1pdGVtJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpbi1yaWdodFwiOiBcIjBcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3cgcm93LWFsaWduXCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiYWxpZ24taXRlbXNcIjogXCJzdHJldGNoXCJcbiAgICB9XG4gIH0sIFtfYygnc3R5bGUtaXRlbScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIwXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3R5bGUtaXRlbScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIwXCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCIxXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3R5bGUtaXRlbScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIwXCJcbiAgICB9XG4gIH0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiZmxleFwiLFxuICAgICAgXCJ0eXBlXCI6IFwicHJpbWFyeVwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJhbGlnbi1pdGVtc1wiOiBcImZsZXgtc3RhcnRcIlxuICAgIH1cbiAgfSwgW19jKCdzdHlsZS1pdGVtJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpbi1yaWdodFwiOiBcIjBcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJubyBmbGV4XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3R5bGUtaXRlbScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIwXCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwibm8gZmxleFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiMVwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3N0eWxlLWl0ZW0nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwibWFyZ2luLXJpZ2h0XCI6IFwiMFwiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcIm5vIGZsZXhcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJhbGlnbi1pdGVtc1wiOiBcImZsZXgtc3RhcnRcIlxuICAgIH1cbiAgfSwgW19jKCdzdHlsZS1pdGVtJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpbi1yaWdodFwiOiBcIjBcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJubyBmbGV4XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3R5bGUtaXRlbScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIwXCIsXG4gICAgICBcImZsZXhcIjogXCIxXCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCIxXCIsXG4gICAgICBcInZhbHVlXCI6IFwiZmxleDoxXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3R5bGUtaXRlbScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIwXCIsXG4gICAgICBcImZsZXhcIjogXCIyXCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiZmxleDoyXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiYWxpZ24taXRlbXNcIjogXCJmbGV4LXN0YXJ0XCJcbiAgICB9XG4gIH0sIFtfYygnc3R5bGUtaXRlbScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIwXCIsXG4gICAgICBcImZsZXhcIjogXCIxXCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiZmxleDoxXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3R5bGUtaXRlbScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIwXCIsXG4gICAgICBcImZsZXhcIjogXCIxXCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCIxXCIsXG4gICAgICBcInZhbHVlXCI6IFwiZmxleDoxXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3R5bGUtaXRlbScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIwXCIsXG4gICAgICBcImZsZXhcIjogXCIxXCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiZmxleDoxXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiYWxpZ24taXRlbXNcIjogXCJmbGV4LXN0YXJ0XCJcbiAgICB9XG4gIH0sIFtfYygnc3R5bGUtaXRlbScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIwXCIsXG4gICAgICBcImZsZXhcIjogXCIxXCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiZmxleDoxXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3R5bGUtaXRlbScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIwXCIsXG4gICAgICBcImZsZXhcIjogXCIyXCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCIxXCIsXG4gICAgICBcInZhbHVlXCI6IFwiZmxleDoyXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3R5bGUtaXRlbScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIwXCIsXG4gICAgICBcImZsZXhcIjogXCIzXCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiZmxleDozXCJcbiAgICB9XG4gIH0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiZmxleC13cmFwXCIsXG4gICAgICBcInR5cGVcIjogXCJwcmltYXJ5XCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImZsZXgtd3JhcFwiOiBcIndyYXBcIixcbiAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcImdyZXlcIixcbiAgICAgIFwicGFkZGluZ1wiOiBcIjEwXCJcbiAgICB9XG4gIH0sIFtfYygnc3R5bGUtaXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcIjE6d3JhcFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3N0eWxlLWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCIyOndyYXBcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzdHlsZS1pdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiMzp3cmFwXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3R5bGUtaXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcIjQ6d3JhcFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3N0eWxlLWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCI1OndyYXBcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzdHlsZS1pdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiNjp3cmFwXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiZmxleC13cmFwXCI6IFwibm93cmFwXCIsXG4gICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJncmV5XCIsXG4gICAgICBcInBhZGRpbmdcIjogXCIxMFwiXG4gICAgfVxuICB9LCBbX2MoJ3N0eWxlLWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCIxOm5vd3JhcFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3N0eWxlLWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCIyOm5vd3JhcFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3N0eWxlLWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCIzOm5vd3JhcFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3N0eWxlLWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCI0Om5vd3JhcFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3N0eWxlLWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCI1Om5vd3JhcFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3N0eWxlLWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCI2Om5vd3JhcFwiXG4gICAgfVxuICB9KV0sIDEpXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0wYTQ0M2VhOVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMGE0NDNlYTkhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9zdHlsZS9zdHlsZS1mbGV4LnZ1ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAyMDVcbi8vIG1vZHVsZSBjaHVua3MgPSA1OSJdLCJzb3VyY2VSb290IjoiIn0=