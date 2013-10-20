define([
    'intern!object',
    'intern/chai!assert',
    'me/web/widget/hashtags/HashtagChart',
    'me/web/widget/hashtags/HashTagGraph',
    'me/web/widget/hashtags/HashTagGraphStatsButton',
    'me/web/widget/hashtags/HashTagGraphStatsUsageHandler',
    'me/web/widget/hashtags/Cloud'
], function (
    registerSuite,
    assert,
    HashtagChart,
    HashTagGraph,
    HashTagGraphStatsButton,
    HashTagGraphStatsUsageHandler,
    Cloud) {
    registerSuite({
        name: 'Folder Widgets',
        
        'default data': function () {
            var cloud = new Cloud({

            });
        }      
    });
});