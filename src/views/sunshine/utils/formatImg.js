 
// 根据盒子宽度按比例设置api图片的宽高
export const computedImgAttribute = ( className, nextTick ) => {
  let boxWidth = document.getElementsByClassName(className)[0].offsetWidth;
  let imgArr = document.getElementsByTagName('img');
  let videoArr = document.getElementsByTagName('video'); 
  nextTick(()=>{
    let imgList = Array.prototype.slice.call(imgArr);
    let videoList = Array.prototype.slice.call(videoArr);
    for(let element in imgList) {
      const curImgWidth = imgList[element].width;
      const curImgHeight = imgList[element].height;
      const percentage = curImgWidth / boxWidth;
      imgList[element].style.width = boxWidth + 'px';
      imgList[element].style.height = curImgHeight / percentage + 'px';
    }
    for(let element in videoList) {
      const curVideoWidth = videoList[element].width;
      const curVideoHeight = videoList[element].height;
      const percentage = curVideoWidth / boxWidth;
      videoList[element].style.width = boxWidth + 'px';
      videoList[element].style.height = curVideoHeight / percentage + 'px';
    }
  })
}

// 视频设置显示第一帧画面
export const appointFirstFrame = () => {
  let videoArr = document.getElementsByTagName('video'); 
  let videoList = Array.prototype.slice.call(videoArr);
  for(let item in videoList) {
    let curItem = videoList[item].querySelector("source");
    videoList[item].setAttribute('poster',curItem.src + '?x-oss-process=video/snapshot,t_10,f_jpg');
  }
}