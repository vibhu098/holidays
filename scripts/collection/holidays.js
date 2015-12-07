import $ from 'jquery'

class HolidayList{
	get(year){
		return $.getJSON("http://holidayapi.com/v1/holidays?country=US&year="+year);
	}
}

export default HolidayList