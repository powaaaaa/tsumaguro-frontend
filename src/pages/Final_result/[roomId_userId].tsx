import { useRouter } from "next/router";
import Link from "next/link";

function RoomDetail() {
  const router = useRouter();
  const roomId = router.query.roomId;
  return (
    <div>
      <h1>最終結果(動的生成)[roomId: {roomId}]</h1>

      <div>全ての得点を表示</div>
      <Link href="/">ホームへ</Link>
    </div>
  );
}

export default RoomDetail;
