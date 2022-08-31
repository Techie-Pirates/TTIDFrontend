import React from 'react'
import LimitChar from '../../components/UI/LimitChar/LimitChar'
import styles from "./Profile.module.scss"

const Profile = () => {
	return (
		<div className={styles.Profile_container}>
			<div className={styles.profile}>
				<div className={styles.title}>Profile</div>
				<div className={styles.user_info}>
					<div className={styles.avatar}>
						<img src="/assets/images/avatar.jpg" alt="" />
					</div>
					<div className={styles.info}>
						<div className={styles.name}><LimitChar word="Noman Khan" fitContent={true} limit={20} /></div>
						<div className={styles.subTitle}><LimitChar word={"Full Stack Developer"} fitContent={true} limit={25} /></div>
					</div>
				</div>
			</div>
			<div className={styles.stats}>
				<div className={styles.title}>Statistics</div>
			</div>
			<div className={styles.skills}>
				<div className={styles.title}>Skills</div>
			</div>
		</div>
	)
}

export default Profile