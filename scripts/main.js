import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Year from './controls/year';
import YearSelect from './controls/yearselection';

require('../styles/main.scss');

var years=[2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];




var App= React.createClass({

	render:function(){
		return <div>
			<div id="year-view">
				<div className="year-selection">
					<YearSelect years={years} />
				</div>
				<div id="years">
			   	</div>
		   	</div>
		   	<div id="month-view">
		   	</div>
   		</div>;
	}
});
ReactDOM.render(<App/>,
    document.getElementById('main')
);
