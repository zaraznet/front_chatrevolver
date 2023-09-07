import React, { useEffect, useState } from "react";
import { Checkbox, Modals, Radio, SidebarPanel } from "shared/ui";
import { api } from "shared/api";
import { EmailChangeModal, PasswordChangeModal, ProfileDeleteModal } from "modules/user";
import styles from "./settings-panel.module.scss";
import { useIntl } from "react-intl";

export interface ISettingsPanel {
  onClose: () => void;
}

export const SettingsPanel = (props: ISettingsPanel) => {
  const myProfile = api.user.useGetMe();
  const privacy = api.user.usePrivacySettings();
  const notifications = api.user.useNotificationSettings();

  const [userPic, setUserPic] = useState(true);
  const [status, setStatus] = useState(true);
  const [profile, setProfile] = useState(true);
  const [photos, setPhotos] = useState(true);
  const [hide, setHide] = useState(false);
  const [rating, setRating] = useState<"EVERYONE" | "FRIENDS" | "NOBODY">("EVERYONE");

  useEffect(() => {
    const data = privacy.data;
    if (!data) return;

    setUserPic(data.userPic === "EVERYONE");
    setStatus(data.statusMessage === "EVERYONE");
    setProfile(data.profileInfo === "EVERYONE");
    setPhotos(data.photos === "EVERYONE");
    setRating(data.rating);
  }, [privacy.data]);

  useEffect(() => {
    if (myProfile?.data?.hide) {
      setHide(myProfile.data.hide);
    }
  }, [myProfile?.data?.hide]);

  useEffect(() => {
    if (!privacy.data) return;

    api.user.updatePrivacySettings({
      userPic: (userPic ? "EVERYONE" : "NOBODY") as any,
      statusMessage: (status ? "EVERYONE" : "NOBODY") as any,
      profileInfo: (profile ? "EVERYONE" : "NOBODY") as any,
      photos: (photos ? "EVERYONE" : "NOBODY") as any,
      rating: rating as any,
    });
  }, [userPic, status, profile, photos, rating]);

  const [dating, setDating] = useState(true);

  useEffect(() => {
    const data = notifications.data;
    if (!data) return;

    setDating(data.digest);
  }, [notifications.data]);

  useEffect(() => {
    if (!notifications.data) return;

    api.user.updateNotificationSettings({
      digest: dating,
    } as any);
  }, [dating]);

  const onPressHide = async (hide: boolean) => {
    setHide(hide);
    await api.user.updateProfile({
      hide: hide,
    });
    await myProfile.mutate();
  };

  const onProfileDelete = Modals.prepare(ProfileDeleteModal);
  const onEmailChange = Modals.prepare(EmailChangeModal);
  const onPasswordChange = Modals.prepare(PasswordChangeModal);

  const intl = useIntl();

  {
    intl.formatMessage({
      id: "sidebar.settings.privacy",
      defaultMessage: "Privacy",
    });
  }

  return (
    <SidebarPanel onClose={props.onClose}>
      <h2>
        {intl.formatMessage({
          id: "sidebar.settings.privacy",
          defaultMessage: "Privacy",
        })}
      </h2>
      <Checkbox checked={hide} onChange={(e) => onPressHide(e.target.checked)}>
        {intl.formatMessage({
          id: "sidebar.settings.hide",
          defaultMessage: "Hide my profile from search",
        })}
      </Checkbox>

      {/*<h3>*/}
      {/*  {intl.formatMessage({*/}
      {/*    id: "sidebar.settings.everyone",*/}
      {/*    defaultMessage: "Everyone can see",*/}
      {/*  })}*/}
      {/*  :*/}
      {/*</h3>*/}

      {/*<Checkbox checked={userPic} onChange={(e) => setUserPic(e.target.checked)}>*/}
      {/*  {intl.formatMessage({*/}
      {/*    id: "sidebar.settings.userpic",*/}
      {/*    defaultMessage: "Userpic",*/}
      {/*  })}*/}
      {/*</Checkbox>*/}
      {/*<Checkbox checked={status} onChange={(e) => setStatus(e.target.checked)}>*/}
      {/*  {intl.formatMessage({*/}
      {/*    id: "sidebar.settings.status",*/}
      {/*    defaultMessage: "Status Message",*/}
      {/*  })}*/}
      {/*</Checkbox>*/}
      {/*<Checkbox checked={profile} onChange={(e) => setProfile(e.target.checked)}>*/}
      {/*  {intl.formatMessage({*/}
      {/*    id: "sidebar.settings.profile",*/}
      {/*    defaultMessage: "Profile",*/}
      {/*  })}*/}
      {/*</Checkbox>*/}
      {/*<Checkbox checked={photos} onChange={(e) => setPhotos(e.target.checked)}>*/}
      {/*  {intl.formatMessage({*/}
      {/*    id: "sidebar.settings.photo",*/}
      {/*    defaultMessage: "Photos",*/}
      {/*  })}*/}
      {/*</Checkbox>*/}

      {/*<h3>*/}
      {/*  {intl.formatMessage({*/}
      {/*    id: "sidebar.settings.rating",*/}
      {/*    defaultMessage: "My rating can be seen",*/}
      {/*  })}*/}
      {/*  :*/}
      {/*</h3>*/}
      {/*<Radio*/}
      {/*  value={rating}*/}
      {/*  onChange={setRating}*/}
      {/*  options={[*/}
      {/*    {*/}
      {/*      value: "EVERYONE",*/}
      {/*      label: intl.formatMessage({*/}
      {/*        id: "sidebar.settings.rating.everyone",*/}
      {/*        defaultMessage: "Everyone",*/}
      {/*      }),*/}
      {/*    },*/}
      {/*    {*/}
      {/*      value: "FRIENDS",*/}
      {/*      label: intl.formatMessage({*/}
      {/*        id: "sidebar.settings.rating.contacts",*/}
      {/*        defaultMessage: "Contacts Only",*/}
      {/*      }),*/}
      {/*    },*/}
      {/*    {*/}
      {/*      value: "NOBODY",*/}
      {/*      label: intl.formatMessage({*/}
      {/*        id: "sidebar.settings.rating.nobody",*/}
      {/*        defaultMessage: "Nobody",*/}
      {/*      }),*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*/>*/}

      {myProfile.data?.email && (
        <>
          <h2>
            {intl.formatMessage({
              id: "sidebar.settings.email_notifications",
              defaultMessage: "Email notification",
            })}
          </h2>
          <Checkbox checked={dating} onChange={(e) => setDating(e.target.checked)}>
            {intl.formatMessage({
              id: "sidebar.settings.email_notifications.dating",
              defaultMessage: "Dating Digest",
            })}
          </Checkbox>

          <h2>
            {intl.formatMessage({
              id: "sidebar.settings.security",
              defaultMessage: "Security",
            })}
          </h2>

          <div className={styles.editable} onClick={onEmailChange}>
            <span className={styles.label}>{intl.formatMessage({ id: "input.email", defaultMessage: "Email" })}</span>
            <span className={styles.value}>{myProfile.data?.email}</span>
          </div>

          <div className={styles.editable} onClick={onPasswordChange}>
            <span className={styles.label}>
              {intl.formatMessage({
                id: "input.password",
                defaultMessage: "Password",
              })}
            </span>
            <span className={styles.value}>********</span>
          </div>
        </>
      )}

      <button onClick={onProfileDelete} className={styles.button}>
        {intl.formatMessage({
          id: "sidebar.settings.delete_profile",
          defaultMessage: "Delete Profile",
        })}
      </button>
    </SidebarPanel>
  );
};

SettingsPanel.defaultProps = {};
