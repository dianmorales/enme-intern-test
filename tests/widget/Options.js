define([
    'intern!object',
    'intern/chai!assert',
    'me/web/widget/options/AbstractOptionSelect',
    'me/web/widget/options/CheckSingleOption',
    'me/web/widget/options/CommentsOptions',
    'me/web/widget/options/ConstrainNumberPicker',
    'me/web/widget/options/DateToClose',
    'me/web/widget/options/EmbebedOptions',
    'me/web/widget/options/LimitVotes',
    'me/web/widget/options/PublishOptions',
    'me/web/widget/options/RepeatedVotes',
    'me/web/widget/options/ResultsOptions',
    'me/web/widget/options/YesNoWidget'
], function (
    registerSuite,
    assert,
    AbstractOptionSelect,
    CheckSingleOption,
    CommentsOptions,
    ConstrainNumberPicker,
    DateToClose,
    EmbebedOptions,
    LimitVotes,
    PublishOptions,
    RepeatedVotes,
    ResultsOptions,
    YesNoWidget) {
    registerSuite({
        name: 'Home Widgets',
        
        'default data': function () {
            var yes = new YesNoWidget({

            });
        }      
    });
});