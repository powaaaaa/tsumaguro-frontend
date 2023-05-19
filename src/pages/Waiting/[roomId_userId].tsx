import { useRouter } from "next/router";
import Link from "next/link";

function WaitingPage() {
  const router = useRouter();
  const roomId = router.query.roomId_userId;
  return (
    <div>
      <h1>参加者待機(動的生成)[roomId: {roomId}]</h1>

      <Link href="/Game/Playing/1">ゲームプレイへ</Link>
    </div>
  );
}

export default WaitingPage;
