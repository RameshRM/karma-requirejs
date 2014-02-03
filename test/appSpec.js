define(['app'], function(App) {

    describe('just checking', function() {

        it('works for app', function() {
            var app = new App();
            var result = app.render();
            var expected = 'require.js up and running';
            expect(expected).toEqual(result);
        });


    });

});
