import { idState } from "@/pages/Setting1";
import { room_idState } from "@/pages/Setting2";
import { session3 } from "@/pages/axios";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";

function AnsweringPage() {
  const router = useRouter();

  // ゲーミングステータスを取得
  const [id, setId] = useRecoilState(idState);
  const [room_id, setRoom_id] = useRecoilState(room_idState);
  let insider_id = 0; //number
  let answer = ""; //string
  let genre = ""; //string
  let qer_id = 0;
  let question = "";
  let q_toAnswer = "";
  let participants_num = 0;
  let numBoolean = false;

  const getGameStatus = async () => {
    const response = await axios.get(
      `http://localhost:8000/position/${room_id}`
    );
    const resData = response.data;
    const status = resData.game_status;
    insider_id = resData.insider_id; // number
    answer = resData.answer; // string
    genre = resData.genre; // string
    participants_num = resData.partisipants_num;
    console.log("resData", resData);
    return;
  };
  getGameStatus();

  // ユーザー情報(id, room_id)をpost

  // インサイダー区別
  const job = Number(insider_id) === id;

  // 分岐
  const indexCustomNav = async (room_id: number) => {
    // const status = await getGameStatus();
    const status: number = 3; // ここ

    switch (status) {
      case 0:
        router.push({
          pathname: `/Waiting/${room_id}`,
        });
        break;
      case 1:
        router.push({
          pathname: `/Game/Position/${room_id}`,
        });
        break;
      case 2:
        router.push({
          pathname: `/Game/Questioning/${room_id}`,
        });
      case 3:
        router.push({
          pathname: `/Game/Answering/${room_id}`,
        });
        break;
      case 4:
        router.push({
          pathname: `/Game/Voting/${room_id}`,
        });
        break;
      case 5:
        router.push({
          pathname: `/Game/Voting_result/${room_id}`,
        });
        break;
      case 6:
        router.push({
          pathname: `/Round_result/${room_id}`,
        });
        break;
      case 7:
        router.push({
          pathname: `/Game/Position/${room_id}`,
        });
        break;
      case 8:
        router.push({
          pathname: `/Final_result/${room_id}`,
        });
        break;
      default:
        break;
    }
  };

  const indexCustom = async () => {
    if (numBoolean) {
      indexCustomNav(room_id);
    } else {
      alert("全員の質問が終了していません。");
      return false;
    }
  };

  return (
    <div>
      <h1>答え合わせ(動的生成)</h1>

      <div>お題と答えが一致するか表示</div>
      <button type="button" onClick={indexCustom}>
        インサイダー投票へ
      </button>
    </div>
  );
}

export default AnsweringPage;
