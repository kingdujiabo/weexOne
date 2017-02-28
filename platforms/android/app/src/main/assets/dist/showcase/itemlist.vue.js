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
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-rewriter?id=data-v-0abdd966!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./itemlist.vue?entry=true\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(161),
	  /* template */
	  __webpack_require__(162),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\showcase\\itemlist.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] itemlist.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0abdd966", Component.options)
	  } else {
	    hotAPI.reload("data-v-0abdd966", Component.options)
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

/***/ 161:
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	  data: function () {
	    return {
	      shopList: [{
	        id: 1,
	        scopeValue: 1,
	        PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	        PersonName: 'Mendeleyev',
	        PersonVisitTime: 'today',
	        shopDesc: 'Genius only means hard-working all one\'s life',
	        shopImgList: [{
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd2.alicdn.com/bao/uploaded/i2/TB1rtOnHpXXXXXLaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd4.alicdn.com/bao/uploaded/i4/TB15KrfFVXXXXXJXXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd2.alicdn.com/bao/uploaded/i2/TB1t5YBGVXXXXXcaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	        }],
	        shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopLikeText: '6',
	        shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopCommentText: '97',
	        shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	        shopLookText: '1003',
	        shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	        shareText: "10"
	
	      }, {
	        id: 2,
	        scopeValue: 2,
	        PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	        PersonName: 'Napoleon',
	        PersonVisitTime: 'yesterday',
	        shopDesc: 'The man who has made up his mind to win will never say "impossible "',
	        shopImgList: [{
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd1.alicdn.com/imgextra/i1/2655929383/TB2.qITjpXXXXcIXXXXXXXXXXXX_!!2655929383.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd3.alicdn.com/imgextra/i3/2655929383/TB2eWwZjpXXXXbHXXXXXXXXXXXX_!!2655929383.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd2.alicdn.com/imgextra/i2/2655929383/TB2tgQWjpXXXXbZXXXXXXXXXXXX_!!2655929383.jpg_220x220.jpg'
	        }],
	        shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopLikeText: '6',
	        shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopCommentText: '97',
	        shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	        shopLookText: '1003',
	        shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	        shareText: "10"
	
	      }, {
	        id: 3,
	        scopeValue: 3,
	        PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	        PersonName: 'Balzac',
	        PersonVisitTime: 'yesterday',
	        shopDesc: 'There is no such thing as a great talent without great will - power',
	        shopImgList: [{
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd1.alicdn.com/imgextra/i1/TB1AFz9LXXXXXbrXVXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd2.alicdn.com/imgextra/i2/2557954751/TB2is2njXXXXXatXpXXXXXXXXXX_!!2557954751.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd2.alicdn.com/imgextra/i2/2557954751/TB2PNYGjXXXXXbXXXXXXXXXXXXX_!!2557954751.jpg_220x220.jpg'
	        }],
	        shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopLikeText: '6',
	        shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopCommentText: '97',
	        shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	        shopLookText: '1003',
	        shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	        shareText: "10"
	
	      }, {
	        id: 4,
	        scopeValue: 4,
	        PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	        PersonName: 'Thomas Carlyle',
	        PersonVisitTime: '3 day ago',
	        shopDesc: 'Cease to struggle and you cease to live',
	        shopImgList: [{
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd4.alicdn.com/imgextra/i4/69426324/TB2zbwdfXXXXXa4XpXXXXXXXXXX_!!69426324.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd4.alicdn.com/imgextra/i4/69426324/TB2L7ZAfXXXXXXOXXXXXXXXXXXX_!!69426324.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd4.alicdn.com/imgextra/i4/69426324/TB2p9wufXXXXXbiXXXXXXXXXXXX_!!69426324.jpg_220x220.jpg'
	        }],
	        shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopLikeText: '6',
	        shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopCommentText: '97',
	        shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	        shopLookText: '1003',
	        shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	        shareText: "10"
	
	      }, {
	        id: 5,
	        scopeValue: 5,
	        PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	        PersonName: 'Addison',
	        PersonVisitTime: 'yesterday',
	        shopDesc: 'A strong man will struggle with the storms of fate',
	        shopImgList: [{
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1MQ8_KVXXXXaLXVXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd2.alicdn.com/imgextra/i2/53218032/TB2bGSqiXXXXXXyXpXXXXXXXXXX_!!53218032.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd2.alicdn.com/bao/uploaded/i2/TB1kP2zKFXXXXbIXXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	        }],
	        shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopLikeText: '6',
	        shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopCommentText: '97',
	        shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	        shopLookText: '1003',
	        shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	        shareText: "10"
	
	      }, {
	        id: 6,
	        scopeValue: 1,
	        PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	        PersonName: 'Ruskin',
	        PersonVisitTime: 'yesterday',
	        shopDesc: 'Living without an aim is like sailing without a compass',
	        shopImgList: [{
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd4.alicdn.com/bao/uploaded/i4/TB11yFnHXXXXXakaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd4.alicdn.com/imgextra/i4/32720628/TB2CRJUcXXXXXXwXpXXXXXXXXXX_!!32720628.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd2.alicdn.com/bao/uploaded/i2/TB17LUzHXXXXXcEaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	        }],
	        shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopLikeText: '6',
	        shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopCommentText: '97',
	        shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	        shopLookText: '1003',
	        shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	        shareText: "10"
	
	      }, {
	        id: 7,
	        scopeValue: 2,
	        PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	        PersonName: 'Yiming',
	        PersonVisitTime: 'today',
	        shopDesc: 'Live a noble and honest life. Reviving past times in your old age will help you to enjoy your life again',
	        shopImgList: [{
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd4.alicdn.com/bao/uploaded/i4/TB1hvNoJXXXXXaMaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd4.alicdn.com/imgextra/i4/2058567235/TB2V8iygFXXXXaRXpXXXXXXXXXX_!!2058567235.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd2.alicdn.com/imgextra/i2/2058567235/TB2im1QgFXXXXX8XXXXXXXXXXXX_!!2058567235.jpg_220x220.jpg'
	        }],
	        shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopLikeText: '6',
	        shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopCommentText: '97',
	        shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	        shopLookText: '1003',
	        shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	        shareText: "10"
	
	      }, {
	        id: 8,
	        scopeValue: 3,
	        PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	        PersonName: 'Brown',
	        PersonVisitTime: 'yesterday',
	        shopDesc: 'Behind every successful man there\'s a lot u unsuccessful years',
	        shopImgList: [{
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd1.alicdn.com/bao/uploaded/i1/TB18BZ2KFXXXXb8XFXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd1.alicdn.com/imgextra/i1/2775383848/TB2r012jVXXXXXHXpXXXXXXXXXX_!!2775383848.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd3.alicdn.com/imgextra/i3/2775383848/TB2iI9VjVXXXXaoXpXXXXXXXXXX_!!2775383848.jpg_220x220.jpg'
	        }],
	        shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopLikeText: '6',
	        shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopCommentText: '97',
	        shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	        shopLookText: '1003',
	        shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	        shareText: "10"
	
	      }, {
	        id: 9,
	        scopeValue: 4,
	        PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	        PersonName: 'YIMING',
	        PersonVisitTime: 'today',
	        shopDesc: 'Enrich your life today,. yesterday is history.tomorrow is mystery',
	        shopImgList: [{
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1JB.rLpXXXXXLXXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd4.alicdn.com/imgextra/i4/2702739128/TB2JdvmjVXXXXXjXXXXXXXXXXXX_!!2702739128.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd2.alicdn.com/imgextra/i2/2702739128/TB2A.e6jVXXXXXGXpXXXXXXXXXX_!!2702739128.jpg_220x220.jpg'
	        }],
	        shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopLikeText: '6',
	        shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopCommentText: '97',
	        shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	        shopLookText: '1003',
	        shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	        shareText: "10"
	
	      }, {
	        id: 10,
	        scopeValue: 5,
	        PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	        PersonName: 'YIMING',
	        PersonVisitTime: 'yesterday',
	        shopDesc: 'The secret of success is constancy to purpose',
	        shopImgList: [{
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd3.alicdn.com/bao/uploaded/i3/TB17zXOGXXXXXbEXVXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd1.alicdn.com/imgextra/i1/2265445951/TB22ACTbFXXXXXBXXXXXXXXXXXX_!!2265445951.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd3.alicdn.com/imgextra/i3/2265445951/TB2oXqUbFXXXXXIXXXXXXXXXXXX_!!2265445951.jpg_220x220.jpg'
	        }],
	        shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopLikeText: '6',
	        shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopCommentText: '97',
	        shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	        shopLookText: '1003',
	        shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	        shareText: "10"
	      }]
	    };
	  },
	  methods: {
	    loadmore: function (e) {
	      modal.toast({
	        'message': 'loadmore',
	        'duration': 2.0
	      });
	    },
	    oncellclick: function (id) {
	      modal.toast({
	        'message': 'row ' + id + ' clicked',
	        'duration': 2.0
	      });
	    }
	  }
	
	};

