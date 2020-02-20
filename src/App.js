import React , {Component} from 'react';
import './App.css';
import Layout from './component/Layout/Layout'
import Burgerbuilder from './container/Burgerbuilder/Burgerbuilder'
class App extends Component{
render(){
  return(
    <Layout>
      <Burgerbuilder/>
    </Layout>
  )
}
}

export default App;
