import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Year from './year';
import moment from 'moment';
import HolidayList from '../collection/holidays';
var holidays = new HolidayList();

class YearSelection extends Component{
	constructor(props) {
    	super(props);
    	this.state = {selectedYear: moment().year()}
  	}
  	
  	renderYears(){
  		var years=this.props.years,
  		domYears=[];
  		for(var i in years){
  			domYears.push(<option key={years[i]*Math.random().toFixed(2)+"year"} value={years[i]}>{years[i]}</option>);  		
  		}
  		return domYears; 
  	}

  	componentDidMount(){
    	this.changeYear();    
    }

  	changeYear(e){
  		var year= this.state.selectedYear;
  		if(e){
  			year = (e.target.value)*1;
  		}
      holidays.get(year).done(function(res){
        ReactDOM.render(<Year selected={year} holidays={res.holidays} />,
          document.getElementById('years')
        );
      });

		this.setState({selectedYear:year});
  	}
  	render(){
  		return <select className="year-dropdown"  value ={this.state.selectedYear} onChange={this.changeYear.bind(this)}>
  			{this.renderYears()}
  		</select>;
  	}
}

YearSelection.propTypes={
	years:PropTypes.arrayOf(PropTypes.number)
}

export default YearSelection;