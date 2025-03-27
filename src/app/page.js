"use client";

import Image from "next/image";
import style from "./styles/header.module.css"
import { FaBusAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { useRef } from "react";
import BottomNav from "./component/layout/BottomNav";


export default function Home() {

  const dateInputRef = useRef(null); // Create a ref for the input field

  // Function to handle icon click
  const handleIconClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.focus(); // Focus on the input field
      dateInputRef.current.showPicker(); // Open the date picker (if supported)
    }
  };


  const menuItems = [
    { src: "/images/travel.png", title: "Buses" },
    { src: "/images/discount.png", title: "Offers" },
    { src: "/images/ticket.png", title: "Track Ticket" },
    { src: "/images/24-hours-support.png", title: "Need Help ?" },
  ];

  const transportNames = [
    { name: "MTC", color: "red" },
    { name: "BMTC", color: "blue" },
    { name: "APSRTC", color: "green" },
    { name: "DTC", color: "purple" },
    { name: "GSRTC", color: "orange" },
    { name: "HRTC", color: "teal" },
    
  ];

  return (
    <div>
      <div className={style.header} >
     

     <div className={style.menu}>
     <div className={style.logo}>
       <img className={style.logoimg} src="/images/large.png" />
     </div>
    <div className={style.menus}>
    {menuItems.map((item, index) => (
       <div key={index} className={style.option}>
         <Image src={item.src} alt={item.title} width={30} height={30} />
         <p className={style.title}>{item.title}</p>
       </div>
     ))}
       
    </div>
     </div>

     <div className={style.marquee}>
      <p>
        {transportNames.map((item, index) => (
          <span key={index} style={{ backgroundColor: item.color,color:"white",borderRadius:"10px",padding:"10px",width:"300px" }}>
            {item.name}
          </span>
        ))}
      </p>
    </div>

     <div className={style.rightcontent}>
      <img src="/images/mobile-password-forgot.png" className={style.loginimg} width={60} height={50} />
       <button className={style.authbutton}>Sign in/ Sign up</button>
     </div>
   </div>

    <div style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between",
      height:"91.5vh"
    }}>
 <div className={style.banner}>
  <img 
    src="/images/COLOURBOX37688966.webp" 
    className={style.bannerimage} 
  />
  <div 
    className={style.bookingdiv}
   
  >
    <p >Book Bus Tickets</p>
       <div className={style.bookinginput} >
       <div style={{ position: "relative" }}>
  <input
    type="text"
    placeholder="From Station"
    className={style.nofocusborder} // Use className instead of class
  />
  <span
    style={{
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      marginLeft: "15px",
      pointerEvents: "none", // Allow clicks to pass through
    }}
  >
    <FaBusAlt size={25} color="#86e3b5" />
  </span>
       </div>
       <div style={{ position: "relative" }}>
       <input type="text" class={style.nofocusborder} placeholder="To Station" />
       <span style={{
         position: "absolute",
         top: "0",
         left: "0",
         width: "100%",
         height: "100%",
         display: "flex",
         justifyContent: "flex-start", // Center horizontally
         alignItems: "center",
         marginLeft:"15px" ,
         pointerEvents: "none",
       }}>
       <FaLocationDot size={25} color="#86e3b5" />
       </span>
       </div>
       <div style={{ position: "relative" }}>
      <input
        type="date"
        ref={dateInputRef} // Attach the ref to the input field
        className={style.nofocusborder1}
       
      />
      <span
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginLeft: "15px",
          pointerEvents: "none", // Allow clicks to pass through
        }}
      >
        <MdOutlineDateRange
          size={25}
          color="#86e3b5"
          style={{ pointerEvents: "auto", cursor: "pointer" }} // Make the icon clickable
          onClick={handleIconClick} // Handle icon click
        />
      </span>
      <span
        style={{
          position: "absolute",
          top: "0",
          marginRight:"20px",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          pointerEvents:"none",
        }}
      >
        <button style={{
          backgroundColor:"#203ed1",
          width:"80px",
          fontSize:"12px",
          margin:"20px",
          padding:"6px",
          color:"white",
          borderRadius:"10px",
          border:"1px solid black"
        }}>Today</button>
      </span>
      <span
        style={{
          position: "absolute",
          top: "0",
          right:"70px",
          marginRight:"20px",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          pointerEvents:"none",
        }}
      >
        <button style={{
          backgroundColor:"#203ed1",
          width:"80px",
          fontSize:"12px",
          margin:"20px",
          padding:"6px",
          color:"white",
          borderRadius:"10px",
          border:"1px solid black"
        }}>Tommorrow</button>
      </span>

     
    </div>
      

    </div>
  </div>
   </div>


<div><BottomNav /></div>   
    </div>


  
    </div>
  );
}
