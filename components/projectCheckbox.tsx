import React, { useEffect, useState } from "react";

interface ProjectCheckboxPropsType {
  projectInfoHandler: (string) => void;
}
export function ProjectCheckbox(props: ProjectCheckboxPropsType): JSX.Element {
  const [ckBoxState, setState] = useState({
    options: [
      { id: 1, name: "Ashlyn at Cambie Park" },
      // { id: 2, name: "Project Name2" },
      // { id: 3, name: "Project Name3" },
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
    props.projectInfoHandler(ckBoxState.optionSelected);
  }, [ckBoxState.optionSelected]);
  // const ChangeHandler = (event) => {
  //   toggleHandler(event);
  //   props.projectInfoHandler(ckBoxState.optionSelected);
  // };
  // useEffect(() => {}, [ckBoxState.optionSelected]);

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
          .subtitle {
            font-size: clamp(10px, 0.5vw, 12px);
            line-height: clamp(23px, 2vw, 32px);
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
          .headingBox {
            flex-direction: column;
            align-items: flex-start;
          }
          .heading {
            font-size: 12px;
            line-height: 15px;
            margin-bottom: 29px;
          }
          .subtitle {
            font-size: 14px;
            line-height: 28px;
          }
          .checkBoxContainer {
            flex-direction: column;
          }
          .checkBox {
            width: 100%;
          }
          .checkBox:first-child {
            margin-bottom: 31px;
          }
          .label {
            font-size: 14px;
            line-height: 28px;
          }
        }
        @media (max-width: 550px) {
        }
      `}</style>
      <div className="headingBox">
        <div className="heading">PROJECTS</div>
        <div className="subtitle">
          What Novara Projects are you interested in?
        </div>
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
