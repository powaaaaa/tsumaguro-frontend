import { useRouter } from "next/router";
import Link from "next/link";

function PlayingPage() {
  const router = useRouter();
  const roomId = router.query.roomId_userId;
  return (
    <div>
      <h1>インサイダー投票(動的生成)[roomId: {roomId}]</h1>

      <Link href="/Game/Round_result/1">ラウンド結果へ</Link>
    </div>
  );
}

export default PlayingPage;
