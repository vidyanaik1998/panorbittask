import React, { useState, useEffect } from "react";
import "../../styles/global.css"
import { Tabs } from 'antd';
import DefaultImg from '../../public/assets/images/default_img.jpg'
import { IndividualDetails } from "./section/Individualdetails";
import { Link, useParams } from 'react-router-dom';
import { getCustomerDetails } from "../../APIIntegration/apicalls";
import { ProfileMenu } from "./section/ProfileMenu";
import { UpcomingScreen } from "./section/upcoming/upcomingScreen";
import { Chatbox } from "./section/chat/chat";
import { EllipsisOutlined } from '@ant-design/icons';

export function Profile(candidateID) {
    const { TabPane } = Tabs;
    const { id } = useParams();
    const [profile, setprofile] = useState([])
    const [user, setuser] = useState([])
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        const UserAPI = async () => {
            const res = await getCustomerDetails().then(
                (res) => {
                    setuser(res?.users);
                    setprofile(res?.users.filter((item) => item.id === Number(id)));
                }
            )
                .catch((err) => {
                    setprofile([]);
                });
        };
        UserAPI();

    }, [id]);

    const onChange = (key) => {
        console.log(key);
    }
    function getWindowSize() {
      const { innerWidth, innerHeight } = window;
      return { innerWidth, innerHeight };
    }
    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
      }
      if (typeof window !== "undefined") {
  
        window.addEventListener('resize', handleWindowResize);
  
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }
    }, []);

    const item=(
        <div>
            Hello
        </div>
    )
    return (
        <div className="relative">
            <div className="lg:mt-0 mt-7 pt-10 px-10">
                <Tabs animated  tabPosition={windowSize.innerWidth > 900 ?"left" :"top"}
                    className='' defaultActiveKey="1" onChange={onChange} >
                    <TabPane
                     tab="Profile" key="1"  >
                        <div className="">
                            <ProfileMenu title="Profile" user={user} userdetails={profile} />
                            <hr />
                            <IndividualDetails userDetails={profile} />
                        </div>
                    </TabPane>

                    <TabPane tab="Posts" key="2">
                        <div>
                            <ProfileMenu title="Posts" user={user} userdetails={profile} />
                            <hr />
                            <UpcomingScreen />
                        </div>
                    </TabPane>

                    <TabPane tab="Gallery" key="3">
                        <div>
                            <ProfileMenu title="Gallery" user={user} userdetails={profile} />
                            <hr />
                            <UpcomingScreen />
                        </div>
                    </TabPane>

                    <TabPane tab="To Do" key="4">
                        <div>
                            <ProfileMenu title="To Do" user={user} userdetails={profile} />
                            <hr />
                            <UpcomingScreen />
                        </div>
                    </TabPane>

                </Tabs>

            </div>
            <div className="lg:w-[19%] w-[45%] absolute bottom-0 right-0">
                  <Chatbox user={user}  /> 
            </div>
         
        </div>
    )
}