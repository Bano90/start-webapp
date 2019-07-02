(function () {
  'use strict';

  angular
    .module('app')
    .controller('CardmanagementController', CardmanagementController);

  CardmanagementController.$inject = ['$state', '$rootScope', '$filter', 'CardmanagementService', '$mdDialog', '$scope'];
  function CardmanagementController($state, $rootScope, $filter, CardmanagementService, $mdDialog, $scope) {
    var vm = this;
    vm.cardlist = [];
    vm.load = load;
    vm.saveData = saveData;

    activate();

    ////////////////

    function load() {
      CardmanagementService.get().then(function (response) {
        vm.cardlist = response.data;
        console.log(vm.cardlist);
      });
    }

    //dialógus ablak kezdete

    function DialogController($scope, $mdDialog) {
      $scope.id = new Date().getTime();
      $scope.name = "";
      $scope.code = "";
      $scope.status = "";

      $scope.hide = function () {
        $mdDialog.hide();
      };

      $scope.cancel = function () {
        $mdDialog.cancel();
      };

      $scope.answer = function (diaid, dianame, diacode, diastatus) {
        var data = {
          id: diaid,
          name: dianame,
          code: diacode,
          status: diastatus,

        }
        CardmanagementService.post(data).then(function (resp) {
          data = {};
        });
        $mdDialog.hide(diaid, dianame, diacode, diastatus);
      };
    }

    //dialógus ablak vége
    function saveData() {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: './app/components/cardmanagement/dialog.tmpl.html',
        parent: angular.element(document.body),
        clickOutsideToClose: true
      })
        .then(function (answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function () {
          $scope.status = 'You cancelled the dialog.';
        });
    }

    function activate() {
      //load();
      //save();
    }
  }
})();