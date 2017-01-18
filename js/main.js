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
            console.log(res) 
            $scope.datos = res.data 
        });
});

miapp.directive('tuNombre', function () {
    return {
        template: 'Tu nombre es {{minombre}}'
    }
})