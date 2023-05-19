import { useRouter } from "next/router";
import Link from "next/link";

function RoomDetail() {
  const router = useRouter();
  const roomId = router.query.roomId;
  return (
    <div>
      <h1>ルーム入室(動的生成)[roomId: {roomId}]</h1>

      <Link href="/Waiting/1">参加者待機へ</Link>
    </div>
  );
}

export default RoomDetail;
