import React from "react";
import styles from "./Sidebar.module.scss";
import { AiOutlineArrowUp } from "react-icons/ai";
import { GoHome,GoBookmark } from "react-icons/go";
import { MdOutlineExplore, MdNotificationsNone, MdOutlinePostAdd } from "react-icons/md";
import { BiMessageSquareDetail} from "react-icons/bi";
import { TbReportAnalytics} from "react-icons/tb";
import Image from "next/image"

const Sidebar = () => {
	return (
    <div className={styles.Sidebar + " sticky-top"}>
      <div className={styles.SidebarWrapper}>
        <ul className={styles.SidebarTabs}>
          <li className={styles.listTab}>
            <GoHome /> <div className={styles.listTabText}>Home</div>
          </li>
          <li className={styles.listTab}>
            <MdOutlineExplore /> <div className={styles.listTabText}>Explore</div>
          </li>
          <li className={styles.listTab}>
            <MdNotificationsNone /> <div className={styles.listTabText}>Notifications</div>
          </li>
          <li className={styles.listTab}>
            <BiMessageSquareDetail /> <div className={styles.listTabText}>Messages</div>
          </li>
          <li className={styles.listTab}>
            <GoBookmark /> <div className={styles.listTabText}>Bookmarks</div>
          </li>

          {/* <li className={styles.listTab}>
            <TbReportAnalytics/> <div className={styles.listTabText}>Analytics</div>
          </li>  */}
          
		<li className={styles.listTab+" " + styles.createPost}>
            <MdOutlinePostAdd/> <div className={styles.listTabText}>Create Post</div>
          </li> 
          
        </ul>

        <div>
		<div className={styles.image}>
						<Image src={"/assets/images/avatar.jpg"} width="100%" height="100%" layout='fill' objectFit='cover' alt="" />
					</div>
		</div>
      </div>
    </div>
  );
};

export default Sidebar;
