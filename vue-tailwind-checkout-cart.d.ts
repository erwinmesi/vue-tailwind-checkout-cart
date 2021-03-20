import Vue, { PluginFunction, VueConstructor } from 'vue';

declare const VueCheckoutCart: VueConstructor<Vue> & { install: PluginFunction<any>; };
export default VueCheckoutCart;
