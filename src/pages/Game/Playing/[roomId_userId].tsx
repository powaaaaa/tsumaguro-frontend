import { useRouter } from "next/router";
import Link from "next/link";

function PlayingPage() {
  const router = useRouter();
  const roomId = router.query.roomId_userId;
  return (
    <div>
      <h1>ゲームプレイ(動的生成)[roomId: {roomId}]</h1>

      <Link href="/Game/Answering/1">答え合わせへ</Link>
    </div>
  );
}

export default PlayingPage;
