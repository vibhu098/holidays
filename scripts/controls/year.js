import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Month from './month';
import HolidayList from './holidaylist';
import MonthView from './month_detail';

class Year extends Component{
	constructor(props) {
    	super(props);
    	this.state = {year: this.props.selected}
  	}

    
  	openMonth(index){
  		var date = moment({year:this.props.selected,month:index});
      ReactDOM.render(<MonthView selected={date} holidays={this.props.holidays}/>,
    		document.getElementById('month-view'));
  	}

  	renderMonths(year){
  		var months=[];
  		for(var i=0;i<12;i++){
  			months.push(<Month key={year+""+i} selected={moment({year:year,month:i})} holidays={this.props.holidays} onClick={this.openMonth.bind(this,i)}/>);
  		}
  		return months;
  	}

  	render() {
		var year= this.props.selected;
  		return <div>
  				{this.renderMonths(year)}
  			</div>;
  	}
}

Year.propTypes={
	selected:PropTypes.number
}
export default Year
