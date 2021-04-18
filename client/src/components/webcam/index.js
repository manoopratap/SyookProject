import React ,{useImperativeHandle,forwardRef} from 'react';
import Webcam from "react-webcam";
const Index = forwardRef((props, ref) => {
    const webcamRef = React.useRef(null);
    let data= []
    
    const takeSnap1 = () =>{
        debugger
        let loginUser = localStorage.getItem("loginUser")
        let getPreviousData = localStorage.getItem("userDetails")
        const imageSrc1 = webcamRef.current.getScreenshot();
        let obj ={
            loginUser:loginUser,
            pot1:imageSrc1,
            pot2:null,
            firstPreference : null,
            secondPrefrence: null,
            thirdPrefrence : null
        }
        //var receiveddata = JSON.stringify(obj);
        data.push(obj);
        alert(data);
        localStorage.setItem('userDetails', JSON.stringify(data));
    }
    const takeSnap2 = () =>{
        debugger
        let ss = []
        const imageSrc2 = webcamRef.current.getScreenshot();
        let loginUser = localStorage.getItem("loginUser");
        let userDetails  = JSON.parse(localStorage.getItem("userDetails"))
         //ss.push(userDetails)
       let filterData = userDetails.filter(e=> e.loginUser == loginUser )
       console.log(userDetails)
       filterData[0].pot2 = imageSrc2;
          localStorage.setItem('userDetails', JSON.stringify(filterData));
    }
    useImperativeHandle(ref, () => ({
        takeSnap1: takeSnap1,
        takeSnap2: takeSnap2
    }));
  
    return <div>
    <Webcam 
     audio={false}
     ref={webcamRef}
     screenshotFormat="image/jpeg"
     />
</div>;
  });


export default Index;