describe("Sets of numbers", function() {
	
	it("Cardinality of sets", function () {
		var x = new Sets([3, 4, 9, 0]);
		var y = [];
		expect(x.Cardinality()).toBe(4);
		expect(y.Cardinality()).toBe(0);
	});

	it("Union of Sets", function (x, y) {
		var x= new Sets(["day", "jasmin", 5, 9, "@"]);
		expect(x.Union([4, 6, 7])).toEqual(["day", "jasmin", 4, 9, "@", 6, 7]);
		expect(x.Union([8, 9])).toEqual(["day", "jasmin", 5, 9, "@", 8]);
	}); 
	
	it("Intersection of sets", function () {
		var x = new Sets([3, 5, 6, 17, 0]);
		expect(x.Intersect([3, 0, 8, 17])).toEqual([3, 17,0]);
		expect(x.Intersect(["start", "End", 33])).toEqual([]);
	});

	it("Complement/ Difference of sets", function () {
		var x = new Sets([90, 180, 270, 360]);
		expect(x.Complement([350, 90, 100])).toEqual([270, 180, 360]);
		expect(x.Complement([24, 78])).toEqual([90, 180, 270, 360]);
	});

	it("Cartesian of sets", function () {
		var x = new Sets([1, 3]);
		expect(x.Cartesian([1, 5])).toEqual([[1, 1], [1, 5], [3, 1], [3, 5]]);
		expect(x.Cartesian([1])).toEqual([[1,1], [3, 1]]);
	});

	it("Determine whether a set is a subset of another", function () {
		var x = new Sets([2, 3, 4]);
		expect(x.Subset([4, 6, 9, 2, 10, 3])).toBe(true);
		expect(x.Subset(1, 5, 3, 7, 4, 9)).toBe(false);
	});

});