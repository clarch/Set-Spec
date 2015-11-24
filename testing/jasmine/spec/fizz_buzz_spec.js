describe ("fizzBuzz tests", function () {

	it("fizz_buzz(3n)", function () {
		expect(fizz_buzz(3)).toBe("fizz");
		expect(fizz_buzz(36)).toBe("fizz");
		expect(fizz_buzz(63333)).toBe("fizz");
 	});
 	it("fizz_buzz(5n)", function () {
		expect(fizz_buzz(-5)).toBe("buzz");
		expect(fizz_buzz(40)).toBe("buzz");
 	});
	it("fizz_buzz(15n)", function () {
		expect(fizz_buzz(15)).toBe("fizzbuzz");
		expect(fizz_buzz(45)).toBe("fizzbuzz");
 	});
 	it("None multiple of 3 or 5", function () {
 		expect(fizz_buzz(2)).toBe(2);
 		expect(fizz_buzz(-733)).toBe(-733);
 	});
 	it("NaN", function () {
 		expect(fizz_buzz("be")).toBe("false");
 	})
});