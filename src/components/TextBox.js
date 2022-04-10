import React, { useState } from "react";

export default function TextBox(props) {
  const onUpClick = () => {
    if (text?.length === 0) {
      props.setAlert("Enter some text");
    } else {
      setText(text?.toUpperCase());
      props.setAlert("Successfully converted to uppar case");
    }
  };

  const onLowClick = () => {
    if (text?.length === 0) {
      props.setAlert("Enter some text");
    } else {
      setText(text?.toLowerCase());
      props.setAlert("Successfully converted to lower case");
    }
  };

  const onChange = (event) => {
    setText(event.target.value);
  };

  const wordsLength = (text) => {
    let words = text?.split(" ");
    if ((words ? words[0] : "") === "") {
      return 0;
    } else {
      if (words[words?.length - 1] === "") {
        return words?.length - 1;
      } else {
        return words?.length;
      }
    }
  };

  const [text, setText] = useState();
  return (
    <>
      <div
        className="container my-5"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={onChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={onUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-4" onClick={onLowClick}>
          Convert to Lowercase
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        There are {wordsLength(text)} words and {text?.length} charecters in
        paragraph.
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>Perview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
