import { useRouter } from "next/router";
import Link from "next/link";
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
  let owner_id = 0;

  const getGameStatus = async () => {
    const response = await axios.get(`http://localhost:8000/room/${room_id}`);
    const resData = response.data;
    const status = resData.game_status;
    console.log("status", status);
    return;
  };
  getGameStatus();

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
      // const Ids: IdType = await getId();
    } catch (e) {
      console.error("room_idの取得に失敗しました", e);
      return;
    }
  };

  return (
    <div>
      <h1>役職配布(動的生成)[roomId: {roomId}]</h1>

      <div>インサイダーにお題を公開</div>
      <button type="button" onClick={indexCustom}>
        質問へ
      </button>
    </div>
  );
}

export default PositionPage;
