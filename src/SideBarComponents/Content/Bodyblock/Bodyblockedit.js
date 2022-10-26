import React, { useState } from "react";
import "./Bodyblockedit.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

export default function Bodyblockedit({ isopen, isclose }) {
  const [gifsbtn, setGifsbtn] = useState(false);
  const [data, setData] = useState("new");
  const [gifArr, setGifArr] = useState({});
  const [snackOpen, setSnackOpen] = React.useState(false);

  const handleClick = () => {
    setSnackOpen(true);
  };

  const fetchGif = (data) => {
    if (!gifsbtn) {
      fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=TKM4I3PV9b2l5gBH4WqbaM3RyBATc41J&limit=25&rating=g&offset=0&q=`
      )
        .then((r) => r.json())
        .then((res) => setGifArr(res));
    }
  };

  return (
    <React.Fragment>
      <Drawer
        anchor={"right"}
        open={isopen}
        onClose={isclose}
        className="bodyeditdrawer"
      >
        <Box role="presentation">
          <ClearOutlinedIcon
            color="action"
            className="closebtn"
            onClick={isclose}
          />
          <br />
          <div className="bodyeditmaindiv">
            <div className="tempbuilderhead" style={{ marginBottom: "40px" }}>
              Body Block editing
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TextField
                label="Title"
                type="text"
                id="outlined-size-small"
                color="warning"
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
                className="titleinput"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "22px",
              }}
            >
              <Button
                className="showgifs"
                onClick={() => {
                  if (gifsbtn) {
                    setGifsbtn(false);
                  } else {
                    setGifsbtn(true);
                    fetchGif(data);
                  }
                }}
              >
                {gifsbtn ? <>Hide gifs search</> : <>Show gifs search</>}
              </Button>
            </div>
            {gifsbtn && (
              <div>
                <input
                  type="text"
                  placeholder="Search for GIFs"
                  style={{
                    width: "100%",
                    height: "33px",
                    marginBottom: "10px",
                    border: "1px solid #ddd",
                  }}
                />
              </div>
            )}
            {gifsbtn && (
              <div style={{ width: "830px" }}>
                <div
                  style={{
                    width: "100%",
                    height: "500px",
                    overflow: "scroll",
                    gap: "10px",
                  }}
                >
                  {gifArr &&
                    gifArr.data &&
                    gifArr.data.map((item, index) => {
                      return (
                        <>
                          <img
                            style={{
                              width: "200px",
                              float: "left",
                              verticalAlign: "top",
                              cursor: "pointer",
                            }}
                            src={item.images.original.url}
                            alt="Gifs"
                          />
                        </>
                      );
                    })}
                </div>
              </div>
            )}

            <div className="Archivesavebtndiv">
              <Button
                variant="outlined"
                className="archivebtnbodyedit"
                style={{ padding: "5px 35px" }}
                onClick={() => {
                  handleClick();
                  isclose();
                }}
              >
                <Inventory2OutlinedIcon className="archivelogo" /> Move to
                Archive
              </Button>

              <Button className="Savetemplatebtn" style={{ width: "205px" }}>
                Save
              </Button>
            </div>
          </div>
        </Box>
      </Drawer>
      <Snackbar
        open={snackOpen}
        autoHideDuration={4000}
        onClose={() => setSnackOpen(false)}
        message="Body block archived"
      />
    </React.Fragment>
  );
}
