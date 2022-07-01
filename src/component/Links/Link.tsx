import { Linkstyled } from "../Links/styledLink";
export function PostLink({ title, to }: any) {
  return <Linkstyled to={to}>{title}</Linkstyled>;
}
