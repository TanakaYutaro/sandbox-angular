describe("Serviceのテスト", function () {
    var $injector;
    beforeEach(function () {
        $injector = angular.injector(["ngMock", Main.appName + ".service"]);
    });

    describe("Service.SampleServiceのテスト", function () {
        var $httpBackend;
        var service;

        beforeEach(function () {
            $httpBackend = $injector.get("$httpBackend");

            service = $injector.instantiate(Service.SampleService, {});
        });

        it("testメソッドのテスト", function () {
            $httpBackend.expect("GET", null).respond(200, {});
            var promise = service.test();

            var model;
            promise.success(function (data) {
                return model = data;
            });

            $httpBackend.flush();

            expect(model).toBeDefined();
            // expect(model instanceof Model.Sample).toBeTruthy();
        });
    });
});
