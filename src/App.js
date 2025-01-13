import React from 'react'
import "./App.css"
import AppHeader from './Components/AppHeader'
import {Space} from "antd"
import SideMenu from './Components/SideMenu/index';
import PageContent from './Components/PageContent/index'
import AppFooter from './Components/AppFooter/index'

const App = () => {
  return (
    <div className='App' >
     
     <AppHeader />
     <div className='SideMenuAndPageContent'  >
      <SideMenu > </SideMenu>
      <PageContent></PageContent>
     </div>
     <AppFooter />



    </div>
    
  )
}

export default App