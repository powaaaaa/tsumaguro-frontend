import { useRouter } from "next/router";
import { useState } from 'react';
import Link from "next/link";
import { IdType, postCookie } from "@/pages/axios";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ForwardIcon from '@mui/icons-material/Forward';
import MessageIcon from '@mui/icons-material/Message';
import ReplyIcon from "@mui/icons-material/Reply";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


function PlayingPage() {

  const [kenri, setkenri] = useState(1);

  const kenrihakudatu = () => {
    setkenri(0);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  const onClike = () => {
    // alert(document.cookie.match(/PHPSESSID=[^;]+/));
    // alert(/SESS\w*ID=([^;]+)/i.test(document.cookie) ? RegExp.$1 : false);
    var str = document.cookie;
    alert(str);
    return;
  };

  const router = useRouter();
  const roomId = router.query.roomId_userId;
  
  const [question, setQuestion] = useState('');

  const handleButtonClick = () => {
    kenrihakudatu
    setQuestion(''); // テキストボックスの文字をクリア
  };

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
      <div className="h-56" style={{backgroundColor:'Silver',display: 'flex', justifyContent: 'center', alignItems: 'center' , gap: '20px' }} >
      <TextField
          id="outlined-multiline-static"
          label="質問"
          multiline
          rows={6}
          defaultValue="はいかいいえで答えられる質問"
          value={question} // テキストボックスの値を設定
          onChange={(e) => setQuestion(e.target.value)}
        />
        </div>
        <div  className="h-16" style={{backgroundColor:'Silver',display: 'flex', justifyContent: 'center', alignItems: 'center' , gap: '20px' }} >
        {Number(kenri)===1 ? (
        <Button  className="hover: text-black" style={{fontSize:18 ,backgroundColor:'Gainsboro'}} onClick={handleButtonClick} >
          <ForwardIcon sx={{ fontSize: 30 }} />
          送信
        </Button>):(
          <Button  className="hover: text-black" style={{fontSize:18 ,backgroundColor:'Gray'}}>
          <ForwardIcon sx={{ fontSize: 30 }} />
          送信済み
        </Button>
        )}
        <Button
        variant="contained"
        className="hover: text-black"
        style={{ fontSize:18 ,backgroundColor: "Gainsboro" }}
        onClick={handleOpen} >
          <MessageIcon sx={{ fontSize: 30 }} />
          返答
          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} onClick={handleModalClick}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  質問の返答
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  ここにたくさん表示
                </Typography>
                <br/>
                <Button
                  onClick={handleClose}
                  variant="contained"
                  className="hover: text-black"
                  style={{ backgroundColor: "Gainsboro" }}
                >
                  <ReplyIcon sx={{ fontSize: 30 }} />
                  閉じる
                </Button>
              </Box>
          </Modal>
        </Button>
      </div>


    </div>
  );
}

export default PlayingPage;
