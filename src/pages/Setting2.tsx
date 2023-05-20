import { session2 } from "./axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
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

  const handleRouterPush = useCallback(() => {
    router.push(`/Waiting/${room_id}`);
  }, [room_id, router]);

  useEffect(() => {
    console.log(room_id);
    if (room_id !== 0) {
      handleRouterPush();
    }
  }, [room_id, handleRouterPush]);

  async function postRoomInfo({
    owner_id: owner_id,
    participants_num: participants_num,
    round_num: round_num,
    questions_num: questions_num,
  }: session2) {
    try {
      const url = "http://localhost:8000/create_room";
      const res = await axios.post(url, {
        owner_id,
        participants_num,
        round_num,
        questions_num,
      });
      setRoom_id(res.data.room_id);
      console.log("res:", res.data.room_id);
      console.log("room_id: ", room_id);

      if (room_id !== 0) {
        router.push(`/Waiting/${room_id}`);
      }
      return;
    } catch (e) {
      console.error("post出来ませんでした\n", e);
      return;
    }
  }

  const handleClick = () => {
    const session: session2 = {
      owner_id: id,
      participants_num: selectPnum,
      round_num: selectRnum,
      questions_num: selectQnum,
    };
    postRoomInfo(session);
    return;
  };

  return (
    <div>
      <h2>Setting Page</h2>
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
            min="1"
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
    </div>
  );
}

export default Setting1Page;
