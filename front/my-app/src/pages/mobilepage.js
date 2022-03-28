import {Table,Menu, Space,Layout, Breadcrumb, Input,Modal, Button, Select} from 'antd'; 
import {useNavigate, Link } from "react-router-dom";
import React from 'react'; 
import '../App.css';
import { Popconfirm, message } from 'antd';

function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}

function handleChange(value) {
    console.log(`selected ${value}`); 
  }
export default function Numbers(){
    const [visible, setVisible] = React.useState(false);
const [confirmLoading, setConfirmLoading] = React.useState(false); 

const showModal = () => {
  setVisible(true);
};

const handleOk = () => {
  
  setConfirmLoading(true);
  setTimeout(() => {
    setVisible(false);
    setConfirmLoading(false);
  }, 2000);
};

const handleCancel = () => {
  console.log('Clicked cancel button');
  setVisible(false);
};
    const { Header, Content, Footer } = Layout;
    const { Column, } = Table;
    
    const data = [
      {
        key: '1',
        customer_id_owner: 'John',
        costumer_id_user: 'Brown',
        service_type: 32,
        service_start_date: 'New York No. 1 Lake Park',
        msisdn: ['nice', 'developer'],
      },
      {
        key: '2',
        customer_id_owner: 'Jim',
        costumer_id_user: 'Green',
        service_type: 42,
        service_start_date: 'London No. 1 Lake Park',
        msisdn: ['loser'],
      },
      {
        key: '3',
        customer_id_owner: 'Joe',
        costumer_id_user: 'Black',
        service_type: 32,
        service_start_date: 'Sidney No. 1 Lake Park',
        msisdn: ['cool', 'teacher'],
      },
    ];
    const { Option } = Select;
    const { Search } = Input;
    const navigate = useNavigate();
    const keysvar = ['msisdn', 'customer_id_owner', 'costumer_id_user', 'service_type', 'service_start_date']
    const onSearch = value => console.log(value);
    function onChange(){console.log('changed')}
    return ( 
      <div>
    <Layout className="layout">
        <Header>
          <div className="logo" />
         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><Link to="/"> Home</Link></Menu.Item>
        <Menu.Item key="2">Mobile</Menu.Item>
      </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Mobile</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
          <Search style={{paddingBottom:12}} placeholder="input search text" allowClear enterButton="Search" size="large" onSearch={onSearch}/>
          <Table dataSource={data} onChange={onChange}> 
          <Column title="Msisdn" dataIndex={keysvar[0]} key={keysvar[0]} sorter={{multiple: 3,}} /> 
          <Column title="Owner" dataIndex={keysvar[1]} key={keysvar[1]} sorter={{multiple: 3,}}/> 
          <Column title="User" dataIndex={keysvar[2]} key={keysvar[2]} sorter={{multiple: 3,}}/> 
          <Column title="Type" dataIndex={keysvar[3]} key={keysvar[3]} sorter={{multiple: 3,}}/> 
          <Column title="Date" dataIndex={keysvar[4]} key={keysvar[4]} sorter={{multiple: 3,}}/> 
          
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <Button onClick={showModal} >Change</Button>
              <Modal
                title="Update Info"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <div>
                    <p>Select field you want to change from dropdown and enter new value</p>
                    <Space direction="vertical">
                         <Input
                        addonBefore={<Select defaultValue="msisdn" style={{ width: 200 }} onChange={handleChange}>
                        <Option value="customer_owner">Customer Owner</Option>
                        <Option value="customer_user">Customer User</Option> 
                        <Option value="type">Type</Option>
                      </Select>}
                        defaultValue="useState"
                        />
                    </Space>
                </div>
            </Modal>
              <Popconfirm title="Are you sure to delete this task?"
                onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
                    <Button>Delete</Button></Popconfirm>
            </Space>
          )}
        />
      </Table>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}></Footer>
      </Layout> 
      </div>
      
    );
    
    }
    /**<Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={tags => (
            <>
              {tags.map(tag => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        /> */