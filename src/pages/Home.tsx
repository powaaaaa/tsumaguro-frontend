import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>

      <Link href="/Setting" className="border-solid border-2 rounded-md">
        ゲームを始める(/Settingへ)
      </Link>
    </div>
  );
}

export default HomePage;
