import { Card, Col, Row } from 'antd';
import React from 'react'

const Loader = ({count,span}) => {
    const componentsToRender = Array(count).fill(null);
    
    return (
      <Row gutter={[32,32]}>
        {componentsToRender.map((e,i) => (
          <Col key={i} span={6}>
            <Card loading={true}>
            </Card>
          </Col>
        ))}
      </Row>
    )
}

export default Loader