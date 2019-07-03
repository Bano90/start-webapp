(function () {
    'use strict';
  
    angular
      .module('app')
      .factory('NetworkService', NetworkService);
  
    NetworkService.$inject = ['$http'];
    function NetworkService($http) {
      var service = {
        get: get,
        put: put
      };
  
      return service;
  
      ////////////////
      function get() {
        var req = {
          method: 'GET',
          url: 'app/components/PHP/api/ipmask'
        };
        return $http(req);
      }
      function put(data) {
        var req = {
            method: 'PUT',
            url: 'app/components/PHP/api/card/' + data.id,
            data: data
        };
        return $http(req);
    }
    }
  })();