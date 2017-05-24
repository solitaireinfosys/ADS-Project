angular.module('app')
.directive('mypopover2', function ($compile, $templateCache) {

    var getTemplate = function (contentType) {
        var template = '';
        switch (contentType) {
            case 'type':
                template = $templateCache.get("templateId2.html");
                break;
        }
        return template;
    }
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            var popOverContent;
            
            popOverContent = getTemplate("type");

            var options = {
                content: popOverContent,
                placement: "right",
                html: true,
                date: scope.date,
            };
            $(element).popover(options);
        }
    };
});