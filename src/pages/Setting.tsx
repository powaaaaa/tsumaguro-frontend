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
import TextField from '@mui/material/TextField';

function SettingPage() {
  // room_idを取得
  const room_id = 1;

  return (
    <div>
    <div>
      <h2 style={{ fontSize: '50px' }}>
        Setting Page
      </h2>
      <div className="h-96" style={{display: 'flex', justifyContent: 'center', alignItems: 'center' , gap: '20px' }}>
        <br/>
        <Box className="h-64 w-52" style={{backgroundColor: 'Silver' }} sx={{borderRadius: '10px',fontSize: 25}}>
          <div style={{display: 'flex',justifyContent: 'center',  alignItems: 'center' }}>
          ユーザー名
          </div>
        <br/>
        <div style={{display: 'flex',justifyContent: 'center'}}>
        <Box className="top-0 h-44 w-44" style={{backgroundColor:'Gainsboro',display: 'flex',justifyContent: 'center',  alignItems: 'center' }} sx={{borderRadius: '10px'}}>
          <TextField id="outlined-basic" label="ユーザー名" variant="outlined" />
        </Box>
        </div>
        </Box>
        <br/>
        <Box className="h-64 w-52" style={{backgroundColor: 'Silver' }} sx={{borderRadius: '10px',fontSize: 25}}>
          <div style={{display: 'flex',justifyContent: 'center',  alignItems: 'center' }}>
          人数
          </div>
        <br/>
        <div style={{display: 'flex',justifyContent: 'center'}}>
        <Box className="top-0 h-44 w-44" style={{backgroundColor:'Gainsboro'}} sx={{borderRadius: '10px'}}>

        </Box>
        </div>
        </Box>
        <br/>
        <Box className="h-64 w-52" style={{backgroundColor: 'Silver' }} sx={{borderRadius: '10px',fontSize: 25}}>
          <div style={{display: 'flex',justifyContent: 'center',  alignItems: 'center' }}>
          質問の数
          </div>
        <br/>
        <div style={{display: 'flex',justifyContent: 'center'}}>
        <Box className="top-0 h-44 w-44" style={{backgroundColor:'Gainsboro'}} sx={{borderRadius: '10px'}}>

        </Box>
        </div>
        </Box>
        <br/>
        <Box className="h-64 w-52" style={{backgroundColor: 'Silver' }} sx={{borderRadius: '10px',fontSize: 25}}>
          <div style={{display: 'flex',justifyContent: 'center',  alignItems: 'center' }}>
          ユーザー名
          </div>
        <br/>
        <div style={{display: 'flex',justifyContent: 'center'}}>
        <Box className="top-0 h-44 w-44" style={{backgroundColor:'Gainsboro',display: 'flex',justifyContent: 'center',  alignItems: 'center'}} sx={{borderRadius: '10px'}}>

        </Box>
        </div>
        </Box>
      </div>

      <Link href={`/Room/${room_id}`}>ルーム入室</Link>
    </div>

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
