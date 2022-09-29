import { useState } from 'react'
import styles from './forgotPassword.module.scss'
import { AiOutlineKey } from 'react-icons/ai'

function index() {
    const [email, setEmail] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        console.log('submit')
        console.log(email)
    }

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <AiOutlineKey className={styles.key} />
                <h1>Forgot Password</h1>
                <p>No worries, We will send you reset instructions.</p>
                <form onSubmit={submitForm}>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" />
                    <button>Reset Password</button>
                </form>
            </div>
        </div>
    )
}

export default index