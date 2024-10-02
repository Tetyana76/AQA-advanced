function fetchTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(todo => {
      return todo; 
    })
    .catch(error => {
      console.error('Error fetching todo:', error);
    });
}

function fetchUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(user => {
      return user; 
    })
    .catch(error => {
      console.error('Error fetching user:', error);
    });
}

Promise.all([fetchTodo(), fetchUser()])
  .then(([todo, user]) => {
    console.log('Todo:', todo);
    console.log('User:', user);
  })
  .catch(error => {
    console.error('Error with Promise.all:', error);
  });

  Promise.race([fetchTodo(), fetchUser()])
  .then(result => {
    console.log('First completed:', result);
  })
  .catch(error => {
    console.error('Error with Promise.race:', error);
  });