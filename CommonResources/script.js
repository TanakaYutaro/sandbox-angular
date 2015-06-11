angular.module("MyApp", ["ngResource"])
    .factory('AbstractModel', function () {
        var Model = function (defaults, resource) {
            this.data = defaults;
            this.resource = resource;
        };

        Model.prototype.fetch = function () {
            var self = this;

            this.resource.query(function (result) {
                self.data = result.data;
            });
        };

        return Model;
    })
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
    .factory('UserResource', function (AbstractResource) {
        var endpoint = "/v2/5578f13ebdbf289403423c57";
        var params = {};
        var options = {};

        return new AbstractResource(endpoint, params, options);
    })
    .factory('UserModel', function (AbstractModel, UserResource) {

        var defaults = {
            name: "GeoGeo"
        };

        return new AbstractModel(defaults, UserResource);
    })
    .controller("MainController", function ($scope, UserModel) {
        this.user = UserModel;

        this.reload = function () {
            UserModel.fetch();
        }
    })
    .controller("SubController", function ($scope, UserModel) {
        this.user = UserModel;
    });