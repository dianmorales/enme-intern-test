define([
    'intern!object',
    'intern/chai!assert',
    'me/web/widget/menu/DashBoardMenu',
    'me/web/widget/menu/DropDownMenuItem',
    'me/web/widget/menu/DropDownMenuSelect',
    'me/web/widget/menu/OptionMenu',
    'me/web/widget/menu/SearchMenu',
    'me/web/widget/menu/SearchSuggestItemsByType',
    'me/web/widget/menu/SearchSuggestItemSection',
    'me/web/widget/menu/SettingsButton',
    'me/web/widget/menu/SettingsMenuSwitch',
    'me/web/widget/menu/TimeRangeDropDownMenu'
], function (
    registerSuite,
    assert,
    DashBoardMenu,
    DropDownMenuItem,
    DropDownMenuSelect,
    OptionMenu,
    SearchMenu,
    SearchSuggestItemsByType,
    SearchSuggestItemSection,
    SettingsButton,
    SettingsMenuSwitch,
    TimeRangeDropDownMenu) {
    registerSuite({
        name: 'Menu Widgets',
        
        'default data': function () {
            var searchMenu = new SearchMenu({

            });
        }      
    });
});