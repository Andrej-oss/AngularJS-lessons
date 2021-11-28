const headerApp = angular.module('headerApp',
    ['ngMaterial',
        'ngRoute',
        'myApp.view1',
        'myApp.view2',
        'snackApp']);

headerApp.directive('headerDirective', () => {
    return {
        template: ' <md-content>\n' +
            '\n' +
            '    <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
            '      <md-button href="#!/view1">Pizza</md-button>\n' +
            '      <md-button href="#!/view2">Drinks</md-button>\n' +
            '      <md-button href="#!/snack">Snackes</md-button>\n' +
            '    </section>\n' +
            '    <md-divider></md-divider>\n'
    }
})
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/view1'});
    }])