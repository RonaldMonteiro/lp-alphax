import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/index.module.scss";

import logo from "@/public/logo.png";
import logoMobile from "@/public/logo-mobile.png";

import arrow from "@/public/arrow.svg";
import iconDefault from "@/public/icondefault.svg";
import imgDefault from "@/public/imgdefault.svg";
import iconStar from "@/public/icon-star.svg";

export default function Home() {
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
                <a className={styles["nav-link"]}>Lorem Ipsum</a>
                <a className={styles["nav-link"]}>Lorem Ipsum</a>
                <a className={styles["nav-link"]}>Lorem Ipsum</a>
              </nav>
            </div>
            <a className={styles["nav-btn"]}>Lorem Ipsum dolor</a>
            <button></button>
          </header>
          <div className={styles["first-box-headline"]}>
            <h1>
              Lorem ipsum dolor sit amet, <span>consectetur</span> adipiscing
              elit,
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi{" "}
            </p>
            <a>
              Lorem ipsum dolor{" "}
              <Image src={arrow} height={0} width={0} alt="" />
            </a>
          </div>
          <div className={styles["first-box-cards"]}>
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
          </div>
        </section>
        <section className={styles["second-section"]}>
          <Image src={imgDefault} height={0} width={0} alt="" />
          <div>
            <h1>
              Lorem ipsum dolor sit amet, <span>consectetur</span> adipiscing
              elit
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
            </p>
            <a>Lorem ipsum dolor</a>
          </div>
        </section>
        <section className={styles["third-section"]}>
          <div>
            <h1>
              Lorem ipsum dolor sit amet, <span>consectetur</span> adipiscing
              elit
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
            </p>
          </div>
          <Image src={imgDefault} height={0} width={0} alt="" />
        </section>
        <section className={styles["fourth-section"]}>
          <div className={styles["fourth-frame"]}>
            <h1>
              Lorem ipsum dolor sit amet, <span>consectetur</span> adipiscing
              elit
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
            </p>
            <div className={styles["row-cards"]}>
              <div>
                <Image src={iconDefault} height={0} width={0} alt="" />
                <h2>Lorem ipsum </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <Image src={iconDefault} height={0} width={0} alt="" />
                <h2>Lorem ipsum </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <Image src={iconDefault} height={0} width={0} alt="" />
                <h2>Lorem ipsum </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles["fifth-section"]}>
          <div className={styles["fifth-frame"]}>
            <div className={styles["nav-select"]}>
              <label className={styles["radio"]}>
                <input type="radio" name="button" value="1" />
                <p className={styles["button-label"]}> Alphax Card</p>
              </label>
              <label className={styles["radio"]}>
                <input type="radio" name="button" value="2" />
                <p className={styles["button-label"]}> Alphax Token</p>
              </label>
              <label className={styles["radio"]}>
                <input type="radio" name="button" value="3" />
                <p className={styles["button-label"]}>Alphax Pay</p>
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
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1>
          <p className={styles["sixth-paragraph"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi{" "}
          </p>
          <div className={styles["sixth-frame"]}>
            <div className={styles["sixth-card"]}>
              <Image src={iconDefault} height={0} width={0} alt="" />
              <div>
                <h2>
                  <Image src={iconStar} height={0} width={0} alt="" />
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
              <div>
                <h2>
                  <Image src={iconStar} height={0} width={0} alt="" />
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
              <div>
                <h2>
                  <Image src={iconStar} height={0} width={0} alt="" />
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
            <div className={styles["sixth-divider"]} />
            <div className={styles["sixth-card"]}>
              <Image src={iconDefault} height={0} width={0} alt="" />
              <div>
                <h2>
                  <Image src={iconStar} height={0} width={0} alt="" />
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
              <div>
                <h2>
                  <Image src={iconStar} height={0} width={0} alt="" />
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
              <div>
                <h2>
                  <Image src={iconStar} height={0} width={0} alt="" />
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer></footer>
      </main>
    </>
  );
}
