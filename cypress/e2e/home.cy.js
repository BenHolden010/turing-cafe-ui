// import { beforeEach } from "mocha"

describe('home page', () => {
  beforeEach(()=>{
    cy.intercept("GET",'http://localhost:3001/api/v1/reservations' , {
      statusCode:200,
      fixture: 'reservations'
    }).as("allreservations")
    .intercept("POST",'http://localhost:3001/api/v1/reservations', {
      body: {name:'Savannah', date:'07/23', time:'7:00', number:'5'}
    }).as("reservation")
  })
  it('should have a title, input field, and 3 reservations', () => {
    cy.visit("http://localhost:3000/").wait("@allreservations")
    .get(".app-title").contains("h1","Turing Cafe Reservations")
    .get("input[name='name']").type("Savannah").should('have.value', 'Savannah')
    .get("input[name='date']").type("07/23").should('have.value', '07/23')
    .get("input[name='time']").type("7:00").should('have.value', '7:00')
    .get("input[name='number']").type(5).should('have.value', 5)
    .get(".reservations-container").find(".card").should("have.length",3)
    .get("button").contains("SUBMIT").click().wait("@reservation")
    .get(".reservations-container").find('.card').should("have.length",4)
    .get(".reservations-container").children().first().contains("h3", "Christie")
    .get(".reservations-container").children().first().contains("p", "12/29")
    .get(".reservations-container").children().first().contains("p", "7:00 pm")
    .get(".reservations-container").children().first().contains("p", "11")
    .get(".reservations-container").children().last().contains("h3", "Savannah")
    .get(".reservations-container").children().last().contains("p", "07/23")
    .get(".reservations-container").children().last().contains("p", "7:00 pm")
    .get(".reservations-container").children().last().contains("p", "5")
  })
})