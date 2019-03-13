import Vue from 'vue';
import Router from 'vue-router';
import Contact from './../components/Contact.vue';
import Dashboard from './../components/Dashboard.vue'
import Welcome  from '@/components/Welcome';
import Create  from '@/components/Create';
import ContactDetails from '@/components/ContactDetails';
import Trash from '@/components/Trash';
// import Notebooks from '@/components/Notebooks';
// import ProductItem from '@/components/ProductItem';
// import Cart from '@/components/Cart';
// import Welcome from '@/components/Welcome';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      component: Dashboard,
      children: [
        {
          path: '/',
          component: Welcome,
        },
        {
          path:'create',
          component:Create
        },
        {
          path: 'contacts',
          name: 'contacts.all',
          component: Contact,
        },
        {
          path: 'contacts/:name',
          name: 'contacts.details',
          component: ContactDetails,
        },
        {
          path: 'trash',
          name: 'trash',
          component: Trash,
        }
      ],
    },
    
    // {
    //   path: '/smartphones',
    //   name: 'smartphones',
    //   component: Smartphones
    // },
    // {
    //   path: '/notebooks',
    //   name: 'notebooks',
    //   component: Notebooks
    // },
    // {
    //   path: '/productItem',
    //   name: 'productitem',
    //   component: ProductItem
    // },
    // {
    //   path: '/cart',
    //   name: 'cart',
    //   component: Cart
    // },


    // {
    //   path: '*',
    //   name: 'NotFound',
    //   component: NotFound
    // }
  ]
});
