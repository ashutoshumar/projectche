import React from 'react'
import Navbar from './Components/Navbar'
import Postandsell from './Components/Postandsell'
import Menu from './Components/Menu'
import Simpleflat from './Components/Simpleflat'
import Marriagehall from './Components/Marriagehall'
const HomeScreen = (props) => {
    return (
        <div>
           <Navbar/>
     <Postandsell/>
     <Menu/>
    <Marriagehall/>
     <Simpleflat/>   
        </div>
    )
}

export default HomeScreen
