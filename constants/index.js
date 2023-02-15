const DURATION = 30;

const TIMER = 3;

const ALPHABET = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const LEVELS = [
  {
    id: 1,
    label: "Lvl 1",
    range: [1, 3],
    roundTrip: false,
    negativeOffset: false,
  },
  {
    id: 2,
    label: "Lvl 2",
    range: [1, 3],
    roundTrip: false,
    negativeOffset: false,
  },
  {
    id: 3,
    label: "Lvl 3",
    range: [1, 3],
    roundTrip: false,
    negativeOffset: false,
  },
  {
    id: 4,
    label: "Lvl 4",
    range: [2, 4],
    roundTrip: false,
    negativeOffset: false,
  },
  {
    id: 5,
    label: "Lvl 5",
    range: [2, 4],
    roundTrip: false,
    negativeOffset: false,
  },
  {
    id: 6,
    label: "Lvl 6",
    range: [2, 4],
    roundTrip: false,
    negativeOffset: false,
  },
  {
    id: 7,
    label: "Lvl 7",
    range: [3, 5],
    roundTrip: true,
    negativeOffset: false,
  },
  {
    id: 8,
    label: "Lvl 8",
    range: [3, 5],
    roundTrip: true,
    negativeOffset: false,
  },
  {
    id: 9,
    label: "Lvl 9",
    range: [3, 5],
    roundTrip: true,
    negativeOffset: false,
  },
  {
    id: 10,
    label: "Lvl 10",
    range: [3, 5],
    roundTrip: true,
    negativeOffset: false,
  },
  {
    id: 11,
    label: "Lvl 11",
    range: [3, 5],
    roundTrip: true,
    negativeOffset: false,
  },
  {
    id: 12,
    label: "Lvl 12",
    range: [4, 6],
    roundTrip: true,
    negativeOffset: false,
  },
  {
    id: 13,
    label: "Lvl 13",
    range: [4, 6],
    roundTrip: true,
    negativeOffset: false,
  },
  {
    id: 14,
    label: "Lvl 14",
    range: [4, 6],
    roundTrip: true,
    negativeOffset: false,
  },
  {
    id: 15,
    label: "Lvl 15",
    range: [4, 6],
    roundTrip: true,
    negativeOffset: false,
  },
  {
    id: 16,
    label: "Lvl 16",
    range: [4, 6],
    roundTrip: true,
    negativeOffset: false,
  },
  {
    id: 17,
    label: "Lvl 17",
    range: [5, 7],
    roundTrip: true,
    negativeOffset: false,
  },
  {
    id: 18,
    label: "Lvl 18",
    range: [5, 7],
    roundTrip: true,
    negativeOffset: false,
  },
  {
    id: 19,
    label: "Lvl 19",
    range: [5, 7],
    roundTrip: true,
    negativeOffset: false,
  },
  {
    id: 20,
    label: "Lvl 20",
    range: [5, 7],
    roundTrip: true,
    negativeOffset: false,
  },
  {
    id: 21,
    label: "Lvl 21",
    range: [5, 7],
    roundTrip: true,
    negativeOffset: false,
  },
  {
    id: 22,
    label: "Lvl 22",
    range: [5, 7],
    roundTrip: true,
    negativeOffset: false,
  },
  {
    id: 23,
    label: "Lvl 23",
    range: [6, 8],
    roundTrip: true,
    negativeOffset: false,
  },
  {
    id: 24,
    label: "Lvl 24",
    range: [6, 8],
    roundTrip: true,
    negativeOffset: false,
  },
  {
    id: 25,
    label: "Lvl 25",
    range: [6, 8],
    roundTrip: true,
    negativeOffset: false,
  },
  {
    id: 26,
    label: "Lvl 26",
    range: [6, 8],
    roundTrip: true,
    negativeOffset: false,
  },
  {
    id: 27,
    label: "Lvl 27",
    range: [6, 8],
    roundTrip: true,
    negativeOffset: false,
  },
  {
    id: 28,
    label: "Lvl 28",
    range: [6, 8],
    roundTrip: true,
    negativeOffset: false,
  },
  {
    id: 29,
    label: "Lvl 29",
    range: [7, 9],
    roundTrip: false,
    negativeOffset: [1, 3],
  },
  {
    id: 30,
    label: "Lvl 30",
    range: [7, 9],
    roundTrip: false,
    negativeOffset: [1, 3],
  },
  {
    id: 31,
    label: "Lvl 31",
    range: [7, 9],
    roundTrip: false,
    negativeOffset: [1, 3],
  },
  {
    id: 32,
    label: "Lvl 32",
    range: [7, 9],
    roundTrip: false,
    negativeOffset: [1, 3],
  },
  {
    id: 33,
    label: "Lvl 33",
    range: [7, 9],
    roundTrip: false,
    negativeOffset: [1, 3],
  },
  {
    id: 34,
    label: "Lvl 34",
    range: [7, 9],
    roundTrip: false,
    negativeOffset: [1, 3],
  },
  {
    id: 35,
    label: "Lvl 35",
    range: [8, 10],
    roundTrip: false,
    negativeOffset: [3, 5],
  },
  {
    id: 36,
    label: "Lvl 36",
    range: [8, 10],
    roundTrip: false,
    negativeOffset: [3, 5],
  },
  {
    id: 37,
    label: "Lvl 37",
    range: [8, 10],
    roundTrip: false,
    negativeOffset: [3, 5],
  },
  {
    id: 38,
    label: "Lvl 38",
    range: [8, 10],
    roundTrip: false,
    negativeOffset: [3, 5],
  },
  {
    id: 39,
    label: "Lvl 39",
    range: [8, 10],
    roundTrip: false,
    negativeOffset: [3, 5],
  },
  {
    id: 40,
    label: "Lvl 40",
    range: [8, 10],
    roundTrip: false,
    negativeOffset: [3, 5],
  },
  {
    id: 41,
    label: "Lvl 41",
    range: [9, 11],
    roundTrip: true,
    negativeOffset: [5, 7],
  },
  {
    id: 42,
    label: "Lvl 42",
    range: [9, 11],
    roundTrip: true,
    negativeOffset: [5, 7],
  },
  {
    id: 43,
    label: "Lvl 43",
    range: [9, 11],
    roundTrip: true,
    negativeOffset: [5, 7],
  },
  {
    id: 44,
    label: "Lvl 44",
    range: [9, 11],
    roundTrip: true,
    negativeOffset: [5, 7],
  },
  {
    id: 45,
    label: "Lvl 45",
    range: [9, 11],
    roundTrip: true,
    negativeOffset: [5, 7],
  },
  {
    id: 46,
    label: "Lvl 46",
    range: [9, 11],
    roundTrip: true,
    negativeOffset: [5, 7],
  },
  {
    id: 47,
    label: "Lvl 47",
    range: [10, 12],
    roundTrip: true,
    negativeOffset: [7, 9],
  },
  {
    id: 48,
    label: "Lvl 47",
    range: [10, 12],
    roundTrip: true,
    negativeOffset: [7, 9],
  },
  {
    id: 49,
    label: "Lvl 47",
    range: [10, 12],
    roundTrip: true,
    negativeOffset: [7, 9],
  },
  {
    id: 50,
    label: "Lvl 50",
    range: [10, 12],
    roundTrip: true,
    negativeOffset: [7, 9],
  },
  {
    id: 51,
    label: "Lvl 51",
    range: [10, 12],
    roundTrip: true,
    negativeOffset: [7, 9],
  },
  {
    id: 52,
    label: "Lvl 52",
    range: [10, 12],
    roundTrip: true,
    negativeOffset: [7, 9],
  },
  {
    id: 53,
    label: "Lvl 53",
    range: [10, 12],
    roundTrip: true,
    negativeOffset: [7, 9],
  },
  {
    id: 54,
    label: "Lvl 54",
    range: [10, 12],
    roundTrip: true,
    negativeOffset: [7, 9],
  },
  {
    id: 55,
    label: "Lvl 55",
    range: [11, 13],
    roundTrip: true,
    negativeOffset: [9, 11],
  },
  {
    id: 56,
    label: "Lvl 56",
    range: [11, 13],
    roundTrip: true,
    negativeOffset: [9, 11],
  },
  {
    id: 57,
    label: "Lvl 57",
    range: [11, 13],
    roundTrip: true,
    negativeOffset: [9, 11],
  },
  {
    id: 58,
    label: "Lvl 58",
    range: [11, 13],
    roundTrip: true,
    negativeOffset: [9, 11],
  },
  {
    id: 59,
    label: "Lvl 59",
    range: [11, 13],
    roundTrip: true,
    negativeOffset: [9, 11],
  },
  {
    id: 60,
    label: "Lvl 60",
    range: [11, 13],
    roundTrip: true,
    negativeOffset: [9, 11],
  },
  {
    id: 61,
    label: "Lvl 61",
    range: [11, 13],
    roundTrip: true,
    negativeOffset: [9, 11],
  },
  {
    id: 62,
    label: "Lvl 62",
    range: [11, 13],
    roundTrip: true,
    negativeOffset: [9, 11],
  },
  {
    id: 63,
    label: "Lvl 63",
    range: [12, 14],
    roundTrip: true,
    negativeOffset: [11, 13],
  },
  {
    id: 64,
    label: "Lvl 64",
    range: [12, 14],
    roundTrip: true,
    negativeOffset: [11, 13],
  },
  {
    id: 65,
    label: "Lvl 65",
    range: [12, 14],
    roundTrip: true,
    negativeOffset: [11, 13],
  },
  {
    id: 66,
    label: "Lvl 66",
    range: [12, 14],
    roundTrip: true,
    negativeOffset: [11, 13],
  },
  {
    id: 67,
    label: "Lvl 67",
    range: [12, 14],
    roundTrip: true,
    negativeOffset: [11, 13],
  },
  {
    id: 68,
    label: "Lvl 68",
    range: [12, 14],
    roundTrip: true,
    negativeOffset: [11, 13],
  },
  {
    id: 69,
    label: "Lvl 69",
    range: [12, 14],
    roundTrip: true,
    negativeOffset: [11, 13],
  },
  {
    id: 70,
    label: "Lvl 70",
    range: [12, 14],
    roundTrip: true,
    negativeOffset: [11, 13],
  },
];

export { LEVELS, DURATION, TIMER, ALPHABET };