
Page({
  data: {
    play: true,
    msg1:false,
    msg2: false,
    input1:false,
    input2:false
  },
  input1:function(e){
    if (!e.detail.value){
      this.setData({
        msg1: true,
        input1: false
      })
    }else{
      this.setData({
        msg1: false,
        input1:true
      })
    }
  },
  input2: function (e) {
    if (!/^1[3|4|5|8|7]\d{9}$/.test(e.detail.value)) {
      this.setData({
        msg2: true,
        input2: false
      })
    } else {
      this.setData({
        msg2: false,
        input2: true
      })
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
  signUp:function(e){
    if (!this.data.input1){
      this.setData({
        msg1: true
      })
    } else if (!this.data.input2){
      this.setData({
        msg2: true
      })
    }else{
      wx.navigateTo({
        url: '../success/success'
      })
    }
  },
  back: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  onLoad: function () {
    var that=this;
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        var status = res.status;
        if (status == 0){
          that.setData({
            play: false
          })
        } else{
          wx.playBackgroundAudio({
            dataUrl: 'http://7xpm1p.com1.z0.glb.clouddn.com/yqh.mp3',
          });
          that.setData({
            play: true
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
