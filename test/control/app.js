describe('mediaCenterContent', function () {

    var location, route, rootScope;
    beforeEach(module('mediaCenterContent'));
    beforeEach(inject(
        function( _$location_, _$route_, _$rootScope_ ) {
            location = _$location_;
            route = _$route_;
            rootScope = _$rootScope_;
        }));

    describe('Home route', function() {
        beforeEach(inject(
            function($httpBackend) {
                $httpBackend.expectGET('')
                    .respond(200);
            }));

        /*it('should load the login page on successful load of /', function() {
            location.path('/');
            rootScope.$digest();
            expect(route.current.current.controller).toBe('ContentHomeCtrl')
        });*/
    });

});