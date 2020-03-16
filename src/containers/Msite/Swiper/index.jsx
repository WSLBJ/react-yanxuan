import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import { connect } from 'react-redux'
import { getSwiperAsync } from '../../../redux/actions'

@connect(state => ({ swiper: state.swiper }), { getSwiperAsync })
class Swiper extends Component {
  state = {
    data: [],
    swiperStyle: {
      width: '20px',
      height: '2px',
      marginBottom: '10px',
      borderRadius: '0',
      background: '#fff'
    }
  }

  componentDidMount() {
    // 请求轮播图数据
    this.props.getSwiperAsync().then(res => {
      this.setState({
        data: res
      })
    })
  }

  render() {
    const { swiperStyle } = this.state
    return (
      <div>
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
                href="###"
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
      </div>
    )
  }
}

export default Swiper
