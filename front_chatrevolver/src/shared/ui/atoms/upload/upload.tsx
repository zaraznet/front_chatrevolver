import React, { CSSProperties } from "react";
import RcUpload, { UploadProps } from "rc-upload";
import { getAccessToken } from "shared/api";
import { RcFile } from "rc-upload/es/interface";

export interface IUpload extends Omit<UploadProps, "onSuccess"> {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  onSuccess?: (response: { id: string; path: string }, file: RcFile, xhr: object) => void;
}

const headers = {
  get authorization() {
    return `Bearer ${getAccessToken()}`;
  },
};

export const Upload = (props: IUpload) => {
  return (
    <RcUpload
      action={process.env.API_URL + "/api/image/upload"}
      accept="image/png, image/jpeg"
      headers={headers}
      name="image"
      {...props}
      onSuccess={props.onSuccess as any}
      // className={cx(styles.upload, props.className)}
    >
      {props.children}
    </RcUpload>
  );
};

Upload.defaultProps = {};
