import React from 'react'

import { SkillsTitle, SkillsWrapper, SkillsColumn, SkillsContentWrapper, SkillsList, SkillsListTitle } from './../styles/home-styles'

export default function About () {
    return (
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
        </SkillsContentWrapper>
    )
}