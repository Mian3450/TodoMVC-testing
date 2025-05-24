import { browser, have, command } from 'selenidejs'
import { test } from '@jest/globals'
import { x, its } from '../../lib/xpath.js'

test('todo is mark as completed', async () => {
  // GIVEN
  await browser.open('https://todomvc-emberjs-app.autotest.how/')
  await browser.element(x.all().by(its.id('new-todo')).x).type('a').then(command.pressEnter)
  await browser.element(x.all().by(its.id('new-todo')).x).type('b').then(command.pressEnter)
  await browser.element(x.all().by(its.id('new-todo')).x).type('c').then(command.pressEnter)

  // WHEN
  await browser.element(
    x.all()
      .by(its.id('todo-list'))
      .child('li')
      .by(its.descendantWithText('b'))
      .descendant()
      .by(its.cssClass('toggle'))
      .x
  ).click()

  // THEN
  await browser.all(
    x.all()
      .by(its.id('todo-list'))
      .child('li')
      .by(its.cssClass('completed'))
      .x
  ).should(have.exactTexts('b'))

  await browser.all(
    x.all()
      .by(its.id('todo-list'))
      .child('li')
      .by(`not(${its.cssClass('completed')})`)
      .x
  ).should(have.exactTexts('a', 'c'))

  await browser.all(
    x.all()
      .by(its.id('todo-list'))
      .child('li')
      .x
  ).should(have.texts('a', 'b', 'c'))
})
