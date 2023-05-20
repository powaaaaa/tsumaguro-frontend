import { atom, useRecoilState } from "recoil";
import { resType } from "./axios";

// 共有するデータの作成
export const idState = atom<resType>({
  key: "id",
  default: {
    id: 0,
    room_id: 0,
  },
});
