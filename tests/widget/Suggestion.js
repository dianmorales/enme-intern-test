define([
    'intern!object',
    'intern/chai!assert',
    'me/web/widget/suggestion/Suggest',
    'me/web/widget/suggestion/SuggestItem'
], function (
    registerSuite,
    assert,
    Suggest,
    SuggestItem) {
    registerSuite({
        name: 'Suggestion Widgets',
        
        'default data': function () {
            var suggest = new Suggest({

            });            
        }
    });
});