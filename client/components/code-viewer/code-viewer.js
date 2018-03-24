import app from '../../modules.js';

app.directive('appCodeViewer', function () {
    return {
        template: `
            <pre>
                <code ng-class="type">
                {{value}}
                </code>
            </pre>
        `,
        scope: {
            type: '@',
            value: '='
        },
        link: function ($scope, element, attrs) {
            // element.find('select').select2();
            element.find('pre code').each(function(i, block) {
                hljs.highlightBlock(block);
            });
        }
    };
});
