import { LoginPage } from "../pageObject/login_page.po";
let login_page:LoginPage;
describe("Page Object Model",()=>{
    login_page = new LoginPage();
    it('tet for login',()=>{
        
        cy.visit(Cypress.env('BASE_URL'));
        login_page.enterUserName('test');
        login_page.enterPassword('test');
        login_page.clickLogin();
        
        
    })
})