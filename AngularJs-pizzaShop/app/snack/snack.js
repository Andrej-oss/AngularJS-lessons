const snackApp = angular.module('snackApp', []);

snackApp
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/snack', {
        templateUrl: 'snack/snack.html',
        controller: 'snackCtrl'
    });
}])

    .controller('snackCtrl', function() {

    });