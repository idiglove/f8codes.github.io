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
                    To know more about me, you can reach me thru these links below
                </ContentParagraph>

                <ContactWrapper>
                    <ContactList>
                        <li>
                            <a href="https://www.linkedin.com/in/faith-morante-3097871b/" 
                            rel="noopener noreferrer" target="_blank">
                                <img src={require('./../img/linkedin.png')} alt="Faith's LinkedIn"></img>
                            </a>
                        </li>                        
                        <li>
                            <a href="https://twitter.com/faithmorante"  
                            rel="noopener noreferrer" target="_blank">
                                <img src={require('./../img/twitter.png')} alt="Faith's Twitter"></img>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/faithmorante/" 
                            rel="noopener noreferrer" target="_blank">
                                <img src={require('./../img/ig.png')} alt="Faith's Instagram"></img>
                            </a>
                        </li>
                        
                        <li>
                            <a href="https://dev.to/idiglove"  
                            rel="noopener noreferrer" target="_blank">
                                <img src={require('./../img/devto.png')} alt="Faith's Dev.to"></img>
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/639162274287" rel="noopener noreferrer" target="_blank">
                                <img src={require('./../img/wa.png')} alt="Faith's Whatsapp"></img>                            
                            </a>
                        </li>
                    </ContactList>
                </ContactWrapper>
            </ContentWrapper>
        </HomeContent>
    )
}