import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getGameStatus } from "../axios";
import axios from "axios";
import { useRecoilState } from "recoil";
import { idState } from "../Setting1";
import { room_idState } from "../Setting2";

// ゲーミングステータスを取得
function WaitingPage() {
  const router = useRouter();
  const [id, setId] = useRecoilState(idState);
  const [room_id, setRoom_id] = useRecoilState(room_idState);
  let startFlag = true; // ここ
  let owner_id = 0;

  const getGameStatus = async () => {
    const response = await axios.get(`http://localhost:8000/room/${room_id}`);
    const resData = response.data;
    const status = resData.game_status;
    owner_id = resData.owner_id;
    if (owner_id === id) {
      startFlag = true;
    }
    return status;
  };

  // 分岐
  const indexCustomNav = async (room_id: number) => {
    // const status = await getGameStatus();
    const status: number = 1; // ここ

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
    if (startFlag) {
      indexCustomNav(room_id);
    } else {
      console.log("this is false");
      return startFlag;
    }
  };

  // 1秒間に1回、waiting/[user_id]にpostして人数確認
  const [resCount, setResCount] = useState(0);

  useEffect(() => {
    const fetchGetWaiting = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/waiting/${room_id}`
        );
        const resData = response.data as object[];
        setResCount(resData.length);
        console.log("rescount", resCount);
      } catch (e) {
        console.error("リクエスト中にエラーが発生しました。", e);
      }
    };

    const interval = setInterval(fetchGetWaiting, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // 人数が揃ったらゲーム開始
  const [partyNum, setPartyNum] = useState(0);
  useEffect(() => {
    const fetchPostWaiting = async () => {
      try {
        const response = await axios.post(
          `http://localhost:8000/room/${room_id}`
        );
        const resData = response.data;
        setPartyNum(resData.participants_num);
      } catch (e) {
        console.error("post中にエラーが発生しました。", e);
      }
    };

    if (partyNum === resCount) {
    }
  }, [resCount]);

  return (
    <div>
      <h1>参加者待機(動的生成)</h1>
      <div>現在の参加者を表示</div>

      <button type="button" onClick={indexCustom}>
        ゲームプレイへ
      </button>
    </div>
  );
}

export default WaitingPage;
