import React from "react";
import { TextHeder } from "../text/HederText";
import { HederWrapper, HederLogWrapper, HederLog } from "./styledHeder";
export const HederLogIn = () => {
  return (
    <HederLogWrapper>
      <HederLog>
        <TextHeder title="Login Please!!!"></TextHeder>
      </HederLog>
    </HederLogWrapper>
  );
};
