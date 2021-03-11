import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from './components/HomeComponent'
import Hello from './components/HelloComponent'
import Example from './components/ExampleComponent'
import Login from './components/LoginComponent'
import Company from './components/CompanyComponent'
import Department from './components/DepartmentComponent'
import Section from './components/SectionComponent'
import Employee from './components/EmployeeComponent'
import store from './store'

export default new VueRouter({
    mode: 'history',
  
    routes: [{

        
            path: '/home',
            name: 'home',
            component: Home,
            beforeEnter(to, from, next) {
                store.state.logged_in === 1 ? next() : next('/login')
            }
        },
        // {
        //     path: '/',
        //     name: 'home',
        //     component: Home,
        //     beforeEnter(to, from, next) {
        //         store.state.logged_in === 1 ? next() : next('/login')
        //     }
        // },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
            beforeEnter(to, from, next) {
                store.state.logged_in === 1 ? next() : next('/login')
            }
        },
        {
            path: '/example',
            name: 'example',
            component: Example,
            beforeEnter(to, from, next) {
                store.state.logged_in === 1 ? next() : next('/login')
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            beforeEnter(to, from, next) {
                store.state.logged_in === 1 ? next('/home') : next('')
            }
        },
        {
            path: '/company',
            name: 'company',
            component: Company,
            beforeEnter(to, from, next) {
                store.state.logged_in === 1 ? next() : next('/login')
            }
        },
        {
            path: '/department',
            name: 'department',
            component: Department,
            beforeEnter(to, from, next) {
                store.state.logged_in === 1 ? next() : next('/login')
            }
        },
        {
            path: '/section',
            name: 'section',
            component: Section,
            beforeEnter(to, from, next) {
                store.state.logged_in === 1 ? next() : next('/login')
            }
        },
        {
            path: '/employee',
            name: 'employee',
            component: Employee,
            beforeEnter(to, from, next) {
                store.state.logged_in === 1 ? next() : next('/login')
            }
        },
        
    ]
});
