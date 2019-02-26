const test = QUnit.test;

function sortFirstName(contacts) {
    return contacts.sort((a, b) => {
        if(a.firstName === b.firstName) {
            return 0;
        }
        if(a.firstName > b.firstName) {
            return 1;
        }
        return -1;
    });
}

const contacts = [
    { firstName: 'Bert', age: 12 },
    { firstName: 'Albert', age: 16 },
    { firstName: 'Zena', age: 14 },
];

test('sort by firstName', assert => {
    //arrange
    const sortField = 'firstName';
    //act
    const sorted = sortFirstName(contacts, sortField);
    //assert
    assert.deepEqual(sorted, [
        { firstName: 'Albert', age: 16 },
        { firstName: 'Bert', age: 12 },
        { firstName: 'Zena', age: 14 }
    ]);
});