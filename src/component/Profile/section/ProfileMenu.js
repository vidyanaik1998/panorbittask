import React, { useState, useEffect } from "react";
import "../../../styles/global.css"
import { Tabs } from 'antd';
import DefaultImg from '../../../public/assets/images/default_img.jpg'
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export function ProfileMenu(userdetails) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [breadcrumbActive, setBreadcrumbActive] = useState(false);
    const [start, setstart] = useState(0);
    const [end, setend] = useState(0)

    useEffect(() => {
        setstart(userdetails?.user.length == start ? 1 :Number(id) + 1)
        setend(userdetails?.user.length == start ? 1 : Number(start) + 1)
    }, [id, userdetails])

    return (
        <>
            <div className="flex justify-between pb-2">
                <h2 className="text-[18px] text-gray-700 font-semibold">{userdetails?.title}</h2>
                <div
                    onClick={() => setBreadcrumbActive(!breadcrumbActive)}
                    className="flex items-center gap-3">
                    <img src={userdetails?.userdetails[0]?.profilepicture} alt="DefaultImg"
                        className="w-[40px] mb-2 h-[40px] object-cover rounded-[50%]"
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = DefaultImg;
                        }}
                    />
                    <h2 className="text-[16px] text-gray-600">{userdetails?.userdetails[0]?.name}</h2>
                </div>
            </div>

            {breadcrumbActive && (
                <>
                    <div className="hamburger rounded-t-[20px] rounded-b-[20px] absolute right-0 top-[60px] sm:top-[60px]  py-7 w-[300px] border  bg-white px-[40px]  font-semibold text-base rounded-md z-20">
                        <div className=" m-auto text-center">
                            <img src={userdetails?.userdetails[0]?.profilepicture} alt="DefaultImg"
                                className="w-[90px] mb-2 h-[90px] m-auto object-cover rounded-[50%]"
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src = DefaultImg;
                                }}
                            />

                            <h2 className="text-[16px] text-gray-600">{userdetails?.userdetails[0]?.name}</h2>
                            <h2 className="text-[16px] pb-3 text-gray-400">{userdetails?.userdetails[0]?.email}</h2>

                          <div>
                              <hr/>
                          <div
                                onClick={() => navigate(`/profile/${userdetails?.user[Number(start) - 1].id}`)}
                                className="flex  items-center justify-start gap-2 cursor-pointer">
                                <img src={userdetails?.user[Number(start) - 1]?.profilepicture} alt="DefaultImg"
                                    className="w-[30px] mb-2 h-[30px]  object-cover rounded-[50%]"
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src = DefaultImg;
                                    }}
                                />
                                <h2 className=" pt-3 text-[14px] pb-3 text-gray-400">{userdetails?.user[Number(start) - 1].name}</h2>
                            </div> 
                            <hr/> 
                            <div
                                onClick={() => navigate(`/profile/${userdetails?.user[Number(end) - 1].id}`)}
                                className="flex  items-center  justify-start gap-2 cursor-pointer">
                                <img src={userdetails?.user[Number(end) - 1]?.profilepicture} alt="DefaultImg"
                                    className="w-[30px] mb-2 h-[30px]  object-cover rounded-[50%]"
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src = DefaultImg;
                                    }}
                                />
                                <h2 className=" pt-3 text-[14px] pb-3 text-gray-400">{userdetails?.user[Number(end) - 1].name}</h2>
                            </div>
                          </div>

                            <button
                                className=" bg-[#cd3d3d] text-white px-4 py-2 rounded-[30px]"
                                onClick={() => navigate(`/`)}
                            >Sign out</button>
                        </div>
                    </div>

                    <div
                        className="opacity-70 mt-[25px] w-full fixed h-full left-0 top-0 z-1"
                        onClick={() => setBreadcrumbActive(false)}
                    >
                        &nbsp;
                    </div>
                    <div
                        className=""
                        onClick={() => setBreadcrumbActive(false)}
                    >
                        &nbsp;
                    </div>
                </>
            )}
        </>
    )
}