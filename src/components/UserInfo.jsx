import { collection, getDocs } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { fireDb } from '../firebase';
import myContext from '../context/myContext';
import ShimmerRedeem from './ShimmerRedeem';

const UserInfo = () => {
    const { loading, setLoading } = useContext(myContext);
    const [Data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [users, setusers] = useState("kkk")

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(fireDb, "coupons"));
                const items = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setData(items);
                setShow(true);
            } catch (error) {
                console.error("Error fetching data: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Add setLoading to dependency array
    useEffect(() => {

        const user = JSON.parse(localStorage.getItem("users"));

        // if (user == null) {
        //   setislog(false);
        // } else {
        //   setislog(true);
        // }


        console.log("==", user);
        setusers(user);

    }, []);


    const coupon = Data.filter((coupon) => users.uid === coupon.uploadBy);
    console.log("==>", users.name);
    return (
        <div className="overflow-x-hidden">
            {/* {loading ?
                <div className=''>
                    <div className="min-h-screen bg-[#181e24] flex justify-center items-center">
                        <div className="bg-[#2a323c] relative md:h-10/12 md:w-[80%] md:px-40 md:justify-center p-20 h-1/2 w-full flex md:flex-row flex-col py-14 text-white rounded-md">
                            <div className="md:mx-10 md:w-1/2 w-full ml-8 md:mr-48 flex items-start animate-pulse justify-center flex-col">
                                <div className="flex mt-5 h-12">
                                    <div className="object-cover h-10 w-14 rounded-md shimmer"></div>
                                    <div className="ml-2">
                                        <div className="h-4 w-24 bg-gray-700 shimmer mb-2"></div>
                                        <div className="h-4 w-16 bg-gray-700 shimmer"></div>
                                    </div>
                                </div>
                                <hr className="m-2 shimmer" />
                                <div className="mt-4">
                                    <div className="h-4 w-40 bg-gray-700 shimmer mb-4"></div>
                                    <ul className="space-y-2">
                                        <li className="h-4 w-full bg-gray-700 shimmer"></li>
                                        <li className="h-4 w-full bg-gray-700 shimmer"></li>
                                        <li className="h-4 w-full bg-gray-700 shimmer"></li>
                                        <li className="h-4 w-full bg-gray-700 shimmer"></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="h-full md:w-1/2 w-full flex flex-col pt-6 animate-pulse duration-1000 items-center justify-center md:justify-center gap-y-4">
                                <div className="h-6 w-24 bg-gray-700 shimmer mb-4"></div>
                                <div className="w-1/3 p-2 rounded-lg text-center bg-[#181e24] shimmer"></div>
                                <div className="h-6 w-32 bg-gray-700 shimmer mt-4"></div>
                                <div className="h-10 w-24 bg-blue-500 shimmer  rounded-md mt-4"></div>
                            </div>
                        </div>
                    </div>
                </div> : null} */}
            <div>
                <div className="bg-[#181e24] h-[100vh] w-screen overflow-x-hidden flex justify-center  items-center mt-[30px] ">
                    <div className="bg-[#2a323c] relative md:h-10/12  md:w-3/4 w-full flex md:flex-row flex-col py-14 text-white  rounded-md  ">
                        <div className='w-1/2 h-full m-4 flex flex-col items-center justify-center'>
                            <h1 className='font-bold text-3xl'>User Info</h1>
                            <div className="w-36 h-36 m-4 rounded-full flex flex-col items-center justify-center bg-slate-500">
                                <img
                                    src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg"
                                    alt="user"
                                    className="rounded-full "
                                />
                            </div>
                            <h1>Name:   {users.name}</h1>
                            <h1>Email: {users.email}</h1>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default UserInfo