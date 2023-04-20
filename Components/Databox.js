import { Col, Image, Row } from 'antd';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
const Databox = ({data}) => {
    const router = useRouter();
    const [Loadedimg,setLoadedimg] =useState(true)
    console.log(data,'inside of databox')
    return (
        <div>
            <Row onClick={()=> router.push('/allcheckin/2')} style={{backgroundColor:'#FFFFFF',padding:'1rem 1rem 1rem 1rem',borderRadius:'4px',border: '1px solid #F0F0F0'}}>
                <Col span={24}>
              {  Loadedimg &&    
                <Image onLoad={()=>setLoadedimg(true)} onError={()=>setLoadedimg(false)} src={data.image_url} preview={false} style={{width:'100%',borderRadius:'10px'}} width={360} height={220}/>
                }
                </Col>
                <Col span={24}><p style={{ fontFamily: "Roboto",fontSize:'14px',fontWeight:'400',lineHeight:'22px',paddingTop:'.7rem' }}>{data?.comment}</p></Col>
                <Col span={24}><p style={{ fontFamily: "Roboto",fontSize:'12px',fontWeight:'400',lineHeight:'20px',color:'#8C8C8C',marginTop:'7px' }}>Nov 10, 2022</p></Col>
            
            </Row>
            
        </div>
    );
};

export default Databox;