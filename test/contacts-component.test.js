import { makeContactRow } from '../src/contacts-component.js';
const test = QUnit.test;

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