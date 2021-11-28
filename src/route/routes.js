const app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider){
    $routeProvider
        .when('/', {
            template: '<div>This is my route</div>'
        })
})