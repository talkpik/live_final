import React, {Component} from 'react';
import Dialog from './Dialog';

class Events extends Component {
state={isOpen:false}
render(){
  return (
    <div id="event" className="cards-2">
        <div className="event-container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="mustard">Events</h2>
	  				<p className="p-heading p-large"></p>
                </div> 
            </div> 
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">Supply Chain Management</div>
	  						<div className="card-subtitle">Careers & Resources</div>
                            <hr className="cell-divide-hr"></hr>
                            <div className="price">
                                <span className="value">Dec 2, 2020</span>
                                <div className="frequency">6:00-6:45PM</div>
                            </div>
                            <hr className="cell-divide-hr"></hr>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-check"></i><div className="media-body">City of Vancouver employee</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check"></i><div className="media-body">APICS Vancouver President</div>
                                </li>
                            </ul>
                            <button className="btn-solid-reg popup-with-move-anim" onClick={(e) => this.setState({isOpen:true})} >REGISTER</button>
	  							<Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen:false})}>
                                  <iframe title="event1" src="https://formfaca.de/sm/T-pK8yXMA" width="640" height="400" frameborder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
	  							</Dialog>
							
                        </div>
                    </div> 
                	<div className="card">
                        <div className="card-body">
                            <div className="card-title">University of British Columbia</div>
	  						<div className="card-subtitle">Business and Engineering Schools</div>
                            <hr className="cell-divide-hr"></hr>
                            <div className="price">
                                <span className="value">Dec 16, 2020</span>
                                <div className="frequency">6:00-6:45PM</div>
                            </div>
                            <hr className="cell-divide-hr"></hr>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-check"></i><div className="media-body">UBC Alumni panel</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check"></i><div className="media-body">Undergraduate and Graduate</div>
                                </li>
                            </ul>
                            <button className="btn-solid-reg popup-with-move-anim" onClick={(e) => this.setState({isOpen:true})} >REGISTER</button>
	  							<Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen:false})}>
                                  <iframe title="event1" src="https://formfaca.de/sm/T-pK8yXMA" width="640" height="400" frameborder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
	  							</Dialog>
							
                        </div>
                    </div>
					<div className="card">
                        <div className="card-body">
                            <div className="card-title">Software Development</div>
	  						<div className="card-subtitle">Learn to tackle your interviews!</div>
                            <hr className="cell-divide-hr"></hr>
                            <div className="price">
                                <span className="value">Jan 6, 2021</span>
                                <div className="frequency">6:00-6:45PM</div>
                            </div>
                            <hr className="cell-divide-hr"></hr>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-check"></i><div className="media-body">LightHouse Lab Mentor</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check"></i><div className="media-body">Ex-IBM WCS Developer</div>
                                </li>
                            </ul>
                            <button className="btn-solid-reg popup-with-move-anim" onClick={(e) => this.setState({isOpen:true})} >REGISTER</button>
	  							<Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen:false})}>
                                  <iframe title="event1" src="https://formfaca.de/sm/T-pK8yXMA" width="640" height="400" frameborder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
	  							</Dialog>
							
                        </div>
                    </div>

                </div> 
            </div> 
        </div> 
    </div> 
    


  );
}
}

export default Events;
