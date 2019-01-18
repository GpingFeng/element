import ElButton from './src/button';

/* istanbul ignore next 类似插件 */
ElButton.install = function(Vue) {
  Vue.component(ElButton.name, ElButton);
};

export default ElButton;
