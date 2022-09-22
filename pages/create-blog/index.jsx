import React, { useState } from 'react'
import styles from './createBlog.module.scss';
import dynamic from "next/dynamic";
let CustomEditor = dynamic(() => import('./CustomEditor.js'), {
	ssr: false
});

const CreateBlog = () => {
	const [imageArray, setImageArray] = useState([]) // to keep track of uploaded image
	let [editorInstance, setEditorInstance] = useState({}) // to get the instance of editor.Js

	// remove image from imageArray
	function removeImage(img) {
		const array = imageArray.filter(image => image !== img)
		setImageArray(array)
	}

	const handleInstance = (instance) => {
		setEditorInstance(instance)
	}

	const saveArticle = async (e) => {
		e.preventDefault()

		// get the editor.js content and save it to server
		const savedData = await editorInstance.save();

		const data = {
			description: JSON.stringify(savedData),
		}

		// Clear all the unused images from server
		await clearEditorLeftoverImages()

		// Save article to server
		createArticle(data, files)
	}

	// This method will get the current images that are used by editor js,
	// and images that stored in imageArray. It will compare and call server request to 
	// remove unused imges
	const clearEditorLeftoverImages = async () => {
		// Get editorJs images
		const currentImages = []
		document.querySelectorAll('.image-tool__image-picture')
			.forEach((x) => currentImages.push(x.src.includes("/images/") && x.src))

		if (imageArray.length > currentImages.length) {
			// image deleted
			for (const img of imageArray) {
				if (!currentImages.includes(img)) {
					try {
						// delete image from backend
						await API.deleteImage({ imagePath: img })
						// remove from array
						removeImage(img)
					} catch (err) {
						console.log(err.message)
					}
				}
			}
		}
	}

	return (
		<div className={styles.Create_Blog}>
			<button onClick={saveArticle}>Save</button>
			{CustomEditor && <CustomEditor handleInstance={handleInstance} imageArray={imageArray} />}
		</div>
	)
}

export default CreateBlog