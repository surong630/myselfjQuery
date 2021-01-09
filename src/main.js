const api1 = jQuery(".test") // 不返回元素们, 返回api对象

api1.addClass("red")
const api12 = api1.find('.test1').addClass('blue') // 遍历所有的元素
api12.end().addClass('popo')