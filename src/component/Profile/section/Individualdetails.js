import React, { useState, useEffect } from "react";
import "../../../styles/global.css"
import DefaultImg from '../../../public/assets/images/default_img.jpg'
import { Tabs } from 'antd';
import Home, { Mapsection } from "./map";
import { GoogleApiWrapper } from "google-maps-react";
import ProfileMap from "./map";
import MapComponent from "./map";

export function IndividualDetails(userDetails) {

    return (
        <>
            <div className=" flex flex-wrap pt-10 xl:px-10">
                <div className="md:w-[40%] w-[100%] md:pr-6 border-r-2 border-gray-300">
                    <div className=" text-center">
                        <img
                            // src={DefaultImg}
                            src={userDetails?.userDetails[0]?.profilepicture}
                            alt="DefaultImg"
                            className="w-[170px] m-auto mb-2 h-[170px] object-cover rounded-[50%]"
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = DefaultImg;
                            }}
                        />
                        <h2 className="text-[20px] font-semibold text-gray-600">{userDetails?.userDetails[0]?.name}</h2>
                    </div>

                    <div>
                        <div className="flex pb-3 pt-2">
                            <h2 className="w-[25%] text-right text-[20px] font-normal text-gray-400">Username  </h2>
                            <span className="pt-1 mx-3"> : </span>
                            <h2 className="text-[20px] font-semibold text-gray-600">{userDetails?.userDetails[0]?.username}</h2>
                        </div>

                        <div className="flex pb-3">
                            <h2 className="w-[25%] text-right  text-[20px] font-normal text-gray-400">Email  </h2>
                            <span className="pt-1 mx-3"> : </span>
                            <h2 className="text-[20px] font-semibold text-gray-600">{userDetails?.userDetails[0]?.email}</h2>
                        </div>

                        <div className="flex pb-3">
                            <h2 className=" w-[25%] text-right  text-[20px] font-normal text-gray-400">Phone  </h2>
                            <span className="pt-1 mx-3"> : </span>
                            <h2 className="text-[20px] font-semibold text-gray-600">{userDetails?.userDetails[0]?.phone}</h2>
                        </div>
                        <div className="flex pb-3">
                            <h2 className="w-[25%] text-right  text-[20px] font-normal text-gray-400">Website  </h2>
                            <span className="pt-1 mx-3"> : </span>
                            <h2 className="text-[20px] font-semibold text-gray-600">{userDetails?.userDetails[0]?.website}</h2>
                        </div>

                    </div>
                    <hr />
                    <h2 className="text-[20px] text-center font-normal pt-4 text-gray-600">Company</h2>

                    <div>
                        <div className="flex pb-3 pt-2">
                            <h2 className="w-[25%] text-right text-[20px] font-normal text-gray-400">Name  </h2>
                            <span className="pt-1 mx-3"> : </span>
                            <h2 className="text-[20px] font-semibold text-gray-600">{userDetails?.userDetails[0]?.company.name}</h2>
                        </div>

                        <div className="flex pb-3">
                            <h2 className="w-[25%] text-right  text-[20px] font-normal text-gray-400">Catchphrase  </h2>
                            <span className="pt-1 mx-3"> : </span>
                            <h2 className="text-[20px] font-semibold text-gray-600">{userDetails?.userDetails[0]?.company.catchPhrase}</h2>
                        </div>

                        <div className="flex pb-3">
                            <h2 className=" w-[25%] text-right  text-[20px] font-normal text-gray-400">bs  </h2>
                            <span className="pt-1 mx-3"> : </span>
                            <h2 className="text-[20px] font-semibold text-gray-600">{userDetails?.userDetails[0]?.company.bs}</h2>
                        </div>

                    </div>
                </div>

                <div className=" md:w-[50%] w-[100%] ml-14">
                    <h2 className="text-[20px] font-normal pt-4 text-gray-600">Address</h2>

                    <div>
                        <div className="flex pb-3 pt-2">
                            <h2 className="w-[20%] text-right text-[20px] font-normal text-gray-400">Street  </h2>
                            <span className="pt-1 mx-3"> : </span>
                            <h2 className="text-[20px] font-semibold text-gray-600">{userDetails?.userDetails[0]?.address.street}</h2>
                        </div>

                        <div className="flex pb-3">
                            <h2 className="w-[20%] text-right  text-[20px] font-normal text-gray-400">Suite  </h2>
                            <span className="pt-1 mx-3"> : </span>
                            <h2 className="text-[20px] font-semibold text-gray-600">{userDetails?.userDetails[0]?.address.suite}</h2>
                        </div>

                        <div className="flex pb-3">
                            <h2 className=" w-[20%] text-right  text-[20px] font-normal text-gray-400">City  </h2>
                            <span className="pt-1 mx-3"> : </span>
                            <h2 className="text-[20px] font-semibold text-gray-600">{userDetails?.userDetails[0]?.address.city}</h2>
                        </div>
                        <div className="flex pb-3">
                            <h2 className=" w-[20%] text-right  text-[20px] font-normal text-gray-400">Zipcode  </h2>
                            <span className="pt-1 mx-3"> : </span>
                            <h2 className="text-[20px] font-semibold text-gray-600">{userDetails?.userDetails[0]?.address.zipcode}</h2>
                        </div>

                    </div>
                    <div className="lg:block hidden">
                          <MapComponent userDetails={userDetails} /> 
                    </div>
                    <div className="lg:block hidden absolute bottom-0">
                        <div>Lat : <span>{userDetails?.userDetails[0]?.address?.geo?.lat}</span></div>
                        <div>Long : <span>{userDetails?.userDetails[0]?.address?.geo?.lng}</span></div>

                    </div>
                 
                </div>
            </div>
        </>
    )
}