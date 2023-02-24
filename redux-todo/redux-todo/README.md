<h3>Q. WHY REDUX?</h3>
<h4>=> It helps us in managing the state well and if we are using a lot of components that needs a particular data, it smoothens the process of transmitting the data to every component and helps us in minimizing the props drilling .
Using context api might be difficult in this case.</h4>

<h3>Q. WHY DO WE NEED TO USE DISPATCH?</h3>
<h4>=> It helps us to dispatch the data to reducer.</h4>

<h3>Q. WHY DO WE NEED ACTIONS AND ACTION TYPES?</h3>
<h4>=> When we have a need to use a particular action again and again in different components then it is better to just use a function defined inside action which we can import in different components and use again and again.
Action types are used to separate different action that we send to reducer and based on the types reducer filters out which task to execute.</h4>

