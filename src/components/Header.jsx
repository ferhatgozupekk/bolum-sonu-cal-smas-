import { StyledHeader } from "./styled/Header.styled";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Header() {
  return (
    <StyledHeader>
      <nav>
        <ul>
          <li>
            <strong>Pico Clone</strong>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">
              <BsFillSunFill />
              <BsFillMoonStarsFill />
            </a>
          </li>
        </ul>
      </nav>
      <div className="clear-fix"></div>
    </StyledHeader>
  );
}

export default Header;
