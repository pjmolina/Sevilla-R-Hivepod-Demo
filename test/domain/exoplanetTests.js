var fixtures = require('./fixtures');

describe('Exoplanet relationships', function () {
    before(fixtures.fakeserver.init);
    after(fixtures.fakeserver.deinit);
    beforeEach(fixtures.testData.createExoplanetTestData);
    beforeEach(fixtures.testData.setExoplanetIds);

});
