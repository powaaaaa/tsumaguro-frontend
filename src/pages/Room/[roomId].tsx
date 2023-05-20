// 参加者のユーザー登録

import Link from "next/link";
import { session1 } from "../axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import { atom } from "recoil";
import { room_idState } from "../Setting2";

export const PidState = atom({
  key: "Pid",
  default: 0,
});

function RoomPage() {
  const router = useRouter();
  const [Pid, setPid] = useRecoilState(PidState);
  const [room_id, setRoom_id] = useRecoilState(room_idState);

  async function postCookie({
    user_name: user_name,
    session_id: session_id,
  }: session1) {
    try {
      const { roomId } = router.query;
      const url = `http://localhost:8000/room/${roomId}`;
      const res = await axios.post(url, { user_name, session_id });
      setPid(res.data.id);
      console.log(res.data.id);
      router.push(`/Waiting/${roomId}`);
      return;
    } catch (e) {
      console.error("post出来ませんでした\n", e);
      return;
    }
  }

  const [inputText, setInputText] = useState("");

  const handleClick = () => {
    if (inputText === "") {
      alert("名前を入力してください");
      return;
    } else {
      const session: session1 = {
        user_name: inputText,
        session_id: document.cookie,
      };
      postCookie(session);
      return;
    }
  };

  return (
    <div>
      <h2>Setting Page</h2>
      <div>
        ルーム入室
        <br />
        ユーザー名を設定してね
      </div>

      <form>
        <label>
          ユーザー名を入力してください
          <input
            type="text"
            name="user_name"
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
          ></input>
        </label>

        <button type="button" onClick={handleClick}>
          決定
        </button>
      </form>
    </div>
  );
}

export default RoomPage;
