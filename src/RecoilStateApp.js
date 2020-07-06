import React from 'react'
// import logo from './logo.svg';
import './App.css'
import {useRecoilState} from "recoil";
import {UserInfo} from './components/UserInfo';
import {UserInfoEditor} from './components/UserInfoEditor';
import {userInfoState} from "./store";

function RecoilStateApp() {
  // const [showList, setShowList] = useState(false);
  
  const [userInfo] = useRecoilState(userInfoState);

  return (
      <div className='App' style={{backgroundImage: 'url(\'' + userInfo.picInfo.download_url + '\')'}}>
        <UserInfo/>
        <UserInfoEditor/>

        {/*<button onClick={() => setShowList(!showList)}>Hello</button>*/}
        {/*{showList && <ScrollList/>}*/}
      </div>
  )
}

export default RecoilStateApp
