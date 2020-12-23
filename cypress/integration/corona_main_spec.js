// Note 'cy' 'describe' 'it' are all globals provided by cypress
describe("main corona dead page is loading ok", ()=>{
    before(()=>{
        // cy.visit("https://www.izkor-covid19.co.il/")
    })
    it("Loads main corona dead page correctly",()=>{
        //
        // cy.contains("אודות המיזם")
        // cy.get(".contactProject").should('have.css', 'left', '-440px')

    })
    it("Clicks on add name and opens a form", ()=>{
        // cy.contains("הוספת שם").click()
        // cy.get(".contactProject").should('not.have.css', 'left', '-440px')
        // cy.contains("אודות המיזם").click()
        // cy.get(".contactProject").should('have.css', 'left', '-440px')
        // cy.contains("הדליקו נר ליקירכם").click()
        // cy.get(".contactProject").should('not.have.css', 'left', '-440px')
        // cy.contains("אודות המיזם").click()
        // cy.get(".contactProject").should('have.css', 'left', '-440px')


    })

    // it("Fills form and sends data", ()=>{
    //     cy.contains("הוספת שם").click({force:true})
    //     cy.get("#send_new_name_form").find("#sender").type("ניסיון")
    // })

})