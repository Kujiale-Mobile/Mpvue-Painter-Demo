<template>
    <div>
        <painter :customStyle="customStyle" @imgOK="onImgOk" :palette="template" :dirty="true"/>
        <button style="margin-top:40rpx" @click="save">保存</button>
    </div>
</template>

<script>
import Card from '../../palette/card'
const card = new Card()
const userInfo = {
  avatar: 'https://qhyxpicoss.kujiale.com/r/2017/12/04/L3D123I45VHNYULVSAEYCV3P3X6888_3200x2400.jpg@!70q'
}

const template = card.do(userInfo)
const customStyle = 'margin-left:40rpx'

export default {
  data () {
    return {
      shareImg: '',
      customStyle: customStyle,
      template: template
    }
  },
  methods: {
    save () {
      console.log('on save click')
    },
    onImgOk (e) {
      this.shareImg = e.mp.detail.path
      // 两种路径是一样的
      console.log(e.mp.detail.path)
      console.log(e.target.path)
    }
  }
}
</script>