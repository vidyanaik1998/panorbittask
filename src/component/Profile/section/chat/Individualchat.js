import React, { useState, useEffect } from "react";
import "../../../../styles/global.css"
import { Collapse } from "antd";
import { CloseOutlined } from '@ant-design/icons';
import DefaultImg from '../../../../public/assets/images/default_img.jpg'

export function IndividualChat(details) {
    const { Panel } = Collapse;
    const onChange = (key) => {
        // console.log(key);
    };

    const header = (
        <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
            <img src={details?.details.profilepicture} alt="DefaultImg"
                className="w-[30px] mb-2 h-[30px]  object-cover rounded-[50%]"
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = DefaultImg;
                }}
            />
            <h2 className=" pt-3 text-[14px] pb-3 text-white">{details?.details.name}</h2>
        </div>
        <CloseOutlined onClick={()=>details?.setindividualchat(false)} style={{"color":"white"}} />
        </div>
    )

  

    return (
        <div className=" individual w-[100%] right-[110%] absolute bottom-0 ">
            <Collapse defaultActiveKey={['1']}  onChange={onChange}  expandIconPosition="right" extra={<CloseOutlined />}>
                <Panel header={header} key="1">
                   {details?.messages?.map((item)=>{
                       return(
                           <div 
                           className={item.type !== "incoming" ? "mb-3 ml-auto rounded-lg w-[80%] p-2 bg-gray-300" : "mb-3 mr-auto rounded-lg w-[80%] p-2 bg-gray-300"}>
                               <p  className=" ">{item.message}</p>
                           </div>
                       )
                   })}
                </Panel>
            </Collapse>
        </div>
    )
}