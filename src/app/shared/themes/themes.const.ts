import {Theme} from '../models/theme.interface';

export const themes = {
  primary: {
    '--text-color': '#212121',
    '--body-background': '#DCEDC8',
    '--body-color': 'black',
    '--icon-color': '#212121',
    '--icon-hover': '#d1d1d1',
    '--primary': '#212121',
    '--primary-color': '#8BC34A',
    '--primary-background': '#DCEDC8',
    '--secondary': '#757575',
    '--secondary-color': '#689F38',
    '--warning-color': 'string',
    '--success-color': 'string',
    '--accent': 'black',
    '--white': '#FFFFFF',
    '--nav-height': '70px',
    '--footer-height': '50px',
    '--footer-background': '#689F38',
    '--nav-color': '#8BC34A',
  } as Theme,
  secondary: {
    '--text-color': '#d1d1d1',
    '--body-background': 'black',
    '--body-color': 'white',
    '--icon-color': 'white',
    '--icon-hover': '#d1d1d1',
    '--primary-background': 'black',
    '--primary': 'blue',
    '--primary-color': 'blue',
    '--secondary': 'red',
    '--secondary-color': 'string',
    '--warning-color': 'string',
    '--success-color': 'string',
    '--accent': '#FF5722',
    '--white': '#FFFFFF',
    '--nav-height': '70px',
    '--nav-color': 'black',
    '--footer-height': '50px',
    '--footer-background': '#689F38',
  } as Theme,
};