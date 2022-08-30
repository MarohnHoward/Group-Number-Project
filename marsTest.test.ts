import {MarsPage} from './marsPageObject'
const mars = new MarsPage()

test('add to cart', async () => {
    await mars.navigate()
    await mars.setInput(mars.userName, 'standard_user')
    await mars.setInput(mars.password, 'secret_sauce')
    await mars.click(mars.loginBtn)
    await mars.click(mars.bikeLight)
    await mars.click(mars.shoppingCart)
    await mars.click(mars.continueShopping)
    await mars.driver.sleep(4000)
    await mars.driver.quit()
})
