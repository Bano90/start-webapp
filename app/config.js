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
      $stateProvider.state('network', {
        url: '/network',
        templateUrl: './app/components/network/network.html',
        controller: 'NetworkController',
        controllerAs: 'vm'
      });
      $stateProvider.state('cardmanagement', {
        url: '/cardmanagement',
        templateUrl: './app/components/cardmanagement/cardmanagement.html',
        controller: 'CardmanagementController',
        controllerAs: 'vm'
      });
      $stateProvider.state('servicepage', {
        url: '/cardmanagement',
        templateUrl: './app/components/servicepage/servicepage.html',
        controller: 'ServicepageController',
        controllerAs: 'vm'
      });
    }
    ConfigFunction.$inject = ['$urlRouterProvider', '$stateProvider'];
    //return ConfigFunction;
})();