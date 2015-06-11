angular.module("MyApp", ["ngResource"])
    .factory('AbstractResource', function ($resource) {
        var baseURL = 'http://www.mocky.io',
            baseParams = {
                callback: 'JSON_CALLBACK'
            },
            baseOptions = {
                query: {
                    method: 'JSONP'
                }
            };

        return function (endpoint, params, options) {
            var url = baseURL + endpoint,
                p = angular.extend(params, baseParams),
                o = angular.extend(options, baseOptions);

            return $resource(url, p, o);
        };
    })
    .factory('UserModel', function (AbstractResource) {

        var defaults = {
            name: "JoJo",
            userId: ""
        };

        var Model = function () {
            this.data = defaults;
            // TODO これでわたせないのか？？
            // var params = {userId: "@userId"};
            this.resource = AbstractResource("/v2/:userId", {}, {});
        };

        Model.prototype.fetch = function () {
            var self = this;

            this.resource.query({userId: self.data.userId}, function (result) {
                self.data.name = result.data.name;
            });
        };

        return new Model();
    })
    .controller("MainController", function (UserModel) {
        this.user = UserModel;

        this.init = function (id) {
            UserModel.data.userId = id;
            UserModel.userId = id;

            // UserModel.fetch();
        }
    })
    .controller("Sub1Controller", function (UserModel) {
        this.user = UserModel;
    })
    .controller("Sub2Controller", function (UserModel) {
        this.user = UserModel;
    });