import { browser, have, command } from 'selenidejs'
import { test } from '@jest/globals'

test('todo is mark as completed', async () => {
  // GIVEN
  await browser.open('https://todomvc-emberjs-app.autotest.how/')

  await browser.element('//*[contains(@id, "new-todo")]').type('a').then(command.pressEnter)
  await browser.element('//*[contains(@id, "new-todo")]').type('b').then(command.pressEnter)
  await browser.element('//*[contains(@id, "new-todo")]').type('c').then(command.pressEnter)

  await browser.all('//*[contains(concat(" ", @id, " "), " todo-list ")]/li').should(have.exactTexts('a', 'b', 'c'))

  // WHEN
  await browser.element('//*[.="b"]/..//*[contains(concat(" ", normalize-space(@class), " "), " toggle ")]').click()

  // THEN
  await browser.all('//*[contains(@id, "todo-list")]/li[contains(concat(" ", normalize-space(@class), " "), " completed ")]').should(have.exactTexts('b'))
  await browser.all('//*[contains(@id, "todo-list")]/li[not(contains(concat(" ", normalize-space(@class), " "), " completed "))]').should(have.exactTexts('a', 'c'))
  await browser.all('//*[contains(@id, "todo-list")]/li').should(have.texts('a', 'b', 'c'))
})
