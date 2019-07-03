(function () {
    'use strict';
  
    angular
      .module('app')
      .factory('CardmanagementService', CardmanagementService);
  
    CardmanagementService.$inject = ['$http'];
    function CardmanagementService($http) {
      var service = {
        get: get,
        post: post,
        put: put,
        erase: erase
      };
  
      return service;
  
      ////////////////
      function get() {
        var req = {
          method: 'GET',
          url: 'app/components/PHP/api/allcards'
        };
        return $http(req);
      }
     function post(data) {
        var req = {
            method: 'POST',
            url: 'app/components/PHP/api/card/' + data.id,
            data: data
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
    function erase(id) {
      var request = {
        method: "DELETE",
        url: 'app/components/PHP/api/card/' + id
      };
      return $http(request);
    }
    }
  })();