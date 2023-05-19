import { useRouter } from "next/router";
import Link from "next/link";

function PlayingPage() {
  const router = useRouter();
  const roomId = router.query.roomId_userId;
  return (
    <div>
      <h1>答え合わせ(動的生成)[roomId: {roomId}]</h1>

      <Link href="/Game/Voting/1">インサイダー投票へ</Link>
    </div>
  );
}

export default PlayingPage;
