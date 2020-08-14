<template>
    <div id="app">

        <Toolbar/>
        <v-app id="inspire">        
            <Menu/>
        </v-app>
        <Messages/>

    </div>
</template>

<script>
    import Messages from './components/Messages.vue'
    import Menu from './components/Menu.vue'

    import Toolbar from './components/Toolbar.vue'
    export default {
        name: 'App',

        components: {
            Messages,
            Toolbar,
            Menu
        },

        data: () => ({
            //
        }),
    };
</script>
