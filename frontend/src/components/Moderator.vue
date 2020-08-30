<template>
	<v-row>
		<v-spacer></v-spacer>
    <v-card color="rgb(209,81,90)" width="50%" class="mr-6 mb-10">
      <v-card-title  id="Moderator">
        <span class="headline">Modération</span>
          <v-spacer></v-spacer>

          <v-menu bottom left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <!-- <v-icon>mdi-dots-vertical</v-icon> -->
              </v-btn>
            </template>
          </v-menu>
        </v-card-title>
      </v-card>
  </v-row>
</template>

<script>
  export default {
		name: 'Moderator',
		data: () => ({
			show: false
		}),
    methods: {

		}
	}
</script>