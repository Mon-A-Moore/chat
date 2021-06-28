import React from 'react';
import test from '../../../../assets/img/test.jpg';
import './groupname.scss';

const GroupName = () => {
  return (
		<div className="main-header">
		<button className="main-header__button">
			<div className="main-header__button-item">
				<img src={test} alt="иконка" />
				<div>
					<h1>
						<p>Vangers</p>
					</h1>
					<h2>
						<p>334 гика</p>
					</h2>
				</div>
			</div>
		</button>
	</div>
  );
};

export default GroupName;