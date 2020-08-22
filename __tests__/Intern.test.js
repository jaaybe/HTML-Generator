const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern();
    expect(typeof intern).toBe('object');
});

test('Can set name in intern class', () => {
    const intern = new Intern('Dave');
    expect(intern.getName()).toBe('Dave');
});

test('Can set id in intern class', () => {
    const intern = new Intern('Dave', 2);
    expect(intern.getId()).toBe(2);
});

test('Can set email in intern class', () => {
    const intern = new Intern('Dave', 2, 'dave@dave.com');
    expect(intern.getEmail()).toBe('dave@dave.com');
});

test('Can set school username in intern class', () => {
    const intern = new Intern('Dave', 2, 'dave@dave.com', 'USN');
    expect(intern.getSchool()).toBe('USN');
});
