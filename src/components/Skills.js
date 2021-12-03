import React from 'react'

import { HomeContent, SkillsTitle, SkillsWrapper, SkillsColumn, SkillsContentWrapper, SkillsList, SkillsListTitle,
    InterestsColumn } from './../styles/home-styles'

export default function About () {
    return (
        <HomeContent>
            <SkillsContentWrapper>
                <SkillsTitle>Skills</SkillsTitle>
                <SkillsWrapper>
                    <SkillsColumn>
                        <SkillsList>
                            <li>
                                <SkillsListTitle>Frontend</SkillsListTitle>
                                <div>
                                    React, Javascript, HTML, CSS, Sass, Styled-Components,
                                    GatsbyJS, Vue, Angular, Redux
                                </div>
                            </li>
                        </SkillsList>
                        <SkillsList>
                            <li>
                                <SkillsListTitle>CMS</SkillsListTitle>
                                <div>
                                    NetlifyCMS, Wordpress
                                </div>
                            </li>
                        </SkillsList>
                        <SkillsList>
                            <li>
                                <SkillsListTitle>Mobile</SkillsListTitle>
                                <div>
                                    React Native
                                </div>
                            </li>
                        </SkillsList>
                        <SkillsList>
                            <li>
                                <SkillsListTitle>Database</SkillsListTitle>
                                <div>
                                    MySQL, PostgreSQL, GraphQL
                                </div>
                            </li>
                        </SkillsList>
                    </SkillsColumn>
                    <SkillsColumn>
                        <SkillsList>
                            <li>
                                <SkillsListTitle>Backend</SkillsListTitle>
                                <div>
                                    NodeJS, PHP, Python
                                </div>
                            </li>
                        </SkillsList>
                        <SkillsList>
                            <li>
                                <SkillsListTitle>Frameworks</SkillsListTitle>
                                <div>
                                    ExpressJS, Zend Framework, Laravel, Grind.rocks
                                </div>
                            </li>
                        </SkillsList>
                        <SkillsList>
                            <li>
                                <SkillsListTitle>ORM</SkillsListTitle>
                                <div>
                                    Sequelize, Doctrine
                                </div>
                            </li>
                        </SkillsList>
                        <SkillsList>
                            <li>
                                <SkillsListTitle>Devops</SkillsListTitle>
                                <div>
                                    AWS, Netlify
                                </div>
                            </li>
                        </SkillsList>
                    </SkillsColumn>
                </SkillsWrapper>
                <SkillsTitle>Interests</SkillsTitle>
                <SkillsWrapper>
                    <InterestsColumn>
                        <SkillsList>
                            <li>
                                <div>
                                    Video Games, Classic Rock, Chill Lo-Fi Hits, Coffee, Board Games
                                </div>
                            </li>
                        </SkillsList>
                    </InterestsColumn>
                </SkillsWrapper>
            </SkillsContentWrapper>
        </HomeContent>
    )
}