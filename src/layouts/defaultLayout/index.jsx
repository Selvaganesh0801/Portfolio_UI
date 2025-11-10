import React from 'react'
import TopNav from '../../shared/TopNav'
import Footer from '../../shared/Footer'

function DefaultLayout(props) {
  return (
    <React.Fragment>
        <TopNav/>
        <>{props.children}</>
        <Footer/>
          <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center active"><i class="bi bi-arrow-up-short"></i></a>
    </React.Fragment>
  )
}

export default DefaultLayout