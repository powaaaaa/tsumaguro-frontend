import { useRouter } from "next/router";
import Link from "next/link";

function RoundResultPage() {
  const router = useRouter();
  const roomId = router.query.roomId;
  // room_idを取得
  const room_id = 1;
  const user_id = 1;
  return (
    <div>
      <h1>ラウンド結果(動的生成)[roomId: {roomId}]</h1>

      <div>ラウンドの結果を表示</div>
      <Link
        href={{ pathname: `/Final_result/${room_id}`, query: { id: user_id } }}
      >
        最終結果へ
      </Link>
    </div>
  );
}

export default RoundResultPage;
