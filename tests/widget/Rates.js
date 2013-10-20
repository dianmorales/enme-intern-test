define([
    'intern!object',
    'intern/chai!assert',
    'me/web/widget/rated/Comment',
    'me/web/widget/rated/Comments',
    'me/web/widget/rated/HashTags',
    'me/web/widget/rated/LikeRate',
    'me/web/widget/rated/RatedOperations',
    'me/web/widget/rated/RatedProfile',
    'me/web/widget/stats/GenericStats',
    'me/web/widget/stats/RatePosition',
    'me/web/widget/stats/TopProfiles',
    'me/web/widget/rated/UsersProfile'
], function (
    registerSuite,
    assert,
    Comment,
    Comments,
    HashTags,
    LikeRate,
    RatedOperations,
    RatedProfile,
    GenericStats,
    RatePosition,
    TopProfiles,    
    UsersProfile) {
    registerSuite({
        name: 'Rate Widgets',
        
        'default data': function () {
            var comments = new Comments({

            });            
        }
    });
});