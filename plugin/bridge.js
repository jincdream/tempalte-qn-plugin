/**
 * 通用连接器
 */
import { Bridge } from 'mii-open-api'

/**
 * 包含 api: 
 * - setBridge (容器方调用)
 * - getBridge (插件方调用)
 */
module.exports = new Bridge("bizCode")