var miapp = angular.module('miApp', [/*'Firebase'*/]);

miapp.controller('controlador1', function ($scope, $http/*, $firebaseArray*/) {
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

 /*       // firebase
        var ref = new Firebase("https://pruebas-angular.firebaseio.com/");

        $scope.listaNombres = $firebaseArray(ref);

        $scope.agregarNombre = function(){
            $scope.listaProductos.$add({
                nombre:$scope.fireNombre
            })
            $scope.fireNombre = '';
        }*/
});

miapp.directive('tuNombre', function () {
    return {
        template: 'Tu nombre es {{minombre}}'
    }
});