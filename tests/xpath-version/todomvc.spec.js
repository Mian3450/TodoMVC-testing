import { browser, have, command } from 'selenidejs'
import { test } from '@jest/globals'
import xpath from '../../support/xPath.js'

test('todo is mark as completed', async () => {
  // GIVEN
  await browser.open('https://todomvc-emberjs-app.autotest.how/')
  await browser.element('//*[@id="new-todo"]').type('a').then(command.pressEnter)
  await browser.element('//*[@id="new-todo"]').type('b').then(command.pressEnter)
  await browser.element('//*[@id="new-todo"]').type('c').then(command.pressEnter)

  // WHEN
  await browser.element(
      `//*[@id="todo-list"]/li[.//text()="b"]//*[${xpath.hasClass('toggle')}]`
  ).click()

  // THEN
  await browser.all(
    `//*[@id="todo-list"]/li[${xpath.hasClass('completed')}]`
  ).should(have.exactTexts('b'))
  await browser.all(
    `//*[@id="todo-list"]/li[not(${xpath.hasClass('completed')})]`
  ).should(have.exactTexts('a', 'c'))
  await browser.all(
    `//*[@id="todo-list"]/li`
  ).should(have.texts('a', 'b', 'c'))
})
