define([
    'intern!object',
    'intern/chai!assert',
    'me/web/widget/stream/FrontEnd',
    'me/web/widget/stream/FrontEndItem',
    'me/web/widget/stream/HashTagInfo'
], function (
    registerSuite,
    assert,
    FrontEnd,
    FrontEndItem,
    HashTagInfo) {
    registerSuite({
        name: 'Stream Widgets',
        
        'default data': function () {
            var hashTagInfo = new HashTagInfo({

            });            
        }
    });
});