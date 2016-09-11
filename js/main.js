//选择地址
var addressList = [
  '北京',
  '天津',
  '河北',
  '山西',
  '内蒙古',
  '辽宁',
  '吉林',
  '黑龙江',
  '上海',
  '江苏',
  '浙江',
  '安徽',
  '福建',
  '江西',
  '山东',
  '河南',
  '湖北',
  '湖南',
  '广东',
  '广西',
  '海南',
  '重庆',
  '四川',
  '台湾',
  '香港',
  '澳门',
  '钓鱼岛'
]
$(function(){
  var addr = $('#area_list')
  var place = $('#place')
  place.text(addressList[0])
  for (var i = 0; i < addressList.length; i++) {
    addr.append('<li><a href="javascript:;">' + addressList[i] + '</a></li>')
  }
  $('#address').hover(function() {
    $('#area_list').css('display','block');
    $('#triangle').css({
      'transition': 'all .3s',
      'transform': 'rotate(180deg)'
    });
  }, function() {
    $('#area_list').css('display','none');
    $('#triangle').css({
      'transition': 'all .3s',
      'transform': 'rotate(0deg)'
    });
  });
  addr.find('>li').on('click', function () {
    place.text($(this).text())
  })
  // 左侧导航栏
  $('#leftNav li').hover(function() {
    $(this).addClass("navItem")
    var index = $('#leftNav li').index(this);
    $("#navBox > div")
    .eq(index).show()
    .siblings().hide();
    return false;
  }, function() {
    $('#navBox > div').css('display', 'none');
    $(this).removeClass("navItem")
  });
  $('#navBox > div').hover(function() {
    $(this).css('display', 'block');
  }, function() {
    $(this).css('display', 'none');
  });
  // 图书推荐区
  $('#tabs li').mouseover(function(){
    $(this).addClass("selected")
    .siblings().removeClass("selected");
    var index = $('#tabs li').index(this);
    $(".tabBox > div")
    .eq(index).show()
    .siblings().hide();
  });
  // 右侧排行榜
  $('.onsaleHead li').mouseover(function() {
    $(this).addClass("head")
    .siblings().removeClass("head");
    var index = $('.onsaleHead li').index(this);
    $(".onsaleBody > div")
    .eq(index).show()
    .siblings().hide();
  });
  var saleBoxLis = $('.saleBox ul li:not(".item")')
  var saleBoxLisDetails = $('.saleBox ul li.item')
  // console.log(saleBoxLis, saleBoxLisDetails)
  saleBoxLis.each(function (idx, item) {
    $(item).hover(function () {
      $(this).hide()
      .siblings('li:not(".item")').show()
      $(saleBoxLisDetails[idx]).show().siblings('li.item').hide()
      if ([idx]==9||[idx]==19) {$(saleBoxLisDetails[idx]).css('border-bottom', 'none');}
    }, function () {})
  })
  // 推广商品
  $('#circle li').mouseover(function() {
    $(this).addClass("on")
    .siblings().removeClass("on");
    var index = $('#circle li').index(this);
    $(".goodsBox > div")
    .eq(index).show()
    .siblings().hide();
  });
})
$(document).ready(function(e) {
    var unslider04 = $('#b04').unslider({
    dots: true
  }),
  data04 = unslider04.data('unslider');
  $('.unslider-arrow04').click(function() {
        var fn = this.className.split(' ')[1];
        data04[fn]();
    });

});


