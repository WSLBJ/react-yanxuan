import Msite from '../containers/Msite'
import MsiteTab from '../containers/Msite/MsiteTab'
import Category from '../containers/Category'
import WorthBuy from '../containers/WorthBuy'
import Cart from '../containers/Cart'
import Login from '../containers/Login'
import Search from '../containers/Search'
import SearchShopList from '../containers/Search/SearchShopList'
import Personal from '../containers/Personal'
const routes = [
  {
    path: '/msite',
    component: Msite,
    exact: true
  },
  {
    path: '/tab',
    component: MsiteTab,
    exact: true
  },
  {
    path: '/search',
    component: Search,
    exact: true
  },
  {
    path: '/search_list',
    component: SearchShopList,
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
    path: '/login',
    component: Login,
    exact: true
  },
  {
    path: '/personal',
    component: Personal,
    exact: true
  }
]
export default routes
