import React from "react";
import ReactPlayer from "react-player/file";
// import "./about.css";

const AboutPage = () => {
  return (
    <>
      <div className="screen-slider__wrap">
        <div className="screen-slider">
          <Screen1 />
          <Screen2 />
          <Screen3 />
          <Screen4 />
          <Screen5 />
          <Screen6 />
          <Screen7 />
          <Screen8 />
        </div>
      </div>
      <div className="scroll-icon">
        <div className="mouse"></div>
        <p className="scroll-icon__text">Scroll</p>
      </div>
    </>
  );
};

const Aside = () => {
  return (
    <div className="screen__aside main-aside">
      {/* <div className="main-aside__video-outer">
        <video
          className="main-aside__video"
          src="/static/landing/video/main-video2.mp4"
          autoPlay=""
          preload="auto"
          loop=""
          muted=""
          poster="/static/landing/img/main-video-poster2.jpg"
        ></video>
      </div> */}
      <ReactPlayer
        className="main-aside__video-outer"
        url="/landing/main-video2.mp4"
        loop={true}
        playing={true}
        volume={0}
        muted={true}
        width="100%"
        height="340px"
      />
      <div className="screen-aside-chats">
        <div className="screen-aside-chat__area screen-aside-chat__area_pressed-right">
          <svg width="220" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M212.656 20c0-11.046-8.955-20-20-20H20C8.954 0 0 8.954 0 20v12c0 11.046 8.954 20 20 20h200a14.077 14.077 0 01-7.344-12.363V20z"
              fill="#A0A5AB"
            ></path>
          </svg>
        </div>
        <div className="screen-aside-chat__area">
          <svg width="260" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 20C8 8.954 16.954 0 28 0h212c11.046 0 20 8.954 20 20v12c0 11.046-8.954 20-20 20H0c4.903-2.452 8-7.463 8-12.944V20z"
              fill="#D2B47D"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

const Screen1 = () => {
  return (
    <div className="screen">
      <div className="screen__main-part">
        <section className="main">
          <div className="container">
            <div className="main-banner section_dark section_dark_with-bg">
              {/* <video src="/landing/main-video1.mp4" autoPlay muted="" loop="" className="main-banner__video"></video> */}

              <ReactPlayer
                className="main-banner__video"
                url="/landing/main-video1.mp4"
                loop={true}
                playing={true}
                volume={0}
                muted={true}
                width="100%"
                height="100%"
              />

              <div className="main-banner-content screen-content">
                <h1 className="main__header">
                  Revolver – рандомный видео-чат с поиском по геолокации и системой рейтинга
                </h1>
                <div className="advantages">
                  <div className="advantages-item">
                    <div className="advantages-item__image-wrap">
                      <svg viewBox="0 0 36 36" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#F2F7F7" d="M11.5 4h1v32h-1zM35 4h1v32h-1zM23.5 0h1v32h-1zM0 0h1v32H0z"></path>
                        <path fill="#F2F7F7" d="M8.5 23h7v1h-7zm12-11h7v1h-7z"></path>
                      </svg>
                    </div>
                    <div className="advantages-item__content">
                      <h4 className="advantages-item__header p2">Фильтры поиска</h4>
                      <p className="p6">Общайся с теми, кто тебе интересен </p>
                    </div>
                  </div>
                  <div className="advantages-item">
                    <div className="advantages-item__image-wrap">
                      <svg viewBox="0 0 36 36" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="10" r="7.5" stroke="#F2F7F7"></circle>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M23 33v-2.153a6.843 6.843 0 00-3.216-5.803 14.686 14.686 0 00-15.568 0A6.843 6.843 0 001 30.847V33h22zM3.686 24.196A7.843 7.843 0 000 30.846V34h24v-3.153a7.843 7.843 0 00-3.686-6.651 15.686 15.686 0 00-16.628 0zM21.724 4.847A8.203 8.203 0 0021 4.119 6.33 6.33 0 0125.76 2C29.206 2 32 4.686 32 8s-2.794 6-6.24 6a6.416 6.416 0 01-2.84-.656c.145-.303.271-.617.377-.94A5.34 5.34 0 0025.76 13c2.872 0 5.2-2.239 5.2-5s-2.328-5-5.2-5c-1.63 0-3.083.72-4.037 1.847zM28 30h8v-4.083a6.64 6.64 0 00-2.78-5.403 13.283 13.283 0 00-11.939-1.787c.504.18 1 .387 1.488.62a12.28 12.28 0 019.869 1.98A5.64 5.64 0 0135 25.918V29h-7v1z"
                          fill="#F2F7F7"
                        ></path>
                      </svg>
                    </div>
                    <div className="advantages-item__content">
                      <h4 className="advantages-item__header p2">Контакты</h4>
                      <p className="p6">Добавляй в друзей тех, кто понравился</p>
                    </div>
                  </div>
                  <div className="advantages-item">
                    <div className="advantages-item__image-wrap">
                      <svg viewBox="0 0 36 36" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 20a8 8 0 018-8h8a8 8 0 018 8v4a8 8 0 01-8 8v4l-4-4h-4a8 8 0 01-8-8v-4zm8-7a7 7 0 00-7 7v4a7 7 0 007 7h4.414L27 33.586V31h1a7 7 0 007-7v-4a7 7 0 00-7-7h-8z"
                          fill="#FFDE3D"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 4.5A4.5 4.5 0 014.5 0h15A4.5 4.5 0 0124 4.5v3.6h-1V4.5A3.5 3.5 0 0019.5 1h-15A3.5 3.5 0 001 4.5v11A3.5 3.5 0 004.5 19h3.667v1H4.5A4.5 4.5 0 010 15.5v-11z"
                          fill="#FFDE3D"
                        ></path>
                      </svg>
                    </div>
                    <div className="advantages-item__content">
                      <h4 className="advantages-item__header p2">Чаты</h4>
                      <p className="p6">Переписывайся и созванивайся с друзьями</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="main-text-block section_dark">
            <div className="container">
              <div className="screen-content screen-content_small">
                <div className="main-text-block__content">
                  <h2 className="main-text-block__header">больше, чем видео-чат</h2>
                  <p className="main-text-block__text">
                    Револьвер – это новый формат социальной сети, где знакомства происходят в формате видео-чата. Это
                    дает возможность познакомиться с “настоящим” человеком, а не его юзерпиком
                  </p>
                </div>
              </div>
            </div>
            <div className="decorators">
              <div className="circle-decorator main-text-block__decorator"></div>
              <div className="circle-decorator main-text-block__decorator"></div>
              <div className="circle-decorator main-text-block__decorator"></div>
              <div className="circle-decorator main-text-block__decorator"></div>
              <div className="circle-decorator main-text-block__decorator"></div>
            </div>
          </section>
        </section>
      </div>

      <Aside />
    </div>
  );
};

const Screen2 = () => {
  return (
    <div className="screen" data-screen-name="settings" data-screen-number="1">
      <div className="screen__main-part section_dark">
        <section className="section settings ">
          <div className="container">
            <div className="screen-content screen-content_small">
              <div className="section__text-content settings__text-content">
                <h2 className="settings__header section__header">
                  Настрой Фильтр по возрасту, полу, рейтингу и геолокации и общайся только с теми, кто интересен лично
                  тебе
                </h2>
                <p className="settings__text">
                  В настройках можно закрыть доступ к личной информации и показывать только для контактов. Мы делаем
                  все, чтобы общение в нашем сервисе приносило только положительные эмоции.
                </p>
              </div>
              <div className="advantages">
                <div className="advantages-item">
                  <div className="advantages-item__image-wrap">
                    <svg viewBox="0 0 36 36" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M31.09 17.59A13.091 13.091 0 0018.41 4.91V0h-.82v4.91A13.091 13.091 0 004.91 17.59H0v.82h4.91a13.091 13.091 0 0012.68 12.68V36h.82v-4.91a13.091 13.091 0 0012.68-12.68H36v-.82h-4.91zM18 30.274a12.273 12.273 0 110-24.547 12.273 12.273 0 010 24.547zm0-13.01a.737.737 0 100 1.474.737.737 0 000-1.473z"
                        fill="#FFDE3D"
                      ></path>
                    </svg>
                  </div>
                  <div className="advantages-item__content">
                    <h4 className="settings-item__header p2 advantages-item__header">Геолокация</h4>
                    <p className="p6">Знакомься и общайся с теми, кто рядом</p>
                  </div>
                </div>
                <div className="advantages-item">
                  <div className="advantages-item__image-wrap">
                    <svg viewBox="0 0 36 36" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18 0L4 5.67v12.02a17.75 17.75 0 002.291 8.738 17.293 17.293 0 006.265 6.396L18 36l5.444-3.176a17.294 17.294 0 006.265-6.396A17.75 17.75 0 0032 17.69V5.67L18 0zm13.222 17.69a16.974 16.974 0 01-2.194 8.332 16.54 16.54 0 01-5.972 6.103L18 35.063l-5.056-2.938a16.54 16.54 0 01-5.973-6.103 16.975 16.975 0 01-2.193-8.332V6.21L18 .857l13.222 5.351V17.69zm-18.138-2.398l-.544.556 4.527 4.621 6.689-6.828-.545-.572-6.144 6.273-3.983-4.05z"
                        fill="#FFDE3D"
                      ></path>
                    </svg>
                  </div>
                  <div className="advantages-item__content">
                    <h4 className="settings-item__header p2 advantages-item__header">Приватность</h4>
                    <p className="p6">Контролируй доступ к своей информации</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="decorators">
            <div className="circle-decorator settings__decorator"></div>
            <div className="circle-decorator settings__decorator"></div>
            <div className="circle-decorator settings__decorator"></div>
            <div className="circle-decorator settings__decorator"></div>
            <div className="circle-decorator settings__decorator"></div>
          </div>
        </section>
      </div>
      <div className="screen__aside screen__aside_pt">
        <div className="emojies-wrap">
          <div className="emoji  emoji--haha">
            <div className="emoji__face">
              <div className="emoji__eyes"></div>
              <div className="emoji__mouth">
                <div className="emoji__tongue"></div>
              </div>
            </div>
          </div>
          <div className="emoji  emoji--wow">
            <div className="emoji__face">
              <div className="emoji__eyebrows"></div>
              <div className="emoji__eyes"></div>
              <div className="emoji__mouth"></div>
            </div>
          </div>
          <div className="emoji  emoji--love">
            <div className="emoji__heart"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Screen3 = () => {
  return (
    <div className="screen" data-screen-name="leisure" data-screen-number="2">
      <div className="screen__main-part">
        <section
          className="section leisure section_dark _with-bg _full-height"
          data-load-content="background"
          data-content-src="/landing/1_promo.jpg"
          data-content-loaded="true"
        >
          <div className="container">
            <div className="screen-content screen-content_small">
              <div className="section__text-content">
                <h2 className="leisure__header section__header">скрасить досуг, Чтобы не скучать дома</h2>
                <p className="leisure__text">
                  Посмотрели все сериалы и нечем себя занять? Хочется чего-то нового? Попробуйте наш сервис и вы не
                  заметите как пролетит время, а может найдете новых друзей. Превать общение можно в один клик, так же
                  как и начать
                </p>
              </div>
            </div>
          </div>
          <div className="decorators">
            <div className="circle-decorator leisure__decorator"></div>
            <div className="circle-decorator leisure__decorator"></div>
            <div className="circle-decorator leisure__decorator"></div>
            <div className="circle-decorator leisure__decorator"></div>
          </div>
        </section>
      </div>
      <div className="screen__aside screen__aside_pt">
        <div className="emojies-wrap">
          <div className="emoji  emoji--wow">
            <div className="emoji__face">
              <div className="emoji__eyebrows"></div>
              <div className="emoji__eyes"></div>
              <div className="emoji__mouth"></div>
            </div>
          </div>
        </div>
        <div className="screen-aside-chats">
          <div className="screen-aside-chat__area screen-aside-chat__area_pressed-right">
            <svg width="220" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M212.656 20c0-11.046-8.955-20-20-20H20C8.954 0 0 8.954 0 20v12c0 11.046 8.954 20 20 20h200a14.077 14.077 0 01-7.344-12.363V20z"
                fill="#A0A5AB"
              ></path>
            </svg>
          </div>
          <div className="screen-aside-chat__area">
            <svg width="260" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 20C8 8.954 16.954 0 28 0h212c11.046 0 20 8.954 20 20v12c0 11.046-8.954 20-20 20H0c4.903-2.452 8-7.463 8-12.944V20z"
                fill="#d2b47d"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const Screen4 = () => {
  return (
    <div className="screen" data-screen-name="party" data-screen-number="3">
      <div className="screen__main-part">
        <section
          className="section party section_dark _with-bg _full-height"
          data-load-content="background"
          data-content-src="/static/landing/img/temp/2_promo.jpg"
          data-content-loaded="true"
        >
          <div className="container">
            <div className="screen-content screen-content_small">
              <div className="section__text-content">
                <h2 className="party__header section__header">Добавить драйва домашней вечеринке</h2>
                <p className="party__text">
                  Вечеринка в разгаре и вы думаете, чем занять гостей? Как не снизить градус веселья? Попробуйте нашу
                  чат-рулетку и яркие эмоции обеспечены для всей компании. Ваши друзья останутся довольны
                </p>
              </div>
            </div>
          </div>
          <div className="decorators">
            <div className="circle-decorator party__decorator"></div>
            <div className="circle-decorator party__decorator"></div>
            <div className="circle-decorator party__decorator"></div>
            <div className="circle-decorator party__decorator"></div>
          </div>
        </section>
      </div>
      <div className="screen__aside screen__aside_pt">
        <div className="emojies-wrap">
          <div className="emoji  emoji--haha">
            <div className="emoji__face">
              <div className="emoji__eyes"></div>
              <div className="emoji__mouth">
                <div className="emoji__tongue"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="screen-aside-chats">
          <div className="screen-aside-chat__area screen-aside-chat__area_pressed-right">
            <svg width="220" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M212.656 20c0-11.046-8.955-20-20-20H20C8.954 0 0 8.954 0 20v12c0 11.046 8.954 20 20 20h200a14.077 14.077 0 01-7.344-12.363V20z"
                fill="#A0A5AB"
              ></path>
            </svg>
          </div>
          <div className="screen-aside-chat__area">
            <svg width="260" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 20C8 8.954 16.954 0 28 0h212c11.046 0 20 8.954 20 20v12c0 11.046-8.954 20-20 20H0c4.903-2.452 8-7.463 8-12.944V20z"
                fill="#d2b47d"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const Screen5 = () => {
  return (
    <div className="screen" data-screen-name="friends" data-screen-number="4">
      <div className="screen__main-part">
        <section
          className="section friends section_dark _with-bg _full-height"
          data-load-content="background"
          data-content-src="/static/landing/img/temp/3_promo.jpg"
          data-content-loaded="true"
        >
          <div className="container">
            <div className="screen-content screen-content_small">
              <div className="section__text-content">
                <h2 className="friends__header section__header">Найти друзей по соседству</h2>
                <p className="friends__text">
                  С помощью фильтра геолокации можно познакомиться с теми, кто живет рядом. Найдите себе компанию для
                  прогулок, походов в кино и досуга
                </p>
              </div>
            </div>
          </div>
          <div className="decorators">
            <div className="circle-decorator friends__decorator"></div>
            <div className="circle-decorator friends__decorator"></div>
            <div className="circle-decorator friends__decorator"></div>
            <div className="circle-decorator friends__decorator"></div>
          </div>
        </section>
      </div>
      <div className="screen__aside screen__aside_pt">
        <div className="emojies-wrap">
          <div className="emoji  emoji--haha">
            <div className="emoji__face">
              <div className="emoji__eyes"></div>
              <div className="emoji__mouth">
                <div className="emoji__tongue"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="screen-aside-chats">
          <div className="screen-aside-chat__area screen-aside-chat__area_pressed-right">
            <svg width="220" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M212.656 20c0-11.046-8.955-20-20-20H20C8.954 0 0 8.954 0 20v12c0 11.046 8.954 20 20 20h200a14.077 14.077 0 01-7.344-12.363V20z"
                fill="#A0A5AB"
              ></path>
            </svg>
          </div>
          <div className="screen-aside-chat__area">
            <svg width="260" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 20C8 8.954 16.954 0 28 0h212c11.046 0 20 8.954 20 20v12c0 11.046-8.954 20-20 20H0c4.903-2.452 8-7.463 8-12.944V20z"
                fill="#d2b47d"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const Screen6 = () => {
  return (
    <div className="screen" data-screen-name="meeting" data-screen-number="5">
      <div className="screen__main-part">
        <section
          className="section meeting section_dark _with-bg _full-height"
          data-load-content="background"
          data-content-src="/static/landing/img/temp/4_promo.jpg"
          data-content-loaded="true"
        >
          <div className="container">
            <div className="screen-content screen-content_small">
              <div className="section__text-content">
                <h2 className="meeting__header section__header">Найти вторую половинку</h2>
                <p className="meeting__text">
                  Специально для тех, кто в поиске мы предусмотрели функционал чата, звонков и добавления в друзья
                </p>
              </div>
            </div>
          </div>
          <div className="decorators">
            <div className="circle-decorator meeting__decorator"></div>
            <div className="circle-decorator meeting__decorator"></div>
            <div className="circle-decorator meeting__decorator"></div>
            <div className="circle-decorator meeting__decorator"></div>
          </div>
        </section>
      </div>
      <div className="screen__aside meeting__aside_pt">
        <div className="emojies-wrap meeting__emojies-wrap">
          <div className="emoji  emoji--love">
            <div className="emoji__heart"></div>
          </div>
        </div>
        <div className="screen-aside-chats">
          <div className="screen-aside-chat__area screen-aside-chat__area_pressed-right">
            <svg width="220" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M212.656 20c0-11.046-8.955-20-20-20H20C8.954 0 0 8.954 0 20v12c0 11.046 8.954 20 20 20h200a14.077 14.077 0 01-7.344-12.363V20z"
                fill="#A0A5AB"
              ></path>
            </svg>
          </div>
          <div className="screen-aside-chat__area">
            <svg width="260" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 20C8 8.954 16.954 0 28 0h212c11.046 0 20 8.954 20 20v12c0 11.046-8.954 20-20 20H0c4.903-2.452 8-7.463 8-12.944V20z"
                fill="#d2b47d"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const Screen7 = () => {
  return (
    <div className="screen" data-screen-name="emotions" data-screen-number="6">
      <div className="screen__main-part">
        <section
          className="section emotions section_dark _with-bg _full-height"
          data-load-content="video"
          data-content-src="/static/landing/video/main-video3.mp4, /static/landing/img/main-video-poster3.jpg"
          data-load-via="4"
          data-content-loaded="true"
        >
          {/* <video autoPlay="" preload="auto" loop="" muted="" className="emotions__video" poster="/static/landing/img/main-video-poster3.jpg" src="/landing/main-video3.mp4"></video> */}

          <ReactPlayer
            className="emotions__video"
            url="/landing/main-video3.mp4"
            loop={true}
            playing={true}
            volume={0}
            muted={true}
            width="100%"
            height="100%"
          />

          <div className="container">
            <div className="screen-content screen-content_small">
              <div className="section__text-content">
                <h2 className="emotions__header section__header">REvolver – всегда яркие эмоции</h2>
                <p className="emotions__text">
                  Откройтесь новому формату закомств. Подарите себе незабываемые опыт и эмоции, это совершенно бесплатно
                </p>
              </div>
            </div>
          </div>
          <div className="decorators">
            <div className="circle-decorator emotions__decorator"></div>
            <div className="circle-decorator emotions__decorator"></div>
            <div className="circle-decorator emotions__decorator"></div>
            <div className="circle-decorator emotions__decorator"></div>
            <div className="circle-decorator emotions__decorator"></div>
          </div>
        </section>
      </div>
      <div className="screen__aside screen__aside_pt">
        <div className="emojies-wrap">
          <div className="emoji  emoji--haha">
            <div className="emoji__face">
              <div className="emoji__eyes"></div>
              <div className="emoji__mouth">
                <div className="emoji__tongue"></div>
              </div>
            </div>
          </div>
          <div className="emoji  emoji--wow">
            <div className="emoji__face">
              <div className="emoji__eyebrows"></div>
              <div className="emoji__eyes"></div>
              <div className="emoji__mouth"></div>
            </div>
          </div>
          <div className="emoji  emoji--love">
            <div className="emoji__heart"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Screen8 = () => {
  return (
    <div className="screen" data-screen-name="format" data-screen-number="7">
      <div className="screen__main-part">
        <section
          className="section format section_dark _with-bg _full-height"
          data-load-content="background"
          data-content-src="/static/landing/img/temp/5_promo.jpg"
          data-content-loaded="true"
        >
          <div className="container">
            <div className="screen-content screen-content_small">
              <div className="section__text-content">
                <h2 className="format__header section__header">
                  Что лучше? Классическая или рейтинговая? <br />
                  какой формат подойдет <br /> тебе?
                </h2>

                <p className="format__text">
                  Попробуй самым первым и узнай наверняка! Оставь свою почту и мы пригласим тебя для тестированния
                  сервиса еще до запуска. У тебя есть шанс повлиять на развитие проекта
                </p>
              </div>

              <form
                className="callback-form format__form"
                noValidate=""
                method="post"
                action="https://testchatrevolver.space/mail.php"
              >
                <div className="callback-form__input-outer input-outer">
                  <input
                    type="email"
                    value=""
                    name="email"
                    className="callback-form__input required"
                    placeholder="Email"
                  />
                </div>
                <button className="callback-form__button button button_primary button_rounded">Subscribe a news</button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <div className="screen__aside screen__aside_pt">
        <div className="emojies-wrap">
          <div className="emoji  emoji--haha">
            <div className="emoji__face">
              <div className="emoji__eyes"></div>
              <div className="emoji__mouth">
                <div className="emoji__tongue"></div>
              </div>
            </div>
          </div>
          <div className="emoji  emoji--wow">
            <div className="emoji__face">
              <div className="emoji__eyebrows"></div>
              <div className="emoji__eyes"></div>
              <div className="emoji__mouth"></div>
            </div>
          </div>
          <div className="emoji  emoji--love">
            <div className="emoji__heart"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
