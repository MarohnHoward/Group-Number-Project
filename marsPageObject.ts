import {BasePage} from './basePage'
import {By} from 'selenium-webdriver'

export class MarsPage extends BasePage {
    userName: By = By.id('user-name')
    password: By = By.id('password')
    loginBtn: By = By.name('login-button')
    bikeLight: By = By.xpath('//button[@id="add-to-cart-sauce-labs-bike-light"]')
    shoppingCart: By = By.css('.shopping_cart_link')
    continueShopping: By = By.id('continue-shopping')
    constructor() {
        super({url: 'https://www.saucedemo.com/inventory.html'})
    }
}