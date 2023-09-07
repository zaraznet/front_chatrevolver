import React, { CSSProperties, useState } from "react";
import { ImageEntityDTO } from "shared/api";
import { message, Upload } from "shared/ui";
import cx from "classnames";

import styles from "./photo-list.module.scss";
import { PhotoGallery } from "modules/user/photos/photo-gallery";
import { useIntl } from "react-intl";

export interface IPhotoList {
  data?: ImageEntityDTO[];

  onUpload?: (id: string) => void;
  onDelete?: (id: string) => void;

  className?: string;
  style?: CSSProperties;
}

export const PhotoList = (props: IPhotoList) => {
  const [gallery, setGallery] = useState<number>();

  const intl = useIntl();

  if (!props.data?.length) {
    if (!props.onUpload) {
      return null;
    }
  }

  return (
    <>
      {gallery !== undefined && (
        <PhotoGallery data={props.data!} initial={gallery} onClose={() => setGallery(undefined)} />
      )}

      <div className={cx(styles.photo_list, props.className)} style={props.style}>
        <div className={styles.top}>
          <p className={styles.title}>
            {intl.formatMessage({
              id: "user.photo_list.title",
              defaultMessage: "Photos",
            })}
          </p>

          {props.onUpload && (
            <Upload
              onSuccess={(data) => props.onUpload?.(data.id)}
              onError={() =>
                message.error(
                  intl.formatMessage({
                    id: "user.photo_list.upload_error",
                    defaultMessage: "Photo upload error",
                  })
                )
              }
            >
              <button className={styles.add}>
                {intl.formatMessage({
                  id: "user.photo_list.add",
                  defaultMessage: "Add photos",
                })}
              </button>
            </Upload>
          )}
        </div>

        {props.data?.length === 0 && (
          <div className={cx(styles.grid, styles.empty)}>
            <div className={styles.item}>
              <div className={styles.photo} />
            </div>
            <div className={styles.item}>
              <div className={styles.photo} />
            </div>
            <div className={styles.item}>
              <div className={styles.photo} />
            </div>
            <div className={styles.item}>
              <div className={styles.photo} />
            </div>
          </div>
        )}

        <div className={styles.grid}>
          {props.data?.map((it, key) => (
            <div className={styles.item} key={it.id}>
              <div className={styles.photo} onClick={() => setGallery(key)}>
                <img src={`${process.env.API_URL}/static/${it.path}`} />
                {props.onDelete && (
                  <button
                    className={styles.delete}
                    onClick={(e) => {
                      e.stopPropagation();
                      props.onDelete?.(it.id);
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

PhotoList.defaultProps = {};
