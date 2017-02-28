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
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter?id=data-v-457da1a1!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./category.vue?entry=true\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(142),
	  /* template */
	  __webpack_require__(143),
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

/***/ 142:
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

/***/ 143:
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

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQ/ZWQ2NCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvc2hvd2Nhc2UvaW5jbHVkZS9jYXRlZ29yeS52dWU/ZTNlMSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzP2Q0ZjMqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nob3djYXNlL2luY2x1ZGUvYmFubmVyLnZ1ZT8xMmVlKioiLCJ3ZWJwYWNrOi8vL2Jhbm5lci52dWU/MmZhOCoqIiwid2VicGFjazovLy8uL3NyYy9zaG93Y2FzZS9pbmNsdWRlL2Jhbm5lci52dWU/NjE3YyoqIiwid2VicGFjazovLy9jYXRlZ29yeS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nob3djYXNlL2luY2x1ZGUvY2F0ZWdvcnkudnVlPzY3NGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3JDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBK0UsaURBQWlELElBQUk7QUFDcEksb0NBQW1DOztBQUVuQztBQUNBLGFBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOERBQTZEO0FBQzdEO0FBQ0E7QUFDQSxvQ0FBbUM7QUFDbkMsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUErRSxpREFBaUQsSUFBSTtBQUNwSSxvQ0FBbUM7O0FBRW5DO0FBQ0EsYUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxFQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7cUNBRUE7cUJBQ0E7O2dCQUdBO0FBRkE7QUFHQTs7K0JBRUE7O2tCQUVBO21CQUVBO0FBSEE7QUFLQTtBQVBBO0FBUEEsRzs7Ozs7OztBQ1BBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNnRUE7OzthQUlBO2lCQUNBO3FCQUNBO2tCQUNBO3FCQUNBO2tCQUNBO0FBTkE7YUFRQTtpQkFDQTtxQkFDQTtrQkFDQTtxQkFDQTtrQkFDQTtBQU5BO2FBUUE7aUJBQ0E7cUJBQ0E7a0JBQ0E7cUJBQ0E7a0JBQ0E7QUFOQTthQVFBO2lCQUNBO3FCQUNBO2tCQUNBO3FCQUNBO2tCQUVBO0FBUEE7bUJBUUE7b0JBQ0E7bUJBQ0E7ZUFDQTtzQkFDQTtrQkFDQTtzQkFDQTtjQUNBO3dCQUNBO21CQUNBO29CQUNBO3VCQUNBO0FBekNBOzthQTRDQTtpQkFDQTtxQkFDQTtrQkFDQTtxQkFDQTtrQkFDQTtBQU5BO2FBUUE7aUJBQ0E7cUJBQ0E7a0JBQ0E7cUJBQ0E7a0JBQ0E7QUFOQTthQVFBO2lCQUNBO3FCQUNBO2tCQUNBO3FCQUNBO2tCQUNBO0FBTkE7YUFRQTtpQkFDQTtxQkFDQTtrQkFDQTtxQkFDQTtrQkFFQTtBQVBBO21CQVFBO29CQUNBO21CQUNBO2VBQ0E7c0JBQ0E7a0JBQ0E7c0JBQ0E7Y0FDQTt3QkFDQTttQkFDQTtvQkFDQTt1QkFDQTtBQXpDQTs7YUE0Q0E7aUJBQ0E7cUJBQ0E7a0JBQ0E7cUJBQ0E7a0JBQ0E7QUFOQTthQVFBO2lCQUNBO3FCQUNBO2tCQUNBO3FCQUNBO2tCQUNBO0FBTkE7YUFRQTtpQkFDQTtxQkFDQTtrQkFDQTtxQkFDQTtrQkFDQTtBQU5BO2FBUUE7aUJBQ0E7cUJBQ0E7a0JBQ0E7cUJBQ0E7a0JBRUE7QUFQQTttQkFRQTtvQkFDQTttQkFDQTtlQUNBO3NCQUNBO2tCQUNBO3NCQUNBO2NBQ0E7d0JBQ0E7bUJBQ0E7b0JBQ0E7dUJBQ0E7QUF6Q0E7O2FBNENBO2lCQUNBO3FCQUNBO2tCQUNBO3FCQUNBO2tCQUNBO0FBTkE7YUFRQTtpQkFDQTtxQkFDQTtrQkFDQTtxQkFDQTtrQkFDQTtBQU5BO2FBUUE7aUJBQ0E7cUJBQ0E7a0JBQ0E7cUJBQ0E7a0JBQ0E7QUFOQTthQVFBO2lCQUNBO3FCQUNBO2tCQUNBO3FCQUNBO2tCQUVBO0FBUEE7bUJBUUE7b0JBQ0E7bUJBQ0E7ZUFDQTtzQkFDQTtrQkFDQTtzQkFDQTtjQUNBO3dCQUNBO21CQUNBO29CQUNBO3VCQUNBO0FBekNBOzthQTRDQTtpQkFDQTtxQkFDQTtrQkFDQTtxQkFDQTtrQkFDQTtBQU5BO2FBUUE7aUJBQ0E7cUJBQ0E7a0JBQ0E7cUJBQ0E7a0JBQ0E7QUFOQTthQVFBO2lCQUNBO3FCQUNBO2tCQUNBO3FCQUNBO2tCQUNBO0FBTkE7YUFRQTtpQkFDQTtxQkFDQTtrQkFDQTtxQkFDQTtrQkFFQTtBQVBBO21CQVFBO29CQUNBO21CQUNBO2VBQ0E7c0JBQ0E7a0JBQ0E7c0JBQ0E7Y0FDQTt3QkFDQTttQkFDQTtvQkFDQTt1QkFDQTtBQXpDQTs7YUE0Q0E7aUJBQ0E7cUJBQ0E7a0JBQ0E7cUJBQ0E7a0JBQ0E7QUFOQTthQVFBO2lCQUNBO3FCQUNBO2tCQUNBO3FCQUNBO2tCQUNBO0FBTkE7YUFRQTtpQkFDQTtxQkFDQTtrQkFDQTtxQkFDQTtrQkFDQTtBQU5BO2FBUUE7aUJBQ0E7cUJBQ0E7a0JBQ0E7cUJBQ0E7a0JBRUE7QUFQQTttQkFRQTtvQkFDQTttQkFDQTtlQUNBO3NCQUNBO2tCQUNBO3NCQUNBO2NBQ0E7d0JBQ0E7bUJBQ0E7b0JBQ0E7dUJBRUE7QUExQ0E7O2lCQTRDQTttQkFDQTtvQkFDQTttQkFDQTtlQUNBO3NCQUNBO2tCQUNBO3NCQUNBO2NBQ0E7d0JBQ0E7bUJBQ0E7b0JBQ0E7dUJBQ0E7QUFiQTtpQkFlQTttQkFDQTtvQkFDQTttQkFDQTtlQUNBO3NCQUNBO2tCQUNBO3NCQUNBO2NBQ0E7d0JBQ0E7bUJBQ0E7b0JBQ0E7dUJBQ0E7QUFiQTtpQkFlQTttQkFDQTtvQkFDQTttQkFDQTtlQUNBO3NCQUNBO2tCQUNBO3NCQUNBO2NBQ0E7d0JBQ0E7bUJBQ0E7b0JBQ0E7dUJBQ0E7QUFiQTtpQkFlQTttQkFDQTtvQkFDQTttQkFDQTtlQUNBO3NCQUNBO2tCQUNBO3NCQUNBO2NBQ0E7d0JBQ0E7bUJBQ0E7b0JBQ0E7dUJBQ0E7QUFiQTtpQkFlQTttQkFDQTtvQkFDQTttQkFDQTtlQUNBO3NCQUNBO2tCQUNBO3NCQUNBO2NBQ0E7d0JBQ0E7bUJBQ0E7b0JBQ0E7dUJBQ0E7QUFiQTtpQkFlQTttQkFDQTtvQkFDQTttQkFDQTtlQUNBO3NCQUNBO2tCQUNBO3NCQUNBO2NBQ0E7d0JBQ0E7bUJBQ0E7b0JBQ0E7dUJBQ0E7QUFiQTtpQkFlQTttQkFDQTtvQkFDQTttQkFDQTtlQUNBO3NCQUNBO2tCQUNBO3NCQUNBO2NBQ0E7d0JBQ0E7bUJBQ0E7b0JBQ0E7dUJBQ0E7QUFiQTtpQkFlQTttQkFDQTtvQkFDQTttQkFDQTtlQUNBO3NCQUNBO2tCQUNBO3NCQUNBO2NBQ0E7d0JBQ0E7bUJBQ0E7b0JBQ0E7dUJBQ0E7QUFiQTtpQkFlQTttQkFDQTtvQkFDQTttQkFDQTtlQUNBO3NCQUNBO2tCQUNBO3NCQUNBO2NBQ0E7d0JBQ0E7bUJBQ0E7b0JBQ0E7dUJBRUE7QUFkQTtlQWVBO29CQUNBO1NBQ0E7QUEvWEE7O0FBaVlBOztpQ0FJQTtBQUZBOzs7NEJBS0E7Z0JBQ0E7QUFHQTtBQUxBO0FBREE7cUJBT0E7O21CQUVBO21CQUNBO21CQUNBO21CQUNBO21CQUNBO21CQUNBO21CQUNBO2tCQUNBO2NBQ0E7aUJBRUE7QUFYQTtBQVlBO3dCQUNBO21CQUNBO0FBQ0E7O2lDQUVBO3VDQUNBO0FBQ0E7a0NBQ0E7NkJBQ0E7QUFDQTtrQ0FDQTs0QkFDQTsrQkFDQTtBQUVBO0FBWEE7QUE1QkEsRzs7Ozs7OztBQ3hkQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6InNob3djYXNlXFxpbmNsdWRlXFxjYXRlZ29yeS52dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2ZGI5YzAwODlmNmQzODhiNGI0ZCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNDU3ZGExYTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9jYXRlZ29yeS52dWU/ZW50cnk9dHJ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9jYXRlZ29yeS52dWU/ZW50cnk9dHJ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi00NTdkYTFhMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY2F0ZWdvcnkudnVlP2VudHJ5PXRydWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6XFxcXHdlZWtTdHVkeVxcXFx3ZWV4MlxcXFx3ZWV4M1xcXFxzcmNcXFxcc2hvd2Nhc2VcXFxcaW5jbHVkZVxcXFxjYXRlZ29yeS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjYXRlZ29yeS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDU3ZGExYTFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00NTdkYTFhMVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hvd2Nhc2UvaW5jbHVkZS9jYXRlZ29yeS52dWU/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDQ2IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBzY29wZUlkLFxuICBjc3NNb2R1bGVzXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICAvLyBpbmplY3QgY3NzTW9kdWxlc1xuICBpZiAoY3NzTW9kdWxlcykge1xuICAgIHZhciBjb21wdXRlZCA9IG9wdGlvbnMuY29tcHV0ZWQgfHwgKG9wdGlvbnMuY29tcHV0ZWQgPSB7fSlcbiAgICBPYmplY3Qua2V5cyhjc3NNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBjc3NNb2R1bGVzW2tleV1cbiAgICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtb2R1bGUgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MCA2MSA2MiA2MyA2NCA2NSA2NiA2NyA2OCA2OSA3MCA3MSA3MiA3MyA3NCA3NSA3NiA3NyA3OCA3OSA4MCA4MSA4MiA4MyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Jhbm5lci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtYjczYjM4ZTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Jhbm5lci52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6XFxcXHdlZWtTdHVkeVxcXFx3ZWV4MlxcXFx3ZWV4M1xcXFxzcmNcXFxcc2hvd2Nhc2VcXFxcaW5jbHVkZVxcXFxiYW5uZXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gYmFubmVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1iNzNiMzhlMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWI3M2IzOGUyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaG93Y2FzZS9pbmNsdWRlL2Jhbm5lci52dWVcbi8vIG1vZHVsZSBpZCA9IDEzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDQ0IDQ1IDQ2IDQ4IDQ5IDUxIDUyIDUzIDU1IiwiPHRlbXBsYXRlPlxyXG4gIDxpbWFnZSA6c3R5bGU9XCJ7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfVwiIDpzcmM9XCJzcmNcIiA6aW1hZ2UtcXVhbGl0eT1cInF1YWxpdHlcIlxyXG4gICAgQGNsaWNrPVwiY2xpY2tIYW5kbGVyXCI+PC9pbWFnZT5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICB2YXIgbW9kYWwgPSByZXF1aXJlKCdAd2VleC1tb2R1bGUvbW9kYWwnKVxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgcHJvcHM6IFsnd2lkdGgnLCAnaGVpZ2h0JywgJ3NyYycsICdocmVmJ10sXHJcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcXVhbGl0eTogJ25vcm1hbCdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgY2xpY2tIYW5kbGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbW9kYWwudG9hc3Qoe1xyXG4gICAgICAgICAgbWVzc2FnZTogJ2NsaWNrJyxcclxuICAgICAgICAgIGR1cmF0aW9uOiAxXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGJhbm5lci52dWU/NmRlYWQ1ZmQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2ltYWdlJywge1xuICAgIHN0eWxlOiAoe1xuICAgICAgd2lkdGg6IF92bS53aWR0aCxcbiAgICAgIGhlaWdodDogX3ZtLmhlaWdodFxuICAgIH0pLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uc3JjLFxuICAgICAgXCJpbWFnZS1xdWFsaXR5XCI6IF92bS5xdWFsaXR5XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uY2xpY2tIYW5kbGVyXG4gICAgfVxuICB9KVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1iNzNiMzhlMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtYjczYjM4ZTIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9zaG93Y2FzZS9pbmNsdWRlL2Jhbm5lci52dWVcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDQ0IDQ1IDQ2IDQ4IDQ5IDUxIDUyIDUzIDU1IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8aW1hZ2Ugdi1pZj1cImRzLmZsb29yVGl0bGVcIiBjbGFzcz1cInRpdGxlXCIgOnNyYz1cImRzLmZsb29yVGl0bGVcIj48L2ltYWdlPlxyXG4gICAgPGRpdiBjbGFzcz1cIml0ZW0tY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgdi1mb3I9XCIoaSxpdGVtKSBpbiBpdGVtc1wiIDpzdHlsZT1cInsgd2lkdGg6IDc1MCwgcGFkZGluZ0JvdHRvbTogMTQsIGJhY2tncm91bmRDb2xvcjogaXRlbS5jb2xvdXIgfVwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YmFubmVyIDp3aWR0aD1cIk5VTUJFUl83NTBcIiA6aGVpZ2h0PVwiTlVNQkVSXzIzN1wiXHJcbiAgICAgICAgICAgIDpzcmM9XCJpICUgMiA9PT0gMCA/IGl0ZW0ubGVmdEJhbm5lckltZyA6IGl0ZW0ucmlnaHRCYW5uZXJJbWdcIlxyXG4gICAgICAgICAgICA6aHJlZj1cIml0ZW0uYmFubmVyVXJsXCI+PC9iYW5uZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNob3AtbGlzdFwiPlxyXG4gICAgICAgICAgPGRpdiB2LWZvcj1cInNob3AgaW4gaXRlbS5zaG9wTGlzdFwiIGNsYXNzPVwic2hvcC1pbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxiYW5uZXIgOndpZHRoPVwiTlVNQkVSXzE4NlwiIDpoZWlnaHQ9XCJOVU1CRVJfMjA4XCIgOnNyYz1cInNob3AucGljVXJsXCIgOmhyZWY9XCJzaG9wLnNob3BVcmxcIj48L2Jhbm5lcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInN1Yi1pdGVtLWNvbnRhaW5lclwiIDpzdHlsZT1cInsgaGVpZ2h0OiBNYXRoLnJvdW5kKHN1Ykl0ZW1zLmxlbmd0aCAvIDMpICogKDI0MSArIDMpIH1cIj5cclxuICAgICAgPGRpdiB2LWZvcj1cIihpLGl0ZW0pIGluIHN1Ykl0ZW1zXCIgY2xhc3M9XCJzdWItaXRlbVwiIDpzdHlsZT1cInt0b3A6IGdldFN1Ykl0ZW1Ub3AoaSksIGxlZnQ6IGdldFN1Ykl0ZW1MZWZ0KGkpIH1cIj5cclxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJzdWItaXRlbS1iZ1wiIDpzcmM9XCJzdWJJdGVtQmdcIj48L2ltYWdlPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdWItaXRlbS1pbWdcIj5cclxuICAgICAgICAgIDxiYW5uZXIgOndpZHRoPVwiTlVNQkVSXzI0OFwiIDpoZWlnaHQ9XCJOVU1CRVJfMTU1XCJcclxuICAgICAgICAgICAgOnNyYz1cIml0ZW0uaW5kdXN0cnlJbWdcIlxyXG4gICAgICAgICAgICA6aHJlZj1cIml0ZW0uaW5kdXN0cnlVcmxcIj48L2Jhbm5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3ViLWl0ZW0tdGl0bGVcIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaW5kdXN0cnktdGl0bGVcIiA6aHJlZj1cIml0ZW0uaW5kdXN0cnlVcmxcIj57e2l0ZW0uaW5kdXN0cnlUaXRsZX19PC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJpbmR1c3RyeS1iZW5lZml0XCIgOmhyZWY9XCJpdGVtLmluZHVzdHJ5VXJsXCI+e3tpdGVtLmluZHVzdHJ5QmVuZWZpdH19PC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlPlxyXG4gIC50aXRsZSB7XHJcbiAgICB3aWR0aDogNzUwO1xyXG4gICAgaGVpZ2h0OiAxMDA7XHJcbiAgfVxyXG5cclxuICAuc2hvcC1saXN0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG5cclxuICAuc2hvcC1pbWctY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjtcclxuICB9XHJcblxyXG4gIC5zdWItaXRlbSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjQ4O1xyXG4gICAgaGVpZ2h0OiAyNDE7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLnN1Yi1pdGVtLWJnIHtcclxuICAgIHdpZHRoOiAyNDg7XHJcbiAgICBoZWlnaHQ6IDg2O1xyXG4gIH1cclxuXHJcbiAgLnN1Yi1pdGVtLXRpdGxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMjQ4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmluZHVzdHJ5LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjg7XHJcbiAgICBjb2xvcjogIzQ4NDg0ODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwO1xyXG4gICAgaGVpZ2h0OjM0O1xyXG4gIH1cclxuXHJcbiAgLmluZHVzdHJ5LWJlbmVmaXQge1xyXG4gICAgZm9udC1zaXplOiAyNDtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgdmFyIGRlbW9Db250ZW50ID0ge1xyXG4gICAgXCJtYWluXCI6IFt7XHJcbiAgICAgIFwic2hvcExpc3RcIjogW3tcclxuICAgICAgICBcImlkXCI6IFwiNjE5MTIzMTIyXCIsXHJcbiAgICAgICAgXCJwaWNVcmxcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjFDbDVNTFZYWFhYWFRhWFhYU3V0YkZYWFguanBnXCIsXHJcbiAgICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiMC44ODQ3NjUyMDk0NDA4NTdcIixcclxuICAgICAgICBcInNob3BVcmxcIjogXCJodHRwOi8vbGlhbmdwaW5wdXppLnRtYWxsLmNvbS9jYW1wYWlnbi0zNzM1LTcuaHRtXCIsXHJcbiAgICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiU0hPUFwiLFxyXG4gICAgICAgIFwiYnJhbmRJZFwiOiBcIjc3MjQzNjdcIlxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgXCJpZFwiOiBcIjg4MDczNDUwMlwiLFxyXG4gICAgICAgIFwicGljVXJsXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxSE4yWExWWFhYWGJrWEZYWFN1dGJGWFhYLmpwZ1wiLFxyXG4gICAgICAgIFwiZmluYWxTY29yZVwiOiBcIjAuODgyMjI0Njg2NjUxMjcxNFwiLFxyXG4gICAgICAgIFwic2hvcFVybFwiOiBcImh0dHA6Ly9zYW56aGlzb25nc2h1LnRtYWxsLmNvbS9jYW1wYWlnbi0zNzM1LTcuaHRtXCIsXHJcbiAgICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiU0hPUFwiLFxyXG4gICAgICAgIFwiYnJhbmRJZFwiOiBcIjE0NzI4MDkxNVwiXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBcImlkXCI6IFwiMzkyMTQ3MTc3XCIsXHJcbiAgICAgICAgXCJwaWNVcmxcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjF5cTZkTFZYWFhYYlhYcFhYU3V0YkZYWFguanBnXCIsXHJcbiAgICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiMC44ODA1ODU0NzI0MjQzNjMxXCIsXHJcbiAgICAgICAgXCJzaG9wVXJsXCI6IFwiaHR0cDovL3pob3VoZWl5YS50bWFsbC5jb20vY2FtcGFpZ24tMzczNS02Lmh0bVwiLFxyXG4gICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIlNIT1BcIixcclxuICAgICAgICBcImJyYW5kSWRcIjogXCIxMTE0OTZcIlxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgXCJpZFwiOiBcIjIwODEwNTgwNjBcIixcclxuICAgICAgICBcInBpY1VybFwiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMXc0anhMVlhYWFhheFhYWFh0S1hiRlhYWC5naWZcIixcclxuICAgICAgICBcImZpbmFsU2NvcmVcIjogXCIwLjg2NDA0Mzk1NTEwNDkyNDlcIixcclxuICAgICAgICBcInNob3BVcmxcIjogXCJodHRwOi8vcm9uZ3hpbnRhbmcudG1hbGwuY29tL2NhbXBhaWduLTM3MzUtNi5odG1cIixcclxuICAgICAgICBcImVudGl0eVR5cGVcIjogXCJTSE9QXCIsXHJcbiAgICAgICAgXCJicmFuZElkXCI6IFwiODcwOTg5MFwiXHJcbiAgICAgIH1dLFxyXG4gICAgICBcImZpbmFsU2NvcmVcIjogXCI0LjY1NzMzMzMzMzMzMzMzNFwiLFxyXG4gICAgICBcImluZHVzdHJ5VXJsXCI6IG51bGwsXHJcbiAgICAgIFwiZW50aXR5VHlwZVwiOiBcIk9USEVSXCIsXHJcbiAgICAgIFwiY29sb3VyXCI6IFwiI2ZmZjVhM1wiLFxyXG4gICAgICBcImluZHVzdHJ5VGl0bGVcIjogbnVsbCxcclxuICAgICAgXCJiYW5uZXJVcmxcIjogXCIvL3BhZ2VzLnRtYWxsLmNvbS93b3cvYWN0LzE1NjE3L25ld2Zvb2Q/YWJidWNrZXQ9X0FCLU0xMDExX0IxNCZhY209MDM2NTQuMTAwMy4xLjczNTM2MiZhbGRpZD1LWFBwbnZFSCZhYnRlc3Q9X0FCLUxSMTAxMS1QUjEwMTEmc2NtPTEwMDMuMS4wMzY1NC5PVEhFUl8xMl83MzUzNjImcG9zPTFcIixcclxuICAgICAgXCJsZWZ0QmFubmVySW1nXCI6IFwiaHR0cDovL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjFMSGg0TVhYWFhYYnNYcFhYZVdqbTJwWFgtNzUwLTI0MC5qcGdcIixcclxuICAgICAgXCJfcG9zX1wiOiBcIjFcIixcclxuICAgICAgXCJpbmR1c3RyeUJlbmVmaXRcIjogbnVsbCxcclxuICAgICAgXCJpbmR1c3RyeUlkXCI6IFwiMTJcIixcclxuICAgICAgXCJpbmR1c3RyeUltZ1wiOiBudWxsLFxyXG4gICAgICBcInJpZ2h0QmFubmVySW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTQvVEIxd3NoVU1YWFhYWFhhWFZYWGVXam0ycFhYLTc1MC0yNDAuanBnXCJcclxuICAgIH0sIHtcclxuICAgICAgXCJzaG9wTGlzdFwiOiBbe1xyXG4gICAgICAgIFwiaWRcIjogXCI1MjA1NTcyNzRcIixcclxuICAgICAgICBcInBpY1VybFwiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMWFNalhMVlhYWFhiVWFYWFhTdXRiRlhYWC5qcGdcIixcclxuICAgICAgICBcImZpbmFsU2NvcmVcIjogXCIwLjg5ODYzODI5ODk4NDUzMjVcIixcclxuICAgICAgICBcInNob3BVcmxcIjogXCJodHRwOi8vbmV3YmFsYW5jZS50bWFsbC5jb20vY2FtcGFpZ24tMzczNS0yMC5odG1cIixcclxuICAgICAgICBcImVudGl0eVR5cGVcIjogXCJTSE9QXCIsXHJcbiAgICAgICAgXCJicmFuZElkXCI6IFwiMjA1ODRcIlxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgXCJpZFwiOiBcIjc0Njg2Njk5M1wiLFxyXG4gICAgICAgIFwicGljVXJsXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxcFhHOUxWWFhYWGFMWEZYWFN1dGJGWFhYLmpwZ1wiLFxyXG4gICAgICAgIFwiZmluYWxTY29yZVwiOiBcIjAuODkxNzg1NTI0Mjk3NzMyN1wiLFxyXG4gICAgICAgIFwic2hvcFVybFwiOiBcImh0dHA6Ly92YW5zLnRtYWxsLmNvbS9jYW1wYWlnbi0zNzM1LTE5Lmh0bVwiLFxyXG4gICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIlNIT1BcIixcclxuICAgICAgICBcImJyYW5kSWRcIjogXCIyOTUyOVwiXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBcImlkXCI6IFwiMTYxMjcxMzE0N1wiLFxyXG4gICAgICAgIFwicGljVXJsXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxakhmWExWWFhYWFhQWEZYWFN1dGJGWFhYLmpwZ1wiLFxyXG4gICAgICAgIFwiZmluYWxTY29yZVwiOiBcIjAuODg5NTk0MzYwNjQ0MjYzMVwiLFxyXG4gICAgICAgIFwic2hvcFVybFwiOiBcImh0dHA6Ly9kY3Nob2Vjb3VzYS50bWFsbC5jb20vY2FtcGFpZ24tMzczNS04Lmh0bVwiLFxyXG4gICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIlNIT1BcIixcclxuICAgICAgICBcImJyYW5kSWRcIjogXCIzODUxNjYyXCJcclxuICAgICAgfSwge1xyXG4gICAgICAgIFwiaWRcIjogXCIyMzc5MjUxNDE4XCIsXHJcbiAgICAgICAgXCJwaWNVcmxcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjFzYkxsTFZYWFhYYmVYWFhYU3V0YkZYWFguanBnXCIsXHJcbiAgICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiMC44ODgxNTM5NjY4ODc0MzgzXCIsXHJcbiAgICAgICAgXCJzaG9wVXJsXCI6IFwiaHR0cDovL2JhaWppbnlkaHcudG1hbGwuY29tL2NhbXBhaWduLTM3MzUtMi5odG1cIixcclxuICAgICAgICBcImVudGl0eVR5cGVcIjogXCJTSE9QXCIsXHJcbiAgICAgICAgXCJicmFuZElkXCI6IFwiMjA1NzlcIlxyXG4gICAgICB9XSxcclxuICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiNC41NDUzMzMzMzMzMzMzMzRcIixcclxuICAgICAgXCJpbmR1c3RyeVVybFwiOiBudWxsLFxyXG4gICAgICBcImVudGl0eVR5cGVcIjogXCJPVEhFUlwiLFxyXG4gICAgICBcImNvbG91clwiOiBcIiNjYmRiZmVcIixcclxuICAgICAgXCJpbmR1c3RyeVRpdGxlXCI6IG51bGwsXHJcbiAgICAgIFwiYmFubmVyVXJsXCI6IFwiLy9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy95ZGh3P2FiYnVja2V0PV9BQi1NMTAxMV9CMTQmYWNtPTAzNjU0LjEwMDMuMS43MzUzNjImYWxkaWQ9S1hQcG52RUgmYWJ0ZXN0PV9BQi1MUjEwMTEtUFIxMDExJnNjbT0xMDAzLjEuMDM2NTQuT1RIRVJfOF83MzUzNjImcG9zPTJcIixcclxuICAgICAgXCJsZWZ0QmFubmVySW1nXCI6IFwiaHR0cDovL2ltZy5hbGljZG4uY29tL3Rwcy9pMy9UQjFoNGt6TFZYWFhYYXdYcFhYZVdqbTJwWFgtNzUwLTI0MC5qcGdcIixcclxuICAgICAgXCJfcG9zX1wiOiBcIjJcIixcclxuICAgICAgXCJpbmR1c3RyeUJlbmVmaXRcIjogbnVsbCxcclxuICAgICAgXCJpbmR1c3RyeUlkXCI6IFwiOFwiLFxyXG4gICAgICBcImluZHVzdHJ5SW1nXCI6IG51bGwsXHJcbiAgICAgIFwicmlnaHRCYW5uZXJJbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pNC9UQjE5Vk1qTFZYWFhYYWVhWFhYZVdqbTJwWFgtNzUwLTI0MC5qcGdcIlxyXG4gICAgfSwge1xyXG4gICAgICBcInNob3BMaXN0XCI6IFt7XHJcbiAgICAgICAgXCJpZFwiOiBcIjgxMTM4MzA5MVwiLFxyXG4gICAgICAgIFwicGljVXJsXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxcTQ5WkxWWFhYWGFKWFZYWFN1dGJGWFhYLmpwZ1wiLFxyXG4gICAgICAgIFwiZmluYWxTY29yZVwiOiBcIjAuODcyMzY4MjcxNjc0OTQ4MlwiLFxyXG4gICAgICAgIFwic2hvcFVybFwiOiBcImh0dHA6Ly90b25ncmVudGFuZ2JqLnRtYWxsLmNvbS9jYW1wYWlnbi0zNzM1LTkuaHRtXCIsXHJcbiAgICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiU0hPUFwiLFxyXG4gICAgICAgIFwiYnJhbmRJZFwiOiBcIjQ0NjUyXCJcclxuICAgICAgfSwge1xyXG4gICAgICAgIFwiaWRcIjogXCI4Mzg5MTQ2MjZcIixcclxuICAgICAgICBcInBpY1VybFwiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMUdRWWJMVlhYWFhhWFhWWFhTdXRiRlhYWC5qcGdcIixcclxuICAgICAgICBcImZpbmFsU2NvcmVcIjogXCIwLjUwMjcxMzE5MDgwODY1ODRcIixcclxuICAgICAgICBcInNob3BVcmxcIjogXCJodHRwOi8vam91by50bWFsbC5jb20vY2FtcGFpZ24tMzczNS0zLmh0bVwiLFxyXG4gICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIlNIT1BcIixcclxuICAgICAgICBcImJyYW5kSWRcIjogXCIxNDE3MDA4MVwiXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBcImlkXCI6IFwiMTA3NzcxNjgyOVwiLFxyXG4gICAgICAgIFwicGljVXJsXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxcmRXMkxWWFhYWGFnYXBYWFN1dGJGWFhYLmpwZ1wiLFxyXG4gICAgICAgIFwiZmluYWxTY29yZVwiOiBcIjAuNTAxNTM4NzU1NzAyNDI2MlwiLFxyXG4gICAgICAgIFwic2hvcFVybFwiOiBcImh0dHA6Ly93ZXRjb2RlLnRtYWxsLmNvbS9jYW1wYWlnbi0zNzM1LTE0Lmh0bVwiLFxyXG4gICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIlNIT1BcIixcclxuICAgICAgICBcImJyYW5kSWRcIjogXCIzNjc1NjQyXCJcclxuICAgICAgfSwge1xyXG4gICAgICAgIFwiaWRcIjogXCIxNjY0OTc2MDMzXCIsXHJcbiAgICAgICAgXCJwaWNVcmxcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjFRLnJwTFZYWFhYWGlYcFhYU3V0YkZYWFguanBnXCIsXHJcbiAgICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiMC41MDE0ODk3MTA5NjY5NDQyXCIsXHJcbiAgICAgICAgXCJzaG9wVXJsXCI6IFwiaHR0cDovL2hhbmhvb2h6cC50bWFsbC5jb20vY2FtcGFpZ24tMzczNS0xNy5odG1cIixcclxuICAgICAgICBcImVudGl0eVR5cGVcIjogXCJTSE9QXCIsXHJcbiAgICAgICAgXCJicmFuZElkXCI6IFwiNzg4ODg2OTVcIlxyXG4gICAgICB9XSxcclxuICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiNC41MjY2NjY2NjY2NjY2NjZcIixcclxuICAgICAgXCJpbmR1c3RyeVVybFwiOiBudWxsLFxyXG4gICAgICBcImVudGl0eVR5cGVcIjogXCJPVEhFUlwiLFxyXG4gICAgICBcImNvbG91clwiOiBcIiNmZmQxYjZcIixcclxuICAgICAgXCJpbmR1c3RyeVRpdGxlXCI6IG51bGwsXHJcbiAgICAgIFwiYmFubmVyVXJsXCI6IFwiLy9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy9nZXRiZWF1dHk/YWJidWNrZXQ9X0FCLU0xMDExX0IxNCZhY209MDM2NTQuMTAwMy4xLjczNTM2MiZhbGRpZD1LWFBwbnZFSCZhYnRlc3Q9X0FCLUxSMTAxMS1QUjEwMTEmc2NtPTEwMDMuMS4wMzY1NC5PVEhFUl8yXzczNTM2MiZwb3M9M1wiLFxyXG4gICAgICBcImxlZnRCYW5uZXJJbWdcIjogXCJodHRwOi8vaW1nLmFsaWNkbi5jb20vdHBzL2k0L1RCMURqdDlNWFhYWFhhblhYWFhlV2ptMnBYWC03NTAtMjQwLmpwZ1wiLFxyXG4gICAgICBcIl9wb3NfXCI6IFwiM1wiLFxyXG4gICAgICBcImluZHVzdHJ5QmVuZWZpdFwiOiBudWxsLFxyXG4gICAgICBcImluZHVzdHJ5SWRcIjogXCIyXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlJbWdcIjogbnVsbCxcclxuICAgICAgXCJyaWdodEJhbm5lckltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kzL1RCMV9nVlFNWFhYWFhYOVhWWFhlV2ptMnBYWC03NTAtMjQwLmpwZ1wiXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hvcExpc3RcIjogW3tcclxuICAgICAgICBcImlkXCI6IFwiMjE1MzE2OTY1NVwiLFxyXG4gICAgICAgIFwicGljVXJsXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxbmxLN0xWWFhYWGFSWEZYWFN1dGJGWFhYLmpwZ1wiLFxyXG4gICAgICAgIFwiZmluYWxTY29yZVwiOiBcIjAuODgyMDIxMDgwODgzNTkwNVwiLFxyXG4gICAgICAgIFwic2hvcFVybFwiOiBcImh0dHA6Ly9jdGtpY2tzLnRtYWxsLmNvbS9jYW1wYWlnbi0zNzM1LTE1Lmh0bVwiLFxyXG4gICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIlNIT1BcIixcclxuICAgICAgICBcImJyYW5kSWRcIjogXCIyMDU4NFwiXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBcImlkXCI6IFwiMjc4NDEwMTExNVwiLFxyXG4gICAgICAgIFwicGljVXJsXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxUnJTLkxWWFhYWGNyWHBYWFN1dGJGWFhYLmpwZ1wiLFxyXG4gICAgICAgIFwiZmluYWxTY29yZVwiOiBcIjAuNTkzMDM4MzIyNzAxMjU4NlwiLFxyXG4gICAgICAgIFwic2hvcFVybFwiOiBcImh0dHA6Ly90b210YWlsb3IudG1hbGwuY29tL2NhbXBhaWduLTM3MzUtMC5odG1cIixcclxuICAgICAgICBcImVudGl0eVR5cGVcIjogXCJTSE9QXCIsXHJcbiAgICAgICAgXCJicmFuZElkXCI6IFwiMjEzNDc0MDYwXCJcclxuICAgICAgfSwge1xyXG4gICAgICAgIFwiaWRcIjogXCIyMTgzODEzNzI2XCIsXHJcbiAgICAgICAgXCJwaWNVcmxcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjFrbVNfTFZYWFhYYUJhWFhYU3V0YkZYWFguanBnXCIsXHJcbiAgICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiMC41ODgyNTU4OTU3NzcxNjgxXCIsXHJcbiAgICAgICAgXCJzaG9wVXJsXCI6IFwiaHR0cDovL2h1YWl5dWFuLnRtYWxsLmNvbS9jYW1wYWlnbi0zNzM1LTUuaHRtXCIsXHJcbiAgICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiU0hPUFwiLFxyXG4gICAgICAgIFwiYnJhbmRJZFwiOiBcIjI5NDY1XCJcclxuICAgICAgfSwge1xyXG4gICAgICAgIFwiaWRcIjogXCIxNzg1OTA4MDA1XCIsXHJcbiAgICAgICAgXCJwaWNVcmxcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjFkQjZ6TFZYWFhYY0pYWFhYU3V0YkZYWFguanBnXCIsXHJcbiAgICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiMC41Njk0MjExODYyMTI0MzQxXCIsXHJcbiAgICAgICAgXCJzaG9wVXJsXCI6IFwiaHR0cDovL2F4b251cy50bWFsbC5jb20vY2FtcGFpZ24tMzczNS0xLmh0bVwiLFxyXG4gICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIlNIT1BcIixcclxuICAgICAgICBcImJyYW5kSWRcIjogXCIxMTUwMzU4NDFcIlxyXG4gICAgICB9XSxcclxuICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiNC40MTM5NTU1NTU1NTU1NTVcIixcclxuICAgICAgXCJpbmR1c3RyeVVybFwiOiBudWxsLFxyXG4gICAgICBcImVudGl0eVR5cGVcIjogXCJPVEhFUlwiLFxyXG4gICAgICBcImNvbG91clwiOiBcIiNiOWVhZjJcIixcclxuICAgICAgXCJpbmR1c3RyeVRpdGxlXCI6IG51bGwsXHJcbiAgICAgIFwiYmFubmVyVXJsXCI6IFwiLy9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy9ndW9qaXhmcz9hYmJ1Y2tldD1fQUItTTEwMTFfQjE0JmFjbT0wMzY1NC4xMDAzLjEuNzM1MzYyJmFsZGlkPUtYUHBudkVIJmFidGVzdD1fQUItTFIxMDExLVBSMTAxMSZzY209MTAwMy4xLjAzNjU0Lk9USEVSXzFfNzM1MzYyJnBvcz00XCIsXHJcbiAgICAgIFwibGVmdEJhbm5lckltZ1wiOiBcImh0dHA6Ly9pbWcuYWxpY2RuLmNvbS90cHMvaTMvVEIxX1Q3QUxWWFhYWFhPWFhYWGVXam0ycFhYLTc1MC0yNDAuanBnXCIsXHJcbiAgICAgIFwiX3Bvc19cIjogXCI0XCIsXHJcbiAgICAgIFwiaW5kdXN0cnlCZW5lZml0XCI6IG51bGwsXHJcbiAgICAgIFwiaW5kdXN0cnlJZFwiOiBcIjFcIixcclxuICAgICAgXCJpbmR1c3RyeUltZ1wiOiBudWxsLFxyXG4gICAgICBcInJpZ2h0QmFubmVySW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTIvVEIxczdrb0xWWFhYWGFmWEZYWGVXam0ycFhYLTc1MC0yNDAuanBnXCJcclxuICAgIH0sIHtcclxuICAgICAgXCJzaG9wTGlzdFwiOiBbe1xyXG4gICAgICAgIFwiaWRcIjogXCIyNDUzMDU0MzM1XCIsXHJcbiAgICAgICAgXCJwaWNVcmxcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjFSWF92TFZYWFhYY2hYcFhYU3V0YkZYWFguanBnXCIsXHJcbiAgICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiMC44NDYzNDQ3ODk5NTkwMjY3XCIsXHJcbiAgICAgICAgXCJzaG9wVXJsXCI6IFwiaHR0cDovL25hbnNoaXppeGluZy50bWFsbC5jb20vY2FtcGFpZ24tMzczNS0yLmh0bVwiLFxyXG4gICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIlNIT1BcIixcclxuICAgICAgICBcImJyYW5kSWRcIjogXCI4NDQ1MDI1NjBcIlxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgXCJpZFwiOiBcIjEwNDE3NzMyMzRcIixcclxuICAgICAgICBcInBpY1VybFwiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMVE3anBMVlhYWFhYOFhwWFhTdXRiRlhYWC5qcGdcIixcclxuICAgICAgICBcImZpbmFsU2NvcmVcIjogXCIwLjU2MDk1MjczNDUwMzA3NVwiLFxyXG4gICAgICAgIFwic2hvcFVybFwiOiBcImh0dHA6Ly9kYXB1LnRtYWxsLmNvbS9jYW1wYWlnbi0zNzM1LTguaHRtXCIsXHJcbiAgICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiU0hPUFwiLFxyXG4gICAgICAgIFwiYnJhbmRJZFwiOiBcIjE0NDkzNzYzXCJcclxuICAgICAgfSwge1xyXG4gICAgICAgIFwiaWRcIjogXCIzMDAwMzE0MzhcIixcclxuICAgICAgICBcInBpY1VybFwiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMTNWQzRMVlhYWFhhclhWWFhTdXRiRlhYWC5qcGdcIixcclxuICAgICAgICBcImZpbmFsU2NvcmVcIjogXCIwLjU0NTA2NzQ2MzQ4Mzk0NDJcIixcclxuICAgICAgICBcInNob3BVcmxcIjogXCJodHRwOi8va2FuZ2VyeGluLnRtYWxsLmNvbS9jYW1wYWlnbi0zNzM1LTEwLmh0bVwiLFxyXG4gICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIlNIT1BcIixcclxuICAgICAgICBcImJyYW5kSWRcIjogXCIzNzgxOTA1XCJcclxuICAgICAgfSwge1xyXG4gICAgICAgIFwiaWRcIjogXCI5MjA0MjczNVwiLFxyXG4gICAgICAgIFwicGljVXJsXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxUHhZY0xWWFhYWGFzYVhYWFN1dGJGWFhYLmpwZ1wiLFxyXG4gICAgICAgIFwiZmluYWxTY29yZVwiOiBcIjAuNTQ0ODAyMzIyODA1Mzk4MVwiLFxyXG4gICAgICAgIFwic2hvcFVybFwiOiBcImh0dHA6Ly9zaHVpeGluZy50bWFsbC5jb20vY2FtcGFpZ24tMzczNS0xMC5odG1cIixcclxuICAgICAgICBcImVudGl0eVR5cGVcIjogXCJTSE9QXCIsXHJcbiAgICAgICAgXCJicmFuZElkXCI6IFwiMzY4NTY2MFwiXHJcbiAgICAgIH1dLFxyXG4gICAgICBcImZpbmFsU2NvcmVcIjogXCI0LjEzXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlVcmxcIjogbnVsbCxcclxuICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiT1RIRVJcIixcclxuICAgICAgXCJjb2xvdXJcIjogXCIjYmJmZmU1XCIsXHJcbiAgICAgIFwiaW5kdXN0cnlUaXRsZVwiOiBudWxsLFxyXG4gICAgICBcImJhbm5lclVybFwiOiBcIi8vcGFnZXMudG1hbGwuY29tL3dvdy9hY3QvMTU2MTcvamZqcz9hYmJ1Y2tldD1fQUItTTEwMTFfQjE0JmFjbT0wMzY1NC4xMDAzLjEuNzM1MzYyJmFsZGlkPUtYUHBudkVIJmFidGVzdD1fQUItTFIxMDExLVBSMTAxMSZzY209MTAwMy4xLjAzNjU0Lk9USEVSXzRfNzM1MzYyJnBvcz01XCIsXHJcbiAgICAgIFwibGVmdEJhbm5lckltZ1wiOiBcImh0dHA6Ly9pbWcuYWxpY2RuLmNvbS90cHMvaTMvVEIxamVvQ0xWWFhYWGNvWFhYWGVXam0ycFhYLTc1MC0yNDAuanBnXCIsXHJcbiAgICAgIFwiX3Bvc19cIjogXCI1XCIsXHJcbiAgICAgIFwiaW5kdXN0cnlCZW5lZml0XCI6IG51bGwsXHJcbiAgICAgIFwiaW5kdXN0cnlJZFwiOiBcIjRcIixcclxuICAgICAgXCJpbmR1c3RyeUltZ1wiOiBudWxsLFxyXG4gICAgICBcInJpZ2h0QmFubmVySW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTQvVEIxQzUuZkxWWFhYWGIzYVhYWGVXam0ycFhYLTc1MC0yNDAuanBnXCJcclxuICAgIH0sIHtcclxuICAgICAgXCJzaG9wTGlzdFwiOiBbe1xyXG4gICAgICAgIFwiaWRcIjogXCI4MjI0Mjg1NTVcIixcclxuICAgICAgICBcInBpY1VybFwiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMWc0NmFMVlhYWFhjVVhWWFhTdXRiRlhYWC5qcGdcIixcclxuICAgICAgICBcImZpbmFsU2NvcmVcIjogXCIwLjkxODM0NTg3NzY5NzE5MTdcIixcclxuICAgICAgICBcInNob3BVcmxcIjogXCJodHRwOi8vcGxheWJveXlkLnRtYWxsLmNvbS9jYW1wYWlnbi0zNzM1LTExLmh0bVwiLFxyXG4gICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIlNIT1BcIixcclxuICAgICAgICBcImJyYW5kSWRcIjogXCIyOTUxMFwiXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBcImlkXCI6IFwiMTk2OTkzOTM1XCIsXHJcbiAgICAgICAgXCJwaWNVcmxcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjFwSEc4TFZYWFhYYnJhWFhYU3V0YkZYWFguanBnXCIsXHJcbiAgICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiMC45MTA1NTI1MjQ2NjY3Nzc1XCIsXHJcbiAgICAgICAgXCJzaG9wVXJsXCI6IFwiaHR0cHM6Ly91bmlxbG8udG1hbGwuY29tL2NhbXBhaWduLTM3MzUtNTYuaHRtXCIsXHJcbiAgICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiU0hPUFwiLFxyXG4gICAgICAgIFwiYnJhbmRJZFwiOiBcIjI5NTI3XCJcclxuICAgICAgfSwge1xyXG4gICAgICAgIFwiaWRcIjogXCI1MDU3NTM5NThcIixcclxuICAgICAgICBcInBpY1VybFwiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMVdLWXlMVlhYWFhYSFhYWFhTdXRiRlhYWC5qcGdcIixcclxuICAgICAgICBcImZpbmFsU2NvcmVcIjogXCIwLjkwNzUwOTY2MzcwNzI2XCIsXHJcbiAgICAgICAgXCJzaG9wVXJsXCI6IFwiaHR0cDovL2JvbmFzLnRtYWxsLmNvbS9jYW1wYWlnbi0zNzM1LTExLmh0bVwiLFxyXG4gICAgICAgIFwiZW50aXR5VHlwZVwiOiBcIlNIT1BcIixcclxuICAgICAgICBcImJyYW5kSWRcIjogXCIzNDg2NTgwXCJcclxuICAgICAgfSwge1xyXG4gICAgICAgIFwiaWRcIjogXCIyMTEzODIzNTgwXCIsXHJcbiAgICAgICAgXCJwaWNVcmxcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjFpdEhrTFZYWFhYWDlYRlhYU3V0YkZYWFguanBnXCIsXHJcbiAgICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiMC41OTAwOTc3OTU1NjM1Mjg5XCIsXHJcbiAgICAgICAgXCJzaG9wVXJsXCI6IFwiaHR0cDovL2thZmFueWEudG1hbGwuY29tL2NhbXBhaWduLTM3MzUtNy5odG1cIixcclxuICAgICAgICBcImVudGl0eVR5cGVcIjogXCJTSE9QXCIsXHJcbiAgICAgICAgXCJicmFuZElkXCI6IFwiMTEwNjg0MjE4XCJcclxuICAgICAgfV0sXHJcbiAgICAgIFwiZmluYWxTY29yZVwiOiBcIjQuMDg4XCIsXHJcbiAgICAgIFwiaW5kdXN0cnlVcmxcIjogbnVsbCxcclxuICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiT1RIRVJcIixcclxuICAgICAgXCJjb2xvdXJcIjogXCIjZmZjN2M5XCIsXHJcbiAgICAgIFwiaW5kdXN0cnlUaXRsZVwiOiBudWxsLFxyXG4gICAgICBcImJhbm5lclVybFwiOiBcIi8vcGFnZXMudG1hbGwuY29tL3dvdy9hY3QvMTU2MTcvbmVpeWkzMjg/YWJidWNrZXQ9X0FCLU0xMDExX0IxNCZhY209MDM2NTQuMTAwMy4xLjczNTM2MiZhbGRpZD1LWFBwbnZFSCZhYnRlc3Q9X0FCLUxSMTAxMS1QUjEwMTEmc2NtPTEwMDMuMS4wMzY1NC5PVEhFUl85XzczNTM2MiZwb3M9NlwiLFxyXG4gICAgICBcImxlZnRCYW5uZXJJbWdcIjogXCJodHRwOi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMXRsM3RMVlhYWFhiYlhGWFhlV2ptMnBYWC03NTAtMjQwLmpwZ1wiLFxyXG4gICAgICBcIl9wb3NfXCI6IFwiNlwiLFxyXG4gICAgICBcImluZHVzdHJ5QmVuZWZpdFwiOiBudWxsLFxyXG4gICAgICBcImluZHVzdHJ5SWRcIjogXCI5XCIsXHJcbiAgICAgIFwiaW5kdXN0cnlJbWdcIjogbnVsbCxcclxuICAgICAgXCJyaWdodEJhbm5lckltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kyL1RCMUFrSXlMVlhYWFhialhwWFhlV2ptMnBYWC03NTAtMjQwLmpwZ1wiXHJcbiAgICB9XSxcclxuICAgIFwic3ViXCI6IFt7XHJcbiAgICAgIFwic2hvcExpc3RcIjogbnVsbCxcclxuICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiNC4wMzMzMzMzMzMzMzMzMzNcIixcclxuICAgICAgXCJpbmR1c3RyeVVybFwiOiBcIi8vcGFnZXMudG1hbGwuY29tL3dvdy9hY3QvMTU2MTcvemJwcz9hYmJ1Y2tldD1fQUItTTEwMTFfQjE0JmFjbT0wMzY1NC4xMDAzLjEuNzM1MzYyJmFsZGlkPUtYUHBudkVIJmFidGVzdD1fQUItTFIxMDExLVBSMTAxMSZzY209MTAwMy4xLjAzNjU0Lk9USEVSXzNfNzM1MzYyJnBvcz03XCIsXHJcbiAgICAgIFwiZW50aXR5VHlwZVwiOiBcIk9USEVSXCIsXHJcbiAgICAgIFwiY29sb3VyXCI6IFwiI2JiZmZlNVwiLFxyXG4gICAgICBcImluZHVzdHJ5VGl0bGVcIjogXCLnj6Dlrp3phY3ppbBcIixcclxuICAgICAgXCJiYW5uZXJVcmxcIjogbnVsbCxcclxuICAgICAgXCJsZWZ0QmFubmVySW1nXCI6IG51bGwsXHJcbiAgICAgIFwiX3Bvc19cIjogXCI3XCIsXHJcbiAgICAgIFwiaW5kdXN0cnlCZW5lZml0XCI6IFwi5aSn54mMMeaKmOenkuadgFwiLFxyXG4gICAgICBcImluZHVzdHJ5SWRcIjogXCIzXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlJbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjFzNXkuTFZYWFhYYi5hWFhYcmR2R0lGWFgtMjQ4LTE1NS5qcGdcIixcclxuICAgICAgXCJyaWdodEJhbm5lckltZ1wiOiBudWxsXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hvcExpc3RcIjogbnVsbCxcclxuICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiMy44NzczMzMzMzMzMzMzMzM1XCIsXHJcbiAgICAgIFwiaW5kdXN0cnlVcmxcIjogXCIvL3BhZ2VzLnRtYWxsLmNvbS93b3cvYWN0LzE1NjE3L2RxYz9hYmJ1Y2tldD1fQUItTTEwMTFfQjE0JmFjbT0wMzY1NC4xMDAzLjEuNzM1MzYyJmFsZGlkPUtYUHBudkVIJmFidGVzdD1fQUItTFIxMDExLVBSMTAxMSZzY209MTAwMy4xLjAzNjU0Lk9USEVSXzE1XzczNTM2MiZwb3M9OFwiLFxyXG4gICAgICBcImVudGl0eVR5cGVcIjogXCJPVEhFUlwiLFxyXG4gICAgICBcImNvbG91clwiOiBcIiNiNGViZmZcIixcclxuICAgICAgXCJpbmR1c3RyeVRpdGxlXCI6IFwi5pWw56CBXCIsXHJcbiAgICAgIFwiYmFubmVyVXJsXCI6IG51bGwsXHJcbiAgICAgIFwibGVmdEJhbm5lckltZ1wiOiBudWxsLFxyXG4gICAgICBcIl9wb3NfXCI6IFwiOFwiLFxyXG4gICAgICBcImluZHVzdHJ5QmVuZWZpdFwiOiBcIueWr+aKouWkp+eJjOaWsOWTgVwiLFxyXG4gICAgICBcImluZHVzdHJ5SWRcIjogXCIxNVwiLFxyXG4gICAgICBcImluZHVzdHJ5SW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTQvVEIxX3hHLkxWWFhYWGJXYVhYWHJkdkdJRlhYLTI0OC0xNTUuanBnXCIsXHJcbiAgICAgIFwicmlnaHRCYW5uZXJJbWdcIjogbnVsbFxyXG4gICAgfSwge1xyXG4gICAgICBcInNob3BMaXN0XCI6IG51bGwsXHJcbiAgICAgIFwiZmluYWxTY29yZVwiOiBcIjMuODM1OTk5OTk5OTk5OTk5NFwiLFxyXG4gICAgICBcImluZHVzdHJ5VXJsXCI6IFwiLy9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy9tYW4/YWJidWNrZXQ9X0FCLU0xMDExX0IxNCZhY209MDM2NTQuMTAwMy4xLjczNTM2MiZhbGRpZD1LWFBwbnZFSCZhYnRlc3Q9X0FCLUxSMTAxMS1QUjEwMTEmc2NtPTEwMDMuMS4wMzY1NC5PVEhFUl82XzczNTM2MiZwb3M9OVwiLFxyXG4gICAgICBcImVudGl0eVR5cGVcIjogXCJPVEhFUlwiLFxyXG4gICAgICBcImNvbG91clwiOiBcIiNjYmU5YTlcIixcclxuICAgICAgXCJpbmR1c3RyeVRpdGxlXCI6IFwi55S36KOFXCIsXHJcbiAgICAgIFwiYmFubmVyVXJsXCI6IG51bGwsXHJcbiAgICAgIFwibGVmdEJhbm5lckltZ1wiOiBudWxsLFxyXG4gICAgICBcIl9wb3NfXCI6IFwiOVwiLFxyXG4gICAgICBcImluZHVzdHJ5QmVuZWZpdFwiOiBcIuaWsOWTgeS9juiHszkuOeWFg1wiLFxyXG4gICAgICBcImluZHVzdHJ5SWRcIjogXCI2XCIsXHJcbiAgICAgIFwiaW5kdXN0cnlJbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjFtTzJxTFZYWFhYWGlYRlhYcmR2R0lGWFgtMjQ4LTE1NS5qcGdcIixcclxuICAgICAgXCJyaWdodEJhbm5lckltZ1wiOiBudWxsXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hvcExpc3RcIjogbnVsbCxcclxuICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiMy4yNDMzMzMzMzMzMzMzMzNcIixcclxuICAgICAgXCJpbmR1c3RyeVVybFwiOiBcIi8vcGFnZXMudG1hbGwuY29tL3dvdy9hY3QvMTU2MTcveGlodT9hYmJ1Y2tldD1fQUItTTEwMTFfQjE0JmFjbT0wMzY1NC4xMDAzLjEuNzM1MzYyJmFsZGlkPUtYUHBudkVIJmFidGVzdD1fQUItTFIxMDExLVBSMTAxMSZzY209MTAwMy4xLjAzNjU0Lk9USEVSXzEzXzczNTM2MiZwb3M9MTBcIixcclxuICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiT1RIRVJcIixcclxuICAgICAgXCJjb2xvdXJcIjogXCIjY2RmZmE0XCIsXHJcbiAgICAgIFwiaW5kdXN0cnlUaXRsZVwiOiBcIua0l+aKpFwiLFxyXG4gICAgICBcImJhbm5lclVybFwiOiBudWxsLFxyXG4gICAgICBcImxlZnRCYW5uZXJJbWdcIjogbnVsbCxcclxuICAgICAgXCJfcG9zX1wiOiBcIjEwXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlCZW5lZml0XCI6IFwi54iG5qy+MeWIhumSseaKolwiLFxyXG4gICAgICBcImluZHVzdHJ5SWRcIjogXCIxM1wiLFxyXG4gICAgICBcImluZHVzdHJ5SW1nXCI6IFwiLy9pbWcuYWxpY2RuLmNvbS90cHMvaTMvVEIxRnRfQ0xWWFhYWFgyWFhYWHJkdkdJRlhYLTI0OC0xNTUuanBnXCIsXHJcbiAgICAgIFwicmlnaHRCYW5uZXJJbWdcIjogbnVsbFxyXG4gICAgfSwge1xyXG4gICAgICBcInNob3BMaXN0XCI6IG51bGwsXHJcbiAgICAgIFwiZmluYWxTY29yZVwiOiBcIjMuMTU1MzMzMzMzMzMzMzMzNVwiLFxyXG4gICAgICBcImluZHVzdHJ5VXJsXCI6IFwiLy9wYWdlcy50bWFsbC5jb20vd293L2FjdC8xNTYxNy9teXhmcz9hYmJ1Y2tldD1fQUItTTEwMTFfQjE0JmFjbT0wMzY1NC4xMDAzLjEuNzM1MzYyJmFsZGlkPUtYUHBudkVIJmFidGVzdD1fQUItTFIxMDExLVBSMTAxMSZzY209MTAwMy4xLjAzNjU0Lk9USEVSXzVfNzM1MzYyJnBvcz0xMVwiLFxyXG4gICAgICBcImVudGl0eVR5cGVcIjogXCJPVEhFUlwiLFxyXG4gICAgICBcImNvbG91clwiOiBcIiNmOGUxZmZcIixcclxuICAgICAgXCJpbmR1c3RyeVRpdGxlXCI6IFwi5q+N5am056ul6KOFXCIsXHJcbiAgICAgIFwiYmFubmVyVXJsXCI6IG51bGwsXHJcbiAgICAgIFwibGVmdEJhbm5lckltZ1wiOiBudWxsLFxyXG4gICAgICBcIl9wb3NfXCI6IFwiMTFcIixcclxuICAgICAgXCJpbmR1c3RyeUJlbmVmaXRcIjogXCLot6jlupfmu6EyOTnlh480MFwiLFxyXG4gICAgICBcImluZHVzdHJ5SWRcIjogXCI1XCIsXHJcbiAgICAgIFwiaW5kdXN0cnlJbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pNC9UQjFjLkh2TFZYWFhYWFBYcFhYcmR2R0lGWFgtMjQ4LTE1NS5qcGdcIixcclxuICAgICAgXCJyaWdodEJhbm5lckltZ1wiOiBudWxsXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hvcExpc3RcIjogbnVsbCxcclxuICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiMi42NzM5OTk5OTk5OTk5OTk1XCIsXHJcbiAgICAgIFwiaW5kdXN0cnlVcmxcIjogXCIvL3BhZ2VzLnRtYWxsLmNvbS93b3cvYWN0LzE1NjE3L252emh1YW5nP2FiYnVja2V0PV9BQi1NMTAxMV9CMTQmYWNtPTAzNjU0LjEwMDMuMS43MzUzNjImYWxkaWQ9S1hQcG52RUgmYWJ0ZXN0PV9BQi1MUjEwMTEtUFIxMDExJnNjbT0xMDAzLjEuMDM2NTQuT1RIRVJfN183MzUzNjImcG9zPTEyXCIsXHJcbiAgICAgIFwiZW50aXR5VHlwZVwiOiBcIk9USEVSXCIsXHJcbiAgICAgIFwiY29sb3VyXCI6IFwiI2Q1Y2JlOFwiLFxyXG4gICAgICBcImluZHVzdHJ5VGl0bGVcIjogXCLlpbPoo4VcIixcclxuICAgICAgXCJiYW5uZXJVcmxcIjogbnVsbCxcclxuICAgICAgXCJsZWZ0QmFubmVySW1nXCI6IG51bGwsXHJcbiAgICAgIFwiX3Bvc19cIjogXCIxMlwiLFxyXG4gICAgICBcImluZHVzdHJ5QmVuZWZpdFwiOiBcIuaKmOWQjueUqOWIuOaKouaWsFwiLFxyXG4gICAgICBcImluZHVzdHJ5SWRcIjogXCI3XCIsXHJcbiAgICAgIFwiaW5kdXN0cnlJbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMy9UQjFKZGZzTFZYWFhYYlJYcFhYcmR2R0lGWFgtMjQ4LTE1NS5qcGdcIixcclxuICAgICAgXCJyaWdodEJhbm5lckltZ1wiOiBudWxsXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hvcExpc3RcIjogbnVsbCxcclxuICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiMC4wXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlVcmxcIjogXCIvL3BhZ2VzLnRtYWxsLmNvbS93b3cvYWN0LzE1NjE3L21vYmlsZXBob25lP2FiYnVja2V0PV9BQi1NMTAxMV9CMTQmYWNtPTAzNjU0LjEwMDMuMS43MzUzNjImYWxkaWQ9S1hQcG52RUgmYWJ0ZXN0PV9BQi1MUjEwMTEtUFIxMDExJnNjbT0xMDAzLjEuMDM2NTQuT1RIRVJfMTRfNzM1MzYyJnBvcz0xM1wiLFxyXG4gICAgICBcImVudGl0eVR5cGVcIjogXCJPVEhFUlwiLFxyXG4gICAgICBcImNvbG91clwiOiBcIiNjNWZmZGZcIixcclxuICAgICAgXCJpbmR1c3RyeVRpdGxlXCI6IFwi5omL5py6XCIsXHJcbiAgICAgIFwiYmFubmVyVXJsXCI6IG51bGwsXHJcbiAgICAgIFwibGVmdEJhbm5lckltZ1wiOiBudWxsLFxyXG4gICAgICBcIl9wb3NfXCI6IFwiMTNcIixcclxuICAgICAgXCJpbmR1c3RyeUJlbmVmaXRcIjogXCIx5YWD5oqi5LyY5oOg5Yi4XCIsXHJcbiAgICAgIFwiaW5kdXN0cnlJZFwiOiBcIjE0XCIsXHJcbiAgICAgIFwiaW5kdXN0cnlJbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pNC9UQjFNM3poTFZYWFhYWDRYVlhYcmR2R0lGWFgtMjQ4LTE1NS5qcGdcIixcclxuICAgICAgXCJyaWdodEJhbm5lckltZ1wiOiBudWxsXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hvcExpc3RcIjogbnVsbCxcclxuICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiMC4wXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlVcmxcIjogXCIvL3BhZ2VzLnRtYWxsLmNvbS93b3cvYWN0LzE1NjE3L3hpYW5nYmFvaHVhbnhpbj9hYmJ1Y2tldD1fQUItTTEwMTFfQjE0JmFjbT0wMzY1NC4xMDAzLjEuNzM1MzYyJmFsZGlkPUtYUHBudkVIJmFidGVzdD1fQUItTFIxMDExLVBSMTAxMSZzY209MTAwMy4xLjAzNjU0Lk9USEVSXzExXzczNTM2MiZwb3M9MTRcIixcclxuICAgICAgXCJlbnRpdHlUeXBlXCI6IFwiT1RIRVJcIixcclxuICAgICAgXCJjb2xvdXJcIjogXCIjZmZjY2RjXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlUaXRsZVwiOiBcIueuseWMhVwiLFxyXG4gICAgICBcImJhbm5lclVybFwiOiBudWxsLFxyXG4gICAgICBcImxlZnRCYW5uZXJJbWdcIjogbnVsbCxcclxuICAgICAgXCJfcG9zX1wiOiBcIjE0XCIsXHJcbiAgICAgIFwiaW5kdXN0cnlCZW5lZml0XCI6IFwi5p6B6Ie054SV5paw5bCW6LSnXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlJZFwiOiBcIjExXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlJbWdcIjogXCIvL2ltZy5hbGljZG4uY29tL3Rwcy9pMy9UQjFnRTZrTFZYWFhYY3JYRlhYcmR2R0lGWFgtMjQ4LTE1NS5qcGdcIixcclxuICAgICAgXCJyaWdodEJhbm5lckltZ1wiOiBudWxsXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hvcExpc3RcIjogbnVsbCxcclxuICAgICAgXCJmaW5hbFNjb3JlXCI6IFwiMC4wXCIsXHJcbiAgICAgIFwiaW5kdXN0cnlVcmxcIjogXCIvL3BhZ2VzLnRtYWxsLmNvbS93b3cvYWN0LzE1NjE3L25ld252P2FiYnVja2V0PV9BQi1NMTAxMV9CMTQmYWNtPTAzNjU0LjEwMDMuMS43MzUzNjImYWxkaWQ9S1hQcG52RUgmYWJ0ZXN0PV9BQi1MUjEwMTEtUFIxMDExJnNjbT0xMDAzLjEuMDM2NTQuT1RIRVJfMTBfNzM1MzYyJnBvcz0xNVwiLFxyXG4gICAgICBcImVudGl0eVR5cGVcIjogXCJPVEhFUlwiLFxyXG4gICAgICBcImNvbG91clwiOiBcIiNmZmY4ZWVcIixcclxuICAgICAgXCJpbmR1c3RyeVRpdGxlXCI6IFwi6Z6L5bGlXCIsXHJcbiAgICAgIFwiYmFubmVyVXJsXCI6IG51bGwsXHJcbiAgICAgIFwibGVmdEJhbm5lckltZ1wiOiBudWxsLFxyXG4gICAgICBcIl9wb3NfXCI6IFwiMTVcIixcclxuICAgICAgXCJpbmR1c3RyeUJlbmVmaXRcIjogXCLmva7lk4Hnsr7pgInpnovlsaVcIixcclxuICAgICAgXCJpbmR1c3RyeUlkXCI6IFwiMTBcIixcclxuICAgICAgXCJpbmR1c3RyeUltZ1wiOiBcIi8vaW1nLmFsaWNkbi5jb20vdHBzL2kzL1RCMS5xenBMVlhYWFhYLlhGWFhyZHZHSUZYWC0yNDgtMTU1LmpwZ1wiLFxyXG4gICAgICBcInJpZ2h0QmFubmVySW1nXCI6IG51bGxcclxuICAgIH1dLFxyXG4gICAgXCJpc0Zvcm1hbFwiOiBcImZhbHNlXCIsXHJcbiAgICBcImV4cG9zdXJlUGFyYW1cIjogXCIvL2FjLm1tc3RhdC5jb20vMS5naWY/YXBwbHk9dm90ZSZhYmJ1Y2tldD1fQUItTTEwMTFfQjE0JmNvbT0wMiZhY209MDM2NTQuMTAwMy4xLjczNTM2MiZjb2Q9MDM2NTQmY2FjaGU9VTVyZXZzVG4mYWxkaWQ9S1hQcG52RUgmbG9ndHlwZT00JmFidGVzdD1fQUItTFIxMDExLVBSMTAxMSZzY209MTAwMy4xLjAzNjU0LjczNTM2MiZpcD1cIixcclxuICAgIFwiaWRcIjogXCIwMzY1NFwiXHJcbiAgfVxyXG5cclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgYmFubmVyOiByZXF1aXJlKCcuL2Jhbm5lci52dWUnKVxyXG4gICAgfSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRzOiB7XHJcbiAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHt9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIE5VTUJFUl8yNDg6IDI0OCxcclxuICAgICAgICBOVU1CRVJfMTU1OiAxNTUsXHJcbiAgICAgICAgTlVNQkVSXzM3MzogMzczLFxyXG4gICAgICAgIE5VTUJFUl8yMzc6IDIzNyxcclxuICAgICAgICBOVU1CRVJfMTg2OiAxODYsXHJcbiAgICAgICAgTlVNQkVSXzIwODogMjA4LFxyXG4gICAgICAgIE5VTUJFUl83NTA6IDc1MCxcclxuICAgICAgICBzdWJJdGVtQmc6ICcvL2d3LmFsaWNkbi5jb20vdHBzL1RCMVF6VWZMVlhYWFhhT1hWWFhYWFhYWFhYWC0yNDgtODYuanBnJyxcclxuICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgc3ViSXRlbXM6IFtdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuaW5pdERhdGEoZGVtb0NvbnRlbnQpXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBnZXRTdWJJdGVtVG9wOiBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgIHJldHVybiAoaSAtIGkgJSAzKSAvIDMgKiAoMjQxICsgMyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdldFN1Ykl0ZW1MZWZ0OiBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgIHJldHVybiBpICUgMyAqICgyNDggKyAzKTtcclxuICAgICAgfSxcclxuICAgICAgaW5pdERhdGE6IGZ1bmN0aW9uIChjb250ZW50KSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IGNvbnRlbnQubWFpbjtcclxuICAgICAgICB0aGlzLnN1Ykl0ZW1zID0gY29udGVudC5zdWI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2F0ZWdvcnkudnVlPzVhNDIwNjY2IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbKF92bS5kcy5mbG9vclRpdGxlKSA/IF9jKCdpbWFnZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uZHMuZmxvb3JUaXRsZVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpdGVtLWNvbnRhaW5lclwiXG4gIH0sIF92bS5fbCgoX3ZtLml0ZW1zKSwgZnVuY3Rpb24oaSwgaXRlbSkge1xuICAgIHJldHVybiBfYygnZGl2Jywge1xuICAgICAgc3R5bGU6ICh7XG4gICAgICAgIHdpZHRoOiA3NTAsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IDE0LFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGl0ZW0uY29sb3VyXG4gICAgICB9KVxuICAgIH0sIFtfYygnZGl2JywgW19jKCdiYW5uZXInLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcIndpZHRoXCI6IF92bS5OVU1CRVJfNzUwLFxuICAgICAgICBcImhlaWdodFwiOiBfdm0uTlVNQkVSXzIzNyxcbiAgICAgICAgXCJzcmNcIjogaSAlIDIgPT09IDAgPyBpdGVtLmxlZnRCYW5uZXJJbWcgOiBpdGVtLnJpZ2h0QmFubmVySW1nLFxuICAgICAgICBcImhyZWZcIjogaXRlbS5iYW5uZXJVcmxcbiAgICAgIH1cbiAgICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwic2hvcC1saXN0XCJcbiAgICB9LCBfdm0uX2woKGl0ZW0uc2hvcExpc3QpLCBmdW5jdGlvbihzaG9wKSB7XG4gICAgICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwic2hvcC1pbWctY29udGFpbmVyXCJcbiAgICAgIH0sIFtfYygnYmFubmVyJywge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIFwid2lkdGhcIjogX3ZtLk5VTUJFUl8xODYsXG4gICAgICAgICAgXCJoZWlnaHRcIjogX3ZtLk5VTUJFUl8yMDgsXG4gICAgICAgICAgXCJzcmNcIjogc2hvcC5waWNVcmwsXG4gICAgICAgICAgXCJocmVmXCI6IHNob3Auc2hvcFVybFxuICAgICAgICB9XG4gICAgICB9KV0sIDEpXG4gICAgfSkpXSlcbiAgfSkpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN1Yi1pdGVtLWNvbnRhaW5lclwiLFxuICAgIHN0eWxlOiAoe1xuICAgICAgaGVpZ2h0OiBNYXRoLnJvdW5kKF92bS5zdWJJdGVtcy5sZW5ndGggLyAzKSAqICgyNDEgKyAzKVxuICAgIH0pXG4gIH0sIF92bS5fbCgoX3ZtLnN1Ykl0ZW1zKSwgZnVuY3Rpb24oaSwgaXRlbSkge1xuICAgIHJldHVybiBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwic3ViLWl0ZW1cIixcbiAgICAgIHN0eWxlOiAoe1xuICAgICAgICB0b3A6IF92bS5nZXRTdWJJdGVtVG9wKGkpLFxuICAgICAgICBsZWZ0OiBfdm0uZ2V0U3ViSXRlbUxlZnQoaSlcbiAgICAgIH0pXG4gICAgfSwgW19jKCdpbWFnZScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInN1Yi1pdGVtLWJnXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNyY1wiOiBfdm0uc3ViSXRlbUJnXG4gICAgICB9XG4gICAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJzdWItaXRlbS1pbWdcIlxuICAgIH0sIFtfYygnYmFubmVyJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ3aWR0aFwiOiBfdm0uTlVNQkVSXzI0OCxcbiAgICAgICAgXCJoZWlnaHRcIjogX3ZtLk5VTUJFUl8xNTUsXG4gICAgICAgIFwic3JjXCI6IGl0ZW0uaW5kdXN0cnlJbWcsXG4gICAgICAgIFwiaHJlZlwiOiBpdGVtLmluZHVzdHJ5VXJsXG4gICAgICB9XG4gICAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInN1Yi1pdGVtLXRpdGxlXCJcbiAgICB9LCBbX2MoJ3RleHQnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJpbmR1c3RyeS10aXRsZVwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IGl0ZW0uaW5kdXN0cnlVcmxcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KF92bS5fcyhpdGVtLmluZHVzdHJ5VGl0bGUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImluZHVzdHJ5LWJlbmVmaXRcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBpdGVtLmluZHVzdHJ5VXJsXG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3MoaXRlbS5pbmR1c3RyeUJlbmVmaXQpKV0pXSldKVxuICB9KSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi00NTdkYTFhMVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNDU3ZGExYTEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9zaG93Y2FzZS9pbmNsdWRlL2NhdGVnb3J5LnZ1ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAxNDNcbi8vIG1vZHVsZSBjaHVua3MgPSA0NiJdLCJzb3VyY2VSb290IjoiIn0=