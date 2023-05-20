import { useRouter } from "next/router";
import Link from "next/link";
import { IdType, postCookie } from "@/pages/axios";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ReplyIcon from '@mui/icons-material/Reply';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const host = 1;

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
      <h1 style={{ fontSize: "50px", }}>Answering(動的生成)[roomId: {roomId}]</h1>

      <div className="absolute left-28" style={{backgroundColor:'Silver'}}>
      ~答え合わせ~
      </div>

      <div  className="h-72" style={{backgroundColor:'Silver',display: 'flex', justifyContent: 'center', alignItems: 'center' , gap: '20px' }}>
      {Number(host) === 1 ? (
      <div style={{gap:'20px', fontSize: "30px" ,display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{fontSize: 30}}>
          話し合って決まったキーワードを入力してください。
        </div>
          <TextField id="outlined-basic" label="答え" variant="outlined">

          </TextField>


          <div>
        <Button type="button"  style={{fontSize:18 ,backgroundColor:'Gainsboro'}} className="hover: text-black">
          <NavigateNextIcon sx={{ fontSize: 40 }}/>
          決定
        </Button>
      </div>
      </div>
    ) : (
      <div style={{ fontSize: "30px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      解答権はホストが所持しています。話し合ってください。
      </div>
      )}
       
      </div>
      
    </div>
  );
}

export default PlayingPage;
