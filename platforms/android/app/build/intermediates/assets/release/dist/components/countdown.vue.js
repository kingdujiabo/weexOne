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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-rewriter?id=data-v-6b9c99ee!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./countdown.vue?entry=true\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(15),
	  /* template */
	  __webpack_require__(19),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\components\\countdown.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] countdown.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6b9c99ee", Component.options)
	  } else {
	    hotAPI.reload("data-v-6b9c99ee", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 1 */
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
/* 2 */,
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
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
	
	module.exports = {
	  data: function () {
	    return {
	      countdown1: {
	        remain: 5000,
	        time: {
	          D: '0',
	          hh: '00',
	          mm: '00',
	          ss: '00'
	        }
	      },
	      countdown2: {
	        remain: 5000,
	        time: {
	          MM: '0',
	          ss: '0'
	        }
	      }
	    };
	  },
	  components: {
	    panel: __webpack_require__(3),
	    countdown: __webpack_require__(16)
	  },
	  methods: {
	    tick: function (e, k) {
	      this[k].time = JSON.parse(JSON.stringify(e));
	    }
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-rewriter?id=data-v-750acf04!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./countdown.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(17),
	  /* template */
	  __webpack_require__(18),
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
/* 17 */
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
/* 18 */
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

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', [_c('panel', {
	    attrs: {
	      "title": "Countdown",
	      "type": "primary"
	    }
	  }, [_c('countdown', {
	    staticStyle: {
	      "width": "750",
	      "margin-top": "20",
	      "margin-bottom": "20"
	    },
	    attrs: {
	      "remain": _vm.countdown1.remain
	    },
	    on: {
	      "tick": function($event) {
	        _vm.tick($event, 'countdown1')
	      }
	    }
	  }, [_c('text', {
	    staticClass: "ctno1"
	  }, [_vm._v(_vm._s(_vm.countdown1.time.D))]), _vm._v(" "), _c('text', {
	    staticClass: "ctno1",
	    staticStyle: {
	      "background-color": "#FFFFFF",
	      "color": "#AAAAAA"
	    }
	  }, [_vm._v("day(s)")]), _vm._v(" "), _c('text', {
	    staticClass: "ctno1"
	  }, [_vm._v(_vm._s(_vm.countdown1.time.hh))]), _vm._v(" "), _c('text', {
	    staticClass: "ctno1",
	    staticStyle: {
	      "background-color": "#FFFFFF",
	      "color": "#AAAAAA"
	    }
	  }, [_vm._v("hour(s)")]), _vm._v(" "), _c('text', {
	    staticClass: "ctno1"
	  }, [_vm._v(_vm._s(_vm.countdown1.time.mm))]), _vm._v(" "), _c('text', {
	    staticClass: "ctno1",
	    staticStyle: {
	      "background-color": "#FFFFFF",
	      "color": "#AAAAAA"
	    }
	  }, [_vm._v("minute(s)")]), _vm._v(" "), _c('text', {
	    staticClass: "ctno1"
	  }, [_vm._v(_vm._s(_vm.countdown1.time.ss))]), _vm._v(" "), _c('text', {
	    staticClass: "ctno1",
	    staticStyle: {
	      "background-color": "#FFFFFF",
	      "color": "#AAAAAA"
	    }
	  }, [_vm._v("second(s)")])]), _vm._v(" "), _c('countdown', {
	    staticStyle: {
	      "width": "600"
	    },
	    attrs: {
	      "remain": _vm.countdown2.remain
	    },
	    on: {
	      "tick": function($event) {
	        _vm.tick($event, 'countdown2')
	      }
	    }
	  }, [_c('text', {
	    staticClass: "ctno2"
	  }, [_vm._v(_vm._s(_vm.countdown2.time.MM))]), _vm._v(" "), _c('text', {
	    staticClass: "ctno2",
	    staticStyle: {
	      "background-color": "#FFFFFF",
	      "color": "#AAAAAA"
	    }
	  }, [_vm._v(":")]), _vm._v(" "), _c('text', {
	    staticClass: "ctno2"
	  }, [_vm._v(_vm._s(_vm.countdown2.time.ss))])])], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6b9c99ee", module.exports)
	  }
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQ/ZWQ2NCoqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvdW50ZG93bi52dWUiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcz9kNGYzKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvcGFuZWwudnVlPzRlYzYqKiIsIndlYnBhY2s6Ly8vcGFuZWwudnVlPzViYWQqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9wYW5lbC52dWU/ZDliOCoqIiwid2VicGFjazovLy9jb3VudGRvd24udnVlIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL2NvdW50ZG93bi52dWUiLCJ3ZWJwYWNrOi8vL2NvdW50ZG93bi52dWU/ZmMxNCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9jb3VudGRvd24udnVlP2ZiNzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY291bnRkb3duLnZ1ZT8wYzIxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3JDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBK0UsaURBQWlELElBQUk7QUFDcEksb0NBQW1DOztBQUVuQztBQUNBLGFBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7Ozs7OztBQy9CQTtBQUNBO0FB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QUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJjb21wb25lbnRzXFxjb3VudGRvd24udnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTZiOWM5OWVlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vY291bnRkb3duLnZ1ZT9lbnRyeT10cnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NvdW50ZG93bi52dWU/ZW50cnk9dHJ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi02YjljOTllZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY291bnRkb3duLnZ1ZT9lbnRyeT10cnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFx3ZWVrU3R1ZHlcXFxcd2VleDJcXFxcd2VleDNcXFxcc3JjXFxcXGNvbXBvbmVudHNcXFxcY291bnRkb3duLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGNvdW50ZG93bi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmI5Yzk5ZWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02YjljOTllZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9jb3VudGRvd24udnVlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBzY29wZUlkLFxuICBjc3NNb2R1bGVzXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICAvLyBpbmplY3QgY3NzTW9kdWxlc1xuICBpZiAoY3NzTW9kdWxlcykge1xuICAgIHZhciBjb21wdXRlZCA9IG9wdGlvbnMuY29tcHV0ZWQgfHwgKG9wdGlvbnMuY29tcHV0ZWQgPSB7fSlcbiAgICBPYmplY3Qua2V5cyhjc3NNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBjc3NNb2R1bGVzW2tleV1cbiAgICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtb2R1bGUgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MCA2MSA2MiA2MyA2NCA2NSA2NiA2NyA2OCA2OSA3MCA3MSA3MiA3MyA3NCA3NSA3NiA3NyA3OCA3OSA4MCA4MSA4MiA4MyIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMWEzODEyNTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYW5lbC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcGFuZWwudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTFhMzgxMjUyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wYW5lbC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6XFxcXHdlZWtTdHVkeVxcXFx3ZWV4MlxcXFx3ZWV4M1xcXFxzcmNcXFxcaW5jbHVkZVxcXFxwYW5lbC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBwYW5lbC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMWEzODEyNTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xYTM4MTI1MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5jbHVkZS9wYW5lbC52dWVcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNiA3IDkgMTEgMzcgMzggMzkgNDAgNDEgNTYgNTcgNTggNTkgODMiLCI8IS0tIEluc3BpcmVkIGJ5IGJvb3RzdHJhcCBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8gLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2XHJcbiAgICA6Y2xhc3M9XCJbJ3BhbmVsJywgJ3BhbmVsLScgKyB0eXBlXVwiXHJcbiAgICA6c3R5bGU9XCJ7IGJvcmRlcldpZHRoOiBib3JkZXIgfVwiPlxyXG4gICAgPHRleHRcclxuICAgICAgOmNsYXNzPVwiWydwYW5lbC1oZWFkZXInLCAncGFuZWwtaGVhZGVyLScgKyB0eXBlXVwiXHJcbiAgICAgIDpzdHlsZT1cIntcclxuICAgICAgICBwYWRkaW5nVG9wOiBwYWRkaW5nSGVhZCxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiBwYWRkaW5nSGVhZCxcclxuICAgICAgICBwYWRkaW5nTGVmdDogcGFkZGluZ0hlYWQqMS41LFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDogcGFkZGluZ0hlYWQqMS41XHJcbiAgICAgIH1cIj57e3RpdGxlfX08L3RleHQ+XHJcbiAgICA8ZGl2XHJcbiAgICAgIDpjbGFzcz1cIlsncGFuZWwtYm9keScsICdwYW5lbC1ib2R5LScgKyB0eXBlXVwiXHJcbiAgICAgIDpzdHlsZT1cIntcclxuICAgICAgICBwYWRkaW5nVG9wOiBwYWRkaW5nQm9keSxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiBwYWRkaW5nQm9keSxcclxuICAgICAgICBwYWRkaW5nTGVmdDogcGFkZGluZ0JvZHkqMS41LFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDogcGFkZGluZ0JvZHkqMS41XHJcbiAgICAgIH1cIj5cclxuICAgICAgPHNsb3Q+PC9zbG90PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgdHlwZTogeyBkZWZhdWx0OiAnZGVmYXVsdCcgfSxcclxuICAgICAgdGl0bGU6IHsgZGVmYXVsdDogJycgfSxcclxuICAgICAgcGFkZGluZ0JvZHk6IHsgZGVmYXVsdDogMjAgfSxcclxuICAgICAgcGFkZGluZ0hlYWQ6IHsgZGVmYXVsdDogMjAgfSxcclxuICAgICAgZGF0YUNsYXNzOiB7IGRlZmF1bHQ6ICcnIH0sIC8vIEZJWE1FIHRyYW5zZmVyIGNsYXNzXHJcbiAgICAgIGJvcmRlcjp7IGRlZmF1bHQ6IDAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgLnBhbmVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLypib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsqL1xyXG4gICAgLypib3JkZXItcmFkaXVzOiAxMHB4OyovXHJcbiAgICAvKi13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA1KTsqL1xyXG4gICAgLypib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpOyovXHJcbiAgICBib3JkZXItY29sb3I6ICNkZGRkZGQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1kZWZhdWx0IHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1wcmltYXJ5IHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDQwLCA5NiwgMTQ0KTtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1zdWNjZXNzIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDc2LCAxNzQsIDc2KTtcclxuXHJcbiAgfVxyXG5cclxuICAucGFuZWwtaW5mbyB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig3MCwgMTg0LCAyMTgpO1xyXG5cclxuICB9XHJcblxyXG4gIC5wYW5lbC13YXJuaW5nIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIzOCwgMTYyLCA1NCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWRhbmdlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTIsIDYzLCA1OCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgLypwYWRkaW5nLWxlZnQ6IDEycHg7Ki9cclxuICAgIC8qcGFkZGluZy1yaWdodDogMTJweDsqL1xyXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xyXG4gICAgLypwYWRkaW5nLWJvdHRvbTogMjBweDsqL1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyLWRlZmF1bHQge1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlci1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXItc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDE4NCwgOTIpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyLWluZm8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkxLCAxOTIsIDIyMik7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXItd2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxNzMsIDc4KTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlci1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNywgODMsIDc5KTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHkge1xyXG4gICAgLypwYWRkaW5nLWxlZnQ6IDEycHg7Ki9cclxuICAgIC8qcGFkZGluZy1yaWdodDogMTJweDsqL1xyXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xyXG4gICAgLypwYWRkaW5nLWJvdHRvbTogMjBweDsqL1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHktZGVmYXVsdCB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtYm9keS1wcmltYXJ5IHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5LXN1Y2Nlc3Mge1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHktaW5mbyB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtYm9keS13YXJuaW5nIHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5LWRhbmdlciB7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcGFuZWwudnVlPzQ3YzIzZTQ2IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsncGFuZWwnLCAncGFuZWwtJyArIF92bS50eXBlXSxcbiAgICBzdHlsZTogKHtcbiAgICAgIGJvcmRlcldpZHRoOiBfdm0uYm9yZGVyXG4gICAgfSlcbiAgfSwgW19jKCd0ZXh0Jywge1xuICAgIGNsYXNzOiBbJ3BhbmVsLWhlYWRlcicsICdwYW5lbC1oZWFkZXItJyArIF92bS50eXBlXSxcbiAgICBzdHlsZTogKHtcbiAgICAgIHBhZGRpbmdUb3A6IF92bS5wYWRkaW5nSGVhZCxcbiAgICAgIHBhZGRpbmdCb3R0b206IF92bS5wYWRkaW5nSGVhZCxcbiAgICAgIHBhZGRpbmdMZWZ0OiBfdm0ucGFkZGluZ0hlYWQgKiAxLjUsXG4gICAgICBwYWRkaW5nUmlnaHQ6IF92bS5wYWRkaW5nSGVhZCAqIDEuNVxuICAgIH0pXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsncGFuZWwtYm9keScsICdwYW5lbC1ib2R5LScgKyBfdm0udHlwZV0sXG4gICAgc3R5bGU6ICh7XG4gICAgICBwYWRkaW5nVG9wOiBfdm0ucGFkZGluZ0JvZHksXG4gICAgICBwYWRkaW5nQm90dG9tOiBfdm0ucGFkZGluZ0JvZHksXG4gICAgICBwYWRkaW5nTGVmdDogX3ZtLnBhZGRpbmdCb2R5ICogMS41LFxuICAgICAgcGFkZGluZ1JpZ2h0OiBfdm0ucGFkZGluZ0JvZHkgKiAxLjVcbiAgICB9KVxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMWEzODEyNTJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTFhMzgxMjUyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvaW5jbHVkZS9wYW5lbC52dWVcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNiA3IDkgMTEgMzcgMzggMzkgNDAgNDEgNTYgNTcgNTggNTkgODMiLCI8dGVtcGxhdGU+XHJcbiAgPHNjcm9sbGVyPlxyXG4gICAgPHBhbmVsIHRpdGxlPVwiQ291bnRkb3duXCIgdHlwZT1cInByaW1hcnlcIj5cclxuICAgICAgPGNvdW50ZG93blxyXG4gICAgICAgIEB0aWNrPVwidGljaygkZXZlbnQsICdjb3VudGRvd24xJylcIlxyXG4gICAgICAgIDpyZW1haW49XCJjb3VudGRvd24xLnJlbWFpblwiXHJcbiAgICAgICAgc3R5bGU9XCJ3aWR0aDogNzUwOyBtYXJnaW4tdG9wOiAyMDsgbWFyZ2luLWJvdHRvbTogMjA7XCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJjdG5vMVwiPnt7Y291bnRkb3duMS50aW1lLkR9fTwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImN0bm8xXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOyBjb2xvcjogI0FBQUFBQTtcIj5kYXkocyk8L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJjdG5vMVwiPnt7Y291bnRkb3duMS50aW1lLmhofX08L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJjdG5vMVwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjsgY29sb3I6ICNBQUFBQUE7XCI+aG91cihzKTwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImN0bm8xXCI+e3tjb3VudGRvd24xLnRpbWUubW19fTwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImN0bm8xXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOyBjb2xvcjogI0FBQUFBQTtcIj5taW51dGUocyk8L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJjdG5vMVwiPnt7Y291bnRkb3duMS50aW1lLnNzfX08L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJjdG5vMVwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjsgY29sb3I6ICNBQUFBQUE7XCI+c2Vjb25kKHMpPC90ZXh0PlxyXG4gICAgICA8L2NvdW50ZG93bj5cclxuXHJcbiAgICAgIDxjb3VudGRvd25cclxuICAgICAgICBAdGljaz1cInRpY2soJGV2ZW50LCAnY291bnRkb3duMicpXCJcclxuICAgICAgICA6cmVtYWluPVwiY291bnRkb3duMi5yZW1haW5cIlxyXG4gICAgICAgIHN0eWxlPVwid2lkdGg6IDYwMDtcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImN0bm8yXCI+e3tjb3VudGRvd24yLnRpbWUuTU19fTwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImN0bm8yXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOyBjb2xvcjogI0FBQUFBQTtcIj46PC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiY3RubzJcIj57e2NvdW50ZG93bjIudGltZS5zc319PC90ZXh0PlxyXG4gICAgICA8L2NvdW50ZG93bj5cclxuICAgIDwvcGFuZWw+XHJcbiAgPC9zY3JvbGxlcj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuICAuY3RubzEge1xyXG4gICAgYm9yZGVyLXJhZGl1czogODtcclxuICAgIHBhZGRpbmctdG9wOiA2O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDY7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyMjIsIDIyMik7XHJcbiAgICBjb2xvcjogcmdiKDE2OSwgNjgsIDY2KTtcclxuICB9XHJcblxyXG4gIC5jdG5vMiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4O1xyXG4gICAgcGFkZGluZy10b3A6IDMwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNywgMjM3LCAyNDcpO1xyXG4gICAgY29sb3I6IHJnYig0OSwgMTEyLCAxNDMpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA0MDtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvdW50ZG93bjE6IHtcclxuICAgICAgICAgIHJlbWFpbjogNTAwMCxcclxuICAgICAgICAgIHRpbWU6IHtcclxuICAgICAgICAgICAgRDogJzAnLFxyXG4gICAgICAgICAgICBoaDogJzAwJyxcclxuICAgICAgICAgICAgbW06ICcwMCcsXHJcbiAgICAgICAgICAgIHNzOiAnMDAnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb3VudGRvd24yOiB7XHJcbiAgICAgICAgICByZW1haW46IDUwMDAsXHJcbiAgICAgICAgICB0aW1lOiB7XHJcbiAgICAgICAgICAgIE1NOiAnMCcsXHJcbiAgICAgICAgICAgIHNzOiAnMCdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIHBhbmVsOiByZXF1aXJlKCcuLi9pbmNsdWRlL3BhbmVsLnZ1ZScpLFxyXG4gICAgICBjb3VudGRvd246IHJlcXVpcmUoJy4uL2luY2x1ZGUvY291bnRkb3duLnZ1ZScpXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICB0aWNrOiBmdW5jdGlvbiAoZSwgaykge1xyXG4gICAgICAgIHRoaXNba10udGltZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZSkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY291bnRkb3duLnZ1ZT9mMDIyZGZjYSIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNzUwYWNmMDQhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9jb3VudGRvd24udnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NvdW50ZG93bi52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNzUwYWNmMDQhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NvdW50ZG93bi52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6XFxcXHdlZWtTdHVkeVxcXFx3ZWV4MlxcXFx3ZWV4M1xcXFxzcmNcXFxcaW5jbHVkZVxcXFxjb3VudGRvd24udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY291bnRkb3duLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03NTBhY2YwNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTc1MGFjZjA0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmNsdWRlL2NvdW50ZG93bi52dWVcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IHN0eWxlPVwib3ZlcmZsb3c6IGhpZGRlbjsgZmxleC1kaXJlY3Rpb246IHJvdztcIlxyXG4gIHYtb246YXBwZWFyPVwiYXBwZWFyZWRcIlxyXG4gIHYtb246ZGlzYXBwZWFyPVwiZGlzYXBwZWFyZWRcIj5cclxuICA8c2xvdD48L3Nsb3Q+XHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlPlxyXG4ud3JhcCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuZnVuY3Rpb24gZm9ybWF0IChzdHIpIHtcclxuICBpZiAoc3RyLmxlbmd0aCA+PSAyKSB7XHJcbiAgICByZXR1cm4gc3RyO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gJzAnICsgc3RyO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGltZSh0YXJnZXQsIG5vdykge1xyXG4gIHZhciByZW1haW4gPSBwYXJzZUludCgodGFyZ2V0IC0gbm93KSAvIDEwMDApXHJcbiAgdmFyIEQgPSBTdHJpbmcocGFyc2VJbnQocmVtYWluIC8gODY0MDApKVxyXG4gIHZhciBERCA9IGZvcm1hdChEKVxyXG4gIHZhciBoID0gU3RyaW5nKHBhcnNlSW50KChyZW1haW4gLSBwYXJzZUludChEKSAqIDg2NDAwKSAvIDM2MDApKVxyXG4gIHZhciBoaCA9IGZvcm1hdChoKVxyXG4gIHZhciBIID0gU3RyaW5nKHBhcnNlSW50KHJlbWFpbiAvIDM2MDApKVxyXG4gIHZhciBISCA9IGZvcm1hdChIKVxyXG4gIHZhciBtID0gU3RyaW5nKHBhcnNlSW50KChyZW1haW4gLSBwYXJzZUludChIKSAqIDM2MDApIC8gNjApKVxyXG4gIHZhciBtbSA9IGZvcm1hdChtKVxyXG4gIHZhciBNID0gU3RyaW5nKHBhcnNlSW50KHJlbWFpbiAvIDYwKSlcclxuICB2YXIgTU0gPSBmb3JtYXQoTSlcclxuICB2YXIgcyA9IFN0cmluZyhyZW1haW4gLSBwYXJzZUludChNKSAqIDYwKVxyXG4gIHZhciBzcyA9IGZvcm1hdChzKVxyXG4gIHZhciBTID0gU3RyaW5nKHJlbWFpbilcclxuICB2YXIgU1MgPSBmb3JtYXQoUylcclxuICByZXR1cm4ge1xyXG4gICAgRDogRCwgREQ6IERELFxyXG4gICAgaDogaCwgaGg6IGhoLFxyXG4gICAgSDogSCwgSEg6IEhILFxyXG4gICAgbTogbSwgbW06IG1tLFxyXG4gICAgTTogTSwgTU06IE1NLFxyXG4gICAgczogcywgc3M6IHNzLFxyXG4gICAgUzogUywgU1M6IFNTXHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBwcm9wczoge1xyXG4gICAgcmVtYWluOiB7XHJcbiAgICAgIGRlZmF1bHQ6IDBcclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5vdzogMCxcclxuICAgICAgdGFyZ2V0OiAwLFxyXG4gICAgICBvdXRvZnZpZXc6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMubm93ID0gRGF0ZS5ub3coKTtcclxuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5ub3cgKyB0aGlzLnJlbWFpbiAqIDEwMDBcclxuICAgIGlmICh0aGlzLnJlbWFpbiA+IDApIHtcclxuICAgICAgdGhpcy5ydW4oKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHJ1bjogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICghdGhpcy5vdXRvZnZpZXcpIHtcclxuICAgICAgICB0aGlzLm5vdyA9IERhdGUubm93KClcclxuICAgICAgfVxyXG4gICAgICB2YXIgdGltZSA9IGdldFRpbWUodGhpcy50YXJnZXQsIHRoaXMubm93KVxyXG4gICAgICBpZiAodGhpcy50YXJnZXQgPj0gdGhpcy5ub3cpIHtcclxuICAgICAgICB0aGlzLiRlbWl0KCd0aWNrJywgdGltZSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLiRlbWl0KCdhbGFybScsIHRpbWUpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgc2V0VGltZW91dCh0aGlzLnJ1bi5iaW5kKHRoaXMpLCAxMDAwKVxyXG4gICAgfSxcclxuICAgIGFwcGVhcmVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5vdXRvZnZpZXcgPSBmYWxzZVxyXG4gICAgfSxcclxuICAgIGRpc2FwcGVhcmVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5vdXRvZnZpZXcgPSB0cnVlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY291bnRkb3duLnZ1ZT81ZTQ0MjI3YiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIsXG4gICAgICBcImZsZXgtZGlyZWN0aW9uXCI6IFwicm93XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImFwcGVhclwiOiBfdm0uYXBwZWFyZWQsXG4gICAgICBcImRpc2FwcGVhclwiOiBfdm0uZGlzYXBwZWFyZWRcbiAgICB9XG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNzUwYWNmMDRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTc1MGFjZjA0IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvaW5jbHVkZS9jb3VudGRvd24udnVlXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3Njcm9sbGVyJywgW19jKCdwYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIkNvdW50ZG93blwiLFxuICAgICAgXCJ0eXBlXCI6IFwicHJpbWFyeVwiXG4gICAgfVxuICB9LCBbX2MoJ2NvdW50ZG93bicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjc1MFwiLFxuICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiMjBcIixcbiAgICAgIFwibWFyZ2luLWJvdHRvbVwiOiBcIjIwXCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInJlbWFpblwiOiBfdm0uY291bnRkb3duMS5yZW1haW5cbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInRpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50aWNrKCRldmVudCwgJ2NvdW50ZG93bjEnKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCd0ZXh0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImN0bm8xXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmNvdW50ZG93bjEudGltZS5EKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY3RubzFcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgICAgXCJjb2xvclwiOiBcIiNBQUFBQUFcIlxuICAgIH1cbiAgfSwgW192bS5fdihcImRheShzKVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjdG5vMVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5jb3VudGRvd24xLnRpbWUuaGgpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjdG5vMVwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgICBcImNvbG9yXCI6IFwiI0FBQUFBQVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiaG91cihzKVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjdG5vMVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5jb3VudGRvd24xLnRpbWUubW0pKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjdG5vMVwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgICBcImNvbG9yXCI6IFwiI0FBQUFBQVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwibWludXRlKHMpXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImN0bm8xXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmNvdW50ZG93bjEudGltZS5zcykpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImN0bm8xXCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICAgIFwiY29sb3JcIjogXCIjQUFBQUFBXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJzZWNvbmQocylcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnY291bnRkb3duJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiNjAwXCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInJlbWFpblwiOiBfdm0uY291bnRkb3duMi5yZW1haW5cbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInRpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50aWNrKCRldmVudCwgJ2NvdW50ZG93bjInKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCd0ZXh0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImN0bm8yXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmNvdW50ZG93bjIudGltZS5NTSkpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImN0bm8yXCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICAgIFwiY29sb3JcIjogXCIjQUFBQUFBXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCI6XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImN0bm8yXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmNvdW50ZG93bjIudGltZS5zcykpXSldKV0sIDEpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNmI5Yzk5ZWVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTZiOWM5OWVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9jb3VudGRvd24udnVlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=