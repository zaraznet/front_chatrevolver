import React, { useEffect, useRef } from "react";

export interface IVideoStream {
  src?: MediaStream;
  className?: string;
  muted?: boolean;
}

export const VideoStream = (props: IVideoStream) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (video) {
      video.srcObject = props.src || null;
      video.play();
    }
  }, [ref, props.src]);

  return <video ref={ref} className={props.className} playsInline muted={props.muted} autoPlay />;
};

VideoStream.defaultProps = {};
