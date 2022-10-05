import { useState } from 'react'
import styles from './index.module.scss'
import { BiSearch } from 'react-icons/bi'
import UserInfoCard from '../../src/components/UI/Cards/UserInfoCard/UserInfoCard'


function index() {
    const optionsPeople = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
    ]
    const posts = [
        {
            id: 1,
            name: "Noman Khan",
            title: "Full Stack Developer",
            country: "India",
            image: "/assets/images/avatar.jpg",
            rating: "5",
            devMates: "100",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            tags: ["Python", "Python", "Python", "Python", "Python"]
        },
        {
            id: 2,
            name: "Noman Khan",
            title: "Full Stack Developer",
            country: "India",
            image: "/assets/images/avatar.jpg",
            rating: "5",
            devMates: "100",
            description: "lorem ipsum dolor sit amet",
            tags: ["Python", "Python", "Python", "Python", "Python"]
        }
    ]

    const [inputVal, setInputVal] = useState('')
    const handleSubmit = () => {
        console.log('submit')
    }


    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <form action="" className={styles.search_container} onSubmit={handleSubmit}>
                    <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
                    <BiSearch onClick={() => console.log(inputVal)} />
                </form>
                <div className={styles.options}>
                    <div className={styles.option}>
                        <select name="People" id="" placeholder='hello'>
                            {optionsPeople.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.option}>
                        <select name="People" id="" placeholder='hello'>
                            {optionsPeople.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.option}>
                        <select name="People" id="" placeholder='hello'>
                            {optionsPeople.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={styles.postAndFilter}>
                    <div className={styles.posts}>
                        {posts.map((post) => (
                            <UserInfoCard post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index