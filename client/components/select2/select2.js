import app from '../../modules.js';

app.directive('appSelect', function () {
    return {
        template: `
        <select class="js-states form-control" name="item" style="width: 100%; height: 300px">
            <option ng-repeat="item in items" value="item">{{item}}</option>
          </select>
        `,
        scope: {
            items: '='
        },
        link: function ($scope, element, attrs) {
            element.find('select').select2();
        }
    };
});
