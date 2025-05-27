// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { .
import { faker } from '@faker-js/faker';
import './commands'

Cypress.Commands.add('sentRequest', (endpoint, method, body=null) => {
    cy.request({
        url: endpoint,
        method: method,
        headers:{
            'Authorization': 'pk_188686871_GUMKJPKLN6NVIKT6XYQ4F9V7VT1X6TAC',
            'Content-Type': 'application/json',
        },
        failOnStatusCode: false,
        body: body
    })
})

Cypress.Commands.add('createGoal', () => {
    return cy.sentRequest('/team/90151137047/goal', 'POST', {
        name: faker.internet.email()
    }).then((response) => {
        cy.log(JSON.stringify(response.body)); // ← додай для дебагу
        console.log(response.body);           // ← вивід у devtools

        // Перевір, чи існує response.body.goal і goal.id
        if (response.body && response.body.goal && response.body.goal.id) {
            cy.wrap(response.body.goal.id).as('goalId');
        } else {
            throw new Error('goal.id не знайдено у відповіді: ' + JSON.stringify(response.body));
        }

        return response;
    });
});

Cypress.Commands.add('updateGoal', () => {
    cy.get('@goalId').then((id)=>{
        cy.sentRequest('/goal/' + id, 'PUT', {'name': faker.company.name()})
    })
})

Cypress.Commands.add('createAndUpdateGoalPositive', () => {
    cy.createGoal()
    cy.get('@goalId').then((id)=> {
        cy.updateGoal()
    })
})
