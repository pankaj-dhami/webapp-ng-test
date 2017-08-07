(function () {

    var myApp = angular.module("myApp");

    var indexController = function ($scope) {
        $scope.message = "angular js";

    }

    myApp.controller('indexController', indexController);

})();
