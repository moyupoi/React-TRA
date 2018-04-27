import React, { Component } from 'react'
import { isEmpty, isUndefined } from 'lodash/fp'
import addEventListener from 'rc-util/lib/Dom/addEventListener'
import Scroll from 'react-scroll'
var scroll = Scroll.animateScroll

import s from '../assets/CityOffers.scss'
import logo from '../assets/logo.png'
import traBanner from '../assets/traBanner.jpg'

class CityOffers extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {}
  }

  componentDidMount () {
    const { fetchOkexesTicker, setTitle, params } = this.props
    setTitle('Travel')
    fetchOkexesTicker()
    switch (params.id) {
      case 'Italy':
        scroll.scrollTo(1150)
        break
      case 'France':
        scroll.scrollTo(1580)
        break
      case 'Spain':
        scroll.scrollTo(1990)
        break
      case 'Britain':
        scroll.scrollTo(2400)
        break
      case 'Australia':
        scroll.scrollTo(2850)
        break
      case 'Thailand':
        scroll.scrollTo(3260)
        break
      case 'Japan':
        scroll.scrollTo(4520)
        break
      default:
    }
  }

  render () {
    const { cityOffers } = this.props
    const { okex } = cityOffers
    let cityData = [
      {
        cityName: '美国',
        cityNameEn: 'USA',
        offer: [{
          id: '620310',
          img: 'http://simg1.zhubaijia.com/oi/1494427690/jDBUsFkeeGfiAeaNZZ3qjSsYrhNiFFEX.jpg-oixxl',
          name: '洛杉矶近好莱坞露天剧场迷人7卧别墅',
          city: '美国，洛杉矶',
          price: '5786'
        }, {
          id: '633923',
          img: 'http://simg1.zhubaijia.com/oi/1505985188/157bdb7c9ead11e795cc00163e000735.jpg-oixxl',
          name: '波士顿近海德广场4卧公寓',
          city: '美国，波士顿',
          price: '1680'
        }, {
          id: '623440',
          img: 'http://simg1.zhubaijia.com/oi/1486543164/17fa1e56edda11e6ba2300163e000735.jpg-oixxl',
          name: '纽约近东村雅致两卧公寓',
          city: '美国，纽约',
          price: '3304'
        }, {
          id: '627255',
          img: 'http://simg1.zhubaijia.com/oi/1491643058/35b3f6021c3c11e7927a00163e000735.jpg-oixxl',
          name: '芝加哥市中心温馨3卧独栋房屋',
          city: '美国，芝加哥',
          price: '2496'
        }, {
          id: '50845',
          img: 'http://simg1.zhubaijia.com/oi/1450492723/9f10fce0a5f911e5866d00163e000735.jpg-oixxl',
          name: '旧金山宽敞舒适1卧公寓',
          city: '美国，旧金山',
          price: '1260'
        }, {
          id: '633922',
          img: 'http://simg1.zhubaijia.com/oi/1505984511/XCTqmdfJPUdV1nzgNFcM2xEDcMdMkqRS.jpg-oixxl',
          name: '夏威夷Loft风格两卧公寓',
          city: '美国，夏威夷',
          price: '2508'
        }, {
          id: '600758',
          img: 'http://simg1.zhubaijia.com/oi/1472730016/fXDuFCHgiynLCFxcapJUf7eHB9XvdQBs.jpg-oixxl',
          name: '棕榈泉典雅复古10卧独栋',
          city: '美国，棕榈泉',
          price: '1566'
        }, {
          id: '17632',
          img: 'http://simg1.zhubaijia.com/oi/1503997739/b1d86ca48c9911e7a4df00163e000735.jpg-oixxl',
          name: '洛杉矶好莱坞宽敞1卧公寓',
          city: '美国，洛杉矶',
          price: '535'
        }]
      },
      {
        cityName: '意大利',
        cityNameEn: 'Italy',
        offer: [{
          id: '628681',
          img: 'http://simg1.zhubaijia.com/oi/1492525313/5ebf522c244211e7bcf200163e000735.jpg-oixxl',
          name: '米兰市中心雅致3卧公寓',
          city: '意大利，米兰',
          price: '6118'
        }, {
          id: '629101',
          img: 'http://simg1.zhubaijia.com/oi/1492536858/3ffce3ac245d11e7b8af00163e000735.jpg-oixxl',
          name: '威尼斯近大运河明亮舒适两卧公寓',
          city: '意大利，威尼斯',
          price: '2305'
        }, {
          id: '629155',
          img: 'http://simg1.zhubaijia.com/oi/1492537335/5c37dcd8245e11e787b400163e000735.jpg-oixxl',
          name: '佛罗伦萨设计师装修两卧公寓',
          city: '意大利，佛罗伦萨',
          price: '1234'
        }, {
          id: '608179',
          img: 'http://simg1.zhubaijia.com/oi/1477297780/UjAgR2aNRsPs7fEKW8CBb93bkbrFqdAT.jpg-oixxl',
          name: '罗马近卡拉卡拉浴场摩登两卧公寓',
          city: '意大利，罗马',
          price: '1147'
        }]
      },
      {
        cityName: '法国',
        cityNameEn: 'France',
        offer: [{
          id: '627922',
          img: 'http://simg1.zhubaijia.com/oi/1492231011/2557c79e219511e7b2b000163e000735.jpg-oixxl',
          name: '巴黎温馨舒适1卧公寓',
          city: '法国，巴黎',
          price: '1623'
        }, {
          id: '627868',
          img: 'http://simg1.zhubaijia.com/oi/1492230320/897e31f6219311e7813d00163e000735.jpg-oixxl',
          name: '巴黎近巴黎市政厅优雅1卧公寓',
          city: '法国，巴黎',
          price: '1315'
        }, {
          id: '627846',
          img: 'http://simg1.zhubaijia.com/oi/1492182071/en9XMdKS4m85P4QpxqbKhYNruCS2UUgY.jpg-oixxl',
          name: '尼斯近马塞纳广场明亮宽敞豪华1卧公寓',
          city: '法国，尼斯',
          price: '654'
        }, {
          id: '628050',
          img: 'http://simg1.zhubaijia.com/oi/1492391497/rbL9GHCwqFkn9aCqPV2atRJaYbnzw1L6.jpg-oixxl',
          name: '戛纳现代豪华1卧公寓',
          city: '法国，戛纳',
          price: '414'
        }]
      },
      {
        cityName: '西班牙',
        cityNameEn: 'Spain',
        offer: [{
          id: '29672',
          img: 'http://simg1.zhubaijia.com/oi/1480391185/66a745beb5e611e6bc6900163e000735.jpg-oixxl',
          name: '巴塞罗那复古浪漫3卧公寓',
          city: '西班牙,巴塞罗那',
          price: '1530'
        }, {
          id: '76349',
          img: 'http://simg1.zhubaijia.com/oi/1464750814/d344dd8627a611e686eb00163e000735.jpg-oixxl',
          name: '巴塞罗那现代舒适两卧公寓',
          city: '西班牙，巴塞罗那',
          price: '1052'
        }, {
          id: '664976',
          img: 'http://simg1.zhubaijia.com/oi/1516266276/9b4fce0afc2e11e7acee00163e000735.jpg-oixxl',
          name: '马德里近市中心舒适4卧公寓',
          city: '西班牙，马德里',
          price: '2880'
        }, {
          id: '24190',
          img: 'http://simg1.zhubaijia.com/uploads/offer_image/image/24190/538769/PORTRAIT-362-62d3c8dd0694a9a76eecb8dbcc0de2faedb57f0c3ea7eeff0fd97b66a7ae3760.jpg-oixxl',
          name: '西班牙马德里peck时尚单间公寓',
          city: '西班牙，马德里',
          price: '934'
        }]
      },
      {
        cityName: '英国',
        cityNameEn: 'Britain',
        offer: [{
          id: '591292',
          img: 'http://simg1.zhubaijia.com/oi/1469667994/YevjAyKXLLUPxk2fPmHqzqPWzHR8wC3J.jpg-oixxl',
          name: '牛津近布鲁克斯大学华丽2卧公寓',
          city: '英国，牛津',
          price: '626'
        }, {
          id: '591601',
          img: 'http://simg1.zhubaijia.com/oi/1469727714/NV6pKUhkxCijsdr5XQBBw3ckBr7dMU4F.jpg-oixxl',
          name: '牛津优雅文艺1卧公寓',
          city: '英国，牛津',
          price: '679'
        }, {
          id: '605026',
          img: 'http://simg1.zhubaijia.com/oi/1474905819/chwsufjbKsiJQGwRobH6bSsmXpE76S9w.jpg-oixxl',
          name: '北约克郡奢华大气3卧独栋',
          city: '英国，北约克郡',
          price: '3449'
        }, {
          id: '18504',
          img: 'http://simg1.zhubaijia.com/oi/1512545957/9093b60eda5811e79b3d00163e000735.jpg-oixxl',
          name: '伦敦现代简约1卧公寓',
          city: '英国，伦敦',
          price: '1535'
        }]
      },
      {
        cityName: '澳大利亚',
        cityNameEn: 'Australia',
        offer: [{
          id: '22176',
          img: 'http://simg1.zhubaijia.com/uploads/offer_image/image/22176/501752/933a7dbbba0fed9ec8009f7bf4dcba.jpg-oixxl',
          name: '墨尔本交通便利舒适温馨1卧公寓',
          city: '澳大利亚，墨尔本',
          price: '740'
        }, {
          id: '630861',
          img: 'http://simg1.zhubaijia.com/oi/1494923376/cb8fb81c3a1111e7a7af00163e000735.jpg-oixxl',
          name: '悉尼近悉尼大学简约时尚舒适1卧公寓',
          city: '澳大利亚，悉尼',
          price: '662'
        }, {
          id: '663261',
          img: 'http://simg1.zhubaijia.com/oi/1510744472/exUrQazdpM2azscgzQAPRpVp7VT3DA2S.jpg-oixxl',
          name: '黄金海岸近冲浪者天堂精致舒适两卧公寓',
          city: '澳大利亚，黄金海岸',
          price: '904'
        }, {
          id: '52882',
          img: 'http://simg1.zhubaijia.com/oi/1450703801/ayLpn5fnKA9Eud5UoetS3yr7hesXwhcL.jpg-oixxl',
          name: '凯恩斯精美舒适2房别墅',
          city: '澳大利亚，道格拉斯港',
          price: '2187'
        }]
      },
      {
        cityName: '泰国',
        cityNameEn: 'Thailand',
        offer: [{
          id: '626360',
          img: 'http://simg1.zhubaijia.com/oi/1490524934/dfb790c2121011e7bf0a00163e000735.jpg-oixxl',
          name: '清迈近清迈大学华丽精美1卧公寓',
          city: '泰国，清迈',
          price: '188'
        }, {
          id: '607173',
          img: 'http://simg1.zhubaijia.com/oi/1476346708/9ea384ca911d11e68e4300163e000735.jpg-oixxl',
          name: '芭提雅近中天海滩豪华典雅5卧别墅',
          city: '泰国，芭提雅',
          price: '2767'
        }, {
          id: '32783',
          img: 'http://simg1.zhubaijia.com/uploads/offer_image/image/32783/682408/pol.jpg-oixxl',
          name: '普吉岛近芭东海滩奢华海景5卧别墅',
          city: '泰国，普吉岛',
          price: '5964'
        }, {
          id: '18279',
          img: 'http://simg1.zhubaijia.com/uploads/offer_image/image/18279/428691/6381f2656a01f6f5e1d86ac2c3d6d8.jpg-oixxl',
          name: '曼谷近曼谷河滨夜市现代舒适1卧公寓',
          city: '泰国，曼谷',
          price: '248'
        }]
      },
      {
        cityName: '印尼',
        cityNameEn: 'Indonesia',
        offer: [{
          id: '59151',
          img: 'http://simg1.zhubaijia.com/oi/1511245644/098c05f0ce8511e7813e00163e000735.jpg-oixxl',
          name: '巴厘岛崭新舒适3卧公寓',
          city: '印度尼西亚，巴厘岛',
          price: '2405'
        }, {
          id: '22111',
          img: 'http://simg1.zhubaijia.com/oi/1510807314/788c3e26ca8811e78d0600163e000735.jpg-oixxl',
          name: '巴厘岛浪漫精致4房别墅',
          city: '印度尼西亚，巴厘岛',
          price: '2560'
        }, {
          id: '17119',
          img: 'http://simg1.zhubaijia.com/oi/1510301255/35c3c814c5ee11e7a76800163e000735.jpg-oixxl',
          name: '巴厘岛近水明漾海滩阳光海岸1卧别墅',
          city: '印度尼西亚，巴厘岛',
          price: '1048'
        }, {
          id: '32868',
          img: 'http://simg1.zhubaijia.com/oi/1494919812/7f3b026c3a0911e7b20400163e000735.jpg-oixxl',
          name: '巴厘岛近水明漾海滩优雅舒适1卧公寓',
          city: '印度尼西亚，巴厘岛',
          price: '931'
        }]
      },
      {
        cityName: '马来西亚',
        cityNameEn: 'Malaysia',
        offer: [{
          id: '631688',
          img: 'http://simg1.zhubaijia.com/oi/1496967449/06791e424ca911e7a7a600163e000735.jpg-oixxl',
          name: '吉隆坡近双子塔购物中心现代时尚1卧公寓',
          city: '马来西亚，吉隆坡',
          price: '300'
        }, {
          id: '631342',
          img: 'http://simg1.zhubaijia.com/oi/1495454534/7e74b4e03ee611e7aeeb00163e000735.jpg-oixxl',
          name: '吉隆坡现代舒适3卧公寓',
          city: '马来西亚，吉隆坡',
          price: '397'
        }, {
          id: '81113',
          img: 'http://simg1.zhubaijia.com/oi/1467386803/g6SWSRLtTR2HyunPFu1P8FuFoVDfjat2.jpg-oixxl',
          name: '沙巴古朴自然海景1卧别墅',
          city: '马来西亚，彭亨州',
          price: '2239'
        }, {
          id: '80914',
          img: 'http://simg1.zhubaijia.com/oi/1467346853/333585b63f4311e68eea00163e000735.jpg-oixxl',
          name: '沙巴古朴自然海景1卧别墅',
          city: '马来西亚，沙巴',
          price: '2239'
        }]
      },
      {
        cityName: '日本',
        cityNameEn: 'Japan',
        offer: [{
          id: '633123',
          img: 'http://simg1.zhubaijia.com/oi/1501433452/3f80a86a754711e79f9d00163e000735.jpg-oixxl',
          name: '大阪近道顿堀宽敞明亮1卧公寓',
          city: '日本，大阪',
          price: '487'
        }, {
          id: '631481',
          img: 'http://simg1.zhubaijia.com/oi/1509693976/u2FQsDJU7ogJXNCUkgnfk4n9eBgJPA9M.jpg-oixxl',
          name: '大阪近心斋桥整洁干净1卧公寓',
          city: '大阪市西区千代崎',
          price: '1120'
        }, {
          id: '631482',
          img: 'http://simg1.zhubaijia.com/oi/1506677121/cWQuv8ADErdZ1Wxgsegf1DXjVEN5Mg5t.jpg-oixxl',
          name: '大阪近心斋桥精致大床1卧公寓',
          city: '大阪市西区千代崎',
          price: '631482'
        }, {
          id: '594028',
          img: 'http://simg1.zhubaijia.com/oi/1470473236/60cc8bce5bb211e68dda00163e000735.jpg-oixxl',
          name: '大阪近心斋桥豪华1卧公寓',
          city: '日本，大阪',
          price: '1373'
        }, {
          id: '61809',
          img: 'http://simg1.zhubaijia.com/oi/1482893609/cf8d1b3ecca811e6a4bc00163e000735.jpg-oixxl',
          name: '大阪近通天阁纯洁雅致3卧公寓',
          city: '日本，大阪',
          price: '698'
        }, {
          id: '613586',
          img: 'http://simg1.zhubaijia.com/oi/1515729334/7142e070f74c11e7860800163e000735.jpg-oixxl',
          name: '东京近秋叶原宽敞明亮1卧公寓',
          city: '日本，东京',
          price: '289'
        }, {
          id: '633989',
          img: 'http://simg1.zhubaijia.com/oi/1516331571/a284bdb4fcc611e7a64100163e000735.jpg-oixxl',
          name: '东京舒适简约1卧公寓',
          city: '日本，东京',
          price: '361'
        }, {
          id: '626128',
          img: 'http://simg1.zhubaijia.com/oi/1515393337/23581dd2f43e11e7b78500163e000735.jpg-oixxl',
          name: '东京近浅草近上野浅草站两卧独栋房屋',
          city: '東京都荒川区東日暮里',
          price: '626128'
        }, {
          id: '613644',
          img: 'http://simg1.zhubaijia.com/oi/1515750019/9a3a56c2f77c11e7a82e00163e000735.jpg-oixxl',
          name: '东京日式温馨两卧公寓',
          city: '日本，东京',
          price: '490'
        }, {
          id: '62755',
          img: 'http://simg1.zhubaijia.com/oi/1513569218/07935906e3a711e7b74a00163e000735.jpg-oixxl',
          name: '京都现代时尚两卧公寓',
          city: '日本，京都',
          price: '1021'
        }, {
          id: '23554',
          img: 'http://simg1.zhubaijia.com/uploads/offer_image/image/23554/526816/4cc178f0b14afd8e1734c5b988fdfd.jpg-oixxl',
          name: '京都近清水寺豪华宽敞4卧别墅',
          city: '日本京都市東山区',
          price: '2528'
        }, {
          id: '70319',
          img: 'http://simg1.zhubaijia.com/oi/1461935550/076841de0e0c11e6973b00163e000735.jpg-oixxl',
          name: '京都近哲学之道4卧公寓',
          city: '日本，京都',
          price: '794'
        }, {
          id: '71684',
          img: 'http://simg1.zhubaijia.com/oi/1462774195/a6de740c15ac11e6b11f00163e000735.jpg-oixxl',
          name: '京都干净整洁1卧公寓',
          city: '日本，京都',
          price: '622'
        }, {
          id: '2643',
          img: 'http://simg1.zhubaijia.com/oi/1473307788/155c8342757a11e683e000163e000735.jpg-oixxl',
          name: '北海道温馨1卧公寓',
          city: '日本，札幌',
          price: '246'
        }, {
          id: '663176',
          img: 'http://simg1.zhubaijia.com/oi/1510216783/88cde154c52911e7969900163e000735.jpg-oixxl',
          name: '北海道现代简约两卧公寓',
          city: '日本，北海道',
          price: '325'
        }, {
          id: '633614',
          img: 'http://simg1.zhubaijia.com/oi/1504618129/270b105e923e11e7ac4f00163e000735.jpg-oixxl',
          name: '北海道近小樽运河清新简约舒适1卧公寓',
          city: '日本，北海道',
          price: '349'
        }, {
          id: '663374',
          img: 'http://simg1.zhubaijia.com/oi/1510724892/913be46ec9c811e7aa2f00163e000735.jpg-oixxl',
          name: '北海道舒适温馨两卧公寓',
          city: '日本，北海道',
          price: '217'
        }, {
          id: '634325',
          img: 'http://simg1.zhubaijia.com/oi/1508604838/5LQH1V9nY6sT8PrHtwqCqEvBsRKtHxAR.jpg-oixxl',
          name: '冲绳近海岸豪华两卧独栋房屋',
          city: '日本，冲绳',
          price: '650'
        }, {
          id: '663601',
          img: 'http://simg1.zhubaijia.com/oi/1511598059/913b4da8d1b911e7866200163e000735.jpg-oixxl',
          name: '京都雅致温馨两卧公寓',
          city: '日本，京都',
          price: '722'
        }, {
          id: '633125',
          img: 'http://simg1.zhubaijia.com/oi/1501436228/b5cd68ea754d11e7aca300163e000735.jpg-oixxl',
          name: '东京近羽田国际机场舒适简约1卧公寓',
          city: '日本，东京',
          price: '708'
        }]
      }
    ]
    return (
      <div className={s.cityOffersContent}>
        <img src={traBanner} className={s.bannerBack}/>
        <div className={s.offer}>
          { !isUndefined(cityData) && cityData.map((item, i) =>
            <div className={s.city} key={i}>
              <h2>{item.cityName}住哪里好？</h2>
              <section>
                { !isUndefined(item.offer) && item.offer.map((offers, i) =>
                  <a href={ 'http://www.zhubaijia.com/offers/' + offers.id } target='_blank' key={i}>
                    <img src={offers.img} />
                    <h4 className={s.price}>￥{offers.price}</h4>
                    <h6>{offers.name}</h6>
                    <span>{offers.city}</span>
                    <p>立即预定</p>
                  </a>
                )}
              </section>
            </div>
          )}
        </div>

      </div>

    )
  }
}

CityOffers.propTypes = {

}

CityOffers.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default CityOffers
