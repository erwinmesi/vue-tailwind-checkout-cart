import Vue from 'vue';

var script$4 = Vue.extend({
  inject: ['data'],
  computed: {
    publisher() {
      return this.data.publisher || {};
    }

  }
});

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}

/* script */
const __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "shadow-md p-5 rounded-lg bg-white"
  }, [_c('div', {
    staticClass: "flex"
  }, [_c('div', [_vm.publisher.image ? _c('img', {
    staticClass: "rounded mr-4",
    staticStyle: {
      "min-width": "75px",
      "min-height": "75px",
      "width": "75px",
      "height": "75px"
    },
    attrs: {
      "src": _vm.publisher.image,
      "alt": _vm.publisher.username
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "flex flex-col justify-center"
  }, [_c('h4', {
    staticClass: "font-semibold text-xl text-blue-500"
  }, [_vm._v("\n        " + _vm._s(_vm.publisher.username) + "\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "text-sm mb-2"
  }, [_vm._v("\n        " + _vm._s(_vm.publisher.info) + "\n      ")])])])]);
};

var __vue_staticRenderFns__$4 = [];
/* style */

const __vue_inject_styles__$4 = undefined;
/* scoped */

const __vue_scope_id__$4 = undefined;
/* module identifier */

const __vue_module_identifier__$4 = undefined;
/* functional template */

const __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

var script$3 = Vue.extend({
  inject: ['data', 'emitEvent'],
  computed: {
    subTotal() {
      const vm = this;
      const {
        deliveryItems = [],
        pickupItems = []
      } = vm.data;
      const deliveryItemsTotal = vm.getTotal(deliveryItems);
      const pickupItemsTotal = vm.getTotal(pickupItems);
      return deliveryItemsTotal + pickupItemsTotal;
    },

    taxes() {
      const vm = this;
      return vm.subTotal * (vm.data.tax || 0);
    },

    total() {
      const vm = this;
      return vm.subTotal + vm.taxes;
    }

  },
  methods: {
    getTotal(items) {
      return (items || []).reduce((total, item) => {
        total += +item.quantity * +item.price;
        return total;
      }, 0);
    }

  }
});

/* script */
const __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "checkout-cart__order-summary shadow-md rounded-lg bg-white"
  }, [_c('h4', {
    staticClass: "text-lg font-medium text-gray-600 mb-4"
  }, [_vm._v("Order Summary")]), _vm._v(" "), _c('p', {
    staticClass: "flex justify-between mb-1 text-gray-400"
  }, [_c('span', [_vm._v("Subtotal:")]), _vm._v(" "), _c('span', [_vm._v("$" + _vm._s(_vm.subTotal.toFixed(2)))])]), _vm._v(" "), _c('p', {
    staticClass: "flex justify-between mb-1 text-gray-400"
  }, [_c('span', [_vm._v("Taxes:")]), _vm._v(" "), _c('span', [_vm._v("$" + _vm._s(_vm.taxes.toFixed(2)))])]), _vm._v(" "), _c('hr', {
    staticClass: "my-4"
  }), _vm._v(" "), _c('p', {
    staticClass: "flex justify-between mb-1"
  }, [_c('span', [_vm._v("Total:")]), _vm._v(" "), _c('span', [_vm._v("$" + _vm._s(_vm.total.toFixed(2)))])]), _vm._v(" "), _c('button', {
    staticClass: "p-2 border border-blue-500 bg-blue-500 rounded text-white focus:outline-none hover:bg-blue-700 hover:border-blue-700 text-sm w-full mt-4",
    on: {
      "click": function ($event) {
        return _vm.emitEvent('checkout-click', {
          data: _vm.data,
          subTotal: _vm.subTotal,
          taxes: _vm.taxes,
          total: _vm.total
        });
      }
    }
  }, [_vm._v("\n    Checkout\n  ")])]);
};

var __vue_staticRenderFns__$3 = [];
/* style */

const __vue_inject_styles__$3 = undefined;
/* scoped */

