define([
    'intern!object',
    'intern/chai!assert',
	'dojo/parser',
    'me/web/widget/hashtags/HashtagChart',
    'me/web/widget/hashtags/HashTagGraph',
    'me/web/widget/hashtags/HashTagGraphStatsButton',
    'me/web/widget/hashtags/HashTagGraphStatsUsageHandler',
    'me/web/widget/hashtags/Cloud'
], function (
    registerSuite,
    assert,
    parser,
    HashtagChart,
    HashTagGraph,
    HashTagGraphStatsButton,
    HashTagGraphStatsUsageHandler,
    Cloud) {
    registerSuite({
        name: 'Cloud Widget',
        
        'default data': function () {
            var cloud = new Cloud({

            });
	        parser.parse();
        }      
    });
});