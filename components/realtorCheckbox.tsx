import React, { useState, useEffect } from "react";

interface RealtorCheckboxPropsType {
  realtorHandler: (string) => void;
}
export function RealtorCheckbox(props: RealtorCheckboxPropsType): JSX.Element {
  const [ckBoxState, setState] = useState({
    options: [
      { id: 1, name: "Yes" },
      { id: 2, name: "No" },
    ],
    optionSelected: undefined,
  });
  const toggleHandler = (event) => {
    if (ckBoxState.optionSelected === event.target.id) {
      setState({
        ...ckBoxState,
        optionSelected: undefined,
      });
    } else {
      setState({
        ...ckBoxState,
        optionSelected: event.target.id,
      });
    }
  };
  useEffect(() => {
    props.realtorHandler(ckBoxState.optionSelected);
  }, [ckBoxState.optionSelected]);
  return (
    <div>
      <style jsx>{`
        .headingBox {
          display: flex;
          align-items: center;
          padding-top: 58px;
        }
        .heading {
          font-family: "Gotham-Medium";
          font-size: 18px;
          line-height: 22px;
          word-spacing: 1px;
          color: #9b5d26;
          font-weight: 500;
          padding-right: 22px;
        }
        .subtitle {
          font-family: "Gotham-Book";
          font-size: 12px;
          line-height: 32px;
          color: #59493b;
        }
        .checkBoxContainer {
          display: flex;
          flex-wrap: wrap;
          padding-top: 32px;
        }
        .checkBox {
          display: flex;
          align-items: center;
          width: 50%;
          // padding-bottom: 25px;
        }
        .checkBox:last-child {
          margin-left: -26%;
        }
        .inputStyle {
          height: 25px;
          width: 25px;
          border: solid 1px #59493b;
          background-color: transparent;
        }
        .label {
          font-family: "Gotham-Book";
          font-size: 18px;
          line-height: 32px;
          padding-left: 15px;
          color: #59493b;
        }
        @media (max-width: 1700px) {
          .headingBox {
            padding-top: clamp(40px, 3.5vw, 58px);
          }
          .heading {
            font-size: clamp(12px, 0.7vw, 18px);
            line-height: clamp(25px, 2vw, 32px);
          }
          .label {
            font-size: clamp(12px, 0.7vw, 18px);
            line-height: clamp(25px, 2vw, 32px);
          }
          .inputStyle {
            height: clamp(20px, 1vw, 25px);
            width: clamp(20px, 1vw, 25px);
          }
        }
        @media (max-width: 767px) {
          .heading {
            font-size: 12px;
            line-height: 15px;
            padding-bottom: 49px;
          }
          .checkBoxContainer {
            padding-top: 0px;
            justify-content: space-between;
          }
          .label {
            font-size: 14px;
            line-height: 28px;
          }
          .allowContactText {
            font-size: 10px;
            line-height: 12px;
          }
        }
        @media (max-width: 550px) {
          .headingBox {
            padding-top: 35px;
          }
        }
      `}</style>
      <div className="headingBox">
        <div className="heading">ARE YOU A REALTOR?</div>
      </div>
      <div className="checkBoxContainer">
        {ckBoxState.options.map((option) => {
          return (
            <div className="checkBox" key={option.id}>
              <input
                className="inputStyle"
                checked={ckBoxState.optionSelected === option.name}
                onChange={toggleHandler}
                id={option.name}
                name={option.name}
                placeholder={option.name}
                type="checkbox"
              />
              <label className="label" htmlFor={option.name}>
                {option.name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
