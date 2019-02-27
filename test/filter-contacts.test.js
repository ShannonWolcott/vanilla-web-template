const test = QUnit.test;

QUnit.module('filter contacts');

function filterContacts(contacts, filterChoices) {
    return contacts.filter(contact => {
        const hasName = !filterChoices.name 
            || contact.firstName.includes(filterChoices.name)
            || contact.lastName.includes(filterChoices.name);

        return hasName;
    });
}

const contacts = [
    { firstName: 'dennis', lastName: 'smith' },
    { firstName: 'joe', lastName: 'buster' },
    { firstName: 'jenny', lastName: 'johns' },
];

test('filters if contact name contains filter name', assert => {
    //arrange
    const filter = { name: 'jo' };

    //act
    const filtered = filterContacts(contacts, filter);

    //assert
    assert.deepEqual(filtered, [
        { firstName: 'joe', lastName: 'buster' },
        { firstName: 'jenny', lastName: 'johns' },
    ]);
});