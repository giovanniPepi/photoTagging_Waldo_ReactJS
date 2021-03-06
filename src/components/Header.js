import React from "react";
import { Link } from "react-router-dom";
import waldoHeader from "../img/waldoHeader.jpg";
import Timer from "./Timer";

const Header = ({
  lvl,
  imgDatabase,
  avatarDatabase,
  inHome,
  foundCharacters,
  setFoundCharacters,
  time,
  setTime,
}) => {
  return (
    <section className="header">
      {inHome ? (
        <>
          <Link to="/">
            <div className="headerAvatarCont">
              <img src={waldoHeader} alt="Waldo" className="waldoHeaderImg" />
              <div className="headerTitle">
                <p className="red">Where's</p>
                <p className="blue">Waldo</p>
              </div>
            </div>
          </Link>
        </>
      ) : null}

      {inHome === false ? (
        <>
          <div className="charactersPresent">
            <Timer time={time} setTime={setTime} inHome={inHome} />
            {imgDatabase["waldo"] === true &&
            !foundCharacters.includes("waldo") ? (
              <img
                src={avatarDatabase["waldo"]}
                alt="waldo"
                className="avatar"
              />
            ) : null}
            {imgDatabase["odlaw"] === true &&
            !foundCharacters.includes("odlaw") ? (
              <img
                src={avatarDatabase["odlaw"]}
                alt="odlaw"
                className="avatar"
              />
            ) : null}
            {imgDatabase["wenda"] === true &&
            !foundCharacters.includes("wenda") ? (
              <img
                src={avatarDatabase["wenda"]}
                alt="waldo"
                className="avatar"
              />
            ) : null}
            {imgDatabase["wizard"] === true &&
            !foundCharacters.includes("wizard") ? (
              <img
                src={avatarDatabase["wizard"]}
                alt="wizard"
                className="avatar"
              />
            ) : null}
          </div>
          <p className="headerLevel">Level {lvl}</p>
          <Link to="/" onClick={() => setFoundCharacters("default")}>
            <button className="gobackBtn">Go back</button>
          </Link>
        </>
      ) : null}
    </section>
  );
};

export default Header;
