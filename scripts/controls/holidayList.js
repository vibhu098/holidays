import React, {Component, PropTypes} from 'react';
import moment from 'moment';

class HolidayList extends Component{
	renderHolidays(){
		var holidayDom=[],self=this;
		Object.keys(self.props.holidays).forEach(function(key){
				var date=self.props.holidays[key];
				var index=0;
				var list=date.map(function(holiday){index++; return<li key={holiday.date+""+index}><span className="date">{moment(holiday.date).format("MMM Do YYYY")}</span>{holiday.name}</li>;}); 
				holidayDom = holidayDom.concat(list);
			});
		return holidayDom;
	}
	render(){
		return <ul>{this.renderHolidays()}</ul>;
	}
}



export default HolidayList