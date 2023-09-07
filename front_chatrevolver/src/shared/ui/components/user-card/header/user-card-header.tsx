import React, { useEffect, useState } from "react";
import { formatNameAndAge, formatRating } from "shared/lib";
import { Avatar, FollowButton, Icon, Modals } from "shared/ui";
import { api, PublicUserProfileDTO, useAuthed } from "shared/api";

import { PhotoGallery } from "modules/user/photos/photo-gallery";
import { ReportModal } from "modules/user";

import styles from "./user-card-header.module.scss";
import { useIntl } from "react-intl";

export interface IUserCardHeader extends PublicUserProfileDTO {}

export const UserCardHeader = (props: IUserCardHeader) => {
  const profileMe = api.user.useGetMe();

  const [gallery, setGallery] = useState(false);
  const [blockUser, setBlockUser] = useState(false);
  const [loading, setLoading] = useState(false);

  const onReport = Modals.prepare(ReportModal, {
    id: props.id,
  });

  useEffect(() => {
    if (profileMe?.data?.blocks && props.id) {
      setBlockUser(profileMe?.data?.blocks.includes(props.id));
    }
  }, [props.id, profileMe?.data?.blocks]);

  const onPressBlock = async () => {
    if (loading) return;
    try {
      setLoading(true);
      setBlockUser(!blockUser);
      if (blockUser) {
        await api.blocks.unBlockUser(props.id);
      } else {
        await api.blocks.blockUser(props.id);
      }
    } finally {
      setLoading(false);
    }
  };

  const authed = useAuthed();

  const intl = useIntl();

  return (
    <>
      {gallery && props.image && (
        <PhotoGallery data={[{ id: "", path: props.image, absolutePath: "" }]} onClose={() => setGallery(false)} />
      )}

      <div className={styles.user_card_header}>
        <div className={styles.top}>
          <Avatar
            className={styles.ava}
            src={props.image}
            gender={props.sex}
            online={props.online}
            onClick={() => setGallery(true)}
          />
          <div className={styles.main}>
            <p className={styles.name}>{formatNameAndAge(props)}</p>

            {!blockUser && <FollowButton id={props.id} />}
          </div>
          {props.vip && <span className={styles.vip}>VIP</span>}
          <div className={styles.right}>
            {props.rating && <span className={styles.rate}>{formatRating(props.rating)}</span>}
            <div className={styles.header_controls}>
              {authed && (
                <span className={styles.report} onClick={onReport}>
                  {intl.formatMessage({
                    id: "shared.user_card.report",
                    defaultMessage: "Report",
                  })}
                </span>
              )}
              {authed && (
                <span onClick={onPressBlock} className={styles.cancel}>
                  <Icon name="cancel" className={styles.cancel_icon} />
                  &nbsp;
                  {blockUser
                    ? intl.formatMessage({
                        id: "shared.user_card.unblock",
                        defaultMessage: "Unblock user",
                      })
                    : intl.formatMessage({
                        id: "shared.user_card.block",
                        defaultMessage: "Block user",
                      })}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

UserCardHeader.defaultProps = {};
