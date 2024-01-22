import { StyledHeader } from "./styled/Header.styled";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";

function Header() {
  const { themeName, handleTheme } = useContext(SiteContext);

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
            <span onClick={handleTheme}>
              {themeName === "light" ? (
                <BsFillMoonStarsFill />
              ) : (
                <BsFillSunFill />
              )}
            </span>
          </li>
        </ul>
      </nav>
      <div className="clear-fix"></div>
    </StyledHeader>
  );
}

export default Header;
