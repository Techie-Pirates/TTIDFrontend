import React, { useState } from "react";
import styles from "./Signup.module.scss";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Login = () => {
  const [loginData, setLoginData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [toggleInput, setToggleInput] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const isInputValid = () => {
    const { firstname, lastname, email, password } = loginData;
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

    if (!toggleInput) {
      if (email.length === 0) {
        message.message = "Please enter your email.";
      } else if (!validateEmail(email)) {
        message.message = "Please enter a valid email address.";
      } else if (password.length === 0) {
        message.message = "Please enter your password.";
      } else if (!validatePassword(password)) {
        message.message =
          "Password must contain minimum eight characters,\n at least one uppercase letter,\n one lowercase letter,\n one number\n and one special character:";
      } else {
        message.isValid = true;
        message.message = "Valid input.";
      }
    } else {
      if (firstname.length === 0) {
        message.message = "Please enter your first name.";
      } else if (lastname.length === 0) {
        message.message = "Please enter your last name.";
      } else {
        message.isValid = true;
        message.message = "Valid input.";
      }
    }

    return message;
  };

  const submit = () => {
    const message = isInputValid();
    if (message.isValid && !toggleInput) {
      setToggleInput(true);
      return;
    }
    if (message.isValid && toggleInput) {
      axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/signup`, {
        firstName: loginData.firstname,
        lastName: loginData.lastname,
        email: loginData.email,
        password: loginData.password,
      });
    } else {
      toast.error(message.message, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
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
      <ToastContainer
        position="top-left"
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
        <div className={styles.signup_container}>
          <h3>Welcome ????</h3>
          <h2>Create your Dev account</h2>
          {toggleInput ? (
            <div>
              <label>First Name</label>
              <input
                type="text"
                name="firstname"
                placeholder="First name"
                value={loginData.firstname}
                onChange={handleChange}
              />
              <label>Last Name</label>
              <input
                type="text"
                name="lastname"
                placeholder="Last name"
                value={loginData.lastname}
                onChange={handleChange}
              />
              <button onClick={submit}>Continue</button>
            </div>
          ) : (
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={loginData.email}
                onChange={handleChange}
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={loginData.password}
                onChange={handleChange}
              />
              <button onClick={submit}>Agree & Join</button>
            </div>
          )}

          <div className={styles.login_container}>
            <p>Already have an account?</p>
            <Link href="/login">
              <a className={styles.link}>Login</a>
            </Link>
          </div>
          <div className={styles.hr_container}>
            <hr />
            Or
            <hr />
          </div>
          <div className={styles.other_signup_container}>
            <label>Signup using</label>
            <div className={styles.icons_container}>
              <FcGoogle className={styles.icons} size={"3.5rem"} />
              <BsTwitter className={styles.icons} size={"3.5rem"} />
              <GrLinkedinOption className={styles.icons} size={"3.5rem"} />
              <BsGithub className={styles.icons} size={"3.5rem"} />
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
      <div className={styles.right_container}></div>
    </div>
  );
};

export default Login;
