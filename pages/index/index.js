//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    play:true
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../index_1/index_1'
    })
  },
  audio_play:function(){
    console.log(this);
    if (this.data.play==true){
      this.setData({
        play:false
      });
      wx.pauseBackgroundAudio();
    }else{
      this.setData({
        play: true
      });
      wx.playBackgroundAudio({
        dataUrl: 'http://7xpm1p.com1.z0.glb.clouddn.com/yqh.mp3',
      });
    }
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    });
    wx.playBackgroundAudio({
      dataUrl: 'http://7xpm1p.com1.z0.glb.clouddn.com/yqh.mp3',
    });
  },
  onShareAppMessage: function () {
    return {
      title: '自定义转发标题',
      path: '',
      success: function (res) {
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})
