define([
    'intern!object',
    'intern/chai!assert',
    'me/web/widget/chart/AbstractChartVoteSupport',
    'me/web/widget/chart/ChartLayerSupport',
    'me/web/widget/chart/EncuestamePieChart',
    'me/web/widget/chart/RaphaelSupport'
], function (
    registerSuite,
    assert,
    AbstractChartVoteSupport,
    ChartLayerSupport,
    EncuestamePieChart,
    RaphaelSupport) {
    registerSuite({
        name: 'Folder Widgets',
        
        'default data': function () {
            var encuestamePieChart = new EncuestamePieChart({

            });
        }      
    });
});