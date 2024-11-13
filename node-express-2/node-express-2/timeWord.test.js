// const timeWord = require('./timeWord');

// describe('#timeword', () => {
//   test('it is a function', () => {
//     expect(typeof timeWord).toBe('function');
//   });
// });
const timeWord = require('./timeWord');

describe('#timeWord', () => {
  // Basic test to check if timeWord is a function
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  // Test cases for specific times
  test('handles midnight correctly', () => {
    expect(timeWord("00:00")).toBe("12 o'clock am");
  });

  test('handles noon correctly', () => {
    expect(timeWord("12:00")).toBe("12 o'clock pm");
  });

  test('handles morning times correctly', () => {
    expect(timeWord("09:00")).toBe("9 o'clock am");
    expect(timeWord("09:05")).toBe("9 oh 5 am");
  });

  test('handles afternoon times correctly', () => {
    expect(timeWord("15:15")).toBe("3 15 pm");
    expect(timeWord("13:30")).toBe("1 30 pm");
  });

  test('handles evening times correctly', () => {
    expect(timeWord("23:59")).toBe("11 59 pm");
    expect(timeWord("22:00")).toBe("10 o'clock pm");
  });

  // Edge cases for single-digit minutes
  test('handles single-digit minutes with "oh"', () => {
    expect(timeWord("01:05")).toBe("1 oh 5 am");
    expect(timeWord("13:07")).toBe("1 oh 7 pm");
  });

  // Edge case for exactly on the hour
  test('handles times exactly on the hour', () => {
    expect(timeWord("02:00")).toBe("2 o'clock am");
    expect(timeWord("14:00")).toBe("2 o'clock pm");
  });
});
