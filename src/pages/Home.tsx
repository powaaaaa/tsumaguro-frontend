import Link from "next/link";

function HomePage() {
  const onClike = () => {
    // alert(document.cookie.match(/PHPSESSID=[^;]+/));
    // alert(/SESS\w*ID=([^;]+)/i.test(document.cookie) ? RegExp.$1 : false);
    var str = document.cookie;
    alert(str);
    return;
  };
  return (
    <div className="">
      <h1 className="">Home Page</h1>
      <button type="button" onClick={onClike}>
        cookie
      </button>
      <div>ルール説明とルーム作成</div>
      <br />
      <Link href="/Setting" className="border-solid border-2 rounded-md">
        ルームを作る(/Settingへ)
      </Link>
    </div>
  );
}

export default HomePage;
