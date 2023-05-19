import { useRouter } from "next/router";
import Link from "next/link";

function RoomDetail() {
  const router = useRouter();
  const roomId = router.query.roomId;
  // room_id, user_idを取得
  const room_id = 1;
  const user_id = 01;
  return (
    <div>
      <h1>ルーム入室(動的生成)[roomId: {roomId}]</h1>
      <div>ユーザー名を登録</div>

      <Link href="">参加者待機へ</Link>
    </div>
  );
}

export default RoomDetail;
