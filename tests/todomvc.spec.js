import { browser, by, be, have, command } from 'selenidejs'
import { test } from '@jest/globals'

test('todos is mark as completed', async () => {
  await browser.open('https://todomvc-emberjs-app.autotest.how/')

  // WHEN
  await browser.element('#new-todo').type('a').then(command.pressEnter)
  await browser.element('#new-todo').type('b').then(command.pressEnter)
  await browser.element('#new-todo').type('c').then(command.pressEnter)

  await browser.all('#todo-list>li').should(have.exactTexts('a', 'b', 'c'))

  // WHEN
  await browser.element('.todo-list li:nth-of-type(2) .toggle').click()

  await browser.all('#todo-list>li.completed').should(have.exactTexts('b'))
  await browser.all('#todo-list>li:not(.completed)').should(have.exactTexts('a', 'c'))
  await browser.all('#todo-list>li').should(have.texts('a', 'b', 'c'))
});
