import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  features = [
    {
      title: 'Get Certified',
      description: 'Track the credits you need to get or renew your certification.'
    },
    {
      title: 'Data Fidelity',
      description: 'Never lose track of your progress again. View and print credit documents any time.'
    },
  ];

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
  }

}

export default angular.module('meanpc1App.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
