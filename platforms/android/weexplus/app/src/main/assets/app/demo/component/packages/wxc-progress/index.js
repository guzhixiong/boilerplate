// { "framework": "Vue" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(229)
	)

	/* script */
	__vue_exports__ = __webpack_require__(230)

	/* template */
	var __vue_template__ = __webpack_require__(231)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zhengjiangrong/Documents/GitHub/weexplus/src/demo/component/packages/wxc-progress/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5c5285a2"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),

/***/ 229:
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-progress": {
	    "backgroundColor": "#f2f3f4"
	  },
	  "progress": {
	    "position": "absolute",
	    "backgroundColor": "#FFC900"
	  }
	}

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    barColor: {
	      type: String,
	      default: '#FFC900'
	    },
	    barWidth: {
	      type: Number,
	      default: 600
	    },
	    barHeight: {
	      type: Number,
	      default: 8
	    },
	    value: {
	      type: Number,
	      default: 0
	    }
	  },
	  computed: {
	    runWayStyle: function runWayStyle() {
	      var barWidth = this.barWidth,
	          barHeight = this.barHeight;

	      return {
	        width: barWidth + 'px',
	        height: barHeight + 'px'
	      };
	    },
	    progressStyle: function progressStyle() {
	      var value = this.value,
	          barWidth = this.barWidth,
	          barHeight = this.barHeight,
	          barColor = this.barColor;

	      var newValue = value < 0 ? 0 : value > 100 ? 100 : value;
	      return {
	        backgroundColor: barColor,
	        height: barHeight + 'px',
	        width: newValue / 100 * barWidth + 'px'
	      };
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wxc-progress"],
	    style: _vm.runWayStyle,
	    attrs: {
	      "accessible": true,
	      "ariaLabel": ("进度为百分之" + _vm.value)
	    }
	  }, [_c('div', {
	    staticClass: ["progress"],
	    style: _vm.progressStyle
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });