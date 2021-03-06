import React from "react";
import styled from "styled-components";
import RubberBand from "react-reveal/RubberBand";
import Spin from "react-reveal/Spin";
import Shake from "react-reveal/Shake";
import { Link } from "react-router-dom";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiBabel,
  SiGulp,
  SiWebpack,
} from "react-icons/si";

const BlockWrap = styled.div`
  .headwrap {
    display: flex;
    justify-content: space-between;
    padding: 40px 35px 0;
    margin-bottom: 30px;
  }
  .headabout {
    font-size: 42px;
    font-weight: bold;
    text-decoration: underline;
    text-underline-position: under;
    text-decoration-color: #00e274;
    margin-bottom: 20px;
  }
  .devel {
    margin-left: 50px;
    margin-bottom: 50px;
    & > h2 {
      font-size: 30px;
      margin-bottom: 15px;
      font-weight: bold;
    }
    & > p {
      font-size: 18px;
      word-spacing: 2px;
      padding-left: 10px;
      line-height: 1.3;
    }
  }
  .aboutwrap {
    margin-left: 20px;
    margin-bottom: 15px;
  }
  .about {
    margin-right: 20px;
  }
  .spanwrap {
    margin-right: 10px;
    font-size: 25px;
    color: #354457;
  }
  .hiswrap {
    width: 750px;
    height: 200px;
    margin: 30px auto 0;
    color: white;
    margin-bottom: 40px;
  }
  .education {
    width: 100%;
    height: 200px;
    margin-right: 40px;
    color: black;
    & > h2 {
      font-size: 32px;
      margin-bottom: 15px;
      font-weight: bold;
    }
    & > ul > li {
      font-size: 18px;
      padding-left: 10px;
      margin: 15px 0;
    }
  }
  .skillwrap {
    display: flex;
  }
  .skillset {
    width: 400px;
    height: 320px;
    margin-right: 40px;
    margin-left: 47px;
    & > h2 {
      font-size: 32px;
      margin-bottom: 30px;
      font-weight: bold;
    }
  }
  .iconul {
    display: flex;
    & > li {
      margin-right: 20px;
      margin-bottom: 20px;
    }
    & > li:nth-child(1) {
      color: #f16528;
    }
    & > li:nth-child(2) {
      color: #2cabde;
    }
    & > li:nth-child(3) {
      color: #ffd93a;
    }
    & > li:nth-child(4) {
      color: #5fd3f3;
    }
  }
  .iconul2 {
    display: flex;
    & > li {
      margin-right: 20px;
    }
    & > li:nth-child(1) {
      color: #7348b6;
    }
    & > li:nth-child(2) {
      color: #f1d63c;
    }
    & > li:nth-child(3) {
      color: #94131c;
    }
    & > li:nth-child(4) {
      color: #1b74b9;
    }
  }
  .Etc {
    width: 310px;
    height: 320px;
    & > h2 {
      font-size: 32px;
      margin-bottom: 20px;
      font-weight: bold;
    }
  }
  .etcul {
    padding-left: 10px;
    & > li {
      margin-bottom: 5px;
      font-size: 20px;
      margin-bottom: 15px;
    }
  }
  .copy {
    text-align: center;
    font-size: 18px;
    margin-top: 30px;
    & > small {
      margin-bottom: 20px;
    }
  }
`;
const Aboutlink = styled(Link)`
  font-size: 25px;
  &:nth-child(1) {
    color: #00e670;
  }
  &:nth-child(2) {
    color: #354457;
  }
  &:hover {
    color: #00e670;
  }
`;

function Block2() {
  const iconsize = "60px";
  return (
    <BlockWrap>
      <div className="headwrap">
        <div className="aboutwrap">
          <h1 className="headabout">Home</h1>
        </div>
        <div className="spanwrap">
          <Aboutlink to="/">
            <span className="about">Home</span>
          </Aboutlink>
          <Aboutlink to="/project">
            <span>Project</span>
          </Aboutlink>
        </div>
      </div>
      <div className="devel">
        <h2>끊임없이 성장하는 개발자</h2>
        <p>
          안녕하세요. 끊임없이 공부하는 개발자 안병욱입니다. 웹은 지속적인
          변화가 빠르게 일어나고 있습니다.
          <br /> 하지만 저 또한 한곳에 머물지않고 꾸준히 자기계발을 통하여
          성장하는 개발자가 되는 것이 목표입니다.
        </p>
      </div>
      <div className="hiswrap">
        <div className="education">
          <h2>Education</h2>
          <ul>
            <li>
              - 김버그의 HTML&CSS는 재밌다 / 해당 강의를 통해 코딩의 재미와
              HTML,CSS의 기본을 습득.
            </li>
            <li>
              - 코리아 IT 아카데미(20.05~20.07) / HTML,CSS,JS 과정을 수료.
            </li>
            <li>
              - 노마드코더 자바스크립트 / 해당 강의를 통해 문법과 활용도를 습득.
            </li>
            <li>
              - 리액트(공식문서) / 공식문서를 통해 기본기를 다지고 프로젝트에
              적용.
            </li>
          </ul>
        </div>
        <div className="history">History</div>
      </div>
      <div className="skillwrap">
        <div className="skillset">
          <h2>Language & Framework</h2>
          <div>
            <ul className="iconul">
              <li>
                <RubberBand>
                  <SiHtml5 size={iconsize} />
                </RubberBand>
              </li>
              <li>
                <RubberBand>
                  <SiCss3 size={iconsize} />
                </RubberBand>
              </li>
              <li>
                <RubberBand>
                  <SiJavascript size={iconsize} />
                </RubberBand>
              </li>
              <li>
                <Spin>
                  <SiReact size={iconsize} />
                </Spin>
              </li>
            </ul>
            <ul className="iconul2">
              <li>
                <Spin>
                  <SiRedux size={iconsize} />
                </Spin>
              </li>
              <li>
                <Shake>
                  <SiBabel size={iconsize} />
                </Shake>
              </li>
              <li>
                <Shake>
                  <SiGulp size={iconsize} />
                </Shake>
              </li>
              <li>
                <Shake>
                  <SiWebpack size={iconsize} />
                </Shake>
              </li>
            </ul>
          </div>
        </div>
        <div className="Etc">
          <h2>Tools & Software</h2>
          <ul className="etcul">
            <li>- Github</li>
            <li>- Visual Studio</li>
            <li>- Web Storm</li>
            <li>- Photo Shop</li>
          </ul>
        </div>
      </div>
      <div className="copy">
        <small>© Byeongwook 2020 All right reserved.</small>
      </div>
    </BlockWrap>
  );
}

export default Block2;
