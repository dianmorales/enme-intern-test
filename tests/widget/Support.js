define([
    'intern!object',
    'intern/chai!assert',
    'me/web/widget/support/AbstractFilterSupport',
    'me/web/widget/support/ActionDialogHandler',
    'me/web/widget/support/CommentsModeration',
    'me/web/widget/support/DnD',
    'me/web/widget/support/DnDSupport',
    'me/web/widget/support/ItemsFilterSupport',
    'me/web/widget/support/OrderMenu',
    'me/web/widget/support/PanelWipe',
    'me/web/widget/support/SearchMenu',
    'me/web/widget/support/SocialFilterMenu',
    'me/web/widget/support/SocialFilterMenuItem',
    'me/web/widget/support/SocialLinkResume',
    'me/web/widget/support/ToggleMenu',
    'me/web/widget/support/VotesFilterMenu',
    'me/web/widget/support/Wipe'    
], function (
    registerSuite,
    assert,
    AbstractFilterSupport,
    ActionDialogHandler,
    CommentsModeration,
    DnD,
    DnDSupport,
    ItemsFilterSupport,
    OrderMenu,
    PanelWipe,
    SearchMenu,
    SocialFilterMenu,
    SocialFilterMenuItem,
    SocialLinkResume,
    ToggleMenu,
    Wipe) {
    registerSuite({
        name: 'Stream Widgets',
        
        'default data': function () {
            var commentsModeration = new CommentsModeration({

            });            
        }
    });
});