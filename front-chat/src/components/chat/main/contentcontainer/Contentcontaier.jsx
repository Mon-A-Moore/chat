import React from 'react';

import './contentcontaier.scss';

const Contentcontaier = ({usersid,messages}) => {
  return (
      <div className="main__content-container">
				<div className="main__content">
				{messages.map((item) => (
            <div key={item.id} className="message-wrapper "><div itsMe="true" className="message friend"><p>{item.messagetext}</p></div></div>
          ))}
          
					<div className="message-wrapper  "><div itsMe="false" className="message foe"><p>ffffdd</p></div></div>
					
        </div>
				</div>
  );
};

export default Contentcontaier;
