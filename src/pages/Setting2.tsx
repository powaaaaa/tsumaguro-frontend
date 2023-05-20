import { IdType, postCookie, getGameStatus, session } from "./axios";
import { useRouter } from "next/router";
import postcss from "postcss";
import { useState } from "react";

function Setting1Page() {
  const router = useRouter();

  const [selectPnum, setSelectedPnum] = useState(3);
  const [selectQnum, setSelectQnum] = useState(3);
  const [selectRnum, setSelectRnum] = useState(1);

  const handleInputP = (event: React.MouseEvent<HTMLInputElement>) => {
    let value = event.currentTarget.value;
    // 数値が範囲内かチェックする
    if (Number(value) < 0) {
      value = "3";
    } else if (Number(value) > 100) {
      value = "100";
    }
    setSelectedPnum(Number(value));
  };

  const handleInputR = (event: React.MouseEvent<HTMLInputElement>) => {
    let value = event.currentTarget.value;
    // 数値が範囲内かチェックする
    if (Number(value) < 0) {
      value = "1";
    } else if (Number(value) > 100) {
      value = "100";
    }
    setSelectRnum(Number(value));
  };

  const handleInputQ = (event: React.MouseEvent<HTMLInputElement>) => {
    let value = event.currentTarget.value;
    // 数値が範囲内かチェックする
    if (Number(value) < 0) {
      value = "3";
    } else if (Number(value) > 100) {
      value = "100";
    }
    setSelectQnum(Number(value));
  };

  const posts = async (inputName: string) => {
    const session: session = {
      user_name: inputName,
      session_id: document.cookie,
    };
    postCookie(session);
    router.push(`/Setting2`);
  };

  const handleClick = () => {
    router.push(`/Waiting`);
    return;
  };

  return (
    <div>
      <h2>Setting Page</h2>
      <div>ルーム作成2</div>

      <form>
        <label>
          プレイヤー人数
          <input
            type="number"
            name="participants_num"
            min="3"
            max="100"
            value={selectPnum}
            onInput={handleInputP}
          ></input>
        </label>
        <label>
          ラウンド数
          <input
            type="number"
            name="round_num"
            min="3"
            max="100"
            value={selectRnum}
            onInput={handleInputR}
          ></input>
        </label>
        <label>
          質問回数
          <input
            type="number"
            name="question_num"
            min="3"
            max="100"
            value={selectQnum}
            onInput={handleInputQ}
          ></input>
        </label>

        <button type="button" onClick={handleClick}>
          決定
        </button>
      </form>
    </div>
  );
}

export default Setting1Page;
