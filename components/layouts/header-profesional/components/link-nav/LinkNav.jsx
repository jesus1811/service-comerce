import LinkNext from "next/link";
import { Link } from "./Styled";

const LinkNav = ({ children, path, dark }) => {
  return (
    <LinkNext href={path} passHref>
      <Link dark={dark}>{children}</Link>
    </LinkNext>
  );
};

export default LinkNav;
