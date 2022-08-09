import React from 'react'
import Footer from '../../components/Footer/Footer'
import { Navbar } from '../../components/import'
import styles from './Layout.module.scss'

const Layout = (props) => {
	return (
		<>
			<Navbar />
			<div className={styles.Layout}>{props.children}</div>
			<Footer />
		</>
	)
}

export default Layout