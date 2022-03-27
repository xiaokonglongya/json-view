import service from "@/utils/request";

export function getBanner() {
  return service("/api/getBanner");
}
export function getNews() {
  return service("/api/getNews");
}
export function getHomeCategory() {
  return service("/api/getHomeCategory");
}
export function getTestParpeList() {
  return service("/api/getTestParpeList");
}

// 首页点击分类跳转至课程方页面
export function getOrganization(data:any) {
  return service("/api/getOrganizationByCategotyId ",{data});
}
//课程详情
export function getCourseDetails(data:any) {
  return service("/api/getCourseDetails",{data});
}

// 底部相关推荐课程
export function getCourseRelated() {
  return service("/api/getCourseRelated");
}


// 新闻详情
export function getNewDetails(data:any) {
  return service("/api/getNewDetailsById ",{data});
}
