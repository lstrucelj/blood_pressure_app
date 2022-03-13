First, run command: 

### `npm install`

Run the following command in the project directory:

### `npm start`


## Login validations

To log in to the application, you need to enter an email and password.

Email must be in the correct format containing "@".
The password must contain at least one uppercase letter, one lowercase letter, one number and must be at least 6 characters long.

After successfully logging in to the app, the Dashboard screen opens.

## Dashboard

The last added blood pressure value is displayed at the top of the dashboard.

The other half of the dashboard displays a histogram with the blood pressure data of the registered user.

Values can be displayed in linear or logarithmic form by clicking on a specific button.

On the right, there are two buttons.

The first button is to change the minimum and maximum values of the y axis.
You need to enter both values and then click the button again to apply the values.

The second button is to change the poll interval.
Just enter the number (seconds) and the interval will start immediately.

The graph can be exported in SVG, PNG, and CSV format.
Also, on the legend of the graph, it is possible to mark some of the values and display only one or none.


