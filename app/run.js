(function () {
    'use strict';
  
    angular
      .module('app')
      .run(runFunction);
  
    runFunction.$inject = ['$state', '$rootScope', '$mdSidenav'];
    function runFunction($state, $rootScope, $mdSidenav) {
      var vm = this;

      $rootScope.close = function () {
        $mdSidenav('left').close();
      }
      $rootScope.open = function () {
        $mdSidenav('left').open();
      }
  
      activate();
  
      ////////////////
  
      function activate() {}
    }
})();