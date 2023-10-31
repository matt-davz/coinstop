import React from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import {Card, Col, Divider, Row } from 'antd';

import Loader from './Loader';



const DisplayNews = ({simplified}) => {
  const count = simplified ? 11 : 100;
  const {data: cryptoNews, isFetching} = useGetCryptoNewsQuery({newsCategory: 'Cryptocurrencies', count: count })
  

  if (isFetching) return (<Loader count={count}/>)

  const articles = cryptoNews ?. value

  
  return ( 
    <>

    <Row gutter={[32,32]} >
        {articles.map((article,i) => (
          <Col  key={i} span={8} >
            <a target='_blank' href={article.url} style={{textDecoration: "none"} }>
              { article.image ? (
                <Card
                style={{height:"20rem"}}
                >
                  <Row gutter={[5,5]}>
                    <Col span={12}><p style={{margin: 0, fontWeight:"bold"}}>{article.name}</p></Col>
                    <Col span={12}><img style={{height:'100%',width:'100%'}} src={article.image.thumbnail.contentUrl} /></Col>
                  </Row>
                  <Divider/>
                  
                  <p>{article.description.length > 100 ? `${article.description.substring(0, 100)}...` : article.description}</p>
                
                </Card>
              ) : (
                <Card
                style={{height:"20rem"}}
                >
                  <Row gutter={[5,5]}>
                    <p style={{margin: 0, fontWeight:"bold"}}>{article.name}</p>
                    
                  </Row>
                  <Divider/>
                  <p>{article.description.length > 100 ? `${article.description.substring(0, 100)}...` : article.description}</p>
                </Card>
              )}
              
            </a>
          </Col>
        ))}
    </Row>
    </>
    
  )
}

export default DisplayNews