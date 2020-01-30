import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Un blog de{" "}
    <Styled.a href="https://www.instagram.com/okenobi/">Obi-Wan</Styled.a>.
    <br />
    Astromechs, coding and other stuff.
  </Fragment>
)
