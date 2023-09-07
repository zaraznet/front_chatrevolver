const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

export const formatBytesSize = (bytes?: number) => {
  if (!bytes) return "";

  const i = parseInt("" + Math.floor(Math.log(bytes) / Math.log(1024)));
  if (i === 0) return bytes + " " + sizes[i];
  return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
};

export default formatBytesSize;
