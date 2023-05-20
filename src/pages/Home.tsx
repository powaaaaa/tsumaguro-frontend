import Link from "next/link";
import Container from "@mui/material";
import Modal from "react-modal";
import HelpIcon from '@mui/icons-material/Help';
import CookieIcon from '@mui/icons-material/Cookie';
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined';
import Button from '@mui/material/Button';

function HomePage() {
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
      <Button variant="contained" className="hover: text-black" style={{backgroundColor:'Gainsboro'}} >
        <HelpIcon sx={{ fontSize: 40 }}/>
        遊び方
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
