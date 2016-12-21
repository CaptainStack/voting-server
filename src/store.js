import {createStore} from 'redux';
import reducer from './reducer';

export default function makeStore() {
  return createSTore(reducer);
}

