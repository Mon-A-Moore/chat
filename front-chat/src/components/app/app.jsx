import React from 'react';

import "./app.scss";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className="sidebar__header header">
            <button className="burger">
              <div></div>
            </button>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="sidebar__list">
						<ul>
							<li><div>ffff</div></li>
							<li><div>ffff</div></li>
							<li><div>ffff</div></li>
							<li><div>ffff</div></li>
						</ul>
					</div>
          <div className="sidebar_add-list"></div>
        </div>

        <div className="main">
					<div className="main__header header"></div>
				</div>
      </div>
    </>
  );
};

export default App;
