import regeneratorRuntime from '../../../utils/libs/regenerator-runtime'

let pageParams = {
  data: {
    _string: Object.assign({
        btn: wx.ooString.global.btn_title,
      },
      wx.ooString.service_edu_schedule,
    ),
  },
}

pageParams.onReady = function () {
    wx.ooSetTitle(this.data._string.title)
}

pageParams.bindSchoolTimeChange = function (e) {
  this.setData({ schoolTime: e.detail.value })
}

pageParams.bindSubmit = async function () {
  const ret = await wx.ooService.edu.getCurrWeek(true)

  if (ret === undefined) {
    return
  }

  const scheduleData = await wx.ooService.edu.fetchSchedule(this.data.schoolTime)
  if (!scheduleData) {
    return
  }

  if (scheduleData.length === 0) {
    wx.ooShowToast({ title: this.data._string.empty_schedule })
    return
  }

  wx.ooEvent.emit('updateCurrWeek')
  wx.switchTab({ url: '/pages/tabbar/schedule' })
}

Page(pageParams)
