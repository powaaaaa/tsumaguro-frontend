import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getGameStatus } from "../axios";
import axios from "axios";
import { useRecoilState } from "recoil";
import { idState } from "../Setting1";
import { room_idState } from "../Setting2";

function WaitingPage() {
  const router = useRouter();
  const [id, setId] = useRecoilState(idState);
  const [room_id, setRoom_id] = useRecoilState(room_idState);

  const indexCustomNav = async (room_id: number) => {
    const status: number = await getGameStatus();

    switch (status) {
      case 0:
        router.push({
          pathname: `/Waiting/${room_id}`,
        });
        break;
      case 1:
        router.push({
          pathname: `/Game/Position/${room_id}`,
        });
        break;
      case 2:
        router.push({
          pathname: `/Game/Questioning/${room_id}`,
        });
      case 3:
        router.push({
          pathname: `/Game/Answering/${room_id}`,
        });
        break;
      case 4:
        router.push({
          pathname: `/Game/Voting/${room_id}`,
        });
        break;
      case 5:
        router.push({
          pathname: `/Game/Voting_result/${room_id}`,
        });
        break;
      case 6:
        router.push({
          pathname: `/Round_result/${room_id}`,
        });
        break;
      case 7:
        router.push({
          pathname: `/Game/Position/${room_id}`,
        });
        break;
      case 8:
        router.push({
          pathname: `/Final_result/${room_id}`,
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
      // postCookie(str);
      // const Ids: IdType = await getId();
      const Ids = room_id;
      console.log(Ids);
      indexCustomNav(Ids);
    } catch (e) {
      console.error("room_id, user_idの取得に失敗しました", e);
      return;
    }
  };

  const [dataList, setDataList] = useState<string[]>([]);

  useEffect(() => {
    const axiosData = () => {
      axios(`http://localhost:8000/waiting/1`)
        .then((response) => response.data())
        .then((data) => {
          setDataList((prevDataList) => [...prevDataList, data]);
        })
        .catch((error) => {
          console.log("Ajaxリクエスト中にエラーが発生しました", error);
        });
    };

    const interval = setInterval(axiosData, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  //   return (
  //     <div>
  //       {dataList.map((data, index) => (
  //         <div key={index}>{data}</div>
  //       ))}
  //     </div>
  //   );
  // };

  return (
    <div>
      <h1>参加者待機(動的生成)</h1>
      <div>現在の参加者を表示</div>

      <button type="button" onClick={indexCustom}>
        ゲームプレイへ
      </button>
    </div>
  );
}

export default WaitingPage;
