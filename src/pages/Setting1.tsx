import Link from "next/link";
import postCookie, { IdType, getGameStatus, resType, session1 } from "./axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { idState } from "./status";
import Button from '@mui/material/Button';
import { ClassNames } from "@emotion/react";
import TextField from '@mui/material/TextField';
import ReplyIcon from '@mui/icons-material/Reply';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

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
      <h2 style={{ fontSize: "50px", }}>Setting Page 1</h2>
      <div className="absolute left-28" style={{backgroundColor:'Silver'}}>
        ~ユーザー名を設定~
      </div>
        <div  className="h-72" style={{backgroundColor:'Silver',display: 'flex', justifyContent: 'center', alignItems: 'center' , gap: '20px' }}>

      <form style={{gap:'20px',display: 'flex', justifyContent: 'center', alignItems: 'center' , gap: '20px' }}>
        <div style={{fontSize: 20}}>
          ユーザー名を入力してください
        </div>
          <TextField id="outlined-basic" label="ユーザー名" variant="outlined" 
            name="user_name"
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
          ></TextField>
        

        <Button type="button" onClick={handleClick} style={{fontSize:18 ,backgroundColor:'Gainsboro'}} className="hover: text-black">
          <NavigateNextIcon sx={{ fontSize: 40 }}/>
          決定
        </Button>
      </form>
      </div>
      <div>
        <Button variant="contained" style={{backgroundColor:'Gainsboro'}}  className="absolute left-10 bottom-10  text-black">
          <Link href={"http://localhost:3000/"}>
             <ReplyIcon sx={{ fontSize: 40 }}  />
             ホーム画面に戻る
             </Link>
             </Button>
             </div>
             </div>
  );
}

export default Setting1Page;
