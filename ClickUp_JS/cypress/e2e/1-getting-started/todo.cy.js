import { faker } from '@faker-js/faker';


describe('Goal CRUD API Test Suite', () => {
    it('should create, verify, update and delete a goal', () => {
        // 1. Створити ціль
        cy.createGoal().then(createResponse => {
            cy.log('Goal created:', createResponse.body);
        });

        // 2. Перевірити, що ціль створено правильно
        cy.getGoal().then(getResponse => {
            cy.log('Verified created goal:', getResponse.body);
        });

        // 3. Оновити ціль
        cy.updateGoal().then(updateResponse => {
            cy.log('Goal updated');
        });

        // 4. Перевірити, що оновлення відбулося
        cy.verifyUpdatedGoal().then(verifyUpdated => {
            cy.log('Verified updated goal');
        });

        // 5. Видалити ціль
        cy.deleteGoal().then(deleteResponse => {
            cy.log('Goal deleted');
        });

        // 6. Перевірити, що ціль більше не існує
        cy.verifyDeletedGoal().then(deletedCheck => {
            cy.log('Verified goal no longer exists');
        });
    });
});



