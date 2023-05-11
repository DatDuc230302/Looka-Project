import { combineReducers } from 'redux';
import { pick0 } from './pick0';
import { pick1 } from './pick1';

export const allReducers = combineReducers({ pick1, pick0 });
