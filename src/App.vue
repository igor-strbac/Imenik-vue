<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <new-contact v-on:contact-add="contactAdd"></new-contact>
        <phone-directory v-bind:directory="directory"></phone-directory>
    </div>
</template>

<script>
    import NewContact from "./components/NewContact";
    import PhoneDirectory from "./components/PhoneDirectory";
    import Directory from "./model/Directory";
    import DirectoryItem from "./model/DirectoryItem";

    export default {
        name: 'App',
        components: {
            "new-contact": NewContact,
            "phone-directory": PhoneDirectory
        },
        data: function () {
            return{
                currentRoute: window.location.pathname,
                directory: new Directory(),
            }
        },
        methods:{
            contactAdd: function (contentName, contentPhone) {
                let contact = new DirectoryItem(contentName, contentPhone, new Date())
                this.directory.add(contact);
            }
        }
    }
</script>


<style>
    body {
        background: radial-gradient(circle, rgba(174,238,191,1) 0%, rgba(64,73,78,1) 49%);
        height: 100vh;
        margin: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        
    }

    #app {
        text-align: center;
        margin-top: 60px;
    }
</style>