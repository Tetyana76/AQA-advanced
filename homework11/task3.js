async function fetchTodo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const todo = await response.json();
    return todo;
  } catch (error) {
    console.error('Error fetching todo:', error);
  }
}

async function fetchUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
  }
}

async function fetchAll() {
  try {
    const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
    console.log('Todo:', todo);
    console.log('User:', user);
  } catch (error) {
    console.error('Error in Promise.all:', error);
  }
}

async function fetchRace() {
  try {
    const firstResolved = await Promise.race([fetchTodo(), fetchUser()]);
    console.log('First resolved:', firstResolved);
  } catch (error) {
    console.error('Error in Promise.race:', error);
  }
}

fetchAll();
fetchRace();