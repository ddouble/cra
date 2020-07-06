import React, {useState} from 'react';
import {useRecoilState} from "recoil";
import {userInfoState} from "../store";
import {ImagePicker} from "./ImagePicker";
import {Controller, useForm} from "react-hook-form";

export function UserInfoEditor() {
  const [open, setOpen] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const {register, control, watch} = useForm();

  function onNickChange(ev) {
    setUserInfo({...userInfo, [ev.target.name]: ev.target.value});
  }

  function onImagePickerChange(v) {
    setUserInfo({...userInfo, pic: `https://picsum.photos/id/${v.id}/1200`, picInfo: v});
    setOpen(false);
  }

  console.log(watch());

  return <div>
    <h1 style={{marginTop: 0}}>Edit User Info</h1>
    <p>nick <input name={'nick'} type={'text'} defaultValue={userInfo.nick} ref={register} onChange={onNickChange}/></p>
    <div>
      <div>{userInfo.pic}</div>
      <button onClick={() => {
        setOpen(true);
      }}>Choice User Picture
      </button>
      <Controller
          control={control}
          name={'pic'}
          render={({onChange, onBlur, value}) => {
            return <ImagePicker
                onChange={(...args) => {onChange(...args); onImagePickerChange(...args)}}
                name={"pic"} open={open} onClose={() => setOpen(false)} />
          }}
      />
    </div>
  </div>;
}
