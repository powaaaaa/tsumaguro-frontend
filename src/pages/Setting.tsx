import Link from "next/link";

function SettingPage() {
  return (
    <div>
      <h2>Setting Page</h2>
      <div>ルーム作成</div>

      <Link href="/Room/1">ルーム入室</Link>
    </div>
  );
}

export default SettingPage;
