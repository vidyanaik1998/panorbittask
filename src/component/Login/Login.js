import React, { useState, useEffect } from "react";
import { getCustomerDetails} from "../../APIIntegration/apicalls";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/global.css"
import { UserDetails } from "./section/UserDetails";


export function Login() {


  return (
    <div className="h-[100vh]">
      <section>
      <div class="curve"> 
      </div>
    </section>
    <div className="card bg-white md:w-[40%] w-[85%] border rounded-t-[20px] rounded-b-[20px] ">
        <h2 className=" bg-gray-100 p-10  rounded-t-[20px] text-[20px] text-gray-500 font-medium text-center ">Select an account</h2>
        <UserDetails  />
      </div>
{/*     
      <div className="card w-[40%] border rounded-t-[20px] rounded-b-[20px] ">
        <h2 className=" bg-gray-100 p-10  rounded-t-[20px] text-[20px] text-gray-500 font-medium text-center ">Select an account</h2>
        <UserDetails  />
      </div> */}
    </div>
  )
}