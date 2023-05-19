import { useRouter } from "next/router";
import Link from "next/link";

function PlayingPage() {
  const router = useRouter();
  const roomId = router.query.roomId_userId;
  return (
    <div>
      <h1>質問(動的生成)[roomId: {roomId}]</h1>

      <div>テキストボックスに質問を入力(全員の質問が揃うまで進行なし)</div>
      <Link href="/Game/Answering/1">答え合わせへ</Link>
    </div>
  );
}

export default PlayingPage;
