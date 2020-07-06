import React from "react";
import ZUserInfoEditor from "./components/ZUserInfoEditor";
import ZUserInfo from "./components/ZUserInfo";
import {zuserInfoState} from "./store";
import {useZState} from "./zstate";

// const userState = zstate({name: 'Hero'});
// let render = 1;
//
// function UserInfo() {
//   const [user] = useZState(userState);
//
//   return <div>{user.name}</div>
// }
//
// function UserInfoEditor() {
//   const [user, setUser] = useZState(userState);
//
//   return <div>
//     <input name={'name'} type={'text'} value={user.name}
//            onChange={(ev) => setUser({name: ev.target.value})}/>
//   </div>;
// }

function ZStateApp() {
  const [userInfo] = useZState(zuserInfoState);
  // console.log(userInfo);

  return <div className='App' style={{backgroundImage: 'url(\'' + userInfo.picInfo.download_url + '\')'}}>
    <ZUserInfo/>
    <ZUserInfoEditor/>
  </div>
}

export default ZStateApp
