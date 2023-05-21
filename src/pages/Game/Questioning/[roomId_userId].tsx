import { useRouter } from "next/router";
import Link from "next/link";
import { IdType, postCookie } from "@/pages/axios";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ForwardIcon from '@mui/icons-material/Forward';

function PlayingPage() {
  const router = useRouter();
  const roomId = router.query.roomId_userId;

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
          pathname: `/Game/Position/${room_id}`,
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
      <h1 style={{ fontSize: "50px", }}>Questioning(動的生成)[roomId: {roomId}]</h1>
      
      <div className="absolute left-28" style={{backgroundColor:'Silver'}}>
      ~質問タイム~
      </div>
      <div  className="h-56" style={{backgroundColor:'Silver',display: 'flex', justifyContent: 'center', alignItems: 'center' , gap: '20px' }} >
      <TextField className="absolute left-20 top-32"
          id="outlined-multiline-static"
          label="質問"
          multiline
          rows={6}
          defaultValue="はいかいいえで答えられる質問"
        />
        </div>
        <div  className="h-16" style={{backgroundColor:'Silver',display: 'flex', justifyContent: 'center', alignItems: 'center' , gap: '20px' }} >
        <Button  className="absolute left-48 hover: text-black" style={{fontSize:18 ,backgroundColor:'Gainsboro'}}>
          <ForwardIcon sx={{ fontSize: 30 }} />
          送信
        </Button>
        </div>


    </div>
  );
}

export default PlayingPage;
