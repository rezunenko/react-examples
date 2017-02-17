/**
 * Created by rezun on 20.01.2017.
 */
var ReactDOM = require('react-dom');
var React = require('react');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {TimePicker, Dialog} from 'material-ui';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class DialogExampleSimple extends React.Component {
    state = {
        open: false,
    };
	
    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
			<Dialog
				modal={false}
				open={true}
				title="Dialog With Actions"
				>
					<TimePicker
					hintText='Time'
					format='24hr'
					className="dialog-datetime__time"
					/>
				</Dialog>
        );
    }
}

ReactDOM.render(
	<MuiThemeProvider>
		<TimePicker
		hintText='Time'
		format='24hr'
		className="dialog-datetime__time"
		/>
	</MuiThemeProvider>,
	document.getElementById('content')
);
