import React, { useEffect, useState } from "react"
import "./../scss/style.scss"
import { Helmet } from "react-helmet"
import "bootstrap/dist/css/bootstrap.css"
import "react-sticky-header/styles.css"
import { Nav, Navbar } from "react-bootstrap"
import "react-sweet-progress/lib/style.css"
import Link from "gatsby-link"
import "../fonts/fonts.css"
import CaretDown from "./../components/Common/Icons/CaretDown"
import CaretUp from "./../components/Common/Icons/CaretUp"

import { Appwrapper, HomeWrapper } from "./../styles/home-styles"

export default function Index() {
  const [showArrowDown, setShowArrowDown] = useState(true)

  useEffect(() => {
    const h1 = document.getElementsByTagName("h1")?.[0]
    document.addEventListener("wheel", (e) => {
      if (h1) {
        h1.scrollBy(e.deltaX, e.deltaY)
        toggleArrow(h1)
      }
    })

    document.body.addEventListener("touchmove", touchmove)
    document.body.addEventListener("touchstart", touchstart)

    let startX, startY

    function touchstart(e) {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    }

    function touchmove(e) {
      let deltaX = e.touches[0].clientX - startX,
        deltaY = e.touches[0].clientY - startY

      if (h1) {
        h1.scrollBy(deltaX, deltaY)
        toggleArrow(h1)
      }
    }
  }, [])

  const toggleArrow = (el) => {
    if (el.scrollHeight - el.scrollTop === el.clientHeight) {
      setShowArrowDown(false)
    }

    if (el.scrollTop === 0) {
      setShowArrowDown(true)
    }
  }

  const onScrollClick = (type) => {
    const scrollNum = type === "down" ? 100 : -100
    const h1 = document.getElementsByTagName("h1")?.[0]
    h1.scrollBy(0, scrollNum)

    toggleArrow(h1)
  }

  return (
    <Appwrapper>
      <Helmet>
        <title>Faith Morante - Full Stack Web Developer</title>
        <meta
          name="description"
          content="Faith Morante - Full Stack Web Developer - React and NodeJS expert, create custom apps, blogs, ecommerce"
        />
      </Helmet>

      <HomeWrapper>
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          src="/assets/abstract-blue-video.mp4"
        ></video>
        <h1>
          Hi! <br /> I'm Faith Morante!
          <br />I like making things happen.
          <br />
          <br />
          I'm a Software Engineer <br />
          since 2015.
          <br />
          <br />I blog, paint and make games among many things.
          <br />
          <br />
          Hire me. <br />
          Or join my Discord for free mentorship.
        </h1>
        {showArrowDown ? (
          <CaretDown onClick={() => onScrollClick("down")} />
        ) : (
          <CaretUp onClick={() => onScrollClick("up")} />
        )}
      </HomeWrapper>

      {/* <p>test padsa</p>
      <p>test padsa</p>
      <p>test padsa</p>
      <p>test padsa</p> */}
    </Appwrapper>
  )
}
