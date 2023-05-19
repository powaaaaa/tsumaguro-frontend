import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>

      <Link href="/Matching" className="border-solid border-2 rounded-md">
        ゲームを始める(/MathingPageへ)
      </Link>
    </div>
  );
}

export default HomePage;
