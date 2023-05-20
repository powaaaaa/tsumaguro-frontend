import { useRouter } from "next/router";
import Link from "next/link";

function PlayingPage() {
  const router = useRouter();
  const roomId = router.query.roomId_userId;
  // room_id, user_idを取得
  const room_id = 1;
  const user_id = 1;
  return (
    <div>
      <h1>答え合わせ(動的生成)[roomId: {roomId}]</h1>

      <div>お題と答えが一致するか表示</div>
      <Link
        href={{
          pathname: `/Game/Voting/${room_id}`,
          query: { id: user_id },
        }}
      >
        インサイダー投票へ
      </Link>
    </div>
  );
}

export default PlayingPage;
