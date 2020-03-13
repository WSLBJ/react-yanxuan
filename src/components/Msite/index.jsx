import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import './index.less'
export default class Msite extends Component {
  state = {
    data: [
      'https://yanxuan.nosdn.127.net/48a141f02960a75d530e96f4f5b72b1b.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/238927bfa50b2134befd69793f93fe9a.png?type=webp&imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/31e77563da87061c9225cc5c7501ff24.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/82a579259e2e59d443bc79603230f78f.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/1c7a4c411a418792722defad273aa4fa.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/42ad3b25dedc0ed434f1b7974b4c8ae3.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/5e484932551b627226bf2df1988e1068.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/1112afbd8d735330627fb53842ebd810.jpg?type=webp&imageView&quality=75&thumbnail=750x0'
    ],
    swiperStyle: {
      width: '20px',
      height: '2px',
      marginBottom: '10px',
      borderRadius: '0',
      background: '#fff'
    }
  }
  componentDidMount() {
    setTimeout(() => {}, 100)
  }
  render() {
    const { swiperStyle } = this.state
    return (
      <div className="msite_container">
        {/* 轮播图 */}
        <div className="swiper_container">
          <Carousel
            autoplay={false}
            infinite
            dotStyle={{ ...swiperStyle, opacity: 0.4 }}
            dotActiveStyle={swiperStyle}
          >
            {this.state.data.map(val => (
              <a
                key={val}
                href="/"
                style={{
                  display: 'inline-block',
                  width: '100%',
                  height: '100%'
                }}
              >
                <img
                  src={val}
                  alt=""
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    verticalAlign: 'top'
                  }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'))
                  }}
                />
              </a>
            ))}
          </Carousel>
        </div>

        {/* <!-- 轮播图下边小广告 --> */}
        <div className="advertising_bar">
          <ul className="advertising_bar_list">
            <li className="advertising_bar_item">
              <i className="advertising_bar_icon icon1"></i>
              <span className="advertising_bar_title">网易品牌自营</span>
            </li>
            <li className="advertising_bar_item">
              <i className="advertising_bar_icon icon2"></i>
              <span className="advertising_bar_title">30天无忧退货</span>
            </li>
            <li className="advertising_bar_item">
              <i className="advertising_bar_icon icon3"></i>
              <span className="advertising_bar_title">48小时快速退款</span>
            </li>
          </ul>
        </div>

        {/* 商品分类 --请求数据时再写 */}

        {/* <!-- 新人专享礼 --> */}
        <div className="new_user_gift">
          <h2 className="new_user_gift_title">
            <span>-</span>
            <p>新人专享礼</p>
            <span>-</span>
          </h2>
          <div className="new_user_gift_container">
            <div className="new_user_giftBag">
              <p>新人专享礼包</p>
              <img src={require('./images/newUserGiftBag.png')} alt="" />
            </div>
            <div className="welfare_association">
              <span className="welfare_association_title">福利社</span>
              <span className="today_special_price">今日特价</span>
              <img src={require('./images/tejia.webp')} alt="" />
              <div className="welfare_association_price">
                <span className="discounts_price">￥58</span>
                <span className="usually_price">￥68</span>
              </div>
            </div>
            <div className="new_user_spell_group">
              <span className="spell_team">新人拼团</span>
              <span className="free_mail">1元起包邮</span>
            </div>
          </div>
        </div>

        {/* <!-- 类目热销榜 --> */}
        <div className="hot_categories">
          <h2 className="hot_categories_title">类目热销榜</h2>
          <div className="hot_categories_container">
            <div className="hot_categories_name">
              <img
                src={require('./images/hot_categories/hot_categories.webp')}
                alt=""
              />
              <h3>热销榜</h3>
              <span></span>
            </div>
            <div className="good_commment_name">
              <img
                src={require('./images/hot_categories/high_praise.webp')}
                alt=""
              />
              <h3>好评榜</h3>
              <span></span>
            </div>
            <div className="hot_categories_item">
              <span>居家生活榜</span>
              <img src={require('./images/hot_categories/1.webp')} alt="" />
            </div>
            <div className="hot_categories_item">
              <span>美食酒水榜</span>
              <img src={require('./images/hot_categories/2.webp')} alt="" />
            </div>
            <div className="hot_categories_item">
              <span>个护清洁榜</span>
              <img src={require('./images/hot_categories/3.webp')} alt="" />
            </div>
            <div className="hot_categories_item">
              <span>服饰鞋包榜</span>
              <img src={require('./images/hot_categories/4.webp')} alt="" />
            </div>
            <div className="hot_categories_item">
              <span>数码家电榜</span>
              <img src={require('./images/hot_categories/5.webp')} alt="" />
            </div>
            <div className="hot_categories_item">
              <span>全球特色榜</span>
              <img src={require('./images/hot_categories/6.webp')} alt="" />
            </div>
            <div className="hot_categories_item">
              <span>母婴亲子榜</span>
              <img src={require('./images/hot_categories/7.webp')} alt="" />
            </div>
            <div className="hot_categories_item">
              <span>运动旅行榜</span>
              <img src={require('./images/hot_categories/8.webp')} alt="" />
            </div>
          </div>
        </div>

        {/* <!-- 限时购 --> */}
        <div className="time_limit_buy">
          <div className="time_limit_buy_title">
            <div className="time_limit_buy_title_left">
              <h2>限时购</h2>
              <div className="time">
                <span className="hours">00</span>
                <span className="colon">:</span>
                <span className="minutes">00</span>
                <span className="colon">:</span>
                <span className="seconds">00</span>
              </div>
            </div>
            <div className="time_limit_buy_title_right">
              <span className="more">更多</span>
            </div>
          </div>
          <div className="time_limit_buy_container">
            <div className="time_limit_buy_item">
              <div className="img_container">
                <img src={require('./images/time_limit_buy/1.webp')} alt="" />
              </div>
              <div className="price">
                <span className="discounts_price">&yen;62</span>
                <span className="ordinarily_price">&yen;69</span>
              </div>
            </div>
            <div className="time_limit_buy_item">
              <div className="img_container">
                <img src={require('./images/time_limit_buy/2.webp')} alt="" />
              </div>
              <div className="price">
                <span className="discounts_price">&yen;62</span>
                <span className="ordinarily_price">&yen;69</span>
              </div>
            </div>
            <div className="time_limit_buy_item">
              <div className="img_container">
                <img src={require('./images/time_limit_buy/3.webp')} alt="" />
              </div>
              <div className="price">
                <span className="discounts_price">&yen;62</span>
                <span className="ordinarily_price">&yen;69</span>
              </div>
            </div>
            <div className="time_limit_buy_item">
              <div className="img_container">
                <img src={require('./images/time_limit_buy/4.webp')} alt="" />
              </div>
              <div className="price">
                <span className="discounts_price">&yen;62</span>
                <span className="ordinarily_price">&yen;69</span>
              </div>
            </div>
            <div className="time_limit_buy_item">
              <div className="img_container">
                <img src={require('./images/time_limit_buy/5.webp')} alt="" />
              </div>
              <div className="price">
                <span className="discounts_price">&yen;62</span>
                <span className="ordinarily_price">&yen;69</span>
              </div>
            </div>
            <div className="time_limit_buy_item">
              <div className="img_container">
                <img src={require('./images/time_limit_buy/6.webp')} alt="" />
              </div>
              <div className="price">
                <span className="discounts_price">&yen;62</span>
                <span className="ordinarily_price">&yen;69</span>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- 新品首发 --> */}
        <div className="new_product">
          <div className="new_product_title">
            <h2>新品首发</h2>
            <span className="more">更多</span>
          </div>
          <div className="new_product_container">
            <div className="new_product_item">
              <div className="img_container">
                <img src={require('./images/new_product/1.webp')} alt="" />
              </div>
              <span className="product_des">
                复工装备随身防护,日本空气净化除菌卡
              </span>
              <span className="product_price">&yen;79</span>
              <span className="product_dis">满99减10</span>
            </div>
            <div className="new_product_item">
              <div className="img_container">
                <img src={require('./images/new_product/2.webp')} alt="" />
              </div>
              <span className="product_des">
                复工装备随身防护 日本空气净化除菌卡
              </span>
              <span className="product_price">&yen;79</span>
              <span className="product_dis">满99减10</span>
            </div>
            <div className="new_product_item">
              <div className="img_container">
                <img src={require('./images/new_product/3.webp')} alt="" />
              </div>
              <span className="product_des">
                复工装备随身防护 日本空气净化除菌卡
              </span>
              <span className="product_price">&yen;79</span>
              <span className="product_dis">满99减10</span>
            </div>
            <div className="new_product_item">
              <div className="img_container">
                <img src={require('./images/new_product/4.webp')} alt="" />
              </div>
              <span className="product_des">
                复工装备随身防护 日本空气净化除菌卡
              </span>
              <span className="product_price">&yen;79</span>
              <span className="product_dis">满99减10</span>
            </div>
            <div className="new_product_item">
              <div className="img_container">
                <img src={require('./images/new_product/5.webp')} alt="" />
              </div>
              <span className="product_des">
                复工装备随身防护 日本空气净化除菌卡
              </span>
              <span className="product_price">&yen;79</span>
              <span className="product_dis">满99减10</span>
            </div>
            <div className="new_product_item">
              <div className="img_container">
                <img src={require('./images/new_product/6.webp')} alt="" />
              </div>
              <span className="product_des">
                复工装备随身防护 日本空气净化除菌卡
              </span>
              <span className="product_price">&yen;79</span>
              <span className="product_dis">满99减10</span>
            </div>
          </div>
        </div>

        {/* <!-- 底部推荐 --> */}
        <div className="shop_recommend">
          <div className="shop_recommend_container">
            <h3 className="shop_recommend_title">断货补单王</h3>
            <span className="shop_recommend_tip">补仓疯抢中</span>
            <div className="img_container">
              <img src={require('./images/shop_recommend/1.webp')} alt="" />
              <img src={require('./images/shop_recommend/2.webp')} alt="" />
            </div>
          </div>
          <div className="shop_recommend_container">
            <h3 className="shop_recommend_title">断货补单王</h3>
            <span className="shop_recommend_tip">补仓疯抢中</span>
            <div className="img_container">
              <img src={require('./images/shop_recommend/3.webp')} alt="" />
              <img src={require('./images/shop_recommend/4.webp')} alt="" />
            </div>
          </div>
          <div className="shop_recommend_container">
            <h3 className="shop_recommend_title">断货补单王</h3>
            <span className="shop_recommend_tip">补仓疯抢中</span>
            <div className="img_container">
              <img src={require('./images/shop_recommend/5.webp')} alt="" />
              <img src={require('./images/shop_recommend/6.webp')} alt="" />
            </div>
          </div>
          <div className="shop_recommend_container">
            <h3 className="shop_recommend_title">断货补单王</h3>
            <span className="shop_recommend_tip">补仓疯抢中</span>
            <div className="img_container">
              <img src={require('./images/shop_recommend/7.webp')} alt="" />
              <img src={require('./images/shop_recommend/8.webp')} alt="" />
            </div>
          </div>
        </div>

        {/* <!-- 底部 --> */}
        <footer className="footer">
          <div className="footer_container">
            <div className="footer_link_container">
              <div className="footer_link_app">下载App</div>
              <div className="footer_link_pc">电脑版</div>
            </div>
            <div className="footer_company_info">
              网易公司版权所有 © 1997-2020
            </div>
            <div className="footer_company_license">
              食品经营许可证：JY13301080111719
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
