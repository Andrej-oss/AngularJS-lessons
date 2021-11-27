const app = angular.module('app', []);

app.controller('myController', ($http, $scope) => {
    $http.get('https://jsonplaceholder.typicode.com/users')
        .then(result => {
            $scope.users = result.data;
        });
})