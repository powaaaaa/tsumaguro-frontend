import { useRouter } from "next/router";
import Link from "next/link";
import { IdType, postCookie } from "@/pages/axios";
import Button from "@mui/material/Button";
import CommentIcon from '@mui/icons-material/Comment';

const job = 1;

function PositionPage() {
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
      <h1 style={{ fontSize: "50px", }}>Position(動的生成)[roomId: {roomId}]</h1>
      <div className="absolute left-28" style={{backgroundColor:'Silver'}}>
        ~役職公開~
      </div>
      <div  className="h-28" style={{backgroundColor:'Silver',display: 'flex', justifyContent: 'center', alignItems: 'center' , gap: '20px' }}>

      <div style={{ fontSize: "20px",display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        あなたは
      <div style={{color:'red'}} >
          (ここに値を代入)
        </div>
        です。
      </div>
      <br/>
      </div>

      <div  className="h-28" style={{backgroundColor:'Silver',display: 'flex', justifyContent: 'center', alignItems: 'center' , gap: '20px' }}>
      {Number(job) === 1 ? (
      <div style={{ fontSize: "30px" ,display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        今回のキーワードは
        <div style={{color:'red'}} >
        (ここに値を代入)
        </div>
        です。
      </div>
    ) : (
      <div style={{ fontSize: "30px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        今回のジャンルは
        <div style={{color:'red'}} >
          (ここに値を代入)
        </div>
          です。
      </div>
    )}
      </div>
      

      <div className="h-16" style={{backgroundColor:'Silver',display: 'flex', justifyContent: 'center', alignItems: 'center' , gap: '20px' }}>
      <Button onClick={indexCustom} style={{fontSize:18 ,backgroundColor:'Gainsboro'}} className="hover: text-black">
        <CommentIcon sx={{ fontSize: 40 }}/>
        質問へ
      </Button>
      </div >

    </div>
  );
}

export default PositionPage;
