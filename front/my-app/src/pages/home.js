import { Statistic, Row, Col, Card } from 'antd'; 
import React from 'react';

export default function Home() {
    return (
      <div className="App">
        <header className="App-header">
        <h3 className='App-link'>Current Stats</h3> 
        
        <div style={{width:500, paddingTop: 10}}><Row gutter={16}>
      <Col span={12}>
        <Card><Statistic title="Prepaid Users" value={112893} /></Card>
      </Col> 
      <Col span={12}>
        <Card ><Statistic title="PostPaid Users" value={56593} precision={0} valueStyle={{ color: 'red' }} /></Card>
      </Col>
     </Row>
     <br/><br/><br/>
     </div> 
          <a href="/mobile"  style={{ color: 'grey' }}  >
           321,321<sup>+</sup> Numbers Added. <u>View</u>
          </a>
        </header>
      </div>
    );
  }
   