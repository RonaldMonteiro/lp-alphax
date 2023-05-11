import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/index.module.scss";
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

import { pt, Structure } from "../lang/index";

export default function Home() {
  const [changed, setChanged] = React.useState<Structure>(pt);

  function changeLang() {
    setChanged(pt);
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
            <div>
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

            <a className={styles["nav-btn"]}>{changed.nav_btn}</a>
            <button></button>
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
                <input type="radio" name="button" value="1" />
                <p className={styles["button-label"]}>{changed.fifth_nav1}</p>
              </label>
              <label className={styles["radio"]}>
                <input type="radio" name="button" value="2" />
                <p className={styles["button-label"]}> {changed.fifth_nav2}</p>
              </label>
              <label className={styles["radio"]}>
                <input type="radio" name="button" value="3" />
                <p className={styles["button-label"]}>{changed.fifth_nav3}</p>
              </label>
            </div>
            <div className={styles["main-select"]}>
              <Image src={imgDefault} height={0} width={0} alt="" />
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
              </div>
            </div>
          </div>
        </section>
        <section className={styles["sixth-section"]}>
          <h1 style={{ marginBottom: "10px" }}>{changed.sixth_title}</h1>
          <p className={styles["sixth-paragraph"]}>{changed.sixth_paragraph}</p>
          <div className={styles["sixth-frame"]}>
            <div className={styles["sixth-card"]}>
              <Image
                style={{ width: "50%", marginBottom:20, marginTop:10 }}
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
              <Image style={{marginBottom:20}} src={axi} height={0} width={0} alt="" />
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
        <footer></footer>
      </main>
    </>
  );
}
