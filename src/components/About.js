import React from "react";
import Ig from "./../img/ig.png";
import Devto from "./../img/devto.png";
import Whatsapp from "./../img/wa.png";
import Twitter from "./../img/twitter.png";
import LinkedIn from "./../img/linkedin.png";

import {
  HomeContent,
  ContentParagraph,
  ContactList,
  ContactWrapper,
  ContentWrapper,
} from "./../styles/home-styles";

export default function About() {
  return (
    <HomeContent>
      <ContentWrapper>
        <ContentParagraph>
          React and NodeJS Expert and Enthusiast
          <br />
          +5 years in full stack web development
        </ContentParagraph>

        <ContentParagraph>
          I love the challenge of learning new things and doing new stuff. I
          constantly try to upgrade my knowledge and skills. I have tried all
          sorts of things from backend, frontend, mobile and even devops.
        </ContentParagraph>

        <ContentParagraph>
          To know more about me, you can reach me thru these links below
        </ContentParagraph>

        <ContactWrapper>
          <ContactList>
            <li>
              <a
                href="https://www.linkedin.com/in/faith-morante-3097871b/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={LinkedIn} alt="Faith's LinkedIn"></img>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/faithmorante"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={Twitter} alt="Faith's Twitter"></img>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/faithmorante/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={Ig} alt="Faith's Instagram"></img>
              </a>
            </li>

            <li>
              <a
                href="https://dev.to/idiglove"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={Devto} alt="Faith's Dev.to"></img>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/639162274287"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={Whatsapp} alt="Faith's Whatsapp"></img>
              </a>
            </li>
          </ContactList>
        </ContactWrapper>
      </ContentWrapper>
    </HomeContent>
  );
}
