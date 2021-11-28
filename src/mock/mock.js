(() =>
{
    const app = angular.module('app', ['ngMockE2E']);

    app.run(($httpBackend) => {
        const users = ['john', 'joe', 'jack'];
        $httpBackend.whenGET('http://localhost:3000/users')
            .respond(200, users);
    })
    app.controller('usersCtrl', ($http, $scope) => {
        $http.get('http://localhost:3000/users')
            .then(result => $scope.users = result.data);
    })
})()