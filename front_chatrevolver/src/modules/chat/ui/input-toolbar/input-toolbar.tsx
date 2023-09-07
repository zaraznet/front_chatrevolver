import React, { useEffect, useRef, useState } from "react";
import styles from "./input-toolbar.module.scss";
import TextareaAutosize from "react-textarea-autosize";
import { Icon } from "shared/ui";
import { useIntl } from "react-intl";

export interface IInputToolbar {
  children?: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  onSend: (message: string) => void;
  onTyping: () => void;
}

export const InputToolbar = (props: IInputToolbar) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [message, _setMessage] = useState("");
  const setMessage = (value: string) => {
    _setMessage(value);

    if (value) props.onTyping();
  };

  useEffect(() => {
    if (props.value !== undefined) {
      setMessage(props.value);
    }
  }, [props.value]);
  useEffect(() => props.onChange?.(message), [message]);

  const addNewLine = () => {
    const textArea = textAreaRef.current;
    if (!textArea) return;

    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;

    textArea.value = textArea.value.substring(0, start) + "\n" + textArea.value.substring(end);
    textArea.setSelectionRange(start + 1, start + 1);

    setMessage(textArea.value);
  };

  const onPressEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key !== "Enter") return;

    e.preventDefault();
    if (e.altKey || e.shiftKey) {
      addNewLine();
    } else {
      onSend();
    }
  };

  const onSend = () => {
    const msg = message.trim();
    if (msg) props.onSend(msg);
    setMessage("");
    textAreaRef.current?.focus();
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSend();
  };

  const intl = useIntl();

  return (
    <div className={styles.input_toolbar}>
      <form onSubmit={onSubmit}>
        <div className={styles.input_wrapper}>
          <TextareaAutosize
            ref={textAreaRef}
            value={message}
            maxRows={6}
            placeholder={intl.formatMessage({
              id: "chat.input_toolbar.placeholder",
              defaultMessage: "Write a message...",
            })}
            onKeyPress={onPressEnter}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" disabled={!message}>
            <Icon name="send" />
          </button>
        </div>
      </form>
    </div>
  );
};

InputToolbar.defaultProps = {};
