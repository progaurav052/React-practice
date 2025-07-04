import sum from "../sum";

test('Sum Function should return sum of arguments passed to the sum function', () => { 
    const result = sum(3,4)

    expect(result).toBe(7);
})