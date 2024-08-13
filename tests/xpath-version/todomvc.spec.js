import { browser, by, be, have, command } from 'selenidejs'
import { test } from '@jest/globals'

test('todo is mark as completed', async () => {
  // GIVEN
  await browser.open('https://todomvc-emberjs-app.autotest.how/')

  await browser.element('//input[@id="new-todo"]').type('a').then(command.pressEnter)
  await browser.element('//input[@id="new-todo"]').type('b').then(command.pressEnter)
  await browser.element('//input[@id="new-todo"]').type('c').then(command.pressEnter)

  await browser.all('//ul[@id="todo-list"]/li').should(have.exactTexts('a', 'b', 'c'))

  // WHEN
  await browser.element('//ul[@id="todo-list"]/li[2]//input[@class="toggle"]').click()

  // THEN
  await browser.all('//ul[@id="todo-list"]/li[contains(@class, "completed")]').should(have.exactTexts('b'))
  await browser.all('//ul[@id="todo-list"]/li[not(contains(@class, "completed"))]').should(have.exactTexts('a', 'c'))
  await browser.all('//ul[@id="todo-list"]/li').should(have.texts('a', 'b', 'c'))
})
