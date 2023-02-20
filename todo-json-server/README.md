<h1>Todo Crud Using Json-server</h1>
<br>
<img src="https://i.postimg.cc/bw0t2dLx/Todo-crud.jpg" alt="">
<br>
<h2>Components Used</h2>
<br>
<h3>
    <ul>
        <li>App</li>
        <li>AddTodo</li>
        <li>TodoCard</li>
        <li>Pagination</li>
    </ul>
</h3>
<br>
<hr>
<br>
<h2>Whole Process in detail</h2>
<hr>
<h3>
    <ul>
        <li>Firstly, I created a json server using which I’m getting the data, adding, editing and deleting the data. </li>
        <li>I’ve created some mock tasks to show when the users first visit the page. It can see some of the previously saved tasks.</li>
        <li>To show the data on the UI I’ve made a getData function whose work is to fetch the data from the Server and store inside the task array using setTask method. I’m calling this inside a useEffect hooks so that if it takes longer to get data then user can see the loading msg.</li>
        <li>I’ve created an Add todo component with an input field and button component. Then created a todo useState which is storing the data whenever the user is tying in the input field using an event listener onChange.</li>
        <li>I made a function called addingTodo which I’m passing from the App component to the AddTodo component. When the user clicks on the add button I’m passing this addingTodo function by listening to the onClick event, with the input value as the parameters. </li>
        <li>Inside the addingTodo function I’m taking a setLoading state whose default value is false and once the addingTodo function is called its value turns true. Then the todo task is posted using Axios. I’ve handled the error state as well in case there is some error fetching the data from the server. Once the data is received I’m saving it in a state called tasks using setTasks which is an array.</li>
        <li>Once the data is stored in tasks, I’m mapping through the array and pass the details to another Component called TodoCard. TodoCard component has an h3 tag where the name of the task is getting displayed. It has some icons for toggling the status of the task, editing the name of the task, and deleting the task. </li>
        <li>For the icons, I’ve used a react package called material UI icons.</li>
        <li>For toggling the status I’ve defined a function called toggleStatus in the app component and have passed it to the TodoCard component using the props concept. Inside the TodoCard component, I’m calling this function once the user clicks on the completed icon using an onClick fat arrow function. onClicking the status icon the function takes the id, status, and title as parameters. Inside the toggleStatus function in the App component, I’m using Axios put method and calling the server adding the id after the whole URL, where I’ve kept the title the same and changed the status using NOT operator. After that, I’m calling a getData function which is responsible for displaying the data on the UI.  I’ve also managed the loading error states.</li>
        <li>To delete the task from the list when the user clicks on the delete icon. I’ve called a handleDelete function which is taking the id as a parameter and I’ve made this function in the App component and passed it to the TodoCard component using the props method. Inside the function, I’m calling the Axios delete method and once it is done again I’m calling the getData function to update it on the UI. Handling the loading and error part as well.</li>
        <li>To edit the tasks, I’ve taken a state edit and setEdit. When the user clicks on the delete icon, using the onClick event listener I’ve called a handleEdit function which is being passed on from the App component to the TodoCard component as a prop. It is taking the id as a parameter. Inside the handleEdit function, using the Axios get method I’m getting the data related to that task and storing it inside the edit variable which I’ve declared as an object. After storing the details in the edit I’m passing this value inside the AddTodo component. Inside the AddTodo component, I’ve passed the edit.title as a default value in the todo state. In the input, I’ve passed the value of the todo inside its value attributes, this helps in displaying the task which we want to edit inside the input value on the UI and also edit it. Once edited just click on the add button which will invoke the addingTodo function. Inside the addingTodo function, I’m checking if the value of edit.title is empty or not. If it’s not empty, it will go to the else condition and will call the Axios put method, its id helps us to track the task we want to edit and then pass the payload and the status remains as it was earlier. Once this is done. I’m again calling the getData function to display the edited value on the UI.</li>
        <li>I’ve also taken a Pagination component which helps us in going from one page to other. To apply this, I’ve limited the tasks per page to 3 and I’ve also applied page and limit params to the URL. I’ve also taken 2 more states for the current page and total pages which helps me in keeping track of the current page and total pages present. Inside the Pagination component, 2 buttons are present for the previous page and current page, and two h3 tags to display the current page and total pages.
        onClicking the prev or next button I’mcalling the setCurrent method which hasbeen passed from the App component tothe TodoCard Component. On clicking thebutton event is triggered and the valueof the current changes as per the valuespassed.
        </li>
    </ul>
</h3>
