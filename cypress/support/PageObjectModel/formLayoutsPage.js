
export class FormLayoutsPage{
    submitInlineFormWithNameAndMail(name, email){
        cy.contains('nb-card', 'Inline form').then( form => {
            cy.wrap(form).find('[placeholder="Jane Doe"]').type(name)
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[type="checkbox"]').check({force : true})
            cy.get('.form-inline > .appearance-filled').click()
        
        
        
        })
    }

    submitBasicFormWithEmailAndPassword(email,password){
        cy.contains('nb-card', 'Basic form').then( form => {
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[placeholder="Password"]').type(password)
            cy.wrap(form).find('[type="checkbox"]').check({force : true})
            cy.get(':nth-child(2) > :nth-child(1) > nb-card-body > form > .appearance-filled').click()
        
        })



    }

}   

export const onFormLayouts = new FormLayoutsPage()