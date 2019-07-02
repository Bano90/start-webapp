(function () {
    'use strict';
  
    angular
      .module('app')
      .factory('ServicepageService', ServicepageService);
  
    ServicepageService.$inject = ['$http'];
    function ServicepageService($http) {
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