/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('list', {
	    staticClass: "list",
	    attrs: {
	      "loadmoreoffset": "2000"
	    },
	    on: {
	      "loadmore": _vm.loadmore
	    }
	  }, _vm._l((_vm.shopList), function(item) {
	    return _c('cell', {
	      staticClass: "cell",
	      attrs: {
	        "scope": item.scopeValue
	      },
	      on: {
	        "click": function($event) {
	          _vm.oncellclick(item.id)
	        }
	      }
	    }, [_c('div', {
	      staticClass: "shopDiv"
	    }, [_c('div', {
	      staticClass: "shopHeader",
	      staticStyle: {
	        "flex-direction": "row"
	      }
	    }, [_c('div', {
	      staticStyle: {
	        "flex": "2",
	        "flex-direction": "row"
	      }
	    }, [_c('div', [_c('image', {
	      staticStyle: {
	        "width": "60",
	        "height": "60"
	      },
	      attrs: {
	        "src": item.PersonPhoto
	      }
	    })]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "flex-direction": "column",
	        "margin-left": "5"
	      }
	    }, [_c('div', {
	      staticStyle: {
	        "margin-top": "5"
	      }
	    }, [_c('text', {
	      staticStyle: {
	        "font-size": "20"
	      }
	    }, [_vm._v(_vm._s(item.PersonName))])]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "margin-top": "5"
	      }
	    }, [_c('text', {
	      staticStyle: {
	        "font-size": "20",
	        "color": "#cccccc"
	      }
	    }, [_vm._v(_vm._s(item.PersonVisitTime))])])])]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "flex": "5",
	        "flex-direction": "row"
	      }
	    }, [_c('div', {
	      staticStyle: {
	        "flex-direction": "row",
	        "margin-left": "10",
	        "margin-top": "10"
	      }
	    }, [_c('div', [_c('image', {
	      staticStyle: {
	        "width": "20",
	        "height": "20"
	      },
	      attrs: {
	        "src": "https://img.alicdn.com/tps/i4/TB1zkDeIFXXXXXrXVXX07tlTXXX-200-200.png_88x88xz.jpg"
	      }
	    })]), _vm._v(" "), _c('div', [_c('text', {
	      staticStyle: {
	        "font-size": "20"
	      }
	    }, [_vm._v("Hope")])])]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "position": "absolute",
	        "left": "90",
	        "top": "10",
	        "flex-direction": "row"
	      }
	    }, [_c('div', [_c('image', {
	      staticStyle: {
	        "width": "20",
	        "height": "20"
	      },
	      attrs: {
	        "src": "https://img.alicdn.com/tps/i2/TB1hRb1IXXXXXX3XVXXXQaP.pXX-87-87.jpeg"
	      }
	    })]), _vm._v(" "), _c('div', [_c('text', {
	      staticStyle: {
	        "font-size": "20"
	      }
	    }, [_vm._v("Mem")])])]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "position": "absolute",
	        "left": "170",
	        "top": "10",
	        "flex-direction": "row"
	      }
	    }, [_c('div', [_c('image', {
	      staticStyle: {
	        "width": "20",
	        "height": "20"
	      },
	      attrs: {
	        "src": "https://img.alicdn.com/tps/i3/TB1DGkJJFXXXXaZXFXX07tlTXXX-200-200.png"
	      }
	    })]), _vm._v(" "), _c('div', [_c('text', {
	      staticStyle: {
	        "font-size": "20"
	      }
	    }, [_vm._v("auth")])])]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "position": "absolute",
	        "left": "250",
	        "top": "10",
	        "flex-direction": "row"
	      }
	    }, [_c('div', [_c('image', {
	      staticStyle: {
	        "width": "20",
	        "height": "20"
	      },
	      attrs: {
	        "src": "https://img.alicdn.com/tps/i1/TB1nFvPIXXXXXbUXXXXUAkPJpXX-87-87.png"
	      }
	    })]), _vm._v(" "), _c('div', [_c('text', {
	      staticStyle: {
	        "font-size": "20"
	      }
	    }, [_vm._v("Friend")])])]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "position": "absolute",
	        "left": "330",
	        "top": "10",
	        "flex-direction": "row"
	      }
	    }, [_c('div', [_c('image', {
	      staticStyle: {
	        "width": "20",
	        "height": "20"
	      },
	      attrs: {
	        "src": "https://img.alicdn.com/tps/i2/TB1CpD7IXXXXXbSXXXXUAkPJpXX-87-87.png"
	      }
	    })]), _vm._v(" "), _c('div', [_c('text', {
	      staticStyle: {
	        "font-size": "20"
	      }
	    }, [_vm._v("issue")])])]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "position": "absolute",
	        "left": "410",
	        "top": "10",
	        "flex-direction": "row"
	      }
	    }, [_c('div', [_c('image', {
	      staticStyle: {
	        "width": "20",
	        "height": "20"
	      },
	      attrs: {
	        "src": "https://gtms02.alicdn.com/tps/i2/TB11ZZfIVXXXXbMXFXXEDhGGXXX-32-32.png"
	      }
	    })]), _vm._v(" "), _c('div', [_c('text', {
	      staticStyle: {
	        "font-size": "20"
	      }
	    }, [_vm._v("super")])])])])]), _vm._v(" "), _c('div', {
	      staticClass: "shopBody",
	      staticStyle: {
	        "flex-direction": "column"
	      }
	    }, [_c('div', {
	      staticClass: "descDiv",
	      staticStyle: {
	        "margin-top": "10",
	        "margin-left": "10"
	      }
	    }, [_c('text', {
	      staticClass: "shopDesc",
	      staticStyle: {
	        "font-size": "25"
	      }
	    }, [_vm._v(_vm._s(item.shopDesc))])]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "flex-direction": "row"
	      }
	    }, _vm._l((item.shopImgList), function(img) {
	      return _c('div', {
	        staticClass: "imgDiv",
	        staticStyle: {
	          "flex": "1",
	          "flex-direction": "column",
	          "margin": "10"
	        }
	      }, [_c('div', [_c('image', {
	        staticClass: "shopImg",
	        style: ({
	          width: img.shopImgWidth,
	          height: img.shopImgHeight
	        }),
	        attrs: {
	          "src": img.shopImg
	        }
	      })]), _vm._v(" "), _c('div', {
	        staticStyle: {
	          "flex": "1",
	          "margin-top": "10",
	          "flex-direction": "row"
	        }
	      }, [_c('div', {
	        staticStyle: {
	          "flex": "1",
	          "justify-content": "center",
	          "flex-direction": "row"
	        }
	      }, [_c('div', [_c('image', {
	        staticStyle: {
	          "width": "20",
	          "height": "20"
	        },
	        attrs: {
	          "src": "https://img.alicdn.com/tps/i1/TB1nFvPIXXXXXbUXXXXUAkPJpXX-87-87.png"
	        }
	      })]), _vm._v(" "), _c('div', {
	        staticStyle: {
	          "margin-left": "5"
	        }
	      }, [_c('text', {
	        staticStyle: {
	          "font-size": "20",
	          "text-align": "center"
	        }
	      }, [_vm._v("Up")])])]), _vm._v(" "), _c('div', {
	        staticStyle: {
	          "flex": "1",
	          "justify-content": "center",
	          "flex-direction": "row"
	        }
	      }, [_c('div', [_c('image', {
	        staticStyle: {
	          "width": "20",
	          "height": "20"
	        },
	        attrs: {
	          "src": "https://img.alicdn.com/tps/i2/TB1CpD7IXXXXXbSXXXXUAkPJpXX-87-87.png"
	        }
	      })]), _vm._v(" "), _c('div', {
	        staticStyle: {
	          "margin-left": "5"
	        }
	      }, [_c('text', {
	        staticStyle: {
	          "font-size": "20",
	          "text-align": "center"
	        }
	      }, [_vm._v("down")])])])])])
	    }))]), _vm._v(" "), _c('div', {
	      staticClass: "shopFooter",
	      staticStyle: {
	        "flex-direction": "row",
	        "margin-top": "10",
	        "margin-left": "10",
	        "justify-content": "flex-end"
	      }
	    }, [_c('div', {
	      staticStyle: {
	        "margin-right": "5"
	      }
	    }, [_c('image', {
	      staticClass: "shopLikeImg smallImg",
	      attrs: {
	        "src": item.shopLikeImg
	      }
	    })]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "margin-right": "15"
	      }
	    }, [_c('text', {
	      staticClass: "shopLikeText",
	      staticStyle: {
	        "font-size": "20"
	      }
	    }, [_vm._v(_vm._s(item.shopLikeText))])]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "margin-right": "5"
	      }
	    }, [_c('image', {
	      staticClass: "shopCommentImg smallImg",
	      attrs: {
	        "src": item.shopCommentImg
	      }
	    })]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "margin-right": "15"
	      }
	    }, [_c('text', {
	      staticClass: "shopCommentText",
	      staticStyle: {
	        "font-size": "20"
	      }
	    }, [_vm._v(_vm._s(item.shopCommentText))])]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "margin-right": "5"
	      }
	    }, [_c('image', {
	      staticClass: "shopLookImg smallImg",
	      attrs: {
	        "src": item.shopLookImg
	      }
	    })]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "margin-right": "15"
	      }
	    }, [_c('text', {
	      staticClass: "shopLookText",
	      staticStyle: {
	        "font-size": "20"
	      }
	    }, [_vm._v(_vm._s(item.shopLookText))])]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "margin-right": "5"
	      }
	    }, [_c('image', {
	      staticClass: "shareImg smallImg",
	      attrs: {
	        "src": item.shareImg
	      }
	    })]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "margin-right": "20"
	      }
	    }, [_c('text', {
	      staticClass: "shareText",
	      staticStyle: {
	        "font-size": "20"
	      }
	    }, [_vm._v(_vm._s(item.shareText))])])])])])
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0abdd966", module.exports)
	  }
	}

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQ/ZWQ2NCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9zaG93Y2FzZS9pdGVtbGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcz9kNGYzKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vL2l0ZW1saXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2hvd2Nhc2UvaXRlbWxpc3QudnVlPzZjOWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3JDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBK0UsaURBQWlELElBQUk7QUFDcEksb0NBQW1DOztBQUVuQztBQUNBLGFBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOERBQTZEO0FBQzdEO0FBQ0E7QUFDQSxvQ0FBbUM7QUFDbkMsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM2S0E7QUFDQTtxQkFFQTs7O2FBSUE7cUJBQ0E7c0JBQ0E7cUJBQ0E7MEJBQ0E7bUJBQ0E7O3lCQUVBOzBCQUNBO29CQUNBO0FBSEE7eUJBS0E7MEJBQ0E7b0JBQ0E7QUFIQTt5QkFLQTswQkFDQTtvQkFFQTtBQUpBO3NCQUtBO3VCQUNBO3lCQUNBOzBCQUNBO3NCQUNBO3VCQUNBO21CQUNBO29CQUdBOztBQTdCQSxRQURBO2FBZ0NBO3FCQUNBO3NCQUNBO3FCQUNBOzBCQUNBO21CQUNBOzt5QkFFQTswQkFDQTtvQkFDQTtBQUhBO3lCQUtBOzBCQUNBO29CQUNBO0FBSEE7eUJBS0E7MEJBQ0E7b0JBRUE7QUFKQTtzQkFLQTt1QkFDQTt5QkFDQTswQkFDQTtzQkFDQTt1QkFDQTttQkFDQTtvQkFHQTs7QUE3QkE7YUErQkE7cUJBQ0E7c0JBQ0E7cUJBQ0E7MEJBQ0E7bUJBQ0E7O3lCQUVBOzBCQUNBO29CQUNBO0FBSEE7eUJBS0E7MEJBQ0E7b0JBQ0E7QUFIQTt5QkFLQTswQkFDQTtvQkFFQTtBQUpBO3NCQUtBO3VCQUNBO3lCQUNBOzBCQUNBO3NCQUNBO3VCQUNBO21CQUNBO29CQUdBOztBQTdCQTthQStCQTtxQkFDQTtzQkFDQTtxQkFDQTswQkFDQTttQkFDQTs7eUJBRUE7MEJBQ0E7b0JBQ0E7QUFIQTt5QkFLQTswQkFDQTtvQkFDQTtBQUhBO3lCQUtBOzBCQUNBO29CQUVBO0FBSkE7c0JBS0E7dUJBQ0E7eUJBQ0E7MEJBQ0E7c0JBQ0E7dUJBQ0E7bUJBQ0E7b0JBR0E7O0FBN0JBO2FBK0JBO3FCQUNBO3NCQUNBO3FCQUNBOzBCQUNBO21CQUNBOzt5QkFFQTswQkFDQTtvQkFDQTtBQUhBO3lCQUtBOzBCQUNBO29CQUNBO0FBSEE7eUJBS0E7MEJBQ0E7b0JBRUE7QUFKQTtzQkFLQTt1QkFDQTt5QkFDQTswQkFDQTtzQkFDQTt1QkFDQTttQkFDQTtvQkFHQTs7QUE3QkE7YUErQkE7cUJBQ0E7c0JBQ0E7cUJBQ0E7MEJBQ0E7bUJBQ0E7O3lCQUVBOzBCQUNBO29CQUNBO0FBSEE7eUJBS0E7MEJBQ0E7b0JBQ0E7QUFIQTt5QkFLQTswQkFDQTtvQkFFQTtBQUpBO3NCQUtBO3VCQUNBO3lCQUNBOzBCQUNBO3NCQUNBO3VCQUNBO21CQUNBO29CQUdBOztBQTdCQTthQStCQTtxQkFDQTtzQkFDQTtxQkFDQTswQkFDQTttQkFDQTs7eUJBRUE7MEJBQ0E7b0JBQ0E7QUFIQTt5QkFLQTswQkFDQTtvQkFDQTtBQUhBO3lCQUtBOzBCQUNBO29CQUVBO0FBSkE7c0JBS0E7dUJBQ0E7eUJBQ0E7MEJBQ0E7c0JBQ0E7dUJBQ0E7bUJBQ0E7b0JBR0E7O0FBN0JBO2FBK0JBO3FCQUNBO3NCQUNBO3FCQUNBOzBCQUNBO21CQUNBOzt5QkFFQTswQkFDQTtvQkFDQTtBQUhBO3lCQUtBOzBCQUNBO29CQUNBO0FBSEE7eUJBS0E7MEJBQ0E7b0JBRUE7QUFKQTtzQkFLQTt1QkFDQTt5QkFDQTswQkFDQTtzQkFDQTt1QkFDQTttQkFDQTtvQkFHQTs7QUE3QkE7YUErQkE7cUJBQ0E7c0JBQ0E7cUJBQ0E7MEJBQ0E7bUJBQ0E7O3lCQUVBOzBCQUNBO29CQUNBO0FBSEE7eUJBS0E7MEJBQ0E7b0JBQ0E7QUFIQTt5QkFLQTswQkFDQTtvQkFFQTtBQUpBO3NCQUtBO3VCQUNBO3lCQUNBOzBCQUNBO3NCQUNBO3VCQUNBO21CQUNBO29CQUdBOztBQTdCQTthQStCQTtxQkFDQTtzQkFDQTtxQkFDQTswQkFDQTttQkFDQTs7eUJBRUE7MEJBQ0E7b0JBQ0E7QUFIQTt5QkFLQTswQkFDQTtvQkFDQTtBQUhBO3lCQUtBOzBCQUNBO29CQUVBO0FBSkE7c0JBS0E7dUJBQ0E7eUJBQ0E7MEJBQ0E7c0JBQ0E7dUJBQ0E7bUJBQ0E7b0JBSUE7QUE5QkE7QUFoUkE7QUErU0E7OzRCQUVBOztvQkFFQTtxQkFFQTtBQUhBO0FBSUE7Z0NBQ0E7O2tDQUVBO3FCQUVBO0FBSEE7QUFNQTtBQWRBOztBQWxUQSxHOzs7Ozs7O0FDN05BLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJzaG93Y2FzZVxcaXRlbWxpc3QudnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTBhYmRkOTY2IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vaXRlbWxpc3QudnVlP2VudHJ5PXRydWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaXRlbWxpc3QudnVlP2VudHJ5PXRydWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMGFiZGQ5NjYhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2l0ZW1saXN0LnZ1ZT9lbnRyeT10cnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFx3ZWVrU3R1ZHlcXFxcd2VleDJcXFxcd2VleDNcXFxcc3JjXFxcXHNob3djYXNlXFxcXGl0ZW1saXN0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGl0ZW1saXN0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wYWJkZDk2NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTBhYmRkOTY2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaG93Y2FzZS9pdGVtbGlzdC52dWU/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDU0IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBzY29wZUlkLFxuICBjc3NNb2R1bGVzXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICAvLyBpbmplY3QgY3NzTW9kdWxlc1xuICBpZiAoY3NzTW9kdWxlcykge1xuICAgIHZhciBjb21wdXRlZCA9IG9wdGlvbnMuY29tcHV0ZWQgfHwgKG9wdGlvbnMuY29tcHV0ZWQgPSB7fSlcbiAgICBPYmplY3Qua2V5cyhjc3NNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBjc3NNb2R1bGVzW2tleV1cbiAgICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtb2R1bGUgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MCA2MSA2MiA2MyA2NCA2NSA2NiA2NyA2OCA2OSA3MCA3MSA3MiA3MyA3NCA3NSA3NiA3NyA3OCA3OSA4MCA4MSA4MiA4MyIsIjx0ZW1wbGF0ZT5cclxuICA8bGlzdCBjbGFzcz1cImxpc3RcIiBAbG9hZG1vcmU9XCJsb2FkbW9yZVwiIGxvYWRtb3Jlb2Zmc2V0PTIwMDA+XHJcbiAgICA8Y2VsbCBjbGFzcz1cImNlbGxcIiB2LWZvcj1cIml0ZW0gaW4gc2hvcExpc3RcIiA6c2NvcGU9XCJpdGVtLnNjb3BlVmFsdWVcIiBAY2xpY2s9XCJvbmNlbGxjbGljayhpdGVtLmlkKVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2hvcERpdlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaG9wSGVhZGVyXCIgc3R5bGU9XCJmbGV4LWRpcmVjdGlvbjpyb3c7XCI+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiZmxleDoyO2ZsZXgtZGlyZWN0aW9uOnJvdztcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1hZ2Ugc3R5bGU9XCJ3aWR0aDo2MDtoZWlnaHQ6NjA7XCIgOnNyYz1cIml0ZW0uUGVyc29uUGhvdG9cIj48L2ltYWdlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXJnaW4tbGVmdDo1O1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tdG9wOjU7XCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZToyMDtcIj57e2l0ZW0uUGVyc29uTmFtZX19PC90ZXh0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tdG9wOjU7XCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZToyMDtjb2xvcjojY2NjY2NjO1wiPnt7aXRlbS5QZXJzb25WaXNpdFRpbWV9fTwvdGV4dD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJmbGV4OjU7ZmxleC1kaXJlY3Rpb246cm93O1wiPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZmxleC1kaXJlY3Rpb246cm93O21hcmdpbi1sZWZ0OjEwO21hcmdpbi10b3A6MTA7XCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbWFnZSBzdHlsZT1cIndpZHRoOjIwO2hlaWdodDoyMDtcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltZy5hbGljZG4uY29tL3Rwcy9pNC9UQjF6a0RlSUZYWFhYWHJYVlhYMDd0bFRYWFgtMjAwLTIwMC5wbmdfODh4ODh4ei5qcGdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZToyMDtcIj5Ib3BlPC90ZXh0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6OTA7dG9wOjEwO2ZsZXgtZGlyZWN0aW9uOnJvdztcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltYWdlIHN0eWxlPVwid2lkdGg6MjA7aGVpZ2h0OjIwO1wiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1nLmFsaWNkbi5jb20vdHBzL2kyL1RCMWhSYjFJWFhYWFhYM1hWWFhYUWFQLnBYWC04Ny04Ny5qcGVnXCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRleHQgc3R5bGU9XCJmb250LXNpemU6MjA7XCI+TWVtPC90ZXh0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6MTcwO3RvcDoxMDtmbGV4LWRpcmVjdGlvbjpyb3c7XCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbWFnZSBzdHlsZT1cIndpZHRoOjIwO2hlaWdodDoyMDtcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltZy5hbGljZG4uY29tL3Rwcy9pMy9UQjFER2tKSkZYWFhYYVpYRlhYMDd0bFRYWFgtMjAwLTIwMC5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZToyMDtcIj5hdXRoPC90ZXh0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6MjUwO3RvcDoxMDtmbGV4LWRpcmVjdGlvbjpyb3c7XCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbWFnZSBzdHlsZT1cIndpZHRoOjIwO2hlaWdodDoyMDtcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjFuRnZQSVhYWFhYYlVYWFhYVUFrUEpwWFgtODctODcucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRleHQgc3R5bGU9XCJmb250LXNpemU6MjA7XCI+RnJpZW5kPC90ZXh0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6MzMwO3RvcDoxMDtmbGV4LWRpcmVjdGlvbjpyb3c7XCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbWFnZSBzdHlsZT1cIndpZHRoOjIwO2hlaWdodDoyMDtcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltZy5hbGljZG4uY29tL3Rwcy9pMi9UQjFDcEQ3SVhYWFhYYlNYWFhYVUFrUEpwWFgtODctODcucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRleHQgc3R5bGU9XCJmb250LXNpemU6MjA7XCI+aXNzdWU8L3RleHQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7bGVmdDo0MTA7dG9wOjEwO2ZsZXgtZGlyZWN0aW9uOnJvdztcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltYWdlIHN0eWxlPVwid2lkdGg6MjA7aGVpZ2h0OjIwO1wiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZ3RtczAyLmFsaWNkbi5jb20vdHBzL2kyL1RCMTFaWmZJVlhYWFhiTVhGWFhFRGhHR1hYWC0zMi0zMi5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZToyMDtcIj5zdXBlcjwvdGV4dD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hvcEJvZHlcIiBzdHlsZT1cImZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjRGl2XCIgc3R5bGU9XCJtYXJnaW4tdG9wOjEwO21hcmdpbi1sZWZ0OjEwO1wiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInNob3BEZXNjXCIgc3R5bGU9XCJmb250LXNpemU6MjU7XCI+e3tpdGVtLnNob3BEZXNjfX08L3RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJmbGV4LWRpcmVjdGlvbjpyb3c7XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWdEaXZcIiBzdHlsZT1cImZsZXg6MTtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWFyZ2luOjEwO1wiIHYtZm9yPVwiaW1nIGluIGl0ZW0uc2hvcEltZ0xpc3RcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltYWdlIGNsYXNzPVwic2hvcEltZ1wiIDpzdHlsZT1cInsgd2lkdGg6IGltZy5zaG9wSW1nV2lkdGgsIGhlaWdodDogaW1nLnNob3BJbWdIZWlnaHQgfVwiIDpzcmM9XCJpbWcuc2hvcEltZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZsZXg6MTttYXJnaW4tdG9wOjEwO2ZsZXgtZGlyZWN0aW9uOnJvdztcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJmbGV4OjE7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmbGV4LWRpcmVjdGlvbjpyb3c7XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltYWdlIHN0eWxlPVwid2lkdGg6MjA7aGVpZ2h0OjIwO1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMW5GdlBJWFhYWFhiVVhYWFhVQWtQSnBYWC04Ny04Ny5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1sZWZ0OjU7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgc3R5bGU9XCJmb250LXNpemU6MjA7dGV4dC1hbGlnbjpjZW50ZXI7XCI+VXA8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZmxleDoxO2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC1kaXJlY3Rpb246cm93O1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWFnZSBzdHlsZT1cIndpZHRoOjIwO2hlaWdodDoyMDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltZy5hbGljZG4uY29tL3Rwcy9pMi9UQjFDcEQ3SVhYWFhYYlNYWFhYVUFrUEpwWFgtODctODcucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tbGVmdDo1O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOjIwO3RleHQtYWxpZ246Y2VudGVyO1wiPmRvd248L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNob3BGb290ZXJcIiBzdHlsZT1cImZsZXgtZGlyZWN0aW9uOnJvdzttYXJnaW4tdG9wOjEwO21hcmdpbi1sZWZ0OjEwO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDtcIj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6NTtcIj5cclxuICAgICAgICAgICAgPGltYWdlIGNsYXNzPVwic2hvcExpa2VJbWcgc21hbGxJbWdcIiA6c3JjPVwiaXRlbS5zaG9wTGlrZUltZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6MTU7XCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic2hvcExpa2VUZXh0XCIgc3R5bGU9XCJmb250LXNpemU6MjA7XCI+e3tpdGVtLnNob3BMaWtlVGV4dH19PC90ZXh0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXJpZ2h0OjU7XCI+XHJcbiAgICAgICAgICAgIDxpbWFnZSBjbGFzcz1cInNob3BDb21tZW50SW1nIHNtYWxsSW1nXCIgOnNyYz1cIml0ZW0uc2hvcENvbW1lbnRJbWdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXJpZ2h0OjE1O1wiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInNob3BDb21tZW50VGV4dFwiIHN0eWxlPVwiZm9udC1zaXplOjIwO1wiPnt7aXRlbS5zaG9wQ29tbWVudFRleHR9fTwvdGV4dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1yaWdodDo1O1wiPlxyXG4gICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJzaG9wTG9va0ltZyBzbWFsbEltZ1wiIDpzcmM9XCJpdGVtLnNob3BMb29rSW1nXCI+PC9pbWFnZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1yaWdodDoxNTtcIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJzaG9wTG9va1RleHRcIiBzdHlsZT1cImZvbnQtc2l6ZToyMDtcIj57e2l0ZW0uc2hvcExvb2tUZXh0fX08L3RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6NTtcIj5cclxuICAgICAgICAgICAgPGltYWdlIGNsYXNzPVwic2hhcmVJbWcgc21hbGxJbWdcIiA6c3JjPVwiaXRlbS5zaGFyZUltZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6MjA7XCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic2hhcmVUZXh0XCIgc3R5bGU9XCJmb250LXNpemU6MjA7XCI+e3tpdGVtLnNoYXJlVGV4dH19PC90ZXh0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9jZWxsPlxyXG4gIDwvbGlzdD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuICAuZmxleFJvdyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuXHJcbiAgLmZsZXhDb2x1bW4ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC50ZXh0IHtcclxuICB9XHJcblxyXG4gIC5kaXYge1xyXG4gIH1cclxuXHJcbiAgLmZpeGVkIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNTBweDtcclxuICAgIGxlZnQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxuICB9XHJcblxyXG4gIC5zaG9wSW1nIHtcclxuICAgIHdpZHRoOiAyMjA7XHJcbiAgICBoZWlnaHQ6IDIyMDtcclxuICB9XHJcblxyXG4gIC5saXN0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDc1MDtcclxuICAgIGhlaWdodDogMTIwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XHJcbiAgfVxyXG5cclxuICAuY2VsbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA3NTA7XHJcbiAgfVxyXG5cclxuICAuc2hvcERpdiB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbjogNTtcclxuICAgIHBhZGRpbmc6IDEwO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjY2NjO1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgfVxyXG5cclxuICAuc2hvcFJvd0xpc3Qge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlci13aWR0aDogMTtcclxuICAgIGJvcmRlci1jb2xvcjogI2NjY2NjYztcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgbWFyZ2luOiA1O1xyXG4gICAgcGFkZGluZzogMTA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLnNob3BIZWFkZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiA3MjA7XHJcbiAgfVxyXG5cclxuICAuc2hvcEZvb3RlciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgd2lkdGg6IDcyMDtcclxuICB9XHJcblxyXG4gIC5zbWFsbEltZyB7XHJcbiAgICB3aWR0aDogMjA7XHJcbiAgICBoZWlnaHQ6IDIwO1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgdmFyIG1vZGFsID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL21vZGFsJylcclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzaG9wTGlzdDogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgc2NvcGVWYWx1ZTogMSxcclxuICAgICAgICAgICAgUGVyc29uUGhvdG86ICdodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL2kzL1RCMXllV2VJRlhYWFhYNVhGWFh1QVpKWVhYWC0yMTAtMjEwLnBuZ182MHg2MC5qcGcnLFxyXG4gICAgICAgICAgICBQZXJzb25OYW1lOiAnTWVuZGVsZXlldicsXHJcbiAgICAgICAgICAgIFBlcnNvblZpc2l0VGltZTogJ3RvZGF5JyxcclxuICAgICAgICAgICAgc2hvcERlc2M6ICdHZW5pdXMgb25seSBtZWFucyBoYXJkLXdvcmtpbmcgYWxsIG9uZVxcJ3MgbGlmZScsXHJcbiAgICAgICAgICAgIHNob3BJbWdMaXN0OiBbe1xyXG4gICAgICAgICAgICAgIHNob3BJbWdXaWR0aDogMjIwLFxyXG4gICAgICAgICAgICAgIHNob3BJbWdIZWlnaHQ6IDIyMCxcclxuICAgICAgICAgICAgICBzaG9wSW1nOiAnaHR0cHM6Ly9nZDIuYWxpY2RuLmNvbS9iYW8vdXBsb2FkZWQvaTIvVEIxcnRPbkhwWFhYWFhMYVhYWFhYWFhYWFhYXyEhMC1pdGVtX3BpYy5qcGdfMjIweDIyMC5qcGcnXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBzaG9wSW1nV2lkdGg6IDIyMCxcclxuICAgICAgICAgICAgICBzaG9wSW1nSGVpZ2h0OiAyMjAsXHJcbiAgICAgICAgICAgICAgc2hvcEltZzogJ2h0dHBzOi8vZ2Q0LmFsaWNkbi5jb20vYmFvL3VwbG9hZGVkL2k0L1RCMTVLcmZGVlhYWFhYSlhYWFhYWFhYWFhYWF8hITAtaXRlbV9waWMuanBnXzIyMHgyMjAuanBnJ1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgc2hvcEltZ1dpZHRoOiAyMjAsXHJcbiAgICAgICAgICAgICAgc2hvcEltZ0hlaWdodDogMjIwLFxyXG4gICAgICAgICAgICAgIHNob3BJbWc6ICdodHRwczovL2dkMi5hbGljZG4uY29tL2Jhby91cGxvYWRlZC9pMi9UQjF0NVlCR1ZYWFhYWGNhWFhYWFhYWFhYWFhfISEwLWl0ZW1fcGljLmpwZ18yMjB4MjIwLmpwZydcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIHNob3BMaWtlSW1nOiAnaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxalR4WElWWFhYWGI4WFhYWDA3dGxUWFhYLTIwMC0yMDAucG5nXzg4eDg4eHouanBnJyxcclxuICAgICAgICAgICAgc2hvcExpa2VUZXh0OiAnNicsXHJcbiAgICAgICAgICAgIHNob3BDb21tZW50SW1nOiAnaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxa1RLeUlWWFhYWGFjWEZYWDA3dGxUWFhYLTIwMC0yMDAucG5nXzg4eDg4eHouanBnJyxcclxuICAgICAgICAgICAgc2hvcENvbW1lbnRUZXh0OiAnOTcnLFxyXG4gICAgICAgICAgICBzaG9wTG9va0ltZzogJ2h0dHBzOi8vaW1nLmFsaWNkbi5jb20vaW1nZXh0cmEvaTQvMzk3NzQ2MDczL1RCMklzZUtlRlhYWFhjVlhYWFhYWFhYWFhYWC0zOTc3NDYwNzMucG5nXzg4eDg4eHouanBnJyxcclxuICAgICAgICAgICAgc2hvcExvb2tUZXh0OiAnMTAwMycsXHJcbiAgICAgICAgICAgIHNoYXJlSW1nOiAnaHR0cHM6Ly9jYnUwMS5hbGljZG4uY29tL2Ntcy91cGxvYWQvMjAxNS85MzAvMjI0LzI0MjIwMzlfNzAyODA2MTMwLnBuZ184OHg4OHh6LmpwZycsXHJcbiAgICAgICAgICAgIHNoYXJlVGV4dDogXCIxMFwiLFxyXG5cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICBzY29wZVZhbHVlOiAyLFxyXG4gICAgICAgICAgICBQZXJzb25QaG90bzogJ2h0dHBzOi8vZ3cuYWxpY2RuLmNvbS90cHMvaTMvVEIxeWVXZUlGWFhYWFg1WEZYWHVBWkpZWFhYLTIxMC0yMTAucG5nXzYweDYwLmpwZycsXHJcbiAgICAgICAgICAgIFBlcnNvbk5hbWU6ICdOYXBvbGVvbicsXHJcbiAgICAgICAgICAgIFBlcnNvblZpc2l0VGltZTogJ3llc3RlcmRheScsXHJcbiAgICAgICAgICAgIHNob3BEZXNjOiAnVGhlIG1hbiB3aG8gaGFzIG1hZGUgdXAgaGlzIG1pbmQgdG8gd2luIHdpbGwgbmV2ZXIgc2F5IFwiaW1wb3NzaWJsZSBcIicsXHJcbiAgICAgICAgICAgIHNob3BJbWdMaXN0OiBbe1xyXG4gICAgICAgICAgICAgIHNob3BJbWdXaWR0aDogMjIwLFxyXG4gICAgICAgICAgICAgIHNob3BJbWdIZWlnaHQ6IDIyMCxcclxuICAgICAgICAgICAgICBzaG9wSW1nOiAnaHR0cHM6Ly9nZDEuYWxpY2RuLmNvbS9pbWdleHRyYS9pMS8yNjU1OTI5MzgzL1RCMi5xSVRqcFhYWFhjSVhYWFhYWFhYWFhYWF8hITI2NTU5MjkzODMuanBnXzIyMHgyMjAuanBnJ1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgc2hvcEltZ1dpZHRoOiAyMjAsXHJcbiAgICAgICAgICAgICAgc2hvcEltZ0hlaWdodDogMjIwLFxyXG4gICAgICAgICAgICAgIHNob3BJbWc6ICdodHRwczovL2dkMy5hbGljZG4uY29tL2ltZ2V4dHJhL2kzLzI2NTU5MjkzODMvVEIyZVd3WmpwWFhYWGJIWFhYWFhYWFhYWFhYXyEhMjY1NTkyOTM4My5qcGdfMjIweDIyMC5qcGcnXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBzaG9wSW1nV2lkdGg6IDIyMCxcclxuICAgICAgICAgICAgICBzaG9wSW1nSGVpZ2h0OiAyMjAsXHJcbiAgICAgICAgICAgICAgc2hvcEltZzogJ2h0dHBzOi8vZ2QyLmFsaWNkbi5jb20vaW1nZXh0cmEvaTIvMjY1NTkyOTM4My9UQjJ0Z1FXanBYWFhYYlpYWFhYWFhYWFhYWFhfISEyNjU1OTI5MzgzLmpwZ18yMjB4MjIwLmpwZydcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIHNob3BMaWtlSW1nOiAnaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxalR4WElWWFhYWGI4WFhYWDA3dGxUWFhYLTIwMC0yMDAucG5nXzg4eDg4eHouanBnJyxcclxuICAgICAgICAgICAgc2hvcExpa2VUZXh0OiAnNicsXHJcbiAgICAgICAgICAgIHNob3BDb21tZW50SW1nOiAnaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxa1RLeUlWWFhYWGFjWEZYWDA3dGxUWFhYLTIwMC0yMDAucG5nXzg4eDg4eHouanBnJyxcclxuICAgICAgICAgICAgc2hvcENvbW1lbnRUZXh0OiAnOTcnLFxyXG4gICAgICAgICAgICBzaG9wTG9va0ltZzogJ2h0dHBzOi8vaW1nLmFsaWNkbi5jb20vaW1nZXh0cmEvaTQvMzk3NzQ2MDczL1RCMklzZUtlRlhYWFhjVlhYWFhYWFhYWFhYWC0zOTc3NDYwNzMucG5nXzg4eDg4eHouanBnJyxcclxuICAgICAgICAgICAgc2hvcExvb2tUZXh0OiAnMTAwMycsXHJcbiAgICAgICAgICAgIHNoYXJlSW1nOiAnaHR0cHM6Ly9jYnUwMS5hbGljZG4uY29tL2Ntcy91cGxvYWQvMjAxNS85MzAvMjI0LzI0MjIwMzlfNzAyODA2MTMwLnBuZ184OHg4OHh6LmpwZycsXHJcbiAgICAgICAgICAgIHNoYXJlVGV4dDogXCIxMFwiLFxyXG5cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICBzY29wZVZhbHVlOiAzLFxyXG4gICAgICAgICAgICBQZXJzb25QaG90bzogJ2h0dHBzOi8vZ3cuYWxpY2RuLmNvbS90cHMvaTMvVEIxeWVXZUlGWFhYWFg1WEZYWHVBWkpZWFhYLTIxMC0yMTAucG5nXzYweDYwLmpwZycsXHJcbiAgICAgICAgICAgIFBlcnNvbk5hbWU6ICdCYWx6YWMnLFxyXG4gICAgICAgICAgICBQZXJzb25WaXNpdFRpbWU6ICd5ZXN0ZXJkYXknLFxyXG4gICAgICAgICAgICBzaG9wRGVzYzogJ1RoZXJlIGlzIG5vIHN1Y2ggdGhpbmcgYXMgYSBncmVhdCB0YWxlbnQgd2l0aG91dCBncmVhdCB3aWxsIC0gcG93ZXInLFxyXG4gICAgICAgICAgICBzaG9wSW1nTGlzdDogW3tcclxuICAgICAgICAgICAgICBzaG9wSW1nV2lkdGg6IDIyMCxcclxuICAgICAgICAgICAgICBzaG9wSW1nSGVpZ2h0OiAyMjAsXHJcbiAgICAgICAgICAgICAgc2hvcEltZzogJ2h0dHBzOi8vZ2QxLmFsaWNkbi5jb20vaW1nZXh0cmEvaTEvVEIxQUZ6OUxYWFhYWGJyWFZYWFhYWFhYWFhYXyEhMC1pdGVtX3BpYy5qcGdfMjIweDIyMC5qcGcnXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBzaG9wSW1nV2lkdGg6IDIyMCxcclxuICAgICAgICAgICAgICBzaG9wSW1nSGVpZ2h0OiAyMjAsXHJcbiAgICAgICAgICAgICAgc2hvcEltZzogJ2h0dHBzOi8vZ2QyLmFsaWNkbi5jb20vaW1nZXh0cmEvaTIvMjU1Nzk1NDc1MS9UQjJpczJualhYWFhYYXRYcFhYWFhYWFhYWFhfISEyNTU3OTU0NzUxLmpwZ18yMjB4MjIwLmpwZydcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIHNob3BJbWdXaWR0aDogMjIwLFxyXG4gICAgICAgICAgICAgIHNob3BJbWdIZWlnaHQ6IDIyMCxcclxuICAgICAgICAgICAgICBzaG9wSW1nOiAnaHR0cHM6Ly9nZDIuYWxpY2RuLmNvbS9pbWdleHRyYS9pMi8yNTU3OTU0NzUxL1RCMlBOWUdqWFhYWFhiWFhYWFhYWFhYWFhYWF8hITI1NTc5NTQ3NTEuanBnXzIyMHgyMjAuanBnJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgc2hvcExpa2VJbWc6ICdodHRwczovL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjFqVHhYSVZYWFhYYjhYWFhYMDd0bFRYWFgtMjAwLTIwMC5wbmdfODh4ODh4ei5qcGcnLFxyXG4gICAgICAgICAgICBzaG9wTGlrZVRleHQ6ICc2JyxcclxuICAgICAgICAgICAgc2hvcENvbW1lbnRJbWc6ICdodHRwczovL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjFrVEt5SVZYWFhYYWNYRlhYMDd0bFRYWFgtMjAwLTIwMC5wbmdfODh4ODh4ei5qcGcnLFxyXG4gICAgICAgICAgICBzaG9wQ29tbWVudFRleHQ6ICc5NycsXHJcbiAgICAgICAgICAgIHNob3BMb29rSW1nOiAnaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS9pbWdleHRyYS9pNC8zOTc3NDYwNzMvVEIySXNlS2VGWFhYWGNWWFhYWFhYWFhYWFhYLTM5Nzc0NjA3My5wbmdfODh4ODh4ei5qcGcnLFxyXG4gICAgICAgICAgICBzaG9wTG9va1RleHQ6ICcxMDAzJyxcclxuICAgICAgICAgICAgc2hhcmVJbWc6ICdodHRwczovL2NidTAxLmFsaWNkbi5jb20vY21zL3VwbG9hZC8yMDE1LzkzMC8yMjQvMjQyMjAzOV83MDI4MDYxMzAucG5nXzg4eDg4eHouanBnJyxcclxuICAgICAgICAgICAgc2hhcmVUZXh0OiBcIjEwXCIsXHJcblxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICAgIHNjb3BlVmFsdWU6IDQsXHJcbiAgICAgICAgICAgIFBlcnNvblBob3RvOiAnaHR0cHM6Ly9ndy5hbGljZG4uY29tL3Rwcy9pMy9UQjF5ZVdlSUZYWFhYWDVYRlhYdUFaSllYWFgtMjEwLTIxMC5wbmdfNjB4NjAuanBnJyxcclxuICAgICAgICAgICAgUGVyc29uTmFtZTogJ1Rob21hcyBDYXJseWxlJyxcclxuICAgICAgICAgICAgUGVyc29uVmlzaXRUaW1lOiAnMyBkYXkgYWdvJyxcclxuICAgICAgICAgICAgc2hvcERlc2M6ICdDZWFzZSB0byBzdHJ1Z2dsZSBhbmQgeW91IGNlYXNlIHRvIGxpdmUnLFxyXG4gICAgICAgICAgICBzaG9wSW1nTGlzdDogW3tcclxuICAgICAgICAgICAgICBzaG9wSW1nV2lkdGg6IDIyMCxcclxuICAgICAgICAgICAgICBzaG9wSW1nSGVpZ2h0OiAyMjAsXHJcbiAgICAgICAgICAgICAgc2hvcEltZzogJ2h0dHBzOi8vZ2Q0LmFsaWNkbi5jb20vaW1nZXh0cmEvaTQvNjk0MjYzMjQvVEIyemJ3ZGZYWFhYWGE0WHBYWFhYWFhYWFhYXyEhNjk0MjYzMjQuanBnXzIyMHgyMjAuanBnJ1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgc2hvcEltZ1dpZHRoOiAyMjAsXHJcbiAgICAgICAgICAgICAgc2hvcEltZ0hlaWdodDogMjIwLFxyXG4gICAgICAgICAgICAgIHNob3BJbWc6ICdodHRwczovL2dkNC5hbGljZG4uY29tL2ltZ2V4dHJhL2k0LzY5NDI2MzI0L1RCMkw3WkFmWFhYWFhYT1hYWFhYWFhYWFhYWF8hITY5NDI2MzI0LmpwZ18yMjB4MjIwLmpwZydcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIHNob3BJbWdXaWR0aDogMjIwLFxyXG4gICAgICAgICAgICAgIHNob3BJbWdIZWlnaHQ6IDIyMCxcclxuICAgICAgICAgICAgICBzaG9wSW1nOiAnaHR0cHM6Ly9nZDQuYWxpY2RuLmNvbS9pbWdleHRyYS9pNC82OTQyNjMyNC9UQjJwOXd1ZlhYWFhYYmlYWFhYWFhYWFhYWFhfISE2OTQyNjMyNC5qcGdfMjIweDIyMC5qcGcnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBzaG9wTGlrZUltZzogJ2h0dHBzOi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMWpUeFhJVlhYWFhiOFhYWFgwN3RsVFhYWC0yMDAtMjAwLnBuZ184OHg4OHh6LmpwZycsXHJcbiAgICAgICAgICAgIHNob3BMaWtlVGV4dDogJzYnLFxyXG4gICAgICAgICAgICBzaG9wQ29tbWVudEltZzogJ2h0dHBzOi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMWtUS3lJVlhYWFhhY1hGWFgwN3RsVFhYWC0yMDAtMjAwLnBuZ184OHg4OHh6LmpwZycsXHJcbiAgICAgICAgICAgIHNob3BDb21tZW50VGV4dDogJzk3JyxcclxuICAgICAgICAgICAgc2hvcExvb2tJbWc6ICdodHRwczovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2k0LzM5Nzc0NjA3My9UQjJJc2VLZUZYWFhYY1ZYWFhYWFhYWFhYWFgtMzk3NzQ2MDczLnBuZ184OHg4OHh6LmpwZycsXHJcbiAgICAgICAgICAgIHNob3BMb29rVGV4dDogJzEwMDMnLFxyXG4gICAgICAgICAgICBzaGFyZUltZzogJ2h0dHBzOi8vY2J1MDEuYWxpY2RuLmNvbS9jbXMvdXBsb2FkLzIwMTUvOTMwLzIyNC8yNDIyMDM5XzcwMjgwNjEzMC5wbmdfODh4ODh4ei5qcGcnLFxyXG4gICAgICAgICAgICBzaGFyZVRleHQ6IFwiMTBcIixcclxuXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogNSxcclxuICAgICAgICAgICAgc2NvcGVWYWx1ZTogNSxcclxuICAgICAgICAgICAgUGVyc29uUGhvdG86ICdodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL2kzL1RCMXllV2VJRlhYWFhYNVhGWFh1QVpKWVhYWC0yMTAtMjEwLnBuZ182MHg2MC5qcGcnLFxyXG4gICAgICAgICAgICBQZXJzb25OYW1lOiAnQWRkaXNvbicsXHJcbiAgICAgICAgICAgIFBlcnNvblZpc2l0VGltZTogJ3llc3RlcmRheScsXHJcbiAgICAgICAgICAgIHNob3BEZXNjOiAnQSBzdHJvbmcgbWFuIHdpbGwgc3RydWdnbGUgd2l0aCB0aGUgc3Rvcm1zIG9mIGZhdGUnLFxyXG4gICAgICAgICAgICBzaG9wSW1nTGlzdDogW3tcclxuICAgICAgICAgICAgICBzaG9wSW1nV2lkdGg6IDIyMCxcclxuICAgICAgICAgICAgICBzaG9wSW1nSGVpZ2h0OiAyMjAsXHJcbiAgICAgICAgICAgICAgc2hvcEltZzogJ2h0dHBzOi8vZ2QzLmFsaWNkbi5jb20vYmFvL3VwbG9hZGVkL2kzL1RCMU1ROF9LVlhYWFhhTFhWWFhYWFhYWFhYWF8hITAtaXRlbV9waWMuanBnXzIyMHgyMjAuanBnJ1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgc2hvcEltZ1dpZHRoOiAyMjAsXHJcbiAgICAgICAgICAgICAgc2hvcEltZ0hlaWdodDogMjIwLFxyXG4gICAgICAgICAgICAgIHNob3BJbWc6ICdodHRwczovL2dkMi5hbGljZG4uY29tL2ltZ2V4dHJhL2kyLzUzMjE4MDMyL1RCMmJHU3FpWFhYWFhYeVhwWFhYWFhYWFhYWF8hITUzMjE4MDMyLmpwZ18yMjB4MjIwLmpwZydcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIHNob3BJbWdXaWR0aDogMjIwLFxyXG4gICAgICAgICAgICAgIHNob3BJbWdIZWlnaHQ6IDIyMCxcclxuICAgICAgICAgICAgICBzaG9wSW1nOiAnaHR0cHM6Ly9nZDIuYWxpY2RuLmNvbS9iYW8vdXBsb2FkZWQvaTIvVEIxa1AyektGWFhYWGJJWFhYWFhYWFhYWFhYXyEhMC1pdGVtX3BpYy5qcGdfMjIweDIyMC5qcGcnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBzaG9wTGlrZUltZzogJ2h0dHBzOi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMWpUeFhJVlhYWFhiOFhYWFgwN3RsVFhYWC0yMDAtMjAwLnBuZ184OHg4OHh6LmpwZycsXHJcbiAgICAgICAgICAgIHNob3BMaWtlVGV4dDogJzYnLFxyXG4gICAgICAgICAgICBzaG9wQ29tbWVudEltZzogJ2h0dHBzOi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMWtUS3lJVlhYWFhhY1hGWFgwN3RsVFhYWC0yMDAtMjAwLnBuZ184OHg4OHh6LmpwZycsXHJcbiAgICAgICAgICAgIHNob3BDb21tZW50VGV4dDogJzk3JyxcclxuICAgICAgICAgICAgc2hvcExvb2tJbWc6ICdodHRwczovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2k0LzM5Nzc0NjA3My9UQjJJc2VLZUZYWFhYY1ZYWFhYWFhYWFhYWFgtMzk3NzQ2MDczLnBuZ184OHg4OHh6LmpwZycsXHJcbiAgICAgICAgICAgIHNob3BMb29rVGV4dDogJzEwMDMnLFxyXG4gICAgICAgICAgICBzaGFyZUltZzogJ2h0dHBzOi8vY2J1MDEuYWxpY2RuLmNvbS9jbXMvdXBsb2FkLzIwMTUvOTMwLzIyNC8yNDIyMDM5XzcwMjgwNjEzMC5wbmdfODh4ODh4ei5qcGcnLFxyXG4gICAgICAgICAgICBzaGFyZVRleHQ6IFwiMTBcIixcclxuXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogNixcclxuICAgICAgICAgICAgc2NvcGVWYWx1ZTogMSxcclxuICAgICAgICAgICAgUGVyc29uUGhvdG86ICdodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL2kzL1RCMXllV2VJRlhYWFhYNVhGWFh1QVpKWVhYWC0yMTAtMjEwLnBuZ182MHg2MC5qcGcnLFxyXG4gICAgICAgICAgICBQZXJzb25OYW1lOiAnUnVza2luJyxcclxuICAgICAgICAgICAgUGVyc29uVmlzaXRUaW1lOiAneWVzdGVyZGF5JyxcclxuICAgICAgICAgICAgc2hvcERlc2M6ICdMaXZpbmcgd2l0aG91dCBhbiBhaW0gaXMgbGlrZSBzYWlsaW5nIHdpdGhvdXQgYSBjb21wYXNzJyxcclxuICAgICAgICAgICAgc2hvcEltZ0xpc3Q6IFt7XHJcbiAgICAgICAgICAgICAgc2hvcEltZ1dpZHRoOiAyMjAsXHJcbiAgICAgICAgICAgICAgc2hvcEltZ0hlaWdodDogMjIwLFxyXG4gICAgICAgICAgICAgIHNob3BJbWc6ICdodHRwczovL2dkNC5hbGljZG4uY29tL2Jhby91cGxvYWRlZC9pNC9UQjExeUZuSFhYWFhYYWthWFhYWFhYWFhYWFhfISEwLWl0ZW1fcGljLmpwZ18yMjB4MjIwLmpwZydcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIHNob3BJbWdXaWR0aDogMjIwLFxyXG4gICAgICAgICAgICAgIHNob3BJbWdIZWlnaHQ6IDIyMCxcclxuICAgICAgICAgICAgICBzaG9wSW1nOiAnaHR0cHM6Ly9nZDQuYWxpY2RuLmNvbS9pbWdleHRyYS9pNC8zMjcyMDYyOC9UQjJDUkpVY1hYWFhYWHdYcFhYWFhYWFhYWFhfISEzMjcyMDYyOC5qcGdfMjIweDIyMC5qcGcnXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBzaG9wSW1nV2lkdGg6IDIyMCxcclxuICAgICAgICAgICAgICBzaG9wSW1nSGVpZ2h0OiAyMjAsXHJcbiAgICAgICAgICAgICAgc2hvcEltZzogJ2h0dHBzOi8vZ2QyLmFsaWNkbi5jb20vYmFvL3VwbG9hZGVkL2kyL1RCMTdMVXpIWFhYWFhjRWFYWFhYWFhYWFhYWF8hITAtaXRlbV9waWMuanBnXzIyMHgyMjAuanBnJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgc2hvcExpa2VJbWc6ICdodHRwczovL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjFqVHhYSVZYWFhYYjhYWFhYMDd0bFRYWFgtMjAwLTIwMC5wbmdfODh4ODh4ei5qcGcnLFxyXG4gICAgICAgICAgICBzaG9wTGlrZVRleHQ6ICc2JyxcclxuICAgICAgICAgICAgc2hvcENvbW1lbnRJbWc6ICdodHRwczovL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjFrVEt5SVZYWFhYYWNYRlhYMDd0bFRYWFgtMjAwLTIwMC5wbmdfODh4ODh4ei5qcGcnLFxyXG4gICAgICAgICAgICBzaG9wQ29tbWVudFRleHQ6ICc5NycsXHJcbiAgICAgICAgICAgIHNob3BMb29rSW1nOiAnaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS9pbWdleHRyYS9pNC8zOTc3NDYwNzMvVEIySXNlS2VGWFhYWGNWWFhYWFhYWFhYWFhYLTM5Nzc0NjA3My5wbmdfODh4ODh4ei5qcGcnLFxyXG4gICAgICAgICAgICBzaG9wTG9va1RleHQ6ICcxMDAzJyxcclxuICAgICAgICAgICAgc2hhcmVJbWc6ICdodHRwczovL2NidTAxLmFsaWNkbi5jb20vY21zL3VwbG9hZC8yMDE1LzkzMC8yMjQvMjQyMjAzOV83MDI4MDYxMzAucG5nXzg4eDg4eHouanBnJyxcclxuICAgICAgICAgICAgc2hhcmVUZXh0OiBcIjEwXCIsXHJcblxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDcsXHJcbiAgICAgICAgICAgIHNjb3BlVmFsdWU6IDIsXHJcbiAgICAgICAgICAgIFBlcnNvblBob3RvOiAnaHR0cHM6Ly9ndy5hbGljZG4uY29tL3Rwcy9pMy9UQjF5ZVdlSUZYWFhYWDVYRlhYdUFaSllYWFgtMjEwLTIxMC5wbmdfNjB4NjAuanBnJyxcclxuICAgICAgICAgICAgUGVyc29uTmFtZTogJ1lpbWluZycsXHJcbiAgICAgICAgICAgIFBlcnNvblZpc2l0VGltZTogJ3RvZGF5JyxcclxuICAgICAgICAgICAgc2hvcERlc2M6ICdMaXZlIGEgbm9ibGUgYW5kIGhvbmVzdCBsaWZlLiBSZXZpdmluZyBwYXN0IHRpbWVzIGluIHlvdXIgb2xkIGFnZSB3aWxsIGhlbHAgeW91IHRvIGVuam95IHlvdXIgbGlmZSBhZ2FpbicsXHJcbiAgICAgICAgICAgIHNob3BJbWdMaXN0OiBbe1xyXG4gICAgICAgICAgICAgIHNob3BJbWdXaWR0aDogMjIwLFxyXG4gICAgICAgICAgICAgIHNob3BJbWdIZWlnaHQ6IDIyMCxcclxuICAgICAgICAgICAgICBzaG9wSW1nOiAnaHR0cHM6Ly9nZDQuYWxpY2RuLmNvbS9iYW8vdXBsb2FkZWQvaTQvVEIxaHZOb0pYWFhYWGFNYVhYWFhYWFhYWFhYXyEhMC1pdGVtX3BpYy5qcGdfMjIweDIyMC5qcGcnXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBzaG9wSW1nV2lkdGg6IDIyMCxcclxuICAgICAgICAgICAgICBzaG9wSW1nSGVpZ2h0OiAyMjAsXHJcbiAgICAgICAgICAgICAgc2hvcEltZzogJ2h0dHBzOi8vZ2Q0LmFsaWNkbi5jb20vaW1nZXh0cmEvaTQvMjA1ODU2NzIzNS9UQjJWOGl5Z0ZYWFhYYVJYcFhYWFhYWFhYWFhfISEyMDU4NTY3MjM1LmpwZ18yMjB4MjIwLmpwZydcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIHNob3BJbWdXaWR0aDogMjIwLFxyXG4gICAgICAgICAgICAgIHNob3BJbWdIZWlnaHQ6IDIyMCxcclxuICAgICAgICAgICAgICBzaG9wSW1nOiAnaHR0cHM6Ly9nZDIuYWxpY2RuLmNvbS9pbWdleHRyYS9pMi8yMDU4NTY3MjM1L1RCMmltMVFnRlhYWFhYOFhYWFhYWFhYWFhYWF8hITIwNTg1NjcyMzUuanBnXzIyMHgyMjAuanBnJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgc2hvcExpa2VJbWc6ICdodHRwczovL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjFqVHhYSVZYWFhYYjhYWFhYMDd0bFRYWFgtMjAwLTIwMC5wbmdfODh4ODh4ei5qcGcnLFxyXG4gICAgICAgICAgICBzaG9wTGlrZVRleHQ6ICc2JyxcclxuICAgICAgICAgICAgc2hvcENvbW1lbnRJbWc6ICdodHRwczovL2ltZy5hbGljZG4uY29tL3Rwcy9pMS9UQjFrVEt5SVZYWFhYYWNYRlhYMDd0bFRYWFgtMjAwLTIwMC5wbmdfODh4ODh4ei5qcGcnLFxyXG4gICAgICAgICAgICBzaG9wQ29tbWVudFRleHQ6ICc5NycsXHJcbiAgICAgICAgICAgIHNob3BMb29rSW1nOiAnaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS9pbWdleHRyYS9pNC8zOTc3NDYwNzMvVEIySXNlS2VGWFhYWGNWWFhYWFhYWFhYWFhYLTM5Nzc0NjA3My5wbmdfODh4ODh4ei5qcGcnLFxyXG4gICAgICAgICAgICBzaG9wTG9va1RleHQ6ICcxMDAzJyxcclxuICAgICAgICAgICAgc2hhcmVJbWc6ICdodHRwczovL2NidTAxLmFsaWNkbi5jb20vY21zL3VwbG9hZC8yMDE1LzkzMC8yMjQvMjQyMjAzOV83MDI4MDYxMzAucG5nXzg4eDg4eHouanBnJyxcclxuICAgICAgICAgICAgc2hhcmVUZXh0OiBcIjEwXCIsXHJcblxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDgsXHJcbiAgICAgICAgICAgIHNjb3BlVmFsdWU6IDMsXHJcbiAgICAgICAgICAgIFBlcnNvblBob3RvOiAnaHR0cHM6Ly9ndy5hbGljZG4uY29tL3Rwcy9pMy9UQjF5ZVdlSUZYWFhYWDVYRlhYdUFaSllYWFgtMjEwLTIxMC5wbmdfNjB4NjAuanBnJyxcclxuICAgICAgICAgICAgUGVyc29uTmFtZTogJ0Jyb3duJyxcclxuICAgICAgICAgICAgUGVyc29uVmlzaXRUaW1lOiAneWVzdGVyZGF5JyxcclxuICAgICAgICAgICAgc2hvcERlc2M6ICdCZWhpbmQgZXZlcnkgc3VjY2Vzc2Z1bCBtYW4gdGhlcmVcXCdzIGEgbG90IHUgdW5zdWNjZXNzZnVsIHllYXJzJyxcclxuICAgICAgICAgICAgc2hvcEltZ0xpc3Q6IFt7XHJcbiAgICAgICAgICAgICAgc2hvcEltZ1dpZHRoOiAyMjAsXHJcbiAgICAgICAgICAgICAgc2hvcEltZ0hlaWdodDogMjIwLFxyXG4gICAgICAgICAgICAgIHNob3BJbWc6ICdodHRwczovL2dkMS5hbGljZG4uY29tL2Jhby91cGxvYWRlZC9pMS9UQjE4QloyS0ZYWFhYYjhYRlhYWFhYWFhYWFhfISEwLWl0ZW1fcGljLmpwZ18yMjB4MjIwLmpwZydcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIHNob3BJbWdXaWR0aDogMjIwLFxyXG4gICAgICAgICAgICAgIHNob3BJbWdIZWlnaHQ6IDIyMCxcclxuICAgICAgICAgICAgICBzaG9wSW1nOiAnaHR0cHM6Ly9nZDEuYWxpY2RuLmNvbS9pbWdleHRyYS9pMS8yNzc1MzgzODQ4L1RCMnIwMTJqVlhYWFhYSFhwWFhYWFhYWFhYWF8hITI3NzUzODM4NDguanBnXzIyMHgyMjAuanBnJ1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgc2hvcEltZ1dpZHRoOiAyMjAsXHJcbiAgICAgICAgICAgICAgc2hvcEltZ0hlaWdodDogMjIwLFxyXG4gICAgICAgICAgICAgIHNob3BJbWc6ICdodHRwczovL2dkMy5hbGljZG4uY29tL2ltZ2V4dHJhL2kzLzI3NzUzODM4NDgvVEIyaUk5VmpWWFhYWGFvWHBYWFhYWFhYWFhYXyEhMjc3NTM4Mzg0OC5qcGdfMjIweDIyMC5qcGcnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBzaG9wTGlrZUltZzogJ2h0dHBzOi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMWpUeFhJVlhYWFhiOFhYWFgwN3RsVFhYWC0yMDAtMjAwLnBuZ184OHg4OHh6LmpwZycsXHJcbiAgICAgICAgICAgIHNob3BMaWtlVGV4dDogJzYnLFxyXG4gICAgICAgICAgICBzaG9wQ29tbWVudEltZzogJ2h0dHBzOi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMWtUS3lJVlhYWFhhY1hGWFgwN3RsVFhYWC0yMDAtMjAwLnBuZ184OHg4OHh6LmpwZycsXHJcbiAgICAgICAgICAgIHNob3BDb21tZW50VGV4dDogJzk3JyxcclxuICAgICAgICAgICAgc2hvcExvb2tJbWc6ICdodHRwczovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2k0LzM5Nzc0NjA3My9UQjJJc2VLZUZYWFhYY1ZYWFhYWFhYWFhYWFgtMzk3NzQ2MDczLnBuZ184OHg4OHh6LmpwZycsXHJcbiAgICAgICAgICAgIHNob3BMb29rVGV4dDogJzEwMDMnLFxyXG4gICAgICAgICAgICBzaGFyZUltZzogJ2h0dHBzOi8vY2J1MDEuYWxpY2RuLmNvbS9jbXMvdXBsb2FkLzIwMTUvOTMwLzIyNC8yNDIyMDM5XzcwMjgwNjEzMC5wbmdfODh4ODh4ei5qcGcnLFxyXG4gICAgICAgICAgICBzaGFyZVRleHQ6IFwiMTBcIixcclxuXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogOSxcclxuICAgICAgICAgICAgc2NvcGVWYWx1ZTogNCxcclxuICAgICAgICAgICAgUGVyc29uUGhvdG86ICdodHRwczovL2d3LmFsaWNkbi5jb20vdHBzL2kzL1RCMXllV2VJRlhYWFhYNVhGWFh1QVpKWVhYWC0yMTAtMjEwLnBuZ182MHg2MC5qcGcnLFxyXG4gICAgICAgICAgICBQZXJzb25OYW1lOiAnWUlNSU5HJyxcclxuICAgICAgICAgICAgUGVyc29uVmlzaXRUaW1lOiAndG9kYXknLFxyXG4gICAgICAgICAgICBzaG9wRGVzYzogJ0VucmljaCB5b3VyIGxpZmUgdG9kYXksLiB5ZXN0ZXJkYXkgaXMgaGlzdG9yeS50b21vcnJvdyBpcyBteXN0ZXJ5JyxcclxuICAgICAgICAgICAgc2hvcEltZ0xpc3Q6IFt7XHJcbiAgICAgICAgICAgICAgc2hvcEltZ1dpZHRoOiAyMjAsXHJcbiAgICAgICAgICAgICAgc2hvcEltZ0hlaWdodDogMjIwLFxyXG4gICAgICAgICAgICAgIHNob3BJbWc6ICdodHRwczovL2dkMS5hbGljZG4uY29tL2Jhby91cGxvYWRlZC9pMS9UQjFKQi5yTHBYWFhYWExYWFhYWFhYWFhYWFhfISEwLWl0ZW1fcGljLmpwZ18yMjB4MjIwLmpwZydcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIHNob3BJbWdXaWR0aDogMjIwLFxyXG4gICAgICAgICAgICAgIHNob3BJbWdIZWlnaHQ6IDIyMCxcclxuICAgICAgICAgICAgICBzaG9wSW1nOiAnaHR0cHM6Ly9nZDQuYWxpY2RuLmNvbS9pbWdleHRyYS9pNC8yNzAyNzM5MTI4L1RCMkpkdm1qVlhYWFhYalhYWFhYWFhYWFhYWF8hITI3MDI3MzkxMjguanBnXzIyMHgyMjAuanBnJ1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgc2hvcEltZ1dpZHRoOiAyMjAsXHJcbiAgICAgICAgICAgICAgc2hvcEltZ0hlaWdodDogMjIwLFxyXG4gICAgICAgICAgICAgIHNob3BJbWc6ICdodHRwczovL2dkMi5hbGljZG4uY29tL2ltZ2V4dHJhL2kyLzI3MDI3MzkxMjgvVEIyQS5lNmpWWFhYWFhHWHBYWFhYWFhYWFhYXyEhMjcwMjczOTEyOC5qcGdfMjIweDIyMC5qcGcnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBzaG9wTGlrZUltZzogJ2h0dHBzOi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMWpUeFhJVlhYWFhiOFhYWFgwN3RsVFhYWC0yMDAtMjAwLnBuZ184OHg4OHh6LmpwZycsXHJcbiAgICAgICAgICAgIHNob3BMaWtlVGV4dDogJzYnLFxyXG4gICAgICAgICAgICBzaG9wQ29tbWVudEltZzogJ2h0dHBzOi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMWtUS3lJVlhYWFhhY1hGWFgwN3RsVFhYWC0yMDAtMjAwLnBuZ184OHg4OHh6LmpwZycsXHJcbiAgICAgICAgICAgIHNob3BDb21tZW50VGV4dDogJzk3JyxcclxuICAgICAgICAgICAgc2hvcExvb2tJbWc6ICdodHRwczovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2k0LzM5Nzc0NjA3My9UQjJJc2VLZUZYWFhYY1ZYWFhYWFhYWFhYWFgtMzk3NzQ2MDczLnBuZ184OHg4OHh6LmpwZycsXHJcbiAgICAgICAgICAgIHNob3BMb29rVGV4dDogJzEwMDMnLFxyXG4gICAgICAgICAgICBzaGFyZUltZzogJ2h0dHBzOi8vY2J1MDEuYWxpY2RuLmNvbS9jbXMvdXBsb2FkLzIwMTUvOTMwLzIyNC8yNDIyMDM5XzcwMjgwNjEzMC5wbmdfODh4ODh4ei5qcGcnLFxyXG4gICAgICAgICAgICBzaGFyZVRleHQ6IFwiMTBcIixcclxuXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMTAsXHJcbiAgICAgICAgICAgIHNjb3BlVmFsdWU6IDUsXHJcbiAgICAgICAgICAgIFBlcnNvblBob3RvOiAnaHR0cHM6Ly9ndy5hbGljZG4uY29tL3Rwcy9pMy9UQjF5ZVdlSUZYWFhYWDVYRlhYdUFaSllYWFgtMjEwLTIxMC5wbmdfNjB4NjAuanBnJyxcclxuICAgICAgICAgICAgUGVyc29uTmFtZTogJ1lJTUlORycsXHJcbiAgICAgICAgICAgIFBlcnNvblZpc2l0VGltZTogJ3llc3RlcmRheScsXHJcbiAgICAgICAgICAgIHNob3BEZXNjOiAnVGhlIHNlY3JldCBvZiBzdWNjZXNzIGlzIGNvbnN0YW5jeSB0byBwdXJwb3NlJyxcclxuICAgICAgICAgICAgc2hvcEltZ0xpc3Q6IFt7XHJcbiAgICAgICAgICAgICAgc2hvcEltZ1dpZHRoOiAyMjAsXHJcbiAgICAgICAgICAgICAgc2hvcEltZ0hlaWdodDogMjIwLFxyXG4gICAgICAgICAgICAgIHNob3BJbWc6ICdodHRwczovL2dkMy5hbGljZG4uY29tL2Jhby91cGxvYWRlZC9pMy9UQjE3elhPR1hYWFhYYkVYVlhYWFhYWFhYWFhfISEwLWl0ZW1fcGljLmpwZ18yMjB4MjIwLmpwZydcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIHNob3BJbWdXaWR0aDogMjIwLFxyXG4gICAgICAgICAgICAgIHNob3BJbWdIZWlnaHQ6IDIyMCxcclxuICAgICAgICAgICAgICBzaG9wSW1nOiAnaHR0cHM6Ly9nZDEuYWxpY2RuLmNvbS9pbWdleHRyYS9pMS8yMjY1NDQ1OTUxL1RCMjJBQ1RiRlhYWFhYQlhYWFhYWFhYWFhYWF8hITIyNjU0NDU5NTEuanBnXzIyMHgyMjAuanBnJ1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgc2hvcEltZ1dpZHRoOiAyMjAsXHJcbiAgICAgICAgICAgICAgc2hvcEltZ0hlaWdodDogMjIwLFxyXG4gICAgICAgICAgICAgIHNob3BJbWc6ICdodHRwczovL2dkMy5hbGljZG4uY29tL2ltZ2V4dHJhL2kzLzIyNjU0NDU5NTEvVEIyb1hxVWJGWFhYWFhJWFhYWFhYWFhYWFhYXyEhMjI2NTQ0NTk1MS5qcGdfMjIweDIyMC5qcGcnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBzaG9wTGlrZUltZzogJ2h0dHBzOi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMWpUeFhJVlhYWFhiOFhYWFgwN3RsVFhYWC0yMDAtMjAwLnBuZ184OHg4OHh6LmpwZycsXHJcbiAgICAgICAgICAgIHNob3BMaWtlVGV4dDogJzYnLFxyXG4gICAgICAgICAgICBzaG9wQ29tbWVudEltZzogJ2h0dHBzOi8vaW1nLmFsaWNkbi5jb20vdHBzL2kxL1RCMWtUS3lJVlhYWFhhY1hGWFgwN3RsVFhYWC0yMDAtMjAwLnBuZ184OHg4OHh6LmpwZycsXHJcbiAgICAgICAgICAgIHNob3BDb21tZW50VGV4dDogJzk3JyxcclxuICAgICAgICAgICAgc2hvcExvb2tJbWc6ICdodHRwczovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2k0LzM5Nzc0NjA3My9UQjJJc2VLZUZYWFhYY1ZYWFhYWFhYWFhYWFgtMzk3NzQ2MDczLnBuZ184OHg4OHh6LmpwZycsXHJcbiAgICAgICAgICAgIHNob3BMb29rVGV4dDogJzEwMDMnLFxyXG4gICAgICAgICAgICBzaGFyZUltZzogJ2h0dHBzOi8vY2J1MDEuYWxpY2RuLmNvbS9jbXMvdXBsb2FkLzIwMTUvOTMwLzIyNC8yNDIyMDM5XzcwMjgwNjEzMC5wbmdfODh4ODh4ei5qcGcnLFxyXG4gICAgICAgICAgICBzaGFyZVRleHQ6IFwiMTBcIixcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIF0sXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGxvYWRtb3JlOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgbW9kYWwudG9hc3Qoe1xyXG4gICAgICAgICAgJ21lc3NhZ2UnOiAnbG9hZG1vcmUnLFxyXG4gICAgICAgICAgJ2R1cmF0aW9uJzogMi4wXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uY2VsbGNsaWNrOiBmdW5jdGlvbihpZCkge1xyXG4gICAgICAgIG1vZGFsLnRvYXN0KHtcclxuICAgICAgICAgICdtZXNzYWdlJzogJ3JvdyAnICsgaWQgKyAnIGNsaWNrZWQnLFxyXG4gICAgICAgICAgJ2R1cmF0aW9uJzogMi4wXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGl0ZW1saXN0LnZ1ZT82ZjIzMGU5ZiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnbGlzdCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsaXN0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibG9hZG1vcmVvZmZzZXRcIjogXCIyMDAwXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImxvYWRtb3JlXCI6IF92bS5sb2FkbW9yZVxuICAgIH1cbiAgfSwgX3ZtLl9sKChfdm0uc2hvcExpc3QpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIF9jKCdjZWxsJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiY2VsbFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzY29wZVwiOiBpdGVtLnNjb3BlVmFsdWVcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5vbmNlbGxjbGljayhpdGVtLmlkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJzaG9wRGl2XCJcbiAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInNob3BIZWFkZXJcIixcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwiZmxleC1kaXJlY3Rpb25cIjogXCJyb3dcIlxuICAgICAgfVxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJmbGV4XCI6IFwiMlwiLFxuICAgICAgICBcImZsZXgtZGlyZWN0aW9uXCI6IFwicm93XCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2RpdicsIFtfYygnaW1hZ2UnLCB7XG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcIndpZHRoXCI6IFwiNjBcIixcbiAgICAgICAgXCJoZWlnaHRcIjogXCI2MFwiXG4gICAgICB9LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcmNcIjogaXRlbS5QZXJzb25QaG90b1xuICAgICAgfVxuICAgIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcImZsZXgtZGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgICAgIFwibWFyZ2luLWxlZnRcIjogXCI1XCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwibWFyZ2luLXRvcFwiOiBcIjVcIlxuICAgICAgfVxuICAgIH0sIFtfYygndGV4dCcsIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwiZm9udC1zaXplXCI6IFwiMjBcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uUGVyc29uTmFtZSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwibWFyZ2luLXRvcFwiOiBcIjVcIlxuICAgICAgfVxuICAgIH0sIFtfYygndGV4dCcsIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwiZm9udC1zaXplXCI6IFwiMjBcIixcbiAgICAgICAgXCJjb2xvclwiOiBcIiNjY2NjY2NcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uUGVyc29uVmlzaXRUaW1lKSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwiZmxleFwiOiBcIjVcIixcbiAgICAgICAgXCJmbGV4LWRpcmVjdGlvblwiOiBcInJvd1wiXG4gICAgICB9XG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcImZsZXgtZGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgICAgIFwibWFyZ2luLWxlZnRcIjogXCIxMFwiLFxuICAgICAgICBcIm1hcmdpbi10b3BcIjogXCIxMFwiXG4gICAgICB9XG4gICAgfSwgW19jKCdkaXYnLCBbX2MoJ2ltYWdlJywge1xuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJ3aWR0aFwiOiBcIjIwXCIsXG4gICAgICAgIFwiaGVpZ2h0XCI6IFwiMjBcIlxuICAgICAgfSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS90cHMvaTQvVEIxemtEZUlGWFhYWFhyWFZYWDA3dGxUWFhYLTIwMC0yMDAucG5nXzg4eDg4eHouanBnXCJcbiAgICAgIH1cbiAgICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCd0ZXh0Jywge1xuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJmb250LXNpemVcIjogXCIyMFwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIkhvcGVcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICAgICAgXCJsZWZ0XCI6IFwiOTBcIixcbiAgICAgICAgXCJ0b3BcIjogXCIxMFwiLFxuICAgICAgICBcImZsZXgtZGlyZWN0aW9uXCI6IFwicm93XCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2RpdicsIFtfYygnaW1hZ2UnLCB7XG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcIndpZHRoXCI6IFwiMjBcIixcbiAgICAgICAgXCJoZWlnaHRcIjogXCIyMFwiXG4gICAgICB9LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcmNcIjogXCJodHRwczovL2ltZy5hbGljZG4uY29tL3Rwcy9pMi9UQjFoUmIxSVhYWFhYWDNYVlhYWFFhUC5wWFgtODctODcuanBlZ1wiXG4gICAgICB9XG4gICAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygndGV4dCcsIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwiZm9udC1zaXplXCI6IFwiMjBcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJNZW1cIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICAgICAgXCJsZWZ0XCI6IFwiMTcwXCIsXG4gICAgICAgIFwidG9wXCI6IFwiMTBcIixcbiAgICAgICAgXCJmbGV4LWRpcmVjdGlvblwiOiBcInJvd1wiXG4gICAgICB9XG4gICAgfSwgW19jKCdkaXYnLCBbX2MoJ2ltYWdlJywge1xuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJ3aWR0aFwiOiBcIjIwXCIsXG4gICAgICAgIFwiaGVpZ2h0XCI6IFwiMjBcIlxuICAgICAgfSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS90cHMvaTMvVEIxREdrSkpGWFhYWGFaWEZYWDA3dGxUWFhYLTIwMC0yMDAucG5nXCJcbiAgICAgIH1cbiAgICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCd0ZXh0Jywge1xuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJmb250LXNpemVcIjogXCIyMFwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcImF1dGhcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICAgICAgXCJsZWZ0XCI6IFwiMjUwXCIsXG4gICAgICAgIFwidG9wXCI6IFwiMTBcIixcbiAgICAgICAgXCJmbGV4LWRpcmVjdGlvblwiOiBcInJvd1wiXG4gICAgICB9XG4gICAgfSwgW19jKCdkaXYnLCBbX2MoJ2ltYWdlJywge1xuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJ3aWR0aFwiOiBcIjIwXCIsXG4gICAgICAgIFwiaGVpZ2h0XCI6IFwiMjBcIlxuICAgICAgfSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxbkZ2UElYWFhYWGJVWFhYWFVBa1BKcFhYLTg3LTg3LnBuZ1wiXG4gICAgICB9XG4gICAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygndGV4dCcsIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwiZm9udC1zaXplXCI6IFwiMjBcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJGcmllbmRcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICAgICAgXCJsZWZ0XCI6IFwiMzMwXCIsXG4gICAgICAgIFwidG9wXCI6IFwiMTBcIixcbiAgICAgICAgXCJmbGV4LWRpcmVjdGlvblwiOiBcInJvd1wiXG4gICAgICB9XG4gICAgfSwgW19jKCdkaXYnLCBbX2MoJ2ltYWdlJywge1xuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJ3aWR0aFwiOiBcIjIwXCIsXG4gICAgICAgIFwiaGVpZ2h0XCI6IFwiMjBcIlxuICAgICAgfSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS90cHMvaTIvVEIxQ3BEN0lYWFhYWGJTWFhYWFVBa1BKcFhYLTg3LTg3LnBuZ1wiXG4gICAgICB9XG4gICAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygndGV4dCcsIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwiZm9udC1zaXplXCI6IFwiMjBcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJpc3N1ZVwiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICBcImxlZnRcIjogXCI0MTBcIixcbiAgICAgICAgXCJ0b3BcIjogXCIxMFwiLFxuICAgICAgICBcImZsZXgtZGlyZWN0aW9uXCI6IFwicm93XCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2RpdicsIFtfYygnaW1hZ2UnLCB7XG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcIndpZHRoXCI6IFwiMjBcIixcbiAgICAgICAgXCJoZWlnaHRcIjogXCIyMFwiXG4gICAgICB9LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcmNcIjogXCJodHRwczovL2d0bXMwMi5hbGljZG4uY29tL3Rwcy9pMi9UQjExWlpmSVZYWFhYYk1YRlhYRURoR0dYWFgtMzItMzIucG5nXCJcbiAgICAgIH1cbiAgICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCd0ZXh0Jywge1xuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJmb250LXNpemVcIjogXCIyMFwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcInN1cGVyXCIpXSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInNob3BCb2R5XCIsXG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcImZsZXgtZGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NEaXZcIixcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwibWFyZ2luLXRvcFwiOiBcIjEwXCIsXG4gICAgICAgIFwibWFyZ2luLWxlZnRcIjogXCIxMFwiXG4gICAgICB9XG4gICAgfSwgW19jKCd0ZXh0Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwic2hvcERlc2NcIixcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwiZm9udC1zaXplXCI6IFwiMjVcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uc2hvcERlc2MpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcImZsZXgtZGlyZWN0aW9uXCI6IFwicm93XCJcbiAgICAgIH1cbiAgICB9LCBfdm0uX2woKGl0ZW0uc2hvcEltZ0xpc3QpLCBmdW5jdGlvbihpbWcpIHtcbiAgICAgIHJldHVybiBfYygnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJpbWdEaXZcIixcbiAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICBcImZsZXhcIjogXCIxXCIsXG4gICAgICAgICAgXCJmbGV4LWRpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgICAgICAgIFwibWFyZ2luXCI6IFwiMTBcIlxuICAgICAgICB9XG4gICAgICB9LCBbX2MoJ2RpdicsIFtfYygnaW1hZ2UnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcInNob3BJbWdcIixcbiAgICAgICAgc3R5bGU6ICh7XG4gICAgICAgICAgd2lkdGg6IGltZy5zaG9wSW1nV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBpbWcuc2hvcEltZ0hlaWdodFxuICAgICAgICB9KSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBcInNyY1wiOiBpbWcuc2hvcEltZ1xuICAgICAgICB9XG4gICAgICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgIFwiZmxleFwiOiBcIjFcIixcbiAgICAgICAgICBcIm1hcmdpbi10b3BcIjogXCIxMFwiLFxuICAgICAgICAgIFwiZmxleC1kaXJlY3Rpb25cIjogXCJyb3dcIlxuICAgICAgICB9XG4gICAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICBcImZsZXhcIjogXCIxXCIsXG4gICAgICAgICAgXCJqdXN0aWZ5LWNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICAgICAgICBcImZsZXgtZGlyZWN0aW9uXCI6IFwicm93XCJcbiAgICAgICAgfVxuICAgICAgfSwgW19jKCdkaXYnLCBbX2MoJ2ltYWdlJywge1xuICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgIFwid2lkdGhcIjogXCIyMFwiLFxuICAgICAgICAgIFwiaGVpZ2h0XCI6IFwiMjBcIlxuICAgICAgICB9LFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS90cHMvaTEvVEIxbkZ2UElYWFhYWGJVWFhYWFVBa1BKcFhYLTg3LTg3LnBuZ1wiXG4gICAgICAgIH1cbiAgICAgIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgXCJtYXJnaW4tbGVmdFwiOiBcIjVcIlxuICAgICAgICB9XG4gICAgICB9LCBbX2MoJ3RleHQnLCB7XG4gICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgXCJmb250LXNpemVcIjogXCIyMFwiLFxuICAgICAgICAgIFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiXG4gICAgICAgIH1cbiAgICAgIH0sIFtfdm0uX3YoXCJVcFwiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICBcImZsZXhcIjogXCIxXCIsXG4gICAgICAgICAgXCJqdXN0aWZ5LWNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICAgICAgICBcImZsZXgtZGlyZWN0aW9uXCI6IFwicm93XCJcbiAgICAgICAgfVxuICAgICAgfSwgW19jKCdkaXYnLCBbX2MoJ2ltYWdlJywge1xuICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgIFwid2lkdGhcIjogXCIyMFwiLFxuICAgICAgICAgIFwiaGVpZ2h0XCI6IFwiMjBcIlxuICAgICAgICB9LFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS90cHMvaTIvVEIxQ3BEN0lYWFhYWGJTWFhYWFVBa1BKcFhYLTg3LTg3LnBuZ1wiXG4gICAgICAgIH1cbiAgICAgIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgXCJtYXJnaW4tbGVmdFwiOiBcIjVcIlxuICAgICAgICB9XG4gICAgICB9LCBbX2MoJ3RleHQnLCB7XG4gICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgXCJmb250LXNpemVcIjogXCIyMFwiLFxuICAgICAgICAgIFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiXG4gICAgICAgIH1cbiAgICAgIH0sIFtfdm0uX3YoXCJkb3duXCIpXSldKV0pXSldKVxuICAgIH0pKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwic2hvcEZvb3RlclwiLFxuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJmbGV4LWRpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgICAgICBcIm1hcmdpbi10b3BcIjogXCIxMFwiLFxuICAgICAgICBcIm1hcmdpbi1sZWZ0XCI6IFwiMTBcIixcbiAgICAgICAgXCJqdXN0aWZ5LWNvbnRlbnRcIjogXCJmbGV4LWVuZFwiXG4gICAgICB9XG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcIm1hcmdpbi1yaWdodFwiOiBcIjVcIlxuICAgICAgfVxuICAgIH0sIFtfYygnaW1hZ2UnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJzaG9wTGlrZUltZyBzbWFsbEltZ1wiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcmNcIjogaXRlbS5zaG9wTGlrZUltZ1xuICAgICAgfVxuICAgIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcIm1hcmdpbi1yaWdodFwiOiBcIjE1XCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ3RleHQnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJzaG9wTGlrZVRleHRcIixcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwiZm9udC1zaXplXCI6IFwiMjBcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uc2hvcExpa2VUZXh0KSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCI1XCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2ltYWdlJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwic2hvcENvbW1lbnRJbWcgc21hbGxJbWdcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3JjXCI6IGl0ZW0uc2hvcENvbW1lbnRJbWdcbiAgICAgIH1cbiAgICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIxNVwiXG4gICAgICB9XG4gICAgfSwgW19jKCd0ZXh0Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwic2hvcENvbW1lbnRUZXh0XCIsXG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjIwXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KF92bS5fcyhpdGVtLnNob3BDb21tZW50VGV4dCkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwibWFyZ2luLXJpZ2h0XCI6IFwiNVwiXG4gICAgICB9XG4gICAgfSwgW19jKCdpbWFnZScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInNob3BMb29rSW1nIHNtYWxsSW1nXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNyY1wiOiBpdGVtLnNob3BMb29rSW1nXG4gICAgICB9XG4gICAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwibWFyZ2luLXJpZ2h0XCI6IFwiMTVcIlxuICAgICAgfVxuICAgIH0sIFtfYygndGV4dCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInNob3BMb29rVGV4dFwiLFxuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJmb250LXNpemVcIjogXCIyMFwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3MoaXRlbS5zaG9wTG9va1RleHQpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcIm1hcmdpbi1yaWdodFwiOiBcIjVcIlxuICAgICAgfVxuICAgIH0sIFtfYygnaW1hZ2UnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJzaGFyZUltZyBzbWFsbEltZ1wiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcmNcIjogaXRlbS5zaGFyZUltZ1xuICAgICAgfVxuICAgIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcIm1hcmdpbi1yaWdodFwiOiBcIjIwXCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ3RleHQnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJzaGFyZVRleHRcIixcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwiZm9udC1zaXplXCI6IFwiMjBcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uc2hhcmVUZXh0KSldKV0pXSldKV0pXG4gIH0pKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0wYWJkZDk2NlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMGFiZGQ5NjYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9zaG93Y2FzZS9pdGVtbGlzdC52dWU/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gMTYyXG4vLyBtb2R1bGUgY2h1bmtzID0gNTQiXSwic291cmNlUm9vdCI6IiJ9