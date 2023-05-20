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
      <h1>インサイダー投票(動的生成)[roomId: {roomId}]</h1>

      <div>誰がインサイダーか投票(お題を間違えた場合、表示されない)</div>
      <Link
        href={{
          pathname: `/Game/Voting_result/${room_id}`,
          query: { id: user_id },
        }}
      >
        インサイダー投票結果へ
      </Link>
    </div>
  );
}

export default PlayingPage;
