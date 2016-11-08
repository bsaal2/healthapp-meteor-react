import React,{Component} from 'react';

export default class Timeline extends Component{
  constructor(props){
    super(props);
  }

  renderTimeline(){
    return this.props.data.map((cholestrol,index) => (
      <div className="timeline-wrapper" key={cholestrol._id}>
        <h2 className="timeline-time">{cholestrol.created_at}</h2>
        <dl className="timeline-series">
          <dt className="timeline-event" id={"event0"+index}><a>HDL:{cholestrol.hdl}/LDL:{cholestrol.ldl} mg</a></dt>
          <dd className="timeline-event-content" id={"event0"+index+"EX"}>
            <p>Content</p>
          </dd>
        </dl>
      </div>
    ));
  }

  render(){
    return(
      <div className="container-fluid">
       <div className="row">
        <div className="col-md-8 col-md-offset-2">

         <div className="panel panel-primary">
          <div className="panel-heading">
           <div className="panel-title">Timeline of Cholestrol History Record</div>
          </div>
          <div className="panel-body">

            <div id="timeline" className="timeline-container">
              {this.renderTimeline()}
              <br className="clear" />
            </div>

          </div>
         </div>


        </div>
       </div>
      </div>
    );
  }
}
