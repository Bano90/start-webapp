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


    activate();

    ////////////////

    function activate() {
    }
  }
})();