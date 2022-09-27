import React, { useState } from "react";
import styles from "./Login.module.scss";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineCloseCircle, AiOutlineGoogle } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const { data: session } = useSession();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const isInputValid = () => {
    const { email, password } = loginData;
    const message = { isValid: false, message: "Invalid input" };

    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const validatePassword = (password) => {
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      );
    };

    if (email.length === 0) {
      message.message = "Please enter your email.";
    } else if (password === 0) {
      message.message = "Please enter your password.";
    } else if (!validateEmail(email)) {
      message.message = "Please enter a valid email address.";
    } else if (!validatePassword(password)) {
      message.message = "Please enter a valid password.";
    } else {
      message.isValid = true;
      message.message = "Valid input.";
    }
    return message;
  };

  const submit = () => {
    const message = isInputValid();
    console.log("message");
    console.log(message);
    if (message.isValid) {
      axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`, {
        email: loginData.email,
        password: loginData.password,
      });
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

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user.email}</p>
        <button onClick={() => signOut()}>signOut</button>
      </div>
    );
  } else {
    return (
      <div className={styles.Main_container + " " + "container"}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          closeButton={CloseButton}
        />
        <div className={styles.left_container}>

        </div>
        <div className={styles.right_container}>
          <div className={styles.login_container}>
            <h3>Welcome Back!👏</h3>
            <h2>Login to your account</h2>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter devname"
              onChange={handleChange}
            />
            <div className={styles.password_text_container}>
              <div>Password</div>
              <Link href="/">
                <a className={styles.link}>Forgot Password</a>
              </Link>
            </div>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
            />
            <button onClick={submit}>Login</button>
            <div className={styles.signup_container}>
              <p>New to Dev.Env?</p>
              <Link href="/signup">
<<<<<<< HEAD
                <a className={styles.link}>Create an account.</a>
=======
                <a className={styles.link}>Create an account</a>
>>>>>>> 02034a8d6db40eaaef9c6473b8549b1ad704ac57
              </Link>
            </div>
            <div className={styles.hr_container}>
              <hr />
              Or
              <hr />
            </div>
            <div className={styles.other_login_container}>
              <label>Login using</label>
              <div className={styles.icons_container}>
                <AiOutlineGoogle
                  className={styles.icons}
                  size={"3.5rem"}
                  onClick={() => signIn("google")}
                />
                <BsTwitter
                  className={styles.icons}
                  size={"3.5rem"}
                  onClick={() => signIn("twitter")}
                />
                <GrLinkedinOption
                  className={styles.icons}
                  size={"3.5rem"}
                  onClick={() => signIn("linkedin")}
                />
                <BsGithub
                  className={styles.icons}
                  size={"3.5rem"}
                  onClick={() => signIn("github")}
                />
              </div>
            </div>
            <div className={styles.company_info_container}>
              <Link href="/">
                <a>Terms</a>
              </Link>
              <Link href="/">
                <a>Privacy</a>
              </Link>
              <Link href="/">
                <a>Security</a>
              </Link>
              <Link href="/">
                <a>Contact Dev.Env</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
