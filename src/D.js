import React from 'react'
import {Context} from './App'
// import { useContext } from 'react'
const D = () => {
    // const {userName} = useContext(Context)
  return (
    <div>
         <div>Task1</div>
        <Context.Consumer>
            {value => <h3>{value}</h3>} 
        </Context.Consumer>
    </div>
  )
}

export default D