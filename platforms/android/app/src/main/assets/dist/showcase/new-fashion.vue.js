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
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-rewriter?id=data-v-f9eb0bc2!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./new-fashion.vue?entry=true\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(163),
	  /* template */
	  __webpack_require__(188),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\showcase\\new-fashion.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] new-fashion.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-f9eb0bc2", Component.options)
	  } else {
	    hotAPI.reload("data-v-f9eb0bc2", Component.options)
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

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(139),
	  /* template */
	  __webpack_require__(140),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\showcase\\include\\banners.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] banners.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-28d4a118", Component.options)
	  } else {
	    hotAPI.reload("data-v-28d4a118", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },

/***/ 139:
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
	
	module.exports = {
	  components: {
	    banner: __webpack_require__(133)
	  },
	  props: ['ds', 'width', 'height', 'space', 'direction']
	};

/***/ },

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [(_vm.direction === 'row') ? _c('div', {
	    staticStyle: {
	      "flex-direction": "row"
	    }
	  }, _vm._l((_vm.ds), function(i, item) {
	    return _c('div', {
	      style: ({
	        width: _vm.width,
	        height: _vm.height,
	        marginLeft: (i % _vm.ds.length ? _vm.space : 0)
	      })
	    }, [_c('banner', {
	      attrs: {
	        "width": _vm.width,
	        "height": _vm.height,
	        "src": item.img,
	        "href": item.url
	      }
	    })], 1)
	  })) : _vm._e(), _vm._v(" "), (_vm.direction === 'column') ? _c('div', _vm._l((_vm.ds), function(i, item) {
	    return _c('div', {
	      style: ({
	        width: _vm.width,
	        height: _vm.height,
	        marginTop: (i % _vm.ds.length ? _vm.space : 0)
	      })
	    }, [_c('banner', {
	      attrs: {
	        "width": _vm.width,
	        "height": _vm.height,
	        "src": item.img,
	        "href": item.url
	      }
	    })], 1)
	  })) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-28d4a118", module.exports)
	  }
	}

/***/ },

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(150),
	  /* template */
	  __webpack_require__(151),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\showcase\\include\\link.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] link.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7c5bf41d", Component.options)
	  } else {
	    hotAPI.reload("data-v-7c5bf41d", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//
	
	var modal = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/modal\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	module.exports = {
	  props: ['text', 'href'],
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

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('text', {
	    on: {
	      "click": _vm.clickHandler
	    }
	  }, [_vm._v(_vm._s(_vm.text))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7c5bf41d", module.exports)
	  }
	}

/***/ },

/***/ 163:
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
	
	var modal = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/modal\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var timer = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/timer\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	module.exports = {
	  components: {
	    headlines: __webpack_require__(164),
	    category: __webpack_require__(167),
	    coupon: __webpack_require__(170),
	    goods: __webpack_require__(173),
	    resource: __webpack_require__(176),
	    scene: __webpack_require__(179),
	    match: __webpack_require__(182),
	    brand: __webpack_require__(185)
	  },
	  data: {
	    navBarHeight: 88,
	    cnt: 0,
	    show0: true,
	    show1: false,
	    show2: false,
	    displayRefresh: 'show',
	    displayLoading: 'show',
	    showData: {}
	  },
	  created: function () {
	    this.showData = {
	      "header": {
	        "topBanner": "https://gw.alicdn.com/tps/TB1J48kMXXXXXXtapXXXXXXXXXX-750-782.jpg",
	        "ruleLink": "https://chaoshi.m.tmall.com/",
	        "isShowShare": true,
	        "shareInfo": {
	          "shareTitle": "我是分享标题",
	          "shareIntro": " 我是分享内容测试",
	          "allLink": "https://www.tmall.com",
	          "mobileImage": "https://gw.alicdn.com/tps/TB1J48kMXXXXXXtapXXXXXXXXXX-750-782.jpg",
	          "pcImage": "https://img.alicdn.com/tps/i4/TB1Dyw1LVXXXXXEapXXSutbFXXX.jpg",
	          "shareScene": "我是测试业务",
	          "bizId": ""
	        },
	        "announceHdBanner": "https://gw.alicdn.com/tps/i4/TB1fzclLVXXXXaVaXXXwu0bFXXX.png",
	        "bannerItems": [{
	          "img": "https://img.alicdn.com/tps/TB1U8LHLVXXXXa3XpXXXXXXXXXX-233-172.jpg",
	          "url": "https://chaoshi.m.tmall.com/"
	        }, {
	          "img": "https://img.alicdn.com/tps/TB1U8LHLVXXXXa3XpXXXXXXXXXX-233-172.jpg",
	          "url": "https://chaoshi.m.tmall.com/"
	        }, {
	          "img": "https://img.alicdn.com/tps/TB1U8LHLVXXXXa3XpXXXXXXXXXX-233-172.jpg",
	          "url": "https://chaoshi.m.tmall.com/"
	        }]
	      },
	      "fashion": {
	        "isHide": false,
	        "floorTitle": "https://gw.alicdn.com/tps/TB1._64LVXXXXatXVXXXXXXXXXX-750-100.jpg",
	        "bigBannerImg": "https://gw.alicdn.com/tps/TB1tO.aLVXXXXcvXpXXXXXXXXXX-750-262.jpg",
	        "bigBannerUrl": "https://chaoshi.m.tmall.com/",
	        "smallBannerItems": [{
	          "img": "https://img.alicdn.com/tps/TB1Ff_0LVXXXXXNaXXXXXXXXXXX-375-262.jpg",
	          "url": "https://chaoshi.m.tmall.com/"
	        }, {
	          "img": "https://img.alicdn.com/tps/TB1Ff_0LVXXXXXNaXXXXXXXXXXX-375-262.jpg",
	          "url": "https://chaoshi.m.tmall.com/"
	        }],
	        "isHideStarBanner": false,
	        "firstStarBannerItems": [{
	          "img": "https://gw.alicdn.com/tps/TB1xlIVLVXXXXckXVXXXXXXXXXX-250-220.jpg",
	          "url": "https://chaoshi.m.tmall.com/"
	        }, {
	          "img": "https://gw.alicdn.com/tps/TB1xlIVLVXXXXckXVXXXXXXXXXX-250-220.jpg",
	          "url": "https://chaoshi.m.tmall.com/"
	        }],
	        "secondStarBannerItems": [{
	          "img": "https://gw.alicdn.com/tps/TB1xlIVLVXXXXckXVXXXXXXXXXX-250-220.jpg",
	          "url": "https://chaoshi.m.tmall.com/"
	        }, {
	          "img": "https://gw.alicdn.com/tps/TB1xlIVLVXXXXckXVXXXXXXXXXX-250-220.jpg",
	          "url": "https://chaoshi.m.tmall.com/"
	        }],
	        "thirdStarBannerItems": [{
	          "img": "https://gw.alicdn.com/tps/TB1xlIVLVXXXXckXVXXXXXXXXXX-250-220.jpg",
	          "url": "https://chaoshi.m.tmall.com/"
	        }, {
	          "img": "https://gw.alicdn.com/tps/TB1xlIVLVXXXXckXVXXXXXXXXXX-250-220.jpg",
	          "url": "https://chaoshi.m.tmall.com/"
	        }]
	      },
	      "goods": {
	        "isHide": false,
	        "floorTitle": "https://gw.alicdn.com/tps/TB1._64LVXXXXatXVXXXXXXXXXX-750-100.jpg",
	        "bannerItems": [{
	          "img1": "https://gw.alicdn.com/tps/TB1TUzGLVXXXXc1XFXXXXXXXXXX-250-296.jpg",
	          "url1": "https://chaoshi.m.tmall.com/",
	          "img2": "https://gw.alicdn.com/tps/TB1TUzGLVXXXXc1XFXXXXXXXXXX-250-296.jpg",
	          "url2": "https://chaoshi.m.tmall.com/",
	          "img3": "https://gw.alicdn.com/tps/TB12MPFLVXXXXXnXVXXXXXXXXXX-250-592.jpg",
	          "url3": "https://chaoshi.m.tmall.com/",
	          "img4": "https://gw.alicdn.com/tps/TB1TUzGLVXXXXc1XFXXXXXXXXXX-250-296.jpg",
	          "url4": "https://chaoshi.m.tmall.com/",
	          "img5": "https://gw.alicdn.com/tps/TB1TUzGLVXXXXc1XFXXXXXXXXXX-250-296.jpg",
	          "url5": "https://chaoshi.m.tmall.com/"
	        }, {
	          "img1": "https://gw.alicdn.com/tps/TB1TUzGLVXXXXc1XFXXXXXXXXXX-250-296.jpg",
	          "url1": "https://chaoshi.m.tmall.com/",
	          "img2": "https://gw.alicdn.com/tps/TB1TUzGLVXXXXc1XFXXXXXXXXXX-250-296.jpg",
	          "url2": "https://chaoshi.m.tmall.com/",
	          "img3": "https://gw.alicdn.com/tps/TB12MPFLVXXXXXnXVXXXXXXXXXX-250-592.jpg",
	          "url3": "https://chaoshi.m.tmall.com/",
	          "img4": "https://gw.alicdn.com/tps/TB1TUzGLVXXXXc1XFXXXXXXXXXX-250-296.jpg",
	          "url4": "https://chaoshi.m.tmall.com/",
	          "img5": "https://gw.alicdn.com/tps/TB1TUzGLVXXXXc1XFXXXXXXXXXX-250-296.jpg",
	          "url5": "https://chaoshi.m.tmall.com/"
	        }]
	      },
	      "coupon": {
	        "floorTitle": "https://gw.alicdn.com/tps/TB1._64LVXXXXatXVXXXXXXXXXX-750-100.jpg"
	      },
	      "scene": {
	        "floorTitle": "https://gw.alicdn.com/tps/TB1._64LVXXXXatXVXXXXXXXXXX-750-100.jpg",
	        "_backup": {
	          "id": "03653",
	          "data": [{
	            "id": "1395",
	            "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.710531&aldid=TPMkJDIw&wh_id=1395&scm=1003.1.03653.MAIN_1395_710531&pos=1",
	            "_s_": "d",
	            "itemImg": "//img.alicdn.com/tps/i2/TB1n6bVLVXXXXcCXVXXTCU0QpXX-300-300.jpg",
	            "sceneCat": "50008881,50008883,50008882,50008884,50012774,50012775,50012776,50012781,50008886,50012766,50012771,50012772,50010850,50000671,162201,50022566,50007068,50026651,50000852,162104,162116,162205,1623,123216004,162404,162401,50011412,50011411,16240,50012773,50006846,50010394,50008888,50008890,50008889,50012784,50012785,50012786,50012787,50008885,50012777,50012778,124730001,50001748,50011130,124730001,50001748,50011130,50011129,50010160,50011161,50011159,50010159,50010158,50011127,3035,50010167,50000557,50011123,50010402,50000436,50011153,50011740,50006843,50006842,124942005,50010368,50011892,50011894,50023751,121366037,121458036,121392038,121420035,121364028,121468026,121400029,121418030,121478031,121480030,121366035,121424025,121426030,121484030,121412031,125054002,125074007,125074008,125104003,125080003,125024006,125080004,121400030,121424024,121482025,121418031,121402028,121388035",
	            "finalScore": "77.26011111111112",
	            "_pos_": 1,
	            "entityType": "MAIN",
	            "benefitImg": "//img.alicdn.com/tps/i3/TB1Onr9LVXXXXbiXpXXB8gAQpXX-300-100.png"
	          }, {
	            "id": "1394",
	            "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.710531&aldid=TPMkJDIw&wh_id=1394&scm=1003.1.03653.MAIN_1394_710531&pos=2",
	            "_s_": "d",
	            "itemImg": "//img.alicdn.com/tps/i1/TB13mj1LVXXXXa.XFXXTCU0QpXX-300-300.jpg",
	            "sceneCat": "50010850,50000671,162201,50022566,50007068,50026651,50000852,162104,162116,162205,1623,123216004,162404,162401,50011412,50011411,162402,50008903,50011413,162403,50000697,1629,50011277,121412004,50008897,50008901,50008899,50013194,50008904,50008905,50008898,162103,50008900,50013196,121434004,50005065,162702,162701,162703,1636,124730001,50001748,50011130,124730001,50001748,50011130,50011129,50010160,50011161,50011159,50010159,50010158,50011127,3035,50010167,50000557,50011123,50010402,50000436,50011153,50011740,50006843,50006842,124986002,50010368, 50011892,50011894,121480030,121366035,121424025,121426030,121484030,121412031",
	            "finalScore": "77.06103999999999",
	            "_pos_": 2,
	            "entityType": "MAIN",
	            "benefitImg": "//img.alicdn.com/tps/i2/TB17kvVLVXXXXaTXVXXB8gAQpXX-300-100.png"
	          }, {
	            "id": "1396",
	            "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.710531&aldid=TPMkJDIw&wh_id=1396&scm=1003.1.03653.MAIN_1396_710531&pos=3",
	            "_s_": "d",
	            "itemImg": "//img.alicdn.com/tps/i2/TB1ZOAXLVXXXXa0XXXXTCU0QpXX-300-300.jpg",
	            "sceneCat": "50010368,50011892,50011894,50013794,50010792,50010790,50010790,121434025,121396024,50010793,50010789,50010793,121386035,121392037,121458034,121392036,121482027,121392015,121368014,121418013,121392016,50011982,122690003,302910,50012010,122654005,50012019,50012825,50012027,50012042,50011744,50012906,50012907,50008881,50008883,50008882?,50012784?,50022889,50022728,50013228,50013896,50014775,50019578,50014822,50026394,50019694,50019279,50019272,50014079,50014078,50014076,50014077,50017238,121464011,121468014,50019130,50019127,50019126,50019128,50019125,50015984,50014803,50014802,50015980,50014788,50014787,50019526,50014791,50019520,50013932,50014677,50015978,50014786,50014785,50522001,50014493,50023100,121418021,121388027,121424021,121418020,121368020,50012036,50012044,50012043,50010368, 50011892, 50019274,50012044,50012048,50012043,50013228,50013238,50011726,50019279,50015984,50014803,50014802,50019526,50014791,50019520,50013932,50014677,50019526,50013314,50023341,50016752,50016749,50016747,50016744,50016741,50016740,50016739,50016738,50016737,50016769,50016763,50016750,50007003,302910,50012010,50012032,50012033,50011745,50011746,50011894,121458034,121756003,121426033,50011982,50011979,121390006,124730001,50001748,50011130,124730001,50001748,50011130,50011129,50010160,50011161,50011159,50010159,50010158,50011127,3035,50010167,50000557,50011123,50010402,50000436,50011153,50010850,50000671,162201,50022566,50007068,50026651,50000852,162104,162116,162205,1623,123216004,162404,162401,50011412,50011411,162402,50008903,50011413,162403,50000697,1629,50011277,121412004,50008897,50008901,50008899,50013194,50008904,50008905,50008898,162103,50008900,50013196,121434004,50005065,162702,162701,162703,1636,1512,123534001,14,50008090,50012341,50132002,50012342,50012343,50012345,50012346,50013189,50010527,121394006,50013618,50010537,50012424,121452038,121484044,50010540,50010548,50024769,121450007,50013697,50010218,50005960,50005962,50012820,50012406,50023620,50023605,50008829,50024064,50023440,50008687,124392001,50023771,50006804,50012410,124482010,121398023,50023789,50011975",
	            "finalScore": "76.76379487179486",
	            "_pos_": 3,
	            "entityType": "MAIN",
	            "benefitImg": "//img.alicdn.com/tps/i3/TB1Usn.LVXXXXaoXpXXB8gAQpXX-300-100.png"
	          }, {
	            "id": "1619",
	            "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.710531&aldid=TPMkJDIw&wh_id=1619&scm=1003.1.03653.SUB_1619_710531&pos=4",
	            "_s_": "d",
	            "itemImg": "//img.alicdn.com/tps/i2/TB1MpoBLVXXXXbxXpXXKofZZpXX-182-206.jpg",
	            "sceneCat": "124730001,50001748,50011130,124730001,50001748,50011130,50011129,50010160,50011161,50011159,50010159,50010158,50011127,3035,50010167,50000557,50011123,50010402,50000436,50011153,122654005,50011740,50009032,124688012，213202,121396029,121476023,121410029,213203,50023326,213205,50022686,50023293,50466023,50024999,50016885，50011894",
	            "finalScore": "75.88480000000001",
	            "_pos_": 4,
	            "entityType": "SUB",
	            "benefitImg": "//img.alicdn.com/tps/i4/TB1j0AxLVXXXXaRXFXX3bpXTXXX-170-100.png"
	          }, {
	            "id": "1612",
	            "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.710531&aldid=TPMkJDIw&wh_id=1612&scm=1003.1.03653.SUB_1612_710531&pos=5",
	            "_s_": "d",
	            "itemImg": "//img.alicdn.com/tps/i3/TB1NNwyLVXXXXaEXVXXKofZZpXX-182-206.jpg",
	            "sceneCat": "50010850,50000671,162104,162116,123216004",
	            "finalScore": "75.23733333333334",
	            "_pos_": 5,
	            "entityType": "SUB",
	            "benefitImg": "//img.alicdn.com/tps/i1/TB1PsoBLVXXXXbQXpXX3bpXTXXX-170-100.png"
	          }, {
	            "id": "1610",
	            "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.710531&aldid=TPMkJDIw&wh_id=1610&scm=1003.1.03653.SUB_1610_710531&pos=6",
	            "_s_": "d",
	            "itemImg": "//img.alicdn.com/tps/i4/TB1EkczLVXXXXcVXpXXKofZZpXX-182-206.jpg",
	            "sceneCat": "121484044,121452038,50012342,50012027,50012032,50006843,50010850,50000671,162104,1623,50011277,162116,123216004,50008898,121366037,121458036,121392038,121420035,121364028,121468026,121472031,121476036,121470042,121418032,121410036,121472032,121420032,121470040,121384032,121460028,121448028,121400030,121424024,121482025,121418031,121402028,121388035,121460029,121400028,121400029,121418030,121476034,121478031,121448029,121480030,121366035,121424025,121426030,121484030,121412031,121384033,121424023,121402027,121408039,121420033,121452028,121466040,121416029,121482028,121420034,121396046,121422052,121370037,121424031,21364043,121472040,121412045,121424032,125054002,125074007,125074008,125104003,125080003,125024006,125080004",
	            "finalScore": "75.00533333333334",
	            "_pos_": 6,
	            "entityType": "SUB",
	            "benefitImg": "//img.alicdn.com/tps/i2/TB1RzwFLVXXXXXsXpXX3bpXTXXX-170-100.png"
	          }, {
	            "id": "1620",
	            "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.710531&aldid=TPMkJDIw&wh_id=1620&scm=1003.1.03653.SUB_1620_710531&pos=7",
	            "_s_": "d",
	            "itemImg": "//img.alicdn.com/tps/i1/TB1IJsILVXXXXbGXXXXKofZZpXX-182-206.jpg",
	            "sceneCat": "50010789,50010790,50010792,50010793,50010794,50010796,50010797,50010798,50010801,50010803,50010805,50010807,50010808,50010813,50010814,50010815,50013794,121382014,121386023,121388007,121388008,121398004,121364007,121398006,121410007,121426007,121452004,50012010,50012027,50012032，124688012, 124986002, 124942005，50010850,50000671,162104,162201,50022566,162116,1623,50011277,50008897,162401,162402",
	            "finalScore": "74.72522222222223",
	            "_pos_": 7,
	            "entityType": "SUB",
	            "benefitImg": "//img.alicdn.com/tps/i1/TB16A.yLVXXXXX8XFXX3bpXTXXX-170-100.png"
	          }, {
	            "id": "1608",
	            "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.710531&aldid=TPMkJDIw&wh_id=1608&scm=1003.1.03653.SUB_1608_710531&pos=8",
	            "_s_": "d",
	            "itemImg": "//img.alicdn.com/tps/i3/TB1xA3jLVXXXXXqapXXKofZZpXX-182-206.jpg",
	            "sceneCat": "50012010,50012027,50012032,50007003,50008881,50008883,1623,162116,50010850,123216004",
	            "finalScore": "74.626",
	            "_pos_": 8,
	            "entityType": "SUB",
	            "benefitImg": "//img.alicdn.com/tps/i2/TB1WvoALVXXXXcdXpXX3bpXTXXX-170-100.png"
	          }, {
	            "id": "1615",
	            "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.710531&aldid=TPMkJDIw&wh_id=1615&scm=1003.1.03653.SUB_1615_710531&pos=9",
	            "_s_": "d",
	            "itemImg": "//img.alicdn.com/tps/i1/TB1PVctLVXXXXchXFXXKofZZpXX-182-206.jpg",
	            "sceneCat": "50011978,50011979,50011980,50011993,50011996,50011997,121390006,121408011,121474010,50010789,50010790,50010792,50010793,50010803,50013794,121398004,121410007，213205,121470030,50024980,121408030",
	            "finalScore": "74.02799999999999",
	            "_pos_": 9,
	            "entityType": "SUB",
	            "benefitImg": "//img.alicdn.com/tps/i4/TB1yKwBLVXXXXa4XpXX3bpXTXXX-170-100.png"
	          }, {
	            "id": "1618",
	            "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.710531&aldid=TPMkJDIw&wh_id=1618&scm=1003.1.03653.SUB_1618_710531&pos=10",
	            "_s_": "d",
	            "itemImg": "//img.alicdn.com/tps/i1/TB1vn3sLVXXXXX5XVXXKofZZpXX-182-206.jpg",
	            "sceneCat": "50008886,50012766,50012771,50012772,50012773,50008090,111219,50012100,50012082,50012478,50012475,213202,50018977,121396029,121476023,50018994,121410029,213203,50023326,50003820,213205,50022686,50012481,50013976?,50001871,122854005,121458010,121452006,121416008,50008779,50002777,121394007,121386009,50010825,50013810,121434010,50001865,50008565,50008246,50017192,121404045,121368009,121462014,50019372,50008248,121418011,50008249,50017193,50008252,50008251,50000512,121364047",
	            "finalScore": "73.94212121212121",
	            "_pos_": 10,
	            "entityType": "SUB",
	            "benefitImg": "//img.alicdn.com/tps/i4/TB1kSkpLVXXXXbTXVXX3bpXTXXX-170-100.png"
	          }, {
	            "id": "1617",
	            "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.710531&aldid=TPMkJDIw&wh_id=1617&scm=1003.1.03653.SUB_1617_710531&pos=11",
	            "_s_": "d",
	            "itemImg": "//img.alicdn.com/tps/i1/TB1ELwrLVXXXXaNXVXXKofZZpXX-182-206.jpg",
	            "sceneCat": "50013189,50010527,121394006,50013618,50010537,50012424,121452038,121484044,50010540,50010548,50024769,50012341,50132002,50012342,50012343,50012345,50012346,50012341,50132002,50012342,50012343,50012345,50012346",
	            "finalScore": "73.78883333333334",
	            "_pos_": 11,
	            "entityType": "SUB",
	            "benefitImg": "//img.alicdn.com/tps/i3/TB1CtsuLVXXXXcJXFXX3bpXTXXX-170-100.png"
	          }],
	          "exposureParam": "//ac.mmstat.com/1.gif?apply=vote&abbucket=_AB-M1001_B5&com=02&acm=03653.1003.1.710531&cod=03653&cache=jWl8FJsb&aldid=TPMkJDIw&logtype=4&abtest=_AB-LR1001-PR1001&scm=1003.1.03653.710531&ip=42.120.74.104",
	          "serverTime": 1458296110334
	        }
	      },
	      "resource": {
	        "isHide": false,
	        "bigBannerImg": "https://gw.alicdn.com/tps/TB1tO.aLVXXXXcvXpXXXXXXXXXX-750-262.jpg",
	        "bigBannerUrl": "https://chaoshi.m.tmall.com/",
	        "smallBannerItems": [{
	          "img": "https://img.alicdn.com/tps/TB1Ff_0LVXXXXXNaXXXXXXXXXXX-375-262.jpg",
	          "url": "https://chaoshi.m.tmall.com/"
	        }, {
	          "img": "https://img.alicdn.com/tps/TB1Ff_0LVXXXXXNaXXXXXXXXXXX-375-262.jpg",
	          "url": "https://chaoshi.m.tmall.com/"
	        }]
	      },
	      "category": {
	        "floorTitle": "https://gw.alicdn.com/tps/TB1._64LVXXXXatXVXXXXXXXXXX-750-100.jpg",
	        "_backup": {
	          "main": [],
	          "sub": [{
	            "finalScore": 0,
	            "industryUrl": "//pages.tmall.com/wow/act/15617/dqc?abbucket=_AB-M1011_B5&acm=03654.1003.1.735362&aldid=e5zPEI6R&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_15_735362&pos=1",
	            "entityType": "OTHER",
	            "colour": "b4ebff",
	            "industryTitle": "数码",
	            "_pos_": 1,
	            "industryBenefit": "疯抢大牌新品",
	            "industryId": "15",
	            "industryImg": "//img.alicdn.com/tps/i4/TB1_xG.LVXXXXbWaXXXrdvGIFXX-248-155.jpg"
	          }, {
	            "finalScore": 0,
	            "industryUrl": "//pages.tmall.com/wow/act/15617/xihu?abbucket=_AB-M1011_B5&acm=03654.1003.1.735362&aldid=e5zPEI6R&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_13_735362&pos=2",
	            "entityType": "OTHER",
	            "colour": "cdffa4",
	            "industryTitle": "洗护",
	            "_pos_": 2,
	            "industryBenefit": "爆款1分钱抢",
	            "industryId": "13",
	            "industryImg": "//img.alicdn.com/tps/i3/TB1Ft_CLVXXXXX2XXXXrdvGIFXX-248-155.jpg"
	          }, {
	            "finalScore": 0,
	            "industryUrl": "//pages.tmall.com/wow/act/15617/mobilephone?abbucket=_AB-M1011_B5&acm=03654.1003.1.735362&aldid=e5zPEI6R&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_14_735362&pos=3",
	            "entityType": "OTHER",
	            "colour": "c5ffdf",
	            "industryTitle": "手机",
	            "_pos_": 3,
	            "industryBenefit": "1元抢优惠券",
	            "industryId": "14",
	            "industryImg": "//img.alicdn.com/tps/i3/TB1mJjuLVXXXXc.XXXXrdvGIFXX-248-155.jpg"
	          }, {
	            "finalScore": 0,
	            "industryUrl": "//pages.tmall.com/wow/act/15617/xiangbaohuanxin?abbucket=_AB-M1011_B5&acm=03654.1003.1.735362&aldid=e5zPEI6R&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_11_735362&pos=4",
	            "entityType": "OTHER",
	            "colour": "ffccdc",
	            "industryTitle": "箱包",
	            "_pos_": 4,
	            "industryBenefit": "极致焕新尖货",
	            "industryId": "11",
	            "industryImg": "//img.alicdn.com/tps/i2/TB1_5P9KVXXXXayaXXXrdvGIFXX-248-155.jpg"
	          }, {
	            "finalScore": 0,
	            "industryUrl": "//pages.tmall.com/wow/act/15617/newfood?abbucket=_AB-M1011_B5&acm=03654.1003.1.735362&aldid=e5zPEI6R&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_12_735362&pos=5",
	            "entityType": "OTHER",
	            "colour": "fff5a3",
	            "industryTitle": "食品",
	            "_pos_": 5,
	            "industryBenefit": "新品1分试吃",
	            "industryId": "12",
	            "industryImg": "//img.alicdn.com/tps/i2/TB1HfLzLVXXXXb_XXXXrdvGIFXX-248-155.jpg"
	          }, {
	            "finalScore": 0,
	            "industryUrl": "//pages.tmall.com/wow/act/15617/zbps?abbucket=_AB-M1011_B5&acm=03654.1003.1.735362&aldid=e5zPEI6R&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_3_735362&pos=6",
	            "entityType": "OTHER",
	            "colour": "bbffe5",
	            "industryTitle": "珠宝配饰",
	            "_pos_": 6,
	            "industryBenefit": "大牌1折秒杀",
	            "industryId": "3",
	            "industryImg": "//img.alicdn.com/tps/i1/TB1s5y.LVXXXXb.aXXXrdvGIFXX-248-155.jpg"
	          }, {
	            "finalScore": 0,
	            "industryUrl": "//pages.tmall.com/wow/act/15617/getbeauty?abbucket=_AB-M1011_B5&acm=03654.1003.1.735362&aldid=e5zPEI6R&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_2_735362&pos=7",
	            "entityType": "OTHER",
	            "colour": "ffd1b6",
	            "industryTitle": "美妆",
	            "_pos_": 7,
	            "industryBenefit": "即刻预约美丽",
	            "industryId": "2",
	            "industryImg": "//img.alicdn.com/tps/i1/TB1lNvoLVXXXXaoXFXXrdvGIFXX-248-155.jpg"
	          }, {
	            "finalScore": 0,
	            "industryUrl": "//pages.tmall.com/wow/act/15617/guojixfs?abbucket=_AB-M1011_B5&acm=03654.1003.1.735362&aldid=e5zPEI6R&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_1_735362&pos=8",
	            "entityType": "OTHER",
	            "colour": "b9eaf2",
	            "industryTitle": "天猫国际",
	            "_pos_": 8,
	            "industryBenefit": "唤醒全球潮流",
	            "industryId": "1",
	            "industryImg": "//img.alicdn.com/tps/i4/TB1JHbkLVXXXXblXFXXrdvGIFXX-248-155.jpg"
	          }, {
	            "finalScore": 0,
	            "industryUrl": "//pages.tmall.com/wow/act/15617/newnv?abbucket=_AB-M1011_B5&acm=03654.1003.1.735362&aldid=e5zPEI6R&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_10_735362&pos=9",
	            "entityType": "OTHER",
	            "colour": "fff8ee",
	            "industryTitle": "鞋履",
	            "_pos_": 9,
	            "industryBenefit": "潮品精选鞋履",
	            "industryId": "10",
	            "industryImg": "//img.alicdn.com/tps/i2/TB1RovwLVXXXXXnXpXXrdvGIFXX-248-155.jpg"
	          }, {
	            "finalScore": 0,
	            "industryUrl": "//pages.tmall.com/wow/act/15617/nvzhuang?abbucket=_AB-M1011_B5&acm=03654.1003.1.735362&aldid=e5zPEI6R&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_7_735362&pos=10",
	            "entityType": "OTHER",
	            "colour": "d5cbe8",
	            "industryTitle": "女装",
	            "_pos_": 10,
	            "industryBenefit": "折后用券抢新",
	            "industryId": "7",
	            "industryImg": "//img.alicdn.com/tps/i1/TB1BOncLVXXXXXSaXXXrdvGIFXX-248-155.jpg"
	          }, {
	            "finalScore": 0,
	            "industryUrl": "//pages.tmall.com/wow/act/15617/man?abbucket=_AB-M1011_B5&acm=03654.1003.1.735362&aldid=e5zPEI6R&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_6_735362&pos=11",
	            "entityType": "OTHER",
	            "colour": "cbe9a9",
	            "industryTitle": "男装",
	            "_pos_": 11,
	            "industryBenefit": "新品低至9.9元",
	            "industryId": "6",
	            "industryImg": "//img.alicdn.com/tps/i4/TB1t9TmLVXXXXbkXFXXrdvGIFXX-248-155.jpg"
	          }, {
	            "finalScore": 0,
	            "industryUrl": "//pages.tmall.com/wow/act/15617/myxfs?abbucket=_AB-M1011_B5&acm=03654.1003.1.735362&aldid=e5zPEI6R&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_5_735362&pos=12",
	            "entityType": "OTHER",
	            "colour": "f8e1ff",
	            "industryTitle": "母婴童装",
	            "_pos_": 12,
	            "industryBenefit": "跨店满299减40",
	            "industryId": "5",
	            "industryImg": "//img.alicdn.com/tps/i3/TB1kpziLVXXXXabXVXXrdvGIFXX-248-155.jpg"
	          }, {
	            "finalScore": 0,
	            "industryUrl": "//pages.tmall.com/wow/act/15617/jfjs?abbucket=_AB-M1011_B5&acm=03654.1003.1.735362&aldid=e5zPEI6R&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_4_735362&pos=13",
	            "entityType": "OTHER",
	            "colour": "bbffe5",
	            "industryTitle": "家纺家饰",
	            "_pos_": 13,
	            "industryBenefit": "全场低至9.9元",
	            "industryId": "4",
	            "industryImg": "//img.alicdn.com/tps/i1/TB1lUjzLVXXXXbAXXXXrdvGIFXX-248-155.jpg"
	          }, {
	            "finalScore": 0,
	            "industryUrl": "//pages.tmall.com/wow/act/15617/neiyi328?abbucket=_AB-M1011_B5&acm=03654.1003.1.735362&aldid=e5zPEI6R&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_9_735362&pos=14",
	            "entityType": "OTHER",
	            "colour": "ffc7c9",
	            "industryTitle": "内衣",
	            "_pos_": 14,
	            "industryBenefit": "新品3折起",
	            "industryId": "9",
	            "industryImg": "//img.alicdn.com/tps/i1/TB1S7PuLVXXXXcVXXXXrdvGIFXX-248-155.jpg"
	          }, {
	            "finalScore": 0,
	            "industryUrl": "//pages.tmall.com/wow/act/15617/ydhw?abbucket=_AB-M1011_B5&acm=03654.1003.1.735362&aldid=e5zPEI6R&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_8_735362&pos=15",
	            "entityType": "OTHER",
	            "colour": "cbdbfe",
	            "industryTitle": "运动户外",
	            "_pos_": 15,
	            "industryBenefit": "大牌新品抢券",
	            "industryId": "8",
	            "industryImg": "//img.alicdn.com/tps/i2/TB1mQDALVXXXXbdXXXXrdvGIFXX-248-155.jpg"
	          }],
	          "isFormal": false,
	          "exposureParam": "//ac.mmstat.com/1.gif?apply=vote&abbucket=_AB-M1011_B5&com=02&acm=03654.1003.1.735362&cod=03654&cache=CG5ZB02B&aldid=e5zPEI6R&logtype=4&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.735362&ip=42.120.74.159",
	          "id": "03654"
	        }
	      },
	      "brand": {
	        "floorTitle": "https://gw.alicdn.com/tps/TB1._64LVXXXXatXVXXXXXXXXXX-750-100.jpg",
	        "bannerItems": [{
	          "leftImg": "https://gw.alicdn.com/tps/TB1F2fJLVXXXXccXFXXXXXXXXXX-750-230.jpg",
	          "leftUrl": "https://chaoshi.m.tmall.com/",
	          "rightImg": "https://gw.alicdn.com/tps/TB1F2fJLVXXXXccXFXXXXXXXXXX-750-230.jpg",
	          "rightUrl": "https://chaoshi.m.tmall.com/"
	        }, {
	          "leftImg": "https://gw.alicdn.com/tps/TB1F2fJLVXXXXccXFXXXXXXXXXX-750-230.jpg",
	          "leftUrl": "https://chaoshi.m.tmall.com/",
	          "rightImg": "https://gw.alicdn.com/tps/TB1F2fJLVXXXXccXFXXXXXXXXXX-750-230.jpg",
	          "rightUrl": "https://chaoshi.m.tmall.com/"
	        }, {
	          "leftImg": "https://gw.alicdn.com/tps/TB1F2fJLVXXXXccXFXXXXXXXXXX-750-230.jpg",
	          "leftUrl": "https://chaoshi.m.tmall.com/",
	          "rightImg": "https://gw.alicdn.com/tps/TB1F2fJLVXXXXccXFXXXXXXXXXX-750-230.jpg",
	          "rightUrl": "https://chaoshi.m.tmall.com/"
	        }, {
	          "leftImg": "https://gw.alicdn.com/tps/TB1F2fJLVXXXXccXFXXXXXXXXXX-750-230.jpg",
	          "leftUrl": "https://chaoshi.m.tmall.com/",
	          "rightImg": "https://gw.alicdn.com/tps/TB1F2fJLVXXXXccXFXXXXXXXXXX-750-230.jpg",
	          "rightUrl": "https://chaoshi.m.tmall.com/"
	        }, {
	          "leftImg": "https://gw.alicdn.com/tps/TB1F2fJLVXXXXccXFXXXXXXXXXX-750-230.jpg",
	          "leftUrl": "https://chaoshi.m.tmall.com/",
	          "rightImg": "https://gw.alicdn.com/tps/TB1F2fJLVXXXXccXFXXXXXXXXXX-750-230.jpg",
	          "rightUrl": "https://chaoshi.m.tmall.com/"
	        }, {
	          "leftImg": "https://gw.alicdn.com/tps/TB1F2fJLVXXXXccXFXXXXXXXXXX-750-230.jpg",
	          "leftUrl": "https://chaoshi.m.tmall.com/",
	          "rightImg": "https://gw.alicdn.com/tps/TB1F2fJLVXXXXccXFXXXXXXXXXX-750-230.jpg",
	          "rightUrl": "https://chaoshi.m.tmall.com/"
	        }, {
	          "leftImg": "https://gw.alicdn.com/tps/TB1F2fJLVXXXXccXFXXXXXXXXXX-750-230.jpg",
	          "leftUrl": "https://chaoshi.m.tmall.com/",
	          "rightImg": "https://gw.alicdn.com/tps/TB1F2fJLVXXXXccXFXXXXXXXXXX-750-230.jpg",
	          "rightUrl": "https://chaoshi.m.tmall.com/"
	        }, {
	          "leftImg": "https://gw.alicdn.com/tps/TB1F2fJLVXXXXccXFXXXXXXXXXX-750-230.jpg",
	          "leftUrl": "https://chaoshi.m.tmall.com/",
	          "rightImg": "https://gw.alicdn.com/tps/TB1F2fJLVXXXXccXFXXXXXXXXXX-750-230.jpg",
	          "rightUrl": "https://chaoshi.m.tmall.com/"
	        }, {
	          "leftImg": "https://gw.alicdn.com/tps/TB1F2fJLVXXXXccXFXXXXXXXXXX-750-230.jpg",
	          "leftUrl": "https://chaoshi.m.tmall.com/",
	          "rightImg": "https://gw.alicdn.com/tps/TB1F2fJLVXXXXccXFXXXXXXXXXX-750-230.jpg",
	          "rightUrl": "https://chaoshi.m.tmall.com/"
	        }]
	      },
	      "match": {
	        "floorTitle": "https://gw.alicdn.com/tps/TB1._64LVXXXXatXVXXXXXXXXXX-750-100.jpg",
	        "isShowTmSpecBanner": true,
	        "tmSpecBanner": {
	          "img": "https://gw.alicdn.com/tps/TB1F2fJLVXXXXccXFXXXXXXXXXX-750-230.jpg",
	          "url": "https://chaoshi.m.tmall.com/"
	        },
	        "bannerItems": [{
	          "leftImg": "https://gw.alicdn.com/tps/TB1OUnILVXXXXcoXFXXXXXXXXXX-374-416.jpg",
	          "leftUrl": "https://chaoshi.m.tmall.com/",
	          "rightImg": "https://gw.alicdn.com/tps/TB1OUnILVXXXXcoXFXXXXXXXXXX-374-416.jpg",
	          "rightUrl": "https://chaoshi.m.tmall.com/"
	        }, {
	          "leftImg": "https://gw.alicdn.com/tps/TB1OUnILVXXXXcoXFXXXXXXXXXX-374-416.jpg",
	          "leftUrl": "https://chaoshi.m.tmall.com/",
	          "rightImg": "https://gw.alicdn.com/tps/TB1OUnILVXXXXcoXFXXXXXXXXXX-374-416.jpg",
	          "rightUrl": "https://chaoshi.m.tmall.com/"
	        }]
	      }
	    };
	    this.simLoadingData(this.cnt++);
	  },
	  methods: {
	    handleRefresh: function (e) {
	      var vm = this;
	      vm.displayRefresh = 'show';
	      if (timer) {
	        timer.setTimeout(function () {
	          vm.displayRefresh = 'hide';
	        }, 2000);
	      } else {
	        modal.alert({
	          message: 'refreshing.'
	        }, function () {
	          vm.displayRefresh = 'hide';
	        });
	      }
	    },
	    handleLoading: function (e) {
	      var vm = this;
	      vm.displayLoading = 'show';
	      modal.toast({
	        message: 'loading.'
	      });
	      if (timer) {
	        timer.setTimeout(function () {
	          vm.simLoadingData(vm.cnt++);
	          vm.displayLoading = 'hide';
	        }, 2000);
	      } else {
	        vm.simLoadingData(vm.cnt++);
	        vm.displayLoading = 'hide';
	      }
	    },
	    simLoadingData: function (num) {
	      if (num >= 3) {
	        modal.toast({
	          message: '已到底部'
	        });
	        return;
	      }
	      this['show' + num] = true;
	    }
	  }
	};

/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter?id=data-v-976b0ee8!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./headlines.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(165),
	  /* template */
	  __webpack_require__(166),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\showcase\\include\\headlines.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] headlines.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-976b0ee8", Component.options)
	  } else {
	    hotAPI.reload("data-v-976b0ee8", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },

/***/ 165:
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
	
	module.exports = {
	  components: {
	    link: __webpack_require__(149),
	    banners: __webpack_require__(138)
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
	      NUMBER_233: 233,
	      NUMBER_172: 172,
	      NUMBER_3: 3
	    };
	  }
	};

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [_c('image', {
	    staticClass: "banner",
	    attrs: {
	      "src": _vm.ds.topBanner
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "rule-container"
	  }, [_c('link', {
	    staticStyle: {
	      "font-size": "22px",
	      "color": "#ffffff",
	      "text-align": "center"
	    },
	    attrs: {
	      "text": "帮助",
	      "href": _vm.ds.ruleLink
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "announce"
	  }, [_c('image', {
	    staticClass: "announce-hd",
	    attrs: {
	      "src": _vm.ds.announceHdBanner
	    }
	  }), _vm._v(" "), _c('banners', {
	    staticStyle: {
	      "margin-left": "6",
	      "margin-right": "6"
	    },
	    attrs: {
	      "ds": _vm.ds.bannerItems,
	      "direction": "row",
	      "width": _vm.NUMBER_233,
	      "height": _vm.NUMBER_172,
	      "space": _vm.NUMBER_3
	    }
	  })], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-976b0ee8", module.exports)
	  }
	}

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter?id=data-v-457da1a1!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./category.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(168),
	  /* template */
	  __webpack_require__(169),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\showcase\\include\\category.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] category.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-457da1a1", Component.options)
	  } else {
	    hotAPI.reload("data-v-457da1a1", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },

/***/ 168:
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
	
	var demoContent = {
	  "main": [{
	    "shopList": [{
	      "id": "619123122",
	      "picUrl": "//img.alicdn.com/tps/i1/TB1Cl5MLVXXXXXTaXXXSutbFXXX.jpg",
	      "finalScore": "0.884765209440857",
	      "shopUrl": "http://liangpinpuzi.tmall.com/campaign-3735-7.htm",
	      "entityType": "SHOP",
	      "brandId": "7724367"
	    }, {
	      "id": "880734502",
	      "picUrl": "//img.alicdn.com/tps/i1/TB1HN2XLVXXXXbkXFXXSutbFXXX.jpg",
	      "finalScore": "0.8822246866512714",
	      "shopUrl": "http://sanzhisongshu.tmall.com/campaign-3735-7.htm",
	      "entityType": "SHOP",
	      "brandId": "147280915"
	    }, {
	      "id": "392147177",
	      "picUrl": "//img.alicdn.com/tps/i1/TB1yq6dLVXXXXbXXpXXSutbFXXX.jpg",
	      "finalScore": "0.8805854724243631",
	      "shopUrl": "http://zhouheiya.tmall.com/campaign-3735-6.htm",
	      "entityType": "SHOP",
	      "brandId": "111496"
	    }, {
	      "id": "2081058060",
	      "picUrl": "//img.alicdn.com/tps/i1/TB1w4jxLVXXXXaxXXXXtKXbFXXX.gif",
	      "finalScore": "0.8640439551049249",
	      "shopUrl": "http://rongxintang.tmall.com/campaign-3735-6.htm",
	      "entityType": "SHOP",
	      "brandId": "8709890"
	    }],
	    "finalScore": "4.657333333333334",
	    "industryUrl": null,
	    "entityType": "OTHER",
	    "colour": "#fff5a3",
	    "industryTitle": null,
	    "bannerUrl": "//pages.tmall.com/wow/act/15617/newfood?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_12_735362&pos=1",
	    "leftBannerImg": "http://img.alicdn.com/tps/i1/TB1LHh4MXXXXXbsXpXXeWjm2pXX-750-240.jpg",
	    "_pos_": "1",
	    "industryBenefit": null,
	    "industryId": "12",
	    "industryImg": null,
	    "rightBannerImg": "//img.alicdn.com/tps/i4/TB1wshUMXXXXXXaXVXXeWjm2pXX-750-240.jpg"
	  }, {
	    "shopList": [{
	      "id": "520557274",
	      "picUrl": "//img.alicdn.com/tps/i1/TB1aMjXLVXXXXbUaXXXSutbFXXX.jpg",
	      "finalScore": "0.8986382989845325",
	      "shopUrl": "http://newbalance.tmall.com/campaign-3735-20.htm",
	      "entityType": "SHOP",
	      "brandId": "20584"
	    }, {
	      "id": "746866993",
	      "picUrl": "//img.alicdn.com/tps/i1/TB1pXG9LVXXXXaLXFXXSutbFXXX.jpg",
	      "finalScore": "0.8917855242977327",
	      "shopUrl": "http://vans.tmall.com/campaign-3735-19.htm",
	      "entityType": "SHOP",
	      "brandId": "29529"
	    }, {
	      "id": "1612713147",
	      "picUrl": "//img.alicdn.com/tps/i1/TB1jHfXLVXXXXXPXFXXSutbFXXX.jpg",
	      "finalScore": "0.8895943606442631",
	      "shopUrl": "http://dcshoecousa.tmall.com/campaign-3735-8.htm",
	      "entityType": "SHOP",
	      "brandId": "3851662"
	    }, {
	      "id": "2379251418",
	      "picUrl": "//img.alicdn.com/tps/i1/TB1sbLlLVXXXXbeXXXXSutbFXXX.jpg",
	      "finalScore": "0.8881539668874383",
	      "shopUrl": "http://baijinydhw.tmall.com/campaign-3735-2.htm",
	      "entityType": "SHOP",
	      "brandId": "20579"
	    }],
	    "finalScore": "4.545333333333334",
	    "industryUrl": null,
	    "entityType": "OTHER",
	    "colour": "#cbdbfe",
	    "industryTitle": null,
	    "bannerUrl": "//pages.tmall.com/wow/act/15617/ydhw?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_8_735362&pos=2",
	    "leftBannerImg": "http://img.alicdn.com/tps/i3/TB1h4kzLVXXXXawXpXXeWjm2pXX-750-240.jpg",
	    "_pos_": "2",
	    "industryBenefit": null,
	    "industryId": "8",
	    "industryImg": null,
	    "rightBannerImg": "//img.alicdn.com/tps/i4/TB19VMjLVXXXXaeaXXXeWjm2pXX-750-240.jpg"
	  }, {
	    "shopList": [{
	      "id": "811383091",
	      "picUrl": "//img.alicdn.com/tps/i1/TB1q49ZLVXXXXaJXVXXSutbFXXX.jpg",
	      "finalScore": "0.8723682716749482",
	      "shopUrl": "http://tongrentangbj.tmall.com/campaign-3735-9.htm",
	      "entityType": "SHOP",
	      "brandId": "44652"
	    }, {
	      "id": "838914626",
	      "picUrl": "//img.alicdn.com/tps/i1/TB1GQYbLVXXXXaXXVXXSutbFXXX.jpg",
	      "finalScore": "0.5027131908086584",
	      "shopUrl": "http://jouo.tmall.com/campaign-3735-3.htm",
	      "entityType": "SHOP",
	      "brandId": "14170081"
	    }, {
	      "id": "1077716829",
	      "picUrl": "//img.alicdn.com/tps/i1/TB1rdW2LVXXXXagapXXSutbFXXX.jpg",
	      "finalScore": "0.5015387557024262",
	      "shopUrl": "http://wetcode.tmall.com/campaign-3735-14.htm",
	      "entityType": "SHOP",
	      "brandId": "3675642"
	    }, {
	      "id": "1664976033",
	      "picUrl": "//img.alicdn.com/tps/i1/TB1Q.rpLVXXXXXiXpXXSutbFXXX.jpg",
	      "finalScore": "0.5014897109669442",
	      "shopUrl": "http://hanhoohzp.tmall.com/campaign-3735-17.htm",
	      "entityType": "SHOP",
	      "brandId": "78888695"
	    }],
	    "finalScore": "4.526666666666666",
	    "industryUrl": null,
	    "entityType": "OTHER",
	    "colour": "#ffd1b6",
	    "industryTitle": null,
	    "bannerUrl": "//pages.tmall.com/wow/act/15617/getbeauty?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_2_735362&pos=3",
	    "leftBannerImg": "http://img.alicdn.com/tps/i4/TB1Djt9MXXXXXanXXXXeWjm2pXX-750-240.jpg",
	    "_pos_": "3",
	    "industryBenefit": null,
	    "industryId": "2",
	    "industryImg": null,
	    "rightBannerImg": "//img.alicdn.com/tps/i3/TB1_gVQMXXXXXX9XVXXeWjm2pXX-750-240.jpg"
	  }, {
	    "shopList": [{
	      "id": "2153169655",
	      "picUrl": "//img.alicdn.com/tps/i1/TB1nlK7LVXXXXaRXFXXSutbFXXX.jpg",
	      "finalScore": "0.8820210808835905",
	      "shopUrl": "http://ctkicks.tmall.com/campaign-3735-15.htm",
	      "entityType": "SHOP",
	      "brandId": "20584"
	    }, {
	      "id": "2784101115",
	      "picUrl": "//img.alicdn.com/tps/i1/TB1RrS.LVXXXXcrXpXXSutbFXXX.jpg",
	      "finalScore": "0.5930383227012586",
	      "shopUrl": "http://tomtailor.tmall.com/campaign-3735-0.htm",
	      "entityType": "SHOP",
	      "brandId": "213474060"
	    }, {
	      "id": "2183813726",
	      "picUrl": "//img.alicdn.com/tps/i1/TB1kmS_LVXXXXaBaXXXSutbFXXX.jpg",
	      "finalScore": "0.5882558957771681",
	      "shopUrl": "http://huaiyuan.tmall.com/campaign-3735-5.htm",
	      "entityType": "SHOP",
	      "brandId": "29465"
	    }, {
	      "id": "1785908005",
	      "picUrl": "//img.alicdn.com/tps/i1/TB1dB6zLVXXXXcJXXXXSutbFXXX.jpg",
	      "finalScore": "0.5694211862124341",
	      "shopUrl": "http://axonus.tmall.com/campaign-3735-1.htm",
	      "entityType": "SHOP",
	      "brandId": "115035841"
	    }],
	    "finalScore": "4.413955555555555",
	    "industryUrl": null,
	    "entityType": "OTHER",
	    "colour": "#b9eaf2",
	    "industryTitle": null,
	    "bannerUrl": "//pages.tmall.com/wow/act/15617/guojixfs?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_1_735362&pos=4",
	    "leftBannerImg": "http://img.alicdn.com/tps/i3/TB1_T7ALVXXXXXOXXXXeWjm2pXX-750-240.jpg",
	    "_pos_": "4",
	    "industryBenefit": null,
	    "industryId": "1",
	    "industryImg": null,
	    "rightBannerImg": "//img.alicdn.com/tps/i2/TB1s7koLVXXXXafXFXXeWjm2pXX-750-240.jpg"
	  }, {
	    "shopList": [{
	      "id": "2453054335",
	      "picUrl": "//img.alicdn.com/tps/i1/TB1RX_vLVXXXXchXpXXSutbFXXX.jpg",
	      "finalScore": "0.8463447899590267",
	      "shopUrl": "http://nanshizixing.tmall.com/campaign-3735-2.htm",
	      "entityType": "SHOP",
	      "brandId": "844502560"
	    }, {
	      "id": "1041773234",
	      "picUrl": "//img.alicdn.com/tps/i1/TB1Q7jpLVXXXXX8XpXXSutbFXXX.jpg",
	      "finalScore": "0.560952734503075",
	      "shopUrl": "http://dapu.tmall.com/campaign-3735-8.htm",
	      "entityType": "SHOP",
	      "brandId": "14493763"
	    }, {
	      "id": "300031438",
	      "picUrl": "//img.alicdn.com/tps/i1/TB13VC4LVXXXXarXVXXSutbFXXX.jpg",
	      "finalScore": "0.5450674634839442",
	      "shopUrl": "http://kangerxin.tmall.com/campaign-3735-10.htm",
	      "entityType": "SHOP",
	      "brandId": "3781905"
	    }, {
	      "id": "92042735",
	      "picUrl": "//img.alicdn.com/tps/i1/TB1PxYcLVXXXXasaXXXSutbFXXX.jpg",
	      "finalScore": "0.5448023228053981",
	      "shopUrl": "http://shuixing.tmall.com/campaign-3735-10.htm",
	      "entityType": "SHOP",
	      "brandId": "3685660"
	    }],
	    "finalScore": "4.13",
	    "industryUrl": null,
	    "entityType": "OTHER",
	    "colour": "#bbffe5",
	    "industryTitle": null,
	    "bannerUrl": "//pages.tmall.com/wow/act/15617/jfjs?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_4_735362&pos=5",
	    "leftBannerImg": "http://img.alicdn.com/tps/i3/TB1jeoCLVXXXXcoXXXXeWjm2pXX-750-240.jpg",
	    "_pos_": "5",
	    "industryBenefit": null,
	    "industryId": "4",
	    "industryImg": null,
	    "rightBannerImg": "//img.alicdn.com/tps/i4/TB1C5.fLVXXXXb3aXXXeWjm2pXX-750-240.jpg"
	  }, {
	    "shopList": [{
	      "id": "822428555",
	      "picUrl": "//img.alicdn.com/tps/i1/TB1g46aLVXXXXcUXVXXSutbFXXX.jpg",
	      "finalScore": "0.9183458776971917",
	      "shopUrl": "http://playboyyd.tmall.com/campaign-3735-11.htm",
	      "entityType": "SHOP",
	      "brandId": "29510"
	    }, {
	      "id": "196993935",
	      "picUrl": "//img.alicdn.com/tps/i1/TB1pHG8LVXXXXbraXXXSutbFXXX.jpg",
	      "finalScore": "0.9105525246667775",
	      "shopUrl": "https://uniqlo.tmall.com/campaign-3735-56.htm",
	      "entityType": "SHOP",
	      "brandId": "29527"
	    }, {
	      "id": "505753958",
	      "picUrl": "//img.alicdn.com/tps/i1/TB1WKYyLVXXXXXHXXXXSutbFXXX.jpg",
	      "finalScore": "0.90750966370726",
	      "shopUrl": "http://bonas.tmall.com/campaign-3735-11.htm",
	      "entityType": "SHOP",
	      "brandId": "3486580"
	    }, {
	      "id": "2113823580",
	      "picUrl": "//img.alicdn.com/tps/i1/TB1itHkLVXXXXX9XFXXSutbFXXX.jpg",
	      "finalScore": "0.5900977955635289",
	      "shopUrl": "http://kafanya.tmall.com/campaign-3735-7.htm",
	      "entityType": "SHOP",
	      "brandId": "110684218"
	    }],
	    "finalScore": "4.088",
	    "industryUrl": null,
	    "entityType": "OTHER",
	    "colour": "#ffc7c9",
	    "industryTitle": null,
	    "bannerUrl": "//pages.tmall.com/wow/act/15617/neiyi328?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_9_735362&pos=6",
	    "leftBannerImg": "http://img.alicdn.com/tps/i1/TB1tl3tLVXXXXbbXFXXeWjm2pXX-750-240.jpg",
	    "_pos_": "6",
	    "industryBenefit": null,
	    "industryId": "9",
	    "industryImg": null,
	    "rightBannerImg": "//img.alicdn.com/tps/i2/TB1AkIyLVXXXXbjXpXXeWjm2pXX-750-240.jpg"
	  }],
	  "sub": [{
	    "shopList": null,
	    "finalScore": "4.033333333333333",
	    "industryUrl": "//pages.tmall.com/wow/act/15617/zbps?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_3_735362&pos=7",
	    "entityType": "OTHER",
	    "colour": "#bbffe5",
	    "industryTitle": "珠宝配饰",
	    "bannerUrl": null,
	    "leftBannerImg": null,
	    "_pos_": "7",
	    "industryBenefit": "大牌1折秒杀",
	    "industryId": "3",
	    "industryImg": "//img.alicdn.com/tps/i1/TB1s5y.LVXXXXb.aXXXrdvGIFXX-248-155.jpg",
	    "rightBannerImg": null
	  }, {
	    "shopList": null,
	    "finalScore": "3.8773333333333335",
	    "industryUrl": "//pages.tmall.com/wow/act/15617/dqc?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_15_735362&pos=8",
	    "entityType": "OTHER",
	    "colour": "#b4ebff",
	    "industryTitle": "数码",
	    "bannerUrl": null,
	    "leftBannerImg": null,
	    "_pos_": "8",
	    "industryBenefit": "疯抢大牌新品",
	    "industryId": "15",
	    "industryImg": "//img.alicdn.com/tps/i4/TB1_xG.LVXXXXbWaXXXrdvGIFXX-248-155.jpg",
	    "rightBannerImg": null
	  }, {
	    "shopList": null,
	    "finalScore": "3.8359999999999994",
	    "industryUrl": "//pages.tmall.com/wow/act/15617/man?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_6_735362&pos=9",
	    "entityType": "OTHER",
	    "colour": "#cbe9a9",
	    "industryTitle": "男装",
	    "bannerUrl": null,
	    "leftBannerImg": null,
	    "_pos_": "9",
	    "industryBenefit": "新品低至9.9元",
	    "industryId": "6",
	    "industryImg": "//img.alicdn.com/tps/i1/TB1mO2qLVXXXXXiXFXXrdvGIFXX-248-155.jpg",
	    "rightBannerImg": null
	  }, {
	    "shopList": null,
	    "finalScore": "3.243333333333333",
	    "industryUrl": "//pages.tmall.com/wow/act/15617/xihu?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_13_735362&pos=10",
	    "entityType": "OTHER",
	    "colour": "#cdffa4",
	    "industryTitle": "洗护",
	    "bannerUrl": null,
	    "leftBannerImg": null,
	    "_pos_": "10",
	    "industryBenefit": "爆款1分钱抢",
	    "industryId": "13",
	    "industryImg": "//img.alicdn.com/tps/i3/TB1Ft_CLVXXXXX2XXXXrdvGIFXX-248-155.jpg",
	    "rightBannerImg": null
	  }, {
	    "shopList": null,
	    "finalScore": "3.1553333333333335",
	    "industryUrl": "//pages.tmall.com/wow/act/15617/myxfs?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_5_735362&pos=11",
	    "entityType": "OTHER",
	    "colour": "#f8e1ff",
	    "industryTitle": "母婴童装",
	    "bannerUrl": null,
	    "leftBannerImg": null,
	    "_pos_": "11",
	    "industryBenefit": "跨店满299减40",
	    "industryId": "5",
	    "industryImg": "//img.alicdn.com/tps/i4/TB1c.HvLVXXXXXPXpXXrdvGIFXX-248-155.jpg",
	    "rightBannerImg": null
	  }, {
	    "shopList": null,
	    "finalScore": "2.6739999999999995",
	    "industryUrl": "//pages.tmall.com/wow/act/15617/nvzhuang?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_7_735362&pos=12",
	    "entityType": "OTHER",
	    "colour": "#d5cbe8",
	    "industryTitle": "女装",
	    "bannerUrl": null,
	    "leftBannerImg": null,
	    "_pos_": "12",
	    "industryBenefit": "折后用券抢新",
	    "industryId": "7",
	    "industryImg": "//img.alicdn.com/tps/i3/TB1JdfsLVXXXXbRXpXXrdvGIFXX-248-155.jpg",
	    "rightBannerImg": null
	  }, {
	    "shopList": null,
	    "finalScore": "0.0",
	    "industryUrl": "//pages.tmall.com/wow/act/15617/mobilephone?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_14_735362&pos=13",
	    "entityType": "OTHER",
	    "colour": "#c5ffdf",
	    "industryTitle": "手机",
	    "bannerUrl": null,
	    "leftBannerImg": null,
	    "_pos_": "13",
	    "industryBenefit": "1元抢优惠券",
	    "industryId": "14",
	    "industryImg": "//img.alicdn.com/tps/i4/TB1M3zhLVXXXXX4XVXXrdvGIFXX-248-155.jpg",
	    "rightBannerImg": null
	  }, {
	    "shopList": null,
	    "finalScore": "0.0",
	    "industryUrl": "//pages.tmall.com/wow/act/15617/xiangbaohuanxin?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_11_735362&pos=14",
	    "entityType": "OTHER",
	    "colour": "#ffccdc",
	    "industryTitle": "箱包",
	    "bannerUrl": null,
	    "leftBannerImg": null,
	    "_pos_": "14",
	    "industryBenefit": "极致焕新尖货",
	    "industryId": "11",
	    "industryImg": "//img.alicdn.com/tps/i3/TB1gE6kLVXXXXcrXFXXrdvGIFXX-248-155.jpg",
	    "rightBannerImg": null
	  }, {
	    "shopList": null,
	    "finalScore": "0.0",
	    "industryUrl": "//pages.tmall.com/wow/act/15617/newnv?abbucket=_AB-M1011_B14&acm=03654.1003.1.735362&aldid=KXPpnvEH&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.OTHER_10_735362&pos=15",
	    "entityType": "OTHER",
	    "colour": "#fff8ee",
	    "industryTitle": "鞋履",
	    "bannerUrl": null,
	    "leftBannerImg": null,
	    "_pos_": "15",
	    "industryBenefit": "潮品精选鞋履",
	    "industryId": "10",
	    "industryImg": "//img.alicdn.com/tps/i3/TB1.qzpLVXXXXX.XFXXrdvGIFXX-248-155.jpg",
	    "rightBannerImg": null
	  }],
	  "isFormal": "false",
	  "exposureParam": "//ac.mmstat.com/1.gif?apply=vote&abbucket=_AB-M1011_B14&com=02&acm=03654.1003.1.735362&cod=03654&cache=U5revsTn&aldid=KXPpnvEH&logtype=4&abtest=_AB-LR1011-PR1011&scm=1003.1.03654.735362&ip=",
	  "id": "03654"
	};
	
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
	      NUMBER_248: 248,
	      NUMBER_155: 155,
	      NUMBER_373: 373,
	      NUMBER_237: 237,
	      NUMBER_186: 186,
	      NUMBER_208: 208,
	      NUMBER_750: 750,
	      subItemBg: '//gw.alicdn.com/tps/TB1QzUfLVXXXXaOXVXXXXXXXXXX-248-86.jpg',
	      items: [],
	      subItems: []
	    };
	  },
	  created: function () {
	    this.initData(demoContent);
	  },
	  methods: {
	    getSubItemTop: function (i) {
	      return (i - i % 3) / 3 * (241 + 3);
	    },
	    getSubItemLeft: function (i) {
	      return i % 3 * (248 + 3);
	    },
	    initData: function (content) {
	      this.items = content.main;
	      this.subItems = content.sub;
	    }
	  }
	};

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [(_vm.ds.floorTitle) ? _c('image', {
	    staticClass: "title",
	    attrs: {
	      "src": _vm.ds.floorTitle
	    }
	  }) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "item-container"
	  }, _vm._l((_vm.items), function(i, item) {
	    return _c('div', {
	      style: ({
	        width: 750,
	        paddingBottom: 14,
	        backgroundColor: item.colour
	      })
	    }, [_c('div', [_c('banner', {
	      attrs: {
	        "width": _vm.NUMBER_750,
	        "height": _vm.NUMBER_237,
	        "src": i % 2 === 0 ? item.leftBannerImg : item.rightBannerImg,
	        "href": item.bannerUrl
	      }
	    })], 1), _vm._v(" "), _c('div', {
	      staticClass: "shop-list"
	    }, _vm._l((item.shopList), function(shop) {
	      return _c('div', {
	        staticClass: "shop-img-container"
	      }, [_c('banner', {
	        attrs: {
	          "width": _vm.NUMBER_186,
	          "height": _vm.NUMBER_208,
	          "src": shop.picUrl,
	          "href": shop.shopUrl
	        }
	      })], 1)
	    }))])
	  })), _vm._v(" "), _c('div', {
	    staticClass: "sub-item-container",
	    style: ({
	      height: Math.round(_vm.subItems.length / 3) * (241 + 3)
	    })
	  }, _vm._l((_vm.subItems), function(i, item) {
	    return _c('div', {
	      staticClass: "sub-item",
	      style: ({
	        top: _vm.getSubItemTop(i),
	        left: _vm.getSubItemLeft(i)
	      })
	    }, [_c('image', {
	      staticClass: "sub-item-bg",
	      attrs: {
	        "src": _vm.subItemBg
	      }
	    }), _vm._v(" "), _c('div', {
	      staticClass: "sub-item-img"
	    }, [_c('banner', {
	      attrs: {
	        "width": _vm.NUMBER_248,
	        "height": _vm.NUMBER_155,
	        "src": item.industryImg,
	        "href": item.industryUrl
	      }
	    })], 1), _vm._v(" "), _c('div', {
	      staticClass: "sub-item-title"
	    }, [_c('text', {
	      staticClass: "industry-title",
	      attrs: {
	        "href": item.industryUrl
	      }
	    }, [_vm._v(_vm._s(item.industryTitle))]), _vm._v(" "), _c('text', {
	      staticClass: "industry-benefit",
	      attrs: {
	        "href": item.industryUrl
	      }
	    }, [_vm._v(_vm._s(item.industryBenefit))])])])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-457da1a1", module.exports)
	  }
	}

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter?id=data-v-0636af89!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./coupon.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(171),
	  /* template */
	  __webpack_require__(172),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\showcase\\include\\coupon.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] coupon.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0636af89", Component.options)
	  } else {
	    hotAPI.reload("data-v-0636af89", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },

/***/ 171:
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
	
	var modal = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/modal\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	module.exports = {
	  props: {
	    ds: {
	      default: function () {
	        return {};
	      }
	    }
	  },
	  data: function () {
	    return {
	      currentStatus: '//img.alicdn.com/tps/i4/TB1cYBKMXXXXXayaXXXkxHk2pXX-750-228.jpg_q75.jpg'
	    };
	  },
	  methods: {
	    handleClick: function (e) {
	      modal.toast({
	        message: 'click',
	        duration: 1
	      });
	    }
	  }
	};

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [(_vm.ds.floorTitle) ? _c('image', {
	    staticClass: "title",
	    attrs: {
	      "src": _vm.ds.floorTitle
	    }
	  }) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "wrapper"
	  }, [_c('image', {
	    staticClass: "img",
	    attrs: {
	      "src": _vm.currentStatus
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "my-coupon",
	    on: {
	      "click": _vm.handleClick
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "guides",
	    on: {
	      "click": _vm.handleClick
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "lottery",
	    on: {
	      "click": _vm.handleClick
	    }
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0636af89", module.exports)
	  }
	}

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter?id=data-v-74993c7a!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./goods.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(174),
	  /* template */
	  __webpack_require__(175),
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

/***/ 174:
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

/***/ 175:
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

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter?id=data-v-152ca0b1!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./resource.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(177),
	  /* template */
	  __webpack_require__(178),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\showcase\\include\\resource.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] resource.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-152ca0b1", Component.options)
	  } else {
	    hotAPI.reload("data-v-152ca0b1", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },

/***/ 177:
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
	
	module.exports = {
	  components: {
	    banners: __webpack_require__(138),
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
	      NUMBER_750: 750,
	      NUMBER_200: 200,
	      NUMBER_373: 373,
	      NUMBER_224: 224,
	      NUMBER_4: 4
	    };
	  }
	};

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (!_vm.ds.isHide) ? _c('div', [_c('div', {
	    staticClass: "big-banner-container"
	  }, [_c('banner', {
	    attrs: {
	      "width": _vm.NUMBER_750,
	      "height": _vm.NUMBER_200,
	      "src": _vm.ds.bigBannerImg,
	      "href": _vm.ds.bigBannerUrl
	    }
	  })], 1), _vm._v(" "), _c('banners', {
	    attrs: {
	      "direction": "row",
	      "ds": _vm.ds.smallBannerItems,
	      "width": _vm.NUMBER_373,
	      "height": _vm.NUMBER_224,
	      "space": _vm.NUMBER_4
	    }
	  })], 1) : _vm._e()
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-152ca0b1", module.exports)
	  }
	}

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter?id=data-v-4cb1500e!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./scene.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(180),
	  /* template */
	  __webpack_require__(181),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\showcase\\include\\scene.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] scene.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4cb1500e", Component.options)
	  } else {
	    hotAPI.reload("data-v-4cb1500e", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },

/***/ 180:
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
	
	var demoContent = [{
	  "id": "1111",
	  "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.740603&aldid=VyrSqx06&wh_id=1392&scm=1003.1.03653.SUB_1111_740603&pos=1",
	  "_s_": "d",
	  "itemImg": "https://img.alicdn.com/tps/TB1c7t.MXXXXXchXXXXXXXXXXXX-182-206.jpg",
	  "sceneCat": "50012010,50012027,50012032,50007003,50008881,50008883,1623,162116,50010850,123216004",
	  "finalScore": "10000.0",
	  "_pos_": "1",
	  "entityType": "SUB",
	  "benefitImg": "//img.alicdn.com/tps/TB1Zgl2MXXXXXaYXFXXXXXXXXXX-170-100.png"
	}, {
	  "id": "1396",
	  "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.740603&aldid=VyrSqx06&wh_id=1396&scm=1003.1.03653.SUB_1396_740603&pos=2",
	  "_s_": "d",
	  "itemImg": "//img.alicdn.com/tps/i2/TB1O1VfMXXXXXX0aXXXKofZZpXX-182-206.jpg",
	  "sceneCat": "50010368,50011892,50011894,50013794,50010792,50010790,50010790,121434025,121396024,50010793,50010789,50010793,121386035,121392037,121458034,121392036,121482027,121392015,121368014,121418013,121392016,50011982,122690003,302910,50012010,122654005,50012019,50012825,50012027,50012042,50011744,50012906,50012907,50008881,50008883,50008882?,50012784?,50022889,50022728,50013228,50013896,50014775,50019578,50014822,50026394,50019694,50019279,50019272,50014079,50014078,50014076,50014077,50017238,121464011,121468014,50019130,50019127,50019126,50019128,50019125,50015984,50014803,50014802,50015980,50014788,50014787,50019526,50014791,50019520,50013932,50014677,50015978,50014786,50014785,50522001,50014493,50023100,121418021,121388027,121424021,121418020,121368020,50012036,50012044,50012043,50010368, 50011892, 50019274,50012044,50012048,50012043,50013228,50013238,50011726,50019279,50015984,50014803,50014802,50019526,50014791,50019520,50013932,50014677,50019526,50013314,50023341,50016752,50016749,50016747,50016744,50016741,50016740,50016739,50016738,50016737,50016769,50016763,50016750,50007003,302910,50012010,50012032,50012033,50011745,50011746,50011894,121458034,121756003,121426033,50011982,50011979,121390006,124730001,50001748,50011130,124730001,50001748,50011130,50011129,50010160,50011161,50011159,50010159,50010158,50011127,3035,50010167,50000557,50011123,50010402,50000436,50011153,50010850,50000671,162201,50022566,50007068,50026651,50000852,162104,162116,162205,1623,123216004,162404,162401,50011412,50011411,162402,50008903,50011413,162403,50000697,1629,50011277,121412004,50008897,50008901,50008899,50013194,50008904,50008905,50008898,162103,50008900,50013196,121434004,50005065,162702,162701,162703,1636,1512,123534001,14,50008090,50012341,50132002,50012342,50012343,50012345,50012346,50013189,50010527,121394006,50013618,50010537,50012424,121452038,121484044,50010540,50010548,50024769,121450007,50013697,50010218,50005960,50005962,50012820,50012406,50023620,50023605,50008829,50024064,50023440,50008687,124392001,50023771,50006804,50012410,124482010,121398023,50023789,50011975",
	  "finalScore": "10000.0",
	  "_pos_": "2",
	  "entityType": "SUB",
	  "benefitImg": "//img.alicdn.com/tps/i1/TB1cp4sMXXXXXbLXFXX3bpXTXXX-170-100.png"
	}, {
	  "id": "1616",
	  "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.740603&aldid=VyrSqx06&wh_id=1616&scm=1003.1.03653.SUB_1616_740603&pos=3",
	  "_s_": "d",
	  "itemImg": "//img.alicdn.com/tps/i4/TB1dlEALVXXXXbxXpXXKofZZpXX-182-206.jpg",
	  "sceneCat": "50009032,50007003,302910,1512,124688012,124986002,124942005,50023722,50010368,50011892,50011894",
	  "finalScore": "10000.0",
	  "_pos_": "3",
	  "entityType": "SUB",
	  "benefitImg": "//img.alicdn.com/tps/i3/TB1fxonLVXXXXXUaXXX3bpXTXXX-170-100.png"
	}, {
	  "id": "16424",
	  "sceneUrl": "https://brand.tmall.com/mobilestreet/subject.htm?id=16424&acm=03653.1003.1.740603&aldid=VyrSqx06&spm=0.0.0.0.Wv8ion&scm=1003.1.03653.SUB_16424_740603&pos=4",
	  "_s_": "d",
	  "itemImg": "//img.alicdn.com/tps/i4/TB1.i2_LVXXXXbrXpXXKofZZpXX-182-206.jpg",
	  "sceneCat": "50012043,50012036,50010850,50000671,1622,50000852,162104,50000697,162205,162116,50012027,50012032,50012028,50012033,50012042,50008882,50012772,50006846,50008881,50000436,50011123,3035,50010167,50000557,50010158,50010159,50010402,50010160,50011980,50011993,121390006,50011978,50011977,50011979,121454013,50011745",
	  "finalScore": "6.729749999999999",
	  "_pos_": "4",
	  "entityType": "SUB",
	  "benefitImg": "//img.alicdn.com/tps/i2/TB1bhH5LVXXXXapXFXX3bpXTXXX-170-100.png"
	}, {
	  "id": "16425",
	  "sceneUrl": "https://brand.tmall.com/mobilestreet/subject.htm?id=16360&acm=03653.1003.1.740603&aldid=VyrSqx06&spm=0.0.0.0.MttFEC&scm=1003.1.03653.SUB_16425_740603&pos=5",
	  "_s_": "d",
	  "itemImg": "//img.alicdn.com/tps/i3/TB15ywbLVXXXXcdXXXXKofZZpXX-182-206.jpg",
	  "sceneCat": "50012043,50012036,50010850,50000671,1622,50000852,162104,50000697,162205,162116,50012027,50012032,50012028,50012033,50012042,50008882,50012772,50006846,50008881,50000436,50011123,3035,50010167,50000557,50010158,50010159,50010402,50010160,50011980,50011993,121390006,50011978,50011977,50011979,121454013,50011745",
	  "finalScore": "6.729749999999999",
	  "_pos_": "5",
	  "entityType": "SUB",
	  "benefitImg": "//img.alicdn.com/tps/i1/TB1JBLYLVXXXXXlXVXX3bpXTXXX-170-100.png"
	}, {
	  "id": "1625",
	  "sceneUrl": "https://pages.tmall.com/wow/fushi/act/gf-chaoliu?acm=03653.1003.1.740603&aldid=VyrSqx06&scm=1003.1.03653.SUB_1625_740603&pos=6",
	  "_s_": "d",
	  "itemImg": "//img.alicdn.com/bao/uploaded/i2/TB1Gd21KVXXXXXZXVXXXXXXXXXX_!!0-item_pic.jpg",
	  "sceneCat": "50012043,50012036,50010850,50000671,1622,50000852,162104,50000697,162205,162116,50012027,50012032,50012028,50012033,50012042,50008882,50012772,50006846,50008881,50000436,50011123,3035,50010167,50000557,50010158,50010159,50010402,50010160,50011980,50011993,121390006,50011978,50011977,50011979,121454013,50011982,50011991,50012906,50011744,50011745,50011743,50012907,50011746,50010815,121460005,50013794,122438001,121398006,121386023,50010808",
	  "finalScore": "6.729749999999999",
	  "_pos_": "6",
	  "entityType": "SUB",
	  "benefitImg": "//img.alicdn.com/tps/i3/TB1qxXzMXXXXXcjXFXX3bpXTXXX-170-100.png"
	}, {
	  "id": "1392",
	  "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.740603&aldid=VyrSqx06&wh_id=1392&scm=1003.1.03653.SUB_1392_740603&pos=7",
	  "_s_": "d",
	  "itemImg": "https://img.alicdn.com/tps/TB1c7t.MXXXXXchXXXXXXXXXXXX-182-206.jpg",
	  "sceneCat": "50006842,50006840,50008881,50008883,50008882,50008884,50012774,50012775,50012776,50012781,5000888,50012766,50012771,50012772,50010404,50010368, 50011892, 50011894,124688012,124730001,50001748,50011130,124730001,50001748,50011130,50011129,50010160,50011161,50011159,50010159,50010158,50011127,3035,50010167,50000557,50011123,50010402,50000436,50011153,50011740,50008882,50008886,50008885,50012777,50012778,50011977,50011978,50011979,50011980,50011982,50011990,50011999,50012000,50011993,50011996,50011997,121366011,121484009,121368010,121390006,121398029,121404030,121404031,121408040,121410035,121412033,121414041,121418013,121454013,121410013,121422013,121484013,50010789,50010790,50010792,50010793,50010794,50010796,50010797,50010798,50010801,50010803,50010805,50010807,50010808,50010815,121410007,121426007,121452004,121460005,50012341,50132002,50012342,50012343,50012345,50012346,50013189,50010527,121394006,50013618,50010537,50012424,121452038,121484044,50010540,50010548,50024769,121366037,121458036,121392038,121420035,121364028,121468026,121472031,121476036,121470042,121418032,121410036,121472032,121420032,121470040,121384032,121460028,121448028,121400030,121424024,121482025,121418031,121402028,121388035,121460029,121400028,121400029,121418030,121476034,121478031,121448029,121480030,121366035,121424025,121426030,121484030,121412031,121384033,121424023,121402027,121408039,121420033,121452028,121466040,121416029,121482028,121420034,121396046,121422052,121370037,121424031,21364043,121472040,121412045,121424032,125054002,125074007,125074008,125104003,125080003,125024006,125080004",
	  "finalScore": "4.4951428571428576",
	  "_pos_": "7",
	  "entityType": "SUB",
	  "benefitImg": "//img.alicdn.com/tps/TB1Zgl2MXXXXXaYXFXXXXXXXXXX-170-100.png"
	}, {
	  "id": "1395",
	  "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.740603&aldid=VyrSqx06&wh_id=1395&scm=1003.1.03653.SUB_1395_740603&pos=8",
	  "_s_": "d",
	  "itemImg": "//img.alicdn.com/tps/i2/TB1p4NcMXXXXXbGaXXXKofZZpXX-182-206.jpg",
	  "sceneCat": "50008881,50008883,50008882,50008884,50012774,50012775,50012776,50012781,50008886,50012766,50012771,50012772,50010850,50000671,162201,50022566,50007068,50026651,50000852,162104,162116,162205,1623,123216004,162404,162401,50011412,50011411,16240,50012773,50006846,50010394,50008888,50008890,50008889,50012784,50012785,50012786,50012787,50008885,50012777,50012778,124730001,50001748,50011130,124730001,50001748,50011130,50011129,50010160,50011161,50011159,50010159,50010158,50011127,3035,50010167,50000557,50011123,50010402,50000436,50011153,50011740,50006843,50006842,124942005,50010368,50011892,50011894,50023751,121366037,121458036,121392038,121420035,121364028,121468026,121400029,121418030,121478031,121480030,121366035,121424025,121426030,121484030,121412031,125054002,125074007,125074008,125104003,125080003,125024006,125080004,121400030,121424024,121482025,121418031,121402028,121388035",
	  "finalScore": "4.465166666666667",
	  "_pos_": "8",
	  "entityType": "SUB",
	  "benefitImg": "//img.alicdn.com/tps/i1/TB1ySNtMXXXXXamXFXX3bpXTXXX-170-100.png"
	}, {
	  "id": "1394",
	  "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.740603&aldid=VyrSqx06&wh_id=1394&scm=1003.1.03653.SUB_1394_740603&pos=9",
	  "_s_": "d",
	  "itemImg": "//img.alicdn.com/tps/i4/TB1Ns8eMXXXXXb1aXXXKofZZpXX-182-206.jpg",
	  "sceneCat": "50010850,50000671,162201,50022566,50007068,50026651,50000852,162104,162116,162205,1623,123216004,162404,162401,50011412,50011411,162402,50008903,50011413,162403,50000697,1629,50011277,121412004,50008897,50008901,50008899,50013194,50008904,50008905,50008898,162103,50008900,50013196,121434004,50005065,162702,162701,162703,1636,124730001,50001748,50011130,124730001,50001748,50011130,50011129,50010160,50011161,50011159,50010159,50010158,50011127,3035,50010167,50000557,50011123,50010402,50000436,50011153,50011740,50006843,50006842,124986002,50010368, 50011892,50011894,121480030,121366035,121424025,121426030,121484030,121412031",
	  "finalScore": "4.309925925925926",
	  "_pos_": "9",
	  "entityType": "SUB",
	  "benefitImg": "//img.alicdn.com/tps/i3/TB1ZEXfMXXXXXapaXXX3bpXTXXX-170-100.png"
	}, {
	  "id": "1610",
	  "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.740603&aldid=VyrSqx06&wh_id=1610&scm=1003.1.03653.SUB_1610_740603&pos=10",
	  "_s_": "d",
	  "itemImg": "//img.alicdn.com/tps/i3/TB1ONckLVXXXXbJaXXXKofZZpXX-182-206.jpg",
	  "sceneCat": "121484044,121452038,50012342,50012027,50012032,50006843,50010850,50000671,162104,1623,50011277,162116,123216004,50008898,121366037,121458036,121392038,121420035,121364028,121468026,121472031,121476036,121470042,121418032,121410036,121472032,121420032,121470040,121384032,121460028,121448028,121400030,121424024,121482025,121418031,121402028,121388035,121460029,121400028,121400029,121418030,121476034,121478031,121448029,121480030,121366035,121424025,121426030,121484030,121412031,121384033,121424023,121402027,121408039,121420033,121452028,121466040,121416029,121482028,121420034,121396046,121422052,121370037,121424031,21364043,121472040,121412045,121424032,125054002,125074007,125074008,125104003,125080003,125024006,125080004",
	  "finalScore": "4.293333333333334",
	  "_pos_": "10",
	  "entityType": "SUB",
	  "benefitImg": "//img.alicdn.com/tps/i2/TB1RzwFLVXXXXXsXpXX3bpXTXXX-170-100.png"
	}, {
	  "id": "1619",
	  "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.740603&aldid=VyrSqx06&wh_id=1619&scm=1003.1.03653.SUB_1619_740603&pos=11",
	  "_s_": "d",
	  "itemImg": "//img.alicdn.com/tps/i3/TB1eagyLVXXXXaiXFXXKofZZpXX-182-206.jpg",
	  "sceneCat": "124730001,50001748,50011130,124730001,50001748,50011130,50011129,50010160,50011161,50011159,50010159,50010158,50011127,3035,50010167,50000557,50011123,50010402,50000436,50011153,122654005,50011740,50009032,124688012，213202,121396029,121476023,121410029,213203,50023326,213205,50022686,50023293,50466023,50024999,50016885，50011894",
	  "finalScore": "4.23",
	  "_pos_": "11",
	  "entityType": "SUB",
	  "benefitImg": "//img.alicdn.com/tps/i4/TB1j0AxLVXXXXaRXFXX3bpXTXXX-170-100.png"
	}, {
	  "id": "1613",
	  "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.740603&aldid=VyrSqx06&wh_id=1613&scm=1003.1.03653.SUB_1613_740603&pos=12",
	  "_s_": "d",
	  "itemImg": "//img.alicdn.com/tps/i2/TB1WssFLVXXXXXUXpXXKofZZpXX-182-206.jpg",
	  "sceneCat": "50023108,50022893,50022892,50022890,50013228,50019520,50017120,50019560,50017129,50017128,50017127,50017126,50017125,50017124,50017123,50017122,50017121,50020039,50020038,50017119,50019559,50017110,50017108,50017107,50017097,50017096,50017095,50017094,50017093,50017092,50012036,50012041",
	  "finalScore": "4.2186666666666675",
	  "_pos_": "12",
	  "entityType": "SUB",
	  "benefitImg": "//img.alicdn.com/tps/i1/TB1Rg.qLVXXXXbqXVXX3bpXTXXX-170-100.png"
	}, {
	  "id": "1614",
	  "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.740603&aldid=VyrSqx06&wh_id=1614&scm=1003.1.03653.SUB_1614_740603&pos=13",
	  "_s_": "d",
	  "itemImg": "//img.alicdn.com/tps/i1/TB1KzUxLVXXXXajXFXXKofZZpXX-182-206.jpg",
	  "sceneCat": "50013238,50011726,50022893,50022892,50022890,50013228,50017129,50020038,50017119,50019559,50017102,50017110,50017097,50019707,50019555,50016677,50018317,50016675,50016673,50016672,50016671,50016670,50016732,50016669,50016668,50016667,50016666,50016665,50016683,50016682,50016608,50016607,50016637,50016638,50012036,50012043",
	  "finalScore": "4.216",
	  "_pos_": "13",
	  "entityType": "SUB",
	  "benefitImg": "//img.alicdn.com/tps/i2/TB1WyouLVXXXXXcXVXX3bpXTXXX-170-100.png"
	}, {
	  "id": "1397",
	  "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.740603&aldid=VyrSqx06&wh_id=1397&scm=1003.1.03653.SUB_1397_740603&pos=14",
	  "_s_": "d",
	  "itemImg": "//img.alicdn.com/tps/i4/TB1dCxvMXXXXXc1XpXXKofZZpXX-182-206.jpg",
	  "sceneCat": "122846004,50020776,50024799,50024801,50024921,50002794,50020778,50002792,50002791,50002793,50003942,50005500,50005497,50001692,50005495,50005496,50005503,50005498,50005499,50005501,50005502,50003455,50003457,122904003,50023091,50020770,50008863,50005507,121414011,50020768,50022701,50008862,121420012,50020766,50020764,121398012,121380011,50020751,50020676,50024945,50020720,50002790,50020730,50001866,50020678,121476008,121458013,50002795,121364011,50005505,121422014,50024943,50000583,50000582,50000584,213002,50005033,50000563,50008607,50006988,50008608,50024601,50024602,50012051,50001871,122854005,121458010,121452006,121416008,50008779,50002777,121394007,121386009,50010825,50013810,121434010,50001865,50008565,50008246,50017192,121404045,121368009,121462014,50019372,50008248,121418011,50008249,50017193,50008252,50008251,50000512,121364047,122846004,50020776,50024799,50024801,50024921,50002794,50020778,50002792,50002791,50002793,50003942,50005500,50005497,50001692,50005495,50005496,50005503,50005498,50005499,50005501,50005502,50003455,50003457,122904003,50023091,50020770,50008863,50005507,121414011,50020768,50022701,50008862,121420012,50020766,50020764,121398012,121380011,50020751,50020676,50024945,50020720,50002790,50020730,50001866,50020678,121476008,121458013,50002795,121364011,50005505,121422014,50024943,50000583,50000582,50000584,213002,50005033,50000563,50008607,50006988,50008608,50024601,50024602,50012051,50020835,50021907,121472021,50021902,50005919,50002045,122724003,122652007,121408025,122688004,50021924,50021923,50000561,50011738,122676005,121396026,121388028,50003338,50021915,50011415,50011416,50003454,50021928,50021930,50021929,50021931,50024939,121384024,121472020,50020902,50020903,50020904,50020905,50021888,50021889,50021890,50023266,122960005,50012001,50011999,50012004,50012000,50012006,121394024,121412033,121394025,121450036,121472007,121480009,121388013,121466009,121484012,121366014,121434014,121422012,121476006,121396013,50011997,121434013,122646001,121458012,121468012,121368013,50011979,121366015,121406016,121456012,121366011,121414010,121460006,121368014,121388016,121396013,121400010,121470011,121474011,121478009,124760009,124768010,124822006,121482009,122430002,121454014,121392016，50001871,122854005,121458010,121452006,121416008,50008779,50002777,121394007,121386009,50010825,50013810,121434010,50001865,50008565,50008246,50017192,121404045,121368009,121462014,50019372,50008248,121418011,50008249,50017193,50008252,50008251,50000512,121364047,122846004,50020776,50024799,50024801,50024921,50002794,50020778,50002792,50002791,50002793,50003942,50005500,50005497,50001692,50005495,50005496,50005503,50005498,50005499,50005501,50005502,50003455,50003457,122904003,50023091,50020770,50008863,50005507,121414011,50020768,50022701,50008862,121420012,50020766,50020764,121398012,121380011,50020751,50020676,50024945,50020720,50002790,50020730,50001866,50020678,121476008,121458013,50002795,121364011,50005505,121422014,50024943,50000583,50000582,50000584,213002,50005033,50000563,50008607,50006988,50008608,50024601,50024602,50012051",
	  "finalScore": "3.4206666666666665",
	  "_pos_": "14",
	  "entityType": "SUB",
	  "benefitImg": "//img.alicdn.com/tps/i3/TB1ZARnMXXXXXaGXVXX3bpXTXXX-170-100.png"
	}, {
	  "id": "1608",
	  "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.740603&aldid=VyrSqx06&wh_id=1608&scm=1003.1.03653.SUB_1608_740603&pos=15",
	  "_s_": "d",
	  "itemImg": "//img.alicdn.com/tps/i3/TB1xA3jLVXXXXXqapXXKofZZpXX-182-206.jpg",
	  "sceneCat": "50012010,50012027,50012032,50007003,50008881,50008883,1623,162116,50010850,123216004",
	  "finalScore": "0.0",
	  "_pos_": "15",
	  "entityType": "SUB",
	  "benefitImg": "//img.alicdn.com/tps/i2/TB1WvoALVXXXXcdXpXX3bpXTXXX-170-100.png"
	}];
	
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
	      NUMBER_186: 186,
	      NUMBER_206: 206,
	      NUMBER_373: 373,
	      NUMBER_230: 230,
	      NUMBER_170: 170,
	      NUMBER_100: 100,
	      NUMBER_750: 750,
	      NUMBER_300: 300,
	      NUMBER_340: 340,
	      smallItemBg: 'https://gw.alicdn.com/tps/TB1oBIeLVXXXXatXpXXXXXXXXXX-373-230.jpg',
	      items: [],
	      smallItems: [],
	      sceneBgs: ['https://gw.alicdn.com/tps/TB1xBT8LVXXXXbYXVXXXXXXXXXX-750-340.jpg', 'https://gw.alicdn.com/tps/TB1RoEkLVXXXXaMXpXXXXXXXXXX-750-340.jpg', 'https://gw.alicdn.com/tps/TB1DiEpLVXXXXa7XXXXXXXXXXXX-750-340.jpg']
	    };
	  },
	  created: function () {
	    this.items = demoContent.slice(0, 3);
	    this.smallItems = demoContent.slice(3);
	  },
	  methods: {
	    getItemTop: function (i) {
	      return (i - i % 2) / 2 * (230 + 4);
	    },
	    getItemLeft: function (i) {
	      return i % 2 * (373 + 4);
	    }
	  }
	};

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [(_vm.ds.floorTitle) ? _c('image', {
	    staticClass: "title",
	    attrs: {
	      "src": _vm.ds.floorTitle
	    }
	  }) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "small-item-container",
	    style: ({
	      height: Math.round(_vm.smallItems.length / 2) * 234
	    })
	  }, _vm._l((_vm.smallItems), function(i, item) {
	    return _c('div', {
	      staticClass: "small-item",
	      style: ({
	        top: _vm.getItemTop(i),
	        left: _vm.getItemLeft(i)
	      })
	    }, [_c('div', [_c('image', {
	      staticClass: "small-item-bg",
	      attrs: {
	        "src": _vm.smallItemBg
	      }
	    })]), _vm._v(" "), _c('div', {
	      staticClass: "small-item-img"
	    }, [_c('banner', {
	      attrs: {
	        "width": _vm.NUMBER_186,
	        "height": _vm.NUMBER_206,
	        "src": item.itemImg,
	        "href": item.sceneUrl
	      }
	    })], 1), _vm._v(" "), _c('div', {
	      staticClass: "small-benifit-img"
	    }, [_c('banner', {
	      attrs: {
	        "width": _vm.NUMBER_170,
	        "height": _vm.NUMBER_100,
	        "src": item.benefitImg,
	        "href": item.sceneUrl
	      }
	    })], 1)])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-4cb1500e", module.exports)
	  }
	}

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter?id=data-v-d1a6569c!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./match.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(183),
	  /* template */
	  __webpack_require__(184),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\showcase\\include\\match.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] match.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-d1a6569c", Component.options)
	  } else {
	    hotAPI.reload("data-v-d1a6569c", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },

/***/ 183:
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
	      NUMBER_750: 750,
	      NUMBER_373: 373,
	      NUMBER_240: 240,
	      NUMBER_200: 200,
	      NUMBER_4: 4
	    };
	  }
	};

/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [(_vm.ds.floorTitle) ? _c('image', {
	    staticClass: "title",
	    attrs: {
	      "src": _vm.ds.floorTitle
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.ds.isShowTmSpecBanner && _vm.ds.tmSpecBanner) ? _c('div', {
	    staticClass: "tm-banner"
	  }, [_c('banner', {
	    attrs: {
	      "width": _vm.NUMBER_750,
	      "height": _vm.NUMBER_200,
	      "src": _vm.ds.tmSpecBanner.img,
	      "href": _vm.ds.tmSpecBanner.url
	    }
	  })], 1) : _vm._e(), _vm._v(" "), _vm._l((_vm.ds.bannerItems), function(item) {
	    return _c('div', {
	      style: ({
	        flexDirection: 'row',
	        marginBottom: _vm.NUMBER_4
	      })
	    }, [_c('div', {
	      style: ({
	        marginRight: _vm.NUMBER_4
	      })
	    }, [_c('banner', {
	      attrs: {
	        "width": _vm.NUMBER_373,
	        "height": _vm.NUMBER_240,
	        "src": item.leftImg,
	        "href": item.leftUrl
	      }
	    })], 1), _vm._v(" "), _c('div', [_c('banner', {
	      attrs: {
	        "width": _vm.NUMBER_373,
	        "height": _vm.NUMBER_240,
	        "src": item.rightImg,
	        "href": item.rightUrl
	      }
	    })], 1)])
	  })], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-d1a6569c", module.exports)
	  }
	}

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter?id=data-v-43a69574!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./brand.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(186),
	  /* template */
	  __webpack_require__(187),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\showcase\\include\\brand.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] brand.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-43a69574", Component.options)
	  } else {
	    hotAPI.reload("data-v-43a69574", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },

/***/ 186:
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
	
	module.exports = {
	  components: {
	    banners: __webpack_require__(138)
	  },
	  props: {
	    ds: {
	      default: function () {
	        return {
	          bannerItems: []
	        };
	      }
	    }
	  },
	  data: function () {
	    return {
	      NUMBER_742: 742,
	      NUMBER_230: 230,
	      NUMBER_4: 4
	    };
	  },
	  computed: {
	    bannerItems: function () {
	      return this.ds.bannerItems.slice(0, 8);
	    }
	  },
	  created: function () {
	    var bannerItems = this.ds.bannerItems;
	    bannerItems.sort(function () {
	      return Math.random() - 0.5;
	    });
	    for (var i = 0; i < bannerItems.length; i++) {
	      var item = bannerItems[i];
	      if (i % 2 === 0) {
	        item.img = item.leftImg;
	        item.url = item.rightUrl;
	      } else {
	        item.img = item.rightImg;
	        item.url = item.rightUrl;
	      }
	    }
	  }
	};

/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [(_vm.ds.floorTitle) ? _c('image', {
	    staticClass: "title",
	    attrs: {
	      "src": _vm.ds.floorTitle
	    }
	  }) : _vm._e(), _vm._v(" "), _c('div', {
	    staticStyle: {
	      "margin-left": "4",
	      "margin-right": "4"
	    }
	  }, [_c('banners', {
	    attrs: {
	      "direction": "column",
	      "ds": _vm.bannerItems,
	      "width": _vm.NUMBER_742,
	      "height": _vm.NUMBER_230,
	      "space": _vm.NUMBER_4
	    }
	  })], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-43a69574", module.exports)
	  }
	}

/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    staticClass: "content"
	  }, [_c('refresh', {
	    staticClass: "refresh",
	    staticStyle: {
	      "flex-direction": "row"
	    },
	    attrs: {
	      "display": _vm.displayRefresh
	    },
	    on: {
	      "refresh": _vm.handleRefresh
	    }
	  }, [_c('loading-indicator'), _vm._v(" "), _c('text', {
	    staticStyle: {
	      "margin-left": "36px",
	      "color": "#eee"
	    }
	  }, [_vm._v("下拉刷新...")])], 1), _vm._v(" "), (_vm.show0) ? _c('headlines', {
	    attrs: {
	      "ds": _vm.showData.header
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.show0) ? _c('category', {
	    attrs: {
	      "ds": _vm.showData.category
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.show1) ? _c('coupon', {
	    attrs: {
	      "ds": _vm.showData.coupon
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.show1) ? _c('goods', {
	    attrs: {
	      "ds": _vm.showData.goods
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.show1) ? _c('resource', {
	    attrs: {
	      "ds": _vm.showData.resource
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.show1) ? _c('scene', {
	    attrs: {
	      "ds": _vm.showData.scene
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.show2) ? _c('match', {
	    attrs: {
	      "ds": _vm.showData.match
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.show2) ? _c('brand', {
	    attrs: {
	      "ds": _vm.showData.brand
	    }
	  }) : _vm._e(), _vm._v(" "), _c('loading', {
	    staticClass: "loading",
	    attrs: {
	      "display": _vm.displayLoading
	    },
	    on: {
	      "loading": _vm.handleLoading
	    }
	  }, [_c('text', {
	    staticStyle: {
	      "color": "#eee"
	    }
	  }, [_vm._v("加载更多...")])])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-f9eb0bc2", module.exports)
	  }
	}

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQ/ZWQ2NCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvc2hvd2Nhc2UvbmV3LWZhc2hpb24udnVlIiwid2VicGFjazovLy8uL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanM/ZDRmMyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvc2hvd2Nhc2UvaW5jbHVkZS9iYW5uZXIudnVlPzEyZWUqKioqKioqIiwid2VicGFjazovLy9iYW5uZXIudnVlPzJmYTgqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvc2hvd2Nhc2UvaW5jbHVkZS9iYW5uZXIudnVlPzYxN2MqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvc2hvd2Nhc2UvaW5jbHVkZS9iYW5uZXJzLnZ1ZT8wY2FlKioiLCJ3ZWJwYWNrOi8vL2Jhbm5lcnMudnVlP2IwZWQqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nob3djYXNlL2luY2x1ZGUvYmFubmVycy52dWU/ZWNkMCoqKiIsIndlYnBhY2s6Ly8vLi9zcmMvc2hvd2Nhc2UvaW5jbHVkZS9saW5rLnZ1ZT9lNTY0Iiwid2VicGFjazovLy9saW5rLnZ1ZT8zODgxKiIsIndlYnBhY2s6Ly8vLi9zcmMvc2hvd2Nhc2UvaW5jbHVkZS9saW5rLnZ1ZT9jNDYzKiIsIndlYnBhY2s6Ly8vbmV3LWZhc2hpb24udnVlIiwid2VicGFjazovLy8uL3NyYy9zaG93Y2FzZS9pbmNsdWRlL2hlYWRsaW5lcy52dWUiLCJ3ZWJwYWNrOi8vL2hlYWRsaW5lcy52dWU/NTU2YSIsIndlYnBhY2s6Ly8vLi9zcmMvc2hvd2Nhc2UvaW5jbHVkZS9oZWFkbGluZXMudnVlPzRjOGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nob3djYXNlL2luY2x1ZGUvY2F0ZWdvcnkudnVlIiwid2VicGFjazovLy9jYXRlZ29yeS52dWU/ZDIxNiIsIndlYnBhY2s6Ly8vLi9zcmMvc2hvd2Nhc2UvaW5jbHVkZS9jYXRlZ29yeS52dWU/YThhMyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hvd2Nhc2UvaW5jbHVkZS9jb3Vwb24udnVlIiwid2VicGFjazovLy9jb3Vwb24udnVlPzE1MzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nob3djYXNlL2luY2x1ZGUvY291cG9uLnZ1ZT84NWNiIiwid2VicGFjazovLy8uL3NyYy9zaG93Y2FzZS9pbmNsdWRlL2dvb2RzLnZ1ZSIsIndlYnBhY2s6Ly8vZ29vZHMudnVlP2VlOWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nob3djYXNlL2luY2x1ZGUvZ29vZHMudnVlPzVkMWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nob3djYXNlL2luY2x1ZGUvcmVzb3VyY2UudnVlIiwid2VicGFjazovLy9yZXNvdXJjZS52dWU/YWVjNyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hvd2Nhc2UvaW5jbHVkZS9yZXNvdXJjZS52dWU/ZTZiZiIsIndlYnBhY2s6Ly8vLi9zcmMvc2hvd2Nhc2UvaW5jbHVkZS9zY2VuZS52dWUiLCJ3ZWJwYWNrOi8vL3NjZW5lLnZ1ZT83NGI3Iiwid2VicGFjazovLy8uL3NyYy9zaG93Y2FzZS9pbmNsdWRlL3NjZW5lLnZ1ZT80Y2UwIiwid2VicGFjazovLy8uL3NyYy9zaG93Y2FzZS9pbmNsdWRlL21hdGNoLnZ1ZSIsIndlYnBhY2s6Ly8vbWF0Y2gudnVlPzQ3NzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nob3djYXNlL2luY2x1ZGUvbWF0Y2gudnVlP2U4NjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nob3djYXNlL2luY2x1ZGUvYnJhbmQudnVlIiwid2VicGFjazovLy9icmFuZC52dWU/OTFlOSIsIndlYnBhY2s6Ly8vLi9zcmMvc2hvd2Nhc2UvaW5jbHVkZS9icmFuZC52dWU/N2E4MCIsIndlYnBhY2s6Ly8vLi9z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NEJBQ0E7MkJBQ0E7dUJBQ0E7OEJBQ0E7c0JBQ0E7Z0NBQ0E7MkJBQ0E7NEJBRUE7QUFWQTsyQkFZQTs0QkFDQTsyQkFDQTt1QkFDQTs4QkFDQTtzQkFDQTtnQ0FDQTsyQkFDQTs0QkFFQTtBQVZBOzJCQVlBOzRCQUNBOzJCQUNBO3VCQUNBOzhCQUNBO3NCQUNBO2dDQUNBOzJCQUNBOzRCQUVBO0FBVkE7MkJBWUE7NEJBQ0E7MkJBQ0E7dUJBQ0E7OEJBQ0E7c0JBQ0E7Z0NBQ0E7MkJBQ0E7NEJBRUE7QUFWQTsyQkFZQTs0QkFDQTsyQkFDQTt1QkFDQTs4QkFDQTtzQkFDQTtnQ0FDQTsyQkFDQTs0QkFFQTtBQVZBOzJCQVlBOzRCQUNBOzJCQUNBO3VCQUNBOzhCQUNBO3NCQUNBO2dDQUNBOzJCQUNBOzRCQUVBO0FBVkE7MkJBWUE7NEJBQ0E7MkJBQ0E7dUJBQ0E7OEJBQ0E7c0JBQ0E7Z0NBQ0E7MkJBQ0E7NEJBRUE7QUFWQTsyQkFZQTs0QkFDQTsyQkFDQTt1QkFDQTs4QkFDQTtzQkFDQTtnQ0FDQTsyQkFDQTs0QkFFQTtBQVZBOzJCQVlBOzRCQUNBOzJCQUNBO3VCQUNBOzhCQUNBO3NCQUNBO2dDQUNBOzJCQUNBOzRCQUVBO0FBVkE7MkJBWUE7NEJBQ0E7MkJBQ0E7dUJBQ0E7OEJBQ0E7c0JBQ0E7Z0NBQ0E7MkJBQ0E7NEJBRUE7QUFWQTsyQkFZQTs0QkFDQTsyQkFDQTt1QkFDQTs4QkFDQTtzQkFDQTtnQ0FDQTsyQkFDQTs0QkFFQTtBQVZBOzJCQVlBOzRCQUNBOzJCQUNBO3VCQUNBOzhCQUNBO3NCQUNBO2dDQUNBOzJCQUNBOzRCQUVBO0FBVkE7dUJBV0E7NEJBQ0E7aUJBR0E7QUEzS0E7QUFGQTs7dUJBK0tBOztzQkFFQTtzQkFDQTt1QkFDQTt1QkFFQTtBQUxBO3NCQU9BO3NCQUNBO3VCQUNBO3VCQUVBO0FBTEE7c0JBT0E7c0JBQ0E7dUJBQ0E7dUJBRUE7QUFMQTtzQkFPQTtzQkFDQTt1QkFDQTt1QkFFQTtBQUxBO3NCQU9BO3NCQUNBO3VCQUNBO3VCQUVBO0FBTEE7c0JBT0E7c0JBQ0E7dUJB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cUJBQ0E7a0JBQ0E7QUFOQTthQVFBO2lCQUNBO3FCQUNBO2tCQUNBO3FCQUNBO2tCQUNBO0FBTkE7YUFRQTtpQkFDQTtxQkFDQTtrQkFDQTtxQkFDQTtrQkFFQTtBQVBBO21CQVFBO29CQUNBO21CQUNBO2VBQ0E7c0JBQ0E7a0JBQ0E7c0JBQ0E7Y0FDQTt3QkFDQTttQkFDQTtvQkFDQTt1QkFFQTtBQTFDQTs7aUJBNENBO21CQUNBO29CQUNBO21CQUNBO2VBQ0E7c0JBQ0E7a0JBQ0E7c0JBQ0E7Y0FDQTt3QkFDQTttQkFDQTtvQkFDQTt1QkFDQTtBQWJBO2lCQWVBO21CQUNBO29CQUNBO21CQUNBO2VBQ0E7c0JBQ0E7a0JBQ0E7c0JBQ0E7Y0FDQTt3QkFDQTttQkFDQTtvQkFDQTt1QkFDQTtBQWJBO2lCQWVBO21CQUNBO29CQUNBO21CQUNBO2VBQ0E7c0JBQ0E7a0JBQ0E7c0JBQ0E7Y0FDQTt3QkFDQTttQkFDQTtvQkFDQTt1QkFDQTtBQWJBO2lCQWVBO21CQUNBO29CQUNBO21CQUNBO2VBQ0E7c0JBQ0E7a0JBQ0E7c0JBQ0E7Y0FDQTt3QkFDQTttQkFDQTtvQkFDQTt1QkFDQTtBQWJBO2lCQWVBO21CQUNBO29CQUNBO21CQUNBO2VBQ0E7c0JBQ0E7a0JBQ0E7c0JBQ0E7Y0FDQTt3QkFDQTttQkFDQTtvQkFDQTt1QkFDQTtBQWJBO2lCQWVBO21CQUNBO29CQUNBO21CQUNBO2VBQ0E7c0JBQ0E7a0JBQ0E7c0JBQ0E7Y0FDQTt3QkFDQTttQkFDQTtvQkFDQTt1QkFDQTtBQWJBO2lCQWVBO21CQUNBO29CQUNBO21CQUNBO2VBQ0E7c0JBQ0E7a0JBQ0E7c0JBQ0E7Y0FDQTt3QkFDQTttQkFDQTtvQkFDQTt1QkFDQTtBQWJBO2lCQWVBO21CQUNBO29CQUNBO21CQUNBO2VBQ0E7c0JBQ0E7a0JBQ0E7c0JBQ0E7Y0FDQTt3QkFDQTttQkFDQTtvQkFDQTt1QkFDQTtBQWJBO2lCQWVBO21CQUNBO29CQUNBO21CQUNBO2VBQ0E7c0JBQ0E7a0JBQ0E7c0JBQ0E7Y0FDQTt3QkFDQTttQkFDQTtvQkFDQTt1QkFFQTtB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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LWY5ZWIwYmMyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vbmV3LWZhc2hpb24udnVlP2VudHJ5PXRydWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbmV3LWZhc2hpb24udnVlP2VudHJ5PXRydWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtZjllYjBiYzIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL25ldy1mYXNoaW9uLnZ1ZT9lbnRyeT10cnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFx3ZWVrU3R1ZHlcXFxcd2VleDJcXFxcd2VleDNcXFxcc3JjXFxcXHNob3djYXNlXFxcXG5ldy1mYXNoaW9uLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIG5ldy1mYXNoaW9uLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1mOWViMGJjMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWY5ZWIwYmMyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaG93Y2FzZS9uZXctZmFzaGlvbi52dWU/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDU1IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBzY29wZUlkLFxuICBjc3NNb2R1bGVzXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICAvLyBpbmplY3QgY3NzTW9kdWxlc1xuICBpZiAoY3NzTW9kdWxlcykge1xuICAgIHZhciBjb21wdXRlZCA9IG9wdGlvbnMuY29tcHV0ZWQgfHwgKG9wdGlvbnMuY29tcHV0ZWQgPSB7fSlcbiAgICBPYmplY3Qua2V5cyhjc3NNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBjc3NNb2R1bGVzW2tleV1cbiAgICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtb2R1bGUgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MCA2MSA2MiA2MyA2NCA2NSA2NiA2NyA2OCA2OSA3MCA3MSA3MiA3MyA3NCA3NSA3NiA3NyA3OCA3OSA4MCA4MSA4MiA4MyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Jhbm5lci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtYjczYjM4ZTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Jhbm5lci52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6XFxcXHdlZWtTdHVkeVxcXFx3ZWV4MlxcXFx3ZWV4M1xcXFxzcmNcXFxcc2hvd2Nhc2VcXFxcaW5jbHVkZVxcXFxiYW5uZXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gYmFubmVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1iNzNiMzhlMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWI3M2IzOGUyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaG93Y2FzZS9pbmNsdWRlL2Jhbm5lci52dWVcbi8vIG1vZHVsZSBpZCA9IDEzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDQ0IDQ1IDQ2IDQ4IDQ5IDUxIDUyIDUzIDU1IiwiPHRlbXBsYXRlPlxyXG4gIDxpbWFnZSA6c3R5bGU9XCJ7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfVwiIDpzcmM9XCJzcmNcIiA6aW1hZ2UtcXVhbGl0eT1cInF1YWxpdHlcIlxyXG4gICAgQGNsaWNrPVwiY2xpY2tIYW5kbGVyXCI+PC9pbWFnZT5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICB2YXIgbW9kYWwgPSByZXF1aXJlKCdAd2VleC1tb2R1bGUvbW9kYWwnKVxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgcHJvcHM6IFsnd2lkdGgnLCAnaGVpZ2h0JywgJ3NyYycsICdocmVmJ10sXHJcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcXVhbGl0eTogJ25vcm1hbCdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgY2xpY2tIYW5kbGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbW9kYWwudG9hc3Qoe1xyXG4gICAgICAgICAgbWVzc2FnZTogJ2NsaWNrJyxcclxuICAgICAgICAgIGR1cmF0aW9uOiAxXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGJhbm5lci52dWU/NmRlYWQ1ZmQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2ltYWdlJywge1xuICAgIHN0eWxlOiAoe1xuICAgICAgd2lkdGg6IF92bS53aWR0aCxcbiAgICAgIGhlaWdodDogX3ZtLmhlaWdodFxuICAgIH0pLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uc3JjLFxuICAgICAgXCJpbWFnZS1xdWFsaXR5XCI6IF92bS5xdWFsaXR5XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uY2xpY2tIYW5kbGVyXG4gICAgfVxuICB9KVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1iNzNiMzhlMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtYjczYjM4ZTIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9zaG93Y2FzZS9pbmNsdWRlL2Jhbm5lci52dWVcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDQ0IDQ1IDQ2IDQ4IDQ5IDUxIDUyIDUzIDU1IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYmFubmVycy52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMjhkNGExMTghLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Jhbm5lcnMudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFx3ZWVrU3R1ZHlcXFxcd2VleDJcXFxcd2VleDNcXFxcc3JjXFxcXHNob3djYXNlXFxcXGluY2x1ZGVcXFxcYmFubmVycy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBiYW5uZXJzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yOGQ0YTExOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTI4ZDRhMTE4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaG93Y2FzZS9pbmNsdWRlL2Jhbm5lcnMudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSA0NSA0OSA1MiA1NSIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGRpdiB2LWlmPVwiZGlyZWN0aW9uPT09J3JvdydcIiBzdHlsZT1cImZsZXgtZGlyZWN0aW9uOnJvd1wiPlxyXG4gICAgICA8ZGl2IHYtZm9yPVwiKGksaXRlbSkgaW4gZHNcIiA6c3R5bGU9XCJ7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQsIG1hcmdpbkxlZnQ6IChpICUgZHMubGVuZ3RoID8gc3BhY2UgOiAwKSB9XCI+XHJcbiAgICAgICAgPGJhbm5lciA6d2lkdGg9XCJ3aWR0aFwiIDpoZWlnaHQ9XCJoZWlnaHRcIiA6c3JjPVwiaXRlbS5pbWdcIiA6aHJlZj1cIml0ZW0udXJsXCI+PC9iYW5uZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHYtaWY9XCJkaXJlY3Rpb249PT0nY29sdW1uJ1wiPlxyXG4gICAgICA8ZGl2IHYtZm9yPVwiKGksaXRlbSkgaW4gZHNcIiA6c3R5bGU9XCJ7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQsIG1hcmdpblRvcDogKGkgJSBkcy5sZW5ndGggPyBzcGFjZSA6IDApIH1cIj5cclxuICAgICAgICA8YmFubmVyIDp3aWR0aD1cIndpZHRoXCIgOmhlaWdodD1cImhlaWdodFwiIDpzcmM9XCJpdGVtLmltZ1wiIDpocmVmPVwiaXRlbS51cmxcIj48L2Jhbm5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgYmFubmVyOiByZXF1aXJlKCcuL2Jhbm5lci52dWUnKVxyXG4gICAgfSxcclxuICAgIHByb3BzOiBbJ2RzJywgJ3dpZHRoJywgJ2hlaWdodCcsICdzcGFjZScsICdkaXJlY3Rpb24nXVxyXG4gIH07XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYmFubmVycy52dWU/MmEzOTI0NGUiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFsoX3ZtLmRpcmVjdGlvbiA9PT0gJ3JvdycpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJmbGV4LWRpcmVjdGlvblwiOiBcInJvd1wiXG4gICAgfVxuICB9LCBfdm0uX2woKF92bS5kcyksIGZ1bmN0aW9uKGksIGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICAgIHN0eWxlOiAoe1xuICAgICAgICB3aWR0aDogX3ZtLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IF92bS5oZWlnaHQsXG4gICAgICAgIG1hcmdpbkxlZnQ6IChpICUgX3ZtLmRzLmxlbmd0aCA/IF92bS5zcGFjZSA6IDApXG4gICAgICB9KVxuICAgIH0sIFtfYygnYmFubmVyJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ3aWR0aFwiOiBfdm0ud2lkdGgsXG4gICAgICAgIFwiaGVpZ2h0XCI6IF92bS5oZWlnaHQsXG4gICAgICAgIFwic3JjXCI6IGl0ZW0uaW1nLFxuICAgICAgICBcImhyZWZcIjogaXRlbS51cmxcbiAgICAgIH1cbiAgICB9KV0sIDEpXG4gIH0pKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmRpcmVjdGlvbiA9PT0gJ2NvbHVtbicpID8gX2MoJ2RpdicsIF92bS5fbCgoX3ZtLmRzKSwgZnVuY3Rpb24oaSwgaXRlbSkge1xuICAgIHJldHVybiBfYygnZGl2Jywge1xuICAgICAgc3R5bGU6ICh7XG4gICAgICAgIHdpZHRoOiBfdm0ud2lkdGgsXG4gICAgICAgIGhlaWdodDogX3ZtLmhlaWdodCxcbiAgICAgICAgbWFyZ2luVG9wOiAoaSAlIF92bS5kcy5sZW5ndGggPyBfdm0uc3BhY2UgOiAwKVxuICAgICAgfSlcbiAgICB9LCBbX2MoJ2Jhbm5lcicsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwid2lkdGhcIjogX3ZtLndpZHRoLFxuICAgICAgICBcImhlaWdodFwiOiBfdm0uaGVpZ2h0LFxuICAgICAgICBcInNyY1wiOiBpdGVtLmltZyxcbiAgICAgICAgXCJocmVmXCI6IGl0ZW0udXJsXG4gICAgICB9XG4gICAgfSldLCAxKVxuICB9KSkgOiBfdm0uX2UoKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTI4ZDRhMTE4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yOGQ0YTExOCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3Nob3djYXNlL2luY2x1ZGUvYmFubmVycy52dWVcbi8vIG1vZHVsZSBpZCA9IDE0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDQ1IDQ5IDUyIDU1IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbGluay52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtN2M1YmY0MWQhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xpbmsudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFx3ZWVrU3R1ZHlcXFxcd2VleDJcXFxcd2VleDNcXFxcc3JjXFxcXHNob3djYXNlXFxcXGluY2x1ZGVcXFxcbGluay52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBsaW5rLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03YzViZjQxZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdjNWJmNDFkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaG93Y2FzZS9pbmNsdWRlL2xpbmsudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDlcbi8vIG1vZHVsZSBjaHVua3MgPSA0OSA1NSIsIjx0ZW1wbGF0ZT5cclxuICA8dGV4dCBAY2xpY2s9XCJjbGlja0hhbmRsZXJcIj57e3RleHR9fTwvdGV4dD5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICB2YXIgbW9kYWwgPSByZXF1aXJlKCdAd2VleC1tb2R1bGUvbW9kYWwnKVxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgcHJvcHM6IFsndGV4dCcsICdocmVmJ10sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGNsaWNrSGFuZGxlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1vZGFsLnRvYXN0KHtcclxuICAgICAgICAgIG1lc3NhZ2U6ICdjbGljaycsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaW5rLnZ1ZT81MzhiMzA3ZCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndGV4dCcsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uY2xpY2tIYW5kbGVyXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGV4dCkpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtN2M1YmY0MWRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTdjNWJmNDFkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvc2hvd2Nhc2UvaW5jbHVkZS9saW5rLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gNDkgNTUiLCI8dGVtcGxhdGU+XHJcbiAgPHNjcm9sbGVyIGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgPHJlZnJlc2ggY2xhc3M9XCJyZWZyZXNoXCIgQHJlZnJlc2g9XCJoYW5kbGVSZWZyZXNoXCIgOmRpc3BsYXk9XCJkaXNwbGF5UmVmcmVzaFwiXHJcbiAgICAgIHN0eWxlPVwiZmxleC1kaXJlY3Rpb246cm93O1wiPlxyXG4gICAgICA8bG9hZGluZy1pbmRpY2F0b3I+PC9sb2FkaW5nLWluZGljYXRvcj5cclxuICAgICAgPHRleHQgc3R5bGU9XCJtYXJnaW4tbGVmdDozNnB4O2NvbG9yOiNlZWU7XCI+5LiL5ouJ5Yi35pawLi4uPC90ZXh0PlxyXG4gICAgPC9yZWZyZXNoPlxyXG4gICAgPGhlYWRsaW5lcyB2LWlmPVwic2hvdzBcIiA6ZHM9XCJzaG93RGF0YS5oZWFkZXJcIj48L2hlYWRsaW5lcz5cclxuICAgIDxjYXRlZ29yeSB2LWlmPVwic2hvdzBcIiA6ZHM9XCJzaG93RGF0YS5jYXRlZ29yeVwiPjwvY2F0ZWdvcnk+XHJcbiAgICA8Y291cG9uIHYtaWY9XCJzaG93MVwiIDpkcz1cInNob3dEYXRhLmNvdXBvblwiPjwvY291cG9uPlxyXG4gICAgPGdvb2RzIHYtaWY9XCJzaG93MVwiIDpkcz1cInNob3dEYXRhLmdvb2RzXCI+PC9nb29kcz5cclxuICAgIDxyZXNvdXJjZSB2LWlmPVwic2hvdzFcIiA6ZHM9XCJzaG93RGF0YS5yZXNvdXJjZVwiPjwvcmVzb3VyY2U+XHJcbiAgICA8c2NlbmUgdi1pZj1cInNob3cxXCIgOmRzPVwic2hvd0RhdGEuc2NlbmVcIj48L3NjZW5lPlxyXG4gICAgPG1hdGNoIHYtaWY9XCJzaG93MlwiIDpkcz1cInNob3dEYXRhLm1hdGNoXCI+PC9tYXRjaD5cclxuICAgIDxicmFuZCB2LWlmPVwic2hvdzJcIiA6ZHM9XCJzaG93RGF0YS5icmFuZFwiPjwvYnJhbmQ+XHJcbiAgICA8bG9hZGluZyBjbGFzcz1cImxvYWRpbmdcIiBAbG9hZGluZz1cImhhbmRsZUxvYWRpbmdcIiA6ZGlzcGxheT1cImRpc3BsYXlMb2FkaW5nXCI+XHJcbiAgICAgIDx0ZXh0IHN0eWxlPVwiY29sb3I6I2VlZTtcIj7liqDovb3mm7TlpJouLi48L3RleHQ+XHJcbiAgICA8L2xvYWRpbmc+XHJcbiAgPC9zY3JvbGxlcj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuICAuY29udGVudCB7XHJcbiAgICBjb2xvcjogIzM1MzUzNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfVxyXG4gIC5yZWZyZXNoIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLmxvYWRpbmcge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgdmFyIG1vZGFsID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL21vZGFsJylcclxuICB2YXIgdGltZXIgPSByZXF1aXJlKCdAd2VleC1tb2R1bGUvdGltZXInKVxyXG5cclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgaGVhZGxpbmVzOiByZXF1aXJlKCcuL2luY2x1ZGUvaGVhZGxpbmVzLnZ1ZScpLFxyXG4gICAgICBjYXRlZ29yeTogcmVxdWlyZSgnLi9pbmNsdWRlL2NhdGVnb3J5LnZ1ZScpLFxyXG4gICAgICBjb3Vwb246IHJlcXVpcmUoJy4vaW5jbHVkZS9jb3Vwb24udnVlJyksXHJcbiAgICAgIGdvb2RzOiByZXF1aXJlKCcuL2luY2x1ZGUvZ29vZHMudnVlJyksXHJcbiAgICAgIHJlc291cmNlOiByZXF1aXJlKCcuL2luY2x1ZGUvcmVzb3VyY2UudnVlJyksXHJcbiAgICAgIHNjZW5lOiByZXF1aXJlKCcuL2luY2x1ZGUvc2NlbmUudnVlJyksXHJcbiAgICAgIG1hdGNoOiByZXF1aXJlKCcuL2luY2x1ZGUvbWF0Y2gudnVlJyksXHJcbiAgICAgIGJyYW5kOiByZXF1aXJlKCcuL2luY2x1ZGUvYnJhbmQudnVlJylcclxuICAgIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIG5hdkJhckhlaWdodDogODgsXHJcbiAgICAgIGNudDogMCxcclxuICAgICAgc2hvdzA6IHRydWUsXHJcbiAgICAgIHNob3cxOiBmYWxzZSxcclxuICAgICAgc2hvdzI6IGZhbHNlLFxyXG4gICAgICBkaXNwbGF5UmVmcmVzaDogJ3Nob3cnLFxyXG4gICAgICBkaXNwbGF5TG9hZGluZzogJ3Nob3cnLFxyXG4gICAgICBzaG93RGF0YToge31cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuc2hvd0RhdGEgPSB7XHJcbiAgICAgICAgXCJoZWFkZXJcIjoge1xyXG4gICAgICAgICAgXCJ0b3BCYW5uZXJcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMUo0OGtNWFhYWFhYdGFwWFhYWFhYWFhYWC03NTAtNzgyLmpwZ1wiLFxyXG4gICAgICAgICAgXCJydWxlTGlua1wiOiBcImh0dHBzOi8vY2hhb3NoaS5tLnRtYWxsLmNvbS9cIixcclxuICAgICAgICAgIFwiaXNTaG93U2hhcmVcIjogdHJ1ZSxcclxuICAgICAgICAgIFwic2hhcmVJbmZvXCI6IHtcclxuICAgICAgICAgICAgXCJzaGFyZVRpdGxlXCI6IFwi5oiR5piv5YiG5Lqr5qCH6aKYXCIsXHJcbiAgICAgICAgICAgIFwic2hhcmVJbnRyb1wiOiBcIiDmiJHmmK/liIbkuqvlhoXlrrnmtYvor5VcIixcclxuICAgICAgICAgICAgXCJhbGxMaW5rXCI6IFwiaHR0cHM6Ly93d3cudG1hbGwuY29tXCIsXHJcbiAgICAgICAgICAgIFwibW9iaWxlSW1hZ2VcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMUo0OGtNWFhYWFhYdGFwWFhYWFhYWFhYWC03NTAtNzgyLmpwZ1wiLFxyXG4gICAgICAgICAgICBcInBjSW1hZ2VcIjogXCJodHRwczovL2ltZy5hbGljZG4uY29tL3Rwcy9pNC9UQjFEeXcxTFZYWFhYWEVhcFhYU3V0YkZYWFguanBnXCIsXHJcbiAgICAgICAgICAgIFwic2hhcmVTY2VuZVwiOiBcIuaIkeaYr+a1i+ivleS4muWKoVwiLFxyXG4gICAgICAgICAgICBcImJpeklkXCI6IFwiXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcImFubm91bmNlSGRCYW5uZXJcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL2k0L1RCMWZ6Y2xMVlhYWFhhVmFYWFh3dTBiRlhYWC5wbmdcIixcclxuICAgICAgICAgIFwiYmFubmVySXRlbXNcIjogW3tcclxuICAgICAgICAgICAgXCJpbWdcIjogXCJodHRwczovL2ltZy5hbGljZG4uY29tL3Rwcy9UQjFVOExITFZYWFhYYTNYcFhYWFhYWFhYWFgtMjMzLTE3Mi5qcGdcIixcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2NoYW9zaGkubS50bWFsbC5jb20vXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1nXCI6IFwiaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS90cHMvVEIxVThMSExWWFhYWGEzWHBYWFhYWFhYWFhYLTIzMy0xNzIuanBnXCIsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9jaGFvc2hpLm0udG1hbGwuY29tL1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImltZ1wiOiBcImh0dHBzOi8vaW1nLmFsaWNkbi5jb20vdHBzL1RCMVU4TEhMVlhYWFhhM1hwWFhYWFhYWFhYWC0yMzMtMTcyLmpwZ1wiLFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vY2hhb3NoaS5tLnRtYWxsLmNvbS9cIlxyXG4gICAgICAgICAgfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZmFzaGlvblwiOiB7XHJcbiAgICAgICAgICBcImlzSGlkZVwiOiBmYWxzZSxcclxuICAgICAgICAgIFwiZmxvb3JUaXRsZVwiOiBcImh0dHBzOi8vZ3cuYWxpY2RuLmNvbS90cHMvVEIxLl82NExWWFhYWGF0WFZYWFhYWFhYWFhYLTc1MC0xMDAuanBnXCIsXHJcbiAgICAgICAgICBcImJpZ0Jhbm5lckltZ1wiOiBcImh0dHBzOi8vZ3cuYWxpY2RuLmNvbS90cHMvVEIxdE8uYUxWWFhYWGN2WHBYWFhYWFhYWFhYLTc1MC0yNjIuanBnXCIsXHJcbiAgICAgICAgICBcImJpZ0Jhbm5lclVybFwiOiBcImh0dHBzOi8vY2hhb3NoaS5tLnRtYWxsLmNvbS9cIixcclxuICAgICAgICAgIFwic21hbGxCYW5uZXJJdGVtc1wiOiBbe1xyXG4gICAgICAgICAgICBcImltZ1wiOiBcImh0dHBzOi8vaW1nLmFsaWNkbi5jb20vdHBzL1RCMUZmXzBMVlhYWFhYTmFYWFhYWFhYWFhYWC0zNzUtMjYyLmpwZ1wiLFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vY2hhb3NoaS5tLnRtYWxsLmNvbS9cIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWdcIjogXCJodHRwczovL2ltZy5hbGljZG4uY29tL3Rwcy9UQjFGZl8wTFZYWFhYWE5hWFhYWFhYWFhYWFgtMzc1LTI2Mi5qcGdcIixcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2NoYW9zaGkubS50bWFsbC5jb20vXCJcclxuICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgXCJpc0hpZGVTdGFyQmFubmVyXCI6IGZhbHNlLFxyXG4gICAgICAgICAgXCJmaXJzdFN0YXJCYW5uZXJJdGVtc1wiOiBbe1xyXG4gICAgICAgICAgICBcImltZ1wiOiBcImh0dHBzOi8vZ3cuYWxpY2RuLmNvbS90cHMvVEIxeGxJVkxWWFhYWGNrWFZYWFhYWFhYWFhYLTI1MC0yMjAuanBnXCIsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9jaGFvc2hpLm0udG1hbGwuY29tL1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImltZ1wiOiBcImh0dHBzOi8vZ3cuYWxpY2RuLmNvbS90cHMvVEIxeGxJVkxWWFhYWGNrWFZYWFhYWFhYWFhYLTI1MC0yMjAuanBnXCIsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9jaGFvc2hpLm0udG1hbGwuY29tL1wiXHJcbiAgICAgICAgICB9XSxcclxuICAgICAgICAgIFwic2Vjb25kU3RhckJhbm5lckl0ZW1zXCI6IFt7XHJcbiAgICAgICAgICAgIFwiaW1nXCI6IFwiaHR0cHM6Ly9ndy5hbGljZG4uY29tL3Rwcy9UQjF4bElWTFZYWFhYY2tYVlhYWFhYWFhYWFgtMjUwLTIyMC5qcGdcIixcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2NoYW9zaGkubS50bWFsbC5jb20vXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1nXCI6IFwiaHR0cHM6Ly9ndy5hbGljZG4uY29tL3Rwcy9UQjF4bElWTFZYWFhYY2tYVlhYWFhYWFhYWFgtMjUwLTIyMC5qcGdcIixcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2NoYW9zaGkubS50bWFsbC5jb20vXCJcclxuICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgXCJ0aGlyZFN0YXJCYW5uZXJJdGVtc1wiOiBbe1xyXG4gICAgICAgICAgICBcImltZ1wiOiBcImh0dHBzOi8vZ3cuYWxpY2RuLmNvbS90cHMvVEIxeGxJVkxWWFhYWGNrWFZYWFhYWFhYWFhYLTI1MC0yMjAuanBnXCIsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9jaGFvc2hpLm0udG1hbGwuY29tL1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImltZ1wiOiBcImh0dHBzOi8vZ3cuYWxpY2RuLmNvbS90cHMvVEIxeGxJVkxWWFhYWGNrWFZYWFhYWFhYWFhYLTI1MC0yMjAuanBnXCIsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9jaGFvc2hpLm0udG1hbGwuY29tL1wiXHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJnb29kc1wiOiB7XHJcbiAgICAgICAgICBcImlzSGlkZVwiOiBmYWxzZSxcclxuICAgICAgICAgIFwiZmxvb3JUaXRsZVwiOiBcImh0dHBzOi8vZ3cuYWxpY2RuLmNvbS90cHMvVEIxLl82NExWWFhYWGF0WFZYWFhYWFhYWFhYLTc1MC0xMDAuanBnXCIsXHJcbiAgICAgICAgICBcImJhbm5lckl0ZW1zXCI6IFt7XHJcbiAgICAgICAgICAgIFwiaW1nMVwiOiBcImh0dHBzOi8vZ3cuYWxpY2RuLmNvbS90cHMvVEIxVFV6R0xWWFhYWGMxWEZYWFhYWFhYWFhYLTI1MC0yOTYuanBnXCIsXHJcbiAgICAgICAgICAgIFwidXJsMVwiOiBcImh0dHBzOi8vY2hhb3NoaS5tLnRtYWxsLmNvbS9cIixcclxuICAgICAgICAgICAgXCJpbWcyXCI6IFwiaHR0cHM6Ly9ndy5hbGljZG4uY29tL3Rwcy9UQjFUVXpHTFZYWFhYYzFYRlhYWFhYWFhYWFgtMjUwLTI5Ni5qcGdcIixcclxuICAgICAgICAgICAgXCJ1cmwyXCI6IFwiaHR0cHM6Ly9jaGFvc2hpLm0udG1hbGwuY29tL1wiLFxyXG4gICAgICAgICAgICBcImltZzNcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMTJNUEZMVlhYWFhYblhWWFhYWFhYWFhYWC0yNTAtNTkyLmpwZ1wiLFxyXG4gICAgICAgICAgICBcInVybDNcIjogXCJodHRwczovL2NoYW9zaGkubS50bWFsbC5jb20vXCIsXHJcbiAgICAgICAgICAgIFwiaW1nNFwiOiBcImh0dHBzOi8vZ3cuYWxpY2RuLmNvbS90cHMvVEIxVFV6R0xWWFhYWGMxWEZYWFhYWFhYWFhYLTI1MC0yOTYuanBnXCIsXHJcbiAgICAgICAgICAgIFwidXJsNFwiOiBcImh0dHBzOi8vY2hhb3NoaS5tLnRtYWxsLmNvbS9cIixcclxuICAgICAgICAgICAgXCJpbWc1XCI6IFwiaHR0cHM6Ly9ndy5hbGljZG4uY29tL3Rwcy9UQjFUVXpHTFZYWFhYYzFYRlhYWFhYWFhYWFgtMjUwLTI5Ni5qcGdcIixcclxuICAgICAgICAgICAgXCJ1cmw1XCI6IFwiaHR0cHM6Ly9jaGFvc2hpLm0udG1hbGwuY29tL1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImltZzFcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMVRVekdMVlhYWFhjMVhGWFhYWFhYWFhYWC0yNTAtMjk2LmpwZ1wiLFxyXG4gICAgICAgICAgICBcInVybDFcIjogXCJodHRwczovL2NoYW9zaGkubS50bWFsbC5jb20vXCIsXHJcbiAgICAgICAgICAgIFwiaW1nMlwiOiBcImh0dHBzOi8vZ3cuYWxpY2RuLmNvbS90cHMvVEIxVFV6R0xWWFhYWGMxWEZYWFhYWFhYWFhYLTI1MC0yOTYuanBnXCIsXHJcbiAgICAgICAgICAgIFwidXJsMlwiOiBcImh0dHBzOi8vY2hhb3NoaS5tLnRtYWxsLmNvbS9cIixcclxuICAgICAgICAgICAgXCJpbWczXCI6IFwiaHR0cHM6Ly9ndy5hbGljZG4uY29tL3Rwcy9UQjEyTVBGTFZYWFhYWG5YVlhYWFhYWFhYWFgtMjUwLTU5Mi5qcGdcIixcclxuICAgICAgICAgICAgXCJ1cmwzXCI6IFwiaHR0cHM6Ly9jaGFvc2hpLm0udG1hbGwuY29tL1wiLFxyXG4gICAgICAgICAgICBcImltZzRcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMVRVekdMVlhYWFhjMVhGWFhYWFhYWFhYWC0yNTAtMjk2LmpwZ1wiLFxyXG4gICAgICAgICAgICBcInVybDRcIjogXCJodHRwczovL2NoYW9zaGkubS50bWFsbC5jb20vXCIsXHJcbiAgICAgICAgICAgIFwiaW1nNVwiOiBcImh0dHBzOi8vZ3cuYWxpY2RuLmNvbS90cHMvVEIxVFV6R0xWWFhYWGMxWEZYWFhYWFhYWFhYLTI1MC0yOTYuanBnXCIsXHJcbiAgICAgICAgICAgIFwidXJsNVwiOiBcImh0dHBzOi8vY2hhb3NoaS5tLnRtYWxsLmNvbS9cIlxyXG4gICAgICAgICAgfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiY291cG9uXCI6IHtcclxuICAgICAgICAgIFwiZmxvb3JUaXRsZVwiOiBcImh0dHBzOi8vZ3cuYWxpY2RuLmNvbS90cHMvVEIxLl82NExWWFhYWGF0WFZYWFhYWFhYWFhYLTc1MC0xMDAuanBnXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic2NlbmVcIjoge1xyXG4gICAgICAgICAgXCJmbG9vclRpdGxlXCI6IFwiaHR0cHM6Ly9ndy5hbGljZG4uY29tL3Rwcy9UQjEuXzY0TFZYWFhYYXRYVlhYWFhYWFhYWFgtNzUwLTEwMC5qcGdcIixcclxuICAgICAgICAgIFwiX2JhY2t1cFwiOiB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIwMzY1M1wiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW3tcclxuICAgICAgICAgICAgICBcImlkXCI6IFwiMTM5NVwiLFxyXG4gICAgICAgICAgICAgIFwic2NlbmVVcmxcIjogXCJodHRwczovL3BhZ2VzLnRtYWxsLmNvbS93b3cvYWN0LzE1NjE3L3NjZW5lP2FjbT0wMzY1My4xMDAzLjEuNzEwNTMxJmFsZGlkPVRQTWtKREl3JndoX2lkPTEzOTUmc2NtPTEwMDMuMS4wMzY1My5NQUlOXzEzOTVfNzEwNTMxJnBvcz0xXCIsXHJcbiAgICAgICAgICAgICAgXCJfc19cIjogXCJkXCIsXHJcbiAgICAgICAgICAgICAgXCJpdGVtSW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTIvVEIxbjZiVkxWWFhYWGNDWFZYWFRDVTBRcFhYLTMwMC0zMDAuanBnXCIsXHJcbiAgICAgICAgICAgICAgXCJzY2VuZUNhdFwiOiBcIjUwMDA4ODgxLDUwMDA4ODgzLDUwMDA4ODgyLDUwMDA4ODg0LDUwMDEyNzc0LDUwMDEyNzc1LDUwMDEyNzc2LDUwMDEyNzgxLDUwMDA4ODg2LDUwMDEyNzY2LDUwMDEyNzcxLDUwMDEyNzcyLDUwMDEwODUwLDUwMDAwNjcxLDE2MjIwMSw1MDAyMjU2Niw1MDAwNzA2OCw1MDAyNjY1MSw1MDAwMDg1MiwxNjIxMDQsMTYyMTE2LDE2MjIwNSwxNjIzLDEyMzIxNjAwNCwxNjI0MDQsMTYyNDAxLDUwMDExNDEyLDUwMDExNDExLDE2MjQwLDUwMDEyNzczLDUwMDA2ODQ2LDUwMDEwMzk0LDUwMDA4ODg4LDUwMDA4ODkwLDUwMDA4ODg5LDUwMDEyNzg0LDUwMDEyNzg1LDUwMDEyNzg2LDUwMDEyNzg3LDUwMDA4ODg1LDUwMDEyNzc3LDUwMDEyNzc4LDEyNDczMDAwMSw1MDAwMTc0OCw1MDAxMTEzMCwxMjQ3MzAwMDEsNTAwMDE3NDgsNTAwMTExMzAsNTAwMTExMjksNTAwMTAxNjAsNTAwMTExNjEsNTAwMTExNTksNTAwMTAxNTksNTAwMTAxNTgsNTAwMTExMjcsMzAzNSw1MDAxMDE2Nyw1MDAwMDU1Nyw1MDAxMTEyMyw1MDAxMDQwMiw1MDAwMDQzNiw1MDAxMTE1Myw1MDAxMTc0MCw1MDAwNjg0Myw1MDAwNjg0MiwxMjQ5NDIwMDUsNTAwMTAzNjgsNTAwMTE4OTIsNTAwMTE4OTQsNTAwMjM3NTEsMTIxMzY2MDM3LDEyMTQ1ODAzNiwxMjEzOTIwMzgsMTIxNDIwMDM1LDEyMTM2NDAyOCwxMjE0NjgwMjYsMTIxNDAwMDI5LDEyMTQxODAzMCwxMjE0NzgwMzEsMTIxNDgwMDMwLDEyMTM2NjAzNSwxMjE0MjQwMjUsMTIxNDI2MDMwLDEyMTQ4NDAzMCwxMjE0MTIwMzEsMTI1MDU0MDAyLDEyNTA3NDAwNywxMjUwNzQwMDgsMTI1MTA0MDAzLDEyNTA4MDAwMywxMjUwMjQwMDYsMTI1MDgwMDA0LDEyMTQwMDAzMCwxMjE0MjQwMjQsMTIxNDgyMDI1LDEyMTQxODAzMSwxMjE0MDIwMjgsMTIxMzg4MDM1XCIsXHJcbiAgICAgICAgICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiNzcuMjYwMTExMTExMTExMTJcIixcclxuICAgICAgICAgICAgICBcIl9wb3NfXCI6IDEsXHJcbiAgICAgICAgICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiTUFJTlwiLFxyXG4gICAgICAgICAgICAgIFwiYmVuZWZpdEltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kzL1RCMU9ucjlMVlhYWFhiaVhwWFhCOGdBUXBYWC0zMDAtMTAwLnBuZ1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgXCJpZFwiOiBcIjEzOTRcIixcclxuICAgICAgICAgICAgICBcInNjZW5lVXJsXCI6IFwiaHR0cHM6Ly9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy9zY2VuZT9hY209MDM2NTMuMTAwMy4xLjcxMDUzMSZhbGRpZD1UUE1rSkRJdyZ3aF9pZD0xMzk0JnNjbT0xMDAzLjEuMDM2NTMuTUFJTl8xMzk0XzcxMDUzMSZwb3M9MlwiLFxyXG4gICAgICAgICAgICAgIFwiX3NfXCI6IFwiZFwiLFxyXG4gICAgICAgICAgICAgIFwiaXRlbUltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMTNtajFMVlhYWFhhLlhGWFhUQ1UwUXBYWC0zMDAtMzAwLmpwZ1wiLFxyXG4gICAgICAgICAgICAgIFwic2NlbmVDYXRcIjogXCI1MDAxMDg1MCw1MDAwMDY3MSwxNjIyMDEsNTAwMjI1NjYsNTAwMDcwNjgsNTAwMjY2NTEsNTAwMDA4NTIsMTYyMTA0LDE2MjExNiwxNjIyMDUsMTYyMywxMjMyMTYwMDQsMTYyNDA0LDE2MjQwMSw1MDAxMTQxMiw1MDAxMTQxMSwxNjI0MDIsNTAwMDg5MDMsNTAwMTE0MTMsMTYyNDAzLDUwMDAwNjk3LDE2MjksNTAwMTEyNzcsMTIxNDEyMDA0LDUwMDA4ODk3LDUwMDA4OTAxLDUwMDA4ODk5LDUwMDEzMTk0LDUwMDA4OTA0LDUwMDA4OTA1LDUwMDA4ODk4LDE2MjEwMyw1MDAwODkwMCw1MDAxMzE5NiwxMjE0MzQwMDQsNTAwMDUwNjUsMTYyNzAyLDE2MjcwMSwxNjI3MDMsMTYzNiwxMjQ3MzAwMDEsNTAwMDE3NDgsNTAwMTExMzAsMTI0NzMwMDAxLDUwMDAxNzQ4LDUwMDExMTMwLDUwMDExMTI5LDUwMDEwMTYwLDUwMDExMTYxLDUwMDExMTU5LDUwMDEwMTU5LDUwMDEwMTU4LDUwMDExMTI3LDMwMzUsNTAwMTAxNjcsNTAwMDA1NTcsNTAwMTExMjMsNTAwMTA0MDIsNTAwMDA0MzYsNTAwMTExNTMsNTAwMTE3NDAsNTAwMDY4NDMsNTAwMDY4NDIsMTI0OTg2MDAyLDUwMDEwMzY4LCA1MDAxMTg5Miw1MDAxMTg5NCwxMjE0ODAwMzAsMTIxMzY2MDM1LDEyMTQyNDAyNSwxMjE0MjYwMzAsMTIxNDg0MDMwLDEyMTQxMjAzMVwiLFxyXG4gICAgICAgICAgICAgIFwiZmluYWxTY29yZVwiOiBcIjc3LjA2MTAzOTk5OTk5OTk5XCIsXHJcbiAgICAgICAgICAgICAgXCJfcG9zX1wiOiAyLFxyXG4gICAgICAgICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIk1BSU5cIixcclxuICAgICAgICAgICAgICBcImJlbmVmaXRJbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMi9UQjE3a3ZWTFZYWFhYYVRYVlhYQjhnQVFwWFgtMzAwLTEwMC5wbmdcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIFwiaWRcIjogXCIxMzk2XCIsXHJcbiAgICAgICAgICAgICAgXCJzY2VuZVVybFwiOiBcImh0dHBzOi8vcGFnZXMudG1hbGwuY29tL3dvdy9hY3QvMTU2MTcvc2NlbmU/YWNtPTAzNjUzLjEwMDMuMS43MTA1MzEmYWxkaWQ9VFBNa0pESXcmd2hfaWQ9MTM5NiZzY209MTAwMy4xLjAzNjUzLk1BSU5fMTM5Nl83MTA1MzEmcG9zPTNcIixcclxuICAgICAgICAgICAgICBcIl9zX1wiOiBcImRcIixcclxuICAgICAgICAgICAgICBcIml0ZW1JbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMi9UQjFaT0FYTFZYWFhYYTBYWFhYVENVMFFwWFgtMzAwLTMwMC5qcGdcIixcclxuICAgICAgICAgICAgICBcInNjZW5lQ2F0XCI6IFwiNTAwMTAzNjgsNTAwMTE4OTIsNTAwMTE4OTQsNTAwMTM3OTQsNTAwMTA3OTIsNTAwMTA3OTAsNTAwMTA3OTAsMTIxNDM0MDI1LDEyMTM5NjAyNCw1MDAxMDc5Myw1MDAxMDc4OSw1MDAxMDc5MywxMjEzODYwMzUsMTIxMzkyMDM3LDEyMTQ1ODAzNCwxMjEzOTIwMzYsMTIxNDgyMDI3LDEyMTM5MjAxNSwxMjEzNjgwMTQsMTIxNDE4MDEzLDEyMTM5MjAxNiw1MDAxMTk4MiwxMjI2OTAwMDMsMzAyOTEwLDUwMDEyMDEwLDEyMjY1NDAwNSw1MDAxMjAxOSw1MDAxMjgyNSw1MDAxMjAyNyw1MDAxMjA0Miw1MDAxMTc0NCw1MDAxMjkwNiw1MDAxMjkwNyw1MDAwODg4MSw1MDAwODg4Myw1MDAwODg4Mj8sNTAwMTI3ODQ/LDUwMDIyODg5LDUwMDIyNzI4LDUwMDEzMjI4LDUwMDEzODk2LDUwMDE0Nzc1LDUwMDE5NTc4LDUwMDE0ODIyLDUwMDI2Mzk0LDUwMDE5Njk0LDUwMDE5Mjc5LDUwMDE5MjcyLDUwMDE0MDc5LDUwMDE0MDc4LDUwMDE0MDc2LDUwMDE0MDc3LDUwMDE3MjM4LDEyMTQ2NDAxMSwxMjE0NjgwMTQsNTAwMTkxMzAsNTAwMTkxMjcsNTAwMTkxMjYsNTAwMTkxMjgsNTAwMTkxMjUsNTAwMTU5ODQsNTAwMTQ4MDMsNTAwMTQ4MDIsNTAwMTU5ODAsNTAwMTQ3ODgsNTAwMTQ3ODcsNTAwMTk1MjYsNTAwMTQ3OTEsNTAwMTk1MjAsNTAwMTM5MzIsNTAwMTQ2NzcsNTAwMTU5NzgsNTAwMTQ3ODYsNTAwMTQ3ODUsNTA1MjIwMDEsNTAwMTQ0OTMsNTAwMjMxMDAsMTIxNDE4MDIxLDEyMTM4ODAyNywxMjE0MjQwMjEsMTIxNDE4MDIwLDEyMTM2ODAyMCw1MDAxMjAzNiw1MDAxMjA0NCw1MDAxMjA0Myw1MDAxMDM2OCwgNTAwMTE4OTIsIDUwMDE5Mjc0LDUwMDEyMDQ0LDUwMDEyMDQ4LDUwMDEyMDQzLDUwMDEzMjI4LDUwMDEzMjM4LDUwMDExNzI2LDUwMDE5Mjc5LDUwMDE1OTg0LDUwMDE0ODAzLDUwMDE0ODAyLDUwMDE5NTI2LDUwMDE0NzkxLDUwMDE5NTIwLDUwMDEzOTMyLDUwMDE0Njc3LDUwMDE5NTI2LDUwMDEzMzE0LDUwMDIzMzQxLDUwMDE2NzUyLDUwMDE2NzQ5LDUwMDE2NzQ3LDUwMDE2NzQ0LDUwMDE2NzQxLDUwMDE2NzQwLDUwMDE2NzM5LDUwMDE2NzM4LDUwMDE2NzM3LDUwMDE2NzY5LDUwMDE2NzYzLDUwMDE2NzUwLDUwMDA3MDAzLDMwMjkxMCw1MDAxMjAxMCw1MDAxMjAzMiw1MDAxMjAzMyw1MDAxMTc0NSw1MDAxMTc0Niw1MDAxMTg5NCwxMjE0NTgwMzQsMTIxNzU2MDAzLDEyMTQyNjAzMyw1MDAxMTk4Miw1MDAxMTk3OSwxMjEzOTAwMDYsMTI0NzMwMDAxLDUwMDAxNzQ4LDUwMDExMTMwLDEyNDczMDAwMSw1MDAwMTc0OCw1MDAxMTEzMCw1MDAxMTEyOSw1MDAxMDE2MCw1MDAxMTE2MSw1MDAxMTE1OSw1MDAxMDE1OSw1MDAxMDE1OCw1MDAxMTEyNywzMDM1LDUwMDEwMTY3LDUwMDAwNTU3LDUwMDExMTIzLDUwMDEwNDAyLDUwMDAwNDM2LDUwMDExMTUzLDUwMDEwODUwLDUwMDAwNjcxLDE2MjIwMSw1MDAyMjU2Niw1MDAwNzA2OCw1MDAyNjY1MSw1MDAwMDg1MiwxNjIxMDQsMTYyMTE2LDE2MjIwNSwxNjIzLDEyMzIxNjAwNCwxNjI0MDQsMTYyNDAxLDUwMDExNDEyLDUwMDExNDExLDE2MjQwMiw1MDAwODkwMyw1MDAxMTQxMywxNjI0MDMsNTAwMDA2OTcsMTYyOSw1MDAxMTI3NywxMjE0MTIwMDQsNTAwMDg4OTcsNTAwMDg5MDEsNTAwMDg4OTksNTAwMTMxOTQsNTAwMDg5MDQsNTAwMDg5MDUsNTAwMDg4OTgsMTYyMTAzLDUwMDA4OTAwLDUwMDEzMTk2LDEyMTQzNDAwNCw1MDAwNTA2NSwxNjI3MDIsMTYyNzAxLDE2MjcwMywxNjM2LDE1MTIsMTIzNTM0MDAxLDE0LDUwMDA4MDkwLDUwMDEyMzQxLDUwMTMyMDAyLDUwMDEyMzQyLDUwMDEyMzQzLDUwMDEyMzQ1LDUwMDEyMzQ2LDUwMDEzMTg5LDUwMDEwNTI3LDEyMTM5NDAwNiw1MDAxMzYxOCw1MDAxMDUzNyw1MDAxMjQyNCwxMjE0NTIwMzgsMTIxNDg0MDQ0LDUwMDEwNTQwLDUwMDEwNTQ4LDUwMDI0NzY5LDEyMTQ1MDAwNyw1MDAxMzY5Nyw1MDAxMDIxOCw1MDAwNTk2MCw1MDAwNTk2Miw1MDAxMjgyMCw1MDAxMjQwNiw1MDAyMzYyMCw1MDAyMzYwNSw1MDAwODgyOSw1MDAyNDA2NCw1MDAyMzQ0MCw1MDAwODY4NywxMjQzOTIwMDEsNTAwMjM3NzEsNTAwMDY4MDQsNTAwMTI0MTAsMTI0NDgyMDEwLDEyMTM5ODAyMyw1MDAyMzc4OSw1MDAxMTk3NVwiLFxyXG4gICAgICAgICAgICAgIFwiZmluYWxTY29yZVwiOiBcIjc2Ljc2Mzc5NDg3MTc5NDg2XCIsXHJcbiAgICAgICAgICAgICAgXCJfcG9zX1wiOiAzLFxyXG4gICAgICAgICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIk1BSU5cIixcclxuICAgICAgICAgICAgICBcImJlbmVmaXRJbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMy9UQjFVc24uTFZYWFhYYW9YcFhYQjhnQVFwWFgtMzAwLTEwMC5wbmdcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIFwiaWRcIjogXCIxNjE5XCIsXHJcbiAgICAgICAgICAgICAgXCJzY2VuZVVybFwiOiBcImh0dHBzOi8vcGFnZXMudG1hbGwuY29tL3dvdy9hY3QvMTU2MTcvc2NlbmU/YWNtPTAzNjUzLjEwMDMuMS43MTA1MzEmYWxkaWQ9VFBNa0pESXcmd2hfaWQ9MTYxOSZzY209MTAwMy4xLjAzNjUzLlNVQl8xNjE5XzcxMDUzMSZwb3M9NFwiLFxyXG4gICAgICAgICAgICAgIFwiX3NfXCI6IFwiZFwiLFxyXG4gICAgICAgICAgICAgIFwiaXRlbUltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kyL1RCMU1wb0JMVlhYWFhieFhwWFhLb2ZaWnBYWC0xODItMjA2LmpwZ1wiLFxyXG4gICAgICAgICAgICAgIFwic2NlbmVDYXRcIjogXCIxMjQ3MzAwMDEsNTAwMDE3NDgsNTAwMTExMzAsMTI0NzMwMDAxLDUwMDAxNzQ4LDUwMDExMTMwLDUwMDExMTI5LDUwMDEwMTYwLDUwMDExMTYxLDUwMDExMTU5LDUwMDEwMTU5LDUwMDEwMTU4LDUwMDExMTI3LDMwMzUsNTAwMTAxNjcsNTAwMDA1NTcsNTAwMTExMjMsNTAwMTA0MDIsNTAwMDA0MzYsNTAwMTExNTMsMTIyNjU0MDA1LDUwMDExNzQwLDUwMDA5MDMyLDEyNDY4ODAxMu+8jDIxMzIwMiwxMjEzOTYwMjksMTIxNDc2MDIzLDEyMTQxMDAyOSwyMTMyMDMsNTAwMjMzMjYsMjEzMjA1LDUwMDIyNjg2LDUwMDIzMjkzLDUwNDY2MDIzLDUwMDI0OTk5LDUwMDE2ODg177yMNTAwMTE4OTRcIixcclxuICAgICAgICAgICAgICBcImZpbmFsU2NvcmVcIjogXCI3NS44ODQ4MDAwMDAwMDAwMVwiLFxyXG4gICAgICAgICAgICAgIFwiX3Bvc19cIjogNCxcclxuICAgICAgICAgICAgICBcImVudGl0eVR5cGVcIjogXCJTVUJcIixcclxuICAgICAgICAgICAgICBcImJlbmVmaXRJbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pNC9UQjFqMEF4TFZYWFhYYVJYRlhYM2JwWFRYWFgtMTcwLTEwMC5wbmdcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIFwiaWRcIjogXCIxNjEyXCIsXHJcbiAgICAgICAgICAgICAgXCJzY2VuZVVybFwiOiBcImh0dHBzOi8vcGFnZXMudG1hbGwuY29tL3dvdy9hY3QvMTU2MTcvc2NlbmU/YWNtPTAzNjUzLjEwMDMuMS43MTA1MzEmYWxkaWQ9VFBNa0pESXcmd2hfaWQ9MTYxMiZzY209MTAwMy4xLjAzNjUzLlNVQl8xNjEyXzcxMDUzMSZwb3M9NVwiLFxyXG4gICAgICAgICAgICAgIFwiX3NfXCI6IFwiZFwiLFxyXG4gICAgICAgICAgICAgIFwiaXRlbUltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kzL1RCMU5Od3lMVlhYWFhhRVhWWFhLb2ZaWnBYWC0xODItMjA2LmpwZ1wiLFxyXG4gICAgICAgICAgICAgIFwic2NlbmVDYXRcIjogXCI1MDAxMDg1MCw1MDAwMDY3MSwxNjIxMDQsMTYyMTE2LDEyMzIxNjAwNFwiLFxyXG4gICAgICAgICAgICAgIFwiZmluYWxTY29yZVwiOiBcIjc1LjIzNzMzMzMzMzMzMzM0XCIsXHJcbiAgICAgICAgICAgICAgXCJfcG9zX1wiOiA1LFxyXG4gICAgICAgICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIlNVQlwiLFxyXG4gICAgICAgICAgICAgIFwiYmVuZWZpdEltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMVBzb0JMVlhYWFhiUVhwWFgzYnBYVFhYWC0xNzAtMTAwLnBuZ1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgXCJpZFwiOiBcIjE2MTBcIixcclxuICAgICAgICAgICAgICBcInNjZW5lVXJsXCI6IFwiaHR0cHM6Ly9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy9zY2VuZT9hY209MDM2NTMuMTAwMy4xLjcxMDUzMSZhbGRpZD1UUE1rSkRJdyZ3aF9pZD0xNjEwJnNjbT0xMDAzLjEuMDM2NTMuU1VCXzE2MTBfNzEwNTMxJnBvcz02XCIsXHJcbiAgICAgICAgICAgICAgXCJfc19cIjogXCJkXCIsXHJcbiAgICAgICAgICAgICAgXCJpdGVtSW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTQvVEIxRWtjekxWWFhYWGNWWHBYWEtvZlpacFhYLTE4Mi0yMDYuanBnXCIsXHJcbiAgICAgICAgICAgICAgXCJzY2VuZUNhdFwiOiBcIjEyMTQ4NDA0NCwxMjE0NTIwMzgsNTAwMTIzNDIsNTAwMTIwMjcsNTAwMTIwMzIsNTAwMDY4NDMsNTAwMTA4NTAsNTAwMDA2NzEsMTYyMTA0LDE2MjMsNTAwMTEyNzcsMTYyMTE2LDEyMzIxNjAwNCw1MDAwODg5OCwxMjEzNjYwMzcsMTIxNDU4MDM2LDEyMTM5MjAzOCwxMjE0MjAwMzUsMTIxMzY0MDI4LDEyMTQ2ODAyNiwxMjE0NzIwMzEsMTIxNDc2MDM2LDEyMTQ3MDA0MiwxMjE0MTgwMzIsMTIxNDEwMDM2LDEyMTQ3MjAzMiwxMjE0MjAwMzIsMTIxNDcwMDQwLDEyMTM4NDAzMiwxMjE0NjAwMjgsMTIxNDQ4MDI4LDEyMTQwMDAzMCwxMjE0MjQwMjQsMTIxNDgyMDI1LDEyMTQxODAzMSwxMjE0MDIwMjgsMTIxMzg4MDM1LDEyMTQ2MDAyOSwxMjE0MDAwMjgsMTIxNDAwMDI5LDEyMTQxODAzMCwxMjE0NzYwMzQsMTIxNDc4MDMxLDEyMTQ0ODAyOSwxMjE0ODAwMzAsMTIxMzY2MDM1LDEyMTQyNDAyNSwxMjE0MjYwMzAsMTIxNDg0MDMwLDEyMTQxMjAzMSwxMjEzODQwMzMsMTIxNDI0MDIzLDEyMTQwMjAyNywxMjE0MDgwMzksMTIxNDIwMDMzLDEyMTQ1MjAyOCwxMjE0NjYwNDAsMTIxNDE2MDI5LDEyMTQ4MjAyOCwxMjE0MjAwMzQsMTIxMzk2MDQ2LDEyMTQyMjA1MiwxMjEzNzAwMzcsMTIxNDI0MDMxLDIxMzY0MDQzLDEyMTQ3MjA0MCwxMjE0MTIwNDUsMTIxNDI0MDMyLDEyNTA1NDAwMiwxMjUwNzQwMDcsMTI1MDc0MDA4LDEyNTEwNDAwMywxMjUwODAwMDMsMTI1MDI0MDA2LDEyNTA4MDAwNFwiLFxyXG4gICAgICAgICAgICAgIFwiZmluYWxTY29yZVwiOiBcIjc1LjAwNTMzMzMzMzMzMzM0XCIsXHJcbiAgICAgICAgICAgICAgXCJfcG9zX1wiOiA2LFxyXG4gICAgICAgICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIlNVQlwiLFxyXG4gICAgICAgICAgICAgIFwiYmVuZWZpdEltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kyL1RCMVJ6d0ZMVlhYWFhYc1hwWFgzYnBYVFhYWC0xNzAtMTAwLnBuZ1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgXCJpZFwiOiBcIjE2MjBcIixcclxuICAgICAgICAgICAgICBcInNjZW5lVXJsXCI6IFwiaHR0cHM6Ly9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy9zY2VuZT9hY209MDM2NTMuMTAwMy4xLjcxMDUzMSZhbGRpZD1UUE1rSkRJdyZ3aF9pZD0xNjIwJnNjbT0xMDAzLjEuMDM2NTMuU1VCXzE2MjBfNzEwNTMxJnBvcz03XCIsXHJcbiAgICAgICAgICAgICAgXCJfc19cIjogXCJkXCIsXHJcbiAgICAgICAgICAgICAgXCJpdGVtSW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxSUpzSUxWWFhYWGJHWFhYWEtvZlpacFhYLTE4Mi0yMDYuanBnXCIsXHJcbiAgICAgICAgICAgICAgXCJzY2VuZUNhdFwiOiBcIjUwMDEwNzg5LDUwMDEwNzkwLDUwMDEwNzkyLDUwMDEwNzkzLDUwMDEwNzk0LDUwMDEwNzk2LDUwMDEwNzk3LDUwMDEwNzk4LDUwMDEwODAxLDUwMDEwODAzLDUwMDEwODA1LDUwMDEwODA3LDUwMDEwODA4LDUwMDEwODEzLDUwMDEwODE0LDUwMDEwODE1LDUwMDEzNzk0LDEyMTM4MjAxNCwxMjEzODYwMjMsMTIxMzg4MDA3LDEyMTM4ODAwOCwxMjEzOTgwMDQsMTIxMzY0MDA3LDEyMTM5ODAwNiwxMjE0MTAwMDcsMTIxNDI2MDA3LDEyMTQ1MjAwNCw1MDAxMjAxMCw1MDAxMjAyNyw1MDAxMjAzMu+8jDEyNDY4ODAxMiwgMTI0OTg2MDAyLCAxMjQ5NDIwMDXvvIw1MDAxMDg1MCw1MDAwMDY3MSwxNjIxMDQsMTYyMjAxLDUwMDIyNTY2LDE2MjExNiwxNjIzLDUwMDExMjc3LDUwMDA4ODk3LDE2MjQwMSwxNjI0MDJcIixcclxuICAgICAgICAgICAgICBcImZpbmFsU2NvcmVcIjogXCI3NC43MjUyMjIyMjIyMjIyM1wiLFxyXG4gICAgICAgICAgICAgIFwiX3Bvc19cIjogNyxcclxuICAgICAgICAgICAgICBcImVudGl0eVR5cGVcIjogXCJTVUJcIixcclxuICAgICAgICAgICAgICBcImJlbmVmaXRJbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjE2QS55TFZYWFhYWDhYRlhYM2JwWFRYWFgtMTcwLTEwMC5wbmdcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIFwiaWRcIjogXCIxNjA4XCIsXHJcbiAgICAgICAgICAgICAgXCJzY2VuZVVybFwiOiBcImh0dHBzOi8vcGFnZXMudG1hbGwuY29tL3dvdy9hY3QvMTU2MTcvc2NlbmU/YWNtPTAzNjUzLjEwMDMuMS43MTA1MzEmYWxkaWQ9VFBNa0pESXcmd2hfaWQ9MTYwOCZzY209MTAwMy4xLjAzNjUzLlNVQl8xNjA4XzcxMDUzMSZwb3M9OFwiLFxyXG4gICAgICAgICAgICAgIFwiX3NfXCI6IFwiZFwiLFxyXG4gICAgICAgICAgICAgIFwiaXRlbUltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kzL1RCMXhBM2pMVlhYWFhYcWFwWFhLb2ZaWnBYWC0xODItMjA2LmpwZ1wiLFxyXG4gICAgICAgICAgICAgIFwic2NlbmVDYXRcIjogXCI1MDAxMjAxMCw1MDAxMjAyNyw1MDAxMjAzMiw1MDAwNzAwMyw1MDAwODg4MSw1MDAwODg4MywxNjIzLDE2MjExNiw1MDAxMDg1MCwxMjMyMTYwMDRcIixcclxuICAgICAgICAgICAgICBcImZpbmFsU2NvcmVcIjogXCI3NC42MjZcIixcclxuICAgICAgICAgICAgICBcIl9wb3NfXCI6IDgsXHJcbiAgICAgICAgICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiU1VCXCIsXHJcbiAgICAgICAgICAgICAgXCJiZW5lZml0SW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTIvVEIxV3ZvQUxWWFhYWGNkWHBYWDNicFhUWFhYLTE3MC0xMDAucG5nXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBcImlkXCI6IFwiMTYxNVwiLFxyXG4gICAgICAgICAgICAgIFwic2NlbmVVcmxcIjogXCJodHRwczovL3BhZ2VzLnRtYWxsLmNvbS93b3cvYWN0LzE1NjE3L3NjZW5lP2FjbT0wMzY1My4xMDAzLjEuNzEwNTMxJmFsZGlkPVRQTWtKREl3JndoX2lkPTE2MTUmc2NtPTEwMDMuMS4wMzY1My5TVUJfMTYxNV83MTA1MzEmcG9zPTlcIixcclxuICAgICAgICAgICAgICBcIl9zX1wiOiBcImRcIixcclxuICAgICAgICAgICAgICBcIml0ZW1JbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjFQVmN0TFZYWFhYY2hYRlhYS29mWlpwWFgtMTgyLTIwNi5qcGdcIixcclxuICAgICAgICAgICAgICBcInNjZW5lQ2F0XCI6IFwiNTAwMTE5NzgsNTAwMTE5NzksNTAwMTE5ODAsNTAwMTE5OTMsNTAwMTE5OTYsNTAwMTE5OTcsMTIxMzkwMDA2LDEyMTQwODAxMSwxMjE0NzQwMTAsNTAwMTA3ODksNTAwMTA3OTAsNTAwMTA3OTIsNTAwMTA3OTMsNTAwMTA4MDMsNTAwMTM3OTQsMTIxMzk4MDA0LDEyMTQxMDAwN++8jDIxMzIwNSwxMjE0NzAwMzAsNTAwMjQ5ODAsMTIxNDA4MDMwXCIsXHJcbiAgICAgICAgICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiNzQuMDI3OTk5OTk5OTk5OTlcIixcclxuICAgICAgICAgICAgICBcIl9wb3NfXCI6IDksXHJcbiAgICAgICAgICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiU1VCXCIsXHJcbiAgICAgICAgICAgICAgXCJiZW5lZml0SW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTQvVEIxeUt3QkxWWFhYWGE0WHBYWDNicFhUWFhYLTE3MC0xMDAucG5nXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBcImlkXCI6IFwiMTYxOFwiLFxyXG4gICAgICAgICAgICAgIFwic2NlbmVVcmxcIjogXCJodHRwczovL3BhZ2VzLnRtYWxsLmNvbS93b3cvYWN0LzE1NjE3L3NjZW5lP2FjbT0wMzY1My4xMDAzLjEuNzEwNTMxJmFsZGlkPVRQTWtKREl3JndoX2lkPTE2MTgmc2NtPTEwMDMuMS4wMzY1My5TVUJfMTYxOF83MTA1MzEmcG9zPTEwXCIsXHJcbiAgICAgICAgICAgICAgXCJfc19cIjogXCJkXCIsXHJcbiAgICAgICAgICAgICAgXCJpdGVtSW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxdm4zc0xWWFhYWFg1WFZYWEtvZlpacFhYLTE4Mi0yMDYuanBnXCIsXHJcbiAgICAgICAgICAgICAgXCJzY2VuZUNhdFwiOiBcIjUwMDA4ODg2LDUwMDEyNzY2LDUwMDEyNzcxLDUwMDEyNzcyLDUwMDEyNzczLDUwMDA4MDkwLDExMTIxOSw1MDAxMjEwMCw1MDAxMjA4Miw1MDAxMjQ3OCw1MDAxMjQ3NSwyMTMyMDIsNTAwMTg5NzcsMTIxMzk2MDI5LDEyMTQ3NjAyMyw1MDAxODk5NCwxMjE0MTAwMjksMjEzMjAzLDUwMDIzMzI2LDUwMDAzODIwLDIxMzIwNSw1MDAyMjY4Niw1MDAxMjQ4MSw1MDAxMzk3Nj8sNTAwMDE4NzEsMTIyODU0MDA1LDEyMTQ1ODAxMCwxMjE0NTIwMDYsMTIxNDE2MDA4LDUwMDA4Nzc5LDUwMDAyNzc3LDEyMTM5NDAwNywxMjEzODYwMDksNTAwMTA4MjUsNTAwMTM4MTAsMTIxNDM0MDEwLDUwMDAxODY1LDUwMDA4NTY1LDUwMDA4MjQ2LDUwMDE3MTkyLDEyMTQwNDA0NSwxMjEzNjgwMDksMTIxNDYyMDE0LDUwMDE5MzcyLDUwMDA4MjQ4LDEyMTQxODAxMSw1MDAwODI0OSw1MDAxNzE5Myw1MDAwODI1Miw1MDAwODI1MSw1MDAwMDUxMiwxMjEzNjQwNDdcIixcclxuICAgICAgICAgICAgICBcImZpbmFsU2NvcmVcIjogXCI3My45NDIxMjEyMTIxMjEyMVwiLFxyXG4gICAgICAgICAgICAgIFwiX3Bvc19cIjogMTAsXHJcbiAgICAgICAgICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiU1VCXCIsXHJcbiAgICAgICAgICAgICAgXCJiZW5lZml0SW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTQvVEIxa1NrcExWWFhYWGJUWFZYWDNicFhUWFhYLTE3MC0xMDAucG5nXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBcImlkXCI6IFwiMTYxN1wiLFxyXG4gICAgICAgICAgICAgIFwic2NlbmVVcmxcIjogXCJodHRwczovL3BhZ2VzLnRtYWxsLmNvbS93b3cvYWN0LzE1NjE3L3NjZW5lP2FjbT0wMzY1My4xMDAzLjEuNzEwNTMxJmFsZGlkPVRQTWtKREl3JndoX2lkPTE2MTcmc2NtPTEwMDMuMS4wMzY1My5TVUJfMTYxN183MTA1MzEmcG9zPTExXCIsXHJcbiAgICAgICAgICAgICAgXCJfc19cIjogXCJkXCIsXHJcbiAgICAgICAgICAgICAgXCJpdGVtSW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxRUx3ckxWWFhYWGFOWFZYWEtvZlpacFhYLTE4Mi0yMDYuanBnXCIsXHJcbiAgICAgICAgICAgICAgXCJzY2VuZUNhdFwiOiBcIjUwMDEzMTg5LDUwMDEwNTI3LDEyMTM5NDAwNiw1MDAxMzYxOCw1MDAxMDUzNyw1MDAxMjQyNCwxMjE0NTIwMzgsMTIxNDg0MDQ0LDUwMDEwNTQwLDUwMDEwNTQ4LDUwMDI0NzY5LDUwMDEyMzQxLDUwMTMyMDAyLDUwMDEyMzQyLDUwMDEyMzQzLDUwMDEyMzQ1LDUwMDEyMzQ2LDUwMDEyMzQxLDUwMTMyMDAyLDUwMDEyMzQyLDUwMDEyMzQzLDUwMDEyMzQ1LDUwMDEyMzQ2XCIsXHJcbiAgICAgICAgICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiNzMuNzg4ODMzMzMzMzMzMzRcIixcclxuICAgICAgICAgICAgICBcIl9wb3NfXCI6IDExLFxyXG4gICAgICAgICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIlNVQlwiLFxyXG4gICAgICAgICAgICAgIFwiYmVuZWZpdEltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kzL1RCMUN0c3VMVlhYWFhjSlhGWFgzYnBYVFhYWC0xNzAtMTAwLnBuZ1wiLFxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgXCJleHBvc3VyZVBhcmFtXCI6IFwiLy9hYy5tbXN0YXQuY29tLzEuZ2lmP2FwcGx5PXZvdGUmYWJidWNrZXQ9X0FCLU0xMDAxX0I1JmNvbT0wMiZhY209MDM2NTMuMTAwMy4xLjcxMDUzMSZjb2Q9MDM2NTMmY2FjaGU9aldsOEZKc2ImYWxkaWQ9VFBNa0pESXcmbG9ndHlwZT00JmFidGVzdD1fQUItTFIxMDAxLVBSMTAwMSZzY209MTAwMy4xLjAzNjUzLjcxMDUzMSZpcD00Mi4xMjAuNzQuMTA0XCIsXHJcbiAgICAgICAgICAgIFwic2VydmVyVGltZVwiOiAxNDU4Mjk2MTEwMzM0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlc291cmNlXCI6IHtcclxuICAgICAgICAgIFwiaXNIaWRlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgXCJiaWdCYW5uZXJJbWdcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMXRPLmFMVlhYWFhjdlhwWFhYWFhYWFhYWC03NTAtMjYyLmpwZ1wiLFxyXG4gICAgICAgICAgXCJiaWdCYW5uZXJVcmxcIjogXCJodHRwczovL2NoYW9zaGkubS50bWFsbC5jb20vXCIsXHJcbiAgICAgICAgICBcInNtYWxsQmFubmVySXRlbXNcIjogW3tcclxuICAgICAgICAgICAgXCJpbWdcIjogXCJodHRwczovL2ltZy5hbGljZG4uY29tL3Rwcy9UQjFGZl8wTFZYWFhYWE5hWFhYWFhYWFhYWFgtMzc1LTI2Mi5qcGdcIixcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2NoYW9zaGkubS50bWFsbC5jb20vXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1nXCI6IFwiaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS90cHMvVEIxRmZfMExWWFhYWFhOYVhYWFhYWFhYWFhYLTM3NS0yNjIuanBnXCIsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9jaGFvc2hpLm0udG1hbGwuY29tL1wiXHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJjYXRlZ29yeVwiOiB7XHJcbiAgICAgICAgICBcImZsb29yVGl0bGVcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMS5fNjRMVlhYWFhhdFhWWFhYWFhYWFhYWC03NTAtMTAwLmpwZ1wiLFxyXG4gICAgICAgICAgXCJfYmFja3VwXCI6IHtcclxuICAgICAgICAgICAgXCJtYWluXCI6IFtdLFxyXG4gICAgICAgICAgICBcInN1YlwiOiBbe1xyXG4gICAgICAgICAgICAgIFwiZmluYWxTY29yZVwiOiAwLFxyXG4gICAgICAgICAgICAgIFwiaW5kdXN0cnlVcmxcIjogXCIvL3BhZ2VzLnRtYWxsLmNvbS93b3cvYWN0LzE1NjE3L2RxYz9hYmJ1Y2tldD1fQUItTTEwMTFfQjUmYWNtPTAzNjU0LjEwMDMuMS43MzUzNjImYWxkaWQ9ZTV6UEVJNlImYWJ0ZXN0PV9BQi1MUjEwMTEtUFIxMDExJnNjbT0xMDAzLjEuMDM2NTQuT1RIRVJfMTVfNzM1MzYyJnBvcz0xXCIsXHJcbiAgICAgICAgICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiT1RIRVJcIixcclxuICAgICAgICAgICAgICBcImNvbG91clwiOiBcImI0ZWJmZlwiLFxyXG4gICAgICAgICAgICAgIFwiaW5kdXN0cnlUaXRsZVwiOiBcIuaVsOeggVwiLFxyXG4gICAgICAgICAgICAgIFwiX3Bvc19cIjogMSxcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5QmVuZWZpdFwiOiBcIueWr+aKouWkp+eJjOaWsOWTgVwiLFxyXG4gICAgICAgICAgICAgIFwiaW5kdXN0cnlJZFwiOiBcIjE1XCIsXHJcbiAgICAgICAgICAgICAgXCJpbmR1c3RyeUltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2k0L1RCMV94Ry5MVlhYWFhiV2FYWFhyZHZHSUZYWC0yNDgtMTU1LmpwZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBcImZpbmFsU2NvcmVcIjogMCxcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5VXJsXCI6IFwiLy9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy94aWh1P2FiYnVja2V0PV9BQi1NMTAxMV9CNSZhY209MDM2NTQuMTAwMy4xLjczNTM2MiZhbGRpZD1lNXpQRUk2UiZhYnRlc3Q9X0FCLUxSMTAxMS1QUjEwMTEmc2NtPTEwMDMuMS4wMzY1NC5PVEhFUl8xM183MzUzNjImcG9zPTJcIixcclxuICAgICAgICAgICAgICBcImVudGl0eVR5cGVcIjogXCJPVEhFUlwiLFxyXG4gICAgICAgICAgICAgIFwiY29sb3VyXCI6IFwiY2RmZmE0XCIsXHJcbiAgICAgICAgICAgICAgXCJpbmR1c3RyeVRpdGxlXCI6IFwi5rSX5oqkXCIsXHJcbiAgICAgICAgICAgICAgXCJfcG9zX1wiOiAyLFxyXG4gICAgICAgICAgICAgIFwiaW5kdXN0cnlCZW5lZml0XCI6IFwi54iG5qy+MeWIhumSseaKolwiLFxyXG4gICAgICAgICAgICAgIFwiaW5kdXN0cnlJZFwiOiBcIjEzXCIsXHJcbiAgICAgICAgICAgICAgXCJpbmR1c3RyeUltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kzL1RCMUZ0X0NMVlhYWFhYMlhYWFhyZHZHSUZYWC0yNDgtMTU1LmpwZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBcImZpbmFsU2NvcmVcIjogMCxcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5VXJsXCI6IFwiLy9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy9tb2JpbGVwaG9uZT9hYmJ1Y2tldD1fQUItTTEwMTFfQjUmYWNtPTAzNjU0LjEwMDMuMS43MzUzNjImYWxkaWQ9ZTV6UEVJNlImYWJ0ZXN0PV9BQi1MUjEwMTEtUFIxMDExJnNjbT0xMDAzLjEuMDM2NTQuT1RIRVJfMTRfNzM1MzYyJnBvcz0zXCIsXHJcbiAgICAgICAgICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiT1RIRVJcIixcclxuICAgICAgICAgICAgICBcImNvbG91clwiOiBcImM1ZmZkZlwiLFxyXG4gICAgICAgICAgICAgIFwiaW5kdXN0cnlUaXRsZVwiOiBcIuaJi+aculwiLFxyXG4gICAgICAgICAgICAgIFwiX3Bvc19cIjogMyxcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5QmVuZWZpdFwiOiBcIjHlhYPmiqLkvJjmg6DliLhcIixcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5SWRcIjogXCIxNFwiLFxyXG4gICAgICAgICAgICAgIFwiaW5kdXN0cnlJbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMy9UQjFtSmp1TFZYWFhYYy5YWFhYcmR2R0lGWFgtMjQ4LTE1NS5qcGdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgXCJmaW5hbFNjb3JlXCI6IDAsXHJcbiAgICAgICAgICAgICAgXCJpbmR1c3RyeVVybFwiOiBcIi8vcGFnZXMudG1hbGwuY29tL3dvdy9hY3QvMTU2MTcveGlhbmdiYW9odWFueGluP2FiYnVja2V0PV9BQi1NMTAxMV9CNSZhY209MDM2NTQuMTAwMy4xLjczNTM2MiZhbGRpZD1lNXpQRUk2UiZhYnRlc3Q9X0FCLUxSMTAxMS1QUjEwMTEmc2NtPTEwMDMuMS4wMzY1NC5PVEhFUl8xMV83MzUzNjImcG9zPTRcIixcclxuICAgICAgICAgICAgICBcImVudGl0eVR5cGVcIjogXCJPVEhFUlwiLFxyXG4gICAgICAgICAgICAgIFwiY29sb3VyXCI6IFwiZmZjY2RjXCIsXHJcbiAgICAgICAgICAgICAgXCJpbmR1c3RyeVRpdGxlXCI6IFwi566x5YyFXCIsXHJcbiAgICAgICAgICAgICAgXCJfcG9zX1wiOiA0LFxyXG4gICAgICAgICAgICAgIFwiaW5kdXN0cnlCZW5lZml0XCI6IFwi5p6B6Ie054SV5paw5bCW6LSnXCIsXHJcbiAgICAgICAgICAgICAgXCJpbmR1c3RyeUlkXCI6IFwiMTFcIixcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5SW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTIvVEIxXzVQOUtWWFhYWGF5YVhYWHJkdkdJRlhYLTI0OC0xNTUuanBnXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIFwiZmluYWxTY29yZVwiOiAwLFxyXG4gICAgICAgICAgICAgIFwiaW5kdXN0cnlVcmxcIjogXCIvL3BhZ2VzLnRtYWxsLmNvbS93b3cvYWN0LzE1NjE3L25ld2Zvb2Q/YWJidWNrZXQ9X0FCLU0xMDExX0I1JmFjbT0wMzY1NC4xMDAzLjEuNzM1MzYyJmFsZGlkPWU1elBFSTZSJmFidGVzdD1fQUItTFIxMDExLVBSMTAxMSZzY209MTAwMy4xLjAzNjU0Lk9USEVSXzEyXzczNTM2MiZwb3M9NVwiLFxyXG4gICAgICAgICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIk9USEVSXCIsXHJcbiAgICAgICAgICAgICAgXCJjb2xvdXJcIjogXCJmZmY1YTNcIixcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5VGl0bGVcIjogXCLpo5/lk4FcIixcclxuICAgICAgICAgICAgICBcIl9wb3NfXCI6IDUsXHJcbiAgICAgICAgICAgICAgXCJpbmR1c3RyeUJlbmVmaXRcIjogXCLmlrDlk4Ex5YiG6K+V5ZCDXCIsXHJcbiAgICAgICAgICAgICAgXCJpbmR1c3RyeUlkXCI6IFwiMTJcIixcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5SW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTIvVEIxSGZMekxWWFhYWGJfWFhYWHJkdkdJRlhYLTI0OC0xNTUuanBnXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIFwiZmluYWxTY29yZVwiOiAwLFxyXG4gICAgICAgICAgICAgIFwiaW5kdXN0cnlVcmxcIjogXCIvL3BhZ2VzLnRtYWxsLmNvbS93b3cvYWN0LzE1NjE3L3picHM/YWJidWNrZXQ9X0FCLU0xMDExX0I1JmFjbT0wMzY1NC4xMDAzLjEuNzM1MzYyJmFsZGlkPWU1elBFSTZSJmFidGVzdD1fQUItTFIxMDExLVBSMTAxMSZzY209MTAwMy4xLjAzNjU0Lk9USEVSXzNfNzM1MzYyJnBvcz02XCIsXHJcbiAgICAgICAgICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiT1RIRVJcIixcclxuICAgICAgICAgICAgICBcImNvbG91clwiOiBcImJiZmZlNVwiLFxyXG4gICAgICAgICAgICAgIFwiaW5kdXN0cnlUaXRsZVwiOiBcIuePoOWunemFjemlsFwiLFxyXG4gICAgICAgICAgICAgIFwiX3Bvc19cIjogNixcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5QmVuZWZpdFwiOiBcIuWkp+eJjDHmipjnp5LmnYBcIixcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5SWRcIjogXCIzXCIsXHJcbiAgICAgICAgICAgICAgXCJpbmR1c3RyeUltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMXM1eS5MVlhYWFhiLmFYWFhyZHZHSUZYWC0yNDgtMTU1LmpwZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBcImZpbmFsU2NvcmVcIjogMCxcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5VXJsXCI6IFwiLy9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy9nZXRiZWF1dHk/YWJidWNrZXQ9X0FCLU0xMDExX0I1JmFjbT0wMzY1NC4xMDAzLjEuNzM1MzYyJmFsZGlkPWU1elBFSTZSJmFidGVzdD1fQUItTFIxMDExLVBSMTAxMSZzY209MTAwMy4xLjAzNjU0Lk9USEVSXzJfNzM1MzYyJnBvcz03XCIsXHJcbiAgICAgICAgICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiT1RIRVJcIixcclxuICAgICAgICAgICAgICBcImNvbG91clwiOiBcImZmZDFiNlwiLFxyXG4gICAgICAgICAgICAgIFwiaW5kdXN0cnlUaXRsZVwiOiBcIue+juWmhlwiLFxyXG4gICAgICAgICAgICAgIFwiX3Bvc19cIjogNyxcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5QmVuZWZpdFwiOiBcIuWNs+WIu+mihOe6pue+juS4vVwiLFxyXG4gICAgICAgICAgICAgIFwiaW5kdXN0cnlJZFwiOiBcIjJcIixcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5SW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxbE52b0xWWFhYWGFvWEZYWHJkdkdJRlhYLTI0OC0xNTUuanBnXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIFwiZmluYWxTY29yZVwiOiAwLFxyXG4gICAgICAgICAgICAgIFwiaW5kdXN0cnlVcmxcIjogXCIvL3BhZ2VzLnRtYWxsLmNvbS93b3cvYWN0LzE1NjE3L2d1b2ppeGZzP2FiYnVja2V0PV9BQi1NMTAxMV9CNSZhY209MDM2NTQuMTAwMy4xLjczNTM2MiZhbGRpZD1lNXpQRUk2UiZhYnRlc3Q9X0FCLUxSMTAxMS1QUjEwMTEmc2NtPTEwMDMuMS4wMzY1NC5PVEhFUl8xXzczNTM2MiZwb3M9OFwiLFxyXG4gICAgICAgICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIk9USEVSXCIsXHJcbiAgICAgICAgICAgICAgXCJjb2xvdXJcIjogXCJiOWVhZjJcIixcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5VGl0bGVcIjogXCLlpKnnjKvlm73pmYVcIixcclxuICAgICAgICAgICAgICBcIl9wb3NfXCI6IDgsXHJcbiAgICAgICAgICAgICAgXCJpbmR1c3RyeUJlbmVmaXRcIjogXCLllKTphpLlhajnkIPmva7mtYFcIixcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5SWRcIjogXCIxXCIsXHJcbiAgICAgICAgICAgICAgXCJpbmR1c3RyeUltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2k0L1RCMUpIYmtMVlhYWFhibFhGWFhyZHZHSUZYWC0yNDgtMTU1LmpwZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBcImZpbmFsU2NvcmVcIjogMCxcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5VXJsXCI6IFwiLy9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy9uZXdudj9hYmJ1Y2tldD1fQUItTTEwMTFfQjUmYWNtPTAzNjU0LjEwMDMuMS43MzUzNjImYWxkaWQ9ZTV6UEVJNlImYWJ0ZXN0PV9BQi1MUjEwMTEtUFIxMDExJnNjbT0xMDAzLjEuMDM2NTQuT1RIRVJfMTBfNzM1MzYyJnBvcz05XCIsXHJcbiAgICAgICAgICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiT1RIRVJcIixcclxuICAgICAgICAgICAgICBcImNvbG91clwiOiBcImZmZjhlZVwiLFxyXG4gICAgICAgICAgICAgIFwiaW5kdXN0cnlUaXRsZVwiOiBcIumei+WxpVwiLFxyXG4gICAgICAgICAgICAgIFwiX3Bvc19cIjogOSxcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5QmVuZWZpdFwiOiBcIua9ruWTgeeyvumAiemei+WxpVwiLFxyXG4gICAgICAgICAgICAgIFwiaW5kdXN0cnlJZFwiOiBcIjEwXCIsXHJcbiAgICAgICAgICAgICAgXCJpbmR1c3RyeUltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kyL1RCMVJvdndMVlhYWFhYblhwWFhyZHZHSUZYWC0yNDgtMTU1LmpwZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBcImZpbmFsU2NvcmVcIjogMCxcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5VXJsXCI6IFwiLy9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy9udnpodWFuZz9hYmJ1Y2tldD1fQUItTTEwMTFfQjUmYWNtPTAzNjU0LjEwMDMuMS43MzUzNjImYWxkaWQ9ZTV6UEVJNlImYWJ0ZXN0PV9BQi1MUjEwMTEtUFIxMDExJnNjbT0xMDAzLjEuMDM2NTQuT1RIRVJfN183MzUzNjImcG9zPTEwXCIsXHJcbiAgICAgICAgICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiT1RIRVJcIixcclxuICAgICAgICAgICAgICBcImNvbG91clwiOiBcImQ1Y2JlOFwiLFxyXG4gICAgICAgICAgICAgIFwiaW5kdXN0cnlUaXRsZVwiOiBcIuWls+ijhVwiLFxyXG4gICAgICAgICAgICAgIFwiX3Bvc19cIjogMTAsXHJcbiAgICAgICAgICAgICAgXCJpbmR1c3RyeUJlbmVmaXRcIjogXCLmipjlkI7nlKjliLjmiqLmlrBcIixcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5SWRcIjogXCI3XCIsXHJcbiAgICAgICAgICAgICAgXCJpbmR1c3RyeUltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMUJPbmNMVlhYWFhYU2FYWFhyZHZHSUZYWC0yNDgtMTU1LmpwZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBcImZpbmFsU2NvcmVcIjogMCxcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5VXJsXCI6IFwiLy9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy9tYW4/YWJidWNrZXQ9X0FCLU0xMDExX0I1JmFjbT0wMzY1NC4xMDAzLjEuNzM1MzYyJmFsZGlkPWU1elBFSTZSJmFidGVzdD1fQUItTFIxMDExLVBSMTAxMSZzY209MTAwMy4xLjAzNjU0Lk9USEVSXzZfNzM1MzYyJnBvcz0xMVwiLFxyXG4gICAgICAgICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIk9USEVSXCIsXHJcbiAgICAgICAgICAgICAgXCJjb2xvdXJcIjogXCJjYmU5YTlcIixcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5VGl0bGVcIjogXCLnlLfoo4VcIixcclxuICAgICAgICAgICAgICBcIl9wb3NfXCI6IDExLFxyXG4gICAgICAgICAgICAgIFwiaW5kdXN0cnlCZW5lZml0XCI6IFwi5paw5ZOB5L2O6IezOS455YWDXCIsXHJcbiAgICAgICAgICAgICAgXCJpbmR1c3RyeUlkXCI6IFwiNlwiLFxyXG4gICAgICAgICAgICAgIFwiaW5kdXN0cnlJbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pNC9UQjF0OVRtTFZYWFhYYmtYRlhYcmR2R0lGWFgtMjQ4LTE1NS5qcGdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgXCJmaW5hbFNjb3JlXCI6IDAsXHJcbiAgICAgICAgICAgICAgXCJpbmR1c3RyeVVybFwiOiBcIi8vcGFnZXMudG1hbGwuY29tL3dvdy9hY3QvMTU2MTcvbXl4ZnM/YWJidWNrZXQ9X0FCLU0xMDExX0I1JmFjbT0wMzY1NC4xMDAzLjEuNzM1MzYyJmFsZGlkPWU1elBFSTZSJmFidGVzdD1fQUItTFIxMDExLVBSMTAxMSZzY209MTAwMy4xLjAzNjU0Lk9USEVSXzVfNzM1MzYyJnBvcz0xMlwiLFxyXG4gICAgICAgICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIk9USEVSXCIsXHJcbiAgICAgICAgICAgICAgXCJjb2xvdXJcIjogXCJmOGUxZmZcIixcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5VGl0bGVcIjogXCLmr43lqbTnq6Xoo4VcIixcclxuICAgICAgICAgICAgICBcIl9wb3NfXCI6IDEyLFxyXG4gICAgICAgICAgICAgIFwiaW5kdXN0cnlCZW5lZml0XCI6IFwi6Leo5bqX5ruhMjk55YePNDBcIixcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5SWRcIjogXCI1XCIsXHJcbiAgICAgICAgICAgICAgXCJpbmR1c3RyeUltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kzL1RCMWtwemlMVlhYWFhhYlhWWFhyZHZHSUZYWC0yNDgtMTU1LmpwZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBcImZpbmFsU2NvcmVcIjogMCxcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5VXJsXCI6IFwiLy9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy9qZmpzP2FiYnVja2V0PV9BQi1NMTAxMV9CNSZhY209MDM2NTQuMTAwMy4xLjczNTM2MiZhbGRpZD1lNXpQRUk2UiZhYnRlc3Q9X0FCLUxSMTAxMS1QUjEwMTEmc2NtPTEwMDMuMS4wMzY1NC5PVEhFUl80XzczNTM2MiZwb3M9MTNcIixcclxuICAgICAgICAgICAgICBcImVudGl0eVR5cGVcIjogXCJPVEhFUlwiLFxyXG4gICAgICAgICAgICAgIFwiY29sb3VyXCI6IFwiYmJmZmU1XCIsXHJcbiAgICAgICAgICAgICAgXCJpbmR1c3RyeVRpdGxlXCI6IFwi5a6257q65a626aWwXCIsXHJcbiAgICAgICAgICAgICAgXCJfcG9zX1wiOiAxMyxcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5QmVuZWZpdFwiOiBcIuWFqOWcuuS9juiHszkuOeWFg1wiLFxyXG4gICAgICAgICAgICAgIFwiaW5kdXN0cnlJZFwiOiBcIjRcIixcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5SW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxbFVqekxWWFhYWGJBWFhYWHJkdkdJRlhYLTI0OC0xNTUuanBnXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIFwiZmluYWxTY29yZVwiOiAwLFxyXG4gICAgICAgICAgICAgIFwiaW5kdXN0cnlVcmxcIjogXCIvL3BhZ2VzLnRtYWxsLmNvbS93b3cvYWN0LzE1NjE3L25laXlpMzI4P2FiYnVja2V0PV9BQi1NMTAxMV9CNSZhY209MDM2NTQuMTAwMy4xLjczNTM2MiZhbGRpZD1lNXpQRUk2UiZhYnRlc3Q9X0FCLUxSMTAxMS1QUjEwMTEmc2NtPTEwMDMuMS4wMzY1NC5PVEhFUl85XzczNTM2MiZwb3M9MTRcIixcclxuICAgICAgICAgICAgICBcImVudGl0eVR5cGVcIjogXCJPVEhFUlwiLFxyXG4gICAgICAgICAgICAgIFwiY29sb3VyXCI6IFwiZmZjN2M5XCIsXHJcbiAgICAgICAgICAgICAgXCJpbmR1c3RyeVRpdGxlXCI6IFwi5YaF6KGjXCIsXHJcbiAgICAgICAgICAgICAgXCJfcG9zX1wiOiAxNCxcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5QmVuZWZpdFwiOiBcIuaWsOWTgTPmipjotbdcIixcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5SWRcIjogXCI5XCIsXHJcbiAgICAgICAgICAgICAgXCJpbmR1c3RyeUltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMVM3UHVMVlhYWFhjVlhYWFhyZHZHSUZYWC0yNDgtMTU1LmpwZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBcImZpbmFsU2NvcmVcIjogMCxcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5VXJsXCI6IFwiLy9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy95ZGh3P2FiYnVja2V0PV9BQi1NMTAxMV9CNSZhY209MDM2NTQuMTAwMy4xLjczNTM2MiZhbGRpZD1lNXpQRUk2UiZhYnRlc3Q9X0FCLUxSMTAxMS1QUjEwMTEmc2NtPTEwMDMuMS4wMzY1NC5PVEhFUl84XzczNTM2MiZwb3M9MTVcIixcclxuICAgICAgICAgICAgICBcImVudGl0eVR5cGVcIjogXCJPVEhFUlwiLFxyXG4gICAgICAgICAgICAgIFwiY29sb3VyXCI6IFwiY2JkYmZlXCIsXHJcbiAgICAgICAgICAgICAgXCJpbmR1c3RyeVRpdGxlXCI6IFwi6L+Q5Yqo5oi35aSWXCIsXHJcbiAgICAgICAgICAgICAgXCJfcG9zX1wiOiAxNSxcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5QmVuZWZpdFwiOiBcIuWkp+eJjOaWsOWTgeaKouWIuFwiLFxyXG4gICAgICAgICAgICAgIFwiaW5kdXN0cnlJZFwiOiBcIjhcIixcclxuICAgICAgICAgICAgICBcImluZHVzdHJ5SW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTIvVEIxbVFEQUxWWFhYWGJkWFhYWHJkdkdJRlhYLTI0OC0xNTUuanBnXCJcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFwiaXNGb3JtYWxcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiZXhwb3N1cmVQYXJhbVwiOiBcIi8vYWMubW1zdGF0LmNvbS8xLmdpZj9hcHBseT12b3RlJmFiYnVja2V0PV9BQi1NMTAxMV9CNSZjb209MDImYWNtPTAzNjU0LjEwMDMuMS43MzUzNjImY29kPTAzNjU0JmNhY2hlPUNHNVpCMDJCJmFsZGlkPWU1elBFSTZSJmxvZ3R5cGU9NCZhYnRlc3Q9X0FCLUxSMTAxMS1QUjEwMTEmc2NtPTEwMDMuMS4wMzY1NC43MzUzNjImaXA9NDIuMTIwLjc0LjE1OVwiLFxyXG4gICAgICAgICAgICBcImlkXCI6IFwiMDM2NTRcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJicmFuZFwiOiB7XHJcbiAgICAgICAgICBcImZsb29yVGl0bGVcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMS5fNjRMVlhYWFhhdFhWWFhYWFhYWFhYWC03NTAtMTAwLmpwZ1wiLFxyXG4gICAgICAgICAgXCJiYW5uZXJJdGVtc1wiOiBbe1xyXG4gICAgICAgICAgICBcImxlZnRJbWdcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMUYyZkpMVlhYWFhjY1hGWFhYWFhYWFhYWC03NTAtMjMwLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImxlZnRVcmxcIjogXCJodHRwczovL2NoYW9zaGkubS50bWFsbC5jb20vXCIsXHJcbiAgICAgICAgICAgIFwicmlnaHRJbWdcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMUYyZkpMVlhYWFhjY1hGWFhYWFhYWFhYWC03NTAtMjMwLmpwZ1wiLFxyXG4gICAgICAgICAgICBcInJpZ2h0VXJsXCI6IFwiaHR0cHM6Ly9jaGFvc2hpLm0udG1hbGwuY29tL1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImxlZnRJbWdcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMUYyZkpMVlhYWFhjY1hGWFhYWFhYWFhYWC03NTAtMjMwLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImxlZnRVcmxcIjogXCJodHRwczovL2NoYW9zaGkubS50bWFsbC5jb20vXCIsXHJcbiAgICAgICAgICAgIFwicmlnaHRJbWdcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMUYyZkpMVlhYWFhjY1hGWFhYWFhYWFhYWC03NTAtMjMwLmpwZ1wiLFxyXG4gICAgICAgICAgICBcInJpZ2h0VXJsXCI6IFwiaHR0cHM6Ly9jaGFvc2hpLm0udG1hbGwuY29tL1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImxlZnRJbWdcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMUYyZkpMVlhYWFhjY1hGWFhYWFhYWFhYWC03NTAtMjMwLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImxlZnRVcmxcIjogXCJodHRwczovL2NoYW9zaGkubS50bWFsbC5jb20vXCIsXHJcbiAgICAgICAgICAgIFwicmlnaHRJbWdcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMUYyZkpMVlhYWFhjY1hGWFhYWFhYWFhYWC03NTAtMjMwLmpwZ1wiLFxyXG4gICAgICAgICAgICBcInJpZ2h0VXJsXCI6IFwiaHR0cHM6Ly9jaGFvc2hpLm0udG1hbGwuY29tL1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImxlZnRJbWdcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMUYyZkpMVlhYWFhjY1hGWFhYWFhYWFhYWC03NTAtMjMwLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImxlZnRVcmxcIjogXCJodHRwczovL2NoYW9zaGkubS50bWFsbC5jb20vXCIsXHJcbiAgICAgICAgICAgIFwicmlnaHRJbWdcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMUYyZkpMVlhYWFhjY1hGWFhYWFhYWFhYWC03NTAtMjMwLmpwZ1wiLFxyXG4gICAgICAgICAgICBcInJpZ2h0VXJsXCI6IFwiaHR0cHM6Ly9jaGFvc2hpLm0udG1hbGwuY29tL1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImxlZnRJbWdcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMUYyZkpMVlhYWFhjY1hGWFhYWFhYWFhYWC03NTAtMjMwLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImxlZnRVcmxcIjogXCJodHRwczovL2NoYW9zaGkubS50bWFsbC5jb20vXCIsXHJcbiAgICAgICAgICAgIFwicmlnaHRJbWdcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMUYyZkpMVlhYWFhjY1hGWFhYWFhYWFhYWC03NTAtMjMwLmpwZ1wiLFxyXG4gICAgICAgICAgICBcInJpZ2h0VXJsXCI6IFwiaHR0cHM6Ly9jaGFvc2hpLm0udG1hbGwuY29tL1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImxlZnRJbWdcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMUYyZkpMVlhYWFhjY1hGWFhYWFhYWFhYWC03NTAtMjMwLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImxlZnRVcmxcIjogXCJodHRwczovL2NoYW9zaGkubS50bWFsbC5jb20vXCIsXHJcbiAgICAgICAgICAgIFwicmlnaHRJbWdcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMUYyZkpMVlhYWFhjY1hGWFhYWFhYWFhYWC03NTAtMjMwLmpwZ1wiLFxyXG4gICAgICAgICAgICBcInJpZ2h0VXJsXCI6IFwiaHR0cHM6Ly9jaGFvc2hpLm0udG1hbGwuY29tL1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImxlZnRJbWdcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMUYyZkpMVlhYWFhjY1hGWFhYWFhYWFhYWC03NTAtMjMwLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImxlZnRVcmxcIjogXCJodHRwczovL2NoYW9zaGkubS50bWFsbC5jb20vXCIsXHJcbiAgICAgICAgICAgIFwicmlnaHRJbWdcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMUYyZkpMVlhYWFhjY1hGWFhYWFhYWFhYWC03NTAtMjMwLmpwZ1wiLFxyXG4gICAgICAgICAgICBcInJpZ2h0VXJsXCI6IFwiaHR0cHM6Ly9jaGFvc2hpLm0udG1hbGwuY29tL1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImxlZnRJbWdcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMUYyZkpMVlhYWFhjY1hGWFhYWFhYWFhYWC03NTAtMjMwLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImxlZnRVcmxcIjogXCJodHRwczovL2NoYW9zaGkubS50bWFsbC5jb20vXCIsXHJcbiAgICAgICAgICAgIFwicmlnaHRJbWdcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMUYyZkpMVlhYWFhjY1hGWFhYWFhYWFhYWC03NTAtMjMwLmpwZ1wiLFxyXG4gICAgICAgICAgICBcInJpZ2h0VXJsXCI6IFwiaHR0cHM6Ly9jaGFvc2hpLm0udG1hbGwuY29tL1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImxlZnRJbWdcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMUYyZkpMVlhYWFhjY1hGWFhYWFhYWFhYWC03NTAtMjMwLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImxlZnRVcmxcIjogXCJodHRwczovL2NoYW9zaGkubS50bWFsbC5jb20vXCIsXHJcbiAgICAgICAgICAgIFwicmlnaHRJbWdcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMUYyZkpMVlhYWFhjY1hGWFhYWFhYWFhYWC03NTAtMjMwLmpwZ1wiLFxyXG4gICAgICAgICAgICBcInJpZ2h0VXJsXCI6IFwiaHR0cHM6Ly9jaGFvc2hpLm0udG1hbGwuY29tL1wiXHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJtYXRjaFwiOiB7XHJcbiAgICAgICAgICBcImZsb29yVGl0bGVcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMS5fNjRMVlhYWFhhdFhWWFhYWFhYWFhYWC03NTAtMTAwLmpwZ1wiLFxyXG4gICAgICAgICAgXCJpc1Nob3dUbVNwZWNCYW5uZXJcIjogdHJ1ZSxcclxuICAgICAgICAgIFwidG1TcGVjQmFubmVyXCI6IHtcclxuICAgICAgICAgICAgXCJpbWdcIjogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMUYyZkpMVlhYWFhjY1hGWFhYWFhYWFhYWC03NTAtMjMwLmpwZ1wiLFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vY2hhb3NoaS5tLnRtYWxsLmNvbS9cIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwiYmFubmVySXRlbXNcIjogW3tcclxuICAgICAgICAgICAgXCJsZWZ0SW1nXCI6IFwiaHR0cHM6Ly9ndy5hbGljZG4uY29tL3Rwcy9UQjFPVW5JTFZYWFhYY29YRlhYWFhYWFhYWFgtMzc0LTQxNi5qcGdcIixcclxuICAgICAgICAgICAgXCJsZWZ0VXJsXCI6IFwiaHR0cHM6Ly9jaGFvc2hpLm0udG1hbGwuY29tL1wiLFxyXG4gICAgICAgICAgICBcInJpZ2h0SW1nXCI6IFwiaHR0cHM6Ly9ndy5hbGljZG4uY29tL3Rwcy9UQjFPVW5JTFZYWFhYY29YRlhYWFhYWFhYWFgtMzc0LTQxNi5qcGdcIixcclxuICAgICAgICAgICAgXCJyaWdodFVybFwiOiBcImh0dHBzOi8vY2hhb3NoaS5tLnRtYWxsLmNvbS9cIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJsZWZ0SW1nXCI6IFwiaHR0cHM6Ly9ndy5hbGljZG4uY29tL3Rwcy9UQjFPVW5JTFZYWFhYY29YRlhYWFhYWFhYWFgtMzc0LTQxNi5qcGdcIixcclxuICAgICAgICAgICAgXCJsZWZ0VXJsXCI6IFwiaHR0cHM6Ly9jaGFvc2hpLm0udG1hbGwuY29tL1wiLFxyXG4gICAgICAgICAgICBcInJpZ2h0SW1nXCI6IFwiaHR0cHM6Ly9ndy5hbGljZG4uY29tL3Rwcy9UQjFPVW5JTFZYWFhYY29YRlhYWFhYWFhYWFgtMzc0LTQxNi5qcGdcIixcclxuICAgICAgICAgICAgXCJyaWdodFVybFwiOiBcImh0dHBzOi8vY2hhb3NoaS5tLnRtYWxsLmNvbS9cIlxyXG4gICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zaW1Mb2FkaW5nRGF0YSh0aGlzLmNudCsrKVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgaGFuZGxlUmVmcmVzaDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgdm0gPSB0aGlzXHJcbiAgICAgICAgdm0uZGlzcGxheVJlZnJlc2ggPSAnc2hvdydcclxuICAgICAgICBpZiAodGltZXIpIHtcclxuICAgICAgICAgIHRpbWVyLnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2bS5kaXNwbGF5UmVmcmVzaCA9ICdoaWRlJ1xyXG4gICAgICAgICAgfSwgMjAwMClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbW9kYWwuYWxlcnQoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiAncmVmcmVzaGluZy4nXHJcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZtLmRpc3BsYXlSZWZyZXNoID0gJ2hpZGUnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgaGFuZGxlTG9hZGluZzogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgdm0gPSB0aGlzXHJcbiAgICAgICAgdm0uZGlzcGxheUxvYWRpbmcgPSAnc2hvdydcclxuICAgICAgICBtb2RhbC50b2FzdCh7XHJcbiAgICAgICAgICBtZXNzYWdlOiAnbG9hZGluZy4nXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAodGltZXIpIHtcclxuICAgICAgICAgIHRpbWVyLnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2bS5zaW1Mb2FkaW5nRGF0YSh2bS5jbnQrKylcclxuICAgICAgICAgICAgdm0uZGlzcGxheUxvYWRpbmcgPSAnaGlkZSdcclxuICAgICAgICAgIH0sIDIwMDApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZtLnNpbUxvYWRpbmdEYXRhKHZtLmNudCsrKVxyXG4gICAgICAgICAgdm0uZGlzcGxheUxvYWRpbmcgPSAnaGlkZSdcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHNpbUxvYWRpbmdEYXRhOiBmdW5jdGlvbiAobnVtKSB7XHJcbiAgICAgICAgaWYgKG51bSA+PSAzKSB7XHJcbiAgICAgICAgICBtb2RhbC50b2FzdCh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICflt7LliLDlupXpg6gnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXNbJ3Nob3cnICsgbnVtXSA9IHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbmV3LWZhc2hpb24udnVlPzRjOTRlOGRhIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi05NzZiMGVlOCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2hlYWRsaW5lcy52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaGVhZGxpbmVzLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi05NzZiMGVlOCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaGVhZGxpbmVzLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTpcXFxcd2Vla1N0dWR5XFxcXHdlZXgyXFxcXHdlZXgzXFxcXHNyY1xcXFxzaG93Y2FzZVxcXFxpbmNsdWRlXFxcXGhlYWRsaW5lcy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBoZWFkbGluZXMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTk3NmIwZWU4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtOTc2YjBlZThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Nob3djYXNlL2luY2x1ZGUvaGVhZGxpbmVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTY0XG4vLyBtb2R1bGUgY2h1bmtzID0gNTUiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPGltYWdlIGNsYXNzPVwiYmFubmVyXCIgOnNyYz1cImRzLnRvcEJhbm5lclwiPjwvaW1hZ2U+XHJcbiAgICA8ZGl2IGNsYXNzPVwicnVsZS1jb250YWluZXJcIj5cclxuICAgICAgPGxpbmsgc3R5bGU9XCJmb250LXNpemU6MjJweDtjb2xvcjojZmZmZmZmO3RleHQtYWxpZ246Y2VudGVyO1wiXHJcbiAgICAgICAgdGV4dD1cIuW4ruWKqVwiIDpocmVmPVwiZHMucnVsZUxpbmtcIj48L2xpbms+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbm5vdW5jZVwiPlxyXG4gICAgICA8aW1hZ2UgY2xhc3M9XCJhbm5vdW5jZS1oZFwiIDpzcmM9XCJkcy5hbm5vdW5jZUhkQmFubmVyXCI+PC9pbWFnZT5cclxuICAgICAgPGJhbm5lcnMgc3R5bGU9XCJtYXJnaW4tbGVmdDo2O21hcmdpbi1yaWdodDo2O1wiXHJcbiAgICAgICAgOmRzPVwiZHMuYmFubmVySXRlbXNcIiBkaXJlY3Rpb249XCJyb3dcIiA6d2lkdGg9XCJOVU1CRVJfMjMzXCJcclxuICAgICAgICA6aGVpZ2h0PVwiTlVNQkVSXzE3MlwiIDpzcGFjZT1cIk5VTUJFUl8zXCI+XHJcbiAgICAgIDwvYmFubmVycz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlPlxyXG4gIC5iYW5uZXIge1xyXG4gICAgd2lkdGg6IDc1MDtcclxuICAgIGhlaWdodDogNzgyO1xyXG4gIH1cclxuXHJcbiAgLnNoYXJlLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTAwO1xyXG4gICAgdG9wOiAxNTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGZvbnQtc2l6ZTogMjA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNztcclxuICAgIHdpZHRoOiAxMTA7XHJcbiAgICBoZWlnaHQ6IDM1O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnJ1bGUtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMjtcclxuICAgIHRvcDogMTU7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBmb250LXNpemU6IDIwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTc7XHJcbiAgICB3aWR0aDogNzA7XHJcbiAgICBoZWlnaHQ6IDM1O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYW5ub3VuY2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjNmNDtcclxuICAgIHdpZHRoOiA3MTY7XHJcbiAgICBoZWlnaHQ6IDI4NjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTc7XHJcbiAgICBsZWZ0OiAxNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDU7XHJcbiAgfVxyXG5cclxuICAuYW5ub3VuY2UtaGQge1xyXG4gICAgd2lkdGg6IDcwMDtcclxuICAgIGhlaWdodDogOTA7XHJcbiAgICBtYXJnaW4tdG9wOiA4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogODtcclxuICAgIG1hcmdpbi1sZWZ0OiA1O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1O1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIGxpbms6IHJlcXVpcmUoJy4vbGluay52dWUnKSxcclxuICAgICAgYmFubmVyczogcmVxdWlyZSgnLi9iYW5uZXJzLnZ1ZScpXHJcbiAgICB9LFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZHM6IHtcclxuICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4ge31cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgTlVNQkVSXzIzMzogMjMzLFxyXG4gICAgICAgIE5VTUJFUl8xNzI6IDE3MixcclxuICAgICAgICBOVU1CRVJfMzogM1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBoZWFkbGluZXMudnVlP2MyNDQ0Yzk2IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdpbWFnZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJiYW5uZXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogX3ZtLmRzLnRvcEJhbm5lclxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicnVsZS1jb250YWluZXJcIlxuICB9LCBbX2MoJ2xpbmsnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiZm9udC1zaXplXCI6IFwiMjJweFwiLFxuICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICAgIFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0ZXh0XCI6IFwi5biu5YqpXCIsXG4gICAgICBcImhyZWZcIjogX3ZtLmRzLnJ1bGVMaW5rXG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFubm91bmNlXCJcbiAgfSwgW19jKCdpbWFnZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbm5vdW5jZS1oZFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uZHMuYW5ub3VuY2VIZEJhbm5lclxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdiYW5uZXJzJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpbi1sZWZ0XCI6IFwiNlwiLFxuICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCI2XCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRzXCI6IF92bS5kcy5iYW5uZXJJdGVtcyxcbiAgICAgIFwiZGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgICBcIndpZHRoXCI6IF92bS5OVU1CRVJfMjMzLFxuICAgICAgXCJoZWlnaHRcIjogX3ZtLk5VTUJFUl8xNzIsXG4gICAgICBcInNwYWNlXCI6IF92bS5OVU1CRVJfM1xuICAgIH1cbiAgfSldLCAxKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTk3NmIwZWU4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi05NzZiMGVlOCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3Nob3djYXNlL2luY2x1ZGUvaGVhZGxpbmVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTY2XG4vLyBtb2R1bGUgY2h1bmtzID0gNTUiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTQ1N2RhMWExIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2F0ZWdvcnkudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NhdGVnb3J5LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi00NTdkYTFhMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY2F0ZWdvcnkudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFx3ZWVrU3R1ZHlcXFxcd2VleDJcXFxcd2VleDNcXFxcc3JjXFxcXHNob3djYXNlXFxcXGluY2x1ZGVcXFxcY2F0ZWdvcnkudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY2F0ZWdvcnkudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ1N2RhMWExXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDU3ZGExYTFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Nob3djYXNlL2luY2x1ZGUvY2F0ZWdvcnkudnVlXG4vLyBtb2R1bGUgaWQgPSAxNjdcbi8vIG1vZHVsZSBjaHVua3MgPSA1NSIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGltYWdlIHYtaWY9XCJkcy5mbG9vclRpdGxlXCIgY2xhc3M9XCJ0aXRsZVwiIDpzcmM9XCJkcy5mbG9vclRpdGxlXCI+PC9pbWFnZT5cclxuICAgIDxkaXYgY2xhc3M9XCJpdGVtLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IHYtZm9yPVwiKGksaXRlbSkgaW4gaXRlbXNcIiA6c3R5bGU9XCJ7IHdpZHRoOiA3NTAsIHBhZGRpbmdCb3R0b206IDE0LCBiYWNrZ3JvdW5kQ29sb3I6IGl0ZW0uY29sb3VyIH1cIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJhbm5lciA6d2lkdGg9XCJOVU1CRVJfNzUwXCIgOmhlaWdodD1cIk5VTUJFUl8yMzdcIlxyXG4gICAgICAgICAgICA6c3JjPVwiaSAlIDIgPT09IDAgPyBpdGVtLmxlZnRCYW5uZXJJbWcgOiBpdGVtLnJpZ2h0QmFubmVySW1nXCJcclxuICAgICAgICAgICAgOmhyZWY9XCJpdGVtLmJhbm5lclVybFwiPjwvYmFubmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaG9wLWxpc3RcIj5cclxuICAgICAgICAgIDxkaXYgdi1mb3I9XCJzaG9wIGluIGl0ZW0uc2hvcExpc3RcIiBjbGFzcz1cInNob3AtaW1nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8YmFubmVyIDp3aWR0aD1cIk5VTUJFUl8xODZcIiA6aGVpZ2h0PVwiTlVNQkVSXzIwOFwiIDpzcmM9XCJzaG9wLnBpY1VybFwiIDpocmVmPVwic2hvcC5zaG9wVXJsXCI+PC9iYW5uZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJzdWItaXRlbS1jb250YWluZXJcIiA6c3R5bGU9XCJ7IGhlaWdodDogTWF0aC5yb3VuZChzdWJJdGVtcy5sZW5ndGggLyAzKSAqICgyNDEgKyAzKSB9XCI+XHJcbiAgICAgIDxkaXYgdi1mb3I9XCIoaSxpdGVtKSBpbiBzdWJJdGVtc1wiIGNsYXNzPVwic3ViLWl0ZW1cIiA6c3R5bGU9XCJ7dG9wOiBnZXRTdWJJdGVtVG9wKGkpLCBsZWZ0OiBnZXRTdWJJdGVtTGVmdChpKSB9XCI+XHJcbiAgICAgICAgPGltYWdlIGNsYXNzPVwic3ViLWl0ZW0tYmdcIiA6c3JjPVwic3ViSXRlbUJnXCI+PC9pbWFnZT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3ViLWl0ZW0taW1nXCI+XHJcbiAgICAgICAgICA8YmFubmVyIDp3aWR0aD1cIk5VTUJFUl8yNDhcIiA6aGVpZ2h0PVwiTlVNQkVSXzE1NVwiXHJcbiAgICAgICAgICAgIDpzcmM9XCJpdGVtLmluZHVzdHJ5SW1nXCJcclxuICAgICAgICAgICAgOmhyZWY9XCJpdGVtLmluZHVzdHJ5VXJsXCI+PC9iYW5uZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInN1Yi1pdGVtLXRpdGxlXCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImluZHVzdHJ5LXRpdGxlXCIgOmhyZWY9XCJpdGVtLmluZHVzdHJ5VXJsXCI+e3tpdGVtLmluZHVzdHJ5VGl0bGV9fTwvdGV4dD5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaW5kdXN0cnktYmVuZWZpdFwiIDpocmVmPVwiaXRlbS5pbmR1c3RyeVVybFwiPnt7aXRlbS5pbmR1c3RyeUJlbmVmaXR9fTwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuICAudGl0bGUge1xyXG4gICAgd2lkdGg6IDc1MDtcclxuICAgIGhlaWdodDogMTAwO1xyXG4gIH1cclxuXHJcbiAgLnNob3AtbGlzdCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuXHJcbiAgLnNob3AtaW1nLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI7XHJcbiAgfVxyXG5cclxuICAuc3ViLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI0ODtcclxuICAgIGhlaWdodDogMjQxO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5zdWItaXRlbS1iZyB7XHJcbiAgICB3aWR0aDogMjQ4O1xyXG4gICAgaGVpZ2h0OiA4NjtcclxuICB9XHJcblxyXG4gIC5zdWItaXRlbS10aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDI0ODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5pbmR1c3RyeS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI4O1xyXG4gICAgY29sb3I6ICM0ODQ4NDg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDtcclxuICAgIGhlaWdodDozNDtcclxuICB9XHJcblxyXG4gIC5pbmR1c3RyeS1iZW5lZml0IHtcclxuICAgIGZvbnQtc2l6ZTogMjQ7XHJcbiAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIHZhciBkZW1vQ29udGVudCA9IHtcclxuICAgIFwibWFpblwiOiBbe1xyXG4gICAgICBcInNob3BMaXN0XCI6IFt7XHJcbiAgICAgICAgXCJpZFwiOiBcIjYxOTEyMzEyMlwiLFxyXG4gICAgICAgIFwicGljVXJsXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxQ2w1TUxWWFhYWFhUYVhYWFN1dGJGWFhYLmpwZ1wiLFxyXG4gICAgICAgIFwiZmluYWxTY29yZVwiOiBcIjAuODg0NzY1MjA5NDQwODU3XCIsXHJcbiAgICAgICAgXCJzaG9wVXJsXCI6IFwiaHR0cDovL2xpYW5ncGlucHV6aS50bWFsbC5jb20vY2FtcGFpZ24tMzczNS03Lmh0bVwiLFxyXG4gICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIlNIT1BcIixcclxuICAgICAgICBcImJyYW5kSWRcIjogXCI3NzI0MzY3XCJcclxuICAgICAgfSwge1xyXG4gICAgICAgIFwiaWRcIjogXCI4ODA3MzQ1MDJcIixcclxuICAgICAgICBcInBpY1VybFwiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMUhOMlhMVlhYWFhia1hGWFhTdXRiRlhYWC5qcGdcIixcclxuICAgICAgICBcImZpbmFsU2NvcmVcIjogXCIwLjg4MjIyNDY4NjY1MTI3MTRcIixcclxuICAgICAgICBcInNob3BVcmxcIjogXCJodHRwOi8vc2Fuemhpc29uZ3NodS50bWFsbC5jb20vY2FtcGFpZ24tMzczNS03Lmh0bVwiLFxyXG4gICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIlNIT1BcIixcclxuICAgICAgICBcImJyYW5kSWRcIjogXCIxNDcyODA5MTVcIlxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgXCJpZFwiOiBcIjM5MjE0NzE3N1wiLFxyXG4gICAgICAgIFwicGljVXJsXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxeXE2ZExWWFhYWGJYWHBYWFN1dGJGWFhYLmpwZ1wiLFxyXG4gICAgICAgIFwiZmluYWxTY29yZVwiOiBcIjAuODgwNTg1NDcyNDI0MzYzMVwiLFxyXG4gICAgICAgIFwic2hvcFVybFwiOiBcImh0dHA6Ly96aG91aGVpeWEudG1hbGwuY29tL2NhbXBhaWduLTM3MzUtNi5odG1cIixcclxuICAgICAgICBcImVudGl0eVR5cGVcIjogXCJTSE9QXCIsXHJcbiAgICAgICAgXCJicmFuZElkXCI6IFwiMTExNDk2XCJcclxuICAgICAgfSwge1xyXG4gICAgICAgIFwiaWRcIjogXCIyMDgxMDU4MDYwXCIsXHJcbiAgICAgICAgXCJwaWNVcmxcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjF3NGp4TFZYWFhYYXhYWFhYdEtYYkZYWFguZ2lmXCIsXHJcbiAgICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiMC44NjQwNDM5NTUxMDQ5MjQ5XCIsXHJcbiAgICAgICAgXCJzaG9wVXJsXCI6IFwiaHR0cDovL3Jvbmd4aW50YW5nLnRtYWxsLmNvbS9jYW1wYWlnbi0zNzM1LTYuaHRtXCIsXHJcbiAgICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiU0hPUFwiLFxyXG4gICAgICAgIFwiYnJhbmRJZFwiOiBcIjg3MDk4OTBcIlxyXG4gICAgICB9XSxcclxuICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiNC42NTczMzMzMzMzMzMzMzRcIixcclxuICAgICAgXCJpbmR1c3RyeVVybFwiOiBudWxsLFxyXG4gICAgICBcImVudGl0eVR5cGVcIjogXCJPVEhFUlwiLFxyXG4gICAgICBcImNvbG91clwiOiBcIiNmZmY1YTNcIixcclxuICAgICAgXCJpbmR1c3RyeVRpdGxlXCI6IG51bGwsXHJcbiAgICAgIFwiYmFubmVyVXJsXCI6IFwiLy9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy9uZXdmb29kP2FiYnVja2V0PV9BQi1NMTAxMV9CMTQmYWNtPTAzNjU0LjEwMDMuMS43MzUzNjImYWxkaWQ9S1hQcG52RUgmYWJ0ZXN0PV9BQi1MUjEwMTEtUFIxMDExJnNjbT0xMDAzLjEuMDM2NTQuT1RIRVJfMTJfNzM1MzYyJnBvcz0xXCIsXHJcbiAgICAgIFwibGVmdEJhbm5lckltZ1wiOiBcImh0dHA6Ly9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxTEhoNE1YWFhYWGJzWHBYWGVXam0ycFhYLTc1MC0yNDAuanBnXCIsXHJcbiAgICAgIFwiX3Bvc19cIjogXCIxXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlCZW5lZml0XCI6IG51bGwsXHJcbiAgICAgIFwiaW5kdXN0cnlJZFwiOiBcIjEyXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlJbWdcIjogbnVsbCxcclxuICAgICAgXCJyaWdodEJhbm5lckltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2k0L1RCMXdzaFVNWFhYWFhYYVhWWFhlV2ptMnBYWC03NTAtMjQwLmpwZ1wiXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hvcExpc3RcIjogW3tcclxuICAgICAgICBcImlkXCI6IFwiNTIwNTU3Mjc0XCIsXHJcbiAgICAgICAgXCJwaWNVcmxcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjFhTWpYTFZYWFhYYlVhWFhYU3V0YkZYWFguanBnXCIsXHJcbiAgICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiMC44OTg2MzgyOTg5ODQ1MzI1XCIsXHJcbiAgICAgICAgXCJzaG9wVXJsXCI6IFwiaHR0cDovL25ld2JhbGFuY2UudG1hbGwuY29tL2NhbXBhaWduLTM3MzUtMjAuaHRtXCIsXHJcbiAgICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiU0hPUFwiLFxyXG4gICAgICAgIFwiYnJhbmRJZFwiOiBcIjIwNTg0XCJcclxuICAgICAgfSwge1xyXG4gICAgICAgIFwiaWRcIjogXCI3NDY4NjY5OTNcIixcclxuICAgICAgICBcInBpY1VybFwiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMXBYRzlMVlhYWFhhTFhGWFhTdXRiRlhYWC5qcGdcIixcclxuICAgICAgICBcImZpbmFsU2NvcmVcIjogXCIwLjg5MTc4NTUyNDI5NzczMjdcIixcclxuICAgICAgICBcInNob3BVcmxcIjogXCJodHRwOi8vdmFucy50bWFsbC5jb20vY2FtcGFpZ24tMzczNS0xOS5odG1cIixcclxuICAgICAgICBcImVudGl0eVR5cGVcIjogXCJTSE9QXCIsXHJcbiAgICAgICAgXCJicmFuZElkXCI6IFwiMjk1MjlcIlxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgXCJpZFwiOiBcIjE2MTI3MTMxNDdcIixcclxuICAgICAgICBcInBpY1VybFwiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMWpIZlhMVlhYWFhYUFhGWFhTdXRiRlhYWC5qcGdcIixcclxuICAgICAgICBcImZpbmFsU2NvcmVcIjogXCIwLjg4OTU5NDM2MDY0NDI2MzFcIixcclxuICAgICAgICBcInNob3BVcmxcIjogXCJodHRwOi8vZGNzaG9lY291c2EudG1hbGwuY29tL2NhbXBhaWduLTM3MzUtOC5odG1cIixcclxuICAgICAgICBcImVudGl0eVR5cGVcIjogXCJTSE9QXCIsXHJcbiAgICAgICAgXCJicmFuZElkXCI6IFwiMzg1MTY2MlwiXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBcImlkXCI6IFwiMjM3OTI1MTQxOFwiLFxyXG4gICAgICAgIFwicGljVXJsXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxc2JMbExWWFhYWGJlWFhYWFN1dGJGWFhYLmpwZ1wiLFxyXG4gICAgICAgIFwiZmluYWxTY29yZVwiOiBcIjAuODg4MTUzOTY2ODg3NDM4M1wiLFxyXG4gICAgICAgIFwic2hvcFVybFwiOiBcImh0dHA6Ly9iYWlqaW55ZGh3LnRtYWxsLmNvbS9jYW1wYWlnbi0zNzM1LTIuaHRtXCIsXHJcbiAgICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiU0hPUFwiLFxyXG4gICAgICAgIFwiYnJhbmRJZFwiOiBcIjIwNTc5XCJcclxuICAgICAgfV0sXHJcbiAgICAgIFwiZmluYWxTY29yZVwiOiBcIjQuNTQ1MzMzMzMzMzMzMzM0XCIsXHJcbiAgICAgIFwiaW5kdXN0cnlVcmxcIjogbnVsbCxcclxuICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiT1RIRVJcIixcclxuICAgICAgXCJjb2xvdXJcIjogXCIjY2JkYmZlXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlUaXRsZVwiOiBudWxsLFxyXG4gICAgICBcImJhbm5lclVybFwiOiBcIi8vcGFnZXMudG1hbGwuY29tL3dvdy9hY3QvMTU2MTcveWRodz9hYmJ1Y2tldD1fQUItTTEwMTFfQjE0JmFjbT0wMzY1NC4xMDAzLjEuNzM1MzYyJmFsZGlkPUtYUHBudkVIJmFidGVzdD1fQUItTFIxMDExLVBSMTAxMSZzY209MTAwMy4xLjAzNjU0Lk9USEVSXzhfNzM1MzYyJnBvcz0yXCIsXHJcbiAgICAgIFwibGVmdEJhbm5lckltZ1wiOiBcImh0dHA6Ly9pbWcuYWxpY2RuLmNvbS90cHMvaTMvVEIxaDRrekxWWFhYWGF3WHBYWGVXam0ycFhYLTc1MC0yNDAuanBnXCIsXHJcbiAgICAgIFwiX3Bvc19cIjogXCIyXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlCZW5lZml0XCI6IG51bGwsXHJcbiAgICAgIFwiaW5kdXN0cnlJZFwiOiBcIjhcIixcclxuICAgICAgXCJpbmR1c3RyeUltZ1wiOiBudWxsLFxyXG4gICAgICBcInJpZ2h0QmFubmVySW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTQvVEIxOVZNakxWWFhYWGFlYVhYWGVXam0ycFhYLTc1MC0yNDAuanBnXCJcclxuICAgIH0sIHtcclxuICAgICAgXCJzaG9wTGlzdFwiOiBbe1xyXG4gICAgICAgIFwiaWRcIjogXCI4MTEzODMwOTFcIixcclxuICAgICAgICBcInBpY1VybFwiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMXE0OVpMVlhYWFhhSlhWWFhTdXRiRlhYWC5qcGdcIixcclxuICAgICAgICBcImZpbmFsU2NvcmVcIjogXCIwLjg3MjM2ODI3MTY3NDk0ODJcIixcclxuICAgICAgICBcInNob3BVcmxcIjogXCJodHRwOi8vdG9uZ3JlbnRhbmdiai50bWFsbC5jb20vY2FtcGFpZ24tMzczNS05Lmh0bVwiLFxyXG4gICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIlNIT1BcIixcclxuICAgICAgICBcImJyYW5kSWRcIjogXCI0NDY1MlwiXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBcImlkXCI6IFwiODM4OTE0NjI2XCIsXHJcbiAgICAgICAgXCJwaWNVcmxcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjFHUVliTFZYWFhYYVhYVlhYU3V0YkZYWFguanBnXCIsXHJcbiAgICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiMC41MDI3MTMxOTA4MDg2NTg0XCIsXHJcbiAgICAgICAgXCJzaG9wVXJsXCI6IFwiaHR0cDovL2pvdW8udG1hbGwuY29tL2NhbXBhaWduLTM3MzUtMy5odG1cIixcclxuICAgICAgICBcImVudGl0eVR5cGVcIjogXCJTSE9QXCIsXHJcbiAgICAgICAgXCJicmFuZElkXCI6IFwiMTQxNzAwODFcIlxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgXCJpZFwiOiBcIjEwNzc3MTY4MjlcIixcclxuICAgICAgICBcInBpY1VybFwiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMXJkVzJMVlhYWFhhZ2FwWFhTdXRiRlhYWC5qcGdcIixcclxuICAgICAgICBcImZpbmFsU2NvcmVcIjogXCIwLjUwMTUzODc1NTcwMjQyNjJcIixcclxuICAgICAgICBcInNob3BVcmxcIjogXCJodHRwOi8vd2V0Y29kZS50bWFsbC5jb20vY2FtcGFpZ24tMzczNS0xNC5odG1cIixcclxuICAgICAgICBcImVudGl0eVR5cGVcIjogXCJTSE9QXCIsXHJcbiAgICAgICAgXCJicmFuZElkXCI6IFwiMzY3NTY0MlwiXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBcImlkXCI6IFwiMTY2NDk3NjAzM1wiLFxyXG4gICAgICAgIFwicGljVXJsXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxUS5ycExWWFhYWFhpWHBYWFN1dGJGWFhYLmpwZ1wiLFxyXG4gICAgICAgIFwiZmluYWxTY29yZVwiOiBcIjAuNTAxNDg5NzEwOTY2OTQ0MlwiLFxyXG4gICAgICAgIFwic2hvcFVybFwiOiBcImh0dHA6Ly9oYW5ob29oenAudG1hbGwuY29tL2NhbXBhaWduLTM3MzUtMTcuaHRtXCIsXHJcbiAgICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiU0hPUFwiLFxyXG4gICAgICAgIFwiYnJhbmRJZFwiOiBcIjc4ODg4Njk1XCJcclxuICAgICAgfV0sXHJcbiAgICAgIFwiZmluYWxTY29yZVwiOiBcIjQuNTI2NjY2NjY2NjY2NjY2XCIsXHJcbiAgICAgIFwiaW5kdXN0cnlVcmxcIjogbnVsbCxcclxuICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiT1RIRVJcIixcclxuICAgICAgXCJjb2xvdXJcIjogXCIjZmZkMWI2XCIsXHJcbiAgICAgIFwiaW5kdXN0cnlUaXRsZVwiOiBudWxsLFxyXG4gICAgICBcImJhbm5lclVybFwiOiBcIi8vcGFnZXMudG1hbGwuY29tL3dvdy9hY3QvMTU2MTcvZ2V0YmVhdXR5P2FiYnVja2V0PV9BQi1NMTAxMV9CMTQmYWNtPTAzNjU0LjEwMDMuMS43MzUzNjImYWxkaWQ9S1hQcG52RUgmYWJ0ZXN0PV9BQi1MUjEwMTEtUFIxMDExJnNjbT0xMDAzLjEuMDM2NTQuT1RIRVJfMl83MzUzNjImcG9zPTNcIixcclxuICAgICAgXCJsZWZ0QmFubmVySW1nXCI6IFwiaHR0cDovL2ltZy5hbGljZG4uY29tL3Rwcy9pNC9UQjFEanQ5TVhYWFhYYW5YWFhYZVdqbTJwWFgtNzUwLTI0MC5qcGdcIixcclxuICAgICAgXCJfcG9zX1wiOiBcIjNcIixcclxuICAgICAgXCJpbmR1c3RyeUJlbmVmaXRcIjogbnVsbCxcclxuICAgICAgXCJpbmR1c3RyeUlkXCI6IFwiMlwiLFxyXG4gICAgICBcImluZHVzdHJ5SW1nXCI6IG51bGwsXHJcbiAgICAgIFwicmlnaHRCYW5uZXJJbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMy9UQjFfZ1ZRTVhYWFhYWDlYVlhYZVdqbTJwWFgtNzUwLTI0MC5qcGdcIlxyXG4gICAgfSwge1xyXG4gICAgICBcInNob3BMaXN0XCI6IFt7XHJcbiAgICAgICAgXCJpZFwiOiBcIjIxNTMxNjk2NTVcIixcclxuICAgICAgICBcInBpY1VybFwiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMW5sSzdMVlhYWFhhUlhGWFhTdXRiRlhYWC5qcGdcIixcclxuICAgICAgICBcImZpbmFsU2NvcmVcIjogXCIwLjg4MjAyMTA4MDg4MzU5MDVcIixcclxuICAgICAgICBcInNob3BVcmxcIjogXCJodHRwOi8vY3RraWNrcy50bWFsbC5jb20vY2FtcGFpZ24tMzczNS0xNS5odG1cIixcclxuICAgICAgICBcImVudGl0eVR5cGVcIjogXCJTSE9QXCIsXHJcbiAgICAgICAgXCJicmFuZElkXCI6IFwiMjA1ODRcIlxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgXCJpZFwiOiBcIjI3ODQxMDExMTVcIixcclxuICAgICAgICBcInBpY1VybFwiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMVJyUy5MVlhYWFhjclhwWFhTdXRiRlhYWC5qcGdcIixcclxuICAgICAgICBcImZpbmFsU2NvcmVcIjogXCIwLjU5MzAzODMyMjcwMTI1ODZcIixcclxuICAgICAgICBcInNob3BVcmxcIjogXCJodHRwOi8vdG9tdGFpbG9yLnRtYWxsLmNvbS9jYW1wYWlnbi0zNzM1LTAuaHRtXCIsXHJcbiAgICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiU0hPUFwiLFxyXG4gICAgICAgIFwiYnJhbmRJZFwiOiBcIjIxMzQ3NDA2MFwiXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBcImlkXCI6IFwiMjE4MzgxMzcyNlwiLFxyXG4gICAgICAgIFwicGljVXJsXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxa21TX0xWWFhYWGFCYVhYWFN1dGJGWFhYLmpwZ1wiLFxyXG4gICAgICAgIFwiZmluYWxTY29yZVwiOiBcIjAuNTg4MjU1ODk1Nzc3MTY4MVwiLFxyXG4gICAgICAgIFwic2hvcFVybFwiOiBcImh0dHA6Ly9odWFpeXVhbi50bWFsbC5jb20vY2FtcGFpZ24tMzczNS01Lmh0bVwiLFxyXG4gICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIlNIT1BcIixcclxuICAgICAgICBcImJyYW5kSWRcIjogXCIyOTQ2NVwiXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBcImlkXCI6IFwiMTc4NTkwODAwNVwiLFxyXG4gICAgICAgIFwicGljVXJsXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxZEI2ekxWWFhYWGNKWFhYWFN1dGJGWFhYLmpwZ1wiLFxyXG4gICAgICAgIFwiZmluYWxTY29yZVwiOiBcIjAuNTY5NDIxMTg2MjEyNDM0MVwiLFxyXG4gICAgICAgIFwic2hvcFVybFwiOiBcImh0dHA6Ly9heG9udXMudG1hbGwuY29tL2NhbXBhaWduLTM3MzUtMS5odG1cIixcclxuICAgICAgICBcImVudGl0eVR5cGVcIjogXCJTSE9QXCIsXHJcbiAgICAgICAgXCJicmFuZElkXCI6IFwiMTE1MDM1ODQxXCJcclxuICAgICAgfV0sXHJcbiAgICAgIFwiZmluYWxTY29yZVwiOiBcIjQuNDEzOTU1NTU1NTU1NTU1XCIsXHJcbiAgICAgIFwiaW5kdXN0cnlVcmxcIjogbnVsbCxcclxuICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiT1RIRVJcIixcclxuICAgICAgXCJjb2xvdXJcIjogXCIjYjllYWYyXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlUaXRsZVwiOiBudWxsLFxyXG4gICAgICBcImJhbm5lclVybFwiOiBcIi8vcGFnZXMudG1hbGwuY29tL3dvdy9hY3QvMTU2MTcvZ3Vvaml4ZnM/YWJidWNrZXQ9X0FCLU0xMDExX0IxNCZhY209MDM2NTQuMTAwMy4xLjczNTM2MiZhbGRpZD1LWFBwbnZFSCZhYnRlc3Q9X0FCLUxSMTAxMS1QUjEwMTEmc2NtPTEwMDMuMS4wMzY1NC5PVEhFUl8xXzczNTM2MiZwb3M9NFwiLFxyXG4gICAgICBcImxlZnRCYW5uZXJJbWdcIjogXCJodHRwOi8vaW1nLmFsaWNkbi5jb20vdHBzL2kzL1RCMV9UN0FMVlhYWFhYT1hYWFhlV2ptMnBYWC03NTAtMjQwLmpwZ1wiLFxyXG4gICAgICBcIl9wb3NfXCI6IFwiNFwiLFxyXG4gICAgICBcImluZHVzdHJ5QmVuZWZpdFwiOiBudWxsLFxyXG4gICAgICBcImluZHVzdHJ5SWRcIjogXCIxXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlJbWdcIjogbnVsbCxcclxuICAgICAgXCJyaWdodEJhbm5lckltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kyL1RCMXM3a29MVlhYWFhhZlhGWFhlV2ptMnBYWC03NTAtMjQwLmpwZ1wiXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hvcExpc3RcIjogW3tcclxuICAgICAgICBcImlkXCI6IFwiMjQ1MzA1NDMzNVwiLFxyXG4gICAgICAgIFwicGljVXJsXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxUlhfdkxWWFhYWGNoWHBYWFN1dGJGWFhYLmpwZ1wiLFxyXG4gICAgICAgIFwiZmluYWxTY29yZVwiOiBcIjAuODQ2MzQ0Nzg5OTU5MDI2N1wiLFxyXG4gICAgICAgIFwic2hvcFVybFwiOiBcImh0dHA6Ly9uYW5zaGl6aXhpbmcudG1hbGwuY29tL2NhbXBhaWduLTM3MzUtMi5odG1cIixcclxuICAgICAgICBcImVudGl0eVR5cGVcIjogXCJTSE9QXCIsXHJcbiAgICAgICAgXCJicmFuZElkXCI6IFwiODQ0NTAyNTYwXCJcclxuICAgICAgfSwge1xyXG4gICAgICAgIFwiaWRcIjogXCIxMDQxNzczMjM0XCIsXHJcbiAgICAgICAgXCJwaWNVcmxcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjFRN2pwTFZYWFhYWDhYcFhYU3V0YkZYWFguanBnXCIsXHJcbiAgICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiMC41NjA5NTI3MzQ1MDMwNzVcIixcclxuICAgICAgICBcInNob3BVcmxcIjogXCJodHRwOi8vZGFwdS50bWFsbC5jb20vY2FtcGFpZ24tMzczNS04Lmh0bVwiLFxyXG4gICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIlNIT1BcIixcclxuICAgICAgICBcImJyYW5kSWRcIjogXCIxNDQ5Mzc2M1wiXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBcImlkXCI6IFwiMzAwMDMxNDM4XCIsXHJcbiAgICAgICAgXCJwaWNVcmxcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjEzVkM0TFZYWFhYYXJYVlhYU3V0YkZYWFguanBnXCIsXHJcbiAgICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiMC41NDUwNjc0NjM0ODM5NDQyXCIsXHJcbiAgICAgICAgXCJzaG9wVXJsXCI6IFwiaHR0cDovL2thbmdlcnhpbi50bWFsbC5jb20vY2FtcGFpZ24tMzczNS0xMC5odG1cIixcclxuICAgICAgICBcImVudGl0eVR5cGVcIjogXCJTSE9QXCIsXHJcbiAgICAgICAgXCJicmFuZElkXCI6IFwiMzc4MTkwNVwiXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBcImlkXCI6IFwiOTIwNDI3MzVcIixcclxuICAgICAgICBcInBpY1VybFwiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMVB4WWNMVlhYWFhhc2FYWFhTdXRiRlhYWC5qcGdcIixcclxuICAgICAgICBcImZpbmFsU2NvcmVcIjogXCIwLjU0NDgwMjMyMjgwNTM5ODFcIixcclxuICAgICAgICBcInNob3BVcmxcIjogXCJodHRwOi8vc2h1aXhpbmcudG1hbGwuY29tL2NhbXBhaWduLTM3MzUtMTAuaHRtXCIsXHJcbiAgICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiU0hPUFwiLFxyXG4gICAgICAgIFwiYnJhbmRJZFwiOiBcIjM2ODU2NjBcIlxyXG4gICAgICB9XSxcclxuICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiNC4xM1wiLFxyXG4gICAgICBcImluZHVzdHJ5VXJsXCI6IG51bGwsXHJcbiAgICAgIFwiZW50aXR5VHlwZVwiOiBcIk9USEVSXCIsXHJcbiAgICAgIFwiY29sb3VyXCI6IFwiI2JiZmZlNVwiLFxyXG4gICAgICBcImluZHVzdHJ5VGl0bGVcIjogbnVsbCxcclxuICAgICAgXCJiYW5uZXJVcmxcIjogXCIvL3BhZ2VzLnRtYWxsLmNvbS93b3cvYWN0LzE1NjE3L2pmanM/YWJidWNrZXQ9X0FCLU0xMDExX0IxNCZhY209MDM2NTQuMTAwMy4xLjczNTM2MiZhbGRpZD1LWFBwbnZFSCZhYnRlc3Q9X0FCLUxSMTAxMS1QUjEwMTEmc2NtPTEwMDMuMS4wMzY1NC5PVEhFUl80XzczNTM2MiZwb3M9NVwiLFxyXG4gICAgICBcImxlZnRCYW5uZXJJbWdcIjogXCJodHRwOi8vaW1nLmFsaWNkbi5jb20vdHBzL2kzL1RCMWplb0NMVlhYWFhjb1hYWFhlV2ptMnBYWC03NTAtMjQwLmpwZ1wiLFxyXG4gICAgICBcIl9wb3NfXCI6IFwiNVwiLFxyXG4gICAgICBcImluZHVzdHJ5QmVuZWZpdFwiOiBudWxsLFxyXG4gICAgICBcImluZHVzdHJ5SWRcIjogXCI0XCIsXHJcbiAgICAgIFwiaW5kdXN0cnlJbWdcIjogbnVsbCxcclxuICAgICAgXCJyaWdodEJhbm5lckltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2k0L1RCMUM1LmZMVlhYWFhiM2FYWFhlV2ptMnBYWC03NTAtMjQwLmpwZ1wiXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hvcExpc3RcIjogW3tcclxuICAgICAgICBcImlkXCI6IFwiODIyNDI4NTU1XCIsXHJcbiAgICAgICAgXCJwaWNVcmxcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjFnNDZhTFZYWFhYY1VYVlhYU3V0YkZYWFguanBnXCIsXHJcbiAgICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiMC45MTgzNDU4Nzc2OTcxOTE3XCIsXHJcbiAgICAgICAgXCJzaG9wVXJsXCI6IFwiaHR0cDovL3BsYXlib3l5ZC50bWFsbC5jb20vY2FtcGFpZ24tMzczNS0xMS5odG1cIixcclxuICAgICAgICBcImVudGl0eVR5cGVcIjogXCJTSE9QXCIsXHJcbiAgICAgICAgXCJicmFuZElkXCI6IFwiMjk1MTBcIlxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgXCJpZFwiOiBcIjE5Njk5MzkzNVwiLFxyXG4gICAgICAgIFwicGljVXJsXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxcEhHOExWWFhYWGJyYVhYWFN1dGJGWFhYLmpwZ1wiLFxyXG4gICAgICAgIFwiZmluYWxTY29yZVwiOiBcIjAuOTEwNTUyNTI0NjY2Nzc3NVwiLFxyXG4gICAgICAgIFwic2hvcFVybFwiOiBcImh0dHBzOi8vdW5pcWxvLnRtYWxsLmNvbS9jYW1wYWlnbi0zNzM1LTU2Lmh0bVwiLFxyXG4gICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIlNIT1BcIixcclxuICAgICAgICBcImJyYW5kSWRcIjogXCIyOTUyN1wiXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBcImlkXCI6IFwiNTA1NzUzOTU4XCIsXHJcbiAgICAgICAgXCJwaWNVcmxcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjFXS1l5TFZYWFhYWEhYWFhYU3V0YkZYWFguanBnXCIsXHJcbiAgICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiMC45MDc1MDk2NjM3MDcyNlwiLFxyXG4gICAgICAgIFwic2hvcFVybFwiOiBcImh0dHA6Ly9ib25hcy50bWFsbC5jb20vY2FtcGFpZ24tMzczNS0xMS5odG1cIixcclxuICAgICAgICBcImVudGl0eVR5cGVcIjogXCJTSE9QXCIsXHJcbiAgICAgICAgXCJicmFuZElkXCI6IFwiMzQ4NjU4MFwiXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBcImlkXCI6IFwiMjExMzgyMzU4MFwiLFxyXG4gICAgICAgIFwicGljVXJsXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxaXRIa0xWWFhYWFg5WEZYWFN1dGJGWFhYLmpwZ1wiLFxyXG4gICAgICAgIFwiZmluYWxTY29yZVwiOiBcIjAuNTkwMDk3Nzk1NTYzNTI4OVwiLFxyXG4gICAgICAgIFwic2hvcFVybFwiOiBcImh0dHA6Ly9rYWZhbnlhLnRtYWxsLmNvbS9jYW1wYWlnbi0zNzM1LTcuaHRtXCIsXHJcbiAgICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiU0hPUFwiLFxyXG4gICAgICAgIFwiYnJhbmRJZFwiOiBcIjExMDY4NDIxOFwiXHJcbiAgICAgIH1dLFxyXG4gICAgICBcImZpbmFsU2NvcmVcIjogXCI0LjA4OFwiLFxyXG4gICAgICBcImluZHVzdHJ5VXJsXCI6IG51bGwsXHJcbiAgICAgIFwiZW50aXR5VHlwZVwiOiBcIk9USEVSXCIsXHJcbiAgICAgIFwiY29sb3VyXCI6IFwiI2ZmYzdjOVwiLFxyXG4gICAgICBcImluZHVzdHJ5VGl0bGVcIjogbnVsbCxcclxuICAgICAgXCJiYW5uZXJVcmxcIjogXCIvL3BhZ2VzLnRtYWxsLmNvbS93b3cvYWN0LzE1NjE3L25laXlpMzI4P2FiYnVja2V0PV9BQi1NMTAxMV9CMTQmYWNtPTAzNjU0LjEwMDMuMS43MzUzNjImYWxkaWQ9S1hQcG52RUgmYWJ0ZXN0PV9BQi1MUjEwMTEtUFIxMDExJnNjbT0xMDAzLjEuMDM2NTQuT1RIRVJfOV83MzUzNjImcG9zPTZcIixcclxuICAgICAgXCJsZWZ0QmFubmVySW1nXCI6IFwiaHR0cDovL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjF0bDN0TFZYWFhYYmJYRlhYZVdqbTJwWFgtNzUwLTI0MC5qcGdcIixcclxuICAgICAgXCJfcG9zX1wiOiBcIjZcIixcclxuICAgICAgXCJpbmR1c3RyeUJlbmVmaXRcIjogbnVsbCxcclxuICAgICAgXCJpbmR1c3RyeUlkXCI6IFwiOVwiLFxyXG4gICAgICBcImluZHVzdHJ5SW1nXCI6IG51bGwsXHJcbiAgICAgIFwicmlnaHRCYW5uZXJJbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMi9UQjFBa0l5TFZYWFhYYmpYcFhYZVdqbTJwWFgtNzUwLTI0MC5qcGdcIlxyXG4gICAgfV0sXHJcbiAgICBcInN1YlwiOiBbe1xyXG4gICAgICBcInNob3BMaXN0XCI6IG51bGwsXHJcbiAgICAgIFwiZmluYWxTY29yZVwiOiBcIjQuMDMzMzMzMzMzMzMzMzMzXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlVcmxcIjogXCIvL3BhZ2VzLnRtYWxsLmNvbS93b3cvYWN0LzE1NjE3L3picHM/YWJidWNrZXQ9X0FCLU0xMDExX0IxNCZhY209MDM2NTQuMTAwMy4xLjczNTM2MiZhbGRpZD1LWFBwbnZFSCZhYnRlc3Q9X0FCLUxSMTAxMS1QUjEwMTEmc2NtPTEwMDMuMS4wMzY1NC5PVEhFUl8zXzczNTM2MiZwb3M9N1wiLFxyXG4gICAgICBcImVudGl0eVR5cGVcIjogXCJPVEhFUlwiLFxyXG4gICAgICBcImNvbG91clwiOiBcIiNiYmZmZTVcIixcclxuICAgICAgXCJpbmR1c3RyeVRpdGxlXCI6IFwi54+g5a6d6YWN6aWwXCIsXHJcbiAgICAgIFwiYmFubmVyVXJsXCI6IG51bGwsXHJcbiAgICAgIFwibGVmdEJhbm5lckltZ1wiOiBudWxsLFxyXG4gICAgICBcIl9wb3NfXCI6IFwiN1wiLFxyXG4gICAgICBcImluZHVzdHJ5QmVuZWZpdFwiOiBcIuWkp+eJjDHmipjnp5LmnYBcIixcclxuICAgICAgXCJpbmR1c3RyeUlkXCI6IFwiM1wiLFxyXG4gICAgICBcImluZHVzdHJ5SW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxczV5LkxWWFhYWGIuYVhYWHJkdkdJRlhYLTI0OC0xNTUuanBnXCIsXHJcbiAgICAgIFwicmlnaHRCYW5uZXJJbWdcIjogbnVsbFxyXG4gICAgfSwge1xyXG4gICAgICBcInNob3BMaXN0XCI6IG51bGwsXHJcbiAgICAgIFwiZmluYWxTY29yZVwiOiBcIjMuODc3MzMzMzMzMzMzMzMzNVwiLFxyXG4gICAgICBcImluZHVzdHJ5VXJsXCI6IFwiLy9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy9kcWM/YWJidWNrZXQ9X0FCLU0xMDExX0IxNCZhY209MDM2NTQuMTAwMy4xLjczNTM2MiZhbGRpZD1LWFBwbnZFSCZhYnRlc3Q9X0FCLUxSMTAxMS1QUjEwMTEmc2NtPTEwMDMuMS4wMzY1NC5PVEhFUl8xNV83MzUzNjImcG9zPThcIixcclxuICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiT1RIRVJcIixcclxuICAgICAgXCJjb2xvdXJcIjogXCIjYjRlYmZmXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlUaXRsZVwiOiBcIuaVsOeggVwiLFxyXG4gICAgICBcImJhbm5lclVybFwiOiBudWxsLFxyXG4gICAgICBcImxlZnRCYW5uZXJJbWdcIjogbnVsbCxcclxuICAgICAgXCJfcG9zX1wiOiBcIjhcIixcclxuICAgICAgXCJpbmR1c3RyeUJlbmVmaXRcIjogXCLnlq/miqLlpKfniYzmlrDlk4FcIixcclxuICAgICAgXCJpbmR1c3RyeUlkXCI6IFwiMTVcIixcclxuICAgICAgXCJpbmR1c3RyeUltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2k0L1RCMV94Ry5MVlhYWFhiV2FYWFhyZHZHSUZYWC0yNDgtMTU1LmpwZ1wiLFxyXG4gICAgICBcInJpZ2h0QmFubmVySW1nXCI6IG51bGxcclxuICAgIH0sIHtcclxuICAgICAgXCJzaG9wTGlzdFwiOiBudWxsLFxyXG4gICAgICBcImZpbmFsU2NvcmVcIjogXCIzLjgzNTk5OTk5OTk5OTk5OTRcIixcclxuICAgICAgXCJpbmR1c3RyeVVybFwiOiBcIi8vcGFnZXMudG1hbGwuY29tL3dvdy9hY3QvMTU2MTcvbWFuP2FiYnVja2V0PV9BQi1NMTAxMV9CMTQmYWNtPTAzNjU0LjEwMDMuMS43MzUzNjImYWxkaWQ9S1hQcG52RUgmYWJ0ZXN0PV9BQi1MUjEwMTEtUFIxMDExJnNjbT0xMDAzLjEuMDM2NTQuT1RIRVJfNl83MzUzNjImcG9zPTlcIixcclxuICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiT1RIRVJcIixcclxuICAgICAgXCJjb2xvdXJcIjogXCIjY2JlOWE5XCIsXHJcbiAgICAgIFwiaW5kdXN0cnlUaXRsZVwiOiBcIueUt+ijhVwiLFxyXG4gICAgICBcImJhbm5lclVybFwiOiBudWxsLFxyXG4gICAgICBcImxlZnRCYW5uZXJJbWdcIjogbnVsbCxcclxuICAgICAgXCJfcG9zX1wiOiBcIjlcIixcclxuICAgICAgXCJpbmR1c3RyeUJlbmVmaXRcIjogXCLmlrDlk4HkvY7oh7M5LjnlhYNcIixcclxuICAgICAgXCJpbmR1c3RyeUlkXCI6IFwiNlwiLFxyXG4gICAgICBcImluZHVzdHJ5SW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxbU8ycUxWWFhYWFhpWEZYWHJkdkdJRlhYLTI0OC0xNTUuanBnXCIsXHJcbiAgICAgIFwicmlnaHRCYW5uZXJJbWdcIjogbnVsbFxyXG4gICAgfSwge1xyXG4gICAgICBcInNob3BMaXN0XCI6IG51bGwsXHJcbiAgICAgIFwiZmluYWxTY29yZVwiOiBcIjMuMjQzMzMzMzMzMzMzMzMzXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlVcmxcIjogXCIvL3BhZ2VzLnRtYWxsLmNvbS93b3cvYWN0LzE1NjE3L3hpaHU/YWJidWNrZXQ9X0FCLU0xMDExX0IxNCZhY209MDM2NTQuMTAwMy4xLjczNTM2MiZhbGRpZD1LWFBwbnZFSCZhYnRlc3Q9X0FCLUxSMTAxMS1QUjEwMTEmc2NtPTEwMDMuMS4wMzY1NC5PVEhFUl8xM183MzUzNjImcG9zPTEwXCIsXHJcbiAgICAgIFwiZW50aXR5VHlwZVwiOiBcIk9USEVSXCIsXHJcbiAgICAgIFwiY29sb3VyXCI6IFwiI2NkZmZhNFwiLFxyXG4gICAgICBcImluZHVzdHJ5VGl0bGVcIjogXCLmtJfmiqRcIixcclxuICAgICAgXCJiYW5uZXJVcmxcIjogbnVsbCxcclxuICAgICAgXCJsZWZ0QmFubmVySW1nXCI6IG51bGwsXHJcbiAgICAgIFwiX3Bvc19cIjogXCIxMFwiLFxyXG4gICAgICBcImluZHVzdHJ5QmVuZWZpdFwiOiBcIueIhuasvjHliIbpkrHmiqJcIixcclxuICAgICAgXCJpbmR1c3RyeUlkXCI6IFwiMTNcIixcclxuICAgICAgXCJpbmR1c3RyeUltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kzL1RCMUZ0X0NMVlhYWFhYMlhYWFhyZHZHSUZYWC0yNDgtMTU1LmpwZ1wiLFxyXG4gICAgICBcInJpZ2h0QmFubmVySW1nXCI6IG51bGxcclxuICAgIH0sIHtcclxuICAgICAgXCJzaG9wTGlzdFwiOiBudWxsLFxyXG4gICAgICBcImZpbmFsU2NvcmVcIjogXCIzLjE1NTMzMzMzMzMzMzMzMzVcIixcclxuICAgICAgXCJpbmR1c3RyeVVybFwiOiBcIi8vcGFnZXMudG1hbGwuY29tL3dvdy9hY3QvMTU2MTcvbXl4ZnM/YWJidWNrZXQ9X0FCLU0xMDExX0IxNCZhY209MDM2NTQuMTAwMy4xLjczNTM2MiZhbGRpZD1LWFBwbnZFSCZhYnRlc3Q9X0FCLUxSMTAxMS1QUjEwMTEmc2NtPTEwMDMuMS4wMzY1NC5PVEhFUl81XzczNTM2MiZwb3M9MTFcIixcclxuICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiT1RIRVJcIixcclxuICAgICAgXCJjb2xvdXJcIjogXCIjZjhlMWZmXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlUaXRsZVwiOiBcIuavjeWptOerpeijhVwiLFxyXG4gICAgICBcImJhbm5lclVybFwiOiBudWxsLFxyXG4gICAgICBcImxlZnRCYW5uZXJJbWdcIjogbnVsbCxcclxuICAgICAgXCJfcG9zX1wiOiBcIjExXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlCZW5lZml0XCI6IFwi6Leo5bqX5ruhMjk55YePNDBcIixcclxuICAgICAgXCJpbmR1c3RyeUlkXCI6IFwiNVwiLFxyXG4gICAgICBcImluZHVzdHJ5SW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTQvVEIxYy5IdkxWWFhYWFhQWHBYWHJkdkdJRlhYLTI0OC0xNTUuanBnXCIsXHJcbiAgICAgIFwicmlnaHRCYW5uZXJJbWdcIjogbnVsbFxyXG4gICAgfSwge1xyXG4gICAgICBcInNob3BMaXN0XCI6IG51bGwsXHJcbiAgICAgIFwiZmluYWxTY29yZVwiOiBcIjIuNjczOTk5OTk5OTk5OTk5NVwiLFxyXG4gICAgICBcImluZHVzdHJ5VXJsXCI6IFwiLy9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy9udnpodWFuZz9hYmJ1Y2tldD1fQUItTTEwMTFfQjE0JmFjbT0wMzY1NC4xMDAzLjEuNzM1MzYyJmFsZGlkPUtYUHBudkVIJmFidGVzdD1fQUItTFIxMDExLVBSMTAxMSZzY209MTAwMy4xLjAzNjU0Lk9USEVSXzdfNzM1MzYyJnBvcz0xMlwiLFxyXG4gICAgICBcImVudGl0eVR5cGVcIjogXCJPVEhFUlwiLFxyXG4gICAgICBcImNvbG91clwiOiBcIiNkNWNiZThcIixcclxuICAgICAgXCJpbmR1c3RyeVRpdGxlXCI6IFwi5aWz6KOFXCIsXHJcbiAgICAgIFwiYmFubmVyVXJsXCI6IG51bGwsXHJcbiAgICAgIFwibGVmdEJhbm5lckltZ1wiOiBudWxsLFxyXG4gICAgICBcIl9wb3NfXCI6IFwiMTJcIixcclxuICAgICAgXCJpbmR1c3RyeUJlbmVmaXRcIjogXCLmipjlkI7nlKjliLjmiqLmlrBcIixcclxuICAgICAgXCJpbmR1c3RyeUlkXCI6IFwiN1wiLFxyXG4gICAgICBcImluZHVzdHJ5SW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTMvVEIxSmRmc0xWWFhYWGJSWHBYWHJkdkdJRlhYLTI0OC0xNTUuanBnXCIsXHJcbiAgICAgIFwicmlnaHRCYW5uZXJJbWdcIjogbnVsbFxyXG4gICAgfSwge1xyXG4gICAgICBcInNob3BMaXN0XCI6IG51bGwsXHJcbiAgICAgIFwiZmluYWxTY29yZVwiOiBcIjAuMFwiLFxyXG4gICAgICBcImluZHVzdHJ5VXJsXCI6IFwiLy9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy9tb2JpbGVwaG9uZT9hYmJ1Y2tldD1fQUItTTEwMTFfQjE0JmFjbT0wMzY1NC4xMDAzLjEuNzM1MzYyJmFsZGlkPUtYUHBudkVIJmFidGVzdD1fQUItTFIxMDExLVBSMTAxMSZzY209MTAwMy4xLjAzNjU0Lk9USEVSXzE0XzczNTM2MiZwb3M9MTNcIixcclxuICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiT1RIRVJcIixcclxuICAgICAgXCJjb2xvdXJcIjogXCIjYzVmZmRmXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlUaXRsZVwiOiBcIuaJi+aculwiLFxyXG4gICAgICBcImJhbm5lclVybFwiOiBudWxsLFxyXG4gICAgICBcImxlZnRCYW5uZXJJbWdcIjogbnVsbCxcclxuICAgICAgXCJfcG9zX1wiOiBcIjEzXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlCZW5lZml0XCI6IFwiMeWFg+aKouS8mOaDoOWIuFwiLFxyXG4gICAgICBcImluZHVzdHJ5SWRcIjogXCIxNFwiLFxyXG4gICAgICBcImluZHVzdHJ5SW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTQvVEIxTTN6aExWWFhYWFg0WFZYWHJkdkdJRlhYLTI0OC0xNTUuanBnXCIsXHJcbiAgICAgIFwicmlnaHRCYW5uZXJJbWdcIjogbnVsbFxyXG4gICAgfSwge1xyXG4gICAgICBcInNob3BMaXN0XCI6IG51bGwsXHJcbiAgICAgIFwiZmluYWxTY29yZVwiOiBcIjAuMFwiLFxyXG4gICAgICBcImluZHVzdHJ5VXJsXCI6IFwiLy9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy94aWFuZ2Jhb2h1YW54aW4/YWJidWNrZXQ9X0FCLU0xMDExX0IxNCZhY209MDM2NTQuMTAwMy4xLjczNTM2MiZhbGRpZD1LWFBwbnZFSCZhYnRlc3Q9X0FCLUxSMTAxMS1QUjEwMTEmc2NtPTEwMDMuMS4wMzY1NC5PVEhFUl8xMV83MzUzNjImcG9zPTE0XCIsXHJcbiAgICAgIFwiZW50aXR5VHlwZVwiOiBcIk9USEVSXCIsXHJcbiAgICAgIFwiY29sb3VyXCI6IFwiI2ZmY2NkY1wiLFxyXG4gICAgICBcImluZHVzdHJ5VGl0bGVcIjogXCLnrrHljIVcIixcclxuICAgICAgXCJiYW5uZXJVcmxcIjogbnVsbCxcclxuICAgICAgXCJsZWZ0QmFubmVySW1nXCI6IG51bGwsXHJcbiAgICAgIFwiX3Bvc19cIjogXCIxNFwiLFxyXG4gICAgICBcImluZHVzdHJ5QmVuZWZpdFwiOiBcIuaegeiHtOeEleaWsOWwlui0p1wiLFxyXG4gICAgICBcImluZHVzdHJ5SWRcIjogXCIxMVwiLFxyXG4gICAgICBcImluZHVzdHJ5SW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTMvVEIxZ0U2a0xWWFhYWGNyWEZYWHJkdkdJRlhYLTI0OC0xNTUuanBnXCIsXHJcbiAgICAgIFwicmlnaHRCYW5uZXJJbWdcIjogbnVsbFxyXG4gICAgfSwge1xyXG4gICAgICBcInNob3BMaXN0XCI6IG51bGwsXHJcbiAgICAgIFwiZmluYWxTY29yZVwiOiBcIjAuMFwiLFxyXG4gICAgICBcImluZHVzdHJ5VXJsXCI6IFwiLy9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy9uZXdudj9hYmJ1Y2tldD1fQUItTTEwMTFfQjE0JmFjbT0wMzY1NC4xMDAzLjEuNzM1MzYyJmFsZGlkPUtYUHBudkVIJmFidGVzdD1fQUItTFIxMDExLVBSMTAxMSZzY209MTAwMy4xLjAzNjU0Lk9USEVSXzEwXzczNTM2MiZwb3M9MTVcIixcclxuICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiT1RIRVJcIixcclxuICAgICAgXCJjb2xvdXJcIjogXCIjZmZmOGVlXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlUaXRsZVwiOiBcIumei+WxpVwiLFxyXG4gICAgICBcImJhbm5lclVybFwiOiBudWxsLFxyXG4gICAgICBcImxlZnRCYW5uZXJJbWdcIjogbnVsbCxcclxuICAgICAgXCJfcG9zX1wiOiBcIjE1XCIsXHJcbiAgICAgIFwiaW5kdXN0cnlCZW5lZml0XCI6IFwi5r2u5ZOB57K+6YCJ6Z6L5bGlXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlJZFwiOiBcIjEwXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlJbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMy9UQjEucXpwTFZYWFhYWC5YRlhYcmR2R0lGWFgtMjQ4LTE1NS5qcGdcIixcclxuICAgICAgXCJyaWdodEJhbm5lckltZ1wiOiBudWxsXHJcbiAgICB9XSxcclxuICAgIFwiaXNGb3JtYWxcIjogXCJmYWxzZVwiLFxyXG4gICAgXCJleHBvc3VyZVBhcmFtXCI6IFwiLy9hYy5tbXN0YXQuY29tLzEuZ2lmP2FwcGx5PXZvdGUmYWJidWNrZXQ9X0FCLU0xMDExX0IxNCZjb209MDImYWNtPTAzNjU0LjEwMDMuMS43MzUzNjImY29kPTAzNjU0JmNhY2hlPVU1cmV2c1RuJmFsZGlkPUtYUHBudkVIJmxvZ3R5cGU9NCZhYnRlc3Q9X0FCLUxSMTAxMS1QUjEwMTEmc2NtPTEwMDMuMS4wMzY1NC43MzUzNjImaXA9XCIsXHJcbiAgICBcImlkXCI6IFwiMDM2NTRcIlxyXG4gIH1cclxuXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIGJhbm5lcjogcmVxdWlyZSgnLi9iYW5uZXIudnVlJylcclxuICAgIH0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBkczoge1xyXG4gICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiB7fVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBOVU1CRVJfMjQ4OiAyNDgsXHJcbiAgICAgICAgTlVNQkVSXzE1NTogMTU1LFxyXG4gICAgICAgIE5VTUJFUl8zNzM6IDM3MyxcclxuICAgICAgICBOVU1CRVJfMjM3OiAyMzcsXHJcbiAgICAgICAgTlVNQkVSXzE4NjogMTg2LFxyXG4gICAgICAgIE5VTUJFUl8yMDg6IDIwOCxcclxuICAgICAgICBOVU1CRVJfNzUwOiA3NTAsXHJcbiAgICAgICAgc3ViSXRlbUJnOiAnLy9ndy5hbGljZG4uY29tL3Rwcy9UQjFRelVmTFZYWFhYYU9YVlhYWFhYWFhYWFgtMjQ4LTg2LmpwZycsXHJcbiAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgIHN1Ykl0ZW1zOiBbXVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmluaXREYXRhKGRlbW9Db250ZW50KVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgZ2V0U3ViSXRlbVRvcDogZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICByZXR1cm4gKGkgLSBpICUgMykgLyAzICogKDI0MSArIDMpO1xyXG4gICAgICB9LFxyXG4gICAgICBnZXRTdWJJdGVtTGVmdDogZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICByZXR1cm4gaSAlIDMgKiAoMjQ4ICsgMyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGluaXREYXRhOiBmdW5jdGlvbiAoY29udGVudCkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBjb250ZW50Lm1haW47XHJcbiAgICAgICAgdGhpcy5zdWJJdGVtcyA9IGNvbnRlbnQuc3ViO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNhdGVnb3J5LnZ1ZT81YTQyMDY2NiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgWyhfdm0uZHMuZmxvb3JUaXRsZSkgPyBfYygnaW1hZ2UnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogX3ZtLmRzLmZsb29yVGl0bGVcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaXRlbS1jb250YWluZXJcIlxuICB9LCBfdm0uX2woKF92bS5pdGVtcyksIGZ1bmN0aW9uKGksIGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICAgIHN0eWxlOiAoe1xuICAgICAgICB3aWR0aDogNzUwLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiAxNCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpdGVtLmNvbG91clxuICAgICAgfSlcbiAgICB9LCBbX2MoJ2RpdicsIFtfYygnYmFubmVyJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ3aWR0aFwiOiBfdm0uTlVNQkVSXzc1MCxcbiAgICAgICAgXCJoZWlnaHRcIjogX3ZtLk5VTUJFUl8yMzcsXG4gICAgICAgIFwic3JjXCI6IGkgJSAyID09PSAwID8gaXRlbS5sZWZ0QmFubmVySW1nIDogaXRlbS5yaWdodEJhbm5lckltZyxcbiAgICAgICAgXCJocmVmXCI6IGl0ZW0uYmFubmVyVXJsXG4gICAgICB9XG4gICAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInNob3AtbGlzdFwiXG4gICAgfSwgX3ZtLl9sKChpdGVtLnNob3BMaXN0KSwgZnVuY3Rpb24oc2hvcCkge1xuICAgICAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcInNob3AtaW1nLWNvbnRhaW5lclwiXG4gICAgICB9LCBbX2MoJ2Jhbm5lcicsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBcIndpZHRoXCI6IF92bS5OVU1CRVJfMTg2LFxuICAgICAgICAgIFwiaGVpZ2h0XCI6IF92bS5OVU1CRVJfMjA4LFxuICAgICAgICAgIFwic3JjXCI6IHNob3AucGljVXJsLFxuICAgICAgICAgIFwiaHJlZlwiOiBzaG9wLnNob3BVcmxcbiAgICAgICAgfVxuICAgICAgfSldLCAxKVxuICAgIH0pKV0pXG4gIH0pKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzdWItaXRlbS1jb250YWluZXJcIixcbiAgICBzdHlsZTogKHtcbiAgICAgIGhlaWdodDogTWF0aC5yb3VuZChfdm0uc3ViSXRlbXMubGVuZ3RoIC8gMykgKiAoMjQxICsgMylcbiAgICB9KVxuICB9LCBfdm0uX2woKF92bS5zdWJJdGVtcyksIGZ1bmN0aW9uKGksIGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInN1Yi1pdGVtXCIsXG4gICAgICBzdHlsZTogKHtcbiAgICAgICAgdG9wOiBfdm0uZ2V0U3ViSXRlbVRvcChpKSxcbiAgICAgICAgbGVmdDogX3ZtLmdldFN1Ykl0ZW1MZWZ0KGkpXG4gICAgICB9KVxuICAgIH0sIFtfYygnaW1hZ2UnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJzdWItaXRlbS1iZ1wiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcmNcIjogX3ZtLnN1Ykl0ZW1CZ1xuICAgICAgfVxuICAgIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwic3ViLWl0ZW0taW1nXCJcbiAgICB9LCBbX2MoJ2Jhbm5lcicsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwid2lkdGhcIjogX3ZtLk5VTUJFUl8yNDgsXG4gICAgICAgIFwiaGVpZ2h0XCI6IF92bS5OVU1CRVJfMTU1LFxuICAgICAgICBcInNyY1wiOiBpdGVtLmluZHVzdHJ5SW1nLFxuICAgICAgICBcImhyZWZcIjogaXRlbS5pbmR1c3RyeVVybFxuICAgICAgfVxuICAgIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJzdWItaXRlbS10aXRsZVwiXG4gICAgfSwgW19jKCd0ZXh0Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiaW5kdXN0cnktdGl0bGVcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBpdGVtLmluZHVzdHJ5VXJsXG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3MoaXRlbS5pbmR1c3RyeVRpdGxlKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHQnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJpbmR1c3RyeS1iZW5lZml0XCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogaXRlbS5pbmR1c3RyeVVybFxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uaW5kdXN0cnlCZW5lZml0KSldKV0pXSlcbiAgfSkpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNDU3ZGExYTFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTQ1N2RhMWExIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvc2hvd2Nhc2UvaW5jbHVkZS9jYXRlZ29yeS52dWVcbi8vIG1vZHVsZSBpZCA9IDE2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDU1IiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0wNjM2YWY4OSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NvdXBvbi52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vY291cG9uLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0wNjM2YWY4OSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY291cG9uLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTpcXFxcd2Vla1N0dWR5XFxcXHdlZXgyXFxcXHdlZXgzXFxcXHNyY1xcXFxzaG93Y2FzZVxcXFxpbmNsdWRlXFxcXGNvdXBvbi52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjb3Vwb24udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTA2MzZhZjg5XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDYzNmFmODlcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Nob3djYXNlL2luY2x1ZGUvY291cG9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTcwXG4vLyBtb2R1bGUgY2h1bmtzID0gNTUiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxpbWFnZSB2LWlmPVwiZHMuZmxvb3JUaXRsZVwiIGNsYXNzPVwidGl0bGVcIiA6c3JjPVwiZHMuZmxvb3JUaXRsZVwiPjwvaW1hZ2U+XHJcbiAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxyXG4gICAgICA8aW1hZ2UgY2xhc3M9XCJpbWdcIiA6c3JjPVwiY3VycmVudFN0YXR1c1wiPjwvaW1hZ2U+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJteS1jb3Vwb25cIiBAY2xpY2s9XCJoYW5kbGVDbGlja1wiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZ3VpZGVzXCIgQGNsaWNrPVwiaGFuZGxlQ2xpY2tcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImxvdHRlcnlcIiBAY2xpY2s9XCJoYW5kbGVDbGlja1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGU+XHJcbiAgLnRpdGxle1xyXG4gICAgd2lkdGg6NzUwO1xyXG4gICAgaGVpZ2h0OjEwMDtcclxuICB9XHJcbiAgLndyYXBwZXIge1xyXG4gICAgY29sb3I6ICNGRjQ1NTA7XHJcbiAgICB3aWR0aDogNzUwO1xyXG4gICAgaGVpZ2h0OiAyMzA7XHJcbiAgfVxyXG5cclxuICAubXktY291cG9uIHtcclxuICAgIHdpZHRoOiAxODA7XHJcbiAgICBoZWlnaHQ6IDM5O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNTtcclxuICAgIHJpZ2h0OiAxNDk7XHJcbiAgfVxyXG5cclxuICAuZ3VpZGVzIHtcclxuICAgIGhlaWdodDogMzk7XHJcbiAgICB3aWR0aDogMTEwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNTtcclxuICAgIHJpZ2h0OiAzMjtcclxuICB9XHJcblxyXG4gIC5sb3R0ZXJ5IHtcclxuICAgIHdpZHRoOiAzNDg7XHJcbiAgICBoZWlnaHQ6IDc2O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMzI7XHJcbiAgICByaWdodDogNzA7XHJcbiAgfVxyXG5cclxuICAuaW5mbyB7XHJcbiAgICBmb250LXNpemU6IDE4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4NDtcclxuICAgIHJpZ2h0OiA3MDtcclxuICB9XHJcblxyXG4gIC5pbWcge1xyXG4gICAgd2lkdGg6IDc1MDtcclxuICAgIGhlaWdodDogMjMwO1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgdmFyIG1vZGFsID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL21vZGFsJylcclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRzOiB7XHJcbiAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHt9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGN1cnJlbnRTdGF0dXM6ICcvL2ltZy5hbGljZG4uY29tL3Rwcy9pNC9UQjFjWUJLTVhYWFhYYXlhWFhYa3hIazJwWFgtNzUwLTIyOC5qcGdfcTc1LmpwZydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgbW9kYWwudG9hc3Qoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiAnY2xpY2snLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb3Vwb24udnVlPzJmMGFjY2U0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbKF92bS5kcy5mbG9vclRpdGxlKSA/IF9jKCdpbWFnZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uZHMuZmxvb3JUaXRsZVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3cmFwcGVyXCJcbiAgfSwgW19jKCdpbWFnZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbWdcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogX3ZtLmN1cnJlbnRTdGF0dXNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm15LWNvdXBvblwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5oYW5kbGVDbGlja1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3VpZGVzXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmhhbmRsZUNsaWNrXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsb3R0ZXJ5XCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmhhbmRsZUNsaWNrXG4gICAgfVxuICB9KV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMDYzNmFmODlcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTA2MzZhZjg5IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvc2hvd2Nhc2UvaW5jbHVkZS9jb3Vwb24udnVlXG4vLyBtb2R1bGUgaWQgPSAxNzJcbi8vIG1vZHVsZSBjaHVua3MgPSA1NSIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNzQ5OTNjN2EhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9nb29kcy52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZ29vZHMudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTc0OTkzYzdhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9nb29kcy52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6XFxcXHdlZWtTdHVkeVxcXFx3ZWV4MlxcXFx3ZWV4M1xcXFxzcmNcXFxcc2hvd2Nhc2VcXFxcaW5jbHVkZVxcXFxnb29kcy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBnb29kcy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzQ5OTNjN2FcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03NDk5M2M3YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hvd2Nhc2UvaW5jbHVkZS9nb29kcy52dWVcbi8vIG1vZHVsZSBpZCA9IDE3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDU1IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgdi1pZj1cIiFkcy5pc0hpZGVcIj5cclxuICAgIDxpbWFnZSB2LWlmPVwiZHMuZmxvb3JUaXRsZVwiIGNsYXNzPVwidGl0bGVcIiA6c3JjPVwiZHMuZmxvb3JUaXRsZVwiPjwvaW1hZ2U+XHJcbiAgICA8c2xpZGVyIGNsYXNzPVwic2xpZGVyXCIgc2hvdy1pbmRpY2F0b3JzPVwidHJ1ZVwiIGF1dG8tcGxheT1cInRydWVcIiBpbnRlcnZhbD1cIjMwMDBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBhbm5lbFwiIHYtZm9yPVwiaXRlbSBpbiBkcy5iYW5uZXJJdGVtc1wiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YmFubmVyIHN0eWxlPVwibWFyZ2luLWJvdHRvbTo0XCIgOndpZHRoPVwiTlVNQkVSXzI1MVwiIDpoZWlnaHQ9XCJOVU1CRVJfMjkyXCIgOnNyYz1cIml0ZW0uaW1nMVwiIDpocmVmPVwiaXRlbS51cmwxXCI+PC9iYW5uZXI+XHJcbiAgICAgICAgICA8YmFubmVyIDp3aWR0aD1cIk5VTUJFUl8yNTFcIiA6aGVpZ2h0PVwiTlVNQkVSXzI5MlwiIDpzcmM9XCJpdGVtLmltZzJcIiA6aHJlZj1cIml0ZW0udXJsMlwiPjwvYmFubmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgIGNsYXNzPVwibWlkZGxlLWNvbFwiPlxyXG4gICAgICAgICAgPGJhbm5lciA6d2lkdGg9XCJOVU1CRVJfMjQwXCIgOmhlaWdodD1cIk5VTUJFUl81ODhcIiA6c3JjPVwiaXRlbS5pbWczXCIgOmhyZWY9XCJpdGVtLnVybDNcIj48L2Jhbm5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJhbm5lciBzdHlsZT1cIm1hcmdpbi1ib3R0b206NFwiIDp3aWR0aD1cIk5VTUJFUl8yNTFcIiA6aGVpZ2h0PVwiTlVNQkVSXzI5MlwiIDpzcmM9XCJpdGVtLmltZzRcIiA6aHJlZj1cIml0ZW0udXJsNFwiPjwvYmFubmVyPlxyXG4gICAgICAgICAgPGJhbm5lciA6d2lkdGg9XCJOVU1CRVJfMjUxXCIgOmhlaWdodD1cIk5VTUJFUl8yOTJcIiA6c3JjPVwiaXRlbS5pbWc1XCIgOmhyZWY9XCJpdGVtLnVybDVcIj48L2Jhbm5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxpbmRpY2F0b3JcclxuICAgICAgICBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3dpZHRoOjcxNDtoZWlnaHQ6MjAwO2xlZnQ6MTA7Ym90dG9tOi04MDtpdGVtU2l6ZToyMDtpdGVtQ29sb3I6Izk5OTk5OTtpdGVtU2VsZWN0ZWRDb2xvcjojMDAwMDAwO1wiPjwvaW5kaWNhdG9yPlxyXG4gICAgPC9zbGlkZXI+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGU+XHJcbiAgLnRpdGxlIHtcclxuICAgIHdpZHRoOiA3NTA7XHJcbiAgICBoZWlnaHQ6IDEwMDtcclxuICB9XHJcblxyXG4gIC5zbGlkZXIge1xyXG4gICAgaGVpZ2h0OiA2NTI7XHJcbiAgfVxyXG5cclxuICAucGFubmVsIHtcclxuICAgIHdpZHRoOiA3NTA7XHJcbiAgICBoZWlnaHQ6IDU5MjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG5cclxuICAubWlkZGxlLWNvbCB7XHJcbiAgICBtYXJnaW4tbGVmdDo0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjQ7XHJcbiAgICB3aWR0aDogMjQwO1xyXG4gICAgaGVpZ2h0OiA1ODg7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgYmFubmVyOiByZXF1aXJlKCcuL2Jhbm5lci52dWUnKVxyXG4gICAgfSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRzOiB7XHJcbiAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHt9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIE5VTUJFUl8yNTE6IDI1MSxcclxuICAgICAgICBOVU1CRVJfMjQwOiAyNDAsXHJcbiAgICAgICAgTlVNQkVSXzI5MjogMjkyLFxyXG4gICAgICAgIE5VTUJFUl81ODg6IDU4OFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGdvb2RzLnZ1ZT8xMWVjMTRlYyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiAoIV92bS5kcy5pc0hpZGUpID8gX2MoJ2RpdicsIFsoX3ZtLmRzLmZsb29yVGl0bGUpID8gX2MoJ2ltYWdlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS5kcy5mbG9vclRpdGxlXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnc2xpZGVyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNsaWRlclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNob3ctaW5kaWNhdG9yc1wiOiBcInRydWVcIixcbiAgICAgIFwiYXV0by1wbGF5XCI6IFwidHJ1ZVwiLFxuICAgICAgXCJpbnRlcnZhbFwiOiBcIjMwMDBcIlxuICAgIH1cbiAgfSwgW192bS5fbCgoX3ZtLmRzLmJhbm5lckl0ZW1zKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicGFubmVsXCJcbiAgICB9LCBbX2MoJ2RpdicsIFtfYygnYmFubmVyJywge1xuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJtYXJnaW4tYm90dG9tXCI6IFwiNFwiXG4gICAgICB9LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ3aWR0aFwiOiBfdm0uTlVNQkVSXzI1MSxcbiAgICAgICAgXCJoZWlnaHRcIjogX3ZtLk5VTUJFUl8yOTIsXG4gICAgICAgIFwic3JjXCI6IGl0ZW0uaW1nMSxcbiAgICAgICAgXCJocmVmXCI6IGl0ZW0udXJsMVxuICAgICAgfVxuICAgIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYmFubmVyJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ3aWR0aFwiOiBfdm0uTlVNQkVSXzI1MSxcbiAgICAgICAgXCJoZWlnaHRcIjogX3ZtLk5VTUJFUl8yOTIsXG4gICAgICAgIFwic3JjXCI6IGl0ZW0uaW1nMixcbiAgICAgICAgXCJocmVmXCI6IGl0ZW0udXJsMlxuICAgICAgfVxuICAgIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtaWRkbGUtY29sXCJcbiAgICB9LCBbX2MoJ2Jhbm5lcicsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwid2lkdGhcIjogX3ZtLk5VTUJFUl8yNDAsXG4gICAgICAgIFwiaGVpZ2h0XCI6IF92bS5OVU1CRVJfNTg4LFxuICAgICAgICBcInNyY1wiOiBpdGVtLmltZzMsXG4gICAgICAgIFwiaHJlZlwiOiBpdGVtLnVybDNcbiAgICAgIH1cbiAgICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdiYW5uZXInLCB7XG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCI0XCJcbiAgICAgIH0sXG4gICAgICBhdHRyczoge1xuICAgICAgICBcIndpZHRoXCI6IF92bS5OVU1CRVJfMjUxLFxuICAgICAgICBcImhlaWdodFwiOiBfdm0uTlVNQkVSXzI5MixcbiAgICAgICAgXCJzcmNcIjogaXRlbS5pbWc0LFxuICAgICAgICBcImhyZWZcIjogaXRlbS51cmw0XG4gICAgICB9XG4gICAgfSksIF92bS5fdihcIiBcIiksIF9jKCdiYW5uZXInLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcIndpZHRoXCI6IF92bS5OVU1CRVJfMjUxLFxuICAgICAgICBcImhlaWdodFwiOiBfdm0uTlVNQkVSXzI5MixcbiAgICAgICAgXCJzcmNcIjogaXRlbS5pbWc1LFxuICAgICAgICBcImhyZWZcIjogaXRlbS51cmw1XG4gICAgICB9XG4gICAgfSldLCAxKV0pXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5kaWNhdG9yJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICAgIFwid2lkdGhcIjogXCI3MTRcIixcbiAgICAgIFwiaGVpZ2h0XCI6IFwiMjAwXCIsXG4gICAgICBcImxlZnRcIjogXCIxMFwiLFxuICAgICAgXCJib3R0b21cIjogXCItODBcIixcbiAgICAgIFwiaXRlbVNpemVcIjogXCIyMFwiLFxuICAgICAgXCJpdGVtQ29sb3JcIjogXCIjOTk5OTk5XCIsXG4gICAgICBcIml0ZW1TZWxlY3RlZENvbG9yXCI6IFwiIzAwMDAwMFwiXG4gICAgfVxuICB9KV0sIDIpXSwgMSkgOiBfdm0uX2UoKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03NDk5M2M3YVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNzQ5OTNjN2EhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9zaG93Y2FzZS9pbmNsdWRlL2dvb2RzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTc1XG4vLyBtb2R1bGUgY2h1bmtzID0gNTUiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTE1MmNhMGIxIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2UudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3Jlc291cmNlLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0xNTJjYTBiMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2UudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFx3ZWVrU3R1ZHlcXFxcd2VleDJcXFxcd2VleDNcXFxcc3JjXFxcXHNob3djYXNlXFxcXGluY2x1ZGVcXFxccmVzb3VyY2UudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcmVzb3VyY2UudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTE1MmNhMGIxXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMTUyY2EwYjFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Nob3djYXNlL2luY2x1ZGUvcmVzb3VyY2UudnVlXG4vLyBtb2R1bGUgaWQgPSAxNzZcbi8vIG1vZHVsZSBjaHVua3MgPSA1NSIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IHYtaWY9XCIhZHMuaXNIaWRlXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYmlnLWJhbm5lci1jb250YWluZXJcIj5cclxuICAgICAgPGJhbm5lciA6d2lkdGg9XCJOVU1CRVJfNzUwXCIgOmhlaWdodD1cIk5VTUJFUl8yMDBcIiA6c3JjPVwiZHMuYmlnQmFubmVySW1nXCIgOmhyZWY9XCJkcy5iaWdCYW5uZXJVcmxcIj48L2Jhbm5lcj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJhbm5lcnMgZGlyZWN0aW9uPVwicm93XCIgOmRzPVwiZHMuc21hbGxCYW5uZXJJdGVtc1wiIDp3aWR0aD1cIk5VTUJFUl8zNzNcIiA6aGVpZ2h0PVwiTlVNQkVSXzIyNFwiIDpzcGFjZT1cIk5VTUJFUl80XCI+PC9iYW5uZXJzPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlPlxyXG4gIC50aXRsZSB7XHJcbiAgICB3aWR0aDogNzUwO1xyXG4gICAgaGVpZ2h0OiAxMDA7XHJcbiAgfVxyXG4gIC5iaWctYmFubmVyLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbi1ib3R0b206NDtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBiYW5uZXJzOiByZXF1aXJlKCcuL2Jhbm5lcnMudnVlJyksXHJcbiAgICAgIGJhbm5lcjogcmVxdWlyZSgnLi9iYW5uZXIudnVlJylcclxuICAgIH0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBkczoge1xyXG4gICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiB7fVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBOVU1CRVJfNzUwOiA3NTAsXHJcbiAgICAgICAgTlVNQkVSXzIwMDogMjAwLFxyXG4gICAgICAgIE5VTUJFUl8zNzM6IDM3MyxcclxuICAgICAgICBOVU1CRVJfMjI0OiAyMjQsXHJcbiAgICAgICAgTlVNQkVSXzQ6IDRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZS52dWU/ZDA2OTlkZTQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gKCFfdm0uZHMuaXNIaWRlKSA/IF9jKCdkaXYnLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJiaWctYmFubmVyLWNvbnRhaW5lclwiXG4gIH0sIFtfYygnYmFubmVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIndpZHRoXCI6IF92bS5OVU1CRVJfNzUwLFxuICAgICAgXCJoZWlnaHRcIjogX3ZtLk5VTUJFUl8yMDAsXG4gICAgICBcInNyY1wiOiBfdm0uZHMuYmlnQmFubmVySW1nLFxuICAgICAgXCJocmVmXCI6IF92bS5kcy5iaWdCYW5uZXJVcmxcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdiYW5uZXJzJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgICAgXCJkc1wiOiBfdm0uZHMuc21hbGxCYW5uZXJJdGVtcyxcbiAgICAgIFwid2lkdGhcIjogX3ZtLk5VTUJFUl8zNzMsXG4gICAgICBcImhlaWdodFwiOiBfdm0uTlVNQkVSXzIyNCxcbiAgICAgIFwic3BhY2VcIjogX3ZtLk5VTUJFUl80XG4gICAgfVxuICB9KV0sIDEpIDogX3ZtLl9lKClcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMTUyY2EwYjFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTE1MmNhMGIxIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvc2hvd2Nhc2UvaW5jbHVkZS9yZXNvdXJjZS52dWVcbi8vIG1vZHVsZSBpZCA9IDE3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDU1IiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi00Y2IxNTAwZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NjZW5lLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zY2VuZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNGNiMTUwMGUhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NjZW5lLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTpcXFxcd2Vla1N0dWR5XFxcXHdlZXgyXFxcXHdlZXgzXFxcXHNyY1xcXFxzaG93Y2FzZVxcXFxpbmNsdWRlXFxcXHNjZW5lLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHNjZW5lLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00Y2IxNTAwZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTRjYjE1MDBlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaG93Y2FzZS9pbmNsdWRlL3NjZW5lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTc5XG4vLyBtb2R1bGUgY2h1bmtzID0gNTUiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxpbWFnZSB2LWlmPVwiZHMuZmxvb3JUaXRsZVwiIGNsYXNzPVwidGl0bGVcIiA6c3JjPVwiZHMuZmxvb3JUaXRsZVwiPjwvaW1hZ2U+XHJcbiAgICA8ZGl2IGNsYXNzPVwic21hbGwtaXRlbS1jb250YWluZXJcIiA6c3R5bGU9XCJ7IGhlaWdodDogTWF0aC5yb3VuZChzbWFsbEl0ZW1zLmxlbmd0aC8yKSoyMzQgfVwiPlxyXG4gICAgICA8ZGl2IHYtZm9yPVwiKGksaXRlbSkgaW4gc21hbGxJdGVtc1wiIGNsYXNzPVwic21hbGwtaXRlbVwiIDpzdHlsZT1cInsgdG9wOiBnZXRJdGVtVG9wKGkpLCBsZWZ0OiBnZXRJdGVtTGVmdChpKSB9XCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbWFnZSBjbGFzcz1cInNtYWxsLWl0ZW0tYmdcIiA6c3JjPVwic21hbGxJdGVtQmdcIj48L2ltYWdlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzbWFsbC1pdGVtLWltZ1wiPlxyXG4gICAgICAgICAgPGJhbm5lciA6d2lkdGg9XCJOVU1CRVJfMTg2XCIgOmhlaWdodD1cIk5VTUJFUl8yMDZcIiA6c3JjPVwiaXRlbS5pdGVtSW1nXCIgOmhyZWY9XCJpdGVtLnNjZW5lVXJsXCI+PC9iYW5uZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNtYWxsLWJlbmlmaXQtaW1nXCI+XHJcbiAgICAgICAgICA8YmFubmVyIDp3aWR0aD1cIk5VTUJFUl8xNzBcIiA6aGVpZ2h0PVwiTlVNQkVSXzEwMFwiIDpzcmM9XCJpdGVtLmJlbmVmaXRJbWdcIiA6aHJlZj1cIml0ZW0uc2NlbmVVcmxcIj48L2Jhbm5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuICAudGl0bGUge1xyXG4gICAgd2lkdGg6IDc1MDtcclxuICAgIGhlaWdodDogMTAwO1xyXG4gIH1cclxuXHJcbiAgLml0ZW0ge1xyXG4gICAgd2lkdGg6IDc1MDtcclxuICAgIGhlaWdodDogMzQwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDtcclxuICB9XHJcblxyXG4gIC5pdGVtLWltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMTA7XHJcbiAgICB0b3A6IDIwO1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0LWl0ZW0taW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMTA7XHJcbiAgICB0b3A6IDIwO1xyXG4gIH1cclxuXHJcbiAgLmJlbmlmaXQtaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA1O1xyXG4gICAgdG9wOiAxNjA7XHJcbiAgfVxyXG5cclxuICAucmlnaHQtYmVuaWZpdC1pbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNDA7XHJcbiAgICB0b3A6IDE2MDtcclxuICB9XHJcblxyXG4gIC5zbWFsbC1pdGVtLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNzUwO1xyXG4gIH1cclxuXHJcbiAgLnNtYWxsLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDM3MztcclxuICAgIGhlaWdodDogMjMwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcblxyXG4gIC5zbWFsbC1pdGVtLWJnIHtcclxuICAgIHdpZHRoOiAzNzM7XHJcbiAgICBoZWlnaHQ6IDIzMDtcclxuICB9XHJcblxyXG4gIC5zbWFsbC1pdGVtLWltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMjtcclxuICAgIHRvcDogMTI7XHJcbiAgfVxyXG5cclxuICAuc21hbGwtYmVuaWZpdC1pbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDY1O1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgdmFyIGRlbW9Db250ZW50ID0gW3tcclxuICAgIFwiaWRcIjogXCIxMTExXCIsXHJcbiAgICBcInNjZW5lVXJsXCI6IFwiaHR0cHM6Ly9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy9zY2VuZT9hY209MDM2NTMuMTAwMy4xLjc0MDYwMyZhbGRpZD1WeXJTcXgwNiZ3aF9pZD0xMzkyJnNjbT0xMDAzLjEuMDM2NTMuU1VCXzExMTFfNzQwNjAzJnBvcz0xXCIsXHJcbiAgICBcIl9zX1wiOiBcImRcIixcclxuICAgIFwiaXRlbUltZ1wiOiBcImh0dHBzOi8vaW1nLmFsaWNkbi5jb20vdHBzL1RCMWM3dC5NWFhYWFhjaFhYWFhYWFhYWFhYWC0xODItMjA2LmpwZ1wiLFxyXG4gICAgXCJzY2VuZUNhdFwiOiBcIjUwMDEyMDEwLDUwMDEyMDI3LDUwMDEyMDMyLDUwMDA3MDAzLDUwMDA4ODgxLDUwMDA4ODgzLDE2MjMsMTYyMTE2LDUwMDEwODUwLDEyMzIxNjAwNFwiLFxyXG4gICAgXCJmaW5hbFNjb3JlXCI6IFwiMTAwMDAuMFwiLFxyXG4gICAgXCJfcG9zX1wiOiBcIjFcIixcclxuICAgIFwiZW50aXR5VHlwZVwiOiBcIlNVQlwiLFxyXG4gICAgXCJiZW5lZml0SW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvVEIxWmdsMk1YWFhYWGFZWEZYWFhYWFhYWFhYLTE3MC0xMDAucG5nXCJcclxuICB9LCB7XHJcbiAgICBcImlkXCI6IFwiMTM5NlwiLFxyXG4gICAgXCJzY2VuZVVybFwiOiBcImh0dHBzOi8vcGFnZXMudG1hbGwuY29tL3dvdy9hY3QvMTU2MTcvc2NlbmU/YWNtPTAzNjUzLjEwMDMuMS43NDA2MDMmYWxkaWQ9VnlyU3F4MDYmd2hfaWQ9MTM5NiZzY209MTAwMy4xLjAzNjUzLlNVQl8xMzk2Xzc0MDYwMyZwb3M9MlwiLFxyXG4gICAgXCJfc19cIjogXCJkXCIsXHJcbiAgICBcIml0ZW1JbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMi9UQjFPMVZmTVhYWFhYWDBhWFhYS29mWlpwWFgtMTgyLTIwNi5qcGdcIixcclxuICAgIFwic2NlbmVDYXRcIjogXCI1MDAxMDM2OCw1MDAxMTg5Miw1MDAxMTg5NCw1MDAxMzc5NCw1MDAxMDc5Miw1MDAxMDc5MCw1MDAxMDc5MCwxMjE0MzQwMjUsMTIxMzk2MDI0LDUwMDEwNzkzLDUwMDEwNzg5LDUwMDEwNzkzLDEyMTM4NjAzNSwxMjEzOTIwMzcsMTIxNDU4MDM0LDEyMTM5MjAzNiwxMjE0ODIwMjcsMTIxMzkyMDE1LDEyMTM2ODAxNCwxMjE0MTgwMTMsMTIxMzkyMDE2LDUwMDExOTgyLDEyMjY5MDAwMywzMDI5MTAsNTAwMTIwMTAsMTIyNjU0MDA1LDUwMDEyMDE5LDUwMDEyODI1LDUwMDEyMDI3LDUwMDEyMDQyLDUwMDExNzQ0LDUwMDEyOTA2LDUwMDEyOTA3LDUwMDA4ODgxLDUwMDA4ODgzLDUwMDA4ODgyPyw1MDAxMjc4ND8sNTAwMjI4ODksNTAwMjI3MjgsNTAwMTMyMjgsNTAwMTM4OTYsNTAwMTQ3NzUsNTAwMTk1NzgsNTAwMTQ4MjIsNTAwMjYzOTQsNTAwMTk2OTQsNTAwMTkyNzksNTAwMTkyNzIsNTAwMTQwNzksNTAwMTQwNzgsNTAwMTQwNzYsNTAwMTQwNzcsNTAwMTcyMzgsMTIxNDY0MDExLDEyMTQ2ODAxNCw1MDAxOTEzMCw1MDAxOTEyNyw1MDAxOTEyNiw1MDAxOTEyOCw1MDAxOTEyNSw1MDAxNTk4NCw1MDAxNDgwMyw1MDAxNDgwMiw1MDAxNTk4MCw1MDAxNDc4OCw1MDAxNDc4Nyw1MDAxOTUyNiw1MDAxNDc5MSw1MDAxOTUyMCw1MDAxMzkzMiw1MDAxNDY3Nyw1MDAxNTk3OCw1MDAxNDc4Niw1MDAxNDc4NSw1MDUyMjAwMSw1MDAxNDQ5Myw1MDAyMzEwMCwxMjE0MTgwMjEsMTIxMzg4MDI3LDEyMTQyNDAyMSwxMjE0MTgwMjAsMTIxMzY4MDIwLDUwMDEyMDM2LDUwMDEyMDQ0LDUwMDEyMDQzLDUwMDEwMzY4LCA1MDAxMTg5MiwgNTAwMTkyNzQsNTAwMTIwNDQsNTAwMTIwNDgsNTAwMTIwNDMsNTAwMTMyMjgsNTAwMTMyMzgsNTAwMTE3MjYsNTAwMTkyNzksNTAwMTU5ODQsNTAwMTQ4MDMsNTAwMTQ4MDIsNTAwMTk1MjYsNTAwMTQ3OTEsNTAwMTk1MjAsNTAwMTM5MzIsNTAwMTQ2NzcsNTAwMTk1MjYsNTAwMTMzMTQsNTAwMjMzNDEsNTAwMTY3NTIsNTAwMTY3NDksNTAwMTY3NDcsNTAwMTY3NDQsNTAwMTY3NDEsNTAwMTY3NDAsNTAwMTY3MzksNTAwMTY3MzgsNTAwMTY3MzcsNTAwMTY3NjksNTAwMTY3NjMsNTAwMTY3NTAsNTAwMDcwMDMsMzAyOTEwLDUwMDEyMDEwLDUwMDEyMDMyLDUwMDEyMDMzLDUwMDExNzQ1LDUwMDExNzQ2LDUwMDExODk0LDEyMTQ1ODAzNCwxMjE3NTYwMDMsMTIxNDI2MDMzLDUwMDExOTgyLDUwMDExOTc5LDEyMTM5MDAwNiwxMjQ3MzAwMDEsNTAwMDE3NDgsNTAwMTExMzAsMTI0NzMwMDAxLDUwMDAxNzQ4LDUwMDExMTMwLDUwMDExMTI5LDUwMDEwMTYwLDUwMDExMTYxLDUwMDExMTU5LDUwMDEwMTU5LDUwMDEwMTU4LDUwMDExMTI3LDMwMzUsNTAwMTAxNjcsNTAwMDA1NTcsNTAwMTExMjMsNTAwMTA0MDIsNTAwMDA0MzYsNTAwMTExNTMsNTAwMTA4NTAsNTAwMDA2NzEsMTYyMjAxLDUwMDIyNTY2LDUwMDA3MDY4LDUwMDI2NjUxLDUwMDAwODUyLDE2MjEwNCwxNjIxMTYsMTYyMjA1LDE2MjMsMTIzMjE2MDA0LDE2MjQwNCwxNjI0MDEsNTAwMTE0MTIsNTAwMTE0MTEsMTYyNDAyLDUwMDA4OTAzLDUwMDExNDEzLDE2MjQwMyw1MDAwMDY5NywxNjI5LDUwMDExMjc3LDEyMTQxMjAwNCw1MDAwODg5Nyw1MDAwODkwMSw1MDAwODg5OSw1MDAxMzE5NCw1MDAwODkwNCw1MDAwODkwNSw1MDAwODg5OCwxNjIxMDMsNTAwMDg5MDAsNTAwMTMxOTYsMTIxNDM0MDA0LDUwMDA1MDY1LDE2MjcwMiwxNjI3MDEsMTYyNzAzLDE2MzYsMTUxMiwxMjM1MzQwMDEsMTQsNTAwMDgwOTAsNTAwMTIzNDEsNTAxMzIwMDIsNTAwMTIzNDIsNTAwMTIzNDMsNTAwMTIzNDUsNTAwMTIzNDYsNTAwMTMxODksNTAwMTA1MjcsMTIxMzk0MDA2LDUwMDEzNjE4LDUwMDEwNTM3LDUwMDEyNDI0LDEyMTQ1MjAzOCwxMjE0ODQwNDQsNTAwMTA1NDAsNTAwMTA1NDgsNTAwMjQ3NjksMTIxNDUwMDA3LDUwMDEzNjk3LDUwMDEwMjE4LDUwMDA1OTYwLDUwMDA1OTYyLDUwMDEyODIwLDUwMDEyNDA2LDUwMDIzNjIwLDUwMDIzNjA1LDUwMDA4ODI5LDUwMDI0MDY0LDUwMDIzNDQwLDUwMDA4Njg3LDEyNDM5MjAwMSw1MDAyMzc3MSw1MDAwNjgwNCw1MDAxMjQxMCwxMjQ0ODIwMTAsMTIxMzk4MDIzLDUwMDIzNzg5LDUwMDExOTc1XCIsXHJcbiAgICBcImZpbmFsU2NvcmVcIjogXCIxMDAwMC4wXCIsXHJcbiAgICBcIl9wb3NfXCI6IFwiMlwiLFxyXG4gICAgXCJlbnRpdHlUeXBlXCI6IFwiU1VCXCIsXHJcbiAgICBcImJlbmVmaXRJbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjFjcDRzTVhYWFhYYkxYRlhYM2JwWFRYWFgtMTcwLTEwMC5wbmdcIlxyXG4gIH0sIHtcclxuICAgIFwiaWRcIjogXCIxNjE2XCIsXHJcbiAgICBcInNjZW5lVXJsXCI6IFwiaHR0cHM6Ly9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy9zY2VuZT9hY209MDM2NTMuMTAwMy4xLjc0MDYwMyZhbGRpZD1WeXJTcXgwNiZ3aF9pZD0xNjE2JnNjbT0xMDAzLjEuMDM2NTMuU1VCXzE2MTZfNzQwNjAzJnBvcz0zXCIsXHJcbiAgICBcIl9zX1wiOiBcImRcIixcclxuICAgIFwiaXRlbUltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2k0L1RCMWRsRUFMVlhYWFhieFhwWFhLb2ZaWnBYWC0xODItMjA2LmpwZ1wiLFxyXG4gICAgXCJzY2VuZUNhdFwiOiBcIjUwMDA5MDMyLDUwMDA3MDAzLDMwMjkxMCwxNTEyLDEyNDY4ODAxMiwxMjQ5ODYwMDIsMTI0OTQyMDA1LDUwMDIzNzIyLDUwMDEwMzY4LDUwMDExODkyLDUwMDExODk0XCIsXHJcbiAgICBcImZpbmFsU2NvcmVcIjogXCIxMDAwMC4wXCIsXHJcbiAgICBcIl9wb3NfXCI6IFwiM1wiLFxyXG4gICAgXCJlbnRpdHlUeXBlXCI6IFwiU1VCXCIsXHJcbiAgICBcImJlbmVmaXRJbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMy9UQjFmeG9uTFZYWFhYWFVhWFhYM2JwWFRYWFgtMTcwLTEwMC5wbmdcIlxyXG4gIH0sIHtcclxuICAgIFwiaWRcIjogXCIxNjQyNFwiLFxyXG4gICAgXCJzY2VuZVVybFwiOiBcImh0dHBzOi8vYnJhbmQudG1hbGwuY29tL21vYmlsZXN0cmVldC9zdWJqZWN0Lmh0bT9pZD0xNjQyNCZhY209MDM2NTMuMTAwMy4xLjc0MDYwMyZhbGRpZD1WeXJTcXgwNiZzcG09MC4wLjAuMC5Xdjhpb24mc2NtPTEwMDMuMS4wMzY1My5TVUJfMTY0MjRfNzQwNjAzJnBvcz00XCIsXHJcbiAgICBcIl9zX1wiOiBcImRcIixcclxuICAgIFwiaXRlbUltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2k0L1RCMS5pMl9MVlhYWFhiclhwWFhLb2ZaWnBYWC0xODItMjA2LmpwZ1wiLFxyXG4gICAgXCJzY2VuZUNhdFwiOiBcIjUwMDEyMDQzLDUwMDEyMDM2LDUwMDEwODUwLDUwMDAwNjcxLDE2MjIsNTAwMDA4NTIsMTYyMTA0LDUwMDAwNjk3LDE2MjIwNSwxNjIxMTYsNTAwMTIwMjcsNTAwMTIwMzIsNTAwMTIwMjgsNTAwMTIwMzMsNTAwMTIwNDIsNTAwMDg4ODIsNTAwMTI3NzIsNTAwMDY4NDYsNTAwMDg4ODEsNTAwMDA0MzYsNTAwMTExMjMsMzAzNSw1MDAxMDE2Nyw1MDAwMDU1Nyw1MDAxMDE1OCw1MDAxMDE1OSw1MDAxMDQwMiw1MDAxMDE2MCw1MDAxMTk4MCw1MDAxMTk5MywxMjEzOTAwMDYsNTAwMTE5NzgsNTAwMTE5NzcsNTAwMTE5NzksMTIxNDU0MDEzLDUwMDExNzQ1XCIsXHJcbiAgICBcImZpbmFsU2NvcmVcIjogXCI2LjcyOTc0OTk5OTk5OTk5OVwiLFxyXG4gICAgXCJfcG9zX1wiOiBcIjRcIixcclxuICAgIFwiZW50aXR5VHlwZVwiOiBcIlNVQlwiLFxyXG4gICAgXCJiZW5lZml0SW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTIvVEIxYmhINUxWWFhYWGFwWEZYWDNicFhUWFhYLTE3MC0xMDAucG5nXCJcclxuICB9LCB7XHJcbiAgICBcImlkXCI6IFwiMTY0MjVcIixcclxuICAgIFwic2NlbmVVcmxcIjogXCJodHRwczovL2JyYW5kLnRtYWxsLmNvbS9tb2JpbGVzdHJlZXQvc3ViamVjdC5odG0/aWQ9MTYzNjAmYWNtPTAzNjUzLjEwMDMuMS43NDA2MDMmYWxkaWQ9VnlyU3F4MDYmc3BtPTAuMC4wLjAuTXR0RkVDJnNjbT0xMDAzLjEuMDM2NTMuU1VCXzE2NDI1Xzc0MDYwMyZwb3M9NVwiLFxyXG4gICAgXCJfc19cIjogXCJkXCIsXHJcbiAgICBcIml0ZW1JbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMy9UQjE1eXdiTFZYWFhYY2RYWFhYS29mWlpwWFgtMTgyLTIwNi5qcGdcIixcclxuICAgIFwic2NlbmVDYXRcIjogXCI1MDAxMjA0Myw1MDAxMjAzNiw1MDAxMDg1MCw1MDAwMDY3MSwxNjIyLDUwMDAwODUyLDE2MjEwNCw1MDAwMDY5NywxNjIyMDUsMTYyMTE2LDUwMDEyMDI3LDUwMDEyMDMyLDUwMDEyMDI4LDUwMDEyMDMzLDUwMDEyMDQyLDUwMDA4ODgyLDUwMDEyNzcyLDUwMDA2ODQ2LDUwMDA4ODgxLDUwMDAwNDM2LDUwMDExMTIzLDMwMzUsNTAwMTAxNjcsNTAwMDA1NTcsNTAwMTAxNTgsNTAwMTAxNTksNTAwMTA0MDIsNTAwMTAxNjAsNTAwMTE5ODAsNTAwMTE5OTMsMTIxMzkwMDA2LDUwMDExOTc4LDUwMDExOTc3LDUwMDExOTc5LDEyMTQ1NDAxMyw1MDAxMTc0NVwiLFxyXG4gICAgXCJmaW5hbFNjb3JlXCI6IFwiNi43Mjk3NDk5OTk5OTk5OTlcIixcclxuICAgIFwiX3Bvc19cIjogXCI1XCIsXHJcbiAgICBcImVudGl0eVR5cGVcIjogXCJTVUJcIixcclxuICAgIFwiYmVuZWZpdEltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMUpCTFlMVlhYWFhYbFhWWFgzYnBYVFhYWC0xNzAtMTAwLnBuZ1wiXHJcbiAgfSwge1xyXG4gICAgXCJpZFwiOiBcIjE2MjVcIixcclxuICAgIFwic2NlbmVVcmxcIjogXCJodHRwczovL3BhZ2VzLnRtYWxsLmNvbS93b3cvZnVzaGkvYWN0L2dmLWNoYW9saXU/YWNtPTAzNjUzLjEwMDMuMS43NDA2MDMmYWxkaWQ9VnlyU3F4MDYmc2NtPTEwMDMuMS4wMzY1My5TVUJfMTYyNV83NDA2MDMmcG9zPTZcIixcclxuICAgIFwiX3NfXCI6IFwiZFwiLFxyXG4gICAgXCJpdGVtSW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS9iYW8vdXBsb2FkZWQvaTIvVEIxR2QyMUtWWFhYWFhaWFZYWFhYWFhYWFhYXyEhMC1pdGVtX3BpYy5qcGdcIixcclxuICAgIFwic2NlbmVDYXRcIjogXCI1MDAxMjA0Myw1MDAxMjAzNiw1MDAxMDg1MCw1MDAwMDY3MSwxNjIyLDUwMDAwODUyLDE2MjEwNCw1MDAwMDY5NywxNjIyMDUsMTYyMTE2LDUwMDEyMDI3LDUwMDEyMDMyLDUwMDEyMDI4LDUwMDEyMDMzLDUwMDEyMDQyLDUwMDA4ODgyLDUwMDEyNzcyLDUwMDA2ODQ2LDUwMDA4ODgxLDUwMDAwNDM2LDUwMDExMTIzLDMwMzUsNTAwMTAxNjcsNTAwMDA1NTcsNTAwMTAxNTgsNTAwMTAxNTksNTAwMTA0MDIsNTAwMTAxNjAsNTAwMTE5ODAsNTAwMTE5OTMsMTIxMzkwMDA2LDUwMDExOTc4LDUwMDExOTc3LDUwMDExOTc5LDEyMTQ1NDAxMyw1MDAxMTk4Miw1MDAxMTk5MSw1MDAxMjkwNiw1MDAxMTc0NCw1MDAxMTc0NSw1MDAxMTc0Myw1MDAxMjkwNyw1MDAxMTc0Niw1MDAxMDgxNSwxMjE0NjAwMDUsNTAwMTM3OTQsMTIyNDM4MDAxLDEyMTM5ODAwNiwxMjEzODYwMjMsNTAwMTA4MDhcIixcclxuICAgIFwiZmluYWxTY29yZVwiOiBcIjYuNzI5NzQ5OTk5OTk5OTk5XCIsXHJcbiAgICBcIl9wb3NfXCI6IFwiNlwiLFxyXG4gICAgXCJlbnRpdHlUeXBlXCI6IFwiU1VCXCIsXHJcbiAgICBcImJlbmVmaXRJbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMy9UQjFxeFh6TVhYWFhYY2pYRlhYM2JwWFRYWFgtMTcwLTEwMC5wbmdcIlxyXG4gIH0sIHtcclxuICAgIFwiaWRcIjogXCIxMzkyXCIsXHJcbiAgICBcInNjZW5lVXJsXCI6IFwiaHR0cHM6Ly9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy9zY2VuZT9hY209MDM2NTMuMTAwMy4xLjc0MDYwMyZhbGRpZD1WeXJTcXgwNiZ3aF9pZD0xMzkyJnNjbT0xMDAzLjEuMDM2NTMuU1VCXzEzOTJfNzQwNjAzJnBvcz03XCIsXHJcbiAgICBcIl9zX1wiOiBcImRcIixcclxuICAgIFwiaXRlbUltZ1wiOiBcImh0dHBzOi8vaW1nLmFsaWNkbi5jb20vdHBzL1RCMWM3dC5NWFhYWFhjaFhYWFhYWFhYWFhYWC0xODItMjA2LmpwZ1wiLFxyXG4gICAgXCJzY2VuZUNhdFwiOiBcIjUwMDA2ODQyLDUwMDA2ODQwLDUwMDA4ODgxLDUwMDA4ODgzLDUwMDA4ODgyLDUwMDA4ODg0LDUwMDEyNzc0LDUwMDEyNzc1LDUwMDEyNzc2LDUwMDEyNzgxLDUwMDA4ODgsNTAwMTI3NjYsNTAwMTI3NzEsNTAwMTI3NzIsNTAwMTA0MDQsNTAwMTAzNjgsIDUwMDExODkyLCA1MDAxMTg5NCwxMjQ2ODgwMTIsMTI0NzMwMDAxLDUwMDAxNzQ4LDUwMDExMTMwLDEyNDczMDAwMSw1MDAwMTc0OCw1MDAxMTEzMCw1MDAxMTEyOSw1MDAxMDE2MCw1MDAxMTE2MSw1MDAxMTE1OSw1MDAxMDE1OSw1MDAxMDE1OCw1MDAxMTEyNywzMDM1LDUwMDEwMTY3LDUwMDAwNTU3LDUwMDExMTIzLDUwMDEwNDAyLDUwMDAwNDM2LDUwMDExMTUzLDUwMDExNzQwLDUwMDA4ODgyLDUwMDA4ODg2LDUwMDA4ODg1LDUwMDEyNzc3LDUwMDEyNzc4LDUwMDExOTc3LDUwMDExOTc4LDUwMDExOTc5LDUwMDExOTgwLDUwMDExOTgyLDUwMDExOTkwLDUwMDExOTk5LDUwMDEyMDAwLDUwMDExOTkzLDUwMDExOTk2LDUwMDExOTk3LDEyMTM2NjAxMSwxMjE0ODQwMDksMTIxMzY4MDEwLDEyMTM5MDAwNiwxMjEzOTgwMjksMTIxNDA0MDMwLDEyMTQwNDAzMSwxMjE0MDgwNDAsMTIxNDEwMDM1LDEyMTQxMjAzMywxMjE0MTQwNDEsMTIxNDE4MDEzLDEyMTQ1NDAxMywxMjE0MTAwMTMsMTIxNDIyMDEzLDEyMTQ4NDAxMyw1MDAxMDc4OSw1MDAxMDc5MCw1MDAxMDc5Miw1MDAxMDc5Myw1MDAxMDc5NCw1MDAxMDc5Niw1MDAxMDc5Nyw1MDAxMDc5OCw1MDAxMDgwMSw1MDAxMDgwMyw1MDAxMDgwNSw1MDAxMDgwNyw1MDAxMDgwOCw1MDAxMDgxNSwxMjE0MTAwMDcsMTIxNDI2MDA3LDEyMTQ1MjAwNCwxMjE0NjAwMDUsNTAwMTIzNDEsNTAxMzIwMDIsNTAwMTIzNDIsNTAwMTIzNDMsNTAwMTIzNDUsNTAwMTIzNDYsNTAwMTMxODksNTAwMTA1MjcsMTIxMzk0MDA2LDUwMDEzNjE4LDUwMDEwNTM3LDUwMDEyNDI0LDEyMTQ1MjAzOCwxMjE0ODQwNDQsNTAwMTA1NDAsNTAwMTA1NDgsNTAwMjQ3NjksMTIxMzY2MDM3LDEyMTQ1ODAzNiwxMjEzOTIwMzgsMTIxNDIwMDM1LDEyMTM2NDAyOCwxMjE0NjgwMjYsMTIxNDcyMDMxLDEyMTQ3NjAzNiwxMjE0NzAwNDIsMTIxNDE4MDMyLDEyMTQxMDAzNiwxMjE0NzIwMzIsMTIxNDIwMDMyLDEyMTQ3MDA0MCwxMjEzODQwMzIsMTIxNDYwMDI4LDEyMTQ0ODAyOCwxMjE0MDAwMzAsMTIxNDI0MDI0LDEyMTQ4MjAyNSwxMjE0MTgwMzEsMTIxNDAyMDI4LDEyMTM4ODAzNSwxMjE0NjAwMjksMTIxNDAwMDI4LDEyMTQwMDAyOSwxMjE0MTgwMzAsMTIxNDc2MDM0LDEyMTQ3ODAzMSwxMjE0NDgwMjksMTIxNDgwMDMwLDEyMTM2NjAzNSwxMjE0MjQwMjUsMTIxNDI2MDMwLDEyMTQ4NDAzMCwxMjE0MTIwMzEsMTIxMzg0MDMzLDEyMTQyNDAyMywxMjE0MDIwMjcsMTIxNDA4MDM5LDEyMTQyMDAzMywxMjE0NTIwMjgsMTIxNDY2MDQwLDEyMTQxNjAyOSwxMjE0ODIwMjgsMTIxNDIwMDM0LDEyMTM5NjA0NiwxMjE0MjIwNTIsMTIxMzcwMDM3LDEyMTQyNDAzMSwyMTM2NDA0MywxMjE0NzIwNDAsMTIxNDEyMDQ1LDEyMTQyNDAzMiwxMjUwNTQwMDIsMTI1MDc0MDA3LDEyNTA3NDAwOCwxMjUxMDQwMDMsMTI1MDgwMDAzLDEyNTAyNDAwNiwxMjUwODAwMDRcIixcclxuICAgIFwiZmluYWxTY29yZVwiOiBcIjQuNDk1MTQyODU3MTQyODU3NlwiLFxyXG4gICAgXCJfcG9zX1wiOiBcIjdcIixcclxuICAgIFwiZW50aXR5VHlwZVwiOiBcIlNVQlwiLFxyXG4gICAgXCJiZW5lZml0SW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvVEIxWmdsMk1YWFhYWGFZWEZYWFhYWFhYWFhYLTE3MC0xMDAucG5nXCJcclxuICB9LCB7XHJcbiAgICBcImlkXCI6IFwiMTM5NVwiLFxyXG4gICAgXCJzY2VuZVVybFwiOiBcImh0dHBzOi8vcGFnZXMudG1hbGwuY29tL3dvdy9hY3QvMTU2MTcvc2NlbmU/YWNtPTAzNjUzLjEwMDMuMS43NDA2MDMmYWxkaWQ9VnlyU3F4MDYmd2hfaWQ9MTM5NSZzY209MTAwMy4xLjAzNjUzLlNVQl8xMzk1Xzc0MDYwMyZwb3M9OFwiLFxyXG4gICAgXCJfc19cIjogXCJkXCIsXHJcbiAgICBcIml0ZW1JbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMi9UQjFwNE5jTVhYWFhYYkdhWFhYS29mWlpwWFgtMTgyLTIwNi5qcGdcIixcclxuICAgIFwic2NlbmVDYXRcIjogXCI1MDAwODg4MSw1MDAwODg4Myw1MDAwODg4Miw1MDAwODg4NCw1MDAxMjc3NCw1MDAxMjc3NSw1MDAxMjc3Niw1MDAxMjc4MSw1MDAwODg4Niw1MDAxMjc2Niw1MDAxMjc3MSw1MDAxMjc3Miw1MDAxMDg1MCw1MDAwMDY3MSwxNjIyMDEsNTAwMjI1NjYsNTAwMDcwNjgsNTAwMjY2NTEsNTAwMDA4NTIsMTYyMTA0LDE2MjExNiwxNjIyMDUsMTYyMywxMjMyMTYwMDQsMTYyNDA0LDE2MjQwMSw1MDAxMTQxMiw1MDAxMTQxMSwxNjI0MCw1MDAxMjc3Myw1MDAwNjg0Niw1MDAxMDM5NCw1MDAwODg4OCw1MDAwODg5MCw1MDAwODg4OSw1MDAxMjc4NCw1MDAxMjc4NSw1MDAxMjc4Niw1MDAxMjc4Nyw1MDAwODg4NSw1MDAxMjc3Nyw1MDAxMjc3OCwxMjQ3MzAwMDEsNTAwMDE3NDgsNTAwMTExMzAsMTI0NzMwMDAxLDUwMDAxNzQ4LDUwMDExMTMwLDUwMDExMTI5LDUwMDEwMTYwLDUwMDExMTYxLDUwMDExMTU5LDUwMDEwMTU5LDUwMDEwMTU4LDUwMDExMTI3LDMwMzUsNTAwMTAxNjcsNTAwMDA1NTcsNTAwMTExMjMsNTAwMTA0MDIsNTAwMDA0MzYsNTAwMTExNTMsNTAwMTE3NDAsNTAwMDY4NDMsNTAwMDY4NDIsMTI0OTQyMDA1LDUwMDEwMzY4LDUwMDExODkyLDUwMDExODk0LDUwMDIzNzUxLDEyMTM2NjAzNywxMjE0NTgwMzYsMTIxMzkyMDM4LDEyMTQyMDAzNSwxMjEzNjQwMjgsMTIxNDY4MDI2LDEyMTQwMDAyOSwxMjE0MTgwMzAsMTIxNDc4MDMxLDEyMTQ4MDAzMCwxMjEzNjYwMzUsMTIxNDI0MDI1LDEyMTQyNjAzMCwxMjE0ODQwMzAsMTIxNDEyMDMxLDEyNTA1NDAwMiwxMjUwNzQwMDcsMTI1MDc0MDA4LDEyNTEwNDAwMywxMjUwODAwMDMsMTI1MDI0MDA2LDEyNTA4MDAwNCwxMjE0MDAwMzAsMTIxNDI0MDI0LDEyMTQ4MjAyNSwxMjE0MTgwMzEsMTIxNDAyMDI4LDEyMTM4ODAzNVwiLFxyXG4gICAgXCJmaW5hbFNjb3JlXCI6IFwiNC40NjUxNjY2NjY2NjY2NjdcIixcclxuICAgIFwiX3Bvc19cIjogXCI4XCIsXHJcbiAgICBcImVudGl0eVR5cGVcIjogXCJTVUJcIixcclxuICAgIFwiYmVuZWZpdEltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMXlTTnRNWFhYWFhhbVhGWFgzYnBYVFhYWC0xNzAtMTAwLnBuZ1wiXHJcbiAgfSwge1xyXG4gICAgXCJpZFwiOiBcIjEzOTRcIixcclxuICAgIFwic2NlbmVVcmxcIjogXCJodHRwczovL3BhZ2VzLnRtYWxsLmNvbS93b3cvYWN0LzE1NjE3L3NjZW5lP2FjbT0wMzY1My4xMDAzLjEuNzQwNjAzJmFsZGlkPVZ5clNxeDA2JndoX2lkPTEzOTQmc2NtPTEwMDMuMS4wMzY1My5TVUJfMTM5NF83NDA2MDMmcG9zPTlcIixcclxuICAgIFwiX3NfXCI6IFwiZFwiLFxyXG4gICAgXCJpdGVtSW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTQvVEIxTnM4ZU1YWFhYWGIxYVhYWEtvZlpacFhYLTE4Mi0yMDYuanBnXCIsXHJcbiAgICBcInNjZW5lQ2F0XCI6IFwiNTAwMTA4NTAsNTAwMDA2NzEsMTYyMjAxLDUwMDIyNTY2LDUwMDA3MDY4LDUwMDI2NjUxLDUwMDAwODUyLDE2MjEwNCwxNjIxMTYsMTYyMjA1LDE2MjMsMTIzMjE2MDA0LDE2MjQwNCwxNjI0MDEsNTAwMTE0MTIsNTAwMTE0MTEsMTYyNDAyLDUwMDA4OTAzLDUwMDExNDEzLDE2MjQwMyw1MDAwMDY5NywxNjI5LDUwMDExMjc3LDEyMTQxMjAwNCw1MDAwODg5Nyw1MDAwODkwMSw1MDAwODg5OSw1MDAxMzE5NCw1MDAwODkwNCw1MDAwODkwNSw1MDAwODg5OCwxNjIxMDMsNTAwMDg5MDAsNTAwMTMxOTYsMTIxNDM0MDA0LDUwMDA1MDY1LDE2MjcwMiwxNjI3MDEsMTYyNzAzLDE2MzYsMTI0NzMwMDAxLDUwMDAxNzQ4LDUwMDExMTMwLDEyNDczMDAwMSw1MDAwMTc0OCw1MDAxMTEzMCw1MDAxMTEyOSw1MDAxMDE2MCw1MDAxMTE2MSw1MDAxMTE1OSw1MDAxMDE1OSw1MDAxMDE1OCw1MDAxMTEyNywzMDM1LDUwMDEwMTY3LDUwMDAwNTU3LDUwMDExMTIzLDUwMDEwNDAyLDUwMDAwNDM2LDUwMDExMTUzLDUwMDExNzQwLDUwMDA2ODQzLDUwMDA2ODQyLDEyNDk4NjAwMiw1MDAxMDM2OCwgNTAwMTE4OTIsNTAwMTE4OTQsMTIxNDgwMDMwLDEyMTM2NjAzNSwxMjE0MjQwMjUsMTIxNDI2MDMwLDEyMTQ4NDAzMCwxMjE0MTIwMzFcIixcclxuICAgIFwiZmluYWxTY29yZVwiOiBcIjQuMzA5OTI1OTI1OTI1OTI2XCIsXHJcbiAgICBcIl9wb3NfXCI6IFwiOVwiLFxyXG4gICAgXCJlbnRpdHlUeXBlXCI6IFwiU1VCXCIsXHJcbiAgICBcImJlbmVmaXRJbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMy9UQjFaRVhmTVhYWFhYYXBhWFhYM2JwWFRYWFgtMTcwLTEwMC5wbmdcIlxyXG4gIH0sIHtcclxuICAgIFwiaWRcIjogXCIxNjEwXCIsXHJcbiAgICBcInNjZW5lVXJsXCI6IFwiaHR0cHM6Ly9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy9zY2VuZT9hY209MDM2NTMuMTAwMy4xLjc0MDYwMyZhbGRpZD1WeXJTcXgwNiZ3aF9pZD0xNjEwJnNjbT0xMDAzLjEuMDM2NTMuU1VCXzE2MTBfNzQwNjAzJnBvcz0xMFwiLFxyXG4gICAgXCJfc19cIjogXCJkXCIsXHJcbiAgICBcIml0ZW1JbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMy9UQjFPTmNrTFZYWFhYYkphWFhYS29mWlpwWFgtMTgyLTIwNi5qcGdcIixcclxuICAgIFwic2NlbmVDYXRcIjogXCIxMjE0ODQwNDQsMTIxNDUyMDM4LDUwMDEyMzQyLDUwMDEyMDI3LDUwMDEyMDMyLDUwMDA2ODQzLDUwMDEwODUwLDUwMDAwNjcxLDE2MjEwNCwxNjIzLDUwMDExMjc3LDE2MjExNiwxMjMyMTYwMDQsNTAwMDg4OTgsMTIxMzY2MDM3LDEyMTQ1ODAzNiwxMjEzOTIwMzgsMTIxNDIwMDM1LDEyMTM2NDAyOCwxMjE0NjgwMjYsMTIxNDcyMDMxLDEyMTQ3NjAzNiwxMjE0NzAwNDIsMTIxNDE4MDMyLDEyMTQxMDAzNiwxMjE0NzIwMzIsMTIxNDIwMDMyLDEyMTQ3MDA0MCwxMjEzODQwMzIsMTIxNDYwMDI4LDEyMTQ0ODAyOCwxMjE0MDAwMzAsMTIxNDI0MDI0LDEyMTQ4MjAyNSwxMjE0MTgwMzEsMTIxNDAyMDI4LDEyMTM4ODAzNSwxMjE0NjAwMjksMTIxNDAwMDI4LDEyMTQwMDAyOSwxMjE0MTgwMzAsMTIxNDc2MDM0LDEyMTQ3ODAzMSwxMjE0NDgwMjksMTIxNDgwMDMwLDEyMTM2NjAzNSwxMjE0MjQwMjUsMTIxNDI2MDMwLDEyMTQ4NDAzMCwxMjE0MTIwMzEsMTIxMzg0MDMzLDEyMTQyNDAyMywxMjE0MDIwMjcsMTIxNDA4MDM5LDEyMTQyMDAzMywxMjE0NTIwMjgsMTIxNDY2MDQwLDEyMTQxNjAyOSwxMjE0ODIwMjgsMTIxNDIwMDM0LDEyMTM5NjA0NiwxMjE0MjIwNTIsMTIxMzcwMDM3LDEyMTQyNDAzMSwyMTM2NDA0MywxMjE0NzIwNDAsMTIxNDEyMDQ1LDEyMTQyNDAzMiwxMjUwNTQwMDIsMTI1MDc0MDA3LDEyNTA3NDAwOCwxMjUxMDQwMDMsMTI1MDgwMDAzLDEyNTAyNDAwNiwxMjUwODAwMDRcIixcclxuICAgIFwiZmluYWxTY29yZVwiOiBcIjQuMjkzMzMzMzMzMzMzMzM0XCIsXHJcbiAgICBcIl9wb3NfXCI6IFwiMTBcIixcclxuICAgIFwiZW50aXR5VHlwZVwiOiBcIlNVQlwiLFxyXG4gICAgXCJiZW5lZml0SW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTIvVEIxUnp3RkxWWFhYWFhzWHBYWDNicFhUWFhYLTE3MC0xMDAucG5nXCJcclxuICB9LCB7XHJcbiAgICBcImlkXCI6IFwiMTYxOVwiLFxyXG4gICAgXCJzY2VuZVVybFwiOiBcImh0dHBzOi8vcGFnZXMudG1hbGwuY29tL3dvdy9hY3QvMTU2MTcvc2NlbmU/YWNtPTAzNjUzLjEwMDMuMS43NDA2MDMmYWxkaWQ9VnlyU3F4MDYmd2hfaWQ9MTYxOSZzY209MTAwMy4xLjAzNjUzLlNVQl8xNjE5Xzc0MDYwMyZwb3M9MTFcIixcclxuICAgIFwiX3NfXCI6IFwiZFwiLFxyXG4gICAgXCJpdGVtSW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTMvVEIxZWFneUxWWFhYWGFpWEZYWEtvZlpacFhYLTE4Mi0yMDYuanBnXCIsXHJcbiAgICBcInNjZW5lQ2F0XCI6IFwiMTI0NzMwMDAxLDUwMDAxNzQ4LDUwMDExMTMwLDEyNDczMDAwMSw1MDAwMTc0OCw1MDAxMTEzMCw1MDAxMTEyOSw1MDAxMDE2MCw1MDAxMTE2MSw1MDAxMTE1OSw1MDAxMDE1OSw1MDAxMDE1OCw1MDAxMTEyNywzMDM1LDUwMDEwMTY3LDUwMDAwNTU3LDUwMDExMTIzLDUwMDEwNDAyLDUwMDAwNDM2LDUwMDExMTUzLDEyMjY1NDAwNSw1MDAxMTc0MCw1MDAwOTAzMiwxMjQ2ODgwMTLvvIwyMTMyMDIsMTIxMzk2MDI5LDEyMTQ3NjAyMywxMjE0MTAwMjksMjEzMjAzLDUwMDIzMzI2LDIxMzIwNSw1MDAyMjY4Niw1MDAyMzI5Myw1MDQ2NjAyMyw1MDAyNDk5OSw1MDAxNjg4Ne+8jDUwMDExODk0XCIsXHJcbiAgICBcImZpbmFsU2NvcmVcIjogXCI0LjIzXCIsXHJcbiAgICBcIl9wb3NfXCI6IFwiMTFcIixcclxuICAgIFwiZW50aXR5VHlwZVwiOiBcIlNVQlwiLFxyXG4gICAgXCJiZW5lZml0SW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTQvVEIxajBBeExWWFhYWGFSWEZYWDNicFhUWFhYLTE3MC0xMDAucG5nXCJcclxuICB9LCB7XHJcbiAgICBcImlkXCI6IFwiMTYxM1wiLFxyXG4gICAgXCJzY2VuZVVybFwiOiBcImh0dHBzOi8vcGFnZXMudG1hbGwuY29tL3dvdy9hY3QvMTU2MTcvc2NlbmU/YWNtPTAzNjUzLjEwMDMuMS43NDA2MDMmYWxkaWQ9VnlyU3F4MDYmd2hfaWQ9MTYxMyZzY209MTAwMy4xLjAzNjUzLlNVQl8xNjEzXzc0MDYwMyZwb3M9MTJcIixcclxuICAgIFwiX3NfXCI6IFwiZFwiLFxyXG4gICAgXCJpdGVtSW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTIvVEIxV3NzRkxWWFhYWFhVWHBYWEtvZlpacFhYLTE4Mi0yMDYuanBnXCIsXHJcbiAgICBcInNjZW5lQ2F0XCI6IFwiNTAwMjMxMDgsNTAwMjI4OTMsNTAwMjI4OTIsNTAwMjI4OTAsNTAwMTMyMjgsNTAwMTk1MjAsNTAwMTcxMjAsNTAwMTk1NjAsNTAwMTcxMjksNTAwMTcxMjgsNTAwMTcxMjcsNTAwMTcxMjYsNTAwMTcxMjUsNTAwMTcxMjQsNTAwMTcxMjMsNTAwMTcxMjIsNTAwMTcxMjEsNTAwMjAwMzksNTAwMjAwMzgsNTAwMTcxMTksNTAwMTk1NTksNTAwMTcxMTAsNTAwMTcxMDgsNTAwMTcxMDcsNTAwMTcwOTcsNTAwMTcwOTYsNTAwMTcwOTUsNTAwMTcwOTQsNTAwMTcwOTMsNTAwMTcwOTIsNTAwMTIwMzYsNTAwMTIwNDFcIixcclxuICAgIFwiZmluYWxTY29yZVwiOiBcIjQuMjE4NjY2NjY2NjY2NjY3NVwiLFxyXG4gICAgXCJfcG9zX1wiOiBcIjEyXCIsXHJcbiAgICBcImVudGl0eVR5cGVcIjogXCJTVUJcIixcclxuICAgIFwiYmVuZWZpdEltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMVJnLnFMVlhYWFhicVhWWFgzYnBYVFhYWC0xNzAtMTAwLnBuZ1wiXHJcbiAgfSwge1xyXG4gICAgXCJpZFwiOiBcIjE2MTRcIixcclxuICAgIFwic2NlbmVVcmxcIjogXCJodHRwczovL3BhZ2VzLnRtYWxsLmNvbS93b3cvYWN0LzE1NjE3L3NjZW5lP2FjbT0wMzY1My4xMDAzLjEuNzQwNjAzJmFsZGlkPVZ5clNxeDA2JndoX2lkPTE2MTQmc2NtPTEwMDMuMS4wMzY1My5TVUJfMTYxNF83NDA2MDMmcG9zPTEzXCIsXHJcbiAgICBcIl9zX1wiOiBcImRcIixcclxuICAgIFwiaXRlbUltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMUt6VXhMVlhYWFhhalhGWFhLb2ZaWnBYWC0xODItMjA2LmpwZ1wiLFxyXG4gICAgXCJzY2VuZUNhdFwiOiBcIjUwMDEzMjM4LDUwMDExNzI2LDUwMDIyODkzLDUwMDIyODkyLDUwMDIyODkwLDUwMDEzMjI4LDUwMDE3MTI5LDUwMDIwMDM4LDUwMDE3MTE5LDUwMDE5NTU5LDUwMDE3MTAyLDUwMDE3MTEwLDUwMDE3MDk3LDUwMDE5NzA3LDUwMDE5NTU1LDUwMDE2Njc3LDUwMDE4MzE3LDUwMDE2Njc1LDUwMDE2NjczLDUwMDE2NjcyLDUwMDE2NjcxLDUwMDE2NjcwLDUwMDE2NzMyLDUwMDE2NjY5LDUwMDE2NjY4LDUwMDE2NjY3LDUwMDE2NjY2LDUwMDE2NjY1LDUwMDE2NjgzLDUwMDE2NjgyLDUwMDE2NjA4LDUwMDE2NjA3LDUwMDE2NjM3LDUwMDE2NjM4LDUwMDEyMDM2LDUwMDEyMDQzXCIsXHJcbiAgICBcImZpbmFsU2NvcmVcIjogXCI0LjIxNlwiLFxyXG4gICAgXCJfcG9zX1wiOiBcIjEzXCIsXHJcbiAgICBcImVudGl0eVR5cGVcIjogXCJTVUJcIixcclxuICAgIFwiYmVuZWZpdEltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kyL1RCMVd5b3VMVlhYWFhYY1hWWFgzYnBYVFhYWC0xNzAtMTAwLnBuZ1wiXHJcbiAgfSwge1xyXG4gICAgXCJpZFwiOiBcIjEzOTdcIixcclxuICAgIFwic2NlbmVVcmxcIjogXCJodHRwczovL3BhZ2VzLnRtYWxsLmNvbS93b3cvYWN0LzE1NjE3L3NjZW5lP2FjbT0wMzY1My4xMDAzLjEuNzQwNjAzJmFsZGlkPVZ5clNxeDA2JndoX2lkPTEzOTcmc2NtPTEwMDMuMS4wMzY1My5TVUJfMTM5N183NDA2MDMmcG9zPTE0XCIsXHJcbiAgICBcIl9zX1wiOiBcImRcIixcclxuICAgIFwiaXRlbUltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2k0L1RCMWRDeHZNWFhYWFhjMVhwWFhLb2ZaWnBYWC0xODItMjA2LmpwZ1wiLFxyXG4gICAgXCJzY2VuZUNhdFwiOiBcIjEyMjg0NjAwNCw1MDAyMDc3Niw1MDAyNDc5OSw1MDAyNDgwMSw1MDAyNDkyMSw1MDAwMjc5NCw1MDAyMDc3OCw1MDAwMjc5Miw1MDAwMjc5MSw1MDAwMjc5Myw1MDAwMzk0Miw1MDAwNTUwMCw1MDAwNTQ5Nyw1MDAwMTY5Miw1MDAwNTQ5NSw1MDAwNTQ5Niw1MDAwNTUwMyw1MDAwNTQ5OCw1MDAwNTQ5OSw1MDAwNTUwMSw1MDAwNTUwMiw1MDAwMzQ1NSw1MDAwMzQ1NywxMjI5MDQwMDMsNTAwMjMwOTEsNTAwMjA3NzAsNTAwMDg4NjMsNTAwMDU1MDcsMTIxNDE0MDExLDUwMDIwNzY4LDUwMDIyNzAxLDUwMDA4ODYyLDEyMTQyMDAxMiw1MDAyMDc2Niw1MDAyMDc2NCwxMjEzOTgwMTIsMTIxMzgwMDExLDUwMDIwNzUxLDUwMDIwNjc2LDUwMDI0OTQ1LDUwMDIwNzIwLDUwMDAyNzkwLDUwMDIwNzMwLDUwMDAxODY2LDUwMDIwNjc4LDEyMTQ3NjAwOCwxMjE0NTgwMTMsNTAwMDI3OTUsMTIxMzY0MDExLDUwMDA1NTA1LDEyMTQyMjAxNCw1MDAyNDk0Myw1MDAwMDU4Myw1MDAwMDU4Miw1MDAwMDU4NCwyMTMwMDIsNTAwMDUwMzMsNTAwMDA1NjMsNTAwMDg2MDcsNTAwMDY5ODgsNTAwMDg2MDgsNTAwMjQ2MDEsNTAwMjQ2MDIsNTAwMTIwNTEsNTAwMDE4NzEsMTIyODU0MDA1LDEyMTQ1ODAxMCwxMjE0NTIwMDYsMTIxNDE2MDA4LDUwMDA4Nzc5LDUwMDAyNzc3LDEyMTM5NDAwNywxMjEzODYwMDksNTAwMTA4MjUsNTAwMTM4MTAsMTIxNDM0MDEwLDUwMDAxODY1LDUwMDA4NTY1LDUwMDA4MjQ2LDUwMDE3MTkyLDEyMTQwNDA0NSwxMjEzNjgwMDksMTIxNDYyMDE0LDUwMDE5MzcyLDUwMDA4MjQ4LDEyMTQxODAxMSw1MDAwODI0OSw1MDAxNzE5Myw1MDAwODI1Miw1MDAwODI1MSw1MDAwMDUxMiwxMjEzNjQwNDcsMTIyODQ2MDA0LDUwMDIwNzc2LDUwMDI0Nzk5LDUwMDI0ODAxLDUwMDI0OTIxLDUwMDAyNzk0LDUwMDIwNzc4LDUwMDAyNzkyLDUwMDAyNzkxLDUwMDAyNzkzLDUwMDAzOTQyLDUwMDA1NTAwLDUwMDA1NDk3LDUwMDAxNjkyLDUwMDA1NDk1LDUwMDA1NDk2LDUwMDA1NTAzLDUwMDA1NDk4LDUwMDA1NDk5LDUwMDA1NTAxLDUwMDA1NTAyLDUwMDAzNDU1LDUwMDAzNDU3LDEyMjkwNDAwMyw1MDAyMzA5MSw1MDAyMDc3MCw1MDAwODg2Myw1MDAwNTUwNywxMjE0MTQwMTEsNTAwMjA3NjgsNTAwMjI3MDEsNTAwMDg4NjIsMTIxNDIwMDEyLDUwMDIwNzY2LDUwMDIwNzY0LDEyMTM5ODAxMiwxMjEzODAwMTEsNTAwMjA3NTEsNTAwMjA2NzYsNTAwMjQ5NDUsNTAwMjA3MjAsNTAwMDI3OTAsNTAwMjA3MzAsNTAwMDE4NjYsNTAwMjA2NzgsMTIxNDc2MDA4LDEyMTQ1ODAxMyw1MDAwMjc5NSwxMjEzNjQwMTEsNTAwMDU1MDUsMTIxNDIyMDE0LDUwMDI0OTQzLDUwMDAwNTgzLDUwMDAwNTgyLDUwMDAwNTg0LDIxMzAwMiw1MDAwNTAzMyw1MDAwMDU2Myw1MDAwODYwNyw1MDAwNjk4OCw1MDAwODYwOCw1MDAyNDYwMSw1MDAyNDYwMiw1MDAxMjA1MSw1MDAyMDgzNSw1MDAyMTkwNywxMjE0NzIwMjEsNTAwMjE5MDIsNTAwMDU5MTksNTAwMDIwNDUsMTIyNzI0MDAzLDEyMjY1MjAwNywxMjE0MDgwMjUsMTIyNjg4MDA0LDUwMDIxOTI0LDUwMDIxOTIzLDUwMDAwNTYxLDUwMDExNzM4LDEyMjY3NjAwNSwxMjEzOTYwMjYsMTIxMzg4MDI4LDUwMDAzMzM4LDUwMDIxOTE1LDUwMDExNDE1LDUwMDExNDE2LDUwMDAzNDU0LDUwMDIxOTI4LDUwMDIxOTMwLDUwMDIxOTI5LDUwMDIxOTMxLDUwMDI0OTM5LDEyMTM4NDAyNCwxMjE0NzIwMjAsNTAwMjA5MDIsNTAwMjA5MDMsNTAwMjA5MDQsNTAwMjA5MDUsNTAwMjE4ODgsNTAwMjE4ODksNTAwMjE4OTAsNTAwMjMyNjYsMTIyOTYwMDA1LDUwMDEyMDAxLDUwMDExOTk5LDUwMDEyMDA0LDUwMDEyMDAwLDUwMDEyMDA2LDEyMTM5NDAyNCwxMjE0MTIwMzMsMTIxMzk0MDI1LDEyMTQ1MDAzNiwxMjE0NzIwMDcsMTIxNDgwMDA5LDEyMTM4ODAxMywxMjE0NjYwMDksMTIxNDg0MDEyLDEyMTM2NjAxNCwxMjE0MzQwMTQsMTIxNDIyMDEyLDEyMTQ3NjAwNiwxMjEzOTYwMTMsNTAwMTE5OTcsMTIxNDM0MDEzLDEyMjY0NjAwMSwxMjE0NTgwMTIsMTIxNDY4MDEyLDEyMTM2ODAxMyw1MDAxMTk3OSwxMjEzNjYwMTUsMTIxNDA2MDE2LDEyMTQ1NjAxMiwxMjEzNjYwMTEsMTIxNDE0MDEwLDEyMTQ2MDAwNiwxMjEzNjgwMTQsMTIxMzg4MDE2LDEyMTM5NjAxMywxMjE0MDAwMTAsMTIxNDcwMDExLDEyMTQ3NDAxMSwxMjE0NzgwMDksMTI0NzYwMDA5LDEyNDc2ODAxMCwxMjQ4MjIwMDYsMTIxNDgyMDA5LDEyMjQzMDAwMiwxMjE0NTQwMTQsMTIxMzkyMDE277yMNTAwMDE4NzEsMTIyODU0MDA1LDEyMTQ1ODAxMCwxMjE0NTIwMDYsMTIxNDE2MDA4LDUwMDA4Nzc5LDUwMDAyNzc3LDEyMTM5NDAwNywxMjEzODYwMDksNTAwMTA4MjUsNTAwMTM4MTAsMTIxNDM0MDEwLDUwMDAxODY1LDUwMDA4NTY1LDUwMDA4MjQ2LDUwMDE3MTkyLDEyMTQwNDA0NSwxMjEzNjgwMDksMTIxNDYyMDE0LDUwMDE5MzcyLDUwMDA4MjQ4LDEyMTQxODAxMSw1MDAwODI0OSw1MDAxNzE5Myw1MDAwODI1Miw1MDAwODI1MSw1MDAwMDUxMiwxMjEzNjQwNDcsMTIyODQ2MDA0LDUwMDIwNzc2LDUwMDI0Nzk5LDUwMDI0ODAxLDUwMDI0OTIxLDUwMDAyNzk0LDUwMDIwNzc4LDUwMDAyNzkyLDUwMDAyNzkxLDUwMDAyNzkzLDUwMDAzOTQyLDUwMDA1NTAwLDUwMDA1NDk3LDUwMDAxNjkyLDUwMDA1NDk1LDUwMDA1NDk2LDUwMDA1NTAzLDUwMDA1NDk4LDUwMDA1NDk5LDUwMDA1NTAxLDUwMDA1NTAyLDUwMDAzNDU1LDUwMDAzNDU3LDEyMjkwNDAwMyw1MDAyMzA5MSw1MDAyMDc3MCw1MDAwODg2Myw1MDAwNTUwNywxMjE0MTQwMTEsNTAwMjA3NjgsNTAwMjI3MDEsNTAwMDg4NjIsMTIxNDIwMDEyLDUwMDIwNzY2LDUwMDIwNzY0LDEyMTM5ODAxMiwxMjEzODAwMTEsNTAwMjA3NTEsNTAwMjA2NzYsNTAwMjQ5NDUsNTAwMjA3MjAsNTAwMDI3OTAsNTAwMjA3MzAsNTAwMDE4NjYsNTAwMjA2NzgsMTIxNDc2MDA4LDEyMTQ1ODAxMyw1MDAwMjc5NSwxMjEzNjQwMTEsNTAwMDU1MDUsMTIxNDIyMDE0LDUwMDI0OTQzLDUwMDAwNTgzLDUwMDAwNTgyLDUwMDAwNTg0LDIxMzAwMiw1MDAwNTAzMyw1MDAwMDU2Myw1MDAwODYwNyw1MDAwNjk4OCw1MDAwODYwOCw1MDAyNDYwMSw1MDAyNDYwMiw1MDAxMjA1MVwiLFxyXG4gICAgXCJmaW5hbFNjb3JlXCI6IFwiMy40MjA2NjY2NjY2NjY2NjY1XCIsXHJcbiAgICBcIl9wb3NfXCI6IFwiMTRcIixcclxuICAgIFwiZW50aXR5VHlwZVwiOiBcIlNVQlwiLFxyXG4gICAgXCJiZW5lZml0SW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTMvVEIxWkFSbk1YWFhYWGFHWFZYWDNicFhUWFhYLTE3MC0xMDAucG5nXCJcclxuICB9LCB7XHJcbiAgICBcImlkXCI6IFwiMTYwOFwiLFxyXG4gICAgXCJzY2VuZVVybFwiOiBcImh0dHBzOi8vcGFnZXMudG1hbGwuY29tL3dvdy9hY3QvMTU2MTcvc2NlbmU/YWNtPTAzNjUzLjEwMDMuMS43NDA2MDMmYWxkaWQ9VnlyU3F4MDYmd2hfaWQ9MTYwOCZzY209MTAwMy4xLjAzNjUzLlNVQl8xNjA4Xzc0MDYwMyZwb3M9MTVcIixcclxuICAgIFwiX3NfXCI6IFwiZFwiLFxyXG4gICAgXCJpdGVtSW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTMvVEIxeEEzakxWWFhYWFhxYXBYWEtvZlpacFhYLTE4Mi0yMDYuanBnXCIsXHJcbiAgICBcInNjZW5lQ2F0XCI6IFwiNTAwMTIwMTAsNTAwMTIwMjcsNTAwMTIwMzIsNTAwMDcwMDMsNTAwMDg4ODEsNTAwMDg4ODMsMTYyMywxNjIxMTYsNTAwMTA4NTAsMTIzMjE2MDA0XCIsXHJcbiAgICBcImZpbmFsU2NvcmVcIjogXCIwLjBcIixcclxuICAgIFwiX3Bvc19cIjogXCIxNVwiLFxyXG4gICAgXCJlbnRpdHlUeXBlXCI6IFwiU1VCXCIsXHJcbiAgICBcImJlbmVmaXRJbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMi9UQjFXdm9BTFZYWFhYY2RYcFhYM2JwWFRYWFgtMTcwLTEwMC5wbmdcIlxyXG4gIH1dXHJcblxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBiYW5uZXI6IHJlcXVpcmUoJy4vYmFubmVyLnZ1ZScpXHJcbiAgICB9LFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZHM6IHtcclxuICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4ge31cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgTlVNQkVSXzE4NjogMTg2LFxyXG4gICAgICAgIE5VTUJFUl8yMDY6IDIwNixcclxuICAgICAgICBOVU1CRVJfMzczOiAzNzMsXHJcbiAgICAgICAgTlVNQkVSXzIzMDogMjMwLFxyXG4gICAgICAgIE5VTUJFUl8xNzA6IDE3MCxcclxuICAgICAgICBOVU1CRVJfMTAwOiAxMDAsXHJcbiAgICAgICAgTlVNQkVSXzc1MDogNzUwLFxyXG4gICAgICAgIE5VTUJFUl8zMDA6IDMwMCxcclxuICAgICAgICBOVU1CRVJfMzQwOiAzNDAsXHJcbiAgICAgICAgc21hbGxJdGVtQmc6ICdodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMW9CSWVMVlhYWFhhdFhwWFhYWFhYWFhYWC0zNzMtMjMwLmpwZycsXHJcbiAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgIHNtYWxsSXRlbXM6IFtdLFxyXG4gICAgICAgIHNjZW5lQmdzOiBbXHJcbiAgICAgICAgICAnaHR0cHM6Ly9ndy5hbGljZG4uY29tL3Rwcy9UQjF4QlQ4TFZYWFhYYllYVlhYWFhYWFhYWFgtNzUwLTM0MC5qcGcnLFxyXG4gICAgICAgICAgJ2h0dHBzOi8vZ3cuYWxpY2RuLmNvbS90cHMvVEIxUm9Fa0xWWFhYWGFNWHBYWFhYWFhYWFhYLTc1MC0zNDAuanBnJyxcclxuICAgICAgICAgICdodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL1RCMURpRXBMVlhYWFhhN1hYWFhYWFhYWFhYWC03NTAtMzQwLmpwZydcclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuaXRlbXMgPSBkZW1vQ29udGVudC5zbGljZSgwLCAzKTtcclxuICAgICAgdGhpcy5zbWFsbEl0ZW1zID0gZGVtb0NvbnRlbnQuc2xpY2UoMyk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBnZXRJdGVtVG9wOiBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgIHJldHVybiAoaSAtIGkgJSAyKSAvIDIgKiAoMjMwICsgNCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdldEl0ZW1MZWZ0OiBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgIHJldHVybiBpICUgMiAqICgzNzMgKyA0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzY2VuZS52dWU/MDdmYTE3YzMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFsoX3ZtLmRzLmZsb29yVGl0bGUpID8gX2MoJ2ltYWdlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS5kcy5mbG9vclRpdGxlXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNtYWxsLWl0ZW0tY29udGFpbmVyXCIsXG4gICAgc3R5bGU6ICh7XG4gICAgICBoZWlnaHQ6IE1hdGgucm91bmQoX3ZtLnNtYWxsSXRlbXMubGVuZ3RoIC8gMikgKiAyMzRcbiAgICB9KVxuICB9LCBfdm0uX2woKF92bS5zbWFsbEl0ZW1zKSwgZnVuY3Rpb24oaSwgaXRlbSkge1xuICAgIHJldHVybiBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwic21hbGwtaXRlbVwiLFxuICAgICAgc3R5bGU6ICh7XG4gICAgICAgIHRvcDogX3ZtLmdldEl0ZW1Ub3AoaSksXG4gICAgICAgIGxlZnQ6IF92bS5nZXRJdGVtTGVmdChpKVxuICAgICAgfSlcbiAgICB9LCBbX2MoJ2RpdicsIFtfYygnaW1hZ2UnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJzbWFsbC1pdGVtLWJnXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNyY1wiOiBfdm0uc21hbGxJdGVtQmdcbiAgICAgIH1cbiAgICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwic21hbGwtaXRlbS1pbWdcIlxuICAgIH0sIFtfYygnYmFubmVyJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ3aWR0aFwiOiBfdm0uTlVNQkVSXzE4NixcbiAgICAgICAgXCJoZWlnaHRcIjogX3ZtLk5VTUJFUl8yMDYsXG4gICAgICAgIFwic3JjXCI6IGl0ZW0uaXRlbUltZyxcbiAgICAgICAgXCJocmVmXCI6IGl0ZW0uc2NlbmVVcmxcbiAgICAgIH1cbiAgICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwic21hbGwtYmVuaWZpdC1pbWdcIlxuICAgIH0sIFtfYygnYmFubmVyJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ3aWR0aFwiOiBfdm0uTlVNQkVSXzE3MCxcbiAgICAgICAgXCJoZWlnaHRcIjogX3ZtLk5VTUJFUl8xMDAsXG4gICAgICAgIFwic3JjXCI6IGl0ZW0uYmVuZWZpdEltZyxcbiAgICAgICAgXCJocmVmXCI6IGl0ZW0uc2NlbmVVcmxcbiAgICAgIH1cbiAgICB9KV0sIDEpXSlcbiAgfSkpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNGNiMTUwMGVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTRjYjE1MDBlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvc2hvd2Nhc2UvaW5jbHVkZS9zY2VuZS52dWVcbi8vIG1vZHVsZSBpZCA9IDE4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDU1IiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi1kMWE2NTY5YyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL21hdGNoLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9tYXRjaC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtZDFhNjU2OWMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL21hdGNoLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTpcXFxcd2Vla1N0dWR5XFxcXHdlZXgyXFxcXHdlZXgzXFxcXHNyY1xcXFxzaG93Y2FzZVxcXFxpbmNsdWRlXFxcXG1hdGNoLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIG1hdGNoLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1kMWE2NTY5Y1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWQxYTY1NjljXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaG93Y2FzZS9pbmNsdWRlL21hdGNoLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTgyXG4vLyBtb2R1bGUgY2h1bmtzID0gNTUiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxpbWFnZSB2LWlmPVwiZHMuZmxvb3JUaXRsZVwiIGNsYXNzPVwidGl0bGVcIiA6c3JjPVwiZHMuZmxvb3JUaXRsZVwiPjwvaW1hZ2U+XHJcbiAgICA8ZGl2IGNsYXNzPVwidG0tYmFubmVyXCIgdi1pZj1cImRzLmlzU2hvd1RtU3BlY0Jhbm5lciAmJiBkcy50bVNwZWNCYW5uZXJcIj5cclxuICAgICAgPGJhbm5lciA6d2lkdGg9XCJOVU1CRVJfNzUwXCIgOmhlaWdodD1cIk5VTUJFUl8yMDBcIiA6c3JjPVwiZHMudG1TcGVjQmFubmVyLmltZ1wiIDpocmVmPVwiZHMudG1TcGVjQmFubmVyLnVybFwiPjwvYmFubmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHYtZm9yPVwiaXRlbSBpbiBkcy5iYW5uZXJJdGVtc1wiIDpzdHlsZT1cInsgZmxleERpcmVjdGlvbjogJ3JvdycsIG1hcmdpbkJvdHRvbTogTlVNQkVSXzQgfVwiPlxyXG4gICAgICA8ZGl2IDpzdHlsZT1cInsgbWFyZ2luUmlnaHQ6IE5VTUJFUl80IH1cIj5cclxuICAgICAgICA8YmFubmVyIDp3aWR0aD1cIk5VTUJFUl8zNzNcIiA6aGVpZ2h0PVwiTlVNQkVSXzI0MFwiIDpzcmM9XCJpdGVtLmxlZnRJbWdcIiA6aHJlZj1cIml0ZW0ubGVmdFVybFwiPjwvYmFubmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YmFubmVyIDp3aWR0aD1cIk5VTUJFUl8zNzNcIiA6aGVpZ2h0PVwiTlVNQkVSXzI0MFwiIDpzcmM9XCJpdGVtLnJpZ2h0SW1nXCIgOmhyZWY9XCJpdGVtLnJpZ2h0VXJsXCI+PC9iYW5uZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGU+XHJcbiAgLnRpdGxlIHtcclxuICAgIHdpZHRoOiA3NTA7XHJcbiAgICBoZWlnaHQ6IDEwMDtcclxuICB9XHJcbiAgLnRtLWJhbm5lcntcclxuICAgIGJvdHRvbTo0O1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIGJhbm5lcjogcmVxdWlyZSgnLi9iYW5uZXIudnVlJylcclxuICAgIH0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBkczoge1xyXG4gICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiB7fVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBOVU1CRVJfNzUwOiA3NTAsXHJcbiAgICAgICAgTlVNQkVSXzM3MzogMzczLFxyXG4gICAgICAgIE5VTUJFUl8yNDA6IDI0MCxcclxuICAgICAgICBOVU1CRVJfMjAwOiAyMDAsXHJcbiAgICAgICAgTlVNQkVSXzQ6IDRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtYXRjaC52dWU/MzRjZmExMzkiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFsoX3ZtLmRzLmZsb29yVGl0bGUpID8gX2MoJ2ltYWdlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS5kcy5mbG9vclRpdGxlXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmRzLmlzU2hvd1RtU3BlY0Jhbm5lciAmJiBfdm0uZHMudG1TcGVjQmFubmVyKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidG0tYmFubmVyXCJcbiAgfSwgW19jKCdiYW5uZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwid2lkdGhcIjogX3ZtLk5VTUJFUl83NTAsXG4gICAgICBcImhlaWdodFwiOiBfdm0uTlVNQkVSXzIwMCxcbiAgICAgIFwic3JjXCI6IF92bS5kcy50bVNwZWNCYW5uZXIuaW1nLFxuICAgICAgXCJocmVmXCI6IF92bS5kcy50bVNwZWNCYW5uZXIudXJsXG4gICAgfVxuICB9KV0sIDEpIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLmRzLmJhbm5lckl0ZW1zKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnZGl2Jywge1xuICAgICAgc3R5bGU6ICh7XG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICBtYXJnaW5Cb3R0b206IF92bS5OVU1CRVJfNFxuICAgICAgfSlcbiAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0eWxlOiAoe1xuICAgICAgICBtYXJnaW5SaWdodDogX3ZtLk5VTUJFUl80XG4gICAgICB9KVxuICAgIH0sIFtfYygnYmFubmVyJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ3aWR0aFwiOiBfdm0uTlVNQkVSXzM3MyxcbiAgICAgICAgXCJoZWlnaHRcIjogX3ZtLk5VTUJFUl8yNDAsXG4gICAgICAgIFwic3JjXCI6IGl0ZW0ubGVmdEltZyxcbiAgICAgICAgXCJocmVmXCI6IGl0ZW0ubGVmdFVybFxuICAgICAgfVxuICAgIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2Jhbm5lcicsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwid2lkdGhcIjogX3ZtLk5VTUJFUl8zNzMsXG4gICAgICAgIFwiaGVpZ2h0XCI6IF92bS5OVU1CRVJfMjQwLFxuICAgICAgICBcInNyY1wiOiBpdGVtLnJpZ2h0SW1nLFxuICAgICAgICBcImhyZWZcIjogaXRlbS5yaWdodFVybFxuICAgICAgfVxuICAgIH0pXSwgMSldKVxuICB9KV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWQxYTY1NjljXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1kMWE2NTY5YyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3Nob3djYXNlL2luY2x1ZGUvbWF0Y2gudnVlXG4vLyBtb2R1bGUgaWQgPSAxODRcbi8vIG1vZHVsZSBjaHVua3MgPSA1NSIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNDNhNjk1NzQhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9icmFuZC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYnJhbmQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTQzYTY5NTc0IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9icmFuZC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6XFxcXHdlZWtTdHVkeVxcXFx3ZWV4MlxcXFx3ZWV4M1xcXFxzcmNcXFxcc2hvd2Nhc2VcXFxcaW5jbHVkZVxcXFxicmFuZC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBicmFuZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDNhNjk1NzRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00M2E2OTU3NFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hvd2Nhc2UvaW5jbHVkZS9icmFuZC52dWVcbi8vIG1vZHVsZSBpZCA9IDE4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDU1IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgIDxpbWFnZSB2LWlmPVwiZHMuZmxvb3JUaXRsZVwiIGNsYXNzPVwidGl0bGVcIiA6c3JjPVwiZHMuZmxvb3JUaXRsZVwiPjwvaW1hZ2U+XHJcbiAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLWxlZnQ6NDttYXJnaW4tcmlnaHQ6NFwiPlxyXG4gICAgICA8YmFubmVycyBkaXJlY3Rpb249XCJjb2x1bW5cIiA6ZHM9XCJiYW5uZXJJdGVtc1wiIDp3aWR0aD1cIk5VTUJFUl83NDJcIiA6aGVpZ2h0PVwiTlVNQkVSXzIzMFwiIDpzcGFjZT1cIk5VTUJFUl80XCI+PC9iYW5uZXJzPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzdHlsZT5cclxuICAudGl0bGUge1xyXG4gICAgd2lkdGg6IDc1MDtcclxuICAgIGhlaWdodDogMTAwO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojQzBCQUJDO1xyXG4gIH1cclxuPC9zdHlsZT5cclxuPHNjcmlwdD5cclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgYmFubmVyczogcmVxdWlyZSgnLi9iYW5uZXJzLnZ1ZScpXHJcbiAgICB9LFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZHM6IHtcclxuICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBiYW5uZXJJdGVtczogW11cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgTlVNQkVSXzc0MjogNzQyLFxyXG4gICAgICAgIE5VTUJFUl8yMzA6IDIzMCxcclxuICAgICAgICBOVU1CRVJfNDogNFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgYmFubmVySXRlbXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kcy5iYW5uZXJJdGVtcy5zbGljZSgwLDgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgYmFubmVySXRlbXMgPSB0aGlzLmRzLmJhbm5lckl0ZW1zXHJcbiAgICAgIGJhbm5lckl0ZW1zLnNvcnQoZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKS0wLjU7XHJcbiAgICAgIH0pO1xyXG4gICAgICBmb3IodmFyIGk9MDtpPGJhbm5lckl0ZW1zLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIHZhciBpdGVtID0gIGJhbm5lckl0ZW1zW2ldO1xyXG4gICAgICAgIGlmKGklMj09PTApe1xyXG4gICAgICAgICAgaXRlbS5pbWcgPSBpdGVtLmxlZnRJbWc7XHJcbiAgICAgICAgICBpdGVtLnVybCA9IGl0ZW0ucmlnaHRVcmw7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBpdGVtLmltZyA9IGl0ZW0ucmlnaHRJbWc7XHJcbiAgICAgICAgICBpdGVtLnVybCA9IGl0ZW0ucmlnaHRVcmw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGJyYW5kLnZ1ZT81YWRlYzAxYyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFsoX3ZtLmRzLmZsb29yVGl0bGUpID8gX2MoJ2ltYWdlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS5kcy5mbG9vclRpdGxlXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpbi1sZWZ0XCI6IFwiNFwiLFxuICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfYygnYmFubmVycycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICAgIFwiZHNcIjogX3ZtLmJhbm5lckl0ZW1zLFxuICAgICAgXCJ3aWR0aFwiOiBfdm0uTlVNQkVSXzc0MixcbiAgICAgIFwiaGVpZ2h0XCI6IF92bS5OVU1CRVJfMjMwLFxuICAgICAgXCJzcGFjZVwiOiBfdm0uTlVNQkVSXzRcbiAgICB9XG4gIH0pXSwgMSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi00M2E2OTU3NFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNDNhNjk1NzQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9zaG93Y2FzZS9pbmNsdWRlL2JyYW5kLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg3XG4vLyBtb2R1bGUgY2h1bmtzID0gNTUiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3Njcm9sbGVyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ3JlZnJlc2gnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicmVmcmVzaFwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImZsZXgtZGlyZWN0aW9uXCI6IFwicm93XCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc3BsYXlcIjogX3ZtLmRpc3BsYXlSZWZyZXNoXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJyZWZyZXNoXCI6IF92bS5oYW5kbGVSZWZyZXNoXG4gICAgfVxuICB9LCBbX2MoJ2xvYWRpbmctaW5kaWNhdG9yJyksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpbi1sZWZ0XCI6IFwiMzZweFwiLFxuICAgICAgXCJjb2xvclwiOiBcIiNlZWVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIuS4i+aLieWIt+aWsC4uLlwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIChfdm0uc2hvdzApID8gX2MoJ2hlYWRsaW5lcycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkc1wiOiBfdm0uc2hvd0RhdGEuaGVhZGVyXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnNob3cwKSA/IF9jKCdjYXRlZ29yeScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkc1wiOiBfdm0uc2hvd0RhdGEuY2F0ZWdvcnlcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uc2hvdzEpID8gX2MoJ2NvdXBvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkc1wiOiBfdm0uc2hvd0RhdGEuY291cG9uXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnNob3cxKSA/IF9jKCdnb29kcycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkc1wiOiBfdm0uc2hvd0RhdGEuZ29vZHNcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uc2hvdzEpID8gX2MoJ3Jlc291cmNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRzXCI6IF92bS5zaG93RGF0YS5yZXNvdXJjZVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5zaG93MSkgPyBfYygnc2NlbmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZHNcIjogX3ZtLnNob3dEYXRhLnNjZW5lXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnNob3cyKSA/IF9jKCdtYXRjaCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkc1wiOiBfdm0uc2hvd0RhdGEubWF0Y2hcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uc2hvdzIpID8gX2MoJ2JyYW5kJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRzXCI6IF92bS5zaG93RGF0YS5icmFuZFxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xvYWRpbmcnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZ1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc3BsYXlcIjogX3ZtLmRpc3BsYXlMb2FkaW5nXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJsb2FkaW5nXCI6IF92bS5oYW5kbGVMb2FkaW5nXG4gICAgfVxuICB9LCBbX2MoJ3RleHQnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiY29sb3JcIjogXCIjZWVlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCLliqDovb3mm7TlpJouLi5cIildKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZjllYjBiYzJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWY5ZWIwYmMyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvc2hvd2Nhc2UvbmV3LWZhc2hpb24udnVlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDE4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDU1Il0sInNvdXJjZVJvb3QiOiIifQ==