import React,{Component} from 'react';

export default class Cholestrol extends Component{
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
  }

  render(){
    let email=this.props.data[0].emails[0].address;
    let name=this.props.data[0].profile.name;
    return(
    //================ Navbar Content ==================
    <div>
      <div className="navbar narvar-static-top top-bar" >
        <div className="container">
          <a href="/info" className="navbar-brand text-intro text-white">Online Patient Portal</a>

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
                <div className="panel-title">Cholestrol Entry Form</div>
              </div>
              <div className="panel-body">

                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="hdl">High Density Lipoproteins(HDL):</label>
                  <input type="number" id="hdl" className="form-control" placeholder="Enter HDL Value" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="ldl">Low Density Lipoproteins(LDL):</label>
                  <input type="number" id="ldl" className="form-control" placeholder="Enter LDL Value" required/>
                </div>
                 <button type="submit" className="btn btn-default">Submit</button>
                </form>

              </div>
           </div>
         </div>
       </div>
      </div>

      <div className="container-fluid">
       <div className="row">
        <div className="col-md-8 col-md-offset-2">

         <div className="panel panel-primary">
          <div className="panel-heading">
           <div className="panel-title">Timeline of Cholestrol History Record</div>
          </div>
          <div className="panel-body">

            <div id="timeline" className="timeline-container">
              <div className="timeline-wrapper">
                <h2 className="timeline-time">1976</h2>
                <dl className="timeline-series">
                  <dt className="timeline-event" id="event01"><a>HDL:45 mg/dl</a></dt>
                  <dd className="timeline-event-content" id="event01EX">
                    <p>Content</p>
                  </dd>
                </dl>
              </div>
              <div className="timeline-wrapper">
                <h2 className="timeline-time">1976</h2>
                <dl className="timeline-series">
                  <dt className="timeline-event" id="event02"><a>LDL:110 mg/dl</a></dt>
                  <dd className="timeline-event-content" id="event02EX">
                    <p>Content</p>
                  </dd>
                </dl>
              </div>
              <br className="clear" />
            </div>

          </div>
         </div>


        </div>
       </div>
      </div>

</div>
    );
  }

}
