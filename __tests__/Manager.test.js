const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {
    const manager = new Manager();
    expect(typeof manager).toBe('object');
});

test('Can set name in manager class', () => {
    const manager = new Manager('Dave');
    expect(manager.getName()).toBe('Dave');
});

test('Can set id in manager class', () => {
    const manager = new Manager('Dave', 2);
    expect(manager.getId()).toBe(2);
});

test('Can set email in manager class', () => {
    const manager = new Manager('Dave', 2, 'dave@dave.com');
    expect(manager.getEmail()).toBe('dave@dave.com');
});

test('Can set school username in manager class', () => {
    const manager = new Manager('Dave', 2, 'dave@dave.com', '2342342345');
    expect(manager.getOfficeNumber()).toBe('2342342345');
});
