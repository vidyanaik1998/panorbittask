import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../styles/global.css"
import DefaultImg from '../../../public/assets/images/default_img.jpg'
import { Link } from "react-router-dom";
import { getCustomerDetails } from "../../../APIIntegration/apicalls";

export function UserDetails() {
  const [user, setuser] = useState([])

  useEffect(() => {
    const UserAPI = async () => {
      const res = await getCustomerDetails().then(
        (res) => {
          setuser(res?.users);
        }
      )
        .catch((err) => {
          setuser([]);
        });
    };
    UserAPI();
  }, []);

  return (
    <>
      <div className="h-[400px]  px-10 overflow-auto">
        {

          user.map((item) => {
            return (
              <div className="py-3" >
                <Link to={`/profile/${item.id}`} >
                  <div className="flex items-center gap-5">
                    <img src={item?.profilepicture} alt="DefaultImg"
                      className="w-[45px] mb-2 h-[45px] object-cover rounded-[50%]"
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = DefaultImg;
                      }}
                    />
                    <h2 className="text-[18px] text-gray-600">{item?.name}</h2>
                  </div>
                </Link>
                <hr />
              </div>
            )
          })
        }
      </div>
    </>
  )
}