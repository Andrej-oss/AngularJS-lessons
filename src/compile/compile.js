const app = angular.module('app', []);

app.directive('uiSource', () => {
    return {
        compile: (element) => {
            const pre = angular.element('<pre class=prettyprint></pre>');
            const pretty = prettyPrintOne(element.html());
            pre.apply(pretty);
            element.replaceWith(pre);
        }
    }
})