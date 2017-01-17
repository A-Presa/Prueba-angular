var miapp = angular.module('miApp', []);

miapp.controller('controlador1', ['$scope', function ($scope) {
    $scope.nombre = "Aitor"
}]);

miapp.directive('tuNombre',function(){
    return{
        template:'Tu nombre es {{minombre}}'
    }
})