import styled from 'styled-components'
import homeImg from './../img/header-bg.png'
import { Nav, Navbar } from 'react-bootstrap';

export const Appwrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const HomeWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
`

export const HomeSidebar = styled.div`
    width: 20%;
    background-color: #1e0d29;
    color: #fff;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 1rem;
    position: fixed;
    height: 100%;

    @media only screen and (max-width: 500px) {
        flex-direction: row;
        width: 100%;
        height: 100px;
        z-index: 999;
        justify-content: space-between;
    }
`

export const HomeBodyWrapper = styled.div`
    width: 80%;
    background-image: url(${homeImg});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    color: #fff;
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 20%;
    overflow: auto;
    height: 100%;

    @media only screen and (max-width: 500px) {
        width: 100%;
        height: auto;
        margin-top: 100px;
        left: 0;
        position: relative;
    }
`

export const ProfilePicWrapper = styled.div`
    width: 80%;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    align-self: center;

    @media only screen and (max-width: 500px) {
        width: 20%;
    }
`

export const ProfilePic = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
`

export const HomeName = styled.h2`
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-top: 1rem;

    @media only screen and (max-width: 500px) {
        align-self: center;
        margin-top: 0;
        margin-left: 1rem;
    }
`

export const MobileLinksNavbar = styled(Navbar)`
    width: 100px;
    position: relative;

    .navbar-collapse {
        text-align: right;
        position: absolute;
        top: 54px;
        right: 30px;
        background-color: #f9f1ff;
        color: #1e0d29;
        padding: 10px;

        li {
            padding: 5px;
            
            a {
                color: #1e0d29;
                text-decoration: none;
            }
        }
    }

    @media only screen and (min-width: 500px) {
        display: none;
    }
`

export const SidebarLinks = styled.ul`
    list-style: none;
    text-align: center;
    text-transform: uppercase;
    margin: 1rem 0 0 0;
    padding: 0;

    li {
        margin-bottom: 1rem;
        cursor: pointer;

        a {
            color: #fff;
            text-decoration: none;
        }
    }

    @media only screen and (max-width: 500px) {
        display: none;
    }
`

export const HomeHeader = styled.h1`
    font-size: 1.6rem;
    text-transform: uppercase;
    padding: 2rem;
`

export const HomeContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 500px) {
        height: auto;
    }
`

export const ContentWrapper = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    width: 70%;
`

export const ContentParagraph = styled.div`
    font-size: 1rem;
    margin-bottom: 1rem;
    height: auto;
    text-align: center;
`

export const ContactWrapper = styled.div`
    width: 100%;
    height: auto;
`

export const ContactList = styled.ul`
    list-style: none;
    margin: 1rem 0 0 0;
    padding: 0;
    margin: 0 auto;
    display: flex;
    text-align: center;
    justify-content: center;

    img {
        display: inline-block;
        margin-right: 1rem;
        width: 2rem;
    }

    li {
        margin-bottom: 1rem;
    }
`

export const EducationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`

export const SkillsContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SkillsTitle = styled.h3`
    font-size: 1rem;
    text-transform: uppercase;
`

export const SkillsWrapper = styled.div`
    display: flex;
    width: 80%;
    margin-bottom: 2rem;
`

export const SkillsColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`

export const SkillsList = styled.ul`
    list-style: none;
    margin: 1rem 0 0 0;
    padding: 0;

    li {
        padding: 0.5rem;
    }
`

export const SkillsListTitle = styled.h4`
    text-transform: uppercase;
    font-size: 1rem;
    border-bottom: 1px white solid;
    padding: 0.2rem;
    display: inline-block;
`

export const InterestsColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
`

export const PortfolioContentWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const PortfolioWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    margin-bottom: 2rem;
`

export const PortfolioRow = styled.div`
    display: flex;
    min-height: 300px;

    @media only screen and (max-width: 500px) {
        flex-direction: column;
    }
`

export const PortfolioDesc = styled.div`
    width: 300px;
    padding: 1rem;
    font-size: 0.8rem;
    align-self: center;
`

export const PortfolioDescTitle = styled.h4`
    font-size: 1rem;
    margin-bottom: 1rem;
`

export const PortfolioDescText = styled.h4`
    font-size: 0.8rem;
    margin-bottom: 1rem;
`

export const PortfolioDescList = styled.ul`
    list-style: none;
    margin: 1rem 0 0 0;
    padding: 0;

    li {
        margin-bottom: 0.7rem;
    }
`

export const PortfolioImgWrapper = styled.div`
    overflow: hidden;
    width: 415px;
    height: 200px;
    align-self: center;
    -webkit-box-shadow: 6px -1px 35px -12px rgba(0,0,0,1);
    -moz-box-shadow: 6px -1px 35px -12px rgba(0,0,0,1);
    box-shadow: 6px -1px 35px -12px rgba(0,0,0,1);
    border: 6px solid #1e0d29;
    box-sizing: content-box;
    border-radius: 10px;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    @media only screen and (max-width: 500px) {
        width: 80%;
    }
`
