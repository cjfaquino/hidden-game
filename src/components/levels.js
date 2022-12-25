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
    { name: 'Luigi', found: false, x: 72.6, y: 46.5 },
    { name: 'Conker', found: false, x: 39.5, y: 59.5 },
    { name: 'Bobomb', found: false, x: 71.6, y: 62.5 }
  ),
  new Level(
    'Nintendo Gamecube',
    'GC',
    imgGc,
    { name: 'Shiek', found: false, x: 44.3, y: 66 },
    { name: 'Olimar', found: false, x: 63.2, y: 62 },
    { name: 'Toad', found: false, x: 34.4, y: 40 }
  ),
  new Level(
    'Nintendo Wii',
    'WII',
    imgWii,
    { name: 'Samus', found: false, x: 71.6, y: 46.2 },
    { name: 'Conker', found: false, x: 24.1, y: 55.1 },
    { name: 'Midna', found: false, x: 39, y: 33.5 }
  ),
  new Level(
    'PlayStation 1',
    'PS1',
    imgPs1,
    { name: 'Cloud', found: false, x: 16.5, y: 47.9 },
    { name: 'Ape', found: false, x: 67.4, y: 57.7 },
    { name: 'PaRappa', found: false, x: 38, y: 75 }
  ),
  new Level(
    'PlayStation 2',
    'PS2',
    imgPs2,
    { name: 'Laharl', found: false, x: 69.2, y: 61.8 },
    { name: 'Dante', found: false, x: 29.7, y: 65.3 },
    { name: 'Jimmy', found: false, x: 63, y: 42.2 }
  ),
  new Level(
    'PlayStation 3',
    'PS3',
    imgPs3,
    { name: 'Joel', found: false, x: 79.4, y: 62.2 },
    { name: 'Drake', found: false, x: 57.9, y: 57.7 },
    { name: 'Fat Princess', found: false, x: 23.8, y: 36.2 }
  ),
  new Level(
    'PlayStation 4',
    'PS4',
    imgPs4,
    { name: 'Wolf', found: false, x: 67.5, y: 43.9 },
    { name: 'Snake', found: false, x: 47.9, y: 36 },
    { name: '2B', found: false, x: 28, y: 69 }
  ),
  new Level(
    'Sega Dreamcast',
    'DC',
    imgDc,
    { name: 'Nightmare', found: false, x: 69.6, y: 38.5 },
    { name: 'Ulala', found: false, x: 51, y: 81.8 },
    { name: 'Sonic', found: false, x: 28, y: 34.5 }
  ),
  new Level(
    'Microsoft Xbox',
    'XBOX',
    imgXbox,
    { name: 'CJ', found: false, x: 50.2, y: 55.3 },
    { name: 'Ryu', found: false, x: 85.4, y: 41.2 },
    { name: 'Raz', found: false, x: 37, y: 35 }
  ),
  new Level(
    'Microsoft Xbox 360',
    '360',
    img360,
    { name: 'Shepard', found: false, x: 16.2, y: 45.5 },
    { name: 'Isaac', found: false, x: 59.5, y: 57.1 },
    { name: 'Zoey', found: false, x: 50.3, y: 74.4 }
  ),
];

export default levels;
