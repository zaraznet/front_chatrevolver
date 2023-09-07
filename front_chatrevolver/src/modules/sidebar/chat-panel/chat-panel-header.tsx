import React, { useRef, useState } from "react";
import { Avatar, Icon } from "shared/ui";
import { CompactUserProfileDTO } from "shared/api";
import { useClickOutside } from "@yoldi/utils/hooks";
import cx from "classnames";

import styles from "./chat-panel-header.module.scss";
import Link from "next/link";
import AppRouter from "router";
import { useIntl } from "react-intl";

export interface IChatPanelHeader {
  user?: CompactUserProfileDTO;
  onBack: () => void;
  onChatDelete: () => void;
}

export const ChatPanelHeader = (props: IChatPanelHeader) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);
  useClickOutside(profileRef, () => setMenuOpen(false));

  const intl = useIntl();

  return (
    <div className={styles.chat_panel_header}>
      <button className={styles.back} onClick={props.onBack}>
        <Icon name="arrow-left" className={styles.icon} />{" "}
        <span className={styles.text}>
          {intl.formatMessage({
            id: "sidebar.chat.back",
            defaultMessage: "Back",
          })}
        </span>
      </button>

      <div className={styles.user}>
        <div className={styles.name}>{props.user?.name}</div>
        <div className={styles.online}>
          {props.user?.online
            ? intl.formatMessage({
                id: "sidebar.chat.online",
                defaultMessage: "online",
              })
            : intl.formatMessage({
                id: "sidebar.chat.offline",
                defaultMessage: "offline",
              })}
        </div>
      </div>

      <div className={styles.right}>
        <Avatar size={36} src={props.user?.image} online={props.user?.online} />

        <div
          className={cx(styles.more, menuOpen && styles.active)}
          onClick={() => setMenuOpen(!menuOpen)}
          ref={profileRef}
        >
          <button className={styles.top}>
            <Icon name="more" />
          </button>

          <div className={styles.menu}>
            <Link {...AppRouter.profile.id(props.user?.id!).link}>
              <div className={styles.name}>
                {intl.formatMessage({
                  id: "sidebar.chat.profile",
                  defaultMessage: "Profile",
                })}
              </div>
            </Link>

            <div className={styles.list}>
              {props.user?.online && (
                <Link {...AppRouter.profile.id(props.user?.id!).call.link}>
                  <a className={styles.link}>
                    <Icon name="video" className={styles.icon} />
                    <span className={styles.label}>
                      {intl.formatMessage({
                        id: "sidebar.chat.video_call",
                        defaultMessage: "Video Call",
                      })}
                    </span>
                  </a>
                </Link>
              )}
              <a className={styles.link} onClick={() => props.onChatDelete()}>
                <Icon name="trash" className={styles.icon} />
                <span className={styles.label}>
                  {intl.formatMessage({
                    id: "sidebar.chat.delete",
                    defaultMessage: "Delete chat",
                  })}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ChatPanelHeader.defaultProps = {};
