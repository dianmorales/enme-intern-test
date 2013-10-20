define([
    'intern!object',
    'intern/chai!assert',
    'me/web/widget/publish/PublishEmailSupport',
    'me/web/widget/publish/PublishEmbebedSupport',
    'me/web/widget/publish/PublishPanelItem',
    'me/web/widget/publish/PublishSocialStatus',
    'me/web/widget/publish/PublishSocialSupport',
    'me/web/widget/publish/PublishSupport'
], function (
    registerSuite,
    assert,
    PublishEmailSupport,
    PublishEmbebedSupport,
    PublishPanelItem,
    PublishSocialStatus,    
    PublishSocialSupport,
    PublishSupport) {
    registerSuite({
        name: 'Publish Widgets',
        
        'default data': function () {
            var publishSupport = new PublishSupport({

            });
        }      
    });
});