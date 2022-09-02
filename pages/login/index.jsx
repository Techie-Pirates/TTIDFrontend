import React, { useState } from "react";
import styles from "./Login.module.scss";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { BsApple, BsGithub } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [loginData, setLoginData] = useState({ devname: "", password: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const isInputValid = () => {
    const { devname, password } = loginData;
    let message = { isValid: false, message: "Invalid input" };

    if (devname.length < 6) {
      message.message = "Invalid username";
    } else if (password.length < 8) {
      message.message = "Invalid password";
    } else {
      message = { isValid: true, message: "Valid input." };
    }
    return message;
  };

  const submit = () => {
    const message = isInputValid();
    if (message.isValid) {
      // axios.post("backend")
    } else {
      toast.error(message.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: styles.error_container,
      });
    }
  };

  const CloseButton = ({ closeToast }) => (
    <i className={"material-icons " + styles.close_icon} onClick={closeToast}>
      <AiOutlineCloseCircle size={"2rem"} />
    </i>
  );

  return (
    <div className={styles.Main_container + " " + "container"}>
      <div className={styles.left_container}></div>
      <div className={styles.right_container}>
        <div className={styles.login_container}>
          <h3>Welcome Back!👏</h3>
          <h2>Login to your account</h2>
          <label>Devname</label>
          <input
            type="text"
            name="devname"
            placeholder="Enter devname"
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
          <button onClick={submit}>Login</button>
          <div className={styles.links_container}>
            <Link href="/">
              <a className={styles.link}>Forgot Password</a>
            </Link>
            <Link href="/signup">
              <a className={styles.link}>Sign Up</a>
            </Link>
          </div>
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
