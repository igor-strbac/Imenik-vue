<template>
    <div id="phone-directory">
        <div id="all-contacts" class="contacts-container">
            <div id="all-contacts-container">
                <span class="no-contacts">No Contacts</span>
                <all-contacts v-bind:directory="directory"></all-contacts>
            </div>
        </div>
    </div>
</template>

<script>

    import AllContacts from "./AllContacts"

    export default {
        name: "PhoneDirectory",
        components: {
            "all-contacts": AllContacts
        },
        props: ["directory"]
    }
</script>

<style scoped>
    #phone-directory {
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        width: 500px;
        margin: auto;
    }

    .contacts-container {
        width: 100%;
        flex-shrink: 0;

        display: flex;
        flex-direction: column;

        overflow: auto;
    }

    .contacts-container .no-contacts {
        display: none;
        margin: auto;

    }

    .no-contacts:only-child {
        display: block;
    }
    #all-contacts-container{
        display: flex;
        flex-direction: column;
        height: 100%;
    }
</style>