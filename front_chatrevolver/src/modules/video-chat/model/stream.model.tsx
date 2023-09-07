import { useState } from "react";

export const useStream = (): [MediaStream | undefined, (value: MediaStream | undefined) => void] => {
  const [stream, setStream] = useState<MediaStream>();

  const onChangeStream = (value: MediaStream | undefined) => {
    if (stream) {
      stream.getTracks().forEach((it) => it.stop());
    }
    setStream(value);
  };

  return [stream, onChangeStream];
};
