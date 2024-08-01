import { browser, by, be, have, command } from 'selenidejs';
import { test } from '@jest/globals';

test('should successfully mark as completed b todo in the list', async () => {
  await browser.open('https://todomvc-emberjs-app.autotest.how/')
    
  await browser.element('#new-todo').type('a').then(command.pressEnter)
  await browser.element('#new-todo').type('b').then(command.pressEnter)
  await browser.element('#new-todo').type('c').then(command.pressEnter)

  await browser.all('#todo-list>li').should(have.exactTexts('a', 'b', 'c'))

  await browser.element('#todo-list>li:nth-child(2).toggle').click()

  await browser.all('#todo-list>li.completed').should(have.exactTexts('b'))
  await browser.all('#todo-list>li:not(.completed)').should(have.exactTexts('a', 'c'))
  await browser.all('#todo-list>li').should(have.exactTexts('a', 'c'))
  await browser.all('#todo-list>li').should(have.size(3))
});
