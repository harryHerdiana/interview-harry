import { useQuery, gql } from "@apollo/client";
import Header from "../../component/Header/Header";
import { Button, Col, DatePicker, Row, Select, Space, TimePicker } from "antd";
import { CreditCardTwoTone } from "@ant-design/icons";

const locationOptions = [
  {
    value: "north_carolina",
    label: "North Carolina",
  },
  {
    value: "north_strathfield",
    label: "North Strathfield",
  },
  {
    value: "jacksonville",
    label: "Jacksonville",
  },
  {
    value: "north_hampton",
    label: "North Hampton",
  },
];

const FitlerComponent: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "12px",
        borderRadius: "6px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <Space size="small" style={{ backgroundColor: "#F3F4FA" }}>
          <Button>Hourly</Button>
          <Button type="text">All day</Button>
          <Button type="text">Half day</Button>
        </Space>
        <Button
          style={{ backgroundColor: "#F3F4FA" }}
          type="text"
          icon={<CreditCardTwoTone />}
        >
          2 hrs
        </Button>
      </div>
      <Row gutter={12}>
        <Col xs={24} md={10}>
          <Select
            options={locationOptions}
            placeholder="Select Location"
            style={{ width: "100%" }}
          />
        </Col>
        <Col style={{ display: "flex", gap: "12px" }}>
          <DatePicker style={{ width: "50%" }} />
          <TimePicker.RangePicker style={{ width: "100%" }} />
        </Col>
      </Row>
    </div>
  );
};

export default FitlerComponent;
