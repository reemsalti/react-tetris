export const TETROMINOS = {
    0: { shape: [[0]], color: '0, 0, 0' },
    I: {
      shape: [[0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0]],
      color: '161, 209, 169',
    },
    J: { shape: [[0, 'J', 0], [0, 'J', 0], ['J', 'J', 0]], color: '167, 161, 255' }, //
    L: {
      shape: [[0, 'L', 0], [0, 'L', 0], [0, 'L', 'L']],
      color: '255, 199, 254', //
    },
    O: { shape: [['O', 'O'], ['O', 'O']], color: '164, 107, 255' },
    S: { shape: [[0, 'S', 'S'], ['S', 'S', 0], [0, 0, 0]], color: '255, 128, 210' }, //
    T: {
      shape: [[0, 0, 0], ['T', 'T', 'T'], [0, 'T', 0]],
      color: '150, 194, 212', //
    },
    Z: { shape: [['Z', 'Z', 0], [0, 'Z', 'Z'], [0, 0, 0]], color: '250, 137, 166' }, //
  };
  
  export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetromino =
      tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino];
  };









// export const TETROMINOS = {
//     0: { shape: [[0]], color: '0, 0, 0' },
//     I: {
//         shape: [
//                  [0, 'I', 0, 0],
//                  [0, 'I', 0, 0],
//                  [0, 'I', 0, 0],
//                  [0, 'I', 0, 0]
//                 ],
//         color: '80, 227, 230',        
//     },
//     J: {
//         shape: [
//                  [0, 'J', 0],
//                  [0, 'J', 0],
//                  ['J', 'J', 0]
//                 ],
//         color: '80, 95, 223',        
//     },
//     L: {
//         shape: [
//                  [0, 'L', 0],
//                  [0, 'L', 0],
//                  [0, 'L', 'L']
//                 ],
//         color: '223, 173, 36',
//     },
//     O: {
//         shape: [
//                  ['O', 'O'],
//                  ['O', 'O']
//                 ],
//         color: '223, 217, 36',
//     },
//     S: {
//         shape: [
//                  [0, 'S', 'S'],
//                  ['S', 'S', 0],
//                  [0, 0, 0]
//                 ],
//         color: '48, 211, 56',      
//     },
//     T: {
//         shape: [
//                  [0, 0, 0],
//                  ['T', 'T', 'T'],
//                  [0, 'T', 0]
//                 ],
//         color: '132, 61, 198',
//     },
//     Z: {
//         shape: [
//                  ['Z', 'Z', 0],
//                  [0, 'Z', 'Z'],
//                  [0, 0, 0],
//                 ],
//         color: '227, 78, 78',        
//     },
// }

// export const randomTeromino = () => {
//     const tetrominos = 'IJLOSTZ';
//     const randTetromino =
//         tetrominos[Math.floor(Math.random() * tetrominos.length)];
//     return TETROMINOS[randTetromino];
// };