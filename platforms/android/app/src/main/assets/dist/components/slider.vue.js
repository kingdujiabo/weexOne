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
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-rewriter?id=data-v-9adca918!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./slider.vue?entry=true\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(42),
	  /* template */
	  __webpack_require__(49),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\components\\slider.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] slider.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-9adca918", Component.options)
	  } else {
	    hotAPI.reload("data-v-9adca918", Component.options)
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

/***/ 42:
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
	
	var img0 = '//gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg';
	var img1 = '//gw.alicdn.com/tps/i1/TB1M3sQMpXXXXakXXXXApNeJVXX-360-360.png';
	module.exports = {
	  data: function () {
	    return {
	      eventCnt: 0,
	      togglePlayMsg: 'pause',
	      sliders: [{
	        interval: 1000,
	        autoPlay: true,
	        sliderPages: [{
	          items: [{
	            image: img0,
	            link: '//h5.m.taobao.com/1'
	          }, {
	            image: img0,
	            link: '//h5.m.taobao.com/1'
	          }]
	        }, {
	          items: [{
	            image: img1,
	            link: '//h5.m.taobao.com/1'
	          }, {
	            image: img1,
	            link: '//h5.m.taobao.com/1'
	          }]
	        }, {
	          items: [{
	            image: img0,
	            link: '//h5.m.taobao.com/1'
	          }, {
	            image: img1,
	            link: '//h5.m.taobao.com/1'
	          }]
	        }]
	      }, {
	        interval: 3000,
	        autoPlay: true,
	        sliderPages: [{
	          items: [{
	            image: img0,
	            link: '//h5.m.taobao.com/1'
	          }, {
	            image: img0,
	            link: '//h5.m.taobao.com/1'
	          }]
	        }, {
	          items: [{
	            image: img1,
	            link: '//h5.m.taobao.com/1'
	          }, {
	            image: img1,
	            link: '//h5.m.taobao.com/1'
	          }]
	        }, {
	          items: [{
	            image: img0,
	            link: '//h5.m.taobao.com/1'
	          }, {
	            image: img1,
	            link: '//h5.m.taobao.com/1'
	          }]
	        }]
	      }, {
	        interval: 5000,
	        autoPlay: true,
	        sliderPages: [{
	          items: [{
	            image: img0,
	            link: '//h5.m.taobao.com/1'
	          }, {
	            image: img0,
	            link: '//h5.m.taobao.com/1'
	          }]
	        }, {
	          items: [{
	            image: img1,
	            link: '//h5.m.taobao.com/1'
	          }, {
	            image: img1,
	            link: '//h5.m.taobao.com/1'
	          }]
	        }, {
	          items: [{
	            image: img0,
	            link: '//h5.m.taobao.com/1'
	          }, {
	            image: img1,
	            link: '//h5.m.taobao.com/1'
	          }]
	        }]
	      }]
	    };
	  },
	  components: {
	    panel: __webpack_require__(3),
	    sliderPage: __webpack_require__(43)
	  },
	  methods: {
	    togglePlay: function () {
	      var autoPlay = this.sliders[0].autoPlay;
	      autoPlay = !autoPlay;
	      this.sliders[0].autoPlay = autoPlay;
	      this.togglePlayMsg = autoPlay ? 'pause' : 'play';
	    },
	    handleSliderChange: function () {
	      var nowCnt = this.eventCnt + 1;
	      this.eventCnt = nowCnt;
	    },
	    setInterval1: function () {
	      this.sliders[0].interval = 1000;
	    },
	    setInterval3: function () {
	      this.sliders[0].interval = 3000;
	    },
	    setInterval5: function () {
	      this.sliders[0].interval = 5000;
	    }
	  }
	};

/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-rewriter?id=data-v-1cf0310e!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./slider-page.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(44),
	  /* template */
	  __webpack_require__(48),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\include\\slider-page.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] slider-page.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1cf0310e", Component.options)
	  } else {
	    hotAPI.reload("data-v-1cf0310e", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },

/***/ 44:
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
	
	module.exports = {
	  props: {
	    items: { default: [] }
	  },
	  components: {
	    sliderItem: __webpack_require__(45)
	  }
	};

/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-rewriter?id=data-v-2fe56792!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./slider-item.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(46),
	  /* template */
	  __webpack_require__(47),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\include\\slider-item.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] slider-item.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2fe56792", Component.options)
	  } else {
	    hotAPI.reload("data-v-2fe56792", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },

/***/ 46:
/***/ function(module, exports) {

	//
	//
	//
	//
	
	module.exports = {
	  props: {
	    image: { default: '' },
	    link: { default: '' }
	  }
	};

/***/ },

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('image', {
	    staticClass: "slider-item",
	    attrs: {
	      "src": _vm.image
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2fe56792", module.exports)
	  }
	}

/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "slider-page"
	  }, _vm._l((_vm.items), function(v) {
	    return _c('slider-item', {
	      attrs: {
	        "image": v.image,
	        "link": v.link
	      }
	    })
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1cf0310e", module.exports)
	  }
	}

/***/ },

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    staticClass: "body"
	  }, [_c('panel', {
	    attrs: {
	      "title": "auto-play",
	      "type": "primary"
	    }
	  }, [_c('panel', {
	    attrs: {
	      "title": "auto-play = false",
	      "padding-body": "0"
	    }
	  }, [_c('slider', {
	    staticClass: "slider",
	    attrs: {
	      "append": "tree",
	      "interval": _vm.sliders[1].interval,
	      "autoPlay": "false"
	    }
	  }, [_c('indicator', {
	    staticClass: "indicator"
	  }), _vm._v(" "), _vm._l((_vm.sliders[1].sliderPages), function(v) {
	    return _c('slider-page', {
	      attrs: {
	        "items": v.items
	      }
	    })
	  })], 2)], 1), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "auto-play = true",
	      "padding-body": "0"
	    }
	  }, [_c('slider', {
	    staticClass: "slider",
	    attrs: {
	      "append": "tree",
	      "interval": _vm.sliders[0].interval,
	      "autoPlay": _vm.sliders[0].autoPlay
	    }
	  }, [_c('indicator', {
	    staticClass: "indicator"
	  }), _vm._v(" "), _vm._l((_vm.sliders[0].sliderPages), function(v) {
	    return _c('slider-page', {
	      attrs: {
	        "items": v.items
	      }
	    })
	  })], 2)], 1)], 1), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": 'Event, ' + _vm.eventCnt + ' change',
	      "type": "primary"
	    }
	  }, [_c('slider', {
	    staticClass: "slider",
	    attrs: {
	      "append": "tree",
	      "interval": _vm.sliders[0].interval,
	      "autoPlay": _vm.sliders[0].autoPlay
	    },
	    on: {
	      "change": _vm.handleSliderChange
	    }
	  }, [_c('indicator', {
	    staticClass: "indicator"
	  }), _vm._v(" "), _vm._l((_vm.sliders[0].sliderPages), function(v) {
	    return _c('slider-page', {
	      attrs: {
	        "items": v.items
	      }
	    })
	  })], 2)], 1), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "Indicator",
	      "type": "primary"
	    }
	  }, [_c('panel', {
	    attrs: {
	      "title": "default style",
	      "padding-body": "0"
	    }
	  }, [_c('slider', {
	    staticClass: "slider",
	    attrs: {
	      "append": "tree",
	      "interval": _vm.sliders[0].interval,
	      "autoPlay": _vm.sliders[0].autoPlay
	    },
	    on: {
	      "change": _vm.handleSliderChange
	    }
	  }, [_c('indicator', {
	    staticClass: "indicator"
	  }), _vm._v(" "), _vm._l((_vm.sliders[0].sliderPages), function(v) {
	    return _c('slider-page', {
	      attrs: {
	        "items": v.items
	      }
	    })
	  })], 2)], 1), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "width & height",
	      "padding-body": "0"
	    }
	  }, [_c('slider', {
	    staticClass: "slider",
	    attrs: {
	      "append": "tree",
	      "interval": _vm.sliders[0].interval,
	      "autoPlay": _vm.sliders[0].autoPlay
	    }
	  }, [_c('indicator', {
	    staticStyle: {
	      "itemColor": "#dddddd",
	      "width": "714",
	      "height": "460"
	    }
	  }), _vm._v(" "), _vm._l((_vm.sliders[0].sliderPages), function(v) {
	    return _c('slider-page', {
	      attrs: {
	        "items": v.items
	      }
	    })
	  })], 2)], 1), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "left & top",
	      "padding-body": "0"
	    }
	  }, [_c('slider', {
	    staticClass: "slider",
	    attrs: {
	      "append": "tree",
	      "interval": _vm.sliders[1].interval,
	      "autoPlay": _vm.sliders[1].autoPlay
	    }
	  }, [_c('indicator', {
	    staticClass: "indicator",
	    staticStyle: {
	      "top": "-140",
	      "left": "-240"
	    }
	  }), _vm._v(" "), _vm._l((_vm.sliders[1].sliderPages), function(v) {
	    return _c('slider-page', {
	      attrs: {
	        "items": v.items
	      }
	    })
	  })], 2)], 1), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "itemColor & itemSelectedColor",
	      "padding-body": "0"
	    }
	  }, [_c('slider', {
	    staticClass: "slider",
	    attrs: {
	      "append": "tree",
	      "interval": _vm.sliders[2].interval,
	      "autoPlay": _vm.sliders[2].autoPlay
	    }
	  }, [_c('indicator', {
	    staticClass: "indicator",
	    staticStyle: {
	      "itemSelectedColor": "rgb(217, 83, 79)"
	    }
	  }), _vm._v(" "), _vm._l((_vm.sliders[2].sliderPages), function(v) {
	    return _c('slider-page', {
	      attrs: {
	        "items": v.items
	      }
	    })
	  })], 2)], 1), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "itemSize",
	      "padding-body": "0"
	    }
	  }, [_c('slider', {
	    staticClass: "slider",
	    attrs: {
	      "append": "tree",
	      "interval": _vm.sliders[1].interval,
	      "autoPlay": _vm.sliders[1].autoPlay
	    }
	  }, [_c('indicator', {
	    staticStyle: {
	      "itemColor": "#dddddd",
	      "itemSize": "40",
	      "top": "140",
	      "left": "180",
	      "width": "700",
	      "height": "380"
	    }
	  }), _vm._v(" "), _vm._l((_vm.sliders[1].sliderPages), function(v) {
	    return _c('slider-page', {
	      attrs: {
	        "items": v.items
	      }
	    })
	  })], 2)], 1)], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-9adca918", module.exports)
	  }
	}

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQ/ZWQ2NCoqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zbGlkZXIudnVlIiwid2VicGFjazovLy8uL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanM/ZDRmMyoqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9wYW5lbC52dWU/NGVjNioqKioqKioiLCJ3ZWJwYWNrOi8vL3BhbmVsLnZ1ZT81YmFkKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9wYW5lbC52dWU/ZDliOCoqKioqKioiLCJ3ZWJwYWNrOi8vL3NsaWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvc2xpZGVyLXBhZ2UudnVlIiwid2VicGFjazovLy9zbGlkZXItcGFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvc2xpZGVyLWl0ZW0udnVlIiwid2VicGFjazovLy9zbGlkZXItaXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvc2xpZGVyLWl0ZW0udnVlPzg0YjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvc2xpZGVyLXBhZ2UudnVlP2U4YjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2xpZGVyLnZ1ZT81M2UwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNyQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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SDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6ImNvbXBvbmVudHNcXHNsaWRlci52dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2ZGI5YzAwODlmNmQzODhiNGI0ZCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtOWFkY2E5MTghLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zbGlkZXIudnVlP2VudHJ5PXRydWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vc2xpZGVyLnZ1ZT9lbnRyeT10cnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTlhZGNhOTE4IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zbGlkZXIudnVlP2VudHJ5PXRydWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6XFxcXHdlZWtTdHVkeVxcXFx3ZWV4MlxcXFx3ZWV4M1xcXFxzcmNcXFxcY29tcG9uZW50c1xcXFxzbGlkZXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gc2xpZGVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi05YWRjYTkxOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTlhZGNhOTE4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3NsaWRlci52dWU/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIHNjb3BlSWQsXG4gIGNzc01vZHVsZXNcbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIC8vIGluamVjdCBjc3NNb2R1bGVzXG4gIGlmIChjc3NNb2R1bGVzKSB7XG4gICAgdmFyIGNvbXB1dGVkID0gb3B0aW9ucy5jb21wdXRlZCB8fCAob3B0aW9ucy5jb21wdXRlZCA9IHt9KVxuICAgIE9iamVjdC5rZXlzKGNzc01vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG1vZHVsZSA9IGNzc01vZHVsZXNba2V5XVxuICAgICAgY29tcHV0ZWRba2V5XSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vZHVsZSB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IDM4IDM5IDQwIDQxIDQyIDQzIDQ0IDQ1IDQ2IDQ3IDQ4IDQ5IDUwIDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDU5IDYwIDYxIDYyIDYzIDY0IDY1IDY2IDY3IDY4IDY5IDcwIDcxIDcyIDczIDc0IDc1IDc2IDc3IDc4IDc5IDgwIDgxIDgyIDgzIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0xYTM4MTI1MiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhbmVsLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wYW5lbC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMWEzODEyNTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3BhbmVsLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTpcXFxcd2Vla1N0dWR5XFxcXHdlZXgyXFxcXHdlZXgzXFxcXHNyY1xcXFxpbmNsdWRlXFxcXHBhbmVsLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHBhbmVsLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xYTM4MTI1MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTFhMzgxMjUyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmNsdWRlL3BhbmVsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA2IDcgOSAxMSAzNyAzOCAzOSA0MCA0MSA1NiA1NyA1OCA1OSA4MyIsIjwhLS0gSW5zcGlyZWQgYnkgYm9vdHN0cmFwIGh0dHA6Ly9nZXRib290c3RyYXAuY29tLyAtLT5cclxuPHRlbXBsYXRlPlxyXG4gIDxkaXZcclxuICAgIDpjbGFzcz1cIlsncGFuZWwnLCAncGFuZWwtJyArIHR5cGVdXCJcclxuICAgIDpzdHlsZT1cInsgYm9yZGVyV2lkdGg6IGJvcmRlciB9XCI+XHJcbiAgICA8dGV4dFxyXG4gICAgICA6Y2xhc3M9XCJbJ3BhbmVsLWhlYWRlcicsICdwYW5lbC1oZWFkZXItJyArIHR5cGVdXCJcclxuICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgIHBhZGRpbmdUb3A6IHBhZGRpbmdIZWFkLFxyXG4gICAgICAgIHBhZGRpbmdCb3R0b206IHBhZGRpbmdIZWFkLFxyXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBwYWRkaW5nSGVhZCoxLjUsXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nSGVhZCoxLjVcclxuICAgICAgfVwiPnt7dGl0bGV9fTwvdGV4dD5cclxuICAgIDxkaXZcclxuICAgICAgOmNsYXNzPVwiWydwYW5lbC1ib2R5JywgJ3BhbmVsLWJvZHktJyArIHR5cGVdXCJcclxuICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgIHBhZGRpbmdUb3A6IHBhZGRpbmdCb2R5LFxyXG4gICAgICAgIHBhZGRpbmdCb3R0b206IHBhZGRpbmdCb2R5LFxyXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBwYWRkaW5nQm9keSoxLjUsXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nQm9keSoxLjVcclxuICAgICAgfVwiPlxyXG4gICAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB0eXBlOiB7IGRlZmF1bHQ6ICdkZWZhdWx0JyB9LFxyXG4gICAgICB0aXRsZTogeyBkZWZhdWx0OiAnJyB9LFxyXG4gICAgICBwYWRkaW5nQm9keTogeyBkZWZhdWx0OiAyMCB9LFxyXG4gICAgICBwYWRkaW5nSGVhZDogeyBkZWZhdWx0OiAyMCB9LFxyXG4gICAgICBkYXRhQ2xhc3M6IHsgZGVmYXVsdDogJycgfSwgLy8gRklYTUUgdHJhbnNmZXIgY2xhc3NcclxuICAgICAgYm9yZGVyOnsgZGVmYXVsdDogMCB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICAucGFuZWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAvKmJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyovXHJcbiAgICAvKmJvcmRlci1yYWRpdXM6IDEwcHg7Ki9cclxuICAgIC8qLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpOyovXHJcbiAgICAvKmJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSk7Ki9cclxuICAgIGJvcmRlci1jb2xvcjogI2RkZGRkZDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWRlZmF1bHQge1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLXByaW1hcnkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNDAsIDk2LCAxNDQpO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLXN1Y2Nlc3Mge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNzYsIDE3NCwgNzYpO1xyXG5cclxuICB9XHJcblxyXG4gIC5wYW5lbC1pbmZvIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDcwLCAxODQsIDIxOCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLnBhbmVsLXdhcm5pbmcge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM4LCAxNjIsIDU0KTtcclxuXHJcbiAgfVxyXG5cclxuICAucGFuZWwtZGFuZ2VyIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIxMiwgNjMsIDU4KTtcclxuXHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAvKnBhZGRpbmctbGVmdDogMTJweDsqL1xyXG4gICAgLypwYWRkaW5nLXJpZ2h0OiAxMnB4OyovXHJcbiAgICAvKnBhZGRpbmctdG9wOiAyMHB4OyovXHJcbiAgICAvKnBhZGRpbmctYm90dG9tOiAyMHB4OyovXHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXItZGVmYXVsdCB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA5NiwgMTQ0KTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlci1zdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgMTg0LCA5Mik7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXItaW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDE5MiwgMjIyKTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlci13YXJuaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE3MywgNzgpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyLWRhbmdlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE3LCA4MywgNzkpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtYm9keSB7XHJcbiAgICAvKnBhZGRpbmctbGVmdDogMTJweDsqL1xyXG4gICAgLypwYWRkaW5nLXJpZ2h0OiAxMnB4OyovXHJcbiAgICAvKnBhZGRpbmctdG9wOiAyMHB4OyovXHJcbiAgICAvKnBhZGRpbmctYm90dG9tOiAyMHB4OyovXHJcbiAgfVxyXG5cclxuICAucGFuZWwtYm9keS1kZWZhdWx0IHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5LXByaW1hcnkge1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHktc3VjY2VzcyB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtYm9keS1pbmZvIHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5LXdhcm5pbmcge1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHktZGFuZ2VyIHtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwYW5lbC52dWU/NDdjMjNlNDYiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBjbGFzczogWydwYW5lbCcsICdwYW5lbC0nICsgX3ZtLnR5cGVdLFxuICAgIHN0eWxlOiAoe1xuICAgICAgYm9yZGVyV2lkdGg6IF92bS5ib3JkZXJcbiAgICB9KVxuICB9LCBbX2MoJ3RleHQnLCB7XG4gICAgY2xhc3M6IFsncGFuZWwtaGVhZGVyJywgJ3BhbmVsLWhlYWRlci0nICsgX3ZtLnR5cGVdLFxuICAgIHN0eWxlOiAoe1xuICAgICAgcGFkZGluZ1RvcDogX3ZtLnBhZGRpbmdIZWFkLFxuICAgICAgcGFkZGluZ0JvdHRvbTogX3ZtLnBhZGRpbmdIZWFkLFxuICAgICAgcGFkZGluZ0xlZnQ6IF92bS5wYWRkaW5nSGVhZCAqIDEuNSxcbiAgICAgIHBhZGRpbmdSaWdodDogX3ZtLnBhZGRpbmdIZWFkICogMS41XG4gICAgfSlcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogWydwYW5lbC1ib2R5JywgJ3BhbmVsLWJvZHktJyArIF92bS50eXBlXSxcbiAgICBzdHlsZTogKHtcbiAgICAgIHBhZGRpbmdUb3A6IF92bS5wYWRkaW5nQm9keSxcbiAgICAgIHBhZGRpbmdCb3R0b206IF92bS5wYWRkaW5nQm9keSxcbiAgICAgIHBhZGRpbmdMZWZ0OiBfdm0ucGFkZGluZ0JvZHkgKiAxLjUsXG4gICAgICBwYWRkaW5nUmlnaHQ6IF92bS5wYWRkaW5nQm9keSAqIDEuNVxuICAgIH0pXG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMildKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0xYTM4MTI1MlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMWEzODEyNTIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9pbmNsdWRlL3BhbmVsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA2IDcgOSAxMSAzNyAzOCAzOSA0MCA0MSA1NiA1NyA1OCA1OSA4MyIsIjx0ZW1wbGF0ZT5cclxuICA8c2Nyb2xsZXIgY2xhc3M9XCJib2R5XCI+XHJcbiAgICA8cGFuZWwgdGl0bGU9XCJhdXRvLXBsYXlcIiB0eXBlPVwicHJpbWFyeVwiPlxyXG4gICAgICA8cGFuZWwgdGl0bGU9XCJhdXRvLXBsYXkgPSBmYWxzZVwiIHBhZGRpbmctYm9keT1cIjBcIj5cclxuICAgICAgICA8c2xpZGVyIGNsYXNzPVwic2xpZGVyXCIgYXBwZW5kPVwidHJlZVwiXHJcbiAgICAgICAgICA6aW50ZXJ2YWw9XCJzbGlkZXJzWzFdLmludGVydmFsXCJcclxuICAgICAgICAgIGF1dG9QbGF5PVwiZmFsc2VcIj5cclxuICAgICAgICAgIDxpbmRpY2F0b3IgY2xhc3M9XCJpbmRpY2F0b3JcIj48L2luZGljYXRvcj5cclxuICAgICAgICAgIDxzbGlkZXItcGFnZSB2LWZvcj1cInYgaW4gc2xpZGVyc1sxXS5zbGlkZXJQYWdlc1wiIDppdGVtcz1cInYuaXRlbXNcIj48L3NsaWRlci1wYWdlPlxyXG4gICAgICAgIDwvc2xpZGVyPlxyXG4gICAgICA8L3BhbmVsPlxyXG4gICAgICA8cGFuZWwgdGl0bGU9XCJhdXRvLXBsYXkgPSB0cnVlXCIgcGFkZGluZy1ib2R5PVwiMFwiPlxyXG4gICAgICAgIDxzbGlkZXIgY2xhc3M9XCJzbGlkZXJcIiBhcHBlbmQ9XCJ0cmVlXCJcclxuICAgICAgICAgIDppbnRlcnZhbD1cInNsaWRlcnNbMF0uaW50ZXJ2YWxcIlxyXG4gICAgICAgICAgOmF1dG9QbGF5PVwic2xpZGVyc1swXS5hdXRvUGxheVwiPlxyXG4gICAgICAgICAgPGluZGljYXRvciBjbGFzcz1cImluZGljYXRvclwiPjwvaW5kaWNhdG9yPlxyXG4gICAgICAgICAgPHNsaWRlci1wYWdlIHYtZm9yPVwidiBpbiBzbGlkZXJzWzBdLnNsaWRlclBhZ2VzXCIgOml0ZW1zPVwidi5pdGVtc1wiPjwvc2xpZGVyLXBhZ2U+XHJcbiAgICAgICAgPC9zbGlkZXI+XHJcbiAgICAgIDwvcGFuZWw+XHJcbiAgICA8L3BhbmVsPlxyXG4gICAgPHBhbmVsIDp0aXRsZT1cIidFdmVudCwgJyArIGV2ZW50Q250ICsgJyBjaGFuZ2UnXCIgdHlwZT1cInByaW1hcnlcIj5cclxuICAgICAgPHNsaWRlciBjbGFzcz1cInNsaWRlclwiIGFwcGVuZD1cInRyZWVcIlxyXG4gICAgICAgIDppbnRlcnZhbD1cInNsaWRlcnNbMF0uaW50ZXJ2YWxcIlxyXG4gICAgICAgIDphdXRvUGxheT1cInNsaWRlcnNbMF0uYXV0b1BsYXlcIlxyXG4gICAgICAgIEBjaGFuZ2U9XCJoYW5kbGVTbGlkZXJDaGFuZ2VcIj5cclxuICAgICAgICA8aW5kaWNhdG9yIGNsYXNzPVwiaW5kaWNhdG9yXCI+PC9pbmRpY2F0b3I+XHJcbiAgICAgICAgPHNsaWRlci1wYWdlIHYtZm9yPVwidiBpbiBzbGlkZXJzWzBdLnNsaWRlclBhZ2VzXCIgOml0ZW1zPVwidi5pdGVtc1wiPjwvc2xpZGVyLXBhZ2U+XHJcbiAgICAgIDwvc2xpZGVyPlxyXG4gICAgPC9wYW5lbD5cclxuICAgIDxwYW5lbCB0aXRsZT1cIkluZGljYXRvclwiIHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgIDxwYW5lbCB0aXRsZT1cImRlZmF1bHQgc3R5bGVcIiBwYWRkaW5nLWJvZHk9XCIwXCI+XHJcbiAgICAgICAgPHNsaWRlciBjbGFzcz1cInNsaWRlclwiIGFwcGVuZD1cInRyZWVcIlxyXG4gICAgICAgICAgOmludGVydmFsPVwic2xpZGVyc1swXS5pbnRlcnZhbFwiXHJcbiAgICAgICAgICA6YXV0b1BsYXk9XCJzbGlkZXJzWzBdLmF1dG9QbGF5XCJcclxuICAgICAgICAgIEBjaGFuZ2U9XCJoYW5kbGVTbGlkZXJDaGFuZ2VcIj5cclxuICAgICAgICAgIDxpbmRpY2F0b3IgY2xhc3M9XCJpbmRpY2F0b3JcIj48L2luZGljYXRvcj5cclxuICAgICAgICAgIDxzbGlkZXItcGFnZSB2LWZvcj1cInYgaW4gc2xpZGVyc1swXS5zbGlkZXJQYWdlc1wiIDppdGVtcz1cInYuaXRlbXNcIj48L3NsaWRlci1wYWdlPlxyXG4gICAgICAgIDwvc2xpZGVyPlxyXG4gICAgICA8L3BhbmVsPlxyXG4gICAgICA8cGFuZWwgdGl0bGU9XCJ3aWR0aCAmIGhlaWdodFwiIHBhZGRpbmctYm9keT1cIjBcIj5cclxuICAgICAgICA8c2xpZGVyIGNsYXNzPVwic2xpZGVyXCIgYXBwZW5kPVwidHJlZVwiXHJcbiAgICAgICAgICA6aW50ZXJ2YWw9XCJzbGlkZXJzWzBdLmludGVydmFsXCJcclxuICAgICAgICAgIDphdXRvUGxheT1cInNsaWRlcnNbMF0uYXV0b1BsYXlcIj5cclxuICAgICAgICAgIDxpbmRpY2F0b3Igc3R5bGU9XCJpdGVtQ29sb3I6ICNkZGRkZGQ7d2lkdGg6NzE0O2hlaWdodDo0NjA7XCI+PC9pbmRpY2F0b3I+XHJcbiAgICAgICAgICA8c2xpZGVyLXBhZ2Ugdi1mb3I9XCJ2IGluIHNsaWRlcnNbMF0uc2xpZGVyUGFnZXNcIiA6aXRlbXM9XCJ2Lml0ZW1zXCI+PC9zbGlkZXItcGFnZT5cclxuICAgICAgICA8L3NsaWRlcj5cclxuICAgICAgPC9wYW5lbD5cclxuICAgICAgPHBhbmVsIHRpdGxlPVwibGVmdCAmIHRvcFwiIHBhZGRpbmctYm9keT1cIjBcIj5cclxuICAgICAgICA8c2xpZGVyIGNsYXNzPVwic2xpZGVyXCIgYXBwZW5kPVwidHJlZVwiXHJcbiAgICAgICAgICA6aW50ZXJ2YWw9XCJzbGlkZXJzWzFdLmludGVydmFsXCJcclxuICAgICAgICAgIDphdXRvUGxheT1cInNsaWRlcnNbMV0uYXV0b1BsYXlcIj5cclxuICAgICAgICAgIDxpbmRpY2F0b3IgY2xhc3M9XCJpbmRpY2F0b3JcIiBzdHlsZT1cInRvcDotMTQwO2xlZnQ6LTI0MFwiPjwvaW5kaWNhdG9yPlxyXG4gICAgICAgICAgPHNsaWRlci1wYWdlIHYtZm9yPVwidiBpbiBzbGlkZXJzWzFdLnNsaWRlclBhZ2VzXCIgOml0ZW1zPVwidi5pdGVtc1wiPjwvc2xpZGVyLXBhZ2U+XHJcbiAgICAgICAgPC9zbGlkZXI+XHJcbiAgICAgIDwvcGFuZWw+XHJcbiAgICAgIDxwYW5lbCB0aXRsZT1cIml0ZW1Db2xvciAmIGl0ZW1TZWxlY3RlZENvbG9yXCIgcGFkZGluZy1ib2R5PVwiMFwiPlxyXG4gICAgICAgIDxzbGlkZXIgY2xhc3M9XCJzbGlkZXJcIiBhcHBlbmQ9XCJ0cmVlXCJcclxuICAgICAgICAgIDppbnRlcnZhbD1cInNsaWRlcnNbMl0uaW50ZXJ2YWxcIlxyXG4gICAgICAgICAgOmF1dG9QbGF5PVwic2xpZGVyc1syXS5hdXRvUGxheVwiPlxyXG4gICAgICAgICAgPGluZGljYXRvciBjbGFzcz1cImluZGljYXRvclwiIHN0eWxlPVwiaXRlbVNlbGVjdGVkQ29sb3I6cmdiKDIxNywgODMsIDc5KTtcIj48L2luZGljYXRvcj5cclxuICAgICAgICAgIDxzbGlkZXItcGFnZSB2LWZvcj1cInYgaW4gc2xpZGVyc1syXS5zbGlkZXJQYWdlc1wiIDppdGVtcz1cInYuaXRlbXNcIj48L3NsaWRlci1wYWdlPlxyXG4gICAgICAgIDwvc2xpZGVyPlxyXG4gICAgICA8L3BhbmVsPlxyXG4gICAgICA8cGFuZWwgdGl0bGU9XCJpdGVtU2l6ZVwiIHBhZGRpbmctYm9keT1cIjBcIj5cclxuICAgICAgICA8c2xpZGVyIGNsYXNzPVwic2xpZGVyXCIgYXBwZW5kPVwidHJlZVwiXHJcbiAgICAgICAgICA6aW50ZXJ2YWw9XCJzbGlkZXJzWzFdLmludGVydmFsXCJcclxuICAgICAgICAgIDphdXRvUGxheT1cInNsaWRlcnNbMV0uYXV0b1BsYXlcIj5cclxuICAgICAgICAgIDxpbmRpY2F0b3Igc3R5bGU9XCJpdGVtQ29sb3I6ICNkZGRkZGQ7aXRlbVNpemU6NDA7dG9wOjE0MDtsZWZ0OjE4MDt3aWR0aDo3MDA7aGVpZ2h0OjM4MDtcIj48L2luZGljYXRvcj5cclxuICAgICAgICAgIDxzbGlkZXItcGFnZSB2LWZvcj1cInYgaW4gc2xpZGVyc1sxXS5zbGlkZXJQYWdlc1wiIDppdGVtcz1cInYuaXRlbXNcIj48L3NsaWRlci1wYWdlPlxyXG4gICAgICAgIDwvc2xpZGVyPlxyXG4gICAgICA8L3BhbmVsPlxyXG4gICAgPC9wYW5lbD5cclxuICA8L3Njcm9sbGVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICB2YXIgaW1nMCA9ICcvL2d3LmFsaWNkbi5jb20vdHBzL2kyL1RCMURwc21NcFhYWFhhYmFYWFgyMHlTUVZYWC01MTItNTEyLnBuZ180MDB4NDAwLmpwZyc7XHJcbiAgdmFyIGltZzEgPSAnLy9ndy5hbGljZG4uY29tL3Rwcy9pMS9UQjFNM3NRTXBYWFhYYWtYWFhYQXBOZUpWWFgtMzYwLTM2MC5wbmcnO1xyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGV2ZW50Q250OiAwLFxyXG4gICAgICAgIHRvZ2dsZVBsYXlNc2c6ICdwYXVzZScsXHJcbiAgICAgICAgc2xpZGVyczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpbnRlcnZhbDogMTAwMCxcclxuICAgICAgICAgICAgYXV0b1BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIHNsaWRlclBhZ2VzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBpbWcwLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICcvL2g1Lm0udGFvYmFvLmNvbS8xJ1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGltZzAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogJy8vaDUubS50YW9iYW8uY29tLzEnXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogaW1nMSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnLy9oNS5tLnRhb2Jhby5jb20vMSdcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBpbWcxLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICcvL2g1Lm0udGFvYmFvLmNvbS8xJ1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGltZzAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogJy8vaDUubS50YW9iYW8uY29tLzEnXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogaW1nMSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnLy9oNS5tLnRhb2Jhby5jb20vMSdcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaW50ZXJ2YWw6IDMwMDAsXHJcbiAgICAgICAgICAgIGF1dG9QbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBzbGlkZXJQYWdlczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGltYWdlOiBpbWcwLFxyXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnLy9oNS5tLnRhb2Jhby5jb20vMSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGltYWdlOiBpbWcwLFxyXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnLy9oNS5tLnRhb2Jhby5jb20vMSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGltYWdlOiBpbWcxLFxyXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnLy9oNS5tLnRhb2Jhby5jb20vMSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGltYWdlOiBpbWcxLFxyXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnLy9oNS5tLnRhb2Jhby5jb20vMSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGltYWdlOiBpbWcwLFxyXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnLy9oNS5tLnRhb2Jhby5jb20vMSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGltYWdlOiBpbWcxLFxyXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnLy9oNS5tLnRhb2Jhby5jb20vMSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaW50ZXJ2YWw6IDUwMDAsXHJcbiAgICAgICAgICAgICAgYXV0b1BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgc2xpZGVyUGFnZXM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpbWFnZTogaW1nMCxcclxuICAgICAgICAgICAgICAgICAgbGluazogJy8vaDUubS50YW9iYW8uY29tLzEnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpbWFnZTogaW1nMCxcclxuICAgICAgICAgICAgICAgICAgbGluazogJy8vaDUubS50YW9iYW8uY29tLzEnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpbWFnZTogaW1nMSxcclxuICAgICAgICAgICAgICAgICAgbGluazogJy8vaDUubS50YW9iYW8uY29tLzEnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpbWFnZTogaW1nMSxcclxuICAgICAgICAgICAgICAgICAgbGluazogJy8vaDUubS50YW9iYW8uY29tLzEnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpbWFnZTogaW1nMCxcclxuICAgICAgICAgICAgICAgICAgbGluazogJy8vaDUubS50YW9iYW8uY29tLzEnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpbWFnZTogaW1nMSxcclxuICAgICAgICAgICAgICAgICAgbGluazogJy8vaDUubS50YW9iYW8uY29tLzEnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIHBhbmVsOiByZXF1aXJlKCcuLi9pbmNsdWRlL3BhbmVsLnZ1ZScpLFxyXG4gICAgICBzbGlkZXJQYWdlOiByZXF1aXJlKCcuLi9pbmNsdWRlL3NsaWRlci1wYWdlLnZ1ZScpXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICB0b2dnbGVQbGF5OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgYXV0b1BsYXkgPSB0aGlzLnNsaWRlcnNbMF0uYXV0b1BsYXlcclxuICAgICAgICBhdXRvUGxheSA9ICFhdXRvUGxheVxyXG4gICAgICAgIHRoaXMuc2xpZGVyc1swXS5hdXRvUGxheSA9IGF1dG9QbGF5XHJcbiAgICAgICAgdGhpcy50b2dnbGVQbGF5TXNnID0gYXV0b1BsYXkgPyAncGF1c2UnIDogJ3BsYXknXHJcbiAgICAgIH0sXHJcbiAgICAgIGhhbmRsZVNsaWRlckNoYW5nZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIG5vd0NudCA9IHRoaXMuZXZlbnRDbnQgKyAxXHJcbiAgICAgICAgdGhpcy5ldmVudENudCA9IG5vd0NudFxyXG4gICAgICB9LFxyXG4gICAgICBzZXRJbnRlcnZhbDE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2xpZGVyc1swXS5pbnRlcnZhbCA9IDEwMDA7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNldEludGVydmFsMzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJzWzBdLmludGVydmFsID0gMzAwMDtcclxuICAgICAgfSxcclxuICAgICAgc2V0SW50ZXJ2YWw1OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnNsaWRlcnNbMF0uaW50ZXJ2YWwgPSA1MDAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgLmJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5zbGlkZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIC8qbWFyZ2luLWxlZnQ6IDE4OyovXHJcbiAgICAvKm1hcmdpbi1yaWdodDogMTg7Ki9cclxuICAgIHdpZHRoOiA2OTA7XHJcbiAgICBoZWlnaHQ6IDM2MDtcclxuICB9XHJcblxyXG4gIC5pbmRpY2F0b3Ige1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDY5MDtcclxuICAgIGhlaWdodDogNDIwO1xyXG4gICAgdG9wOiAxNDA7XHJcbiAgICBsZWZ0OiAyNDA7XHJcbiAgICBpdGVtQ29sb3I6ICNkZGRkZGQ7XHJcbiAgICBpdGVtU2VsZWN0ZWRDb2xvcjogcmdiKDQwLCA5NiwgMTQ0KTtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzbGlkZXIudnVlP2QxNWM5MGZjIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0xY2YwMzEwZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NsaWRlci1wYWdlLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zbGlkZXItcGFnZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMWNmMDMxMGUhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NsaWRlci1wYWdlLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTpcXFxcd2Vla1N0dWR5XFxcXHdlZXgyXFxcXHdlZXgzXFxcXHNyY1xcXFxpbmNsdWRlXFxcXHNsaWRlci1wYWdlLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHNsaWRlci1wYWdlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xY2YwMzEwZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTFjZjAzMTBlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmNsdWRlL3NsaWRlci1wYWdlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJzbGlkZXItcGFnZVwiPlxyXG4gICAgPHNsaWRlci1pdGVtIHYtZm9yPVwidiBpbiBpdGVtc1wiIDppbWFnZT1cInYuaW1hZ2VcIiA6bGluaz1cInYubGlua1wiPjwvc2xpZGVyLWl0ZW0+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGU+XHJcbiAgLnNsaWRlci1wYWdlIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgd2lkdGg6IDcxNHB4O1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgaXRlbXM6IHsgZGVmYXVsdDogW10gfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgc2xpZGVySXRlbTogcmVxdWlyZSgnLi9zbGlkZXItaXRlbS52dWUnKVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc2xpZGVyLXBhZ2UudnVlPzE0MjY0ODhlIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0yZmU1Njc5MiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NsaWRlci1pdGVtLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zbGlkZXItaXRlbS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMmZlNTY3OTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NsaWRlci1pdGVtLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTpcXFxcd2Vla1N0dWR5XFxcXHdlZXgyXFxcXHdlZXgzXFxcXHNyY1xcXFxpbmNsdWRlXFxcXHNsaWRlci1pdGVtLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHNsaWRlci1pdGVtLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yZmU1Njc5MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJmZTU2NzkyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmNsdWRlL3NsaWRlci1pdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSA5IDMxIiwiPHRlbXBsYXRlPlxyXG4gIDxpbWFnZSBjbGFzcz1cInNsaWRlci1pdGVtXCIgOnNyYz1cImltYWdlXCI+PC9pbWFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBpbWFnZTogeyBkZWZhdWx0OiAnJyB9LFxyXG4gICAgICBsaW5rOiB7IGRlZmF1bHQ6ICcnIH0sXHJcbiAgICB9XHJcbiAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgLnNsaWRlci1pdGVtIHtcclxuICAgIHdpZHRoOiAzNDhweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc2xpZGVyLWl0ZW0udnVlPzc4YjA2YTMxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdpbWFnZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzbGlkZXItaXRlbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uaW1hZ2VcbiAgICB9XG4gIH0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTJmZTU2NzkyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yZmU1Njc5MiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2luY2x1ZGUvc2xpZGVyLWl0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDkgMzEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzbGlkZXItcGFnZVwiXG4gIH0sIF92bS5fbCgoX3ZtLml0ZW1zKSwgZnVuY3Rpb24odikge1xuICAgIHJldHVybiBfYygnc2xpZGVyLWl0ZW0nLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImltYWdlXCI6IHYuaW1hZ2UsXG4gICAgICAgIFwibGlua1wiOiB2LmxpbmtcbiAgICAgIH1cbiAgICB9KVxuICB9KSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMWNmMDMxMGVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTFjZjAzMTBlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvaW5jbHVkZS9zbGlkZXItcGFnZS52dWVcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnc2Nyb2xsZXInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm9keVwiXG4gIH0sIFtfYygncGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJhdXRvLXBsYXlcIixcbiAgICAgIFwidHlwZVwiOiBcInByaW1hcnlcIlxuICAgIH1cbiAgfSwgW19jKCdwYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcImF1dG8tcGxheSA9IGZhbHNlXCIsXG4gICAgICBcInBhZGRpbmctYm9keVwiOiBcIjBcIlxuICAgIH1cbiAgfSwgW19jKCdzbGlkZXInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2xpZGVyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYXBwZW5kXCI6IFwidHJlZVwiLFxuICAgICAgXCJpbnRlcnZhbFwiOiBfdm0uc2xpZGVyc1sxXS5pbnRlcnZhbCxcbiAgICAgIFwiYXV0b1BsYXlcIjogXCJmYWxzZVwiXG4gICAgfVxuICB9LCBbX2MoJ2luZGljYXRvcicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbmRpY2F0b3JcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uc2xpZGVyc1sxXS5zbGlkZXJQYWdlcyksIGZ1bmN0aW9uKHYpIHtcbiAgICByZXR1cm4gX2MoJ3NsaWRlci1wYWdlJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJpdGVtc1wiOiB2Lml0ZW1zXG4gICAgICB9XG4gICAgfSlcbiAgfSldLCAyKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJhdXRvLXBsYXkgPSB0cnVlXCIsXG4gICAgICBcInBhZGRpbmctYm9keVwiOiBcIjBcIlxuICAgIH1cbiAgfSwgW19jKCdzbGlkZXInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2xpZGVyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYXBwZW5kXCI6IFwidHJlZVwiLFxuICAgICAgXCJpbnRlcnZhbFwiOiBfdm0uc2xpZGVyc1swXS5pbnRlcnZhbCxcbiAgICAgIFwiYXV0b1BsYXlcIjogX3ZtLnNsaWRlcnNbMF0uYXV0b1BsYXlcbiAgICB9XG4gIH0sIFtfYygnaW5kaWNhdG9yJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImluZGljYXRvclwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5zbGlkZXJzWzBdLnNsaWRlclBhZ2VzKSwgZnVuY3Rpb24odikge1xuICAgIHJldHVybiBfYygnc2xpZGVyLXBhZ2UnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcIml0ZW1zXCI6IHYuaXRlbXNcbiAgICAgIH1cbiAgICB9KVxuICB9KV0sIDIpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6ICdFdmVudCwgJyArIF92bS5ldmVudENudCArICcgY2hhbmdlJyxcbiAgICAgIFwidHlwZVwiOiBcInByaW1hcnlcIlxuICAgIH1cbiAgfSwgW19jKCdzbGlkZXInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2xpZGVyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYXBwZW5kXCI6IFwidHJlZVwiLFxuICAgICAgXCJpbnRlcnZhbFwiOiBfdm0uc2xpZGVyc1swXS5pbnRlcnZhbCxcbiAgICAgIFwiYXV0b1BsYXlcIjogX3ZtLnNsaWRlcnNbMF0uYXV0b1BsYXlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBfdm0uaGFuZGxlU2xpZGVyQ2hhbmdlXG4gICAgfVxuICB9LCBbX2MoJ2luZGljYXRvcicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbmRpY2F0b3JcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uc2xpZGVyc1swXS5zbGlkZXJQYWdlcyksIGZ1bmN0aW9uKHYpIHtcbiAgICByZXR1cm4gX2MoJ3NsaWRlci1wYWdlJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJpdGVtc1wiOiB2Lml0ZW1zXG4gICAgICB9XG4gICAgfSlcbiAgfSldLCAyKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJJbmRpY2F0b3JcIixcbiAgICAgIFwidHlwZVwiOiBcInByaW1hcnlcIlxuICAgIH1cbiAgfSwgW19jKCdwYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcImRlZmF1bHQgc3R5bGVcIixcbiAgICAgIFwicGFkZGluZy1ib2R5XCI6IFwiMFwiXG4gICAgfVxuICB9LCBbX2MoJ3NsaWRlcicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzbGlkZXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJhcHBlbmRcIjogXCJ0cmVlXCIsXG4gICAgICBcImludGVydmFsXCI6IF92bS5zbGlkZXJzWzBdLmludGVydmFsLFxuICAgICAgXCJhdXRvUGxheVwiOiBfdm0uc2xpZGVyc1swXS5hdXRvUGxheVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IF92bS5oYW5kbGVTbGlkZXJDaGFuZ2VcbiAgICB9XG4gIH0sIFtfYygnaW5kaWNhdG9yJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImluZGljYXRvclwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5zbGlkZXJzWzBdLnNsaWRlclBhZ2VzKSwgZnVuY3Rpb24odikge1xuICAgIHJldHVybiBfYygnc2xpZGVyLXBhZ2UnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcIml0ZW1zXCI6IHYuaXRlbXNcbiAgICAgIH1cbiAgICB9KVxuICB9KV0sIDIpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdwYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIndpZHRoICYgaGVpZ2h0XCIsXG4gICAgICBcInBhZGRpbmctYm9keVwiOiBcIjBcIlxuICAgIH1cbiAgfSwgW19jKCdzbGlkZXInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2xpZGVyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYXBwZW5kXCI6IFwidHJlZVwiLFxuICAgICAgXCJpbnRlcnZhbFwiOiBfdm0uc2xpZGVyc1swXS5pbnRlcnZhbCxcbiAgICAgIFwiYXV0b1BsYXlcIjogX3ZtLnNsaWRlcnNbMF0uYXV0b1BsYXlcbiAgICB9XG4gIH0sIFtfYygnaW5kaWNhdG9yJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIml0ZW1Db2xvclwiOiBcIiNkZGRkZGRcIixcbiAgICAgIFwid2lkdGhcIjogXCI3MTRcIixcbiAgICAgIFwiaGVpZ2h0XCI6IFwiNDYwXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5zbGlkZXJzWzBdLnNsaWRlclBhZ2VzKSwgZnVuY3Rpb24odikge1xuICAgIHJldHVybiBfYygnc2xpZGVyLXBhZ2UnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcIml0ZW1zXCI6IHYuaXRlbXNcbiAgICAgIH1cbiAgICB9KVxuICB9KV0sIDIpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdwYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcImxlZnQgJiB0b3BcIixcbiAgICAgIFwicGFkZGluZy1ib2R5XCI6IFwiMFwiXG4gICAgfVxuICB9LCBbX2MoJ3NsaWRlcicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzbGlkZXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJhcHBlbmRcIjogXCJ0cmVlXCIsXG4gICAgICBcImludGVydmFsXCI6IF92bS5zbGlkZXJzWzFdLmludGVydmFsLFxuICAgICAgXCJhdXRvUGxheVwiOiBfdm0uc2xpZGVyc1sxXS5hdXRvUGxheVxuICAgIH1cbiAgfSwgW19jKCdpbmRpY2F0b3InLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5kaWNhdG9yXCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwidG9wXCI6IFwiLTE0MFwiLFxuICAgICAgXCJsZWZ0XCI6IFwiLTI0MFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uc2xpZGVyc1sxXS5zbGlkZXJQYWdlcyksIGZ1bmN0aW9uKHYpIHtcbiAgICByZXR1cm4gX2MoJ3NsaWRlci1wYWdlJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJpdGVtc1wiOiB2Lml0ZW1zXG4gICAgICB9XG4gICAgfSlcbiAgfSldLCAyKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJpdGVtQ29sb3IgJiBpdGVtU2VsZWN0ZWRDb2xvclwiLFxuICAgICAgXCJwYWRkaW5nLWJvZHlcIjogXCIwXCJcbiAgICB9XG4gIH0sIFtfYygnc2xpZGVyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNsaWRlclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImFwcGVuZFwiOiBcInRyZWVcIixcbiAgICAgIFwiaW50ZXJ2YWxcIjogX3ZtLnNsaWRlcnNbMl0uaW50ZXJ2YWwsXG4gICAgICBcImF1dG9QbGF5XCI6IF92bS5zbGlkZXJzWzJdLmF1dG9QbGF5XG4gICAgfVxuICB9LCBbX2MoJ2luZGljYXRvcicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbmRpY2F0b3JcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJpdGVtU2VsZWN0ZWRDb2xvclwiOiBcInJnYigyMTcsIDgzLCA3OSlcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLnNsaWRlcnNbMl0uc2xpZGVyUGFnZXMpLCBmdW5jdGlvbih2KSB7XG4gICAgcmV0dXJuIF9jKCdzbGlkZXItcGFnZScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaXRlbXNcIjogdi5pdGVtc1xuICAgICAgfVxuICAgIH0pXG4gIH0pXSwgMildLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiaXRlbVNpemVcIixcbiAgICAgIFwicGFkZGluZy1ib2R5XCI6IFwiMFwiXG4gICAgfVxuICB9LCBbX2MoJ3NsaWRlcicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzbGlkZXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJhcHBlbmRcIjogXCJ0cmVlXCIsXG4gICAgICBcImludGVydmFsXCI6IF92bS5zbGlkZXJzWzFdLmludGVydmFsLFxuICAgICAgXCJhdXRvUGxheVwiOiBfdm0uc2xpZGVyc1sxXS5hdXRvUGxheVxuICAgIH1cbiAgfSwgW19jKCdpbmRpY2F0b3InLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiaXRlbUNvbG9yXCI6IFwiI2RkZGRkZFwiLFxuICAgICAgXCJpdGVtU2l6ZVwiOiBcIjQwXCIsXG4gICAgICBcInRvcFwiOiBcIjE0MFwiLFxuICAgICAgXCJsZWZ0XCI6IFwiMTgwXCIsXG4gICAgICBcIndpZHRoXCI6IFwiNzAwXCIsXG4gICAgICBcImhlaWdodFwiOiBcIjM4MFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uc2xpZGVyc1sxXS5zbGlkZXJQYWdlcyksIGZ1bmN0aW9uKHYpIHtcbiAgICByZXR1cm4gX2MoJ3NsaWRlci1wYWdlJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJpdGVtc1wiOiB2Lml0ZW1zXG4gICAgICB9XG4gICAgfSlcbiAgfSldLCAyKV0sIDEpXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi05YWRjYTkxOFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtOWFkY2E5MTghLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL3NsaWRlci52dWU/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSA5Il0sInNvdXJjZVJvb3QiOiIifQ==