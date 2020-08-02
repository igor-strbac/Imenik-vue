<template>
        <div id="new-contact">
            <input id="contact-name"  type="text" placeholder="insert contact name" v-model="contentName" v-on:keyup.enter="onClick"/>
            <input id="contact-number" onkeypress='return event.charCode > 47 && event.charCode <= 57' type="text" placeholder="insert phone" v-model="contentPhone" v-on:keyup.enter="onClick"/>
            <span id="add-btn" v-on:click="onClick" :disabled="$data.length > 0">Add new contact</span>
        </div>
</template>

<script>
    export default {
        name: "NewContact",
        data: function () {
            return{
                contentName: "",
                contentPhone: ""
            }
        },
        methods:{
            onClick: function () {
                this.$emit("contact-add", this.contentName, this.contentPhone);
                this.contentName = "";
                this.contentPhone = "";
            }
        }
    }
</script>

<style scoped>

    #new-contact{
        margin: auto;
        text-align: center;
        height: 100%;
        width: 500px;
        display: flex;
        flex-flow: column;
        margin-bottom: 30px;
    }
    input {
        padding: 8px;
        background: transparent;
    }

    input:hover {
        color: rgb(58, 58, 58);
    }
    input::placeholder {
        text-align: center;
    }

    #add-btn {
        padding-right: 0px;
        font-weight: bold;
        cursor: pointer;
        color: #35495e;
        margin-top: 20px;
        margin-bottom: 30px;
    }

    #add-btn:hover {
        color: rgb(58, 58, 58);
    }
</style>