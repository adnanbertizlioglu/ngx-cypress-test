import { navigateTo, NavigationPage, onNavigationPage } from "../support/PageObjectModel/navigationPage"
import { FormLayoutsPage, onFormLayouts } from "../support/PageObjectModel/formLayoutsPage"
import { onSmartTablePage, SmartTable } from "../support/PageObjectModel/smartTablePage"
import { DatepickerPage, onDatePickerPage } from "../support/PageObjectModel/datePickerPage"
import { on } from "process"
describe('Test with Page Objects',() =>{
    beforeEach('open application' , () => {
        cy.openHomePage()
    })
    it('verify navigations across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datePickerPage()
        navigateTo.smartTablePage()
        navigateTo.toasterPage()
        navigateTo.toolTipPage()
        

        
    })

    it.only('should submit Inline and Basic form and select date in the calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayouts.submitInlineFormWithNameAndMail('Artem','test@test.com')
        onFormLayouts.submitBasicFormWithEmailAndPassword('test@test.com', 'password')
        navigateTo.datePickerPage()
        onDatePickerPage.selectCommonDatepickerDateFromToday(1)
        onDatePickerPage.selectDatepickerWithRangeFromToday(7,14)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstandLastName('Artem','Bondar')
        onSmartTablePage.updateAgeByFirstName('Artem', 28)
        onSmartTablePage.deleteRowByIndex(1)
    
    
    
    })

})