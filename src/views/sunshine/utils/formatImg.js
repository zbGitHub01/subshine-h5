 
// 根据盒子宽度按比例设置api图片的宽高
export const computedImgAttribute = ( className, nextTick ) => {
  var imgWidth = document.getElementsByClassName(className)[0].offsetWidth;
  var imgArr = document.getElementsByTagName('img');
  nextTick(()=>{
    var imgList = Array.prototype.slice.call(imgArr);
    for(var element in imgList) {
      const curImgWidth = imgList[element].width;
      const curImgHeight = imgList[element].height;
      const percentage = curImgWidth / imgWidth;
      imgList[element].style.width = imgWidth + 'px';
      imgList[element].style.height = curImgHeight / percentage + 'px';
    }
  })
}
