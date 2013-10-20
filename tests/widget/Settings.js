define([
    'intern!object',
    'intern/chai!assert',
    'me/web/widget/tweetpoll/TweetPollList',
    'me/web/widget/tweetpoll/TweetPoll',
    'me/web/widget/tweetpoll/TweetPollCore',
    'me/web/widget/tweetpoll/TweetPollListDetail',
    'me/web/widget/tweetpoll/TweetPollListItem',
    'me/web/widget/tweetpoll/TweetPollPreview',
    'me/web/widget/tweetpoll/AnswerItem',
    'me/web/widget/tweetpoll/Answers',
    'me/web/widget/tweetpoll/detail/TweetPollAnswer',
    'me/web/widget/tweetpoll/detail/TweetPollChartDetail',
    'me/web/widget/tweetpoll/detail/TweetPollInfoDetail',
    'me/web/widget/tweetpoll/HashTags',
    'me/web/widget/tweetpoll/HashTagsItem',
    'me/web/widget/tweetpoll/TweetPollPublishInfo',
    'me/web/widget/tweetpoll/TweetPollPublishItemAbstractStatus',
    'me/web/widget/tweetpoll/TweetPollPublishItemFAILUREStatus',
    'me/web/widget/tweetpoll/TweetPollPublishItemStatus',
    'me/web/widget/tweetpoll/TweetPollPublishItemSUCCESStatus'    
], function (
    registerSuite, 
    assert, 
    TweetPollList,
    TweetPoll,
    TweetPollCore,
    TweetPollListDetail,
    TweetPollListItem,
    TweetPollPreview,
    AnswerItem,
    Answers,
    TweetPollAnswer,
    TweetPollChartDetail,
    TweetPollInfoDetail,
    HashTags,
    HashTagsItem,
    TweetPollPublishInfo,
    TweetPollPublishItemAbstractStatus,
    TweetPollPublishItemFAILUREStatus,
    TweetPollPublishItemStatus,
    TweetPollPublishItemSUCCESStatus) {
    registerSuite({
        name: 'TweetPoll Widgets',
        
        'default data': function () {
            var tweetPollList = new TweetPollList({

            });
            //  _ENME.init({
            //     contextPath: 'encuestame/',
            //     domain : 'http://localhost',
            //     suggest_limit : 10,
            //     delay : 1800000,
            //     isMobile: false,
            //     locale: 'en_US',
            //     debug : true,
            //     message_delay : 5000,
            //     tp_a : 2,
            //     tp_hr : 2,
            //     tp_minsoa : 2
            // });
            // assert.strictEqual(_ENME.config('contextPath'), 'encuestame/', 'Id should default to encuestame/');
            // assert.strictEqual(_ENME.config('domain'), 'http://localhost', 'Id should default to http://localhost');
            // assert.strictEqual(_ENME.config('isMobile'), false, 'Id should default to false');
            // assert.strictEqual(_ENME.config('debug'), true, 'Id should default to true');
        },

        // 'get incomplete (prepopulated model)': function () {
        //  var prepopulatedModel = new SimpleTodoModel({
        //      todos: [{}, {}]
        //  });
        //  assert.strictEqual(prepopulatedModel.get('incomplete'), 2, 'Prepopulated model todos should determine incomplete model propery.');
        //  prepopulatedModel.set('complete', 2);
        //  assert.strictEqual(prepopulatedModel.get('incomplete'), 0, 'Incomplete count should drop to 0 when complete count is manually updated.');
        // },

        // 'get incomplete (empty model)': function () {
        //  var emptyModel = new SimpleTodoModel();
        //  emptyModel.todos.push({});
        //  emptyModel.todos.push({});
        //  assert.strictEqual(emptyModel.get('incomplete'), 2, 'Prepopulated model todos should determine incomplete model propery.');
        //  emptyModel.set('complete', 2);
        //  assert.strictEqual(emptyModel.get('incomplete'), 0, 'Incomplete count should change when complete count is manually updated.');
        // },

        // 'get complete (prepopulated model)': function () {
        //  var prepopulatedModel = new SimpleTodoModel({
        //      todos: [{}, {}]
        //  });
        //  assert.strictEqual(prepopulatedModel.get('complete'), 0, 'Prepopulated model todos should determine complete model propery.');
        //  prepopulatedModel.set('incomplete', 0);
        //  assert.strictEqual(prepopulatedModel.get('complete'), 2, 'Complete count should change when incomplete count is manually updated.');
        // },

        // 'get complete (empty model)': function () {
        //  var emptyModel = new SimpleTodoModel();
        //  emptyModel.todos.push({});
        //  emptyModel.todos.push({});
        //  assert.strictEqual(emptyModel.get('complete'), 0, 'Prepopulated model todos should determine complete model propery.');
        //  emptyModel.set('incomplete', 0);
        //  assert.strictEqual(emptyModel.get('complete'), 2, 'Complete count should change when incomplete count is manually updated.');
        // }
    });
});