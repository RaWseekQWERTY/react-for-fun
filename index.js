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

const count6 = 0;           // OK – value never reassigned
let mutable = 0;
mutable = 5;               // OK

// In React → 99% of variables and state are const
const [count9, setCount] = useState(0);  // count is const, we never do count = 10

// Original
function multiply(a, b) { return a * b; }
function greet() { return "Hi"; }

// Solutions
const multiply = (a, b) => a * b;
const greet = () => "Hi";               // even shorter when one expression

const user9 = { name: "Sara", age: 28, country: "Spain" };

// // Solution (one line)
// const { name, age } = user9;
// console.log(name, age); // Sara 28

const colors = ["red", "green", "blue", "yellow"];

// // Solution
// const [primary, ...others] = colors;
// console.log(primary); // "red"
// console.log(others);  // ["green", "blue", "yellow"]

//Destructuring props in React component
function Profile({ name, age, job }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Job: {job}</p>
    </div>
  );
}

// Usage
<Profile name="Alex" age={33} job="Developer" />

//Spread object (override values)
const defaults = { theme: "dark", lang: "en" };
const userSettings = { lang: "es" };

// Solution – userSettings wins
const settings = { ...defaults, ...userSettings };
console.log(settings); // { theme: "dark", lang: "es" }

const fruits = ["apple", "banana"];
//Spread array
// One-liner solution
const moreFruits = [...fruits, "orange", "mango"];
console.log(moreFruits); // ["apple", "banana", "orange", "mango"]

//Rest operator + reduce
// Accepts any number of arguments
const sum = (...numbers) => numbers.reduce((total, n) => total + n, 0);

console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(10, 20));        // 30
console.log(sum());              // 0

//Template literals
const welcome = (name, points) => `Hello ${name}! You have ${points} points.`;

console.log(welcome("Sara", 150));
// → Hello Sara! You have 150 points.

//Optional chaining
const user1 = { profile: { avatar: "img.jpg" } };
const user2 = { }; // no profile

// Safe access
const avatar1 = user1.profile?.avatar ?? "default.png";     // "img.jpg"
const avatar2 = user2.profile?.avatar ?? "default.png";     // "default.png"

console.log(avatar1, avatar2);

// Nullish coalescing (??) fixes a real bug
// Buggy version (common mistake)
let count22 = 0;
let displayCount = count22 || 10;   // becomes 10 → wrong!

// Correct version
displayCount = count ?? 10;       // stays 0 → correct!
console.log(displayCount);        // 0


const users = [
  { id: 1, name: "A", active: true },
  { id: 2, name: "B", active: false },
  { id: 3, name: "C", active: true }
];

// 1. Render list of names (React JSX style)
{users.map(user => <div key={user.id}>{user.name}</div>)}

// 2. Only active users
const activeUsers = users.filter(user => user.active);

// 3. Find specific user
const userWithId2 = users.find(user => user.id === 2);
console.log(userWithId2); // {id: 2, name: "B", active: false}