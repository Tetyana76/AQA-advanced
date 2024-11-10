import MainPage from '../pageObjectModels/mainPage.js';
import LoginPage from '../pageObjectModels/loginPage.js';

describe('Main Page Tests', () => {
  const mainPage = new MainPage();
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.navigateToMainPageWithLogin();

  });

  it('should find all buttons in the header', () => {
    mainPage.homeButton().should('be.visible');
    mainPage.aboutButton().should('be.visible');
    mainPage.contactsButton().should('be.visible');
    mainPage.guestLogIn().should('be.visible');
    mainPage.signInButton().should('be.visible');
  });

  it('should find all social icons', () => {
    mainPage.socialsFacebook().should('be.visible');
    mainPage.socialsTelegram().should('be.visible');
    mainPage.socialsYoutube().should('be.visible');
    mainPage.socialsInstagram().should('be.visible');
    mainPage.socialsLinkedin().should('be.visible');
  });

  it('should find all contact links', () => {
    mainPage.hillelWebsite().should('have.attr', 'href').and('not.be.empty');
    mainPage.hillelMailTo().should('have.attr', 'href').and('not.be.empty');
  });

  it('should allow clicking on buttons', () => {
    mainPage.aboutButton().click();
    cy.get('#aboutSection').should('be.visible');

    mainPage.contactsButton().click();
    cy.get('#contactsSection').should('be.visible');
  });

  it('should open external website when clicking on hillel website link', () => {
    cy.get('a[href="https://ithillel.ua"]').invoke('removeAttr', 'target').click();
    cy.url({ timeout: 10000 }).should('include', 'https://ithillel.ua');
  });

});