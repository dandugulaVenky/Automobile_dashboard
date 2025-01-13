import { Typography, Drawer } from "antd";

import { useEffect, useState } from "react";
import { getComments, getOrders } from "../../API";

function AppHeader (){
  
    const [comments, setComments] = useState(0);
    const [orders, setOrders] =  useState(0);
    const [commentsOpen, setCommentsOpen] = useState(false);
  

    useEffect(() =>{
        getComments().then((res) =>{
            setComments(res.total);
        });
        getOrders().then((res) =>{
            setOrders(res.total);
        });
    },[]);


    return <div className="AppHeader">

    <Typography.Title>Dashboard</Typography.Title>   


   

    <Drawer title="comments" open={commentsOpen} onClose={() =>{
        setCommentsOpen(false)
    }}
    maskClosable
    
    ></Drawer>

    </div>
}


export default AppHeader;