const SHAPES = [
  // square
  {
    shape: [
        {x:0, y:0},
        {x:0, y:1},
        {x:1, y:0},
        {x:1, y:1}
    ],
    width: 2,
    height: 2,
    rotate: false,
    color: "yellow"
  },
  // I piece
  {
    shape: [
        {x:0, y:0},
        {x:0, y:1},
        {x:0, y:2},
        {x:0, y:3}
    ],
    width: 2,
    height: 2,
    rotate: false,
    color: "yellow"
  },
  // Z piece
  {
    shape: [
        {x:0, y:0},
        {x:0, y:1},
        {x:1, y:0},
        {x:1, y:1}
    ],
    width: 1,
    height: 4,
    rotate: true,
    color: "red"
  },
  // S piece
  {
    shape: [
        {x:0, y:0},
        {x:0, y:1},
        {x:1, y:0},
        {x:1, y:1}
    ],
    width: 2,
    height: 2,
    rotate: false,
    color: "yellow"
  },
  // T piece
  // L piece
  // J piece
]

export default function randomShape() {
    return SHAPES[Math.floor(Math.random() * SHAPES.length)];
}