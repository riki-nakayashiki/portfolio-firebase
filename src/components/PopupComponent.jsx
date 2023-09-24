import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function PopupComponent() {
  const [isShown, setIsShown] = useState(false);

  const handleToggleButtonClick = () => {
    setIsShown(true);
  };

  const handleCloseButtonClick = () => {
    setIsShown(false);
  };

  return (
    <section className="popup-menu-container">
      <AiOutlineMenu onClick={handleToggleButtonClick} />
      <div className={`popup-menu ${isShown ? "shown" : ""}`}>
        <AiOutlineClose onClick={handleCloseButtonClick} />
        <ul onClick={handleCloseButtonClick}>
          <li>
            <a href="#">Top</a>
          </li>
          <li>
            <a href="#projects-space">Projects</a>
          </li>
          <li>
            <a href="#skills-space">Skills</a>
          </li>
          <li>
            <a href="#contact-space">Contact</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
