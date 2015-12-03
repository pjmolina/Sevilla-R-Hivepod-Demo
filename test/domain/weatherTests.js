var fixtures = require('./fixtures');

describe('Weather relationships', function () {
    before(fixtures.fakeserver.init);
    after(fixtures.fakeserver.deinit);
    beforeEach(fixtures.testData.createWeatherTestData);
    beforeEach(fixtures.testData.setWeatherIds);

});
