var fixtures = require('./fixtures');

describe('OlympicMedal relationships', function () {
    before(fixtures.fakeserver.init);
    after(fixtures.fakeserver.deinit);
    beforeEach(fixtures.testData.createOlympicMedalTestData);
    beforeEach(fixtures.testData.setOlympicMedalIds);

});
