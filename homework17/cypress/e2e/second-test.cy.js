describe('template spec', () => {

  beforeEach(function() {
    cy.visit('/todo')
    cy.get('[class="todo-list"] li').as('initialCount')
  })

  it('passes first', function () {
    cy.get('[class="todo-list"] li').as('initialCountTwo')
    const newTodoName = 'newTodo';
    expect(true).to.equal(true)
    cy.get('[data-test="new-todo"]').type(newTodoName).type('{enter}');
    cy.get('@initialCountTwo').then($initialCount => {
        cy.get('[class="todo-list"] li').eq($initialCount.length - 1).invoke('text').then($createdTodoText => {
        expect($createdTodoText).to.equal(newTodoName);
      })
    }) 
  
  })
})