define([
    'intern!object',
    'intern/chai!assert',
    'me/web/widget/dashboard/AbstractGadget',
    'me/web/widget/dashboard/DashboardGridContainer',
    'me/web/widget/dashboard/DashboardWrapper',
    'me/web/widget/dashboard/Gadget',
    'me/web/widget/dashboard/GadgetDirectory',
    'me/web/widget/dashboard/LayoutSelecter',
    'me/web/widget/dashboard/chart/DashboardColumn2D',
    'me/web/widget/dashboard/chart/DashboardLine',
    'me/web/widget/dashboard/chart/DashboardPie',
    'me/web/widget/gadget/Activity',
    'me/web/widget/gadget/Comments',
    'me/web/widget/gadget/Gadget',
    'me/web/widget/gadget/TweetPollVotes'
], function (
    registerSuite,
    assert,
    AbstractGadget,
    DashboardGridContainer,
    DashboardWrapper,
    Gadget,
    GadgetDirectory,
    LayoutSelecter,
    DashboardColumn2D,
    DashboardLine,
    DashboardPie) {
    registerSuite({
        name: 'Dashboard Widgets',
        
        'default data': function () {
            var dashboardWrapper = new DashboardWrapper({

            });
        }
    });
});