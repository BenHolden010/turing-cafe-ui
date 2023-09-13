// import { beforeEach } from "mocha"

describe('home page', () => {
  beforeEach(()=>{
    cy.intercept("GET",'http://localhost:3001/api/v1/reservations' , {
      statusCode:200,
      fixture: 'reservations'
    })
    .intercept("POST",'http://localhost:3001/api/v1/reservations', {
      body: {name:'Savannah', date:'07/23', time:'7:00', number:'5'}
    })
    .visit("http://localhost:3000/")
  })
  it('should have a title, input field, and 3 reservations', () => {
    cy.get(".app-title").contains("h1","Turing Cafe Reservations")
    .get(".reservations-container").find(".card").should("have.length",3)
    .get("input[name='name']").type("Savannah")
    .get("input[name='date']").type("07/23")
    .get("input[name='time']").type("7:00")
    .get("input[name='number']").type("5")
    .get("button").contains("SUBMIT").click()
    .get(".reservations-container").find('.card').should("have.length",4)
    .get(".reservations-container").first().contains("h3", "Christie")
    .get(".reservations-container").first().contains("p", "12/29")
    .get(".reservations-container").first().contains("p", "7:00 pm")
    .get(".reservations-container").first().contains("p", "12")
    .get(".reservations-container").last().contains("h3", "Savannah")
    .get(".reservations-container").last().contains("p", "07/23")
    .get(".reservations-container").last().contains("p", "7:00 pm")
    .get(".reservations-container").last().contains("p", "5")
  })
})