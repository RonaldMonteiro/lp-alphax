import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/index.module.scss";
import btn from "@/styles/button.module.css";

import * as React from "react";
import logo from "@/public/logo.png";
import logoMobile from "@/public/logo-mobile.png";
import arrow from "@/public/arrow.svg";
import iconDefault from "@/public/icondefault.svg";
import imgDefault from "@/public/imgdefault.svg";
import iconStar from "@/public/icon-star.svg";
import coins from "@/public/coins.svg";
import profile from "@/public/profile.svg";
import security from "@/public/security.svg";
import gestao from "@/public/gestao.svg";
import investiment from "@/public/investiment.svg";
import infi from "@/public/infi.png";
import axi from "@/public/axi.png";
import card from "@/public/card.png";
import token from "@/public/token.png";
import pay from "@/public/pay.png";
import logoBottom from "@/public/logo-bottom.png";

import { pt, Structure, en, es, ru } from "../lang/index";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Home() {
  const [changed, setChanged] = React.useState<Structure>(en);

  const Card = (
    <>
      <Image src={card} height={0} width={0} alt="" />
      <div>
        <h1>
          {changed.fifth_title1}
          <br />
          <span>{changed.fifth_title1_1}</span>
        </h1>
        <h2>
          <Image src={iconStar} height={0} width={0} alt="" />
          <p dangerouslySetInnerHTML={{ __html: changed.fifth_1_1 }}></p>
        </h2>
        <h2>
          <Image src={iconStar} height={0} width={0} alt="" />
          <p dangerouslySetInnerHTML={{ __html: changed.fifth_1_2 }}></p>
        </h2>
        <h2>
          <Image src={iconStar} height={0} width={0} alt="" />
          <p dangerouslySetInnerHTML={{ __html: changed.fifth_1_3 }}></p>
        </h2>
        <h2>
          <Image src={iconStar} height={0} width={0} alt="" />
          <p dangerouslySetInnerHTML={{ __html: changed.fifth_1_4 }}></p>
        </h2>
        <h2>
          <Image src={iconStar} height={0} width={0} alt="" />
          <p dangerouslySetInnerHTML={{ __html: changed.fifth_1_5 }}></p>
        </h2>
      </div>
    </>
  );

  const Token = (
    <>
      <Image src={token} height={0} width={0} alt="" />
      <div>
        <h1>
          {changed.fifth_title2}
          <span>{changed.fifth_title2_2}</span>
        </h1>
        <h2>
          <Image src={iconStar} height={0} width={0} alt="" />
          <p dangerouslySetInnerHTML={{ __html: changed.fifth_2_1 }}></p>
        </h2>
        <h2>
          <Image src={iconStar} height={0} width={0} alt="" />
          <p dangerouslySetInnerHTML={{ __html: changed.fifth_2_2 }}></p>
        </h2>
        <h2>
          <Image src={iconStar} height={0} width={0} alt="" />
          <p dangerouslySetInnerHTML={{ __html: changed.fifth_2_3 }}></p>
        </h2>
      </div>
    </>
  );
  const [toggle, setToggle] = React.useState(Card);

  const Pay = (
    <>
      <Image src={pay} height={0} width={0} alt="" />
      <div>
        <h1>
          {changed.fifth_title3}
          <span>{changed.fifth_title3_3}</span>
        </h1>
        <h2>
          <Image src={iconStar} height={0} width={0} alt="" />
          <p dangerouslySetInnerHTML={{ __html: changed.fifth_3_1 }}></p>
        </h2>
        <h2>
          <Image src={iconStar} height={0} width={0} alt="" />
          <p dangerouslySetInnerHTML={{ __html: changed.fifth_3_2 }}></p>
        </h2>
      </div>
    </>
  );
  const [selectedOption, setSelectedOption] = React.useState("1");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  React.useEffect(() => {
    if (selectedOption == "1") {
      setToggle(Card);
    } else if (selectedOption == "2") {
      setToggle(Token);
    } else if (selectedOption == "3") {
      setToggle(Pay);
    }
  }, [selectedOption]);
  const [open, setOpen] = React.useState(false);
  const [country, setCountry] = React.useState('us');

  const toggleMenu = () => {
    setOpen(!open);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const opens = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function changeLangEN() {
    setChanged(en);
    setCountry('us');
    setAnchorEl(null);
  }

  function changeLangPT() {
    setChanged(pt);
    setCountry('br');
    setAnchorEl(null);
  }
  function changeLangES() {
    setChanged(es);
    setCountry('es');

    setAnchorEl(null);
  }
  function changeLangRU() {
    setChanged(ru);
    setCountry('ru');
    setAnchorEl(null);
  }

  return (
    <>
      <Head>
        <title>AlphaX | Landing Page</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={styles["first-section"]}>
          <header>
            <div className={styles["pack-nav"]}>
              <Image
                className={styles["first-image-mobile"]}
                src={logoMobile}
                height={0}
                width={0}
                alt=""
              />
              <Image
                className={styles["first-image"]}
                src={logo}
                height={0}
                width={0}
                alt=""
              />

              <nav>
                <a className={styles["nav-link"]}>{changed.nav_one}</a>
                <a className={styles["nav-link"]}>{changed.nav_second}</a>
                <a className={styles["nav-link"]}>{changed.nav_third}</a>
              </nav>
            </div>

            <div style={{display:'flex'}}>

            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <img
                style={{ height: "auto", width: "30px" }}
                src={`https://www.bandeirasnacionais.com/data/flags/w580/${country}.webp`}
              ></img>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={opens}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={changeLangEN}
                sx={{ fontSize: 12, color: "gray" }}
              >
                <img
                  style={{ height: "auto", width: "25px", marginRight: "10px" }}
                  src="https://www.bandeirasnacionais.com/data/flags/w580/us.webp"
                ></img>
                EN-US
              </MenuItem>
              <MenuItem
                onClick={changeLangES}
                sx={{ fontSize: 12, color: "gray" }}
              >
                <img
                  style={{ height: "auto", width: "25px", marginRight: "10px" }}
                  src="https://www.bandeirasnacionais.com/data/flags/w580/es.webp"
                ></img>
                ES-ES
              </MenuItem>
              <MenuItem
                onClick={changeLangPT}
                sx={{ fontSize: 12, color: "gray" }}
              >
                <img
                  style={{ height: "auto", width: "25px", marginRight: "10px" }}
                  src="https://www.bandeirasnacionais.com/data/flags/w580/br.webp"
                ></img>
                PT-BR
              </MenuItem>
              <MenuItem
                onClick={changeLangRU}
                sx={{ fontSize: 12, color: "gray" }}
              >
                <img
                  style={{ height: "auto", width: "25px", marginRight: "10px" }}
                  src="https://www.bandeirasnacionais.com/data/flags/w580/ru.webp"
                ></img>
                RU-RU
              </MenuItem>
            </Menu>

            <a className={styles["nav-btn"]}>{changed.nav_btn}</a>
            </div>
            <button className={styles["btn-mobile"]}></button>
          </header>
          <div className={styles["first-box-headline"]}>
            <h1>
              {changed.first_title1} <span>{changed.first_title2}</span>{" "}
              {changed.first_title3}
            </h1>
            <p>{changed.first_subtitle}</p>
            <a>
              {changed.first_btn}
              <Image src={arrow} height={0} width={0} alt="" />
            </a>
          </div>
          {/* <div className={styles["first-box-cards"]}>
            <div className={styles["first-card"]}>
              <Image src={iconDefault} height={0} width={0} alt="" />
              <div>
                <h2>sssssssss</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit,
                </p>
              </div>
            </div>
            <div className={styles["first-card"]}>
              <Image src={iconDefault} height={0} width={0} alt="" />
              <div>
                <h2>sssssssss</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit,
                </p>
              </div>
            </div>
            <div className={styles["first-card"]}>
              <Image src={iconDefault} height={0} width={0} alt="" />
              <div>
                <h2>sssssssss</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit,
                </p>
              </div>
            </div>
          </div> */}
        </section>
        <section className={styles["second-section"]}>
          <Image src={coins} height={0} width={0} alt="" />

          <div>
            <h1>
              {changed.second_title1}
              <span>{changed.second_title2}</span>
            </h1>
            <p
              dangerouslySetInnerHTML={{ __html: changed.second_subtitle1 }}
            ></p>
            <br />
            <p
              dangerouslySetInnerHTML={{ __html: changed.second_subtitle2 }}
            ></p>

            <a>{changed.second_btn}</a>
          </div>
        </section>
        <section className={styles["third-section"]}>
          <div>
            <h1>
              {changed.third_title1}
              <span>
                <br /> {changed.third_title2}
              </span>
            </h1>
            <p
              dangerouslySetInnerHTML={{ __html: changed.third_subtitle1 }}
            ></p>
            <p
              dangerouslySetInnerHTML={{ __html: changed.third_subtitle2 }}
            ></p>
            <p
              dangerouslySetInnerHTML={{ __html: changed.third_subtitle3 }}
            ></p>
          </div>
          <Image src={profile} height={0} width={0} alt="" />
        </section>
        <section className={styles["fourth-section"]}>
          <div className={styles["fourth-frame"]}>
            <h1>{changed.fourth_title}</h1>
            <p>{changed.fourth_subtitle}</p>
            <div className={styles["row-cards"]}>
              <div>
                <Image src={security} height={0} width={0} alt="" />
                <h2> {changed.fourth_card1_title} </h2>
                <p>{changed.fourth_card1_subtitle}</p>
              </div>
              <div>
                <Image src={gestao} height={0} width={0} alt="" />
                <h2>{changed.fourth_card2_title} </h2>
                <p>{changed.fourth_card2_subtitle}</p>
              </div>
              <div>
                <Image src={investiment} height={0} width={0} alt="" />
                <h2> {changed.fourth_card3_title}</h2>
                <p>{changed.fourth_card3_subtitle}</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles["fifth-section"]}>
          <div className={styles["fifth-frame"]}>
            <div className={styles["nav-select"]}>
              <label className={styles["radio"]}>
                <input
                  type="radio"
                  name="button"
                  value="1"
                  checked={selectedOption === "1"}
                  onChange={handleOptionChange}
                />
                <p className={styles["button-label"]}>{changed.fifth_nav1}</p>
              </label>
              <label className={styles["radio"]}>
                <input
                  type="radio"
                  name="button"
                  value="2"
                  checked={selectedOption === "2"}
                  onChange={handleOptionChange}
                />
                <p className={styles["button-label"]}> {changed.fifth_nav2}</p>
              </label>
              <label className={styles["radio"]}>
                <input
                  type="radio"
                  name="button"
                  value="3"
                  checked={selectedOption === "3"}
                  onChange={handleOptionChange}
                />
                <p className={styles["button-label"]}>{changed.fifth_nav3}</p>
              </label>
            </div>
            <div className={styles["main-select"]}>
              {toggle}
              {/* <Image src={imgDefault} height={0} width={0} alt="" />
              <div>
                <h1>
                  Lorem ipsum dolor sit amet, <span>consectetur</span>{" "}
                  adipiscing elit
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                </p>
                <a>Lorem ipsum dolor</a>
              </div> */}
            </div>
          </div>
        </section>
        <section className={styles["sixth-section"]}>
          <h1 style={{ marginBottom: "10px" }}>{changed.sixth_title}</h1>
          <p className={styles["sixth-paragraph"]}>{changed.sixth_paragraph}</p>
          <div className={styles["sixth-frame"]}>
            <div className={styles["sixth-card"]}>
              <Image
                style={{ width: "50%", marginBottom: 20, marginTop: 10 }}
                src={infi}
                height={0}
                width={0}
                alt=""
              />
              <div>
                <h2>
                  <Image src={iconStar} height={0} width={0} alt="" />
                  <p dangerouslySetInnerHTML={{ __html: changed.inf_1 }}></p>
                </h2>
              </div>
              <div>
                <h2>
                  <Image src={iconStar} height={0} width={0} alt="" />
                  <p dangerouslySetInnerHTML={{ __html: changed.inf_2 }}></p>
                </h2>
              </div>
              <div>
                <h2>
                  <Image src={iconStar} height={0} width={0} alt="" />
                  <p dangerouslySetInnerHTML={{ __html: changed.inf_3 }}></p>
                </h2>
              </div>
              <div>
                <h2>
                  <Image src={iconStar} height={0} width={0} alt="" />
                  <p dangerouslySetInnerHTML={{ __html: changed.inf_4 }}></p>
                </h2>
              </div>

              <div>
                <h2>
                  <Image src={iconStar} height={0} width={0} alt="" />
                  <p dangerouslySetInnerHTML={{ __html: changed.inf_5 }}></p>
                </h2>
              </div>

              <div>
                <h2>
                  <Image src={iconStar} height={0} width={0} alt="" />
                  <p dangerouslySetInnerHTML={{ __html: changed.inf_6 }}></p>
                </h2>
              </div>
            </div>
            <div className={styles["sixth-divider"]} />
            <div className={styles["sixth-card"]}>
              <Image
                style={{ marginBottom: 20 }}
                src={axi}
                height={0}
                width={0}
                alt=""
              />
              <div>
                <h2>
                  <Image src={iconStar} height={0} width={0} alt="" />
                  <p dangerouslySetInnerHTML={{ __html: changed.axi_1 }}></p>
                </h2>
              </div>
              <div>
                <h2>
                  <Image src={iconStar} height={0} width={0} alt="" />
                  <p dangerouslySetInnerHTML={{ __html: changed.axi_2 }}></p>
                </h2>
              </div>
              <div>
                <h2>
                  <Image src={iconStar} height={0} width={0} alt="" />
                  <p dangerouslySetInnerHTML={{ __html: changed.axi_3 }}></p>
                </h2>
              </div>
              <div>
                <h2>
                  <Image src={iconStar} height={0} width={0} alt="" />
                  <p dangerouslySetInnerHTML={{ __html: changed.axi_4 }}></p>
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className={styles["seventh-section"]}>
          <div>
            <h1 dangerouslySetInnerHTML={{ __html: changed.banner_title }}></h1>
            <a>{changed.banner_btn}</a>
          </div>
        </section>
        <footer className={styles.footer}>
          <div className={styles["footer-frame"]}>
            <div className={styles["card-info"]}>
              <Image src={logoBottom} height={0} width={0} alt="" />
              <p dangerouslySetInnerHTML={{ __html: changed.footer_info }}></p>
              <div>
                <InstagramIcon sx={{ color: "#626262" }} />
                <FacebookIcon sx={{ color: "#626262" }} />
                <WhatsAppIcon sx={{ color: "#626262" }} />
              </div>
            </div>
            <div className={styles["card-link"]}>
              <h1>{changed.footer_link}</h1>
              <a>{changed.footer_link1}</a>
              <a>{changed.footer_link2}</a>
              <a>{changed.footer_link3}</a>
            </div>
          </div>
          <div className={styles["footer-divider"]}></div>
          <div className={styles["footer-copy"]}>
            <p>©Alphax 2023.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
