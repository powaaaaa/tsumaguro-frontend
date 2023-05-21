import { idState } from "../../Setting1";
import { room_idState } from "../../Setting2";
import { session3 } from "../../axios";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ForwardIcon from '@mui/icons-material/Forward';
import MessageIcon from '@mui/icons-material/Message';
import ReplyIcon from "@mui/icons-material/Reply";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";

function QuestionPage() {
  const router = useRouter();

function QuestionPage() {
  const router = useRouter();
  // ゲーミングステータスを取得
  const [id, setId] = useRecoilState(idState);
  const [room_id, setRoom_id] = useRecoilState(room_idState);
  let insider_id = 0; //number
  let answer = ""; //string
  let genre = ""; //string
  let qer_id = 0;
  let question = "";
  let q_toAnswer = "";
  let participants_num = 0;
  let numBoolean = false;
  
  // 分岐
  const indexCustomNav = async (room_id: number) => {
    // const status = await getGameStatus();
    const status: number = 3; // ここ

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
  
  // インサイダー区別
  const job = Number(insider_id) === id;

  // 質問をpost
  const [resCount, setResCount] = useState(0);
  const questioningWaiting = async ({
    question: question,
    room_id: room_id,
    user_id: id,
    question_round: qestion_round,
    question_num: question_num,
  }: session3) => {
    try {
      const url = `http://localhost:8000/questioning/${room_id}`;
      const res = await axios.post(url, {
        question: question,
        room_id: room_id,
        user_id: id,
        question_round: qestion_round,
        question_num: question_num,
      });
      const resData = res.data as object[];
      qer_id = res.data.user_id; // 質問者のuser_id
      question = res.data.question; // 質問内容
      q_toAnswer = res.data.answer; // 質問に対する答え(Y/N/K)
      setResCount(resData.length); // 質問した人の数
      console.log(question);
      return;
    } catch (e) {
      console.error("リクエスト中にエラーが発生しました。\n", e);
      return;
    }
  };
  
  numBoolean = participants_num === resCount;

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

  const [question, setQuestion] = useState('');
  
   const handleBuutonClick = async () => {
    if (numBoolean) {
      kenrihakudatu();// テキストボックスの文字をクリア
      setQuestion('');
      indexCustomNav(room_id);
    } else {
      alert("全員の質問が終了していません。");
      return false;
    }
  };

  const getGameStatus = async () => {
    const response = await axios.get(
      `http://localhost:8000/position/${room_id}`
    );
    const resData = response.data;
    const status = resData.game_status;
    insider_id = resData.insider_id; // number
    answer = resData.answer; // string
    genre = resData.genre; // string
    participants_num = resData.partisipants_num;
    console.log("resData", resData);
    return;
  };
  getGameStatus();

  // ユーザー情報(id, room_id)をpost
  useEffect(() => {
    const fetchGetWaiting = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/waiting/${room_id}`
        );
        const resData = response.data as object[];

        const userNames = resData.map((item: any) => item.user_name);
        console.log("user_names", userNames);

        setResCount(resData.length);
        console.log("rescount", resCount);
      } catch (e) {
        console.error("リクエスト中にエラーが発生しました。", e);
      }
    };

    const interval = setInterval(fetchGetWaiting, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  
  numBoolean = participants_num === resCount;

  // 全員が質問し終わったらanswerへ

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

export default QuestionPage;
