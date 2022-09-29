import { useState } from 'react'
import styles from './checkEmail.module.scss'
import { AiOutlineMail, AiOutlineArrowLeft } from 'react-icons/ai'

function index() {
    const [email, setEmail] = useState('123@456.com')

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <AiOutlineMail className={styles.key} />
                <h1>Forgot Password</h1>
                <p>We sent a password reset link to <br /> {email}</p>
                <button>Open email app</button>
                <p>Didn't recieve a mail? <span className={styles.clickResend}>Click to resend</span></p>
                <div className={styles.backToLogIn}>
                    <AiOutlineArrowLeft className={styles.back} />
                    <span>Back to log in</span>
                </div>
            </div>
        </div >
    )
}

export default index