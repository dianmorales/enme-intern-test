define([
    'intern!object',
    'intern/chai!assert',
    'me/web/widget/admon/user/UserEdit',
    'me/web/widget/admon/user/UserGroup',
    'me/web/widget/admon/user/UserPermissions',
    'me/web/widget/admon/user/Users',
    'me/web/widget/admon/user/UserTableRow'
], function (
    registerSuite,
    assert,
    UserEdit,
    UserGroup,
    UserPermissions,
    Users,
    UserTableRow) {
    registerSuite({
        name: 'Folder Widgets',
        
        'default data': function () {
            var users = new Users({
                i18n : {
                    admon_members_title : 'title',
                    admon_members_subtitle : 'subtitle',
                    admon_create_user : 'create user',
                    admon_username: 'admon_username',
                    admon_group : 'admon_group',
                    admon_user_from : 'admon_user_from',
                    admon_status : 'admon_status',
                    admon_tweetpoll_count : 'admon_tweetpoll_count',
                    admon_poll_count : 'admon_poll_count',
                    admon_survey_count : 'admon_survey_count',
                    admon_last_logged : 'admon_last_logged',
                    followers : 'followers',
                    table_first : 'table_first',
                    table_previous : 'table_previous',
                    table_next : 'table_next',
                    table_last : 'table_last',
                    admon_users_new_title : 'admon_users_new_title',
                    admon_users_new_option1_title : 'admon_users_new_option1_title',
                    admon_users_new_user_subtitle : 'admon_users_new_user_subtitle',
                    placeholder_username : 'placeholder_username',
                    placeholder_email : 'placeholder_email',
                    admon_users_new_button : 'admon_users_new_button',
                    admon_users_new_invite_title : 'admon_users_new_invite_title',
                    admon_users_invite_subtitle : 'admon_users_invite_subtitle',
                    admon_users_invite_button : 'admon_users_invite_button',
                    button_close : 'button_close'
                }
            });
        }      
    });
});