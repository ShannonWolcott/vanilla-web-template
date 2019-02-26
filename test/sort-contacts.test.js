const test = QUnit.test;

function sort(contacts, sortField) {
    return contacts.sort((a, b) => {
        if(a[sortField] === b[sortField]) {
            return 0;
        }
        if(a[sortField] > b[sortField]) {
            return 1;
        }
        return -1;
    });
}

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

function sortAge(contacts) {
    return contacts.sort((a, b) => {
        if(a.age === b.age) {
            return 0;
        }
        if(a.age > b.age) {
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
    //arrange (contacts)
    //act
    const sorted = sort(contacts, 'firstName');
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
    const sorted = sort(contacts, 'age');
    //assert
    assert.deepEqual(sorted, [
        { firstName: 'Bert', age: 12 },
        { firstName: 'Zena', age: 14 },
        { firstName: 'Albert', age: 16 }
    ]);
});