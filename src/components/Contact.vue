<template>
    <div class="directory-contact" v-on:click="onClick" v-bind:class="contact">
        <div class="directory-contact-content">
            <span class="data">{{ contact.name }}: {{ contact.phone }}</span>
        </div>
        <div class="directory-contact-date">
            <span class="month">{{ contact.date.toLocaleString('default', { day: 'numeric'})}}.{{ contact.date.toLocaleString('default', { month: 'numeric'}) }}.{{ contact.date.toLocaleString('default', { year: 'numeric'})}}</span>
        </div>
        <span class="delete-btn" title="delete" v-on:click.stop="onDelete"></span>
    </div>
</template>

<script>
    export default {
        name: "Contact",
        props: ["contact"],
        methods: {
            onClick: function () {
                this.$emit("contact-click");
            },
            onDelete: function () {
                this.$emit("contact-delete");
            }
        }
    };
</script>

<style scoped>

    .directory-contact {
        padding: 15px 10px 15px 10px;
        cursor: pointer;
        border-top: 1px solid #e8e8e8;
        display: flex;
        align-items: center;
    }

    .directory-contact .data {
        text-decoration: none;
    }


    .directory-contact-content {
        flex-grow: 1;
        padding: 0 0px;
        color: #354969;
        text-align: left;
    }

    .directory-contact-date {
        display: flex;
        flex-direction: column;
        text-align: center;
        font-weight: bold;
        padding: 6px 14px;
        border-radius: 6px;
        color: #35495e;
    }

    .directory-contact-date .month {
        font-size: 14px;
    }

    .directory-contact:hover .directory-contact-content {
        color: #4e4e4e;
    }


    .delete-btn {
        display: inline-block;
        width: 26px;
        height: 26px;
        background-image: url(~@/assets/icon-delete-light.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;

        flex-shrink: 0;
    }

    .delete-btn:hover {
        background-image: url(~@/assets/icon-delete.png);
    }


</style>