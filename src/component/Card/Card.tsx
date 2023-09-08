import { Button, Divider, Space, Typography } from "antd";
import "./card.css";
import {
  ClockCircleOutlined,
  EnvironmentOutlined,
  UserOutlined,
} from "@ant-design/icons";

export interface CardProps {
  name: string;
  open_hours: string;
  availability: boolean;
  city: string;
  hourly_price: number;
  capacity: number;
}

interface CardFunction {
  onSelect: any;
  onBookClick: any;
}

const Card: React.FC<CardProps & CardFunction> = ({
  name,
  open_hours,
  availability,
  capacity,
  city,
  hourly_price,
  onSelect,
  onBookClick,
}) => {
  return (
    <div className={`${availability===false && 'card-unavailable'} card`} onClick={onSelect}>
      <div className="card-image-container">
        <img
          className="card-image"
          src="/image/example_image1.png"
          alt="cardImage"
        />
      </div>
      <div className="card-content-container">
        <div className="card-header">
          <Typography className="room-name">{name}</Typography>
          {availability ? (
            <Typography className="available-room">Available</Typography>
          ) : (
            <Typography className="occupied-room">Occupied</Typography>
          )}
        </div>
        <div className="card-availability">
          <Typography className="available-text">
            <ClockCircleOutlined style={{ marginRight: "8px" }} />
            {open_hours}
          </Typography>
          <Typography className="available-text">
            <EnvironmentOutlined style={{ marginRight: "8px" }} />
            {city}
          </Typography>
        </div>
        <div className="card-book">
          <Space>
            <Typography style={{ color: "gray" }}>
              <span className="available-price">${hourly_price}</span> per hr
            </Typography>
            <Divider type="vertical" />
            <Typography className="available-text">
              <UserOutlined style={{ marginRight: "8px" }} />
              <span className="available-cap">{capacity}</span>
            </Typography>
          </Space>
          <Button
            type="primary"
            onClick={onBookClick}
            disabled={availability === false}
          >
            Book
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
