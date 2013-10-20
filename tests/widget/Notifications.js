define([
    'intern!object',
    'intern/chai!assert',
    'me/web/widget/notifications/Notification',
    'me/web/widget/notifications/NotificationItem',
    'me/web/widget/notifications/NotificationList',
    'me/web/widget/notifications/NotificationListItem'    
], function (
    registerSuite,
    assert,
    Notification,
    NotificationItem,
    NotificationList,
    NotificationListItem) {
    registerSuite({
        name: 'Notification Widgets',
        
        'default data': function () {
            var notificationList = new NotificationList({

            });
        }      
    });
});