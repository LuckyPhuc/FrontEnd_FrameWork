import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Telephone, Envelope, House, StarFill } from "react-bootstrap-icons";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        width: "100%",
        height: "100vh",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Thông tin" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="information">
          <div className="avatar">
            <div className="name">
              <h1>Hoàng Phúc</h1>
              <h5>Backend Develop</h5>
              <div className="detail">
                <div className="detail__header my-3">
                  <h3>CONTACT</h3>
                </div>
                <div className="detail__body my-3">
                  <div className="detail__in4">
                    <span className="detail__icon">
                      <Telephone />
                    </span>
                    <span>{props.phone}</span>
                  </div>
                  <div className="detail__in4">
                    <span className="detail__icon">
                      <Envelope />
                    </span>
                    <span>{props.gmail}</span>
                  </div>
                  <div className="detail__in4">
                    <span className="detail__icon">
                      <House />
                    </span>
                    <span>{props.address}</span>
                  </div>
                </div>
                <div className="detail__footer">
                  <h2>EDUCATION & CERTIFICATE</h2>
                  <ul>
                    <li className="list-group-item my-4">
                      <h3 className="fst-italic">MASTER</h3>
                      <h4 className="fs-5 text">FPT COLLEGE</h4>
                    </li>
                    <li className="list-group-item my-4">
                      <h3 className="fst-italic">YEAR</h3>
                      <h4 className="fs-5 text">2024</h4>
                    </li>
                    <li className="list-group-item my-4">
                      <h3 className="fst-italic">BACHELOR</h3>
                      <h4 className="fs-5 text">FPT COLLEGE</h4>
                    </li>
                    <li className="list-group-item my-4">
                      <h3 className="fst-italic">CERTIFICATE #1</h3>
                      <h4 className="fs-5 text">FPT COLLEGE</h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="information">
          <h1>EDUCATION & CERTIFICATE</h1>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}
