import React from 'react';

import socket from './socket';
/* import reducer from './reducer';
import Joinchat from '../joinchat'; */
import Sidebar from '../chat/sidebar';
import Main from '../chat/main';
import './app.scss';

const App = () => {
  const array = {
    user: [
      {
        userid: 1,
        username: 'GIGA',
        roomid: 123,
        joined: false,
        users: [],
        messages: [],
      },
    ],
    list: [
      {
        id: 1,
        name: 'bochki',
        icons: '../../assets/img/test.jpg',
        userscount: 2,
        usersid: [12,34],
        messages: [{"listid":1,"id":33,"messagetext":"mazafucker"},
				{"listid":1,"id":"34","messagetext":"big-bon"}],
				listactive:false,
      },
      {
        id: 2,
        name: 'lol',
        icons: '../../assets/img/test.jpg',
        userscount: 3,
        usersid: [3,5,6],
        messages: [{"listid":2,"id":33,"messagetext":"zikkurat"}],
				listactive:false,
      },
    ],
  };

	const [arr, setarray] = React.useState(array);

	const inaddarr = (obj) => {
	const newmass=arr.list.filter((list)=>list.id===obj.listid);
	newmass[0]["messages"].push(obj);
	};

  const [selectbutton, setselectbutton] = React.useState([{},false]);

/* console.log(selectbutton); */
  return (
    <>
      <div className="container">
        <Sidebar list={arr.list} selected={setselectbutton} />
        {arr.list.map((item) => (
					selectbutton[0]===item.id&&<Main list={item} selected={selectbutton} inaddarr={inaddarr} />
          ))}
					 
      </div>
    </>
  );
};

export default App;
