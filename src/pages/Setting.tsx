import Link from "next/link";

function SettingPage() {
  // room_idを取得
  const room_id = 1;

  return (
    <div>
      <h2>Setting Page</h2>
      <div>
        ルーム作成
        <br />
        ユーザー名、部屋名、プレイヤー人数、質問回数、ラウンド数を設定
      </div>

      <Link href={`/Room/${room_id}`}>ルーム入室</Link>
    </div>
  );
}

export default SettingPage;
