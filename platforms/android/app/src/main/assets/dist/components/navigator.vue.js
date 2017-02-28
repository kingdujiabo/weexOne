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

	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(31),
	  /* template */
	  __webpack_require__(39),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\components\\navigator.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] navigator.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4aefeb14", Component.options)
	  } else {
	    hotAPI.reload("data-v-4aefeb14", Component.options)
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-rewriter?id=data-v-34379bef!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./button.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(7),
	  /* template */
	  __webpack_require__(8),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\include\\button.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] button.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-34379bef", Component.options)
	  } else {
	    hotAPI.reload("data-v-34379bef", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 7 */
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
	    type: { default: 'default' },
	    size: { default: 'large' },
	    value: { default: '' }
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['btn', 'btn-' + _vm.type, 'btn-sz-' + _vm.size]
	  }, [_c('text', {
	    class: ['btn-txt', 'btn-txt-' + _vm.type, 'btn-txt-sz-' + _vm.size]
	  }, [_vm._v(_vm._s(_vm.value))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-34379bef", module.exports)
	  }
	}

/***/ },
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
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
	
	var navigator = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/navigator\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var getBaseURL = __webpack_require__(32).getBaseURL;
	module.exports = {
	  data: function () {
	    return {
	      navBarHeight: 88,
	      title: 'Navigator',
	      dir: 'examples',
	      baseURL: ''
	    };
	  },
	  components: {
	    panel: __webpack_require__(3),
	    navpage: __webpack_require__(33),
	    button: __webpack_require__(6)
	  },
	  created: function () {
	    this.$getConfig(function (config) {
	      var env = config.env;
	      if (env.platform == 'iOS') {
	        var scale = env.scale;
	        var deviceWidth = env.deviceWidth / scale;
	        this.navBarHeight = 64.0 * 750.0 / deviceWidth;
	      }
	    }.bind(this));
	    this.baseURL = getBaseURL(this);
	  },
	  methods: {
	    naviBarLeftItemClick: function (e) {
	      modal.toast({ message: 'naviBarLeftItemClick', duration: 2 });
	    },
	    naviBarRightItemClick: function (e) {
	      modal.toast({ message: 'naviBarRightItemClick', duration: 2 });
	    },
	    push: function () {
	      var params = {
	        'url': this.baseURL + 'vue/components/navigator.js?test=1',
	        'animated': 'true'
	      };
	      navigator.push(params, function () {});
	    },
	    pop: function () {
	      var params = {
	        'url': this.baseURL + 'vue/components/navigator.js?test=1',
	        'animated': 'true'
	      };
	      navigator.pop(params, function () {});
	    }
	  }
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	exports.getBaseURL = function (vm) {
	  var bundleUrl = vm.$getConfig().bundleUrl;
	  var nativeBase;
	  var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/')>=0;
	  var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	  if (isAndroidAssets) {
	    nativeBase = 'file://assets/';
	  }
	  else if (isiOSAssets) {
	    // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
	    // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
	    nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	  }
	  else {
	    var host = 'localhost:12580';
	    var matches = /\/\/([^\/]+?)\//.exec(vm.$getConfig().bundleUrl);
	    if (matches && matches.length >= 2) {
	      host = matches[1];
	    }
	    nativeBase = 'http://' + host + '/' + vm.dir + '/build/';
	  }
	  var h5Base = './index.html?page=./' + vm.dir + '/build/';
	  // in Native
	  var base = nativeBase;
	  if (typeof window === 'object') {
	    // in Browser or WebView
	    base = h5Base;
	  }
	  return base
	}


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-rewriter?id=data-v-59ce7576!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./navpage.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(34),
	  /* template */
	  __webpack_require__(38),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\include\\navpage.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] navpage.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-59ce7576", Component.options)
	  } else {
	    hotAPI.reload("data-v-59ce7576", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 34 */
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
	
	module.exports = {
	  components: {
	    navbar: __webpack_require__(35)
	  },
	  props: {
	    dataRole: { default: 'navbar' },
	    backgroundColor: { default: 'black' },
	    height: { default: 88 },
	    title: { default: "" },
	    titleColor: { default: 'black' },
	    rightItemSrc: { default: '' },
	    rightItemTitle: { default: '' },
	    rightItemColor: { default: 'black' },
	    leftItemSrc: { default: '' },
	    leftItemTitle: { default: '' },
	    leftItemColor: { default: 'black' }
	  },
	  methods: {
	    naviBarRightItemClick: function (e) {
	      this.$emit('naviBarRightItemClick', e);
	    },
	    naviBarLeftItemClick: function (e) {
	      this.$emit('naviBarLeftItemClick', e);
	    }
	  }
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-rewriter?id=data-v-1236f1cd!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./navbar.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(36),
	  /* template */
	  __webpack_require__(37),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\include\\navbar.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] navbar.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1236f1cd", Component.options)
	  } else {
	    hotAPI.reload("data-v-1236f1cd", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 36 */
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	    dataRole: { default: 'navbar' },
	    //导航条背景色
	    backgroundColor: { default: 'black' },
	    //导航条高度
	    height: { default: 88 },
	    //导航条标题 
	    title: { default: '' },
	    //导航条标题颜色
	    titleColor: { default: 'black' },
	    //右侧按钮图片
	    rightItemSrc: { default: '' },
	    //右侧按钮标题
	    rightItemTitle: { default: '' },
	    //右侧按钮标题颜色
	    rightItemColor: { default: 'black' },
	    //左侧按钮图片
	    leftItemSrc: { default: '' },
	    //左侧按钮标题
	    leftItemTitle: { default: '' },
	    //左侧按钮颜色
	    leftItemColor: { default: 'black' }
	  },
	  methods: {
	    onclickrightitem: function (e) {
	      this.$emit('naviBarRightItemClick');
	    },
	    onclickleftitem: function (e) {
	      this.$emit('naviBarLeftItemClick');
	    }
	  }
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container",
	    style: ({
	      height: _vm.height,
	      backgroundColor: _vm.backgroundColor
	    }),
	    attrs: {
	      "dataRole": _vm.dataRole
	    }
	  }, [(!_vm.rightItemSrc) ? _c('text', {
	    staticClass: "right-text",
	    style: ({
	      color: _vm.rightItemColor
	    }),
	    attrs: {
	      "naviItemPosition": "right"
	    },
	    on: {
	      "click": _vm.onclickrightitem
	    }
	  }, [_vm._v(_vm._s(_vm.rightItemTitle))]) : _vm._e(), _vm._v(" "), (_vm.rightItemSrc) ? _c('image', {
	    staticClass: "right-image",
	    attrs: {
	      "naviItemPosition": "right",
	      "src": _vm.rightItemSrc
	    },
	    on: {
	      "click": _vm.onclickrightitem
	    }
	  }) : _vm._e(), _vm._v(" "), (!_vm.leftItemSrc) ? _c('text', {
	    staticClass: "left-text",
	    style: ({
	      color: _vm.leftItemColor
	    }),
	    attrs: {
	      "naviItemPosition": "left"
	    },
	    on: {
	      "click": _vm.onclickleftitem
	    }
	  }, [_vm._v(_vm._s(_vm.leftItemTitle))]) : _vm._e(), _vm._v(" "), (_vm.leftItemSrc) ? _c('image', {
	    staticClass: "left-image",
	    attrs: {
	      "naviItemPosition": "left",
	      "src": _vm.leftItemSrc
	    },
	    on: {
	      "click": _vm.onclickleftitem
	    }
	  }) : _vm._e(), _vm._v(" "), _c('text', {
	    staticClass: "center-text",
	    style: ({
	      color: _vm.titleColor
	    }),
	    attrs: {
	      "naviItemPosition": "center"
	    }
	  }, [_vm._v(_vm._s(_vm.title))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1236f1cd", module.exports)
	  }
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "wrapper"
	  }, [_c('navbar', {
	    attrs: {
	      "dataRole": _vm.dataRole,
	      "height": _vm.height,
	      "backgroundColor": _vm.backgroundColor,
	      "title": _vm.title,
	      "titleColor": _vm.titleColor,
	      "leftItemSrc": _vm.leftItemSrc,
	      "leftItemTitle": _vm.leftItemTitle,
	      "leftItemColor": _vm.leftItemColor,
	      "rightItemSrc": _vm.rightItemSrc,
	      "rightItemTitle": _vm.rightItemTitle,
	      "rightItemColor": _vm.rightItemColor
	    },
	    on: {
	      "naviBarRightItemClick": _vm.naviBarRightItemClick,
	      "naviBarLeftItemClick": _vm.naviBarLeftItemClick
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "wrapper",
	    style: ({
	      marginTop: _vm.height
	    })
	  }, [_vm._t("default")], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-59ce7576", module.exports)
	  }
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('navpage', {
	    attrs: {
	      "dataRole": "none",
	      "height": _vm.navBarHeight,
	      "title": _vm.title,
	      "backgroundColor": "#ff5898",
	      "titleColor": "white",
	      "leftItemTitle": "More",
	      "leftItemColor": "white",
	      "rightItemSrc": "http://gtms02.alicdn.com/tps/i2/TB1ED7iMpXXXXXEXXXXWA_BHXXX-48-48.png"
	    },
	    on: {
	      "naviBarLeftItemClick": _vm.naviBarLeftItemClick,
	      "naviBarRightItemClick": _vm.naviBarRightItemClick
	    }
	  }, [_c('panel', {
	    attrs: {
	      "title": "push a new page"
	    }
	  }, [_c('button', {
	    attrs: {
	      "type": "primary",
	      "size": "small",
	      "value": "push"
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.push($event)
	      }
	    }
	  })]), _vm._v(" "), _c('panel', {
	    attrs: {
	      "title": "pop to the last page"
	    }
	  }, [_c('button', {
	    attrs: {
	      "type": "success",
	      "size": "small",
	      "value": "pop"
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.pop($event)
	      }
	    }
	  })])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-4aefeb14", module.exports)
	  }
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQ/ZWQ2NCoqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2aWdhdG9yLnZ1ZSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzP2Q0ZjMqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3BhbmVsLnZ1ZT80ZWM2KioqKioqIiwid2VicGFjazovLy9wYW5lbC52dWU/NWJhZCoqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9wYW5lbC52dWU/ZDliOCoqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9idXR0b24udnVlPzY5ZDciLCJ3ZWJwYWNrOi8vL2J1dHRvbi52dWU/ODRkNiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9idXR0b24udnVlPzM1NDYqIiwid2VicGFjazovLy9uYXZpZ2F0b3IudnVlIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL2Jhc2UtdXJsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL25hdnBhZ2UudnVlIiwid2VicGFjazovLy9uYXZwYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9uYXZiYXIudnVlIiwid2VicGFjazovLy9uYXZiYXIudnVlIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL25hdmJhci52dWU/NWE4NyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9uYXZwYWdlLnZ1ZT8wNDBiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdmlnYXRvci52dWU/MWE5NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVB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O0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6ImNvbXBvbmVudHNcXG5hdmlnYXRvci52dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2ZGI5YzAwODlmNmQzODhiNGI0ZCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL25hdmlnYXRvci52dWU/ZW50cnk9dHJ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi00YWVmZWIxNCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbmF2aWdhdG9yLnZ1ZT9lbnRyeT10cnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFx3ZWVrU3R1ZHlcXFxcd2VleDJcXFxcd2VleDNcXFxcc3JjXFxcXGNvbXBvbmVudHNcXFxcbmF2aWdhdG9yLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIG5hdmlnYXRvci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNGFlZmViMTRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00YWVmZWIxNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9uYXZpZ2F0b3IudnVlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBzY29wZUlkLFxuICBjc3NNb2R1bGVzXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICAvLyBpbmplY3QgY3NzTW9kdWxlc1xuICBpZiAoY3NzTW9kdWxlcykge1xuICAgIHZhciBjb21wdXRlZCA9IG9wdGlvbnMuY29tcHV0ZWQgfHwgKG9wdGlvbnMuY29tcHV0ZWQgPSB7fSlcbiAgICBPYmplY3Qua2V5cyhjc3NNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBjc3NNb2R1bGVzW2tleV1cbiAgICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtb2R1bGUgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MCA2MSA2MiA2MyA2NCA2NSA2NiA2NyA2OCA2OSA3MCA3MSA3MiA3MyA3NCA3NSA3NiA3NyA3OCA3OSA4MCA4MSA4MiA4MyIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMWEzODEyNTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYW5lbC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcGFuZWwudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTFhMzgxMjUyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wYW5lbC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6XFxcXHdlZWtTdHVkeVxcXFx3ZWV4MlxcXFx3ZWV4M1xcXFxzcmNcXFxcaW5jbHVkZVxcXFxwYW5lbC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBwYW5lbC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMWEzODEyNTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xYTM4MTI1MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5jbHVkZS9wYW5lbC52dWVcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNiA3IDkgMTEgMzcgMzggMzkgNDAgNDEgNTYgNTcgNTggNTkgODMiLCI8IS0tIEluc3BpcmVkIGJ5IGJvb3RzdHJhcCBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8gLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2XHJcbiAgICA6Y2xhc3M9XCJbJ3BhbmVsJywgJ3BhbmVsLScgKyB0eXBlXVwiXHJcbiAgICA6c3R5bGU9XCJ7IGJvcmRlcldpZHRoOiBib3JkZXIgfVwiPlxyXG4gICAgPHRleHRcclxuICAgICAgOmNsYXNzPVwiWydwYW5lbC1oZWFkZXInLCAncGFuZWwtaGVhZGVyLScgKyB0eXBlXVwiXHJcbiAgICAgIDpzdHlsZT1cIntcclxuICAgICAgICBwYWRkaW5nVG9wOiBwYWRkaW5nSGVhZCxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiBwYWRkaW5nSGVhZCxcclxuICAgICAgICBwYWRkaW5nTGVmdDogcGFkZGluZ0hlYWQqMS41LFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDogcGFkZGluZ0hlYWQqMS41XHJcbiAgICAgIH1cIj57e3RpdGxlfX08L3RleHQ+XHJcbiAgICA8ZGl2XHJcbiAgICAgIDpjbGFzcz1cIlsncGFuZWwtYm9keScsICdwYW5lbC1ib2R5LScgKyB0eXBlXVwiXHJcbiAgICAgIDpzdHlsZT1cIntcclxuICAgICAgICBwYWRkaW5nVG9wOiBwYWRkaW5nQm9keSxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiBwYWRkaW5nQm9keSxcclxuICAgICAgICBwYWRkaW5nTGVmdDogcGFkZGluZ0JvZHkqMS41LFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDogcGFkZGluZ0JvZHkqMS41XHJcbiAgICAgIH1cIj5cclxuICAgICAgPHNsb3Q+PC9zbG90PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgdHlwZTogeyBkZWZhdWx0OiAnZGVmYXVsdCcgfSxcclxuICAgICAgdGl0bGU6IHsgZGVmYXVsdDogJycgfSxcclxuICAgICAgcGFkZGluZ0JvZHk6IHsgZGVmYXVsdDogMjAgfSxcclxuICAgICAgcGFkZGluZ0hlYWQ6IHsgZGVmYXVsdDogMjAgfSxcclxuICAgICAgZGF0YUNsYXNzOiB7IGRlZmF1bHQ6ICcnIH0sIC8vIEZJWE1FIHRyYW5zZmVyIGNsYXNzXHJcbiAgICAgIGJvcmRlcjp7IGRlZmF1bHQ6IDAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgLnBhbmVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLypib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsqL1xyXG4gICAgLypib3JkZXItcmFkaXVzOiAxMHB4OyovXHJcbiAgICAvKi13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA1KTsqL1xyXG4gICAgLypib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpOyovXHJcbiAgICBib3JkZXItY29sb3I6ICNkZGRkZGQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1kZWZhdWx0IHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1wcmltYXJ5IHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDQwLCA5NiwgMTQ0KTtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1zdWNjZXNzIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDc2LCAxNzQsIDc2KTtcclxuXHJcbiAgfVxyXG5cclxuICAucGFuZWwtaW5mbyB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig3MCwgMTg0LCAyMTgpO1xyXG5cclxuICB9XHJcblxyXG4gIC5wYW5lbC13YXJuaW5nIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIzOCwgMTYyLCA1NCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWRhbmdlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTIsIDYzLCA1OCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgLypwYWRkaW5nLWxlZnQ6IDEycHg7Ki9cclxuICAgIC8qcGFkZGluZy1yaWdodDogMTJweDsqL1xyXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xyXG4gICAgLypwYWRkaW5nLWJvdHRvbTogMjBweDsqL1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyLWRlZmF1bHQge1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlci1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXItc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDE4NCwgOTIpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyLWluZm8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkxLCAxOTIsIDIyMik7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkZXItd2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxNzMsIDc4KTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlci1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNywgODMsIDc5KTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHkge1xyXG4gICAgLypwYWRkaW5nLWxlZnQ6IDEycHg7Ki9cclxuICAgIC8qcGFkZGluZy1yaWdodDogMTJweDsqL1xyXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xyXG4gICAgLypwYWRkaW5nLWJvdHRvbTogMjBweDsqL1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHktZGVmYXVsdCB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtYm9keS1wcmltYXJ5IHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5LXN1Y2Nlc3Mge1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWJvZHktaW5mbyB7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtYm9keS13YXJuaW5nIHtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1ib2R5LWRhbmdlciB7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcGFuZWwudnVlPzQ3YzIzZTQ2IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsncGFuZWwnLCAncGFuZWwtJyArIF92bS50eXBlXSxcbiAgICBzdHlsZTogKHtcbiAgICAgIGJvcmRlcldpZHRoOiBfdm0uYm9yZGVyXG4gICAgfSlcbiAgfSwgW19jKCd0ZXh0Jywge1xuICAgIGNsYXNzOiBbJ3BhbmVsLWhlYWRlcicsICdwYW5lbC1oZWFkZXItJyArIF92bS50eXBlXSxcbiAgICBzdHlsZTogKHtcbiAgICAgIHBhZGRpbmdUb3A6IF92bS5wYWRkaW5nSGVhZCxcbiAgICAgIHBhZGRpbmdCb3R0b206IF92bS5wYWRkaW5nSGVhZCxcbiAgICAgIHBhZGRpbmdMZWZ0OiBfdm0ucGFkZGluZ0hlYWQgKiAxLjUsXG4gICAgICBwYWRkaW5nUmlnaHQ6IF92bS5wYWRkaW5nSGVhZCAqIDEuNVxuICAgIH0pXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsncGFuZWwtYm9keScsICdwYW5lbC1ib2R5LScgKyBfdm0udHlwZV0sXG4gICAgc3R5bGU6ICh7XG4gICAgICBwYWRkaW5nVG9wOiBfdm0ucGFkZGluZ0JvZHksXG4gICAgICBwYWRkaW5nQm90dG9tOiBfdm0ucGFkZGluZ0JvZHksXG4gICAgICBwYWRkaW5nTGVmdDogX3ZtLnBhZGRpbmdCb2R5ICogMS41LFxuICAgICAgcGFkZGluZ1JpZ2h0OiBfdm0ucGFkZGluZ0JvZHkgKiAxLjVcbiAgICB9KVxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMWEzODEyNTJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTFhMzgxMjUyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvaW5jbHVkZS9wYW5lbC52dWVcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNiA3IDkgMTEgMzcgMzggMzkgNDAgNDEgNTYgNTcgNTggNTkgODMiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTM0Mzc5YmVmIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vYnV0dG9uLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9idXR0b24udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTM0Mzc5YmVmIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9idXR0b24udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFx3ZWVrU3R1ZHlcXFxcd2VleDJcXFxcd2VleDNcXFxcc3JjXFxcXGluY2x1ZGVcXFxcYnV0dG9uLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGJ1dHRvbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzQzNzliZWZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zNDM3OWJlZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5jbHVkZS9idXR0b24udnVlXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IDEyIDEzIDM3IDM5IDgzIiwiPCEtLSBJbnNwaXJlZCBieSBib290c3RyYXAgaHR0cDovL2dldGJvb3RzdHJhcC5jb20vIC0tPlxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdiA6Y2xhc3M9XCJbJ2J0bicsICdidG4tJyArIHR5cGUsICdidG4tc3otJyArIHNpemVdXCI+XHJcbiAgICA8dGV4dCA6Y2xhc3M9XCJbJ2J0bi10eHQnLCAnYnRuLXR4dC0nICsgdHlwZSwgJ2J0bi10eHQtc3otJyArIHNpemVdXCI+e3t2YWx1ZX19PC90ZXh0PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHR5cGU6IHsgZGVmYXVsdDogJ2RlZmF1bHQnIH0sXHJcbiAgICAgIHNpemU6IHsgZGVmYXVsdDogJ2xhcmdlJyB9LFxyXG4gICAgICB2YWx1ZTogeyBkZWZhdWx0OiAnJyB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICAuYnRuIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMzMzM7XHJcblxyXG4gICAgLyp3aGl0ZS1zcGFjZTogbm93cmFwOyovXHJcbiAgICAvKnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7Ki9cclxuICAgIC8qdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247Ki9cclxuICAgIC8qY3Vyc29yOiBwb2ludGVyOyovXHJcbiAgICAvKi13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7Ki9cclxuICAgIC8qYmFja2dyb3VuZC1pbWFnZTogbm9uZTsqL1xyXG4gICAgLypib3JkZXItaW1hZ2Utc291cmNlOiBpbml0aWFsOyovXHJcbiAgICAvKmJvcmRlci1pbWFnZS1zbGljZTogaW5pdGlhbDsqL1xyXG4gICAgLypib3JkZXItaW1hZ2Utd2lkdGg6IGluaXRpYWw7Ki9cclxuICAgIC8qYm9yZGVyLWltYWdlLW91dHNldDogaW5pdGlhbDsqL1xyXG4gICAgLypib3JkZXItaW1hZ2UtcmVwZWF0OiBpbml0aWFsOyovXHJcbiAgfVxyXG5cclxuICAuYnRuLXR4dCB7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqVFlQRSoqL1xyXG5cclxuICAuYnRuLWRlZmF1bHQge1xyXG4gICAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcclxuICB9XHJcblxyXG4gIC5idG4tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDk2LCAxNDQpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNDAsIDk2LCAxNDQpO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1zdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgMTg0LCA5Mik7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig3NiwgMTc0LCA3Nik7XHJcbiAgfVxyXG5cclxuICAuYnRuLWluZm8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkxLCAxOTIsIDIyMik7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig3MCwgMTg0LCAyMTgpO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi13YXJuaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE3MywgNzgpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM4LCAxNjIsIDU0KTtcclxuICB9XHJcblxyXG4gIC5idG4tZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTcsIDgzLCA3OSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTIsIDYzLCA1OCk7XHJcbiAgfVxyXG5cclxuICAuYnRuLWxpbmsge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuICAuYnRuLXR4dC1kZWZhdWx0IHtcclxuICAgIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XHJcbiAgfVxyXG5cclxuICAuYnRuLXR4dC1wcmltYXJ5IHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgfVxyXG5cclxuICAuYnRuLXR4dC1zdWNjZXNzIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgfVxyXG5cclxuICAuYnRuLXR4dC1pbmZvIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgfVxyXG5cclxuICAuYnRuLXR4dC13YXJuaW5nIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgfVxyXG5cclxuICAuYnRuLXR4dC1kYW5nZXIge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB9XHJcblxyXG4gIC5idG4tdHh0LWxpbmsge1xyXG4gICAgY29sb3I6IHJnYig1MSwgMTIyLCAxODMpO1xyXG4gICAgLypmb250LXdlaWdodDogNDAwOyovXHJcbiAgfVxyXG5cclxuICAvKipTSVpFKiovXHJcblxyXG4gIC5idG4tc3otbGFyZ2Uge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgLypsaW5lLWhlaWdodDogMS4zMzMzMzsqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcblxyXG4gIC5idG4tc3otbWlkZGxlIHtcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgLypsaW5lLWhlaWdodDogMS40Mjg1NzsqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gIC5idG4tc3otc21hbGwge1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICAvKmxpbmUtaGVpZ2h0OiAxLjU7Ki9cclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICB9XHJcblxyXG4gIC5idG4tdHh0LXN6LWxhcmdlIHtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICB9XHJcblxyXG4gIC5idG4tdHh0LXN6LW1pZGRsZSB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgfVxyXG5cclxuICAuYnRuLXR4dC1zei1zbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAvKkRJU0FCTEVEKi9cclxuXHJcbiAgLmRpc2FibGVkIHtcclxuXHJcbiAgfVxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGJ1dHRvbi52dWU/Y2Q4NmJiMDIiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBjbGFzczogWydidG4nLCAnYnRuLScgKyBfdm0udHlwZSwgJ2J0bi1zei0nICsgX3ZtLnNpemVdXG4gIH0sIFtfYygndGV4dCcsIHtcbiAgICBjbGFzczogWydidG4tdHh0JywgJ2J0bi10eHQtJyArIF92bS50eXBlLCAnYnRuLXR4dC1zei0nICsgX3ZtLnNpemVdXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS52YWx1ZSkpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zNDM3OWJlZlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMzQzNzliZWYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9pbmNsdWRlL2J1dHRvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDcgMTIgMTMgMzcgMzkgODMiLCI8dGVtcGxhdGU+XHJcbiAgPG5hdnBhZ2VcclxuICAgIGRhdGFSb2xlPVwibm9uZVwiXHJcbiAgICA6aGVpZ2h0PVwibmF2QmFySGVpZ2h0XCJcclxuICAgIDp0aXRsZT1cInRpdGxlXCJcclxuICAgIGJhY2tncm91bmRDb2xvcj1cIiNmZjU4OThcIlxyXG4gICAgdGl0bGVDb2xvcj1cIndoaXRlXCJcclxuICAgIGxlZnRJdGVtVGl0bGU9XCJNb3JlXCJcclxuICAgIGxlZnRJdGVtQ29sb3I9XCJ3aGl0ZVwiXHJcbiAgICByaWdodEl0ZW1TcmM9XCJodHRwOi8vZ3RtczAyLmFsaWNkbi5jb20vdHBzL2kyL1RCMUVEN2lNcFhYWFhYRVhYWFhXQV9CSFhYWC00OC00OC5wbmdcIlxyXG4gICAgQG5hdmlCYXJMZWZ0SXRlbUNsaWNrPVwibmF2aUJhckxlZnRJdGVtQ2xpY2tcIlxyXG4gICAgQG5hdmlCYXJSaWdodEl0ZW1DbGljaz1cIm5hdmlCYXJSaWdodEl0ZW1DbGlja1wiPlxyXG4gICAgPHBhbmVsIHRpdGxlPVwicHVzaCBhIG5ldyBwYWdlXCI+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBzaXplPVwic21hbGxcIiB2YWx1ZT1cInB1c2hcIiBAY2xpY2submF0aXZlPVwicHVzaFwiPjwvYnV0dG9uPlxyXG4gICAgPC9wYW5lbD5cclxuICAgIDxwYW5lbCB0aXRsZT1cInBvcCB0byB0aGUgbGFzdCBwYWdlXCI+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Y2Nlc3NcIiBzaXplPVwic21hbGxcIiB2YWx1ZT1cInBvcFwiIEBjbGljay5uYXRpdmU9XCJwb3BcIj48L2J1dHRvbj5cclxuICAgIDwvcGFuZWw+XHJcbiAgPC9uYXZwYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICB2YXIgbmF2aWdhdG9yID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL25hdmlnYXRvcicpXHJcbiAgdmFyIGdldEJhc2VVUkwgPSByZXF1aXJlKCcuLi9pbmNsdWRlL2Jhc2UtdXJsLmpzJykuZ2V0QmFzZVVSTFxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hdkJhckhlaWdodDogODgsXHJcbiAgICAgICAgdGl0bGU6ICdOYXZpZ2F0b3InLFxyXG4gICAgICAgIGRpcjogJ2V4YW1wbGVzJyxcclxuICAgICAgICBiYXNlVVJMOiAnJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBwYW5lbDogcmVxdWlyZSgnLi4vaW5jbHVkZS9wYW5lbC52dWUnKSxcclxuICAgICAgbmF2cGFnZTogcmVxdWlyZSgnLi4vaW5jbHVkZS9uYXZwYWdlLnZ1ZScpLFxyXG4gICAgICBidXR0b246IHJlcXVpcmUoJy4uL2luY2x1ZGUvYnV0dG9uLnZ1ZScpXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuJGdldENvbmZpZyhmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICAgICAgdmFyIGVudiA9IGNvbmZpZy5lbnY7XHJcbiAgICAgICAgaWYoZW52LnBsYXRmb3JtID09ICdpT1MnKXtcclxuICAgICAgICAgIHZhciBzY2FsZSA9IGVudi5zY2FsZTtcclxuICAgICAgICAgIHZhciBkZXZpY2VXaWR0aCA9IGVudi5kZXZpY2VXaWR0aCAvIHNjYWxlO1xyXG4gICAgICAgICAgdGhpcy5uYXZCYXJIZWlnaHQgPSA2NC4wICogNzUwLjAgLyBkZXZpY2VXaWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgIHRoaXMuYmFzZVVSTCA9IGdldEJhc2VVUkwodGhpcylcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIG5hdmlCYXJMZWZ0SXRlbUNsaWNrOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIG1vZGFsLnRvYXN0KHsgbWVzc2FnZTogJ25hdmlCYXJMZWZ0SXRlbUNsaWNrJywgZHVyYXRpb246IDIgfSlcclxuICAgICAgfSxcclxuICAgICAgbmF2aUJhclJpZ2h0SXRlbUNsaWNrOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIG1vZGFsLnRvYXN0KHsgbWVzc2FnZTogJ25hdmlCYXJSaWdodEl0ZW1DbGljaycsIGR1cmF0aW9uOiAyIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIHB1c2g6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgICAgJ3VybCc6ICB0aGlzLmJhc2VVUkwgKyAndnVlL2NvbXBvbmVudHMvbmF2aWdhdG9yLmpzP3Rlc3Q9MScsXHJcbiAgICAgICAgICAnYW5pbWF0ZWQnIDogJ3RydWUnLFxyXG4gICAgICAgIH1cclxuICAgICAgICBuYXZpZ2F0b3IucHVzaChwYXJhbXMsIGZ1bmN0aW9uICgpIHt9KTtcclxuICAgICAgfSxcclxuICAgICAgcG9wOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICd1cmwnOiAgdGhpcy5iYXNlVVJMICsgJ3Z1ZS9jb21wb25lbnRzL25hdmlnYXRvci5qcz90ZXN0PTEnLFxyXG4gICAgICAgICAgJ2FuaW1hdGVkJyA6ICd0cnVlJyxcclxuICAgICAgICB9XHJcbiAgICAgICAgbmF2aWdhdG9yLnBvcChwYXJhbXMsIGZ1bmN0aW9uICgpIHt9KTtcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbmF2aWdhdG9yLnZ1ZT82MWZmOGI5ZCIsImV4cG9ydHMuZ2V0QmFzZVVSTCA9IGZ1bmN0aW9uICh2bSkge1xyXG4gIHZhciBidW5kbGVVcmwgPSB2bS4kZ2V0Q29uZmlnKCkuYnVuZGxlVXJsO1xyXG4gIHZhciBuYXRpdmVCYXNlO1xyXG4gIHZhciBpc0FuZHJvaWRBc3NldHMgPSBidW5kbGVVcmwuaW5kZXhPZigneW91cl9jdXJyZW50X0lQJykgPj0gMCB8fCBidW5kbGVVcmwuaW5kZXhPZignZmlsZTovL2Fzc2V0cy8nKT49MDtcclxuICB2YXIgaXNpT1NBc3NldHMgPSBidW5kbGVVcmwuaW5kZXhPZignZmlsZTovLy8nKSA+PSAwICYmIGJ1bmRsZVVybC5pbmRleE9mKCdXZWV4RGVtby5hcHAnKSA+IDA7XHJcbiAgaWYgKGlzQW5kcm9pZEFzc2V0cykge1xyXG4gICAgbmF0aXZlQmFzZSA9ICdmaWxlOi8vYXNzZXRzLyc7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKGlzaU9TQXNzZXRzKSB7XHJcbiAgICAvLyBmaWxlOi8vL3Zhci9tb2JpbGUvQ29udGFpbmVycy9CdW5kbGUvQXBwbGljYXRpb24ve2lkfS9XZWV4RGVtby5hcHAvXHJcbiAgICAvLyBmaWxlOi8vL1VzZXJzL3t1c2VyfS9MaWJyYXJ5L0RldmVsb3Blci9Db3JlU2ltdWxhdG9yL0RldmljZXMve2lkfS9kYXRhL0NvbnRhaW5lcnMvQnVuZGxlL0FwcGxpY2F0aW9uL3tpZH0vV2VleERlbW8uYXBwL1xyXG4gICAgbmF0aXZlQmFzZSA9IGJ1bmRsZVVybC5zdWJzdHJpbmcoMCwgYnVuZGxlVXJsLmxhc3RJbmRleE9mKCcvJykgKyAxKTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICB2YXIgaG9zdCA9ICdsb2NhbGhvc3Q6MTI1ODAnO1xyXG4gICAgdmFyIG1hdGNoZXMgPSAvXFwvXFwvKFteXFwvXSs/KVxcLy8uZXhlYyh2bS4kZ2V0Q29uZmlnKCkuYnVuZGxlVXJsKTtcclxuICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID49IDIpIHtcclxuICAgICAgaG9zdCA9IG1hdGNoZXNbMV07XHJcbiAgICB9XHJcbiAgICBuYXRpdmVCYXNlID0gJ2h0dHA6Ly8nICsgaG9zdCArICcvJyArIHZtLmRpciArICcvYnVpbGQvJztcclxuICB9XHJcbiAgdmFyIGg1QmFzZSA9ICcuL2luZGV4Lmh0bWw/cGFnZT0uLycgKyB2bS5kaXIgKyAnL2J1aWxkLyc7XHJcbiAgLy8gaW4gTmF0aXZlXHJcbiAgdmFyIGJhc2UgPSBuYXRpdmVCYXNlO1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xyXG4gICAgLy8gaW4gQnJvd3NlciBvciBXZWJWaWV3XHJcbiAgICBiYXNlID0gaDVCYXNlO1xyXG4gIH1cclxuICByZXR1cm4gYmFzZVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luY2x1ZGUvYmFzZS11cmwuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gNyAxMCAxOSAzNiIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNTljZTc1NzYhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9uYXZwYWdlLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9uYXZwYWdlLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi01OWNlNzU3NiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbmF2cGFnZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6XFxcXHdlZWtTdHVkeVxcXFx3ZWV4MlxcXFx3ZWV4M1xcXFxzcmNcXFxcaW5jbHVkZVxcXFxuYXZwYWdlLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIG5hdnBhZ2UudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTU5Y2U3NTc2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNTljZTc1NzZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luY2x1ZGUvbmF2cGFnZS52dWVcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxyXG4gICAgPG5hdmJhclxyXG4gICAgICA6ZGF0YVJvbGU9XCJkYXRhUm9sZVwiXHJcbiAgICAgIDpoZWlnaHQ9XCJoZWlnaHRcIlxyXG4gICAgICA6YmFja2dyb3VuZENvbG9yPVwiYmFja2dyb3VuZENvbG9yXCJcclxuICAgICAgOnRpdGxlPVwidGl0bGVcIlxyXG4gICAgICA6dGl0bGVDb2xvcj1cInRpdGxlQ29sb3JcIlxyXG4gICAgICA6bGVmdEl0ZW1TcmM9XCJsZWZ0SXRlbVNyY1wiXHJcbiAgICAgIDpsZWZ0SXRlbVRpdGxlPVwibGVmdEl0ZW1UaXRsZVwiXHJcbiAgICAgIDpsZWZ0SXRlbUNvbG9yPVwibGVmdEl0ZW1Db2xvclwiXHJcbiAgICAgIDpyaWdodEl0ZW1TcmM9XCJyaWdodEl0ZW1TcmNcIlxyXG4gICAgICA6cmlnaHRJdGVtVGl0bGU9XCJyaWdodEl0ZW1UaXRsZVwiXHJcbiAgICAgIDpyaWdodEl0ZW1Db2xvcj1cInJpZ2h0SXRlbUNvbG9yXCJcclxuICAgICAgQG5hdmlCYXJSaWdodEl0ZW1DbGljaz1cIm5hdmlCYXJSaWdodEl0ZW1DbGlja1wiXHJcbiAgICAgIEBuYXZpQmFyTGVmdEl0ZW1DbGljaz1cIm5hdmlCYXJMZWZ0SXRlbUNsaWNrXCJcclxuICAgICAgPjwvbmF2YmFyPlxyXG4gICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIiA6c3R5bGU9XCJ7IG1hcmdpblRvcDogaGVpZ2h0IH1cIj5cclxuICAgICAgPHNsb3Q+PC9zbG90PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGU+XHJcbiAgLndyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIHRvcDogMDsgXHJcbiAgICBsZWZ0OiAwOyBcclxuICAgIHJpZ2h0OiAwOyBcclxuICAgIGJvdHRvbTogMDsgXHJcbiAgICB3aWR0aDogNzUwO1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIG5hdmJhcjogcmVxdWlyZSgnLi9uYXZiYXIudnVlJylcclxuICAgIH0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBkYXRhUm9sZTogeyBkZWZhdWx0OiAnbmF2YmFyJyB9LFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHsgZGVmYXVsdDogJ2JsYWNrJyB9LFxyXG4gICAgICBoZWlnaHQ6IHsgZGVmYXVsdDogODggfSxcclxuICAgICAgdGl0bGU6IHsgZGVmYXVsdDogXCJcIiB9LFxyXG4gICAgICB0aXRsZUNvbG9yOiB7IGRlZmF1bHQ6ICdibGFjaycgfSxcclxuICAgICAgcmlnaHRJdGVtU3JjOiB7IGRlZmF1bHQ6ICcnIH0sXHJcbiAgICAgIHJpZ2h0SXRlbVRpdGxlOiB7IGRlZmF1bHQ6ICcnIH0sXHJcbiAgICAgIHJpZ2h0SXRlbUNvbG9yOiB7IGRlZmF1bHQ6ICdibGFjaycgfSxcclxuICAgICAgbGVmdEl0ZW1TcmM6IHsgZGVmYXVsdDogJycgfSxcclxuICAgICAgbGVmdEl0ZW1UaXRsZTogeyBkZWZhdWx0OiAnJyB9LFxyXG4gICAgICBsZWZ0SXRlbUNvbG9yOiB7IGRlZmF1bHQ6ICdibGFjaycgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgbmF2aUJhclJpZ2h0SXRlbUNsaWNrOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ25hdmlCYXJSaWdodEl0ZW1DbGljaycsIGUpXHJcbiAgICAgIH0sXHJcbiAgICAgIG5hdmlCYXJMZWZ0SXRlbUNsaWNrOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ25hdmlCYXJMZWZ0SXRlbUNsaWNrJywgZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBuYXZwYWdlLnZ1ZT82MjY3ZDNlNCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMTIzNmYxY2QhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9uYXZiYXIudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL25hdmJhci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMTIzNmYxY2QhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL25hdmJhci52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6XFxcXHdlZWtTdHVkeVxcXFx3ZWV4MlxcXFx3ZWV4M1xcXFxzcmNcXFxcaW5jbHVkZVxcXFxuYXZiYXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbmF2YmFyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xMjM2ZjFjZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTEyMzZmMWNkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmNsdWRlL25hdmJhci52dWVcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gNyAyOCIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2XHJcbiAgICA6ZGF0YVJvbGU9XCJkYXRhUm9sZVwiXHJcbiAgICBjbGFzcz1cImNvbnRhaW5lclwiXHJcbiAgICA6c3R5bGU9XCJ7IGhlaWdodDogaGVpZ2h0LCBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvciB9XCI+XHJcbiAgICA8dGV4dFxyXG4gICAgICB2LWlmPVwiIXJpZ2h0SXRlbVNyY1wiXHJcbiAgICAgIG5hdmlJdGVtUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgIDpzdHlsZT1cInsgY29sb3I6IHJpZ2h0SXRlbUNvbG9yIH1cIlxyXG4gICAgICBjbGFzcz1cInJpZ2h0LXRleHRcIlxyXG4gICAgICB2LW9uOmNsaWNrPVwib25jbGlja3JpZ2h0aXRlbVwiPnt7cmlnaHRJdGVtVGl0bGV9fTwvdGV4dD5cclxuICAgIDxpbWFnZVxyXG4gICAgICB2LWlmPVwicmlnaHRJdGVtU3JjXCJcclxuICAgICAgbmF2aUl0ZW1Qb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgOnNyYz1cInJpZ2h0SXRlbVNyY1wiXHJcbiAgICAgIGNsYXNzPVwicmlnaHQtaW1hZ2VcIlxyXG4gICAgICB2LW9uOmNsaWNrPVwib25jbGlja3JpZ2h0aXRlbVwiPjwvaW1hZ2U+XHJcbiAgICA8dGV4dFxyXG4gICAgICB2LWlmPVwiIWxlZnRJdGVtU3JjXCJcclxuICAgICAgbmF2aUl0ZW1Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICA6c3R5bGU9XCJ7IGNvbG9yOiBsZWZ0SXRlbUNvbG9yIH1cIlxyXG4gICAgICBjbGFzcz1cImxlZnQtdGV4dFwiXHJcbiAgICAgIHYtb246Y2xpY2s9XCJvbmNsaWNrbGVmdGl0ZW1cIj57e2xlZnRJdGVtVGl0bGV9fTwvdGV4dD5cclxuICAgIDxpbWFnZVxyXG4gICAgICB2LWlmPVwibGVmdEl0ZW1TcmNcIlxyXG4gICAgICBuYXZpSXRlbVBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgIDpzcmM9XCJsZWZ0SXRlbVNyY1wiXHJcbiAgICAgIGNsYXNzPVwibGVmdC1pbWFnZVwiXHJcbiAgICAgIHYtb246Y2xpY2s9XCJvbmNsaWNrbGVmdGl0ZW1cIj48L2ltYWdlPlxyXG4gICAgPHRleHRcclxuICAgICAgbmF2aUl0ZW1Qb3NpdGlvbj1cImNlbnRlclwiXHJcbiAgICAgIDpzdHlsZT1cInsgY29sb3I6IHRpdGxlQ29sb3IgfVwiXHJcbiAgICAgIGNsYXNzPVwiY2VudGVyLXRleHRcIj57e3RpdGxlfX08L3RleHQ+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGU+XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgICB0b3A6IDA7IFxyXG4gICAgbGVmdDogMDsgXHJcbiAgICByaWdodDogMDsgXHJcbiAgICB3aWR0aDogNzUwO1xyXG4gIH1cclxuICAucmlnaHQtdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgYm90dG9tOiAyODsgXHJcbiAgICByaWdodDogMzI7IFxyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDMyOyBcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLmxlZnQtdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgYm90dG9tOiAyODsgXHJcbiAgICBsZWZ0IDozMjsgXHJcbiAgICB0ZXh0LWFsaWduIDpsZWZ0OyAgXHJcbiAgICBmb250LXNpemU6IDMyOyBcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLmNlbnRlci10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICBib3R0b206IDI1OyBcclxuICAgIGxlZnQ6IDE3MjsgXHJcbiAgICByaWdodDogMTcyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIGZvbnQtc2l6ZTogMzY7IFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5sZWZ0LWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICBib3R0b206IDIwOyBcclxuICAgIGxlZnQ6IDI4OyBcclxuICAgIHdpZHRoOiA1MDsgXHJcbiAgICBoZWlnaHQ6IDUwO1xyXG4gIH1cclxuICAucmlnaHQtaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIGJvdHRvbTogMjA7IFxyXG4gICAgcmlnaHQ6IDI4OyBcclxuICAgIHdpZHRoOiA1MDsgXHJcbiAgICBoZWlnaHQ6IDUwO1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBkYXRhUm9sZTogeyBkZWZhdWx0OiAnbmF2YmFyJyB9LFxyXG4gICAgICAvL+WvvOiIquadoeiDjOaZr+iJslxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHsgZGVmYXVsdDogJ2JsYWNrJyB9LFxyXG4gICAgICAvL+WvvOiIquadoemrmOW6plxyXG4gICAgICBoZWlnaHQ6IHsgZGVmYXVsdDogODggfSxcclxuICAgICAgLy/lr7zoiKrmnaHmoIfpopggXHJcbiAgICAgIHRpdGxlOiB7IGRlZmF1bHQ6ICcnIH0sXHJcbiAgICAgIC8v5a+86Iiq5p2h5qCH6aKY6aKc6ImyXHJcbiAgICAgIHRpdGxlQ29sb3I6IHsgZGVmYXVsdDogJ2JsYWNrJyB9LFxyXG4gICAgICAvL+WPs+S+p+aMiemSruWbvueJh1xyXG4gICAgICByaWdodEl0ZW1TcmM6IHsgZGVmYXVsdDogJycgfSxcclxuICAgICAgLy/lj7PkvqfmjInpkq7moIfpophcclxuICAgICAgcmlnaHRJdGVtVGl0bGU6IHsgZGVmYXVsdDogJycgfSxcclxuICAgICAgLy/lj7PkvqfmjInpkq7moIfpopjpopzoibJcclxuICAgICAgcmlnaHRJdGVtQ29sb3I6IHsgZGVmYXVsdDogJ2JsYWNrJyB9LFxyXG4gICAgICAvL+W3puS+p+aMiemSruWbvueJh1xyXG4gICAgICBsZWZ0SXRlbVNyYzogeyBkZWZhdWx0OiAnJyB9LFxyXG4gICAgICAvL+W3puS+p+aMiemSruagh+mimFxyXG4gICAgICBsZWZ0SXRlbVRpdGxlOiB7IGRlZmF1bHQ6ICcnIH0sXHJcbiAgICAgIC8v5bem5L6n5oyJ6ZKu6aKc6ImyXHJcbiAgICAgIGxlZnRJdGVtQ29sb3I6IHsgZGVmYXVsdDogJ2JsYWNrJyB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBvbmNsaWNrcmlnaHRpdGVtOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ25hdmlCYXJSaWdodEl0ZW1DbGljaycpO1xyXG4gICAgICB9LFxyXG4gICAgICBvbmNsaWNrbGVmdGl0ZW06IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnbmF2aUJhckxlZnRJdGVtQ2xpY2snKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBuYXZiYXIudnVlPzA5OGNlODZlIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIsXG4gICAgc3R5bGU6ICh7XG4gICAgICBoZWlnaHQ6IF92bS5oZWlnaHQsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IF92bS5iYWNrZ3JvdW5kQ29sb3JcbiAgICB9KSxcbiAgICBhdHRyczoge1xuICAgICAgXCJkYXRhUm9sZVwiOiBfdm0uZGF0YVJvbGVcbiAgICB9XG4gIH0sIFsoIV92bS5yaWdodEl0ZW1TcmMpID8gX2MoJ3RleHQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicmlnaHQtdGV4dFwiLFxuICAgIHN0eWxlOiAoe1xuICAgICAgY29sb3I6IF92bS5yaWdodEl0ZW1Db2xvclxuICAgIH0pLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJyaWdodFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0ub25jbGlja3JpZ2h0aXRlbVxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnJpZ2h0SXRlbVRpdGxlKSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnJpZ2h0SXRlbVNyYykgPyBfYygnaW1hZ2UnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicmlnaHQtaW1hZ2VcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYXZpSXRlbVBvc2l0aW9uXCI6IFwicmlnaHRcIixcbiAgICAgIFwic3JjXCI6IF92bS5yaWdodEl0ZW1TcmNcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5vbmNsaWNrcmlnaHRpdGVtXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoIV92bS5sZWZ0SXRlbVNyYykgPyBfYygndGV4dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsZWZ0LXRleHRcIixcbiAgICBzdHlsZTogKHtcbiAgICAgIGNvbG9yOiBfdm0ubGVmdEl0ZW1Db2xvclxuICAgIH0pLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJsZWZ0XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5vbmNsaWNrbGVmdGl0ZW1cbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5sZWZ0SXRlbVRpdGxlKSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmxlZnRJdGVtU3JjKSA/IF9jKCdpbWFnZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsZWZ0LWltYWdlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmF2aUl0ZW1Qb3NpdGlvblwiOiBcImxlZnRcIixcbiAgICAgIFwic3JjXCI6IF92bS5sZWZ0SXRlbVNyY1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLm9uY2xpY2tsZWZ0aXRlbVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2VudGVyLXRleHRcIixcbiAgICBzdHlsZTogKHtcbiAgICAgIGNvbG9yOiBfdm0udGl0bGVDb2xvclxuICAgIH0pLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJjZW50ZXJcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTEyMzZmMWNkXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0xMjM2ZjFjZCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2luY2x1ZGUvbmF2YmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSA3IDI4IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwid3JhcHBlclwiXG4gIH0sIFtfYygnbmF2YmFyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRhdGFSb2xlXCI6IF92bS5kYXRhUm9sZSxcbiAgICAgIFwiaGVpZ2h0XCI6IF92bS5oZWlnaHQsXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBfdm0uYmFja2dyb3VuZENvbG9yLFxuICAgICAgXCJ0aXRsZVwiOiBfdm0udGl0bGUsXG4gICAgICBcInRpdGxlQ29sb3JcIjogX3ZtLnRpdGxlQ29sb3IsXG4gICAgICBcImxlZnRJdGVtU3JjXCI6IF92bS5sZWZ0SXRlbVNyYyxcbiAgICAgIFwibGVmdEl0ZW1UaXRsZVwiOiBfdm0ubGVmdEl0ZW1UaXRsZSxcbiAgICAgIFwibGVmdEl0ZW1Db2xvclwiOiBfdm0ubGVmdEl0ZW1Db2xvcixcbiAgICAgIFwicmlnaHRJdGVtU3JjXCI6IF92bS5yaWdodEl0ZW1TcmMsXG4gICAgICBcInJpZ2h0SXRlbVRpdGxlXCI6IF92bS5yaWdodEl0ZW1UaXRsZSxcbiAgICAgIFwicmlnaHRJdGVtQ29sb3JcIjogX3ZtLnJpZ2h0SXRlbUNvbG9yXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJuYXZpQmFyUmlnaHRJdGVtQ2xpY2tcIjogX3ZtLm5hdmlCYXJSaWdodEl0ZW1DbGljayxcbiAgICAgIFwibmF2aUJhckxlZnRJdGVtQ2xpY2tcIjogX3ZtLm5hdmlCYXJMZWZ0SXRlbUNsaWNrXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3cmFwcGVyXCIsXG4gICAgc3R5bGU6ICh7XG4gICAgICBtYXJnaW5Ub3A6IF92bS5oZWlnaHRcbiAgICB9KVxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNTljZTc1NzZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTU5Y2U3NTc2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvaW5jbHVkZS9uYXZwYWdlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCduYXZwYWdlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRhdGFSb2xlXCI6IFwibm9uZVwiLFxuICAgICAgXCJoZWlnaHRcIjogX3ZtLm5hdkJhckhlaWdodCxcbiAgICAgIFwidGl0bGVcIjogX3ZtLnRpdGxlLFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmY1ODk4XCIsXG4gICAgICBcInRpdGxlQ29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgXCJsZWZ0SXRlbVRpdGxlXCI6IFwiTW9yZVwiLFxuICAgICAgXCJsZWZ0SXRlbUNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgIFwicmlnaHRJdGVtU3JjXCI6IFwiaHR0cDovL2d0bXMwMi5hbGljZG4uY29tL3Rwcy9pMi9UQjFFRDdpTXBYWFhYWEVYWFhYV0FfQkhYWFgtNDgtNDgucG5nXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcIm5hdmlCYXJMZWZ0SXRlbUNsaWNrXCI6IF92bS5uYXZpQmFyTGVmdEl0ZW1DbGljayxcbiAgICAgIFwibmF2aUJhclJpZ2h0SXRlbUNsaWNrXCI6IF92bS5uYXZpQmFyUmlnaHRJdGVtQ2xpY2tcbiAgICB9XG4gIH0sIFtfYygncGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJwdXNoIGEgbmV3IHBhZ2VcIlxuICAgIH1cbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInByaW1hcnlcIixcbiAgICAgIFwic2l6ZVwiOiBcInNtYWxsXCIsXG4gICAgICBcInZhbHVlXCI6IFwicHVzaFwiXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnB1c2goJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwicG9wIHRvIHRoZSBsYXN0IHBhZ2VcIlxuICAgIH1cbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInN1Y2Nlc3NcIixcbiAgICAgIFwic2l6ZVwiOiBcInNtYWxsXCIsXG4gICAgICBcInZhbHVlXCI6IFwicG9wXCJcbiAgICB9LFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucG9wKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi00YWVmZWIxNFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNGFlZmViMTQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL25hdmlnYXRvci52dWU/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSA3Il0sInNvdXJjZVJvb3QiOiIifQ==