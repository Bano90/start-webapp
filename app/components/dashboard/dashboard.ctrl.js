(function () {
    'use strict';
  
    angular
      .module('app')
      .controller('DashboardController', DashboardController);
  
    DashboardController.$inject = ['$state', '$rootScope', '$filter','DashboardService'];
    function DashboardController($state, $rootScope, $filter,DashboardService) {
      var vm = this;
      vm.data=[];
      vm.actcode="";
  
      activate();
  
      ////////////////

      function load(){
        vm.code=[];
        DashboardService.get().then(function(response){
          vm.data=response.data;
        });
      }
  
      function activate() {
        load();
      }
    }
  })();