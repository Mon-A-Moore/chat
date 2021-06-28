import React from 'react';

import socket from './socket';
import reducer from './reducer';
import Joinchat from '../joinchat';
import Sidebar from '../chat/sidebar';
import Main from '../chat/main';
import './app.scss';

const App = () => {
 const arr ={"user":[{"userid":1,"username":"GIGA","roomid":123,"joined":false,"users":[],"messages":[]}],
"list":[{"id":1,"name":"bochki","icons":"../../assets/img/test.jpg","userscount":null},
{"id":2,"name":"king","icons":"../../assets/img/test.jpg","userscount":null},
{"id":3,"name":"kek","icons":"../../assets/img/test.jpg","userscount":null},
{"id":4,"name":"bochki2","icons":"../../assets/img/test.jpg","userscount":null},
{"id":5,"name":"bochki3","icons":"../../assets/img/test.jpg","userscount":null},
{"id":6,"name":"bochki4","icons":"../../assets/img/test.jpg","userscount":null}]};
  return (
    <>
      <div className="container">
        <Sidebar  list={arr.list}/>
        <Main />
      </div>
    </>
  );
};

export default App;
