import Link from "next/link";
import { session1 } from "./axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import { atom } from "recoil";

export const idState = atom({
  key: "id",
  default: 0,
});

function Setting1Page() {
  const router = useRouter();
  const [id, setId] = useRecoilState(idState);

  async function postCookie({
    user_name: user_name,
    session_id: session_id,
  }: session1) {
    try {
      const url = "http://localhost:8000/create_user";
      const res = await axios.post(url, { user_name, session_id });
      setId(res.data.id);
      router.push(`/Setting2`);
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
        ルーム作成2
        <br />
        ユーザー名を設定
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

export default Setting1Page;
