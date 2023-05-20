import { useRouter } from "next/router";
import Link from "next/link";

function PositionPage() {
  const router = useRouter();
  const roomId = router.query.roomId_userId;
  // room_id, user_idを取得
  const room_id = 1;
  const user_id = 1;
  return (
    <div>
      <h1>役職配布(動的生成)[roomId: {roomId}]</h1>

      <div>インサイダーにお題を公開</div>
      <Link
        href={{
          pathname: `/Game/Questioning/${room_id}`,
          query: { id: user_id },
        }}
      >
        質問へ
      </Link>
    </div>
  );
}

export default PositionPage;
