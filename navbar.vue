<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      
      <v-list-item-group dense v-model="selectedItem">
        <v-list dense>
        
          <template v-for="(item, i) in items">
            <v-list-item
              :key="i"
              :to="{ name: item.name }"
              style="text-decoration: none"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-list-item-group>
    </v-navigation-drawer>
    <v-app-bar clipped-left app color="teal lighten-1" dense dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Employee System</v-toolbar-title>

      <!-- <v-spacer></v-spacer> -->
      <v-spacer></v-spacer>{{view}}
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on"
            ><v-icon >mdi-format-list-text</v-icon>
          </v-btn>
        </template> 
        <!-- <v-list dense>
          <v-subheader>View</v-subheader>
          <v-list-item-group v-model="cIntView">
            <v-list-item v-for="(view, i) in views" :key="i" link>
              <v-list-item-icon>
                <v-icon v-text="view.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-title v-text="view.name"></v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list> -->
        <v-btn-toggle v-model="cIntView" mandatory light dense>
          <v-btn  tile v-for="(view,key) in views" :key="key">
            <v-icon left v-text="view.icon"></v-icon>{{view.name}}
          </v-btn>
        </v-btn-toggle>
      </v-menu>
      <v-btn icon style="color: white" @click="logout()">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      <v-progress-linear
        :active='G_loading'
        :indeterminate='G_loading'
        absolute
        bottom
        color="blue lighten-4"
      ></v-progress-linear>
    </v-app-bar>
    
    <v-main>
      <!-- <router-link :to="{ name: 'home' }">Home</router-link> |
        <router-link :to="{ name: 'hello' }">Hello World</router-link> -->
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      test:null,
      views: [
        {
          name: "Tile",
          icon: "mdi-format-list-text",
        },
        {
          name: "List",
          icon: "mdi-format-list-bulleted-square",
        },
      ],
      // view: 0,
      drawer: null,
      selectedItem: null,
      items: [
        {
          title: "Home",
          name: "home",
          icon: "mdi-home",
        },
        {
          title: "Hello",
          name: "hello",
          icon: "mdi-hand",
        },
        {
          title: "Example",
          name: "example",
          icon: "mdi-vuejs",
        },
        {
          title: "Company",
          name: "company",
          icon: "mdi-office-building",
        },
        {
          title: "Department",
          name: "department",
          icon: "mdi-hubspot",
        },
        {
          title: "Section",
          name: "section",
          icon: "mdi-electric-switch-closed",
        },
        {
          title: "Employee",
          name: "employee",
          icon: "mdi-account-tie-outline",
        },
      ],
    };
  },
  // watch: {
  //   view: function (val) {
  //     this.$store.commit("viewData", {
  //       view: val,
  //     });
  //   },
  // },
  // watch:{
  //   loading (val) {
  //       if (!val) return

  //       setTimeout(() => (this.loading = false), 3000)
  //     },
  // },
  methods: {
    try() {
      alert();
    },
    
    logout() {
      this.$store.commit("initialData", {
        logged: 0,
      });
      location.href = "login";
    },
    // setvuexview() {
    //   this.$store.commit("viewData", {
    //     view: this.view,
    //   });
    // },
  },
  computed: {
    cIntView: {
      get() {
        return this.$store.state.view;
      },
      set(value) {
        this.$store.commit("viewData", {
          view: value,
        });
      },
    },
  },
  // mounted() {
  //   this.view = this.$store.state.view;
  // },
};
</script>
