angular.module("MyApp", [])
    .controller("MyController", function () {
        this.patterns = {
            mail: {
                regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'メールアドレス形式が不正です。'
            }
        };
    });