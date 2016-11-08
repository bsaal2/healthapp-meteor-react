import React,{Component} from 'react';
import Timeline from './container/timeline.js';
import Chart from './container/chart.js';

export default class Pressure extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
  $.getScript( "/js/timeliner.min.js" ).done(function(){
      $.timeliner({});
			$.timeliner({
				timelineContainer: '#timeline-js',
				timelineSectionMarker: '.milestone',
				oneOpen: true,
				startState: 'flat',
				expandAllText: '+ Show All',
				collapseAllText: '- Hide All'
			});
  });
  }

  Logout(e){
  e.preventDefault();
  Meteor.logout(function(err){
    if(!err){
      FlowRouter.go("/");
    }
  });
  }

  handleSubmit(e){
    e.preventDefault();
    let high=$("#high").val();
    let low=$("#low").val();
    let data={
              highPressure:high,
              lowPressure:low,
              created_at:Date.now(),
              updated_at:Date.now()
             }
    Meteor.call("enterPressureData",data,function(err){
      if(!err){
        $("#high").val('');
        $("#low").val('');
        Bert.alert("Success on submitting data",'success','growl-top-right');
      }
      else{
        Bert.alert(err,'danger');
      }
    });
  }

  render(){
    let email=this.props.data[0].emails[0].address;
    let name=this.props.data[0].profile.name;
    return(
    //================ Navbar Content ==================
    <div>
      <div className="navbar narvar-static-top top-bar" >
        <div className="container">
          <a href="/" className="navbar-brand text-intro text-white">Online Patient Portal</a>

          <ul className="nav navbar-nav navbar-right">
                <li className="dropdown ">
                  <a href="#" className="dropdown-toggle text-white text-desc user-account" data-toggle="dropdown">
                    <i className="fa fa-user" aria-hidden="true"></i> <span> {email} </span><span className="caret"></span>
                  </a>

                  <ul className="dropdown-menu">

                     <li>
                      <div className="navbar-content">
                         <div className="row">
                           <div className="col-sm-3">
                            <a href="#" className="text-center"><i className="fa fa-user fa-4x" aria-hidden="true"></i></a>
                           </div>
                           <div className="col-sm-9">
                            <p><strong> {name} </strong></p>
                            <a href="#" className="btn btn-primary btn-block btn-sm sign-out">View Profile</a>
                           </div>
                         </div>
                        </div>
                      </li>

                        <div className="divider"></div>

                        <li>
                          <div className="navbar-login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <p>
                                      <a href="#" onClick={this.Logout} className="btn btn-danger btn-block sign-out">Sign Out</a>
                                    </p>
                                </div>
                            </div>
                          </div>
                        </li>

                  </ul>
                </li>
          </ul>
        </div>
      </div>

{/*============================= Pressure Entry =================*/}
      <div className="container-fluid">
       <div className="row">
         <div className="col-md-8 col-md-offset-2">
           <div className="panel panel-primary">
              <div className="panel-heading">
                <div className="panel-title">Blood Pressure Entry Form</div>
              </div>
              <div className="panel-body">

                <form onSubmit={this.handleSubmit}>
                 <div className="form-group">
                   <label htmlFor="high">High Pressure:</label>
                   <input type="number" id="high" className="form-control" placeholder="High Value" required/>
                 </div>
                 <div className="form-group">
                   <label htmlFor="low">Low Pressure:</label>
                   <input type="number" id="low" className="form-control" placeholder="Low Value" required/>
                 </div>
                 <button type="submit" className="btn btn-default">Submit</button>
                </form>

              </div>
           </div>
         </div>
       </div>
      </div>

      <Timeline />
      <Chart />
</div>
    );
  }

}
