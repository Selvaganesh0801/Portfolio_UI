import React from 'react'
import DefaultLayout from '../../layouts/defaultLayout'
import MainComponents from '../../views/mainComponents'

function Main() {
    
  return (
    <DefaultLayout>
      <main class="main">
        <MainComponents/>
      </main>
    </DefaultLayout>
  )
}

export default Main