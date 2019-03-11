(function () {
    'use strict';
  
    angular
      .module('app')
      .controller('DashboardController', DashboardController);
  
    DashboardController.$inject = ['$state', '$rootScope', '$filter','DashboardService'];
    function DashboardController($state, $rootScope, $filter,DashboardService) {
      var vm = this;
  
      activate();
  
      ////////////////
  
      function activate() {
      }
    }
  })();