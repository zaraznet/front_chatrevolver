import React, { CSSProperties, useEffect, useRef, useState } from "react";
import cx from "classnames";
import styles from "./status-my.module.scss";
import { UserCardStatus } from "shared/ui/components/user-card/status";
import { api } from "shared/api";
import { KeyName, useClickOutside, useKeyDown } from "@yoldi/utils/hooks";
import TextareaAutosize from "react-textarea-autosize";
import { useIntl } from "react-intl";

export interface IStatusMy {
  className?: string;
  style?: CSSProperties;
}

export const StatusMy = (props: IStatusMy) => {
  const [editable, setEditable] = useState(false);
  const profile = api.user.useGetMe();

  const [value, setValue] = useState(profile.data?.status);

  const formRef = useRef<HTMLFormElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setValue(profile.data?.status);
  }, [profile.data?.status]);

  const onSubmit = async () => {
    await api.user.updateProfile({ status: value });
    await profile.mutate();
    setEditable(false);
  };

  const onCancel = () => {
    setEditable(false);
    setValue(profile.data?.status);
  };

  useKeyDown(KeyName.ESC, onCancel);
  useClickOutside(formRef, onCancel);

  const addNewLine = () => {
    const textArea = textAreaRef.current;
    if (!textArea) return;

    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;

    textArea.value = textArea.value.substring(0, start) + "\n" + textArea.value.substring(end);
    textArea.setSelectionRange(start + 1, start + 1);

    setValue(textArea.value);
  };

  const onPressEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key !== "Enter") return;

    e.preventDefault();
    if (e.altKey || e.shiftKey) {
      addNewLine();
    } else {
      onSubmit();
    }
  };

  const intl = useIntl();

  if (!editable) {
    const empty = profile.data && !profile.data.status;

    return (
      <UserCardStatus className={cx(styles.status_with_hover, empty && styles.empty)} onClick={() => setEditable(true)}>
        {empty
          ? intl.formatMessage({
              id: "shared.user_card.status.placeholder",
              defaultMessage: "Set status...",
            })
          : profile.data?.status}
      </UserCardStatus>
    );
  }

  return (
    <form
      ref={formRef}
      className={cx(styles.status_my, props.className)}
      style={props.style}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <TextareaAutosize
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoFocus
        ref={textAreaRef}
        onKeyPress={onPressEnter}
      />
      <button type="submit">
        {intl.formatMessage({
          id: "shared.user_card.status.save",
          defaultMessage: "Save",
        })}
      </button>
    </form>
  );
};

StatusMy.defaultProps = {};
