<template>
    <div>
        <contact v-for="(contact) in directory.contacts"
              v-bind:key="contact.id"
              v-bind:contact="contact"
              v-on:contact-click="onClick(contact)"
              v-on:contact-delete="onDelete(contact)">
        </contact>
    </div>
</template>

<script>
    import Contact from "./Contact";

    export default {
        name: "AllContacts",
        props: ["directory"],
        components: {
            contact: Contact
        },
        methods: {
            onClick: function (contact) {
                this.directory.changeState(contact);
            },
            onDelete: function (contact) {
                this.directory.delete(contact);
            }
        }
    };
</script>