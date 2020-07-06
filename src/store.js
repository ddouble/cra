import {atom} from "recoil";
import {zstate} from "./zstate";

export const userInfoState = atom({
  key: 'userInfoState',
  default: {
    name: 'Zhang San',
    pic: 'https://picsum.photos/id/10/1200',
    picInfo: {
      id: 10,
      download_url: 'https://picsum.photos/id/10/2500/1667'
    },
    nick: 'Hero',
    slogan: ''
  }
});

export const zuserInfoState = zstate({
  name: 'Zhang San',
  pic: 'https://picsum.photos/id/10/1200',
  picInfo: {
    id: 10,
    download_url: 'https://picsum.photos/id/10/2500/1667'
  },
  nick: 'Hero',
  slogan: ''
});
