import { idState } from "@/pages/Setting1";
import { room_idState } from "@/pages/Setting2";
import { session3 } from "@/pages/axios";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";

function QuestionPage() {
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

  // 質問をpost
  const [resCount, setResCount] = useState(0);
  const questioningWaiting = async ({
    question: question,
    room_id: room_id,
    user_id: id,
    question_round: qestion_round,
    question_num: question_num,
  }: session3) => {
    try {
      const url = `http://localhost:8000/questioning/${room_id}`;
      const res = await axios.post(url, {
        question: question,
        room_id: room_id,
        user_id: id,
        question_round: qestion_round,
        question_num: question_num,
      });
      const resData = res.data as object[];
      qer_id = res.data.user_id; // 質問者のuser_id
      question = res.data.question; // 質問内容
      q_toAnswer = res.data.answer; // 質問に対する答え(Y/N/K)
      setResCount(resData.length); // 質問した人の数
      console.log(question);
      return;
    } catch (e) {
      console.error("リクエスト中にエラーが発生しました。\n", e);
      return;
    }
  };

  // post
  useEffect(() => {
    const fetchGetWaiting = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/waiting/${room_id}`
        );
        const resData = response.data as object[];

        const userNames = resData.map((item: any) => item.user_name);
        console.log("user_names", userNames);

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

  // post
  useEffect(() => {
    const fetchGetWaiting = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/answering/${room_id}`
        );
        const resData = response.data as object[];
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

  numBoolean = participants_num === resCount;

  // 全員が質問し終わったらanswerへ

  return (
    <div>
      <h1>質問(動的生成)</h1>

      <div>テキストボックスに質問を入力(全員の質問が揃うまで進行なし)</div>

      <button type="button" onClick={indexCustom}>
        答え合わせへ
      </button>
    </div>
  );
}

export default QuestionPage;
