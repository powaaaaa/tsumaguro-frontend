import Link from "next/link";
import { IdType, postCookie, getGameStatus, session } from "./axios";
import { useRouter } from "next/router";
import { useState } from "react";
import getResId from "./recoil";

function Setting1Page() {
  const router = useRouter();

  const posts = async (inputName: string) => {
    const session: session = {
      user_name: inputName,
      session_id: document.cookie,
    };
    postCookie(session);
    console.log(getResId);
    router.push(`/Setting2`);
  };

  const handleClick = () => {
    if (inputText === "") {
      alert("名前を入力してください");
      return;
    } else {
      posts(inputText);
      return;
    }
  };

  const [inputText, setInputText] = useState("");

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
