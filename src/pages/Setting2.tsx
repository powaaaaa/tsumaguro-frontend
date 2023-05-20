import postCookie, { postRoomInfo, session2 } from "./axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { idState } from "./status";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


function Setting1Page() {
  const router = useRouter();

  const [id, setId] = useRecoilState(idState);
  const [selectPnum, setSelectedPnum] = useState(3);
  const [selectQnum, setSelectQnum] = useState(3);
  const [selectRnum, setSelectRnum] = useState(1);

  const handleInputP = (event: React.MouseEvent<HTMLInputElement>) => {
    let value = event.currentTarget.value;
    // 数値が範囲内かチェックする
    if (Number(value) < 0) {
      value = "3";
    } else if (Number(value) > 100) {
      value = "100";
    }
    setSelectedPnum(Number(value));
  };

  const handleInputR = (event: React.MouseEvent<HTMLInputElement>) => {
    let value = event.currentTarget.value;
    // 数値が範囲内かチェックする
    if (Number(value) < 0) {
      value = "1";
    } else if (Number(value) > 100) {
      value = "100";
    }
    setSelectRnum(Number(value));
  };

  const handleInputQ = (event: React.MouseEvent<HTMLInputElement>) => {
    let value = event.currentTarget.value;
    // 数値が範囲内かチェックする
    if (Number(value) < 0) {
      value = "3";
    } else if (Number(value) > 100) {
      value = "100";
    }
    setSelectQnum(Number(value));
  };

  const posts = async () => {
    const session: session2 = {
      owner_id: id.id,
      participants_num: selectPnum,
      round_num: selectRnum,
      questions_num: selectQnum,
      Id: id,
      setId: setId,
    };
    console.log(session);
    postRoomInfo(session);
    router.push(`/Waiting`);
  };

  const handleClick = () => {
    posts();
    return;
  };

  return (
    <div>
      <h2 style={{ fontSize: "50px", }}>Setting Page 2</h2>
      <div className="absolute left-28" style={{backgroundColor:'Silver'}}>
        ~ゲーム設定~
      </div>
      <div  className="h-72" style={{backgroundColor:'Silver',display: 'flex', justifyContent: 'center', alignItems: 'center' , gap: '20px' }}>
      <form style={{gap:'20px',display: 'flex', justifyContent: 'center', alignItems: 'center' , gap: '20px' }}>
        <label>
          プレイヤー人数(3~100人)
        </label>
        <input
            type="number"
            name="participants_num"
            min="3"
            max="100"
            value={selectPnum}
            onInput={handleInputP}></input>
        <label>
          ラウンド数
        </label>
          <input
            type="number"
            name="round_num"
            min="3"
            max="100"
            value={selectRnum}
            onInput={handleInputR}
          ></input>
        <label>
          質問回数
        </label>
          <input
            type="number"
            name="question_num"
            min="3"
            max="100"
            value={selectQnum}
            onInput={handleInputQ}
          ></input>
          
          <Button type="button" onClick={handleClick} style={{fontSize:18 ,backgroundColor:'Gainsboro'}} className="hover: text-black">
          <NavigateNextIcon sx={{ fontSize: 40 }}/>
          決定
          </Button>
      </form>
      </div>
    </div>
  );
}

export default Setting1Page;
