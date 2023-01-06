import React, { useState, useEffect } from "react";
import "../../../../styles/global.css"
import { Collapse } from "antd";
import { WechatOutlined } from '@ant-design/icons';
import DefaultImg from '../../../../public/assets/images/default_img.jpg'
import { IndividualChat } from "./Individualchat";

export function Chatbox(user) {
    const { Panel } = Collapse;
    const [individualchat, setindividualchat] = useState(false);
    const [details, setdetails] = useState([])

    const onChange = (key) => {
        // console.log(key);
    };
    const messages=[
        {
            type:"incoming", 
            message : "Lorem ipsum is placeholder text commonly used in the graphic, print" ,
        } ,
        {
            type:"incoming", 
            message : "Lorem ipsum is placeholder text commonly used in the graphic" ,
        } ,
        {
            type:"outgoing", 
            message : "Lorem ipsum is placeholder text " ,
        }
    ]
    const header = (
        <div className="flex items-center gap-3">
            <WechatOutlined style={{ "fontSize": "40px", "color": "white" }} />
            <h2 className=" text-white text-[16px]">Chats</h2>
        </div>
    )

    return (
        <>
            <Collapse onChange={onChange} expandIconPosition="right">
                <Panel header={header} key="1">
                    {user?.user.map((item) => {
                        return (
                            <>
                                <div
                                    onClick={() => {
                                        setdetails(item)
                                        setindividualchat(true)
                                    }}
                                    className="flex  justify-between pb-1 items-center  gap-2 cursor-pointer">
                                        <div className="flex  items-center  gap-2 ">
                                    <img src={item?.profilepicture} alt="DefaultImg"
                                        className="w-[30px] mb-2 h-[30px]  object-cover rounded-[50%]"
                                        onError={({ currentTarget }) => {
                                            currentTarget.onerror = null;
                                            currentTarget.src = DefaultImg;
                                        }}
                                    />
                                    <h2 className=" pt-3 text-[14px] pb-3 text-gray-600">{item.name}</h2>
                               </div>
                               <div className=" border-[4px]  border-green-500 rounded-[50%]"></div>
                                </div>
                            </>
                        )
                    })}
                </Panel>
            </Collapse>
            {individualchat ?
                <IndividualChat messages={messages} details={details} setindividualchat={setindividualchat} />
                : null
            }
        </>
    )
}