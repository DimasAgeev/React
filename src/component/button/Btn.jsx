import { Button, ButtonTabs, ButtonUser } from "./styled";
import { HederUser } from "../Pages/styledHeder";
export function Btn({ title, click }) {
  return <Button onClick={click}>{title}</Button>;
}
export function BtnTabs({ title, click }) {
  return <ButtonTabs onClick={click}>{title}</ButtonTabs>;
}
export function BtnHeder({ imgObj, click }) {
  return <HederUser onClick={click}>{imgObj}</HederUser>;
}
