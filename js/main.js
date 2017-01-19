var miapp = angular.module('miApp', []);

miapp.controller('controlador1', function ($scope, $http) {
    $scope.nombre = "Aitor"

    $http.get('productos.json')
        .then(function (res) {
            $scope.listaProductos = res.data;
        });
var url = 'http://mysafeinfo.com/api/data?list=englishmonarchs&format=json';
    $http.get(url)
        .then(function (res) {    
            $scope.datos = res.data;
        });

        $scope.campoFiltro = 'hse';
        $scope.inverso = false;
});

miapp.directive('tuNombre', function () {
    return {
        template: 'Tu nombre es {{minombre}}'
    }
});