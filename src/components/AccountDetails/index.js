"use client";

import { BiSolidUser } from 'react-icons/bi';
import { HiLockClosed } from 'react-icons/hi';
import React from 'react'
import { useState } from 'react';
import styles from './home.module.css';
import { AiOutlineUser } from 'react-icons/ai'
import { BsCalendar } from 'react-icons/bs'
import { GiBackwardTime } from 'react-icons/gi'
import { MdLocationPin } from 'react-icons/md'
import Image from 'next/image';
import { ImCancelCircle } from 'react-icons/im';
import { FiEdit2 } from 'react-icons/fi';
import Modal from './Model';
import { RevealWrapper } from "next-reveal";
import { useQuery, useMutation } from '@tanstack/react-query';
import UsersApi from "../../lib/UsersApi";
import { getAuth } from 'firebase/auth';
import * as Yup from 'yup';
import { useRouter } from 'next/router';


import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const Index = () => {
    let id
    try {
        const auth = getAuth();
        const user = auth.currentUser;
        id = user.uid
        console.log("ID", id)
    } catch (error) {
        console.log(error)
    }

    const router = useRouter();





    const validationSchema = Yup.object().shape({
        fName: Yup.string().required('Name is required'),
        proEnable: Yup.string().required('Promotion is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        postCode: Yup.string().required('Post Code is required'),
        phone: Yup.string().required('Phone is required'),
        city: Yup.string().required('City is required'),
        gender: Yup.string().required('Please select a gender'),
        role: Yup.string().required('Please select a Role'),
    });



    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const [save, setSave] = useState(false);
    const [Edit, setEdit] = useState(false);

    const handleChangePassword1 = (e) => {
        setPassword1(e.target.value);
        setIsInvalid(password2 !== e.target.value);
    };

    const handleChangePassword2 = (e) => {
        setPassword2(e.target.value);
        setIsInvalid(password1 !== e.target.value);
    };

    const [errors, setErrors] = useState({});

    const [activeIcon, setActiveIcon] = useState("treatments");
    const [activeIndex, setActiveIndex] = useState(0);
    const [checked, setChecked] = useState(false);


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

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(!showModal);
    };

    const closeModal = () => {
        setShowModal(false);
    };


    const updateMutation = useMutation(
        ["UsersUpdate"],
        async ({ id, User }) => {
            await UsersApi.updateUser(id, User);
        },
        {
            onError: (data) => { },
            onSuccess: () => {
                NotificationManager.success("Your Information has been updated");

            },
        }
    );

    const [fName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState('');
    const [postCode, setPostCode] = useState('');
    const [role, setRole] = useState('');
    const [proEnable, setPromotion] = useState('');
    const [phone, setPhoneNumber] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = { fName, email, phone, city, proEnable, role, gender, postCode }

        try {
            await validationSchema.validate(formData, { abortEarly: false });
            console.log('Form data is valid:', formData);
            setSave(!save);
            updateMutation.mutate({
                id: id,
                User: { fName, email, role, city, proEnable, postCode, phone, gender },

            });
            setEdit(false)
            setErrors('')
            router.push('/all-set')

            console.log("VALIDATION", errors)

        } catch (error) {
            console.log(error)
            if (error instanceof Yup.ValidationError) {
                const newErrors = {};
                error.inner.forEach((err) => {
                    newErrors[err.path] = err.message;
                });
                setErrors(newErrors);
                console.log("VALIDATION", errors)
            }
            else {
                setErrors('')
            }
        }
    }
    const { data, isLoading, isError } = useQuery(['allUsers'], () => UsersApi.getUserById(id));
    console.log("DATA of users", data)



    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>{isError.message}</div>;
    }



    return (
        <div className='px-4 pt-[20px] md:pt-[60px]'>
            <Modal showModal={showModal} closeModal={closeModal} />

            <div className="w-full bg-white flex flex-col items-center justify-center mb-[10px] md:mb-[30px]">
                <p className={`${styles.introHead} mb-4 text-center`}>
                    {"My account".toUpperCase()}
                </p>
                <div
                    className="w-[83px] h-1 md:h-3 mb-6"
                    style={{ backgroundColor: "#F26A5A" }}
                ></div>
                {/* <div className="text-center text-[#707070]" style={{ fontSize: "20px", lineHeight: "27px" }}>
                    You should receive a confirmation email shortly.
                </div> */}
            </div>

            <NotificationContainer />

            <div className={`${styles.discover} flex  flex-col max-w-[800px] mx-auto px-4 items-center justify-center`} style={{ backgroundColor: '#FCFCFC', marginBottom: activeIndex === 1 ? '100px' : '100px' }}>
                <div className={`${styles.authContainer} w-full `}>
                    <div
                        className={`${styles.account} mx-auto w-[50%]`}
                        style={{
                            backgroundColor: activeIndex === 0 ? '#F26A5A' : '#F9AF9C',
                        }}
                        onClick={() => handleDivClick(0)}
                    >
                        <div className='ml-6'>
                            <BiSolidUser size={20} color="white" />
                        </div>
                        <div className={styles.create} >
                            Account Details                       </div>
                    </div>
                    <div
                        className={`${styles.login} w-[50%] `}
                        style={{
                            backgroundColor: activeIndex === 1 ? '#F26A5A' : '#F9AF9C',
                        }}
                        onClick={() => handleDivClick(1)}
                    >
                        <div style={{ marginLeft: '16px' }}>
                            <HiLockClosed size={20} color="white" />
                        </div>
                        <div className={styles.create}>
                            My Appointments
                        </div>
                    </div>
                </div>
                {activeIndex === 0 ?
                    <form onSubmit={(e) => { handleSubmit(e) }} className='w-full border-[1px] px-4  border-solid border-[#95989A] '>
                        <center className="mt-12 w-full">

                            <div className='w-full flex justify-center flex-col items-center'>

                                <div className='flex flex-col sm:flex-row justify-between  w-full items-start sm:space-x-2'>
                                    <div className='flex flex-col w-full  items-start justify-start'>
                                        <label className='self-start text-[#707070] text-[14px] opacity-60'>Name</label>
                                        <input
                                            value={Edit ? fName : data?.fName}
                                            onChange={(e) => {
                                                Edit ? setName(e.target.value) : setName(data?.fName);
                                            }}
                                            type="text"
                                            name='fname'
                                            id='fname'
                                            placeholder="Name"
                                            className="max-w-[350px] w-full h-[50px] bg-white pl-4 border-2 border-solid border-blue-300 rounded-md "
                                        />

                                        {errors.fName && <div className="error ">{errors.fName}</div>}

                                    </div>

                                    <div className='flex flex-col mb-4 w-full items-start justify-start'>
                                        <label className='self-start text-[#707070] text-[14px] opacity-60'>Phone Number</label>
                                        <input
                                            value={Edit ? phone : data?.phone}

                                            onChange={(e) => {
                                                Edit ? setPhoneNumber(e.target.value) : setPhoneNumber(data?.phone);
                                            }}
                                            type="text"
                                            id='phone'
                                            name='phone'
                                            placeholder="Phone Number"
                                            className="max-w-[350px] w-full h-[50px] bg-white pl-4 border-2 border-solid border-blue-300 rounded-md "
                                        />
                                        {errors.phone && <div className="error ">{errors.phone}</div>}

                                    </div>
                                </div>
                                <div className='flex flex-col  mb-4  sm:flex-row justify-between  w-full items-start sm:space-x-2'>
                                    <div className='flex flex-col w-full items-start justify-start'>
                                        <label className='self-start text-[#707070] text-[14px] opacity-60'>Email</label>
                                        <input
                                            value={Edit ? email : data?.email}
                                            onChange={(e) => {
                                                Edit ? setEmail(e.target.value) : setEmail(data?.email);
                                            }}
                                            type="text"
                                            id='email'
                                            name='email'
                                            placeholder="Email"
                                            className="max-w-[350px] w-full h-[50px] bg-white pl-4 border-2 border-solid border-blue-300 rounded-md "
                                        />
                                        {errors.email && <div className="error ">{errors.email}</div>}

                                    </div>
                                    <div className='flex flex-col  w-full items-start justify-start'>
                                        <label className='self-start text-[#707070] text-[14px] opacity-60'>Gender</label>
                                        <input
                                            value={Edit ? gender : data?.gender}
                                            onChange={(e) => {
                                                Edit ? setGender(e.target.value) : setGender(data?.gender);
                                            }}
                                            type="text"
                                            name='gender'
                                            id='gender'
                                            placeholder="Gender"
                                            className="max-w-[350px] w-full h-[50px] bg-white pl-4 border-2 border-solid border-blue-300 rounded-md "
                                        />
                                        {errors.gender && <div className="error ">{errors.gender}</div>}

                                    </div>
                                </div>
                                <div className='flex flex-col mb-4 sm:flex-row justify-between w-full sm:space-x-2'>
                                    {/* <div className='flex flex-col w-full justify-start'>
                                        <label className='self-start text-[#707070] text-[14px] opacity-60'>Password</label>
                                        <input

                                            type="password"
                                            id="password1"
                                            value={password1}
                                            onChange={handleChangePassword1}
                                            placeholder="Password"
                                            className="max-w-[350px] w-full h-[50px] bg-white pl-4 border-2 border-solid border-blue-300 rounded-md mb-4"
                                        />
                                        {isInvalid && (
                                            <p className="text-red-500 max-w-[180px] mb-1 py-2 px-3  whitespace-nowrap w-full bg-[#F26A5A]  rounded-xl text-white self-center text-sm">Passwords do not match</p>
                                        )}
                                        <input
                                            type="password"
                                            id="password2"
                                            value={password2}
                                            onChange={handleChangePassword2}
                                            placeholder="Confirm Password"
                                            className={`${isInvalid ? 'border-red-500' : 'border-gray-300'
                                                } max-w-[350px] w-full h-[50px] bg-white pl-4 outline-none border-2 border-solid border-blue-300 rounded-md mb-4`}
                                        />
                                    </div> */}
                                    <div className='flex flex-col w-full items-start justify-start'>
                                        <label className='self-start text-[#707070] text-[14px] opacity-60'>Postal Card</label>
                                        <input
                                            value={Edit ? postCode : data?.postCode}

                                            onChange={(e) => {
                                                Edit ? setPostCode(e.target.value) : setPostCode(data?.postCode);
                                            }}
                                            type="text"
                                            placeholder="Postal Card"
                                            className="max-w-[350px] w-full h-[50px] bg-white pl-4 border-2 border-solid border-blue-300 rounded-md "
                                        />
                                        {errors.postCode && <div className="error ">{errors.postCode}</div>}

                                    </div>

                                    <div className='flex flex-col w-full justify-start items-start'>
                                        <label className='self-start text-[#707070] text-[14px] opacity-60'>Role</label>
                                        <input
                                            value={Edit ? role : data?.role}

                                            onChange={(e) => {
                                                Edit ? setRole(e.target.value) : setRole(data?.role);
                                            }}
                                            type="text"
                                            placeholder="Role"
                                            className="max-w-[350px] w-full h-[50px] bg-white pl-4 border-2 border-solid border-blue-300 rounded-md "
                                        />
                                        {errors.role && <div className="error ">{errors.role}</div>}

                                    </div>
                                </div>
                                <div className='flex flex-col mb-4 sm:flex-row justify-between items-start w-full sm:space-x-2'>
                                    <div className='flex flex-col w-full items-start justify-start'>
                                        <label className='self-start text-[#707070] text-[14px] opacity-60'>City</label>
                                        <input
                                            value={Edit ? city : data?.city}

                                            onChange={(e) => {
                                                Edit ? setCity(e.target.value) : setCity(data?.city);
                                            }}
                                            type="text"
                                            placeholder="City"
                                            className="max-w-[350px] w-full h-[50px] bg-white pl-4 border-2 border-solid border-blue-300 rounded-md"
                                        />
                                        {errors.city && <div className="error ">{errors.city}</div>}

                                    </div>
                                    <div className='flex flex-col items-start   w-full justify-start'>
                                        <label className='self-start text-[#707070] text-[14px] opacity-60'>Promotions</label>
                                        <input
                                            value={Edit ? proEnable : data?.proEnable}

                                            onChange={(e) => {
                                                Edit ? setPromotion(e.target.value) : setPromotion(data?.proEnable);
                                            }}
                                            type="text"
                                            placeholder="Promotions"
                                            className="max-w-[350px] w-full h-[50px] bg-white pl-4 border-2 border-solid border-blue-300 rounded-md "
                                        />
                                        {errors.proEnable && <div className="error ">{errors.proEnable}</div>}

                                    </div>
                                </div>

                            </div>
                        </center>
                        <center>
                            {save ?
                                <button type='submit' className={`${styles?.formItems} btn-primary h-[48px] mt-6 sm:mt-12 mb-12 rounded-[4px]`} style={{ backgroundColor: '#F26A5A', color: 'white', fontSize: '16px', lineHeight: '12px', fontWeight: '600', fontFamily: "'Lato', sans-serif" }}>
                                    Save
                                </button> :
                                <button onClick={() => { setEdit(true); setSave(!save) }} className={`${styles?.formItems} btn-primary h-[48px] mt-6 sm:mt-12 mb-12 rounded-[4px]`} style={{ backgroundColor: '#F26A5A', color: 'white', fontSize: '16px', lineHeight: '12px', fontWeight: '600', fontFamily: "'Lato', sans-serif" }}>
                                    Edit my information
                                </button>}

                        </center>
                    </form>
                    :
                    <div className='w-full'>
                        <center className=" border-[1px] px-4 border-solid border-[#95989A] ">

                            {[1, 2, 3].map((index) => {

                                return <div key={index} className="flex  flex-col md:flex-row md:ml-7 md:justify-center h-auto mt-5 md:mt-14 mb-4 ">
                                    <div className="flex justify-center items-start">
                                        <Image
                                            src={"/images/die.png"}
                                            width={50}
                                            height={50}
                                            alt="Image"
                                            className="w-full h-[300px] md:h-auto md:rounded-[50%] md:ml-0 xl:ml-[58px] mb-7"
                                        />

                                    </div>
                                    <div className="  sm:ml-10 sm:mr-10 md:ml-8 lg:ml-16">

                                        <div className="flex relative flex-col sm:flex-row justify-evenly">
                                            <div className='flex absolute gap-2  md:top-0 right-[-10px] justify-center items-center '>
                                                <FiEdit2 className='cursor-pointer' onClick={openModal} size={15} color='#F26A5A' />

                                                <ImCancelCircle className='cursor-pointer' size={15} color='#F26A5A' />
                                            </div>
                                            <div>
                                                <p
                                                    className="text-2xl font-bold mb-2 text-left sm:text-center sm:mr-[9.2rem]"
                                                    style={{
                                                        fontSize: "18px",
                                                        lineHeight: "22px",
                                                        fontFamily: "'Lato', sans-serif",
                                                        color: "#707070",
                                                    }}
                                                >
                                                    Body Temple Beauty
                                                </p>
                                            </div>
                                            <div className="flex flex-row justify-between w-[100%] md:w-[49%] xl:w-[43%] mr-auto">
                                                <div className="flex items-center mb-auto">
                                                    <span
                                                        className="text-sm text-gray-500 mr-2"
                                                        style={{
                                                            fontSize: "14px",
                                                            lineHeight: "17px",
                                                            color: "#F26A5A",
                                                        }}
                                                    >
                                                        4.5
                                                    </span>
                                                    <span className="ml-1 text-yellow-500">
                                                        <div class="flex items-center space-x-1">
                                                            <svg
                                                                class="w-4 h-4"
                                                                style={{ color: "#F26A5A" }}
                                                                aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="currentColor"
                                                                viewBox="0 0 22 20"
                                                            >
                                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                            </svg>
                                                            <svg
                                                                class="w-4 h-4"
                                                                style={{ color: "#F26A5A" }}
                                                                aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="currentColor"
                                                                viewBox="0 0 22 20"
                                                            >
                                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                            </svg>
                                                            <svg
                                                                class="w-4 h-4"
                                                                style={{ color: "#F26A5A" }}
                                                                aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="currentColor"
                                                                viewBox="0 0 22 20"
                                                            >
                                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                            </svg>
                                                            <svg
                                                                class="w-4 h-4"
                                                                style={{ color: "#F26A5A" }}
                                                                aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="currentColor"
                                                                viewBox="0 0 22 20"
                                                            >
                                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                            </svg>
                                                            <svg
                                                                class="w-4 h-4"
                                                                style={{ color: "#F26A5A", opacity: "0.6" }}
                                                                aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="currentColor"
                                                                viewBox="0 0 22 20"
                                                            >
                                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                            </svg>
                                                        </div>
                                                    </span>
                                                </div>
                                                <div
                                                    className="mr-5"
                                                    style={{
                                                        fontSize: "14px",
                                                        lineHeight: "17px",
                                                        color: "#707070",
                                                    }}
                                                >
                                                    127 Reviews
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex  items-center mb-5 mt-[10px]">


                                            <MdLocationPin size={14} color="#707070" />
                                            <span
                                                className="font-bold ml-[5px]"
                                                style={{
                                                    color: "#707070",
                                                    fontSize: "14px",
                                                    lineHeight: "17px",
                                                    fontFamily: "'Lato', sans-serif",
                                                }}
                                            >
                                                123 rue Sherbrooke , Montreal, QC
                                                <hr
                                                    className="border-b-1 border-gray-400"
                                                    style={{ width: "100%" }}
                                                />
                                            </span>
                                        </div>
                                        <div className="mt-6">
                                            <div className="flex   flex-col sm:flex-row">
                                                <div className="flex-grow-0 w-[310px] text-start sm:text-center sm:w-[185px] lg:w-[180px] xl:w-[230px] mb-3 sm:mb-0">
                                                    <p
                                                        style={{
                                                            color: "#707070",
                                                            fontSize: "14px",
                                                            lineHeight: "17px",
                                                            fontFamily: "'Lato', sans-serif",
                                                        }}
                                                    >
                                                        Abdomen/ Bikini Waxing
                                                    </p>
                                                </div>
                                                <div className="flex-grow-0 text-start sm:text-center w-[310px] sm:w-[88px] sm:ml-[5px] xl:ml-0 mb-3 sm:mb-0">
                                                    <p
                                                        style={{
                                                            color: "#707070",
                                                            fontSize: "14px",
                                                            lineHeight: "17px",
                                                            fontFamily: "'Lato', sans-serif",
                                                            fontStyle: "italic",
                                                        }}
                                                    >
                                                        Subtotal
                                                    </p>
                                                </div>
                                                <div className="flex-grow-0  text-start sm:text-center sm:ml-[5px] w-[310px] sm:w-[210px] lg:w-[200px] xl:w-[247px] mb-3 sm:mb-0">
                                                    <p
                                                        style={{
                                                            color: "#F26A5A",
                                                            fontSize: "14px",
                                                            lineHeight: "17px",
                                                            fontFamily: "'Lato', sans-serif",
                                                        }}
                                                    >
                                                        $30
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="flex flex-col sm:flex-row mt-6">
                                                <div className="flex">
                                                    <BsCalendar size={20} color="#F26A5A" />
                                                    <span
                                                        className="ml-[12px]"
                                                        style={{
                                                            color: "#808285",
                                                            fontSize: "14px",
                                                            lineHeight: "17px",
                                                            fontFamily: "'Lato', sans-serif",
                                                        }}
                                                    >
                                                        November 22, 2019
                                                    </span>
                                                </div>
                                                <div className="flex mt-3 sm:mt-0 ml-0 sm:ml-[34px]">
                                                    <GiBackwardTime size={20} color="#F26A5A" />
                                                    <span
                                                        className="ml-[12px]"
                                                        style={{
                                                            color: "#808285",
                                                            fontSize: "14px",
                                                            lineHeight: "17px",
                                                            fontFamily: "'Lato', sans-serif",
                                                        }}
                                                    >
                                                        12-1 PM
                                                    </span>
                                                </div>
                                                <div className="flex mt-3 sm:mt-0 ml-0 sm:ml-[72px]">
                                                    <AiOutlineUser size={20} color="#F26A5A" />
                                                    <span
                                                        className="ml-[12px]"
                                                        style={{
                                                            color: "#808285",
                                                            fontSize: "14px",
                                                            lineHeight: "17px",
                                                            fontFamily: "'Lato', sans-serif",
                                                        }}
                                                    >
                                                        Jane
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            })}


                            <button onClick={() => { setSave(!save) }} className={`${styles?.formItems} btn-primary h-[48px] mt-6 sm:mt-12 mb-12 rounded-[4px]`} style={{ backgroundColor: '#F26A5A', color: 'white', fontSize: '16px', lineHeight: '12px', fontWeight: '600', fontFamily: "'Lato', sans-serif" }}>
                                {save ? <p>Save</p> : <p>Edit my information</p>}
                            </button>

                        </center>






                        {/* <center>
                          
                        </center> */}
                    </div>
                }
            </div>

        </div >
    )
}

export default Index