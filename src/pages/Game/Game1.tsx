import Link from "next/link";

function Game1Page() {
  return (
    <div>
      <h2>Game1 Page(ワード配り？)</h2>

      <Link href="/Game/Game2">質問する(/Game2Pageへ)</Link>
    </div>
  );
}

export default Game1Page;
