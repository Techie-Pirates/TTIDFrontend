import React from 'react'
import Footer from '../../components/Footer/Footer'
import { Navbar } from '../../components/import'
import styles from './Layout.module.scss'

const Layout = (props) => {
	return (
		<div className={styles.Main_container}>
			<Navbar />
			<div className={styles.Layout}>{props.children}</div>
			<Footer />
		</div>
	)
}

export default Layout