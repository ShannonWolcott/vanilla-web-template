const test = QUnit.test;

function makeContactRow(contact) {
    const html = /*html*/`
        <tr>
            <td>${contact.isActive}</td>
            <td>$${contact.balance.toLocaleString()}</td>
            <td class="center">
                <img src="${contact.picture}">
            </td>
            <td>${contact.firstName}</td>
            <td>${contact.lastName}</td>
            <td class="center">${contact.age}</td>
            <td>${contact.company}</td>
            <td>${contact.email}</td>
            <td>${contact.phone}</td>
            <td>${contact.favoriteFruit}</td>
        </tr>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

QUnit.module('contacts component');

test('makes table row', assert => {

    const contact = {
        _id: '5c75a7b05ef279a15486ff42',
        isActive: true,
        balance: 2559.99,
        picture: 'http://placehold.it/32x32',
        age: 28,
        eyeColor: 'blue',
        firstName: 'Cantu',
        lastName: 'Sullivan',
        company: 'IDETICA',
        email: 'cantu.sullivan@idetica.com',
        phone: '+1 (970) 454-3315',
        favoriteFruit: 'banana'
    };

    const dom = makeContactRow(contact);

    assert.htmlEqual(dom, /*html*/`
        <tr>
            <td>true</td>
            <td>$2,559.99</td>
            <td class="center">
                <img src="http://placehold.it/32x32">
            </td>
            <td>Cantu</td>
            <td>Sullivan</td>
            <td class="center">28</td>
            <td>IDETICA</td>
            <td>cantu.sullivan@idetica.com</td>
            <td>+1 (970) 454-3315</td>
            <td>banana</td>
        </tr>
    `);
});