var app = angular.module('ShoppingListApp', []);

app.controller('ListController', function($scope) {
    $scope.list = ['cheese', 'meat', 'lomo', 'dry sausage']

    $scope.addItem = function(z) {
        $scope.list.push(z);
        $scope.newItem = "";
    }
});