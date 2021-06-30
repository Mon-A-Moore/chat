import React from 'react';

import io from 'socket.io-client';



import Sidebar from '../chat/sidebar';
import Main from '../chat/main';
import './app.scss';

const App = () => {

	const socket = io('http://localhost:4000');
	
	socket.on('news', function (data) {
    /* console.log(data); */
    socket.emit('my other event', { my: 'data' });
  });



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
