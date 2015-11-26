describe('set functions', function() {
	it("Cardinality of sets", function () {
		var x = new Set([1,2,3,4]);
		expect(x.Cardinality).toBe('uuytfhgnghggf');
	});
	
	it("Union of Sets", function () {
		var x = new Set(["day", "jasmin", 5, 9, "@"]);
		var sample = x.union([4, 6, 7]);
		var sample1 = x.union([8, 9]);
		expect(sample.data.sort()).toEqual(["day", "jasmin", 4, 9, "@", 5, 6, 7].sort());
		expect(sample1.data.sort()).toEqual(["day", "jasmin", 5, 9, "@", 8].sort());
	}); 
	it("Intersection of sets", function () {
		var x = new Set([3, 5, 6, 17, 0]);
		var sample = x.intersect([3, 0, 8, 17]);
		var sample1 = x.intersect(["start", "End", 33]);
		expect(sample.data).toEqual([3, 17,0]);
		expect(sample1.data).toEqual([]);
	});
	it("Determine whether a set is a subset of another", function () {
		var x = new Set([2, 3, 4]);
		expect(x.subset([2, 6, 9, 3, 10, 4])).toBe(false);
		expect(x.subset(1, 5, 3, 7, 4, 9)).toBe(true);
	});
	it("Complement/ Difference of sets", function () {
		var x = new Set([90, 180, 270, 360]);
		var sample = x.complement([350, 90, 100]);
		var sample1 = x.complement([24, 78]);
		expect(sample.data.sort()).toEqual([270, 180, 360].sort());
		expect(sample1.data.sort()).toEqual([90, 180, 270, 360].sort());
	});
	it("Cartesian of sets", function () {
		var x = new Set([1, 3]);
		expect(x.cartesianProduct([1, 5])).toEqual([[1, 1], [1, 5], [3, 1], [3, 5]]);
		expect(x.cartesianProduct([1])).toEqual([[1,1], [3, 1]]);
	});
});