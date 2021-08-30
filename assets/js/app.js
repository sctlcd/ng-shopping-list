var app = angular.module('ShoppingListApp', []);

app.controller('ListController', function($scope) {
    $scope.list = ['cheese', 'meat', 'lomo', 'dry sausage']

});