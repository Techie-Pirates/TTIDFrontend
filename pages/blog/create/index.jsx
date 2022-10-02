import React from 'react'
import styles from './blog.module.scss'
import dynamic from 'next/dynamic';
import { useState } from 'react';
const RichTextEditor = dynamic(() => import('../../../src/components/RichTextEditor/RichTextEditor'), {
	ssr: false,
})

const Blog = () => {
	const [blog, setBlog] = useState('');
	return (
		<div className={styles.Create_blog + " container"}>
			<RichTextEditor richText={blog} setRichText={setBlog} />
		</div>
	)
}

export default Blog