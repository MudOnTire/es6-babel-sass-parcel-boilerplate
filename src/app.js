import Header from './components/header';
import User from './components/user';

import './scss/app.scss';

const app = async ()=>{
  document.getElementById('header').innerHTML = Header();
  document.getElementById('user').innerHTML = await User();
}

app();