import { session2 } from "./axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { idState } from "./Setting1";
import axios from "axios";
import { atom } from "recoil";

export const room_idState = atom({
  key: "room_id",
  default: 0,
});

function Setting1Page() {
  const router = useRouter();

  const [id, setId] = useRecoilState(idState);
  const [room_id, setRoom_id] = useRecoilState(room_idState);
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

  async function postRoomInfo({
    owner_id: owner_id,
    participants_num: participants_num,
    round_num: round_num,
    remaining_questions_num: remaining_questions_num,
  }: session2) {
    try {
      const url = "http://localhost:8000/create_room";
      const res = await axios.post(url, {
        owner_id,
        participants_num,
        round_num,
        remaining_questions_num,
      });
      await setRoom_id(res.data.room_id);
      console.log("response(room_id):", res.data.room_id);

      router.push(`/Waiting/${room_id}`);
      return;
    } catch (e) {
      console.error("post出来ませんでした\n", e);
      return;
    }
  }

  const handleClick = async () => {
    const session: session2 = {
      owner_id: id,
      participants_num: selectPnum,
      round_num: selectRnum,
      remaining_questions_num: selectQnum,
    };
    await postRoomInfo(session);
    return;
  };

  return (
    <div>
      <h2 style={{ fontSize: "50px" }}>Room Setting</h2>
      <div className="absolute left-28" style={{ backgroundColor: "Silver" }}>
        ~ゲーム設定~
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
          <label>プレイヤー人数(3~100人)</label>
          <input
            type="number"
            name="participants_num"
            min="3"
            max="100"
            value={selectPnum}
            onInput={handleInputP}
          ></input>
          <label>ラウンド数</label>
          <input
            type="number"
            name="round_num"
            min="1"
            max="100"
            value={selectRnum}
            onInput={handleInputR}
          ></input>
          <label>質問回数</label>
          <input
            type="number"
            name="question_num"
            min="3"
            max="100"
            value={selectQnum}
            onInput={handleInputQ}
          ></input>

          <Button
            onClick={handleClick}
            style={{ fontSize: 18, backgroundColor: "Gainsboro" }}
            className="hover: text-black"
          >
            <NavigateNextIcon />
            決定
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Setting1Page;
