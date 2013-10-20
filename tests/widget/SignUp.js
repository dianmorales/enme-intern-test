define([
    'intern!object',
    'intern/chai!assert',
    'me/web/widget/signup/LoginDialog',
    'me/web/widget/Signup/Signup',
    'me/web/widget/validator/AbstractValidatorWidget',
    'me/web/widget/validator/EmailValidator',
    'me/web/widget/validator/PasswordValidator',
    'me/web/widget/validator/RealNameValidator',
    'me/web/widget/validator/UsernameValidator'
], function (
    registerSuite,
    assert,
    LoginDialog,
    Signup,
    AbstractValidatorWidget,
    EmailValidator,
    PasswordValidator,
    RealNameValidator,
    UsernameValidator) {
    registerSuite({
        name: 'Sign Up Widgets',
        
        'default data': function () {
            var emailValidator = new EmailValidator({

            });            
        }
    });
});