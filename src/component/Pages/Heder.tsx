import React from "react";
import {
  HederWrapper,
  HederBurger,
  HederSerchUserWrapper,
  HederSearch,
  HederUser,
} from "./styledHeder";
export const Heder = () => {
  return (
    <HederWrapper>
      <HederBurger>Burger</HederBurger>
      <HederSerchUserWrapper>
        <HederSearch>Search</HederSearch>
        <HederUser>User</HederUser>
      </HederSerchUserWrapper>
    </HederWrapper>
  );
};
