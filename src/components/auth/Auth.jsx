"use client";
import { useState } from "react";
import { BiSolidUser } from 'react-icons/bi';
import { HiLockClosed } from 'react-icons/hi';
import styles from './home.module.css';
import { RevealWrapper } from "next-reveal";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InfinitySpin } from 'react-loader-spinner'


toast.configure()
import {
  collection,
  addDoc, doc, getDoc, setDoc,
} from "firebase/firestore";
import { auth, db } from "./../../../firebase/firebase.js";
import { createUserWithEmailAndPassword, FirebaseAuthException } from "firebase/auth"
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDocs, query, onValue } from 'firebase/firestore'
import { Storage } from "./../../../firebase/firebase.js";
import { useRouter } from "next/router";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Auth() {
  const router = useRouter();

  const [activeIcon, setActiveIcon] = useState("treatments");
  const [gender, setGender] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [checked, setChecked] = useState(false);
  const [fname, setFName] = useState("")
  const [lname, setlName] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [city, setcity] = useState("")
  const [pcode, setpcode] = useState("")
  const [number, setnumber] = useState("")
  const [logEmail, setLogEmail] = useState("")
  const [logPassword, setLogPassword] = useState("")
  const [messageAlert, setMessageAlert] = useState({
    type: "info",
    message: ""
  });
  const [showMessageAlert, setShowMessageAlert] = useState(false)

  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    postCode: '',
    phone: '',
    city: '',
    password: '',
    gender: '',  // For radio buttons
    subscribe: false, // For checkbox
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object().shape({
    fname: Yup.string().required('First Name is required'),
    lname: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    postCode: Yup.string().required('Post Code is required'),
    phone: Yup.string().required('Phone is required'),
    city: Yup.string().required('City is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password should be at least 6 characters'),
    gender: Yup.string().required('Please select a gender'),
  });





  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle radio buttons and checkbox
    const newValue = type === 'radio' ? value : type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };



  const [loading, setLoading] = useState(false);




  console.log('user', auth.currentUser)



  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowMessageAlert(false)


    try {

      await validationSchema.validate(formData, { abortEarly: false });
      console.log('Form data is valid:', formData);
      setLoading(true);


      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      console.log("userID", user.uid)
      const collectionRef = collection(db, "Users");
      const docRef = doc(collectionRef, user.uid);

      const values = {
        fName: formData.fname,
        email: formData.email,
        lName: formData.lname,
        city: formData.city,
        postCode: formData.postCode,
        phone: formData.phone,
        role: "user",
        gender: formData.gender,
        proEnable: `${checked ? true : false}`
      };
      await setDoc(docRef, values, { merge: true });

      await signInWithEmailAndPassword(auth, formData.email, formData.password);




      NotificationManager.success("Successfully Registered");




      // router.push('/');

      setLoading(false);



    } catch (error) {

      if (error instanceof Yup.ValidationError) {
        const newErrors = {};
        error.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
        setLoading(false);

      }
      else {
        const message = error.message
        var modifiedText = message.replace("Firebase:", '');
        setErrors("");

        NotificationManager.error(modifiedText);


        console.log("FIREBASE ERROR", error)


        setLoading(false);
      }





    }



  };


  const HandleLogin = async (e) => {
    e.preventDefault();
    setShowMessageAlert(false);
    const email = logEmail;
    const password = logPassword;

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setMessageAlert({
        type: 'error',
        message: 'Invalid email format',
      });
      notify()
      return;
    }

    try {
      setLoading(true)
      const userCredential = await signInWithEmailAndPassword(auth, email, password);


      NotificationManager.success("Successfully Logged In");



      const user = userCredential.user;

      console.log('User signed in successfully:', user);

      const userDataRef = doc(db, 'Users', user.uid);
      const userDataSnap = await getDoc(userDataRef);
      const userData = userDataSnap.data();

      // Saving user data in the cookies
      // Cookies.set('userData', JSON.stringify(userData), { expires: 7 });

      router.push('/');

      setLoading(false);

    } catch (error) {

      const message = error.message
      var modifiedText = message.replace("Firebase:", '');

      NotificationManager.success(modifiedText);
      console.log(error)

    }
  };


  const notify = () => {

    // if (showMessageAlert) {
    const type = messageAlert.type
    console.log("TYPE", type)
    switch (type) {
      case 'info':
        NotificationManager.info(messageAlert.message);
        break;
      case 'success':
        NotificationManager.success(messageAlert.message);
        break;
      case 'warning':
        NotificationManager.warning(messageAlert.message, '', 3000);
        break;
      case 'error':
        NotificationManager.error(messageAlert.message, '', 5000, () => {
        });
        break;
      default:
        NotificationManager.info(messageAlert.message, '', 5000, () => {
        });
      // }

    }
    return

  }

  const handleClick = (iconName) => {
    setActiveIcon(iconName);
  };

  const handleDivClick = (index) => {
    setActiveIndex(index);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <div className="bg-[url(/images/Video.png)] bg-[#F2F2F2]  h-[auto] py-8  bg-cover bg-no-repeat bg-center md:bg-[url(/images/Video.png)] lg:bg-[url(/images/Video.png)]  md:flex md:items-between md:justify-end">

      <div className="md:w-[40%] "></div>
      <NotificationContainer />

      <RevealWrapper
        rotate={{ x: 0, y: -12, z: 0 }}
        origin="bottom"
        delay={200}
        duration={1000}
        distance="200px"
        reset={true}
        viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <div className={`${styles.discover} overflow-hidden flex flex-col  items-center justify-center`} style={{ backgroundColor: '#FCFCFC', marginBottom: activeIndex === 1 ? '400px' : '0px' }}>
          <div className={styles.authContainer} >
            <div
              className={`${styles.account} items-center  md:pl-16 justify-center flex basis-[50%]`}
              style={{
                backgroundColor: activeIndex === 0 ? '#F26A5A' : '#F9AF9C',
              }}
              onClick={() => handleDivClick(0)}
            >
              <div className="md:ml-[20px]">
                <BiSolidUser size={20} color="white" />
              </div>
              <div className={`pl-1 md:pl-4 font-medium text-white text-sm md:text-base `}>
                Create an Account
              </div>
            </div>
            <div
              className={`${styles.account} items-center md:pr-28 justify-center flex basis-[50%]`}
              style={{
                backgroundColor: activeIndex === 1 ? '#F26A5A' : '#F9AF9C',
              }}
              onClick={() => handleDivClick(1)}
            >
              <div style={{ marginLeft: '10px' }}>
                <HiLockClosed size={20} color="white" />
              </div>
              <div className={`pl-1 md:pl-2 font-medium text-white text-sm md:text-base `}>
                Login
              </div>
            </div>
          </div>
          {activeIndex === 0 ?
            <form onSubmit={handleSubmit}>
              <center className="mt-12 px-10">
                <RevealWrapper
                  rotate={{ x: 0, y: 0, z: 0 }}
                  origin="bottom"
                  delay={200}
                  duration={1000}
                  distance="20px"
                  reset={true}
                  viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
                >
                  <div className="flex flex-col justify-start items-start mb-4">

                    <input
                      placeholder="First Name"
                      type="text"
                      id="fname"
                      name="fname"
                      value={formData.fname}
                      onChange={handleChange}
                      className="w-full h-[50px] bg-white pl-4 border-2 border-solid border-blue-300 rounded-md "
                    />
                    {errors.fname && <div className="error mb-1 mt-1  mt-0">{errors.fname}</div>}

                  </div>

                  <div className="flex flex-col justify-start items-start mb-4">

                    <input className="w-full h-[50px] bg-white pl-4 border-2 border-solid border-blue-300 rounded-md "
                      type="text"
                      placeholder="Last Name"

                      id="lname"
                      name="lname"
                      value={formData.lname}
                      onChange={handleChange}
                    />
                    {errors.lname && <div className="error mb-1 mt-1 ">{errors.lname}</div>}

                  </div>

                  <div className="flex flex-col justify-start items-start mb-4">

                    <input className="w-full h-[50px] bg-white pl-4 border-2 border-solid border-blue-300 rounded-md "
                      type="email"
                      id="email"
                      placeholder="Email"

                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="error mb-1 mt-1 ">{errors.email}</div>}

                  </div>
                  <div className="flex flex-col justify-start items-start mb-4">

                    <input className="w-full h-[50px] bg-white pl-4 border-2 border-solid border-blue-300 rounded-md "
                      type="password"
                      placeholder="Password"

                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {errors.password && <div className="error mb-1 mt-1 ">{errors.password}</div>}

                  </div>


                  <div className="flex flex-col justify-start items-start mb-4">

                    <input className="w-full h-[50px] bg-white pl-4 border-2 border-solid border-blue-300 rounded-md "
                      placeholder="Phone number"
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />

                    {errors.phone && <div className="error mb-1 mt-1 ">{errors.phone}</div>}

                  </div>

                  <div className="flex justify-center gap-4 items-center">
                    <div className="flex flex-col justify-center items-start mb-4">

                      <input
                        placeholder="City"

                        className="w-full h-[50px] bg-white pl-4 border-2 border-solid border-blue-300 rounded-md "
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                      />
                      {errors.city && <div className="error mb-1 mt-1 ">{errors.city}</div>}

                    </div>
                    <div className="flex flex-col justify-center items-start mb-4">

                      <input
                        placeholder="Post Code"

                        className="w-full h-[50px] bg-white pl-4 border-2 border-solid border-blue-300 rounded-md "
                        type="text"
                        id="postCode"
                        name="postCode"
                        value={formData.postCode}
                        onChange={handleChange}
                      />
                      {errors.postCode && <div className="error mb-1 mt-1 ">{errors.postCode}</div>}

                    </div>
                  </div>



                  <div className="flex items-start flex-col">
                    <div className={`${styles.radioHeader}  mb-2`}>Gender</div>
                    <div className="mr-0 flex  sm:mr-10 mt-4 ">
                      <label className="inline-flex items-center">
                        <input
                          name="gender"

                          type="radio"
                          value="Female"
                          checked={formData.gender === 'Female'}
                          onChange={handleChange}
                          style={{ color: 'yellow' }}
                          className="form-radio h-4 w-4"
                        />
                        <span className="ml-2">Female</span>
                      </label>
                      <label className="inline-flex items-center ml-6">
                        <input
                          name="gender"

                          type="radio"
                          value="Male"
                          checked={formData.gender === 'Male'}
                          onChange={handleChange}
                          className="form-radio text-blue-500 h-4 w-4"
                        />
                        <span className="ml-2">Male</span>
                      </label>
                      <label className="inline-flex items-center ml-6">
                        <input
                          name="gender"

                          type="radio"
                          value="Prefer not to say"
                          checked={formData.gender === 'Prefer not to say'}
                          onChange={handleChange}
                          className="form-radio text-blue-500 h-4 w-4"
                        />
                        <span className="ml-2 whitespace-nowrap">Prefer not to say</span>
                      </label>

                    </div>
                    {errors.gender && <div className="error mb-1 mt-1 ">{errors.gender}</div>}

                  </div>
                  <div className="flex flex-col  items-start justify-center  mt-7 sm:mt-14">
                    <label class="relative ml-1 inline-flex items-center cursor-pointer">
                      <input
                        // required

                        name="subscribe"
                        checked={formData.subscribe}
                        onChange={handleChange}
                        type="checkbox" value="" class="sr-only  peer" />
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none =  rounded-[6px] mr-2 peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-[6px] after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#F26A5A]"></div>

                      {/* <label htmlFor="toggle" className='ml-1'>No</label> */}
                      <label htmlFor="toggle">Send me promotions
                        {/* {checked ? 'On' : 'Off'} */}
                      </label>
                    </label>


                  </div>
                </RevealWrapper>
                {loading ? <InfinitySpin
                  visible={true}
                  // height="80"
                  width="200"
                  ariaLabel="InfinitySpin -loading"
                  wrapperStyle={{}}
                  wrapperClass="InfinitySpin -wrapper"
                  color="#F4442E"

                  // colors={['#F4442E', '#F4442E', '#F4442E', '#F4442E', '#F4442E']}
                  backgroundColor="#F4442E"
                /> : <button className={`${styles?.formItems} btn-primary h-[48px] mt-6 sm:mt-12 mb-32 rounded-[4px]`} style={{ backgroundColor: '#F26A5A', color: 'white', fontSize: '16px', lineHeight: '12px', fontWeight: '600', fontFamily: "'Lato', sans-serif" }}>
                  Sign up
                </button>}
              </center>
            </form>
            :
            <form onSubmit={(e) => { HandleLogin(e); notify(); }}>
              <RevealWrapper
                rotate={{ x: 0, y: -12, z: 0 }}
                origin="bottom"
                delay={200}
                duration={1000}
                distance="50px"
                reset={true}
                viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
              >
                <center className="mt-12">
                  <input
                    required type="email"
                    name="LoginEmail"
                    placeholder="Email"
                    value={logEmail}
                    onChange={(e) => { setLogEmail(e.target.value) }}
                    className="w-full h-[50px] pl-4 border-2 border-solid border-blue-300 rounded-md mb-4"
                  />
                  <input
                    required type="password"
                    name="LoginPassword"
                    value={logPassword}
                    onChange={(e) => { setLogPassword(e.target.value) }}
                    placeholder="Password"
                    className="w-full h-[50px] pl-4 border-2 border-solid border-blue-300 rounded-md mb-4"
                  />
                  <p className={styles.forgot}>Forgot Password?</p>
                </center>
                <div className="flex items-center  mt-4">
                  <label class="relative ml-1 inline-flex items-center cursor-pointer">
                    <input checked={checked}
                      onChange={handleToggle} type="checkbox" value="" class="sr-only  peer" />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none =  rounded-[6px] sm:mr-2 peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-[6px] after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#F26A5A]"></div>

                    {/* <label htmlFor="toggle" className='ml-1'>No</label> */}

                  </label>
                  <label htmlFor="toggle">Send me promotion
                    {/* {checked ? 'On' : 'Off'} */}
                  </label>
                </div>
                <center>
                  {loading ? <InfinitySpin
                    visible={true}
                    width="200"

                    ariaLabel="InfinitySpin -loading"
                    wrapperStyle={{}}
                    wrapperClass="InfinitySpin -wrapper"
                    color="#F4442E"

                  /> : <button className={`${styles?.formItems} btn-primary h-[48px] mt-12 mb-32 rounded-[4px]`} style={{ backgroundColor: '#F26A5A', color: 'white', fontSize: '16px', lineHeight: '12px', fontWeight: '600', fontFamily: "'Lato', sans-serif" }}>Log in</button>}

                </center>
              </RevealWrapper>
            </form>
          }
        </div>
      </RevealWrapper>
    </div>
  );
}
