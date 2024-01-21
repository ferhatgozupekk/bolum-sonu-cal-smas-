import { StyledHeader } from "./components/styled/Header.styled";

function App() {
  return (
    <>
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
              <a href="#">Button</a>
            </li>
          </ul>
        </nav>
        <div className="clear-fix"></div>
      </StyledHeader>
    </>
  );
}

export default App;
