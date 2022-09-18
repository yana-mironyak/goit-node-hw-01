const { v4 } = require('uuid');
const fs = require('fs/promises');
const listContacts = require('./listContacts');

const contactsPath = require('./contactsPath');

const addContact = async(name, email, phone) => {
    const contacts = await listContacts();
    const newContact = { id: v4(), name, email, phone };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return newContact;
}

module.exports = addContact;