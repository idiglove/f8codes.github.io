import React from 'react'

import { SkillsTitle, PortfolioWrapper, PortfolioImgWrapper, PortfolioContentWrapper,
    PortfolioRow, PortfolioDesc, PortfolioDescTitle, PortfolioDescText, PortfolioDescList  } from './../styles/home-styles'

export default function Portfolio () {
    return (
        <PortfolioContentWrapper>
            <SkillsTitle>
                Portfolio
            </SkillsTitle>
            <PortfolioWrapper>
                <PortfolioRow>
                    <PortfolioImgWrapper>
                        <img src={require('./../img/portfolio/honcho.png')} />
                    </PortfolioImgWrapper>
                    <PortfolioDesc>
                        <PortfolioDescTitle>
                            honcho.com.au
                        </PortfolioDescTitle>

                        <PortfolioDescText>
                            Helping people start their business
                        </PortfolioDescText>

                        <PortfolioDescList>
                            <li>
                                Projects:
                            </li>
                            <li>- Business search engine</li>
                            <li>- Business name / number registration</li>
                            <li>- Invoices</li>
                            <li>- Gmail and GDrive integration</li>
                        </PortfolioDescList>
                    </PortfolioDesc>
                </PortfolioRow>
                <PortfolioRow>
                    <PortfolioImgWrapper>
                        <img src={require('./../img/portfolio/growfree.png')} />
                    </PortfolioImgWrapper>
                    <PortfolioDesc>
                        <PortfolioDescTitle>
                            growfree.io
                        </PortfolioDescTitle>

                        <PortfolioDescText>
                            Online therapy video calls and booking system
                        </PortfolioDescText>

                        <PortfolioDescList>
                            <li>
                                Projects:
                            </li>
                            <li>- Booking system</li>
                            <li>- Twilio Peer to Peer video calls</li>
                            <li>- React and Redux Sign up steps process</li>
                            <li>- Client and Therapy Profiles</li>
                        </PortfolioDescList>
                    </PortfolioDesc>
                </PortfolioRow>
                <PortfolioRow>
                    <PortfolioImgWrapper>
                        <img src={require('./../img/portfolio/myprofiling.png')} />
                    </PortfolioImgWrapper>
                    <PortfolioDesc>
                        <PortfolioDescTitle>
                            app.mytrainingplan.com.au
                        </PortfolioDescTitle>

                        <PortfolioDescText>
                            Vocational Trade education system
                        </PortfolioDescText>

                        <PortfolioDescList>
                            <li>
                                Projects:
                            </li>
                            <li>- Mobile app for students and supervisors</li>
                            <li>- Assessments</li>
                            <li>- Event organiser - trainer visits, etc</li>
                            <li>- Activity Entries</li>
                            <li>- Profiling - each role has their own profiles</li>
                        </PortfolioDescList>
                    </PortfolioDesc>
                </PortfolioRow>
                <PortfolioRow>
                    <PortfolioImgWrapper>
                        <img src={require('./../img/portfolio/triggerhappy-plugin.png')} />
                    </PortfolioImgWrapper>
                    <PortfolioDesc>
                        <PortfolioDescTitle>
                            Trigger Happy - Wordpress plugin
                        </PortfolioDescTitle>

                        <PortfolioDescText>
                            Built in React as a plugin to trigger events in Wordpress
                        </PortfolioDescText>

                        <PortfolioDescList>
                            <li>
                                Tasks:
                            </li>
                            <li>- React and State Management to record what user is doing</li>
                            <li>- Data triggers depending on user's choices</li>
                        </PortfolioDescList>
                    </PortfolioDesc>
                </PortfolioRow>
                <PortfolioRow>
                    <PortfolioImgWrapper>
                        <img src={require('./../img/portfolio/store-shopify.png')} />
                    </PortfolioImgWrapper>
                    <PortfolioDesc>
                        <PortfolioDescTitle>
                            Store Shopify
                        </PortfolioDescTitle>

                        <PortfolioDescText>
                            Ecommerce store using Shopify backend
                        </PortfolioDescText>

                        <PortfolioDescList>
                            <li>
                                Tasks:
                            </li>
                            <li>- React and State Management for Cart system</li>
                            <li>- Shopify backend and checkout</li>
                        </PortfolioDescList>
                    </PortfolioDesc>
                </PortfolioRow>
                <PortfolioRow>
                    <PortfolioImgWrapper>
                        <img src={require('./../img/portfolio/equals-results.png')} />
                    </PortfolioImgWrapper>
                    <PortfolioDesc>
                        <PortfolioDescTitle>
                            equalsresults.co.uk
                        </PortfolioDescTitle>

                        <PortfolioDescText>
                            Gym studio ecommerce using Mindbody API
                        </PortfolioDescText>

                        <PortfolioDescList>
                            <li>
                                Tasks:
                            </li>
                            <li>- Built using Gatsby and Netlify</li>
                            <li>- React and State Management for Cart system</li>
                            <li>- Progressive Web Apps</li>
                        </PortfolioDescList>
                    </PortfolioDesc>
                </PortfolioRow>
                <PortfolioRow>
                    <PortfolioImgWrapper>
                        <img src={require('./../img/portfolio/minearc.png')} />
                    </PortfolioImgWrapper>
                    <PortfolioDesc>
                        <PortfolioDescTitle>
                            minearcapp.com
                        </PortfolioDescTitle>

                        <PortfolioDescText>
                            Scheduling and Custom Build Stages app
                        </PortfolioDescText>

                        <PortfolioDescList>
                            <li>
                                Tasks:
                            </li>
                            <li>- React and Redux for creating a feature for completing stages of building a mine chamber</li>
                            <li>- Used FullCalendar.io for scheduling app</li>
                            <li>- Custom edit and add booking with api calls to Laravel apis</li>
                        </PortfolioDescList>
                    </PortfolioDesc>
                </PortfolioRow>
            </PortfolioWrapper>
        </PortfolioContentWrapper>
    )
}