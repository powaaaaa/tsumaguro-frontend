import { useRouter } from "next/router";
import Link from "next/link";
import indexCustom from "../indexCustom";

function RoomDetail() {
  const router = useRouter();
  const roomId = router.query.roomId;
  // room_id, user_idを取得
  const room_id = 1;
  const user_id = 1;

  // return (
  //   <div>
  //     <h1>ルーム入室(動的生成)[roomId: {roomId}]</h1>
  //     <div>ユーザー名を登録</div>

  //     <Link href={{ pathname: `/Waiting/${room_id}`, query: { id: user_id } }}>
  //       参加者待機へ
  //     </Link>
  //   </div>
  // );
  return;
}

export default RoomDetail;
