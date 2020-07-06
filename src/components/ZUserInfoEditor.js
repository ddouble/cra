import React, {useState} from 'react';
import {ImagePicker} from "./ImagePicker";
import {Controller, useForm} from "react-hook-form";
import {useZState} from "../zstate";
import {zuserInfoState} from "../store";

let render = 1;
export default function ZUserInfoEditor() {
  const [open, setOpen] = useState(false);
  const [userInfo, updateUserInfo] = useZState(zuserInfoState);
  const {register, control} = useForm();

  console.log(render++);

  function onNickChange(ev) {
    updateUserInfo({...userInfo, [ev.target.name]: ev.target.value});
  }

  function onImagePickerChange(v) {
    updateUserInfo({...userInfo, pic: `https://picsum.photos/id/${v.id}/1200`, picInfo: v});
    setOpen(false);
  }

  return <div>
    <h1 style={{marginTop: 0}}>Edit User Info</h1>
    <p>nick <input name={'nick'} type={'text'} defaultValue={userInfo.nick} ref={register} onChange={onNickChange}/></p>
    <div>
      <div>{userInfo.pic}</div>
      <button onClick={() => {
        setOpen(true);
      }}>Choice User Picture
      </button>
      {/*<ImagePicker*/}
      {/*    onChange={onImagePickerChange}*/}
      {/*    name={"pic"} open={open}*/}
      {/*    onClose={() => setOpen(false)}/>*/}

      <Controller
          control={control}
          name={'pic'}
          render={({onChange, onBlur, value}) => {
            return <ImagePicker
                onChange={(...args) => {
                  onChange(...args);
                  onImagePickerChange(...args)
                }}
                name={"pic"} open={open} onClose={() => setOpen(false)}/>
          }}
      />
    </div>
  </div>;
}
