<template>
   <v-app>
      <div>
         <navbar-app v-if="sesh == 1"></navbar-app>
         <login-app v-else></login-app>
      </div>
   </v-app>
</template>
<script>

import NavbarApp from '../components/NavbarComponent'
import LoginApp from '../components/LoginComponent'
    export default {
       components:{NavbarApp,LoginApp},
       data(){
          return{
             sesh:null
          }
       },
       created(){
          this.sesh = this.$store.state.logged_in
       }
    }
</script>