(function () {
    'use strict';
    angular
    .module('app')
    .config(ConfigFunction);
    
    function ConfigFunction($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/');
  
      // routing
      $stateProvider.state('dashboard', {
        url: '/',
        templateUrl: './app/components/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'vm'
      });
    }
    ConfigFunction.$inject = ['$urlRouterProvider', '$stateProvider'];
    //return ConfigFunction;
})();