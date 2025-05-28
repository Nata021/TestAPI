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

Cypress.Commands.add('sentRequest', (endpoint, method, body=null) => {
    cy.request({
        url: endpoint,
        method: method,
        headers:{
            'Authorization': 'pk_200447320_BF704GUZ6OPFSQ08L2NN2BWLXZEU0IZM',
            'Content-Type': 'application/json',
        },
        failOnStatusCode: false,
        body: body
    })
})

Cypress.Commands.add('createGoal', () => {
    const name = faker.company.name();
    cy.wrap(name).as('goalName');

    return cy.sentRequest('/team/90151221188/goal', 'POST', { name }).then(response => {
        expect(response.status).to.be.oneOf([200, 201]);
        expect(response.body).to.have.property('goals');
        expect(response.body.goals[0]).to.have.property('id');
        expect(response.body.goals[0].name).to.equal(name);

        cy.wrap(response.body.goals[0].id).as('goalId');
        return response;
    });
});

Cypress.Commands.add('getGoal', () => {
    return cy.get('@goalId').then(id => {
        return cy.sentRequest(`/goal/${id}`, 'GET').then(response => {
            expect(response.status).to.equal(200);
            cy.get('@goalName').then(name => {
                expect(response.body.name).to.equal(name);
            });
            return response;
        });
    });
});

Cypress.Commands.add('updateGoal', () => {
    const newName = faker.company.name();
    cy.wrap(newName).as('updatedName');

    return cy.get('@goalId').then(id => {
        return cy.sentRequest(`/goal/${id}`, 'PUT', { name: newName }).then(response => {
            expect(response.status).to.be.oneOf([200, 204]);
            return response;
        });
    });
});

Cypress.Commands.add('verifyUpdatedGoal', () => {
    return cy.get('@goalId').then(id => {
        return cy.sentRequest(`/goal/${id}`, 'GET').then(response => {
            expect(response.status).to.equal(200);
            cy.get('@updatedName').then(updatedName => {
                expect(response.body.name).to.equal(updatedName);
            });
            return response;
        });
    });
});

Cypress.Commands.add('deleteGoal', () => {
    return cy.get('@goalId').then(id => {
        return cy.sentRequest(`/goal/${id}`, 'DELETE').then(response => {
            expect([200, 204]).to.include(response.status);
            return response;
        });
    });
});

Cypress.Commands.add('verifyDeletedGoal', () => {
    return cy.get('@goalId').then(id => {
        return cy.sentRequest(`/goal/${id}`, 'GET').then(response => {
            expect([404, 400, 410]).to.include(response.status);
            return response;
        });
    });
});
