import Level from './Level';

import imgSnes from '../assets/snes.jpeg';
import imgN64 from '../assets/n64.jpeg';
import imgGc from '../assets/gc.jpeg';
import imgWii from '../assets/wii.jpeg';
import imgPs1 from '../assets/ps1.jpeg';
import imgPs2 from '../assets/ps2.jpeg';
import imgPs3 from '../assets/ps3.jpeg';
import imgPs4 from '../assets/ps4.jpeg';
import imgXbox from '../assets/xbox.jpeg';
import img360 from '../assets/360.jpeg';

import thumbSnes from '../assets/snes-thumb.jpg';
import thumbN64 from '../assets/n64-thumb.jpg';
import thumbGc from '../assets/gc-thumb.jpg';
import thumbWii from '../assets/wii-thumb.jpg';
import thumbPs1 from '../assets/ps1-thumb.jpg';
import thumbPs2 from '../assets/ps2-thumb.jpg';
import thumbPs3 from '../assets/ps3-thumb.jpg';
import thumbPs4 from '../assets/ps4-thumb.jpg';
import thumbXbox from '../assets/xbox-thumb.jpg';
import thumb360 from '../assets/360-thumb.jpg';

import loadingSnes from '../assets/snes-loading.jpg';
import loadingN64 from '../assets/n64-loading.jpg';
import loadingGc from '../assets/gc-loading.jpg';
import loadingWii from '../assets/wii-loading.jpg';
import loadingPs1 from '../assets/ps1-loading.jpg';
import loadingPs2 from '../assets/ps2-loading.jpg';
import loadingPs3 from '../assets/ps3-loading.jpg';
import loadingPs4 from '../assets/ps4-loading.jpg';
import loadingXbox from '../assets/xbox-loading.jpg';
import loading360 from '../assets/360-loading.jpg';

import thumbLoadingSnes from '../assets/snes-thumb-loading.jpg';
import thumbLoadingN64 from '../assets/n64-thumb-loading.jpg';
import thumbLoadingGc from '../assets/gc-thumb-loading.jpg';
import thumbLoadingWii from '../assets/wii-thumb-loading.jpg';
import thumbLoadingPs1 from '../assets/ps1-thumb-loading.jpg';
import thumbLoadingPs2 from '../assets/ps2-thumb-loading.jpg';
import thumbLoadingPs3 from '../assets/ps3-thumb-loading.jpg';
import thumbLoadingPs4 from '../assets/ps4-thumb-loading.jpg';
import thumbLoadingXbox from '../assets/xbox-thumb-loading.jpg';
import thumbLoading360 from '../assets/360-thumb-loading.jpg';

const levels = [
  new Level(
    'Super Nintendo',
    'SNES',
    [
      { name: 'Link', found: false, x: 76.1, y: 43.6 },
      { name: 'Samus', found: false, x: 56.3, y: 74.7 },
      { name: 'Zero', found: false, x: 34.6, y: 63.5 },
    ],
    imgSnes,
    loadingSnes,
    thumbSnes,
    thumbLoadingSnes
  ),
  new Level(
    'Nintendo 64',
    'N64',
    [
      { name: 'Luigi', found: false, x: 72.6, y: 46.5 },
      { name: 'Conker', found: false, x: 39.5, y: 59.5 },
      { name: 'Bobomb', found: false, x: 71.6, y: 62.5 },
    ],
    imgN64,
    loadingN64,
    thumbN64,
    thumbLoadingN64
  ),
  new Level(
    'Nintendo Gamecube',
    'GC',
    [
      { name: 'Shiek', found: false, x: 44.3, y: 66 },
      { name: 'Olimar', found: false, x: 63.2, y: 62 },
      { name: 'Toad', found: false, x: 34.4, y: 40 },
    ],
    imgGc,
    loadingGc,
    thumbGc,
    thumbLoadingGc
  ),
  new Level(
    'Nintendo Wii',
    'WII',
    [
      { name: 'Samus', found: false, x: 71.6, y: 46.2 },
      { name: 'Little Mac', found: false, x: 24.1, y: 55.1 },
      { name: 'Midna', found: false, x: 39, y: 33.5 },
    ],
    imgWii,
    loadingWii,
    thumbWii,
    thumbLoadingWii
  ),
  new Level(
    'Microsoft Xbox',
    'XBOX',
    [
      { name: 'CJ', found: false, x: 50.2, y: 55.3 },
      { name: 'Ryu', found: false, x: 85.4, y: 41.2 },
      { name: 'Raz', found: false, x: 37, y: 35 },
    ],
    imgXbox,
    loadingXbox,
    thumbXbox,
    thumbLoadingXbox
  ),
  new Level(
    'Microsoft Xbox 360',
    '360',
    [
      { name: 'Shepard', found: false, x: 16.2, y: 45.5 },
      { name: 'Isaac', found: false, x: 59.5, y: 57.1 },
      { name: 'Zoey', found: false, x: 50.3, y: 74.4 },
    ],
    img360,
    loading360,
    thumb360,
    thumbLoading360
  ),
  new Level(
    'PlayStation 1',
    'PS1',
    [
      { name: 'Cloud', found: false, x: 16.5, y: 47.9 },
      { name: 'Ape', found: false, x: 67.4, y: 57.7 },
      { name: 'PaRappa', found: false, x: 38, y: 75 },
    ],
    imgPs1,
    loadingPs1,
    thumbPs1,
    thumbLoadingPs1
  ),
  new Level(
    'PlayStation 2',
    'PS2',
    [
      { name: 'Laharl', found: false, x: 69.2, y: 61.8 },
      { name: 'Dante', found: false, x: 29.7, y: 65.3 },
      { name: 'Jimmy', found: false, x: 63, y: 42.2 },
    ],
    imgPs2,
    loadingPs2,
    thumbPs2,
    thumbLoadingPs2
  ),
  new Level(
    'PlayStation 3',
    'PS3',
    [
      { name: 'Joel', found: false, x: 79.4, y: 62.2 },
      { name: 'Drake', found: false, x: 57.9, y: 57.7 },
      { name: 'Fat Princess', found: false, x: 23.8, y: 36.2 },
    ],
    imgPs3,
    loadingPs3,
    thumbPs3,
    thumbLoadingPs3
  ),
  new Level(
    'PlayStation 4',
    'PS4',
    [
      { name: 'Wolf', found: false, x: 67.5, y: 43.9 },
      { name: 'Snake', found: false, x: 47.9, y: 36 },
      { name: '2B', found: false, x: 28, y: 69 },
    ],
    imgPs4,
    loadingPs4,
    thumbPs4,
    thumbLoadingPs4
  ),
];

export default levels;
