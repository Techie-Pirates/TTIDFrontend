import React from 'react'
import Profile from '../../Profile/Profile'
import styles from './DashboardLayout.module.scss';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Devmates from '../../../components/Devmates/Devmates';
import ActiveLink from '../../../components/UI/ActiveLink/ActiveLink';

const DashboardLayout = ({ children }) => {
	const router = useRouter();
	return (
		<div className={styles.Dashboard}>
			<div className={'container ' + styles.profile}>
				<Profile />
			</div>
			<div className={'container ' + styles.bottom_container}>
				<div className={styles.left}>
					<div className={styles.tab_container}>
						<ActiveLink activeClassName={styles.active} href={'/dashboard/events'}>
							<div className={styles.link}>Events</div>
						</ActiveLink>
						<ActiveLink activeClassName={styles.active} href={'/dashboard/posts'}>
							<div className={styles.link}>Posts</div>
						</ActiveLink>
						<ActiveLink activeClassName={styles.active} href={'/dashboard/projects'}>
							<div className={styles.link}>Projects</div>
						</ActiveLink>
						<ActiveLink activeClassName={styles.active} href={'/dashboard/blogs'}>
							<div className={styles.link}>Blogs</div>
						</ActiveLink>
					</div>
					{children}
				</div>
				<div className={styles.right}>
					<Devmates />
				</div>
			</div>
		</div>
	)
}

export default DashboardLayout