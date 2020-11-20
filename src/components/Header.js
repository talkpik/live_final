import React, {Component} from 'react';
import Typical from 'react-typical';
import Dialog from './Dialog';

class Header extends Component {
    state={isOpen:false}
render(){
  return (
    <header id="header" className="header">
        <div className="header-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-container">
                            <h3><span>Want to know more about {' '}</span></h3>
	  						<h1><Typical className="mustard"
	  								loop={Infinity}
        							wrapper="b"	
	  								steps={[
	  									'an institution?',2000,
	  									'a profession?',2000,
	  									'an industry?',2000
	  								]}
	  							/></h1>
	  						<br></br>
	  						<p></p>
	  						<span className="mustard" style={{fontSize:"70px"}}>Talk</span>						
	  						<span className="turquoise" style={{fontSize:"70px"}}>Pik</span>
	  						<span style={{fontSize:"1.75rem", fontWeight:"700", color:"#393939"}}>{' '}can help!</span>
	  						<br></br>
	  						<p></p>
	                    </div> 
                        <button className="btn-solid-reg spacing" onClick={(e) => this.setState({isOpen:true})} >FOR FUTURE EVENTS, SIGN UP</button>
	  				<Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen:false})}>
	  					<iframe title="contactform" src="https://formfaca.de/sm/amL5VB_O8" width="640" height="600" frameborder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
	  				</Dialog>
                    </div> 
	  				<div className="col-lg-6">
                        <div className="image-container">
                            <img className="img-fluid" src="images/pic5.png" alt="alternative"/>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    </header>
  );
}
}

export default Header;