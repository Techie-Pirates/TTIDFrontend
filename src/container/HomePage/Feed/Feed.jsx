import React, { useState, useEffect, useRef } from 'react'
import styles from './Feed.module.scss'
import { AiOutlineArrowUp } from 'react-icons/ai';
import PostCard from './PostCard/PostCard';

const Feed = () => {
	const [activeLink, setActiveLink] = useState("posts");
	const [scrollBtnActive, setScrollBtnActive] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", toggleScrollBtn);
		return () => window.removeEventListener("scroll", toggleScrollBtn);
	}, [])

	const toggleScrollBtn = () => {
		if (window.scrollY > 500) {
			setScrollBtnActive(true);
		} else {
			setScrollBtnActive(false);
		}
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<div className={styles.Feed}>
			<div className={styles.top_nav}>
				<div className={styles.nav_link + ` ${activeLink === "posts" ? styles.active : ""}`} onClick={() => setActiveLink("posts")}>Posts</div>
				<div className={styles.nav_link + ` ${activeLink === "blogs" ? styles.active : ""}`} onClick={() => setActiveLink("blogs")}>Blogs</div>
				<div className={styles.nav_link + ` ${activeLink === "hackathons" ? styles.active : ""}`} onClick={() => setActiveLink("hackathons")}>Hackathons</div>
			</div>
			<div className={styles.posts}>
				<div onClick={scrollToTop} className={styles.scroll_to_top + ` ${scrollBtnActive ? styles.active : ""}`}>
					<AiOutlineArrowUp />
				</div>
				{
					activeLink === "posts" ? <div className={styles.posts}>
						<PostCard />
						<PostCard />
						<PostCard />
						<PostCard />
						<PostCard />
					</div> :
						activeLink === "blogs" ? <div className={styles.blogs}>
							blogs
						</div> :
							activeLink === "hackathons" ? <div className={styles.hackathons}>
								hackathons
							</div> : ""
				}
			</div>
		</div>
	)
}

export default Feed