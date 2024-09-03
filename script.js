//your JS code here. If required.
describe('example to-do app', () => {
    it('should have the correct grid layout for the container', () => {
        cy.visit('http://localhost:3000');
        cy.get('#grid', { timeout: 10000 }).should('have.css', 'display', 'grid');
        cy.get('#grid').should('have.css', 'grid-template-rows', '124px 124px 124px 124px 124px');
        cy.get('#grid').should('have.css', 'grid-template-columns', '242.5px 242.5px 242.5px 242.5px');
        cy.get('#grid').should('have.css', 'grid-gap', '10px 10px');
    });

    it('should have correct layout for grid items', () => {
        cy.visit('http://localhost:3000');
        cy.get('#grid > div:nth-child(1)', { timeout: 10000 }).should('have.css', 'grid-column', 'span 4 / auto');
        cy.get('#grid > div:nth-child(2)').should('have.css', 'grid-row', 'span 4 / auto');
        cy.get('#grid > div:nth-child(4)').should('have.css', 'grid-column', 'span 2 / auto');
        cy.get('#grid > div:nth-child(5)').should('have.css', 'grid-column', 'span 2 / auto');
        cy.get('#grid > div:nth-child(10)').should('have.css', 'grid-column', 'span 3 / auto');
    });
});
