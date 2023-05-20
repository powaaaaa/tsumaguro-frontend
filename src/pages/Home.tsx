import Link from "next/link";

function HomePage() {
  return (
    <div className="">
      <h1 className="">Home Page</h1>
      <div>ルール説明とルーム作成</div>

      <input type="text" id="userName" name=""></input>
      <br />
      <Link href="/Setting1" className="border-solid border-2 rounded-md">
        ルームを作る(/Settingへ)
      </Link>
    </div>
  );
}

export default HomePage;
