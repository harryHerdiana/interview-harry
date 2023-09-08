import { Image, Space, Typography } from "antd";
import "./preview.css";
import { GlobalOutlined, MailFilled, PhoneFilled } from "@ant-design/icons";
import GoogleMapReact from "google-map-react";
import { BBox } from "geojson";
import { useState } from "react";
import { CardProps } from "../Card/Card";

const GOOGLE_APIKEY = process.env.PUBLIC_GOOGLE_MAPS_APIKEY;

export interface PreviewProps extends CardProps {
  address: string;
  phone: number;
  email: string;
  website: string;
  latitude: number;
  longitude: number;
}

const Preview: React.FC<PreviewProps> = ({name,address, city, open_hours, phone, website, email, latitude, longitude}) => {
  const [{ bounds, zoom }, setBoundsZoom] = useState<{
    zoom: number;
    bounds: BBox | undefined;
  }>({
    zoom: 10,
    bounds: undefined,
  });
  return (
    <div className="preview-card">
      <div className="preview-card-header">
        <div className="preview-card-header-content">
          <Typography
            style={{ fontSize: "1rem", fontWeight: "700", marginTop: "1rem" }}
          >
            {name}, {city}
          </Typography>
          <Typography style={{ color: "gray" }}>
            {address}
          </Typography>
          <Typography style={{ marginTop: "20px", fontWeight: "700" }}>
            Open hours
          </Typography>
          <Typography>{open_hours}</Typography>
          <Typography>
            After hours bookings <a href="/">Request here</a>
          </Typography>
          <div className="preview-card-header-contact">
            <Space>
              <PhoneFilled />
              <Typography style={{ color: "#2F54EB" }}> +{phone}</Typography>
            </Space>
            <Space>
              <MailFilled />
              <Typography style={{ color: "#2F54EB" }}>
                {email}
              </Typography>
            </Space>
            <Space>
              <GlobalOutlined />
              <Typography style={{ color: "#2F54EB" }}>{website}</Typography>
            </Space>
          </div>
        </div>
        <div className="preview-card-header-image desktop-image">
          <Image
            width={158}
            height={244}
            className=""
            style={{ objectFit: "cover", borderRadius: "12px" }}
            src="/image/example_image1.png"
          />
        </div>
        <div className="preview-card-header-image mobile-image">
          <Image
            className=""
            style={{ objectFit: "cover", borderRadius: "12px" }}
            src="/image/example_image1.png"
          />
        </div>
      </div>
      <div className="preview-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_APIKEY as string }}
          defaultCenter={{
            lat: 54.695265,
            lng: -110.694633,
          }}
          defaultZoom={10}
          yesIWantToUseGoogleMapApiInternals
          onChange={({ zoom, bounds }) =>
            setBoundsZoom({
              zoom,
              bounds: [
                bounds.nw.lng,
                bounds.se.lat,
                bounds.se.lng,
                bounds.nw.lat,
              ],
            })
          }
        ></GoogleMapReact>
      </div>
    </div>
  );
};

export default Preview;
