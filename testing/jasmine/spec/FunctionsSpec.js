describe("Test Sum", function () {
    it("Sum of positive numbers", function () {
        expect(sum(10, 20)).toBe(30);
        expect(sum(15, 35)).toBe(50);
    });

    it("Sum of only 1 number", function () {
        expect(sum(15)).toBe(15);
    });

    it("Sum of negative numbers", function () {
        expect(sum(-20, -5)).toBe(-25);
        expect(sum(-10, 5)).toBe(-5);
    });

    it("Sum more than 2 numbers", function () {
        expect(sum(10, 4, 5, 6)).toBe(25);
    });

    it("Sum of a string and number", function () {
        // throw an exception
        expect(sum("a", 40)).toBe(false);
        expect(sum(40, "a")).toBe(false);
    });

    it("Sum of numbers in an Array", function () {
        expect(sum([2, 7, 9])).toBe(18);
        expect(sum([2, 3, 4])).toBe(9);
        expect(sum([-3, 4, 5])).toBe(6);
        expect(sum([3, "a", 10])).toBe(false);
        expect(sum([3, 4, 5], [6, 2])).toBe(20);
    });

    it("Edge cases", function () {
        expect(sum(Infinity, 5)).toBe(Infinity);
        expect(sum(undefined, 5)).toBe(false);
        expect(sum(undefined, undefined)).toBe(false);
        expect(sum()).toBe(false);
    });

    it("Sum of a number and an array", function () {
        expect(sum([20, 10, 5], 1)).toBe(36);
        expect(sum(5, [2, 5])).toBe(12);
    });
});
