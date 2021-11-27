(() => {
    const app = angular.module('app', []);

    app.directive('templateDirective', ($templateCache) => {
        return {
            transclude: 'element',
            link: (scope, element, attrs, ctrl, transclude) => {
                const template = $templateCache.get(attrs.templateDirective);
                const templateElement = angular.element(template);
                scope.hello = 'Fuck off';
                transclude(scope, (clone) => {
                    element.after(templateElement.append(clone));
                });
            },
        }
    })
})();
