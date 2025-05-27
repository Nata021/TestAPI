import { faker } from '@faker-js/faker';


 describe('Test goals on clickup', () => {
//     //GET запит
//     it('Should send GET request and return 200', () => {
//         cy.sentRequest('/team/90151137047/goal', 'GET').then((response) => {
//             expect(response.status).to.equal(200);
//             expect(response.body.goals[0].team_id).to.equal('90151137047');
//         })
//     })
    //Post запит
    // it('Should send POST request with valid body from file and return 200', () => {
    //     cy.fixture('example.json').then((content) => {
    //         content.name = faker.internet.email();
    //         cy.createGoalPositive(content).then((response) => {
    //             cy.log(response.duration)
    //             expect(response.status).to.equal(200)
    //         })
    //     })
    // })

    //PUT запит
  //it('Should send Put request with waled body and return 200', ()=>{
 //   cy.updateGoal().then((response) => {
 //        expect(response.status).to.equal(200)
 //     })
 //   })

     // it ('sound not be able deleted goal', () => {
     //     cy.createGoal();
     //     cy.deleteGoal();
     //     cy.updateGoal().then((response) =>{expect((response.status).to.equal(404))})
     // })

     // it('should not be able to update deleted goal', () => {
     //     cy.createGoal().then(() => {
     //         cy.deleteGoal().then(() => {
     //             cy.updateGoal().then((response) => {
     //                 expect(response.status).to.equal(404);
     //             });
     //         });
     //     });
     // });
     it('test createGoal', () => {
         cy.createGoal().then((response) => {
             cy.log(JSON.stringify(response.body));
             expect(response.status).to.equal(200);
         });
     });
  })



