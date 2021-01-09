window.jQuery = function(selectorOrArray) {
  let  elements;
  if(typeof selectorOrArray === 'string') {
    elements = document.querySelectorAll(selectorOrArray);
  }else if(selectorOrArray instanceof Array) {
    elements = selectorOrArray
  }
  return {
    oldApi:selectorOrArray.oldApi,
    addClass(className) {
      // 对数组遍历
      for(let i =0;i<elements.length;i++) {
        elements[i].classList.add(className)
      }
      // 此处返回是可以进行链式操作
      return this
    },
    find(selector) {
      let array = []
      for(let i=0;i<elements.length;i++) {
        array = array.concat(Array.from(elements[i].querySelectorAll(selector)))
      }
      // 在此处创建一个新的jQuery对象,用来返回,否则若直接返回this,则会改变了elements
      // 此处的思路,在array加上oldApi对象保存上一次的this,然后在this中创建一个oldApi保存更改前的this指向以便于end获取,通过end可以直接获取
      array.oldApi = this
      return jQuery(array)
    },
    end() {
      return this.oldApi
    }
  }
}
