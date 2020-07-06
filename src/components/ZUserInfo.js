import React from 'react';
import {useZState} from "../zstate";
import {zuserInfoState} from "../store";

// let render = 1;
export default function ZUserInfo() {
  const [userInfo] = useZState(zuserInfoState);

  return <div>
    <div><h1 style={{marginTop: 0}}>User Info</h1></div>
    <p>{userInfo.name}</p>
    <p style={{fontWeight: 700}}>{userInfo.nick}</p>
    <p><img src={userInfo.pic} alt={''}
            style={{
              width: "200px",
              height: "200px",
              border: '6px dotted #333',
              padding: '15px'
            }}/></p>
  </div>;
}
