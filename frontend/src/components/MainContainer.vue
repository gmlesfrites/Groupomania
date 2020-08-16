<template>
    <v-app>
      <v-main>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card class="elevation-12">
                <router-link class="d-flex liens" v-for="routes in links" :key="routes.id" :to="`${routes.components}`">{{routes.text}}</router-link>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
</template>

<script>
export default {
  name: 'MainContainer'
}
</script>