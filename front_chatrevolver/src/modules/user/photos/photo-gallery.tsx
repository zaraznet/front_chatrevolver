import React, { CSSProperties, useState } from "react";
import cx from "classnames";
import styles from "./photo-gallery.module.scss";
import { ImageEntityDTO } from "shared/api";
import { KeyName, useKeyDown } from "@yoldi/utils/hooks";

export interface IPhotoGallery {
  data: ImageEntityDTO[];

  initial: number;
  onClose: () => void;

  className?: string;
  style?: CSSProperties;
}

export const PhotoGallery = (props: IPhotoGallery) => {
  const [index, setIndex] = useState(props.initial);

  const next = () => setIndex((value) => (value + 1) % props.data.length);
  const prev = () => setIndex((value) => (props.data.length + value - 1) % props.data.length);

  useKeyDown(KeyName.ESC, props.onClose);
  useKeyDown(KeyName.ArrowLeft, prev);
  useKeyDown(KeyName.ArrowRight, next);

  return (
    <div className={cx(styles.photo_gallery, props.className)} style={props.style}>
      <button className={styles.close} onClick={props.onClose} />
      <div className={styles.image}>
        <img src={`${process.env.API_URL}/static/${props.data[index].path}`} />
      </div>
      {props.data.length > 1 && <button className={cx(styles.button, styles.prev)} onClick={prev} />}
      {props.data.length > 1 && <button className={cx(styles.button, styles.next)} onClick={next} />}
    </div>
  );
};

PhotoGallery.defaultProps = {
  initial: 0,
};
