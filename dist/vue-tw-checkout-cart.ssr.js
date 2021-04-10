'use strict';var Vue=require('vue');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var Vue__default=/*#__PURE__*/_interopDefaultLegacy(Vue);function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script$4 = Vue__default['default'].extend({
  inject: ['data'],
  computed: {
    publisher: function publisher() {
      return this.data.publisher || {};
    }
  }
});function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}/* script */
var __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "shadow-md p-5 rounded-lg bg-white"
  }, [_vm._ssrNode("<div class=\"flex\"><div>" + (_vm.publisher.image ? "<img" + _vm._ssrAttr("src", _vm.publisher.image) + _vm._ssrAttr("alt", _vm.publisher.username) + " class=\"rounded mr-4\" style=\"min-width: 75px; min-height: 75px; width: 75px; height: 75px\">" : "<!---->") + "</div> <div class=\"flex flex-col justify-center\"><h4 class=\"font-semibold text-xl text-blue-500\">" + _vm._ssrEscape("\n        " + _vm._s(_vm.publisher.username) + "\n      ") + "</h4> <p class=\"text-sm mb-2\">" + _vm._ssrEscape("\n        " + _vm._s(_vm.publisher.info) + "\n      ") + "</p></div></div>")]);
};

var __vue_staticRenderFns__$4 = [];
/* style */

var __vue_inject_styles__$4 = undefined;
/* scoped */

var __vue_scope_id__$4 = undefined;
/* module identifier */

var __vue_module_identifier__$4 = "data-v-2753a560";
/* functional template */

var __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);var script$3 = Vue__default['default'].extend({
  inject: ['data', 'emitEvent'],
  computed: {
    subTotal: function subTotal() {
      var vm = this;
      var _vm$data = vm.data,
          _vm$data$deliveryItem = _vm$data.deliveryItems,
          deliveryItems = _vm$data$deliveryItem === void 0 ? [] : _vm$data$deliveryItem,
          _vm$data$pickupItems = _vm$data.pickupItems,
          pickupItems = _vm$data$pickupItems === void 0 ? [] : _vm$data$pickupItems;
      var deliveryItemsTotal = vm.getTotal(deliveryItems);
      var pickupItemsTotal = vm.getTotal(pickupItems);
      return deliveryItemsTotal + pickupItemsTotal;
    },
    taxes: function taxes() {
      var vm = this;
      return vm.subTotal * (vm.data.tax || 0);
    },
    total: function total() {
      var vm = this;
      return vm.subTotal + vm.taxes;
    }
  },
  methods: {
    getTotal: function getTotal(items) {
      return (items || []).reduce(function (total, item) {
        total += +item.quantity * +item.price;
        return total;
      }, 0);
    }
  }
});/* script */
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "checkout-cart__order-summary shadow-md rounded-lg bg-white"
  }, [_vm._ssrNode("<h4 class=\"text-lg font-medium text-gray-600 mb-4\">Order Summary</h4> <p class=\"flex justify-between mb-1 text-gray-400\"><span>Subtotal:</span> <span>" + _vm._ssrEscape("$" + _vm._s(_vm.subTotal.toFixed(2))) + "</span></p> <p class=\"flex justify-between mb-1 text-gray-400\"><span>Taxes:</span> <span>" + _vm._ssrEscape("$" + _vm._s(_vm.taxes.toFixed(2))) + "</span></p> <hr class=\"my-4\"> <p class=\"flex justify-between mb-1\"><span>Total:</span> <span>" + _vm._ssrEscape("$" + _vm._s(_vm.total.toFixed(2))) + "</span></p> <button class=\"p-2 border border-blue-500 bg-blue-500 rounded text-white focus:outline-none hover:bg-blue-700 hover:border-blue-700 text-sm w-full mt-4\">\n    Checkout\n  </button>")]);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = undefined;
/* scoped */

var __vue_scope_id__$3 = undefined;
/* module identifier */

