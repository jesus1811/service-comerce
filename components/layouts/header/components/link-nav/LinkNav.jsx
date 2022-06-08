import LinkNext from "next/link";
import { Link } from "./Styled";

const LinkNav = ({ children, path }) => {
  return (
    <LinkNext href={path} passHref>
      <Link>{children}</Link>
    </LinkNext>
  );
};

export default LinkNav;
