import sortArrayKey from '../src';

test('should sort key health', () => {
  const expected = [
    { name: 'лучник', health: 150 },
    { name: 'мечник', health: 40 },
    { name: 'маг', health: 5 },
  ];

  const received = sortArrayKey([
    { name: 'мечник', health: 40 },
    { name: 'маг', health: 5 },
    { name: 'лучник', health: 150 },
  ]);

  expect(received).toEqual(expected);
});
