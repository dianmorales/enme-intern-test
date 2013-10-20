define([
    'intern!object',
    'intern/chai!assert',
    'me/web/widget/home/votes/ItemVote',
    'me/web/widget/pictures/AccountPicture',
    'me/web/widget/pictures/Avatar',
    'me/web/widget/pictures/Icon',
    'me/web/widget/profile/Profile',
    'me/web/widget/profile/ProfileMenu',
    'me/web/widget/profile/UploadProfilePicture',
    'me/web/widget/hashtags/Cloud'
], function (
    registerSuite,
    assert,
    ItemVote,
    AccountPicture,
    Avatar,
    Icon,    
    Profile,
    ProfileMenu,
    UploadProfilePicture,
    Cloud) {
    registerSuite({
        name: 'Home Widgets',
        
        'default data': function () {
            var cloud = new Cloud({

            });
        }      
    });
});