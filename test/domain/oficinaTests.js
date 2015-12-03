var fixtures = require('./fixtures');

describe('Oficina relationships', function () {
    before(fixtures.fakeserver.init);
    after(fixtures.fakeserver.deinit);
    beforeEach(fixtures.testData.createOficinaTestData);
    beforeEach(fixtures.testData.setOficinaIds);

});
