(function () {
  'use strict';

  angular
    .module('app')
    .controller('NetworkController', NetworkController);

  NetworkController.$inject = ['$state', '$rootScope', '$filter', 'NetworkService'];
  function NetworkController($state, $rootScope, $filter, NetworkService) {
    var vm = this;
    vm.actoption = "LAN";
    vm.actlanoption = "DHCP";
    vm.options = ["LAN", "WIFI AP", "WIFI Kliens"];
    vm.lanoptions = ["DHCP", "FIX IP"];
    vm.save=save;


    activate();

    ////////////////

    function loadip(){
      vm.ipmask=[];
      NetworkService.get().then(function(response){
        vm.ipmask=response.data[0];
        console.log(vm.ipmask);
      });
    }

    function save(arr){
      console.log(arr);
      NetworkService.put(vm.ipmask).then(function(response){
        alert(vm.ipmask);
      });
    }

    function activate() {
      loadip();
    }
  }
})();