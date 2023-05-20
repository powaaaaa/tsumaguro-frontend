import Link from "next/link";
import postCookie, { IdType, getGameStatus, resType, session1 } from "./axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { idState } from "./status";

function Setting1Page() {
  const router = useRouter();
  const [id, setId] = useRecoilState<resType>(idState);

  const posts = async (inputName: string) => {
    const session: session1 = {
      user_name: inputName,
      session_id: document.cookie,
      Id: id,
      setId: setId,
    };
    postCookie(session);
    router.push(`/Setting2`);
  };

  const [inputText, setInputText] = useState("");

  const handleClick = () => {
    if (inputText === "") {
      alert("名前を入力してください");
      return;
    } else {
      posts(inputText);
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
