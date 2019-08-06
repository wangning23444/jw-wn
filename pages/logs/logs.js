//logs.js
const util = require("../../utils/util.js");

var app = getApp();
Page({
  data: {
    currentTab: 0,
    toView: "red1",
    _click: 0,
    left: [{
        txt: "新品",
        id: "new"
      },
      {
        txt: "手机",
        id: "phone"
      },
      {
        txt: "电视",
        id: "mv"
      },
      {
        txt: "电脑",
        id: "computer"
      }
    ],
    right: [{
        txt: "新品",
        id: "new",
        li: [{
            src: "../../assets/images/max1.jpg",
            name: "小米noto"
          },
          {
            src: "../../assets/images/max1.jpg",
            name: "小米mix"
          },
          {
            src: "../../assets/images/max3.jpg",
            name: "小米5c"
          },
          {
            src: "../../assets/images/max2.jpg",
            name: "小米notp"
          },
          {
            src: "../../assets/images/max2.jpg",
            name: "小米note5"
          },
          {
            src: "../../assets/images/max2.jpg",
            name: "小米6"
          }
        ]
      },
      {
        txt: "手机",
        id: "phone",
        li: [{
            src: "../../assets/images/max2.jpg",
            name: "小米6s"
          },
          {
            src: "../../assets/images/max3.jpg",
            name: "小米max"
          },
          {
            src: "../../assets/images/max2.jpg",
            name: "小米5s"
          },
          {
            src: "../../assets/images/max1.jpg",
            name: "小米li"
          },
          {
            src: "../../assets/images/max3.jpg",
            name: "小米4"
          },
          {
            src: "../../assets/images/max1.jpg",
            name: "小米max"
          }
        ]
      },
      {
        txt: "电视",
        id: "mv",
        li: [{
            src: "../../assets/images/max3.jpg",
            name: "小米6"
          },
          {
            src: "../../assets/images/max2.jpg",
            name: "小米mix"
          },
          {
            src: "../../assets/images/max1.jpg",
            name: "小米7s"
          },
          {
            src: "../../assets/images/max3.jpg",
            name: "小米2"
          },
          {
            src: "../../assets/images/max1.jpg",
            name: "小米note7"
          },
          {
            src: "../../assets/images/max3.jpg",
            name: "小米8"
          }
        ]
      },
      {
        txt: "电脑",
        id: "computer",
        li: [{
            src: "../../assets/images/max1.jpg",
            name: "小米2"
          },
          {
            src: "../../assets/images/max1.jpg",
            name: "小米mix"
          },
          {
            src: "../../assets/images/max2.jpg",
            name: "小米max"
          },
          {
            src: "../../assets/images/max1.jpg",
            name: "小米6"
          },
          {
            src: "../../assets/images/max3.jpg",
            name: "小米note"
          },
          {
            src: "../../assets/images/max1.jpg",
            name: "小米max"
          }
        ]
      }
    ]
  },
  onLoad: function() {
    var that = this;
    that.setData({
      logs: (wx.getStorageSync("logs") || []).map(log => {
        return util.formatTime(new Date(log));
      })
    });

    wx.request({
      url: 'https://www.easy-mock.com/mock/5bc320ecb0bf35423bd75398/ele/goods', //真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        that.setData({
          left:res.data.goods,
          right: res.data.goods
        })
      }
    })
  },
  //滑动切换
  swiperTab: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      });
    }
  },
  scroll: function(e) {
    // console.log(e); //右侧列表滑动-左侧列表名称样式跟着改变，然而我不会写，搁置中，谁会告诉我，谢谢！
  },
  tap: function(e) {
    var j = parseInt(e.currentTarget.dataset.i);
    this.setData({
      toView: this.data.left[j].id, //控制视图滚动到为此id的<view>
      _click: j //控制左侧点击后样式
    });
  }
});