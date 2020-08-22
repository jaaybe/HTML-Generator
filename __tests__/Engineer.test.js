const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer();
    expect(typeof engineer).toBe('object');
});

test('Can set name in engineer class', () => {
    const engineer = new Engineer('Dave');
    expect(engineer.getName()).toBe('Dave');
});

test('Can set id in engineer class', () => {
    const engineer = new Engineer('Dave', 2);
    expect(engineer.getId()).toBe(2);
});

test('Can set email in engineer class', () => {
    const engineer = new Engineer('Dave', 2, 'dave@dave.com');
    expect(engineer.getEmail()).toBe('dave@dave.com');
});

test('Can set github username in engineer class', () => {
    const engineer = new Engineer('Dave', 2, 'dave@dave.com', 'jaaybe');
    expect(engineer.getGithub()).toBe('jaaybe');
});
