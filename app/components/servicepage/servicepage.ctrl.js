(function () {
    'use strict';
  
    angular
      .module('app')
      .controller('ServicepageController', ServicepageController);
  
    ServicepageController.$inject = ['$state', '$rootScope', '$filter','ServicepageService'];
    function ServicepageController($state, $rootScope, $filter,ServicepageService) {
      var vm = this;
  
      activate();
  
      ////////////////
  
      function activate() {
      }
    }
  })();