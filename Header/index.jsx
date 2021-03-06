import React, { useContext } from "react";
import { FilterContext } from "../../Context/Filter.jsx";

import { Test } from "../../Context/Test.jsx";

import { Second } from "../../Context/SecondData.jsx";
import { MainContext } from "../../Context/context.jsx";

import { header } from "../../utils/header.js";
import { useNavigate } from "react-router-dom";

import Main from "./style.js";
const Header = () => {
  const [state] = useContext(MainContext);

  const [filter, setFitler] = useContext(FilterContext);

  const [test, SetTest] = useContext(Test);

  const [second, SetSecond] = useContext(Second);

  const navigate = useNavigate();

  return (
    <div>
      <Main>
        <div style={{ display: "flex" }}>
          <Main.HeaderBlockInput
            placeholder="Search"
            onChange={(e) => setFitler(e.target.value)}
          />
          <Main.HeaderImgZoom></Main.HeaderImgZoom>
        </div>
        <Main.HeaderBlockMore>
          <Main.HeaderImgCamera />
          <Main.HeaderImgKategory />
          <Main.HeaderImgDzDz />
          <Main.HeaderImgPerson></Main.HeaderImgPerson>
        </Main.HeaderBlockMore>
      </Main>
      <Main.Bottom>
        {/* <Main.BottomBlock1 onClick={() => SetTest("cinema")}>
          Cinema
        </Main.BottomBlock1>
        <Main.BottomBlock1 onClick={() => SetTest("comedy")}>
          Comedy
        </Main.BottomBlock1>
        <Main.BottomBlock1 onClick={() => SetTest("cartoon")}>
          Cartoon
        </Main.BottomBlock1>
        <Main.BottomBlock1 onClick={() => SetTest("sport")}>
          Futbol
        </Main.BottomBlock1> */}
        {header.map((value) => {
        return (
          <Main.BottomBlock1 onClick={() => navigate(`/home/:${value.title}`)}>
            {value.title}
          </Main.BottomBlock1>
        );
      })}
      </Main.Bottom>
    </div>
  );
};

export default Header;
