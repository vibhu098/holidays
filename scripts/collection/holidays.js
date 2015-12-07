import $ from 'jQuery'

class HolidayList{
	get(year){
		return $.getJSON("http://holidayapi.com/v1/holidays?country=US&year="+year);
	}
}

export default HolidayList