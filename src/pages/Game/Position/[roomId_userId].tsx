import { useRouter } from "next/router";
import Link from "next/link";

function PositionPage() {
  const router = useRouter();
  const roomId = router.query.roomId_userId;
  return (
    <div>
      <h1>役職配布(動的生成)[roomId: {roomId}]</h1>

      <div>インサイダーにお題を公開</div>
      <Link href="/Game/Questioning/1">質問へ</Link>
    </div>
  );
}

export default PositionPage;
