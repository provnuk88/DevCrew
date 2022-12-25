import React from 'react'
import '../styles/Brand.css'

const Brand = () => {

  return (
    <div className='brand_main'>
      <div className='elipse'></div>
      <div className='brand_main_desc'>
        <h5 className='brand_main_title'>
          Trusted more than 150+ brand
        </h5>
        <div className='brand_main_icons'>
          <img src="\assets\brandIcons\logos_microsoft.svg" alt="microsoft" />
          <img src="\assets\brandIcons\logos_google.svg" alt="google" />
          <img src="\assets\brandIcons\logos_slack.svg" alt="slack" />
          <img src="\assets\brandIcons\logos_wordpress.svg" alt="wordpress" />
        </div>
      </div>
    </div>
  )
}

export default Brand