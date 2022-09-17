import React from 'react'
import Feed from './Feed/Feed';
import styles from './HomePage.module.scss';
import Rightbar from './Rightbar/Rightbar';
import Sidebar from './Sidebar/Sidebar';

const HomePage = () => {
	return (
		<div className={styles.Home_page + " container"}>
			<Sidebar />
			<Feed />
			<Rightbar />
		</div>
	)
}

export default HomePage