const listContacts = require('./listContacts');
const fs = require('fs/promises');

const contactsPath = require('./contactsPath');

const removeContact = async(id) => {
    const contacts = await listContacts();
    const idx = contacts.findIndex(item => item.id === id);
    if (idx === -1) {
        return null;
    }
    const [removeContact] = contacts.splice(idx, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return removeContact;
}

module.exports = removeContact;