import postCookie, { postRoomInfo, session2 } from "./axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { idState } from "./status";
import Button from '@mui/material/Button';
import Link from "next/link";
import ReplyIcon from '@mui/icons-material/Reply';


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
      <h2>Setting 1</h2>
      <div>ルーム作成2</div>

      <form>
        <label>
          プレイヤー人数
          <input
            type="number"
            name="participants_num"
            min="3"
            max="100"
            value={selectPnum}
            onInput={handleInputP}
          ></input>
        </label>
        <label>
          ラウンド数
          <input
            type="number"
            name="round_num"
            min="3"
            max="100"
            value={selectRnum}
            onInput={handleInputR}
          ></input>
        </label>
        <label>
          質問回数
          <input
            type="number"
            name="question_num"
            min="3"
            max="100"
            value={selectQnum}
            onInput={handleInputQ}
          ></input>
        </label>

        <button type="button" onClick={handleClick}>
          決定
        </button>
      </form>
      <div>
        <Button variant="contained" style={{backgroundColor:'Gainsboro'}}  className="absolute left-10 bottom-10  text-black">
          <Link href={"http://localhost:3000/Setting1"}>
             <ReplyIcon sx={{ fontSize: 40 }}  />
             setting1に戻る
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Setting1Page;
