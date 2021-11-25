const app = angular.module('app', []);

app.controller('myCtrl1', function ($scope, myFactory) {
    $scope.hello = 'Hello';
    $scope.myFactory = myFactory;
});
app.controller('myCtrl2', ($scope, myFactory) => {
    $scope.world = ' World';
    $scope.myFactory = myFactory;
    $scope.getBookMark = () => {
        return 'My Bookmark';
    };
    $scope.setWorld = (world) => {
        return $scope.world = $scope.world + world;
    }
});
app.controller('myCtrl', ($scope) => {
    $scope.showSmth = () => {
        $scope.smth = 'show smthg from parent controller';
    };
});
app.factory('myFactory', () => {
    return {
        helloWorld: 'Hello World'
    };
})