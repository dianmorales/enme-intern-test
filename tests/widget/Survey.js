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
        name: 'Survey Widgets',
        
        'default data': function () {
            var tweetPollList = new TweetPollList({

            });
        },       
    });
});