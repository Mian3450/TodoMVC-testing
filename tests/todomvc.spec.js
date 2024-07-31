import { browser, by, be, have, command } from 'selenidejs';
import { test } from '@jest/globals';

test('elements a, b, c should be added to list, and b should be completed', async () => {
    await browser.open('https://todomvc-emberjs-app.autotest.how/');
    
    await browser.element('#new-todo').type('a').then(command.pressEnter);
    await browser.element('#new-todo').type('b').then(command.pressEnter);
    await browser.element('#new-todo').type('c').then(command.pressEnter);

    await browser.all('#todo-list>li').should(have.exactTexts('a', 'b', 'c'));

    await browser.all('#todo-list>li').elementBy(have.exactText('b'))
        .element('.toggle').click();

    await browser.all('#todo-list>li').by(have.cssClass('completed'))
        .should(have.exactTexts('b'));
    await browser.all('#todo-list>li').by(have.no.cssClass('completed'))
        .should(have.exactTexts('a', 'c'));
});
