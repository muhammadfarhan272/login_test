export class LoginPage {
    private login_username = '#uname';
    private login_password = '#pwd';
    private login_btn = '[type="submit"]';
    enterUserName(uname:string){
        cy.get(this.login_username).type(uname)
    }
    enterPassword(password:any){
        cy.get(this.login_password).type(password)
    }
    clickLogin(){
        cy.get(this.login_btn).click()
    }
}