var __vue_module_identifier__$3 = "data-v-455fa9d4";
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);var monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];function formatDateWithLeadTime(leadTime) {
  var currentDateInSecs = Math.round(new Date().getTime() / 1000);
  return formatDate(new Date((currentDateInSecs + leadTime * 60) * 1000));
}
function formatDate(date) {
  return {
    base: date,
    formatted: "".concat(monthsNames[date.getMonth()], " ").concat(date.getDate(), ", ").concat(date.getFullYear())
  };
}var script$2 = Vue__default['default'].extend({
  inject: ['data', 'emitEvent'],
  computed: {
    address: function address() {
      return this.data.deliveryLocation;
    },
    deliveryDate: function deliveryDate() {
      return formatDateWithLeadTime(this.data.deliveryLeadTime).formatted;
    }
  }
});/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "orders--delivery shadow-md rounded-lg bg-white mb-4"
  }, [_vm._ssrNode("<div class=\"p-4 font-semibold\">Delivery Information</div> <hr> <div class=\"p-4\"><div class=\"flex flex-col lg:flex-row mb-4\"><div class=\"delivery__address w-full lg:w-1/2 pr-4 mb-2 lg:mb-0\"><label class=\"text-sm text-gray-400 font-semibold mb-2 inline-block\">\n          Items to be delivered to\n        </label> <p>" + _vm._ssrEscape(_vm._s(_vm.address.name)) + "</p> <p>" + _vm._ssrEscape(_vm._s(_vm.address.street)) + "</p> <p>" + _vm._ssrEscape(_vm._s(_vm.address.city) + ", " + _vm._s(_vm.address.state) + ", " + _vm._s(_vm.address.zip)) + "</p> <a href=\"javascript:void(0)\" class=\"text-xs text-blue-500 cursor-pointer hover:text-blue-700\">\n          Change\n        </a></div> <div class=\"delivery__schedule w-full lg:w-1/2 pr-4\"><label class=\"text-sm text-gray-400 font-semibold mb-2 inline-block\">\n          Estimated Delivery Date\n        </label> <p>" + _vm._ssrEscape("\n          " + _vm._s(_vm.deliveryDate) + "\n        ") + "</p></div></div> <div class=\"delivery__items mb-4\"><div class=\"flex justify-between\"><label class=\"text-sm text-gray-400 font-semibold mb-2\">\n          Delivery Items\n        </label></div> " + _vm._ssrList(_vm.data.deliveryItems, function (item, i) {
    return "<div" + _vm._ssrClass("border p-2", [{
      'rounded-t-lg': i === 0
    }, {
      'rounded-b-lg': i === _vm.data.deliveryItems.length - 1
    }, i < _vm.data.deliveryItems.length - 1 ? 'border-b-0' : 'border-b']) + "><div class=\"flex flex-col lg:flex-row items-center\"><div class=\"mr-2 text-center\"><img" + _vm._ssrAttr("src", item.image) + _vm._ssrAttr("alt", item.name) + " class=\"object-contain bg-no-repeat\" style=\"\\n                min-width: 100px;\\n                width: 100px;\\n                min-height: 100px;\\n                height: 100px;\\n              \"></div> <div class=\"flex-grow text-center lg:text-left\"><p>" + _vm._ssrEscape(_vm._s(item.name)) + "</p> <small class=\"text-gray-400\">" + _vm._ssrEscape(_vm._s(item.selectedOptions)) + "</small></div> <div class=\"py-2 lg:p-4 text-right\"><p class=\"text-blue-500 font-semibold\">" + _vm._ssrEscape("\n              " + _vm._s(item.quantity) + " @ $" + _vm._s(item.price.toFixed(2)) + "\n            ") + "</p></div></div> <div class=\"text-center lg:text-left\"><a href=\"javascript:void(0)\" class=\"text-xs text-green-500 cursor-pointer mr-2 hover:text-green-700\">\n            Update\n          </a> <a href=\"javascript:void(0)\" class=\"text-xs text-red-500 cursor-pointer hover:text-red-700\">\n            Remove\n          </a></div></div>";
  }) + "</div></div>")]);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = "data-v-a8d6c2d8";
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);var script$1 = Vue__default['default'].extend({
  inject: ['data', 'emitEvent'],
  computed: {
    address: function address() {
      return this.data.pickupLocation;
    },
    suggestedDate: function suggestedDate() {
      return formatDateWithLeadTime(this.data.pickupLeadTime).base;
    },
    selectedPickupDate: function selectedPickupDate() {
      var vm = this;

      if (!vm.data.selectedPickupDate) {
        return null;
      }

      return formatDate(new Date(vm.data.selectedPickupDate)).formatted;
    }
  }
});/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "orders--pickup shadow-md rounded-lg bg-white mb-4"
  }, [_vm._ssrNode("<div class=\"p-4 font-semibold\">Pickup Information</div> <hr> <div class=\"p-4\"><div class=\"flex flex-col lg:flex-row mb-4\"><div class=\"pickup__address w-full lg:w-1/2 pr-4 mb-2 lg:mb-0\"><label class=\"text-sm text-gray-400 font-semibold mb-2 inline-block\">\n          Items to be picked up at\n        </label> <p>" + _vm._ssrEscape(_vm._s(_vm.address.name)) + "</p> <p>" + _vm._ssrEscape(_vm._s(_vm.address.street)) + "</p> <p>" + _vm._ssrEscape(_vm._s(_vm.address.city) + ", " + _vm._s(_vm.address.state) + ", " + _vm._s(_vm.address.zip)) + "</p> <a href=\"javascript:void(0)\" class=\"text-xs text-blue-500 cursor-pointer hover:text-blue-700\">\n          Change\n        </a></div> <div class=\"pickup__schedule w-full lg:w-1/2 pr-4\"><label class=\"text-sm text-gray-400 font-semibold mb-2 inline-block\">\n          Selected Pickup Date\n        </label> " + (_vm.selectedPickupDate ? "<p>" + _vm._ssrEscape("\n            " + _vm._s(_vm.selectedPickupDate) + "\n          ") + "</p> <a href=\"javascript:void(0)\" class=\"text-xs text-blue-500 cursor-pointer hover:text-blue-700\">\n            Change\n          </a>" : "<div><button class=\"p-2 border border-blue-500 rounded text-blue-500 focus:outline-none hover:bg-blue-100 text-sm\">\n              Schedule Pickup\n            </button></div>") + "</div></div> <div class=\"pickup__items mb-4\"><div class=\"flex justify-between\"><label class=\"text-sm text-gray-400 font-semibold mb-2\">\n          Pickup Items\n        </label></div> " + _vm._ssrList(_vm.data.pickupItems, function (item, i) {
    return "<div" + _vm._ssrClass("border p-2", [{
      'rounded-t-lg': i === 0
    }, {
      'rounded-b-lg': i === _vm.data.pickupItems.length - 1
    }, i < _vm.data.pickupItems.length - 1 ? 'border-b-0' : 'border-b']) + "><div class=\"flex flex-col lg:flex-row items-center\"><div class=\"mr-2 text-center\"><img" + _vm._ssrAttr("src", item.image) + _vm._ssrAttr("alt", item.name) + " class=\"object-contain bg-no-repeat\" style=\"\\n                min-width: 100px;\\n                width: 100px;\\n                min-height: 100px;\\n                height: 100px;\\n              \"></div> <div class=\"flex-grow text-center lg:text-left\"><p>" + _vm._ssrEscape(_vm._s(item.name)) + "</p> <small class=\"text-gray-400\">" + _vm._ssrEscape(_vm._s(item.selectedOptions)) + "</small></div> <div class=\"py-2 lg:p-4 text-right\"><p class=\"text-blue-500 font-semibold\">" + _vm._ssrEscape("\n              " + _vm._s(item.quantity) + " @ $" + _vm._s(item.price.toFixed(2)) + "\n            ") + "</p></div></div> <div class=\"text-center lg:text-left\"><a href=\"javascript:void(0)\" class=\"text-xs text-green-500 cursor-pointer mr-2 hover:text-green-700\">\n            Update\n          </a> <a href=\"javascript:void(0)\" class=\"text-xs text-red-500 cursor-pointer hover:text-red-700\">\n            Remove\n          </a></div></div>";
  }) + "</div></div>")]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = "data-v-3abdaf61";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);var script = /*#__PURE__*/Vue__default['default'].extend({
  name: 'VueTailwindCheckoutCart',
  provide: function provide() {
    var vm = this;
    return {
      data: vm.data,
      emitEvent: vm.emitEvent
    };
  },
  components: {
    CheckoutCartPublisher: __vue_component__$4,
    CheckoutCartSummary: __vue_component__$3,
    CheckoutCartDeliveryItems: __vue_component__$2,
    CheckoutCartPickupItems: __vue_component__$1
  },
  props: {
    twBgColor: {
      type: String,
      default: 'bg-gray-100'
    },
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    deliveryItems: function deliveryItems() {
      return this.data.deliveryItems || [];
    },
    pickupItems: function pickupItems() {
      return this.data.pickupItems || [];
    }
  },
  methods: {
    emitEvent: function emitEvent(eventName, data) {
      this.$emit(eventName, data);
    }
  }
});function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group = css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "vue-tw-checkout-cart p-2",
    class: _vm.twBgColor
  }, [_vm.data.publisher ? _c('CheckoutCartPublisher', {
    staticClass: "mb-4"
  }) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex flex-col md:flex-row\" data-v-a96ee62c>", "</div>", [_vm._ssrNode("<div class=\"checkout-cart__orders flex flex-col flex-grow\" data-v-a96ee62c>", "</div>", [_vm.deliveryItems.length || _vm.pickupItems.length ? [_vm.deliveryItems.length ? _c('CheckoutCartDeliveryItems') : _vm._e(), _vm._ssrNode(" "), _vm.pickupItems.length ? _c('CheckoutCartPickupItems') : _vm._e()] : _vm._ssrNode("<div class=\"shadow-md rounded-lg bg-white mb-4 p-4\" data-v-a96ee62c>\n        No orders to show.\n      </div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"md:ml-4\" data-v-a96ee62c>", "</div>", [_c('CheckoutCartSummary', {
    staticClass: "p-5 sticky top-4"
  })], 1)], 2)], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-a96ee62c_0", {
    source: ".checkout-cart__order-summary[data-v-a96ee62c]{min-width:320px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-a96ee62c";
/* module identifier */

var __vue_module_identifier__ = "data-v-a96ee62c";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);// Import vue component

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
var component = /*#__PURE__*/(function () {
  // Assign InstallableComponent type
  var installable = __vue_component__; // Attach install function executed by Vue.use()

  installable.install = function (Vue) {
    Vue.component('VueCheckoutCart', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default': component});// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;