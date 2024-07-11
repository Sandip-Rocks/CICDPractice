import { getTestName } from "../app/Service"

describe("getTestName Test suite", () => {
    it("Should return TestName",() => {
        const actual = getTestName();
        const expected = 'TestName';

        expect(actual).toBe(expected);
    })
})