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
      <h1>質問(動的生成)[roomId: {roomId}]</h1>

      <div>テキストボックスに質問を入力(全員の質問が揃うまで進行なし)</div>
      <Link
        href={{
          pathname: `/Game/Answering/${room_id}`,
          query: { id: user_id },
        }}
      >
        答え合わせへ
      </Link>
    </div>
  );
}

export default PlayingPage;
