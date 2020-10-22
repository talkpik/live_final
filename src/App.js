
import Footer from './components/Footer';
import NavMenuBar from './components/NavMenuBar';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


import Header from './components/Header';
import Services from './components/Services';
import Seeker from './components/Seeker';
import Speaker from './components/Speaker';
import Events from './components/Events';
import Team from './components/Team';
import Contact from './components/Contact';


class App extends Component {
  render(){
    return (      
       <BrowserRouter>
        <div>
          <NavMenuBar />
            <Switch>
            
             <Route path="/" component={()=><Header/>} exact/>
             <Route path="/services" component={()=><Services/>}/>
             <Route path="/seeker" component={Seeker}/>
             <Route path="/speaker" component={Speaker}/>
             <Route path="/events" component={Events}/>
             <Route path="/team" component={Team}/>
             <Route path="/contact" component={Contact}/>
             <Redirect to="/" />
            
           </Switch>
           <Footer />
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;