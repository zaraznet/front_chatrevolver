import { DatingFilter, DatingList, useDatingFilter } from "modules/dating";
import React from "react";
import { Content } from "shared/ui";

const DatingPage = () => {
  const [value, onChange] = useDatingFilter();

  return (
    <Content>
      <DatingFilter value={value} onChange={onChange} />
      <DatingList state={value} />
    </Content>
  );
};

export default DatingPage;
