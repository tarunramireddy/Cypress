describe('API Testing', () => {
  it('GET - read users', () => {
    cy.request('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // Check status code
        expect(response.status).to.eq(200)
      })
  })
})
