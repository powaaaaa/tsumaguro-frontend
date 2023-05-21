import { useRouter } from "next/router";
import Link from "next/link";
import { IdType, postCookie } from "@/pages/axios";
import Button from '@mui/material/Button';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
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
  host: string,
  score: number,
  job: string
) {
  return { UserName,host, score, job };
}

const rows = [
  createData('a','y',212,'c'),
  createData('b','n' ,221,'c'),
  createData('c','n' ,222,'i'),
  createData('d','n' ,222,'c'),
  createData('e','n' ,222,'c'),
];

function RoundResultPage() {
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
      <h1 style={{ fontSize: "50px", }}>Round_result(動的生成)[roomId: {roomId}]</h1>

      <div className="absolute left-28" style={{backgroundColor:'Silver'}}>
      ~ラウンド結果~
      </div>

      <div  className="h-72" style={{backgroundColor:'Silver',display: 'flex', justifyContent: 'center', alignItems: 'center' , gap: '20px' }}>
      <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>UserName</TableCell>
            <TableCell align="right">host</TableCell>
            <TableCell align="right">score</TableCell>
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
              <TableCell align="right">{row.host}</TableCell>
              <TableCell align="right">{row.score}</TableCell>
              <TableCell align="right">{row.job}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>

      <div className="absolute right-10 bottom-10">
      <Button type="button" onClick={indexCustom} style={{fontSize:18 ,backgroundColor:'Gainsboro'}} className="hover: text-black">
          <MilitaryTechIcon sx={{ fontSize: 40 }}/>
        最終結果へ
      </Button>
      </div>
    </div>
  );
}

export default RoundResultPage;
