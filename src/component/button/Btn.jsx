import { Button } from "./styled";
export function Btn({ title, click }) {
  return <Button onClick={click}>{title}</Button>;
}
