import { useRouter } from "next/router";
import Link from "next/link";

function WaitingPage() {
  const router = useRouter();
  const roomId = router.query.roomId_userId;
  // room_id, user_idを取得
  const room_id = 1;
  const user_id = 1;
  return (
    <div>
      <h1>参加者待機(動的生成)[roomId: {roomId}]</h1>
      <div>現在の参加者を表示</div>

      <Link
        href={{
          pathname: `/Game/Position/${room_id}`,
          query: { id: user_id },
        }}
      >
        ゲームプレイへ
      </Link>
    </div>
  );
}

export default WaitingPage;
