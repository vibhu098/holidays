import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import moment from 'moment';
import Month from './month';
import HolidayList from './holidayList';

class MonthView extends Component{
	constructor(props) {
    	super(props);
    	this.state = {month: this.props.selected}
  	}

	filterHolidays(month){
      var keys=Object.keys(this.props.holidays);
      var monthHolidays={};
      var self=this;
      keys.map(function(key){
        var m=moment(key).month()
        if(m==month){
          monthHolidays[key]=self.props.holidays[key];
        } 
      });
      return monthHolidays;
    }

    previous() {
        var month = this.state.month;
        month.add(-1, "M");
        this.setState({ month: month });
    }

    next() {
        var month = this.state.month;
        month.add(1, "M");
        this.setState({ month: month });
    }

    back(){
    	$("#year-view").removeClass('hidden');
  		$("#month-view").addClass('hidden');
    }
	 
    componentWillReceiveProps(nextProps){
    	var month= nextProps.selected;
    	this.setState({month:month});
    }
  	render(){
  		var month=this.state.month.clone();
  		var holidays=this.filterHolidays(this.state.month.month());
  			$("#year-view").addClass('hidden');
      		$("#month-view").removeClass('hidden');
	      return <div>
	      		<div className="button-wrapper clearfix">
	      			<button className="back btn-primary pull-left" onClick={this.back.bind(this)}>Back</button>
	      			<span className="year-label">{month.year()}</span>
	      			<div className="navigation pull-right">
		      			<button className="prev btn-primary" onClick={this.previous.bind(this)}>Prev</button>
		      			<button className="next btn-primary" onClick={this.next.bind(this)}>Next</button>
	      			</div>
	      		</div>
	      		<div id='month-detail'>
	      			<Month selected={month} holidays={this.props.holidays}/>
	      		</div>      
	      		<div id="holiday-detail">
	      			<HolidayList holidays={holidays} />
	      		</div>
	      		</div>;
  	}
}

MonthView.propTpes={month:PropTypes.object,holidays:PropTypes.object};

export default MonthView