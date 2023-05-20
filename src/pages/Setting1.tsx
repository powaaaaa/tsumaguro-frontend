import Link from "next/link";
import { session1 } from "./axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import Button from "@mui/material/Button";
import { ClassNames } from "@emotion/react";
import TextField from "@mui/material/TextField";
import ReplyIcon from "@mui/icons-material/Reply";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
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
      <h2 style={{ fontSize: "50px" }}>Setting Page 1</h2>
      <div className="absolute left-28" style={{ backgroundColor: "Silver" }}>
        ~ユーザー名を設定~
      </div>
      <div
        className="h-72"
        style={{
          backgroundColor: "Silver",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <form
          style={{
            gap: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 20 }}>ユーザー名を入力してください</div>
          <TextField
            id="outlined-basic"
            label="ユーザー名"
            variant="outlined"
            name="user_name"
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
          ></TextField>

          <Button
            type="button"
            onClick={handleClick}
            style={{ fontSize: 18, backgroundColor: "Gainsboro" }}
            className="hover: text-black"
          >
            <NavigateNextIcon sx={{ fontSize: 40 }} />
            決定
          </Button>
        </form>
      </div>
      <div>
        <Button
          variant="contained"
          style={{ backgroundColor: "Gainsboro" }}
          className="absolute left-10 bottom-10  text-black"
        >
          <Link href={"http://localhost:3000/"}>
            <ReplyIcon sx={{ fontSize: 40 }} />
            ホーム画面に戻る
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Setting1Page;
