import Msite from '../components/Msite'
import Category from '../components/Category'
import WorthBuy from '../components/WorthBuy'
import Cart from '../components/Cart'
import Personal from '../components/Personal'
const routes = [
  {
    path: '/msite',
    component: Msite,
    exact: true
  },
  {
    path: '/category',
    component: Category,
    exact: true
  },
  {
    path: '/worthbuy',
    component: WorthBuy,
    exact: true
  },
  {
    path: '/cart',
    component: Cart,
    exact: true
  },
  {
    path: '/personal',
    component: Personal,
    exact: true
  }
]
export default routes
