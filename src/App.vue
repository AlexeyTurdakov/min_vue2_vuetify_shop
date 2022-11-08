<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary dark>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            v-for="(link, index) of links"
            :key="index"
            :to="link.url"
          >
            <v-icon>mdi-bug</v-icon>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon @click="toggleDraver"></v-app-bar-nav-icon>

      <v-toolbar-title>Vuetify</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon v-for="(link, index) in links" :key="index" :to="link.url" class="btn-menu hidden-sm-and-down">
        {{ link.title }}
      </v-btn>
    </v-toolbar>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { title: "login", icon: "mdi-bug", url: "/login" },
        { title: "reg", icon: "mdi-bug", url: "/registration" },
        { title: "order", icon: "mdi-bug", url: "/order" },
        { title: "new ad", icon: "mdi-bug", url: "/new" },
        { title: "my ads", icon: "mdi-bug", url: "/list" },
      ],
    };
  },

  methods: {
    toggleDraver() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style lang="css" scoped>
v-toolbar {
  flex: none;
}

.btn-menu {
  margin-right: 40px;
}
</style>
