(function () {
    'use strict';
  
    angular
      .module('app')
      .controller('DashboardController', DashboardController);
  
    DashboardController.$inject = ['$state', '$rootScope', '$filter'];
    function DashboardController($state, $rootScope, $filter) {
      var vm = this;
  
      activate();
  
      ////////////////
  
      function activate() {
      }
    }
  })();