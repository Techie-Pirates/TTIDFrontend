import React from 'react'
import styles from './UserInfoCard.module.scss'

function UserInfoCard({ post }) {
    console.log(post)
    return (
        <div className={styles.post}>
            <div className={styles.userInfo}>
                <div className={styles.userImage}>
                    <img src={post.image} alt="" className={styles.image} />
                </div>
                <div className={styles.userInfoText}>
                    <h3 className={styles.name}>{post.name}</h3>
                    <p className={styles.title}>{post.title}</p>
                    <p className={styles.country}>{post.country}</p>
                </div>
            </div>
            <div className={styles.userRating}>
                <p className={styles.rating}><span className={styles.ratingText}>Rating: </span> {post.rating}</p>
                <p className={styles.devMates}>{post.devMates} Devmates</p>
            </div>
            <div className={styles.userDescription}>
                <p>{post.description}</p>
            </div>
            <div className={styles.userTags}>
                {post.tags.map((tag) => (
                    <p className={styles.tag}>{tag}</p>
                ))}
            </div>
        </div>
    )
}

export default UserInfoCard