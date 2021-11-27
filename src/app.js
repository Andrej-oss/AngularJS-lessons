const app = angular.module('app', []);


app.run(($templateCache) => {
    $templateCache.push('myTemplate.html', '<div ng-transclude>Cached template</div>\n' +
        '<div ng-repeat="user in users">{{user}}</div>\n' +
        '<div>button from directive</div>\n' +
        '<button>click</button>')
})

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
});
app.directive('myDirective', ($templateCache) => {
    const users = ['joh', 'john', 'joe'];
    return {
        restrict: 'EA',
        transclude: true,
        templateUrl: 'myTemplate.html',
        /*template: '<div ng-transclude></div>' +
            '<div ng-repeat="user in users">{{user}}</div>' +
            '<div>button from directive</div>' +
                        '<button>click</button>',*/
        link: (scope, element, atrs, ctrl, transclude) => {
            console.log('my directive');
            scope.users = users;
         /*   transclude(scope, (clone, scope) => {
                element.bind(clone);
            })*/
        },
    }
});
app.filter('myFilter', () => {
    return (str) => str.toUpperCase();
});
