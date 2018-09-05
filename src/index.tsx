import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';

import * as React from 'react';
import { render } from 'react-dom';

import { Root } from './containers/Root/Root';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

render(
  <Root />,
  document.getElementById('root')
);