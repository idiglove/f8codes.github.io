import React from 'react'

import { HomeContent, ContentParagraph, ContactList, ContactWrapper, ContentWrapper } from './../styles/home-styles'

export default function About () {
    return (
        <HomeContent>
            <ContentWrapper>
                <ContentParagraph>
                    React and NodeJS Expert and Enthusiast
                    <br />
                    +5 years in full stack web development
                </ContentParagraph>

                <ContentParagraph>
                    I love the challenge of learning new things and
                    doing new stuff. I constantly try to upgrade my
                    knowledge and skills. I have tried all sorts of things
                    from backend, frontend, mobile and even devops.
                </ContentParagraph>

                <ContentParagraph>
                    To know more about me, you can reach me thru:
                </ContentParagraph>

                <ContactWrapper>
                    <ContactList>
                        <li>
                            <img src={require('./../img/linkedin.png')}></img>
                            /faith-morante-3097871b/
                        </li>
                        <li>
                            <img src={require('./../img/wa.png')}></img>
                            +63 916 227 4287
                        </li>
                        <li>
                            <img src={require('./../img/ig.png')}></img>
                            faithmorante
                        </li>
                        <li>
                            <img src={require('./../img/github.png')}></img>
                            idiglove
                        </li>
                        <li>
                            <img src={require('./../img/devto.png')}></img>
                            idiglove
                        </li>
                    </ContactList>
                </ContactWrapper>
            </ContentWrapper>
        </HomeContent>
    )
}