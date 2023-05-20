import * as React from 'react';
import Link from "next/link";
import Container from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';
import CookieIcon from '@mui/icons-material/Cookie';
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function HomePage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onClike = () => {
    // alert(document.cookie.match(/PHPSESSID=[^;]+/));
    // alert(/SESS\w*ID=([^;]+)/i.test(document.cookie) ? RegExp.$1 : false);
    var str = document.cookie;
    alert(str);
    return;
  };

  return (

    <div>

      <h1 style={{ fontSize: '50px' }}>Home Page</h1>

      <div className="h-96" style={{fontSize: 70,display:'flex',justifyContent:'center', alignItems: 'center'}}>
        ここにタイトルを入力

      </div>

      <div className="h-16" style={{display: 'flex', justifyContent: 'center', alignItems: 'center' , gap: '20px' }}>

      <div>
      <Button variant="contained" className="hover: text-black" style={{backgroundColor:'Gainsboro'}} onClick={handleOpen} >
      <HelpIcon sx={{ fontSize: 40 }}/>
          遊び方
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           インサイダーゲームとは
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          ここに説明を表示
          </Typography>
        </Box>
      </Modal>
      </Button>
      </div>
      
      <div>
      <Button variant="contained" className="hover: text-black" style={{backgroundColor:'Gainsboro'}} >
        <Link href="/Setting">
        <SensorDoorOutlinedIcon sx={{ fontSize: 40 }} />
        ルームを作る(/Settingへ)
        </Link>
      </Button>
      </div>
      </div>


    </div>
  );
}


export default HomePage;
