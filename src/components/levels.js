import Level from './Level';

import imgN64 from '../assets/n64.jpeg';
import imgGc from '../assets/gc.jpeg';
import imgWii from '../assets/wii.jpeg';
import imgPs1 from '../assets/ps1.jpeg';
import imgPs2 from '../assets/ps2.jpeg';
import imgPs3 from '../assets/ps3.jpeg';
import imgPs4 from '../assets/ps4.jpeg';
import imgDc from '../assets/dc.jpeg';
import imgXbox from '../assets/xbox.jpeg';
import img360 from '../assets/360.jpeg';

const levels = [
  new Level(
    'Nintendo 64',
    'N64',
    imgN64,
    { name: 'Luigi', found: false, x: 785, y: 749 },
    { name: 'Conker', found: false, x: 433, y: 955 },
    { name: 'Bobomb', found: false, x: 774, y: 1006 }
  ),
  new Level('Nintendo Gamecube', 'GC', imgGc),
  new Level('Nintendo Wii', 'WII', imgWii),
  new Level('PlayStation 1', 'PS1', imgPs1),
  new Level('PlayStation 2', 'PS2', imgPs2),
  new Level('PlayStation 3', 'PS3', imgPs3),
  new Level('PlayStation 4', 'PS4', imgPs4),
  new Level('Sega Dreamcast', 'DC', imgDc),
  new Level('Microsoft Xbox', 'XBOX', imgXbox),
  new Level('Microsoft Xbox 360', '360', img360),
];

export default levels;
