import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getGameStatus } from "../axios";
import axios from "axios";
import { useRecoilState } from "recoil";
import { idState } from "../Setting1";
import { room_idState } from "../Setting2";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ConstructionRounded } from "@mui/icons-material";

function createData(
  UserName: string,
  Id: number,
  host: string
) {
  return { UserName,Id,host};
}

const rows = [
  createData('a',111,'y'),
  createData('b',112,'n'),
  createData('c',121,'n'),
  createData('d',122,'n'),
  createData('e',211,'n'),
];

// ゲーミングステータスを取得
function WaitingPage() {
  const router = useRouter();
  const [id, setId] = useRecoilState(idState);
  const [room_id, setRoom_id] = useRecoilState(room_idState);
  let startFlag = true; // ここ
  let owner_id = 0;

  const getGameStatus = async () => {
    const response = await axios.get(`http://localhost:8000/room/${room_id}`);
    const resData = response.data;
    const status = resData.game_status;
    owner_id = resData.owner_id;
    console.log("status", status);
    if (owner_id === id) {
      startFlag = true;
    }
    return;
  };
  getGameStatus();

  // 分岐
  const indexCustomNav = async (room_id: number) => {
    // const status = Number(await getGameStatus());
    const status: number = 1; // ここ

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
    if (startFlag) {
      indexCustomNav(room_id);
    } else {
      console.log("this is false");
      return startFlag;
    }
  };

  // 1秒間に1回、waiting/[user_id]にpostして人数確認
  const [resCount, setResCount] = useState(0);

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

  // 人数が揃ったらゲーム開始　かつユーザー情報(id, room_id)をpost
  const [partyNum, setPartyNum] = useState(0);
  useEffect(() => {
    const fetchPostWaiting = async () => {
      try {
        const url = `http://localhost:8000/waiting/${room_id}`;
        const response = await axios.post(url, room_id);
        const resData = response.data;
        setPartyNum(resData.participants_num);
      } catch (e) {
        console.error("post中にエラーが発生しました。", e);
      }
    };

    if (partyNum === resCount) {
    }
  }, [resCount]);

  const URL = `./Room/${room_id}`;

  return (
    <div>
      <h1 style={{ fontSize: "50px" }}>Waiting</h1>

      <div
        className="h-72"
        style={{
          backgroundColor: "Silver",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>UserName</TableCell>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">host</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.UserName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.UserName}
              </TableCell>
              <TableCell align="right">{row.Id}</TableCell>
              <TableCell align="right">{row.host}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div className="flex flex-col">
      <h1>待機中……</h1>
      <div>{URL}を送って招待しよう！</div>

      </div>
    </div>
  );
}

export default WaitingPage;
