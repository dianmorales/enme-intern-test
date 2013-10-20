define([
    'intern!object',
    'intern/chai!assert',
    'me/web/widget/social/LinksPublished',
    'me/web/widget/social/LinksPublishedItem',
    'me/web/widget/social/SocialAccountDetail',
    'me/web/widget/social/SocialAccountPicker',
    'me/web/widget/social/SocialAccountRow',
    'me/web/widget/social/SocialAccounts',
    'me/web/widget/social/SocialButton',
    'me/web/widget/social/SocialPickerAccount',
    'me/web/widget/social/SocialAccountsSupport'
], function (
    registerSuite,
    assert,
    LinksPublished,
    LinksPublishedItem,
    SocialAccountDetail,
    SocialAccountPicker,
    SocialAccountRow,
    SocialAccounts,
    SocialButton,
    SocialPickerAccount,
    SocialAccountsSupport,
    SocialButton) {
    registerSuite({
        name: 'Social Widgets',
        
        'default data': function () {
            var linksPublished = new LinksPublished({

            });            
        }
    });
});