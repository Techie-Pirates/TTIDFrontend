import React from "react";
import styles from "./Login.module.scss";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { BsApple, BsGithub } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

const Login = () => {
  return (
    <div className={styles.Main_container}>
      <div className={styles.left_container}></div>
      <div className={styles.right_container}>
        <div className={styles.login_container}>
          <h3>Welcome Back!👏</h3>
          <h2>Login to your account</h2>
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter email" />
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter password" />
          <button>Login</button>
          <Link href="/">
            <a className={styles.link}>Forgot Password</a>
          </Link>
          <div className={styles.hr_container}>
            <hr />
            Or
            <hr />
          </div>
          <div>
            <label>Login using</label>
            <div className={styles.icons_container}>
              <FcGoogle className={styles.icons} size={"3.5rem"} />
              <BsApple className={styles.icons} size={"3.5rem"} />
              <GrLinkedinOption className={styles.icons} size={"3.5rem"} />
              <BsGithub className={styles.icons} size={"3.5rem"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
