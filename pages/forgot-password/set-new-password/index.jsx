import { useState } from 'react'
import { AiOutlineKey, AiOutlineArrowLeft } from 'react-icons/ai'
import styles from './setPassword.module.scss'

function index() {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <AiOutlineKey className={styles.key} />
                <h1>Set New Password</h1>
                <p className={styles.para}>Your new password must be different to previous passwords</p>
                <form>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Enter Confirm Password" />
                    <button>Reset Password</button>
                </form>
                <div className={styles.backToLogIn}>
                    <AiOutlineArrowLeft className={styles.back} />
                    <span>Back to log in</span>
                </div>
            </div>
        </div>
    )
}

export default index