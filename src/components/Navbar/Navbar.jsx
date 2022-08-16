import React from 'react'
import { ThemeButton } from '../import'
import styles from './Navbar.module.scss'
import { BiChevronDown, BiSearch } from 'react-icons/bi'

const Navbar = () => {
	return (
		<div className={styles.Navbar_container + " " + 'container'}>
			<div className={styles.logo}>Logo</div>
			<div className={styles.links_container}>
				<div className={styles.link}>Find Teammates</div>
				<div className={styles.link_dropdown}><div>Participate</div><BiChevronDown /></div>
				<div className={styles.link_dropdown}><div>Learn</div><BiChevronDown /></div>
			</div>
			<div className={styles.search_container}>
				<input type="text" placeholder='Search...' />
				<BiSearch />
			</div>
			<div className={styles.utils_container}>
				<div className={styles.login_signup}>
					<div className={styles.login}>Login</div>
					<div className={styles.auth_btn}>Signup</div>
				</div>
				<div className={styles.logged_in}></div>
			</div>
		</div>

	)
}

export default Navbar