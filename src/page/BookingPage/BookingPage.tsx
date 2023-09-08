import { useQuery, gql } from "@apollo/client";
import Header from "../../component/Header/Header";
import { Col, List, Modal, Row, Space, Typography } from "antd";
import { CreditCardTwoTone, LoadingOutlined } from "@ant-design/icons";
import FitlerComponent from "../../component/Filter/Filter";
import Card, { CardProps } from "../../component/Card/Card";
import Preview, { PreviewProps } from "../../component/Preview/Preview";
import "./bookingPage.css";
import { useState } from "react";

const GET_ROOMS_ITEM = gql`
  query GetRoomsItem {
    rooms_item {
      id
      name
      availability
      city
      address
      open_hours
      phone
      website
      email
      latitude
      longitude
      day_price
      halfday_price
      hourly_price
      amenities
      capacity
      description
    }
  }
`;

interface AllProps extends PreviewProps {
  description: string;
  halfday_price: number;
  day_price: number;
  amenities: string[];
}

const BookingPageComponent: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ROOMS_ITEM);
  const [selectedItem, setSelectedItem] = useState<AllProps>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  console.log(selectedItem);
  return (
    <>
      <Row className="container">
        <Col md={14} xs={24}>
          <FitlerComponent />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "20px",
            }}
          >
            <Typography>Found xx spaces</Typography>
            <div className="card-container" >
              {loading ? (
                <LoadingOutlined />
              ) : (
                data?.rooms_item.map((item: AllProps, idx: any) => (
                  <Card
                    onBookClick={showModal}
                    key={idx}
                    {...item}
                    onSelect={() => setSelectedItem(item)}
                  />
                ))
              )}
            </div>
          </div>
        </Col>
        <Col md={10} xs={0}>
          {selectedItem && <Preview {...selectedItem} />}
        </Col>
      </Row>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Space direction="vertical">
          {" "}
          <Typography>Modal content here that render selected item:</Typography>
          <Typography>{selectedItem?.name}</Typography>
          <Typography>{selectedItem?.city}</Typography>
          <Typography>{selectedItem?.description}</Typography>
          <Typography>Pricing</Typography>
          <Space>
            <Typography>$ {selectedItem?.hourly_price} per hour</Typography>
            <Typography>$ {selectedItem?.halfday_price} 1/2 day</Typography>
            <Typography>$ {selectedItem?.day_price} per day</Typography>
          </Space>
          <Typography>Amenities</Typography>
          <List>
            {selectedItem?.amenities.map((item, idx) => (
              <List.Item key={idx}>{item}</List.Item>
            ))}
          </List>
        </Space>
      </Modal>
    </>
  );
};

export default BookingPageComponent;
