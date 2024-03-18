import React from "react";
import { socialMediaLinks } from "../portfolio";
import styled from "styled-components";
import "../App.scss"

const IconWrapper = styled.span`
  i {
    background-color: var(--rainbow-3);
  }
  &:hover i {
    background-color: var(--blue-4);
    transition: 0.3s ease-in;
  }
`;

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, i) => {
        return (
          <a
            key={i}
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper {...media} {...props}>
              <i></i>
            </IconWrapper>
            {/* <span></span> */}
          </a>
        );
      })}
    </div>
  );
}