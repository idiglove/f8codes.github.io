import styled from "styled-components"
import Link from "gatsby-link"

export const BlogWrapper = styled.div`
  background: black;
  color: white;
  min-height: 100vh;

  h1 {
    font-size: 2rem;
    padding: 2rem;
  }
`

export const BlogList = styled.div`
  width: 80%;
  max-width: 1024px;
  margin: 0 auto;
  font-size: 1.3rem;
  display: flex;
  flex-wrap: wrap;
`

export const BlogPostWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  font-size: 1.3rem;
  background: black;

  h1 {
    font-size: 2rem;
    padding: 2rem 0;
  }

  .caret-up {
    rotate: -90deg;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
  }
`

export const BlogRow = styled.div`
  display: flex;
  width: 100%;
`

export const BlogItem = styled.div`
  width: calc(100% / 3);
  display: inline-block;
  vertical-align: top;
  padding: 0.5rem;

  @media only screen and (max-width: 968px) {
    width: calc(100% / 2);
  }

  @media only screen and (max-width: 650px) {
    width: 100%;
    margin: 0 0 1rem;
  }

  a {
    display: block;
    border: 1px solid #fff;
    color: #fff;
    height: 100%;

    &:hover {
      img {
        -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
        filter: grayscale(0%);
        mix-blend-mode: normal;
      }
    }
  }

  .img-container {
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;
    background-color: #bde1f4;

    &::before {
      background-color: #140066;
      bottom: 0;
      content: "";
      height: 100%;
      left: 0;
      mix-blend-mode: lighten;
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      z-index: 1;
    }

    img {
      transition: all 0.8s;
      object-fit: cover;
      width: 100%;
      height: 100%;

      filter: grayscale(100%) contrast(1) blur(0px);
      mix-blend-mode: multiply;
      width: 100%;
    }
  }

  h3,
  p {
    padding: 1rem;
  }
`

export const BlogTitle = styled.h3`
  font-size: 1.3rem;
  margin: 10px 0;
`

export const BlogDate = styled.div`
  font-size: 0.8rem;
  padding: 0 1rem;
`

export const BlogExcerpt = styled.p`
  font-size: 1rem;
`

export const BlogPost = styled.div`
  img {
    width: 100%;
  }
`

export const BlogLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  text-align: center;
  margin: 20px;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`

export const BlogPostNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  a {
    margin: 0;
  }
`

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  text-align: center;
  margin: 10px;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`

export const TagsTitle = styled.h4`
  text-decoration: underline;
  font-size: 1.2rem;
`

export const Back = styled.div`
  a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 1rem 0 0;
    cursor: pointer;

    &:hover {
      color: white;
      h5 {
        border-bottom: 1px solid white;
      }
    }

    svg {
      margin-left: -15px;
    }

    h5 {
      margin: 0;
      margin-left: -10px;
    }
  }
`

export const BlogLinks = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
`
