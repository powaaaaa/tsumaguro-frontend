import React from "react";
// Recoilを使うときに必須
import { atom, useRecoilState } from "recoil";

// 共有するデータの作成
export const idState = atom({
  key: "id",
  default: 0,
});

const [id, setId] = useRecoilState(idState);

function setResId(num: number) {
  setId(id);
  return;
  //   return (
  //     <button onClick={() => setId((size) => size + 1)} style={{ id }}>
  //       a
  //     </button>
  //   );
}

export function getResId() {
  return id;
}

export default setResId;
