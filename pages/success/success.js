// pages/success/success.js
var app = getApp()
Page({
  data: {
    plauy:true,
    userInfo: {}
  },
  onShareAppMessage: function () {
    return {
      title: '自定义转发标题',
      path: '',
      success: function (res) {
        wx.navigateTo({
          url: '../share_suc/share_suc'
        })
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  audio_play: function () {
    console.log(this);
    if (this.data.play == true) {
      this.setData({
        play: false
      });
      wx.pauseBackgroundAudio();
    } else {
      this.setData({
        play: true
      });
      wx.playBackgroundAudio({
        dataUrl: 'http://7xpm1p.com1.z0.glb.clouddn.com/yqh.mp3',
      });
    }
  },
  get:function(){
    wx.navigateTo({
      url: '../get/get'
    })
  },
  onLoad: function (options) {
    var newObj = this
    app.getUserInfo(function (userInfo) {
      //更新数据
      newObj.setData({
        userInfo: userInfo
      })
    });
    var that = this;
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        var status = res.status;
        if (status == 0) {
          that.setData({
            play: false
          })
        } else {
          wx.playBackgroundAudio({
            dataUrl: 'http://7xpm1p.com1.z0.glb.clouddn.com/yqh.mp3',
          });
          that.setData({
            play: true
          })
        }
      }
    })
  }
})