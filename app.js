var app = angular.module("HelloApp", []);

app.controller("HelloCtrl", HelloCtrl);

function HelloCtrl($scope) {
    $scope.Greeting = "Hello From AngularJS !!";
}