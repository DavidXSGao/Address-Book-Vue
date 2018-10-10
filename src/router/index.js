import Vue from 'vue'
import Router from 'vue-router'
import ListContacts from '@/components/ListContacts'
import AddContacts from '@/components/AddContacts'
import Help from '@/components/Help'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/list'
    },
    {
      path: '/list',
      name: 'ui.contact-list',
      component: ListContacts
    },
    {
      path: '/add',
      name: 'ui.add-contact',
      component: AddContacts
    },
    {
      path: '/edit',
      name: 'ui.edit-contact',
      component: AddContacts,
      props: (route) => (
        {
          query: route.query.id
        }
      )
    },
    {
      path: '/help',
      name: 'ui.help',
      component: Help
    }
  ]
})

export default router
