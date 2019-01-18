import ElButtonGroup from '../button/src/button-group';

/* istanbul ignore next */
// 开发插件，必须使用install方法
ElButtonGroup.install = function(Vue) {
  Vue.component(ElButtonGroup.name, ElButtonGroup);
};

export default ElButtonGroup;
