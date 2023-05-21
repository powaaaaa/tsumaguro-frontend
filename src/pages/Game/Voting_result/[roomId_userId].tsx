import { useRouter } from "next/router";
import Link from "next/link";
import { IdType, postCookie } from "@/pages/axios";
import Button from '@mui/material/Button';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  UserName: string,
  Id: number,
  host: string,
  vote: number,
  job: string
) {
  return { UserName,Id,host,vote,job};
}

const rows = [
  createData('a',111,'y',1,'c'),
  createData('b',112,'n',1,'c'),
  createData('c',121,'n',2,'i'),
  createData('d',122,'n',0,'c'),
  createData('e',211,'n',1,'c'),
];


function RoomDetail() {
  const router = useRouter();
  const roomId = router.query.roomId;

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
      case 3: // お題確認
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
      <h1 style={{ fontSize: "50px", }}>Voting_result(動的生成)[roomId: {roomId}]</h1>

      <div className="absolute left-28" style={{backgroundColor:'Silver'}}>
      インサイダー投票結果
      </div>

      <div  className="h-72" style={{backgroundColor:'Silver',display: 'flex', justifyContent: 'center', alignItems: 'center' , gap: '20px' }}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>UserName</TableCell>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">host</TableCell>
            <TableCell align="right">vote</TableCell>
            <TableCell align="right">job</TableCell>
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
              <TableCell align="right">{row.vote}</TableCell>
              <TableCell align="right">{row.job}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
      <div className="absolute right-10 bottom-10">
      <Button onClick={indexCustom} style={{fontSize:18 ,backgroundColor:'Gainsboro'}} className="hover: text-black">
          <ScoreboardIcon sx={{ fontSize: 40 }}/>
        ラウンド結果へ
      </Button>
      </div>
    </div>
  );
}

export default RoomDetail;
