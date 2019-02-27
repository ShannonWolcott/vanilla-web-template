import sortContacts from '../src/sort-contacts.js';
const test = QUnit.test;

QUnit.module('sort contacts');

const contacts = [
    { firstName: 'Bert', age: 12 },
    { firstName: 'Albert', age: 16 },
    { firstName: 'Zena', age: 14 },
];

test('sort by firstName', assert => {
    //arrange (contacts)
    //act
    const sorted = sortContacts(contacts, 'firstName');
    //assert
    assert.deepEqual(sorted, [
        { firstName: 'Albert', age: 16 },
        { firstName: 'Bert', age: 12 },
        { firstName: 'Zena', age: 14 }
    ]);
});

test('sort by age', assert => {
    //arrange (contacts)
    //act
    const sorted = sortContacts(contacts, 'age');
    //assert
    assert.deepEqual(sorted, [
        { firstName: 'Bert', age: 12 },
        { firstName: 'Zena', age: 14 },
        { firstName: 'Albert', age: 16 }
    ]);
});

test('sort by firstName descending', assert => {
    //arrange (contacts)
    //act
    const sorted = sortContacts(contacts, 'firstName', -1);
    //assert
    assert.deepEqual(sorted, [
        { firstName: 'Zena', age: 14 },
        { firstName: 'Bert', age: 12 },
        { firstName: 'Albert', age: 16 }
    ]);
});