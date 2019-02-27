export function makeContactRow(contact) {
    const html = /*html*/`
        <tr>
            <td>${contact.isActive ? 'Yes' : 'No'}</td>
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

const contactsList = document.getElementById('contacts-list');

export default function loadContacts(contacts) {
    clearRows();

    contacts.forEach(contact => {
        const dom = makeContactRow(contact);
        contactsList.appendChild(dom);
    });
}
function clearRows() {
    while(contactsList.children.length > 0) {
        contactsList.lastElementChild.remove();
    }
}

