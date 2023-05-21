// postが残ってる

import { useRouter } from "next/router";
import Link from "next/link";
import Button from "@mui/material/Button";
import CommentIcon from "@mui/icons-material/Comment";
import { useRecoilState } from "recoil";
import { idState } from "../../Setting1";
import { room_idState } from "../../Setting2";
import axios from "axios";

function PositionPage() {
  const router = useRouter();
  const roomId = router.query.roomId_userId;

  // ゲーミングステータスを取得
  const [id, setId] = useRecoilState(idState);
  const [room_id, setRoom_id] = useRecoilState(room_idState);
  let startFlag = true; // ここ
  let insider_id = 0;
  let answer = "";
  let genre = "";

  const getGameStatus = async () => {
    const response = await axios.get(
      `http://localhost:8000/position/${room_id}`
    );
    const resData = response.data;
    const status = resData.game_status;
    insider_id = resData.insider_id; // number
    answer = resData.answer; // string
    genre = resData.genre; // string
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
    const status: number = 2; // ここ

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
    var str = document.cookie;
    try {
      indexCustomNav(room_id);
    } catch (e) {
      console.error("room_idの取得に失敗しました", e);
      return;
    }
  };

  return (
    <div>
      <h1 style={{ fontSize: "50px" }}>Position(動的生成)[roomId: {roomId}]</h1>
      <div className="absolute left-28" style={{ backgroundColor: "Silver" }}>
        ~役職公開~
      </div>
      <div
        className="h-28"
        style={{
          backgroundColor: "Silver",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          あなたは
          {job ? (
            <div style={{ color: "red" }}>インサイダー</div>
          ) : (
            <div style={{ color: "red" }}>市民</div>
          )}
          です。
        </div>
        <br />
      </div>

      <div
        className="h-28"
        style={{
          backgroundColor: "Silver",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {job ? (
          <div
            style={{
              fontSize: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            今回のキーワードは
            <div style={{ color: "red" }}>{answer}</div>
            です。
          </div>
        ) : (
          <div
            style={{
              fontSize: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            今回のジャンルは
            <div style={{ color: "red" }}>{genre}</div>
            です。
          </div>
        )}
      </div>

      <div
        className="h-16"
        style={{
          backgroundColor: "Silver",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Button
          onClick={indexCustom}
          style={{ fontSize: 18, backgroundColor: "Gainsboro" }}
          className="hover: text-black"
        >
          <CommentIcon sx={{ fontSize: 40 }} />
          質問へ
        </Button>
      </div>
    </div>
  );
}

export default PositionPage;
