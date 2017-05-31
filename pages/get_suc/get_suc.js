// get_suc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    play:true
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
  onLoad: function (options) {
    var that = this;
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        var status = res.status;
        if (status == 2) {
          wx.playBackgroundAudio({
            dataUrl: 'http://7xpm1p.com1.z0.glb.clouddn.com/yqh.mp3',
          });
          that.setData({
            play: true
          })
        } else if (status == 0) {
          that.setData({
            play: false
          })
        }
      }
    })
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