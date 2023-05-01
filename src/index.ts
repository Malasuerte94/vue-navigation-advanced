import SwipeBottomNavigation from './components/SwipeBottomNavigation.vue';

const plugin = {
  install(Vue: any) {
    Vue.component('SwipeBottomNavigation', SwipeBottomNavigation);
  },
};

export { SwipeBottomNavigation };

export default plugin;
