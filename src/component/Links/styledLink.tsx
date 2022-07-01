import { Link } from "react-router-dom";
import styled from "@emotion/styled";
export const Linkstyled = styled(Link)`
  font-size: calc(2px + 2vmin);
  font-weight: 600;
  color: black;
  text-decoration: none;
  position: relative;
  :hover {
    color: #39a6d6;
    transition: 0.3s;
  }
  :after {
    position: absolute;
    content: "";
    left: 50%;
    bottom: -40%;
    transform: translateX(-50%);
    opacity: 0;
    width: 100px;
    border: 0.1px solid #39a6d6;
    background-color: #39a6d6;
    transition: 0.3s;
    z-index: 2;
  }
  :hover::after {
    opacity: 1;
    transition: 0.3s;
  }
`;
