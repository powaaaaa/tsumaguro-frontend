import Link from "next/link";
import * as React from 'react';
import Container from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';
import CookieIcon from '@mui/icons-material/Cookie';
import ReplyIcon from '@mui/icons-material/Reply';
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function SettingPage() {
  // room_idを取得
  const room_id = 1;

  return (
    <div>
    <div>
      <h2 style={{ fontSize: '50px' }}>
        Setting Page
      </h2>
      <div>
        ルーム作成
        <br />
        ユーザー名、部屋名、プレイヤー人数、質問回数、ラウンド数を設定
      </div>

      <Link href={`/Room/${room_id}`}>ルーム入室</Link>
    </div>

    <div className="abusolute h-72"></div>

<div>
  <Button variant="contained" style={{backgroundColor:'Gainsboro'}}  className="absolute left-10 bottom-10  text-black">
<Link href={"http://localhost:3000/"}>
  <ReplyIcon sx={{ fontSize: 40 }}  />
ホーム画面に戻る
</Link>
  </Button>
</div>

</div>
  );
}

export default SettingPage;
