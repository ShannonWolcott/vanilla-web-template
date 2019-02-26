
export default function sortContacts(contacts, sortField, direction) {
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