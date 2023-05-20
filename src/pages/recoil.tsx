import React from "react";
// Recoilを使うときに必須
import { atom, useRecoilState } from "recoil";

// 共有するデータの作成
export const idState = atom({
  key: "id",
  default: 0,
});

function setResId(num: number) {
  const [id, setId] = useRecoilState(idState);
  setId(id);
  return;
  //   return (
  //     <button onClick={() => setId((size) => size + 1)} style={{ id }}>
  //       a
  //     </button>
  //   );
}

export function getResId() {
  const [id, setId] = useRecoilState(idState);
  return id;
}

export default setResId;
