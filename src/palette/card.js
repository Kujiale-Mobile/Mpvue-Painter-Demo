// 名片分享样式
export default class LastMayday {
  cardInfo = {}

  do (cardInfo) {
    this.cardInfo = JSON.parse(JSON.stringify(cardInfo))
    return this._template()
  }

  TEXT_SMALL = {
    fontSize: '24rpx'
  }

  _template () {
    return ({
      background: 'https://qhyxpicoss.kujiale.com/2018/06/12/LMPUSDAKAEBKKOASAAAAAAY8_981x600.png',
      width: '654rpx',
      height: '400rpx',
      borderRadius: '20rpx',
      views: [{
        type: 'image',
        url: this.cardInfo.avatar,
        css: {
          top: '48rpx',
          right: '48rpx',
          width: '192rpx',
          height: '192rpx',
          borderRadius: '10rpx',
          align: 'left'
        }
      },
      {
        type: 'qrcode',
        content: 'https://github.com/Kujiale-Mobile',
        css: {
          left: '70rpx',
          bottom: '30rpx',
          width: '130rpx',
          height: '130rpx'
        }
      },
      {
        type: 'text',
        text: '酷家乐 移动前端',
        css: {
          left: '50rpx',
          top: '48rpx',
          fontSize: '40rpx',
          align: 'left'
        }
      }
      ]
    })
  }
}
