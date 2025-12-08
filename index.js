const name = "John";    // cannot in React
name = "Jane";          // Error!

let count = 0;
count = 5;              // OK

// In React → 99% of the time use const
// const [count2, setCount] = useState(0);

// Old way
function add(a, b) {
    return a + b;
  }
  
  // New way (arrow)
  const add = (a, b) => a + b;
  
  // In React – super common
//   <button onClick={() => setCount(count + 1)}>
//     Click me
//   </button>

// Without destructuring
const user = { name: "Sara", age: 25 };
const name1 = user.name;
const age1 = user.age;

// With destructuring (React loves this)
// const { name, age } = user;

// In function props
// function UserCard({ name, age, email }) {  // destructuring props directly
//   return <div>{name} is {age}</div>;
// }

// Copy array
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5]; // [1,2,3,4,5]

// Copy object
const oldUser = { name: "Tom", age: 30 };
const updatedUser = { ...oldUser, age: 31 };

// Pass all props (very common in React)
{/* <ChildComponent {...parentProps} /> */}

// Get first item, and rest in another array
const [first, ...others] = [1, 2, 3, 4, 5];
// first = 1, others = [2,3,4,5]

// In function parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
sum(1, 2, 3, 4); // 10

const name9 = "Alex";
const greeting = `Hello ${name9}, welcome!`;  // much cleaner than "Hello " + name
// In React
{/* <h1>{`You have ${count} messages`}</h1> */}

// Old way – crashes if user is null
// user.profile.address.city

// Safe way
const city = user?.profile?.address?.city;  // undefined instead of crash

// || treats 0, "", false as falsy → wrong default sometimes
const count4 = userCount || 10;  // if userCount=0 → becomes 10 (bug!)

// ?? only checks for null/undefined
const count5 = userCount ?? 10;  // if userCount=0 → stays 0 (correct!)

// map → transform each item (used for rendering lists)
users.map(user => <UserCard key={user.id} user={user} />)

// filter → show only some items
users.filter(user => user.active)

// find → get first matching item
const admin = users.find(user => user.role === "admin")

// Old way (messy)
fetch('/api/users')
  .then(response => response.json())
  .then(data => setUsers(data));

// Modern clean way
const fetchUsers = async () => {
  const response = await fetch('/api/users');
  const data = await response.json();
  setUsers(data);
};

// NEVER do this
state.todos.push(newTodo);  // React won't detect change!
setState(state);

// Always create new array/object
setTodos([...todos, newTodo]);                    // add
setTodos(todos.filter(t => t.id !== id));         // remove
setTodos(todos.map(t => t.id === id ? {...t, done: true} : t)); // update

const handleClick = useCallback(() => {
    // this function won't change unless dependencies change
  }, [dependency]);
  
  const expensiveValue = useMemo(() => {
    return heavyCalculation(a, b);
  }, [a, b]);

//   // Stale closure bug (wrong!)
// useEffect(() => {
//     const timer = setInterval(() => {
//       setCount(count + 1);  // count is stuck at initial value!
//     }, 1000);
//   }, []);
  
//   // Correct way – use updater function
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount(prev => prev + 1);  // always gets latest count
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);