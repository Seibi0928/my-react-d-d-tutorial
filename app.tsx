import * as React from 'react';
import ReactDOM = require('react-dom');
import Board from './components/Board';
import { observe } from './components/Game';

const root = document.getElementById('root');

console.log(111);
observe(knightPosition =>
    ReactDOM.render(<Board knightPosition={knightPosition} />, root));