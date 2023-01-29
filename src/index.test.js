const getPercents = require("./index.js")

describe("test for getPercent function", ()=>{
    it("should operate correctly with int numbers", ()=>{
        expect(getPercents(10, 100)).toBe(10)
    });
    it("should operate correctly with float numbers", ()=>{
        expect(getPercents(30.3, 100)).toBe(30.3)
    });
    it("should round decimals correctly to 2 decimals", ()=>{
        expect(getPercents(30,94.43134)).toBe(28.33)
    });
    it("should operate correctly with numbers passes as strings", ()=>{
        expect(getPercents('10', '100')).toBe(10)
    });
    it("should operate correctly with strings", ()=>{
        expect(getPercents('foo', 'foo')).toBe("Error")
    });
})