const __vue_scope_id__$3 = undefined;
/* module identifier */

const __vue_module_identifier__$3 = undefined;
/* functional template */

const __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

const monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function formatDateWithLeadTime(leadTime) {
  const currentDateInSecs = Math.round(new Date().getTime() / 1000);
  return formatDate(new Date((currentDateInSecs + leadTime * 60) * 1000));
}
function formatDate(date) {
  return {
    base: date,
    formatted: `${monthsNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  };
}

var script$2 = Vue.extend({
  inject: ['data', 'emitEvent'],
  computed: {
    address() {
      return this.data.deliveryLocation;
    },

    deliveryDate() {
      return formatDateWithLeadTime(this.data.deliveryLeadTime).formatted;
    }

  }
});

/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "orders--delivery shadow-md rounded-lg bg-white mb-4"
  }, [_c('div', {
    staticClass: "p-4 font-semibold"
  }, [_vm._v("Delivery Information")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "p-4"
  }, [_c('div', {
    staticClass: "flex flex-col lg:flex-row mb-4"
  }, [_c('div', {
    staticClass: "delivery__address w-full lg:w-1/2 pr-4 mb-2 lg:mb-0"
  }, [_c('label', {
    staticClass: "text-sm text-gray-400 font-semibold mb-2 inline-block"
  }, [_vm._v("\n          Items to be delivered to\n        ")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.address.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.address.street))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.address.city) + ", " + _vm._s(_vm.address.state) + ", " + _vm._s(_vm.address.zip))]), _vm._v(" "), _c('a', {
    staticClass: "text-xs text-blue-500 cursor-pointer hover:text-blue-700",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function ($event) {
        return _vm.emitEvent('edit-delivery-address-click', _vm.data);
      }
    }
  }, [_vm._v("\n          Change\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "delivery__schedule w-full lg:w-1/2 pr-4"
  }, [_c('label', {
    staticClass: "text-sm text-gray-400 font-semibold mb-2 inline-block"
  }, [_vm._v("\n          Estimated Delivery Date\n        ")]), _vm._v(" "), _c('p', [_vm._v("\n          " + _vm._s(_vm.deliveryDate) + "\n        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "delivery__items mb-4"
  }, [_vm._m(0), _vm._v(" "), _vm._l(_vm.data.deliveryItems, function (item, i) {
    return _c('div', {
      key: i,
      staticClass: "border p-2",
      class: [{
        'rounded-t-lg': i === 0
      }, {
        'rounded-b-lg': i === _vm.data.deliveryItems.length - 1
      }, i < _vm.data.deliveryItems.length - 1 ? 'border-b-0' : 'border-b']
    }, [_c('div', {
      staticClass: "flex flex-col lg:flex-row items-center"
    }, [_c('div', {
      staticClass: "mr-2 text-center"
    }, [_c('img', {
      staticClass: "object-contain bg-no-repeat",
      staticStyle: {
        "min-width": "100px",
        "width": "100px",
        "min-height": "100px",
        "height": "100px"
      },
      attrs: {
        "src": item.image,
        "alt": item.name
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "flex-grow text-center lg:text-left"
    }, [_c('p', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('small', {
      staticClass: "text-gray-400"
    }, [_vm._v(_vm._s(item.selectedOptions))])]), _vm._v(" "), _c('div', {
      staticClass: "py-2 lg:p-4 text-right"
    }, [_c('p', {
      staticClass: "text-blue-500 font-semibold"
    }, [_vm._v("\n              " + _vm._s(item.quantity) + " @ $" + _vm._s(item.price.toFixed(2)) + "\n            ")])])]), _vm._v(" "), _c('div', {
      staticClass: "text-center lg:text-left"
    }, [_c('a', {
      staticClass: "text-xs text-green-500 cursor-pointer mr-2 hover:text-green-700",
      attrs: {
        "href": "javascript:void(0)"
      },
      on: {
        "click": function ($event) {
          return _vm.emitEvent('update-delivery-item-click', item);
        }
      }
    }, [_vm._v("\n            Update\n          ")]), _vm._v(" "), _c('a', {
      staticClass: "text-xs text-red-500 cursor-pointer hover:text-red-700",
      attrs: {
        "href": "javascript:void(0)"
      },
      on: {
        "click": function ($event) {
          return _vm.emitEvent('remove-delivery-item-click', item);
        }
      }
    }, [_vm._v("\n            Remove\n          ")])])]);
  })], 2)])]);
};

var __vue_staticRenderFns__$2 = [function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "flex justify-between"
  }, [_c('label', {
    staticClass: "text-sm text-gray-400 font-semibold mb-2"
  }, [_vm._v("\n          Delivery Items\n        ")])]);
}];
/* style */

const __vue_inject_styles__$2 = undefined;
/* scoped */

const __vue_scope_id__$2 = undefined;
/* module identifier */

const __vue_module_identifier__$2 = undefined;
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

var script$1 = Vue.extend({
  inject: ['data', 'emitEvent'],
  computed: {
    address() {
      return this.data.pickupLocation;
    },

    suggestedDate() {
      return formatDateWithLeadTime(this.data.pickupLeadTime).base;
    },

    selectedPickupDate() {
      const vm = this;

      if (!vm.data.selectedPickupDate) {
        return null;
      }

      return formatDate(new Date(vm.data.selectedPickupDate)).formatted;
    }

  }
});

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "orders--pickup shadow-md rounded-lg bg-white mb-4"
  }, [_c('div', {
    staticClass: "p-4 font-semibold"
  }, [_vm._v("Pickup Information")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "p-4"
  }, [_c('div', {
    staticClass: "flex flex-col lg:flex-row mb-4"
  }, [_c('div', {
    staticClass: "pickup__address w-full lg:w-1/2 pr-4 mb-2 lg:mb-0"
  }, [_c('label', {
    staticClass: "text-sm text-gray-400 font-semibold mb-2 inline-block"
  }, [_vm._v("\n          Items to be picked up at\n        ")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.address.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.address.street))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.address.city) + ", " + _vm._s(_vm.address.state) + ", " + _vm._s(_vm.address.zip))]), _vm._v(" "), _c('a', {
    staticClass: "text-xs text-blue-500 cursor-pointer hover:text-blue-700",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function ($event) {
        return _vm.emitEvent('edit-pickup-address-click', _vm.data);
      }
    }
  }, [_vm._v("\n          Change\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "pickup__schedule w-full lg:w-1/2 pr-4"
  }, [_c('label', {
    staticClass: "text-sm text-gray-400 font-semibold mb-2 inline-block"
  }, [_vm._v("\n          Selected Pickup Date\n        ")]), _vm._v(" "), _vm.selectedPickupDate ? [_c('p', [_vm._v("\n            " + _vm._s(_vm.selectedPickupDate) + "\n          ")]), _vm._v(" "), _c('a', {
    staticClass: "text-xs text-blue-500 cursor-pointer hover:text-blue-700",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function ($event) {
        return _vm.emitEvent('schedule-pickup-click', _vm.data);
      }
    }
  }, [_vm._v("\n            Change\n          ")])] : [_c('div', [_c('button', {
    staticClass: "p-2 border border-blue-500 rounded text-blue-500 focus:outline-none hover:bg-blue-100 text-sm",
    on: {
      "click": function ($event) {
        return _vm.emitEvent('select-pickup-date-click', {
          data: _vm.data,
          suggestedDate: _vm.suggestedDate
        });
      }
    }
  }, [_vm._v("\n              Schedule Pickup\n            ")])])]], 2)]), _vm._v(" "), _c('div', {
    staticClass: "pickup__items mb-4"
  }, [_vm._m(0), _vm._v(" "), _vm._l(_vm.data.pickupItems, function (item, i) {
    return _c('div', {
      key: i,
      staticClass: "border p-2",
      class: [{
        'rounded-t-lg': i === 0
      }, {
        'rounded-b-lg': i === _vm.data.pickupItems.length - 1
      }, i < _vm.data.pickupItems.length - 1 ? 'border-b-0' : 'border-b']
    }, [_c('div', {
      staticClass: "flex flex-col lg:flex-row items-center"
    }, [_c('div', {
      staticClass: "mr-2 text-center"
    }, [_c('img', {
      staticClass: "object-contain bg-no-repeat",
      staticStyle: {
        "min-width": "100px",
        "width": "100px",
        "min-height": "100px",
        "height": "100px"
      },
      attrs: {
        "src": item.image,
        "alt": item.name
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "flex-grow text-center lg:text-left"
    }, [_c('p', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('small', {
      staticClass: "text-gray-400"
    }, [_vm._v(_vm._s(item.selectedOptions))])]), _vm._v(" "), _c('div', {
      staticClass: "py-2 lg:p-4 text-right"
    }, [_c('p', {
      staticClass: "text-blue-500 font-semibold"
    }, [_vm._v("\n              " + _vm._s(item.quantity) + " @ $" + _vm._s(item.price.toFixed(2)) + "\n            ")])])]), _vm._v(" "), _c('div', {
      staticClass: "text-center lg:text-left"
    }, [_c('a', {
      staticClass: "text-xs text-green-500 cursor-pointer mr-2 hover:text-green-700",
      attrs: {
        "href": "javascript:void(0)"
      },
      on: {
        "click": function ($event) {
          return _vm.emitEvent('update-pickup-item-click', item);
        }
      }
    }, [_vm._v("\n            Update\n          ")]), _vm._v(" "), _c('a', {
      staticClass: "text-xs text-red-500 cursor-pointer hover:text-red-700",
      attrs: {
        "href": "javascript:void(0)"
      },
      on: {
        "click": function ($event) {
          return _vm.emitEvent('remove-pickup-item-click', item);
        }
      }
    }, [_vm._v("\n            Remove\n          ")])])]);
  })], 2)])]);
};

var __vue_staticRenderFns__$1 = [function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "flex justify-between"
  }, [_c('label', {
    staticClass: "text-sm text-gray-400 font-semibold mb-2"
  }, [_vm._v("\n          Pickup Items\n        ")])]);
}];
/* style */

const __vue_inject_styles__$1 = undefined;
/* scoped */

const __vue_scope_id__$1 = undefined;
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

var script = /*#__PURE__*/Vue.extend({
  name: 'VueTailwindCheckoutCart',

  provide() {
    const vm = this;
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
    deliveryItems() {
      return this.data.deliveryItems || [];
    },

    pickupItems() {
      return this.data.pickupItems || [];
    }

  },
  methods: {
    emitEvent(eventName, data) {
      this.$emit(eventName, data);
    }

  }
});

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "vue-tw-checkout-cart p-2",
    class: _vm.twBgColor
  }, [_vm.data.publisher ? _c('CheckoutCartPublisher', {
    staticClass: "mb-4"
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "flex flex-col md:flex-row"
  }, [_vm.deliveryItems.length || _vm.pickupItems.length ? _c('div', {
    staticClass: "checkout-cart__orders flex flex-col flex-grow"
  }, [_vm.deliveryItems.length ? _c('CheckoutCartDeliveryItems') : _vm._e(), _vm._v(" "), _vm.pickupItems.length ? _c('CheckoutCartPickupItems') : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "md:ml-4"
  }, [_c('CheckoutCartSummary', {
    staticClass: "p-5 sticky top-4"
  })], 1)])], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-6b72efe4_0", {
    source: ".checkout-cart__order-summary[data-v-6b72efe4]{min-width:320px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-6b72efe4";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

// Import vue component

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
var entry_esm = /*#__PURE__*/(() => {
  // Assign InstallableComponent type
  const installable = __vue_component__; // Attach install function executed by Vue.use()

  installable.install = Vue => {
    Vue.component('VueCheckoutCart', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export default entry_esm;
