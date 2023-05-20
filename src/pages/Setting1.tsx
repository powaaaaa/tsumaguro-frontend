import Link from "next/link";
import postCookie, { IdType, getGameStatus, resType, session1 } from "./axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { idState } from "./status";
import Button from '@mui/material/Button';
import { ClassNames } from "@emotion/react";

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
      <h2 style={{ fontSize: "50px", }}>Setting Page</h2>
        <div className="h-72" style={{backgroundColor:'Silver',display: 'flex', justifyContent: 'center', alignItems: 'center' , gap: '20px' }}>
        ~ユーザー名を設定~
        <br />

      <form>
        <label style={{fontSize: 20}}>
          ユーザー名を入力してください
          <input
            type="text"
            name="user_name"
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
          ></input>
        </label>

        <Button type="button" onClick={handleClick} style={{fontSize:20 ,backgroundColor:'Gainsboro'}} className="hover: text-black">
          決定
        </Button>
      </form>
      </div>
    </div>
  );
}

export default Setting1Page;
