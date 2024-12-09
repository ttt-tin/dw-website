import React, { useState } from 'react';
import { Form, InputNumber, Select, Button, Typography, Row, Col } from 'antd';
import './App.css';
import axios from 'axios';

const { Title } = Typography;
const { Option } = Select;

const App: React.FC = () => {
  const [result, setResult] = useState<string | null>(null); // State to store the result

  const onFinish = (values: any) => {
    const data = Object.values(values);
    axios
      .post('http://127.0.0.1:8000/predict', { data: data })
      .then((res) => {
        let predictionResult = '';
        if (res.data.prediction === 0) {
          predictionResult = 'Art';
        } else if (res.data.prediction === 1) {
          predictionResult = 'Commerce';
        } else {
          predictionResult = 'Science';
        }
        setResult(`Kết quả: ${predictionResult}`); // Set the result
      })
      .catch((err) => {
        console.log(err);
        setResult('Kết quả: Lỗi khi lấy dữ liệu'); // Handle error state
      });
  };

  return (
    <div className="App">
      <div style={{ margin: 40 }}>
        <header className="App-header">
          <Title level={3}>Xem bạn hợp với nhóm học sinh nào</Title>
        </header>

        <Form
          name="user-form"
          onFinish={onFinish}
          layout="vertical"
          className="user-form"
        >
          <Row gutter={[16, 16]}>
            <Col span={4}>
              <Form.Item
                name="attendance"
                label="Attendance"
                rules={[{ required: true, message: 'Attendance' }]}
              >
                <InputNumber min={0} max={100} style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="english"
                label="English"
                rules={[{ required: true, message: 'English' }]}
              >
                <InputNumber min={0} max={100} style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="math"
                label="Math"
                rules={[{ required: true, message: 'Math' }]}
              >
                <InputNumber min={0} max={100} style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="science"
                label="Science"
                rules={[{ required: true, message: 'Science' }]}
              >
                <InputNumber min={0} max={100} style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="social_science"
                label="Social science"
                rules={[{ required: true, message: 'Social science' }]}
              >
                <InputNumber min={0} max={100} style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="art_culture"
                label="Art culture"
                rules={[{ required: true, message: 'Art culture' }]}
              >
                <InputNumber min={0} max={100} style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="morther_education"
                label="Morther education"
                rules={[{ required: true, message: 'Morther education' }]}
              >
                <Select placeholder="Chọn giá trị">
                  <Option value="SSC">SSC</Option>
                  <Option value="Hons">Hons</Option>
                  <Option value="HSC">HSC</Option>
                  <Option value="Masters">Masters</Option>
                  <Option value="Honors">Honors</Option>
                  <Option value="Under_SSC">Under_SSC</Option>
                  <Option value="Diploma">Diploma</Option>
                  <Option value="Non_Educated">Non_Educated</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="father_education"
                label="Father education"
                rules={[{ required: true, message: 'Father education' }]}
              >
                <Select placeholder="Chọn giá trị">
                  <Option value="SSC">SSC</Option>
                  <Option value="Hons">Hons</Option>
                  <Option value="HSC">HSC</Option>
                  <Option value="Masters">Masters</Option>
                  <Option value="Honors">Honors</Option>
                  <Option value="Under_SSC">Under_SSC</Option>
                  <Option value="Diploma">Diploma</Option>
                  <Option value="Non_Educated">Non_Educated</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="location"
                label="Location"
                rules={[{ required: true, message: 'Location' }]}
              >
                <Select placeholder="Chọn giá trị">
                  <Option value="Rural">Rural</Option>
                  <Option value="Urban">Urban</Option>
                  <Option value="City">City</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="studytime"
                label="Studytime"
                rules={[{ required: true, message: 'Studytime' }]}
              >
                <InputNumber min={0} max={100} style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="school_type"
                label="School type"
                rules={[{ required: true, message: 'Vui lòng chọn một giá trị!' }]}
              >
                <Select placeholder="Chọn giá trị">
                  <Option value="Govt">Govt</Option>
                  <Option value="Semi_Govt">Semi_Govt</Option>
                  <Option value="Private">Private</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Gửi
            </Button>
          </Form.Item>
        </Form>

        {/* Display the result at the bottom of the page */}
        {result && (
          <Typography.Title level={3}>
            {result}
          </Typography.Title>
        )}
      </div>
    </div>
  );
};

export default App;
