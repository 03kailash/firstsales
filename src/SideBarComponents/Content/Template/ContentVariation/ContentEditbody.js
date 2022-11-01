import React, { useState, useEffect } from "react";
import "./ContentEditbody.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import TextField from "@mui/material/TextField";
import { Button, IconButton } from "@mui/material";
import "froala-editor/css/themes/royal.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import FroalaEditorComponent from "react-froala-wysiwyg";

export default function ContentEditbody({ isopen, isclose }) {
  const [gifsbtn, setGifsbtn] = useState(false);
  const [data, setData] = useState("new");
  const [gifArr, setGifArr] = useState({});

  const fetchGif = (data) => {
    console.log("api");
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
        className="contenteditbodydrawer"
      >
        <Box role="presentation">
          <IconButton style={{ margin: "8px" }} onClick={isclose}>
            <ClearOutlinedIcon color="action" />
          </IconButton>
          <br />
          <div className="contenteditbodymaindiv">
            <div className="tempbuilderhead" style={{ marginBottom: "40px" }}>
              Body Block editing
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TextField
                label="Body Block Title"
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
                marginBottom: "8px",
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
              <div
                style={{ width: "100%", height: "500px", overflow: "scroll" }}
              >
                {gifArr &&
                  gifArr.data &&
                  gifArr.data.map((item, index) => {
                    return (
                      <img
                        style={{
                          width: "200px",
                          float: "left",
                          verticalAlign: "top",
                        }}
                        src={item.images.original.url}
                        alt="Gifs"
                      />
                    );
                  })}
              </div>
            )}
            <FroalaEditorComponent tag="textarea" />

            <div className="contenteditsavebtndiv">
              <Button className="Savetemplatebtn" style={{ width: "205px" }}>
                Save and Add to Template
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "16px",
              }}
            >
              <Button
                variant="outlined"
                style={{
                  width: "205px",
                  borderColor: "#000000DE",
                  textTransform: "capitalize",
                  color: "black",
                }}
              >
                Save
              </Button>
            </div>
          </div>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
