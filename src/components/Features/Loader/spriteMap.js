export const TILE_SIZE = 32;

export const spriteSets = {
  // 😴 Sleep row (Row 0)
  sleep: [
    [0,0], [1,0], [2,0]
  ],

  // 🐱 Idle / sit (Row 0 right side)
  idle: [
    [4,0], [5,0]
  ],

  // 🏃 Run (Row 1)
  run: [
    [0,1], [1,1], [2,1], [3,1]
  ],

  // 🤸 Jump / stretch (Row 3)
  jump: [
    [0,3], [1,3], [2,3]
  ],

  // 🌀 Flip / rotate (Row 3 mid)
  flip: [
    [3,3], [4,3], [5,3]
  ],

  // 🧶 Roll (Row 2)
  roll: [
    [2,2], [3,2], [4,2]
  ],

  // 🧗 Cling (wall) (Row 2 right)
  cling: [
    [4,2], [5,2]
  ],

  // ✨ Sparkle (last column)
  sparkle: [
    [7,3], [8,3]
  ],
};

export const tileFrames = (tileList) =>
  tileList.map(([x, y]) => ({
    backgroundPosition: `${-x * TILE_SIZE}px ${-y * TILE_SIZE}px`
  }));