import {
  AppstoreOutlined,
  BellOutlined,
  BuildOutlined,
  CalendarFilled,
  CalendarTwoTone,
  CoffeeOutlined,
  CreditCardTwoTone,
  HeartOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Button, Space, Col, Row, Select } from "antd";
import Search from "antd/es/input/Search";
import "./header.css";

const filterOptions = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "location",
    label: "Location",
  },
  {
    value: "price",
    label: "Price",
  },
  {
    value: "availability",
    label: "Availability",
  },
];

const Header: React.FC = () => {
  const { Option } = Select;
  return (
    <>
      <div
        style={{
          padding: "16px 50px",
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(3, 6, 32, 0.10)",
        }}
      >
        <img src="/icon/HamletLogo.svg" alt="hamlet logo" />
        <Space size="middle" className="menu-mobile">
          <Button type="text" icon={<BellOutlined />} />
          <Button type="text" icon={<MenuOutlined />} />
        </Space>
        <Space size="middle" className="menu-desktop">
          <Button type="text" icon={<HeartOutlined />} />
          <Button type="text" icon={<BellOutlined />} />

          <Button icon={<ShoppingCartOutlined />}>Cart</Button>
          <Button>Sign in</Button>
        </Space>
      </div>
      <div
        style={{
          padding: "11px 32px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Space size="small" className="menu-desktop">
          <Button shape="round" icon={<CalendarTwoTone />}>
            Meeting Room
          </Button>
          <Button shape="round" icon={<CoffeeOutlined />}>
            Desk Pass
          </Button>
          <Button shape="round">More</Button>
        </Space>
        <Select
          style={{ width: "100%", maxWidth: "200px" }}
          className="menu-mobile"
        >
          <Option value="meeting" label="Meeting Room">
            <Space>
              <span>
                <CalendarTwoTone />
              </span>{" "}
              Meeting Room
            </Space>
          </Option>
          <Option value="deskPass" label="Desk Pass">
            <Space>
              <span>
                <CoffeeOutlined />
              </span>{" "}
              Desk Pass
            </Space>
          </Option>
        </Select>
        <Space size="small"  className="menu-mobile">
          <Button
            className="menu-mobile"
            style={{ backgroundColor: "#F3F4FA" }}
            type="text"
            icon={<CreditCardTwoTone />}
          >
            2 hrs
          </Button>
          <Button
            className="menu-mobile"
            type="text"
            icon={<SearchOutlined />}
          />
          <Button
            className="menu-mobile"
            type="text"
            icon={<BuildOutlined />}
          />
         
        </Space>
        <Space size="small"  className="menu-desktop">
          
          <Search
            placeholder="search room or member"
            className="menu-desktop"
          />
          <Select
            className="menu-desktop"
            options={filterOptions}
            placeholder="filter by All"
            defaultValue="all"
            style={{ width: 120 }}
          />
          <Button
            type="text"
            icon={<UnorderedListOutlined />}
            className="menu-desktop"
          />
          <Button
            type="text"
            icon={<AppstoreOutlined />}
            className="menu-desktop"
          />
        </Space>
      </div>
    </>
  );
};

export default Header;
