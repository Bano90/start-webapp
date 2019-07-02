(function () {
    'use strict';
  
    angular
      .module('app')
      .factory('NetworkService', NetworkService);
  
    NetworkService.$inject = ['$http'];
    function NetworkService($http) {
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