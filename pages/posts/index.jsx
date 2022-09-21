import React from 'react';
import styles from './Post.module.css';
import Feed from '../../src/components/posts/feed/Feed';
import Sidebar from '../../src/components/posts/sidebar/Sidebar';
import Rightbar from '../../src/components/posts/rightbar/Rightbar';
export default function Post() {
  
  return (
    <div className={styles.postContainer}>
    <h1>posts</h1>
    <Sidebar></Sidebar>
    <Feed></Feed>
    <Rightbar></Rightbar>
    </div>
  )
}
