import { useRouter } from "next/router";
import Link from "next/link";

function RoomDetail() {
  const router = useRouter();
  const roomId = router.query.roomId;
  // room_idを取得
  const room_id = 1;
  const user_id = 1;
  return (
    <div>
      <h1>インサイダー投票結果(動的生成)[roomId: {roomId}]</h1>

      <div>投票結果を表示</div>
      <Link
        href={{
          pathname: `/Game/Round_result/${room_id}`,
          query: { id: user_id },
        }}
      >
        最終結果へ
      </Link>
    </div>
  );
}

export default RoomDetail;
