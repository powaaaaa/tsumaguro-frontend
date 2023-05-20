import Link from "next/link";
import { IdType, postCookie } from "./getIds";
import { useRouter } from "next/router";

function SettingPage() {
  const router = useRouter();
  const indexCustomNav = ({ room_id, user_id }: IdType) => {
    const status: number = 1;

    switch (status) {
      case 0:
        router.push({
          pathname: `/Waiting/${room_id}`,
          query: { id: user_id },
        });
        break;
      case 1:
        router.push({
          pathname: `/Game/Position/${room_id}`,
          query: { id: user_id },
        });
        break;
      case 2:
        router.push({
          pathname: `/Game/Questioning/${room_id}`,
          query: { id: user_id },
        });
      case 3:
        router.push({
          pathname: `/Game/Answering/${room_id}`,
          query: { id: user_id },
        });
        break;
      case 4:
        router.push({
          pathname: `/Game/Voting/${room_id}`,
          query: { id: user_id },
        });
        break;
      case 5:
        router.push({
          pathname: `/Game/Voting_result/${room_id}`,
          query: { id: user_id },
        });
        break;
      case 6:
        router.push({
          pathname: `/Round_result/${room_id}`,
          query: { id: user_id },
        });
        break;
      case 7:
        router.push({
          pathname: `/Final_result/${room_id}`,
          query: { id: user_id },
        });
        break;
      case 8:
        router.push({
          pathname: `/Final_result/${room_id}`,
          query: { id: user_id },
        });
        break;
      default:
        break;
    }
  };

  const indexCustom = async () => {
    var str = document.cookie;
    console.log("aa");
    try {
      postCookie(str);
      // const Ids: IdType = await getId();
      const Ids: IdType = { room_id: "a", user_id: "b" };
      console.log(Ids);
      indexCustomNav(Ids);
    } catch (e) {
      console.error("room_id, user_idの取得に失敗しました", e);
      return;
    }
  };

  return (
    <div>
      <h2>Setting Page</h2>
      <div>
        ルーム作成
        <br />
        ユーザー名、部屋名、プレイヤー人数、質問回数、ラウンド数を設定
      </div>

      <button type="button" onClick={indexCustom}>
        ルーム作成へ
      </button>
    </div>
  );
}

export default SettingPage;
