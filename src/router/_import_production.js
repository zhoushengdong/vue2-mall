// 生产环境
module.exports = file => () => import('@/views/' + file + '.vue')
