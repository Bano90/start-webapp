(function () {
    'use strict';
  
    angular
      .module('app')
      .factory('DashboardService', DashboardService);
  
    DashboardService.$inject = ['$http'];
    function DashboardService($http) {
      var service = {
        get: get,
      };
  
      return service;
  
      ////////////////
      function get() {
        var req = {
          method: 'GET',
          url: ''
        };
        return $http(req);
      }
    }
  })();