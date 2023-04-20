import { Col, Image, Row } from 'antd';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import moment from 'moment';
const Databox = ({data}) => {
    const router = useRouter();
    const [Loadedimg,setLoadedimg] =useState(true)
    console.log(data,'inside of databox',data.id)
    let date=data.created_at
    const dateMoment = moment(date).format('MMMM Do ,YYYY');;
console.log(dateMoment,'gvtbuhj');
    let a=data.id
    return (
        <div>
            <Row onClick={()=> router.push(`/MyProducts/${a}`)} style={{backgroundColor:'#FFFFFF',padding:'1rem 1rem 1rem 1rem',borderRadius:'4px',border: '1px solid #F0F0F0'}}>
                <Col span={24}>
              {  Loadedimg &&    
                <Image onLoad={()=>setLoadedimg(true)} onError={()=>setLoadedimg(false)} src={data.image_url} preview={false} style={{width:'100%',borderRadius:'10px'}} width={360} height={220}/>
                }
                </Col>
                <Col span={24}><p className='paragraphst' style={{ fontFamily: "Roboto",fontSize:'14px',fontWeight:'400',lineHeight:'22px',paddingTop:'.7rem' }}>{data?.comment}</p></Col>
                <Col span={24}><p style={{ fontFamily: "Roboto",fontSize:'12px',fontWeight:'400',lineHeight:'20px',color:'#8C8C8C',marginTop:'7px' }}>{dateMoment}</p></Col>
            
            </Row>
            
        </div>
    );
};

export default Databox;