const test = QUnit.test;

function sort(contacts, sortField, direction) {
    direction = direction || 1;

    return contacts.sort((a, b) => {
        if(a[sortField] === b[sortField]) {
            return 0;
        }
        if(a[sortField] > b[sortField]) {
            return 1 * direction;
        }
        return -1 * direction;
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

test('sort by firstName descending', assert => {
    //arrange (contacts)
    //act
    const sorted = sort(contacts, 'firstName', -1);
    //assert
    assert.deepEqual(sorted, [
        { firstName: 'Zena', age: 14 },
        { firstName: 'Bert', age: 12 },
        { firstName: 'Albert', age: 16 }
    ]);
});