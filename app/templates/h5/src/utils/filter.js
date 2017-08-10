export const filters = value => {
  let list = []
  value.forEach(item => {
    list.push({
      isNormal: 0,
      id: item.houseAssetsId,
      img: item.imgUrl,
      title: item.detailDescription
    });
  });
  return list;
}

// 房源详情图片
export const houseImgs = value => {
  let list = []
  value.forEach(item => {
    list.push({
      img: item.originalImageUrl,
    });
  });
  return list;
}
