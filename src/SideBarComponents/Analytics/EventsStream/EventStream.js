import React, { useState } from "react";
import "./EventStream.css";
import Alert from "@mui/material/Alert";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function EventStream() {
  const [eventAlert, setEventAlert] = useState(true);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div style={{ padding: "0px 16px", maxWidth: "1200px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="streamalert">
          {eventAlert && (
            <Alert
              severity="info"
              onClose={() => {
                setEventAlert(false);
              }}
              style={{ marginBottom: "24px" }}
            >
              Any change in the app is logged in events stream. Different
              actions may have different related objects. If you have ID of any
              related object, you can find exactly what happen with that object.
            </Alert>
          )}
        </div>
      </div>
      <div className="eventsdiv">
        <div className="eventcomponents">
          <div style={{ display: "flex" }}>
            <div className="headdiv1">workspace</div>

            <div className="headdiv2">TEAM_MEMBER_ADD</div>
          </div>
          <div className="techbtndiv">
            <Button className="techbtn">Technical details</Button>
          </div>
        </div>
        <div className="verticalline"></div>
      </div>
      <div className="eventsdiv">
        <div className="eventcomponents">
          <div style={{ display: "flex" }}>
            <div className="headdiv1">content</div>

            <div className="headdiv2">TEMPLATED_BODY_ADD</div>
          </div>
          <div className="techbtndiv">
            <Button className="techbtn">Technical details</Button>
          </div>
        </div>
      </div>
      <div className="eventpageno">
        <Typography style={{ paddingRight: "20px" }}>Page: {page}</Typography>
        <IconButton>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowRightIcon />
        </IconButton>
      </div>
    </div>
  );
}
