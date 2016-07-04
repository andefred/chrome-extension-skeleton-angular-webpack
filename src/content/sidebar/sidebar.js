'use strict';

class SidebarCtrl {
  constructor() {
    this.app = {"menu":"item"}
  }
}

//this becomes a directive
export default () => {
  require('./sidebar.scss');
  return {
    controller: SidebarCtrl,
    controllerAs: 'sidebar',
    template: require('./sidebar.html')
  };
};