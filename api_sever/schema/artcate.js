const joi = require('joi')

//定义 分类名称和 分类别名的调用
const name = joi.string().required()
const alias = joi.string().alphanum().required()

// id 的校验规则
const id = joi.number().integer().min(1).required()

// 向外共享验证规则对象

// 验证规则对象 - 添加分类
exports.add_cate_schema = {
	body: {
		name,
		alias,
	},
}

// 验证规则对象 - 删除分类
exports.delete_cate_schema = {
	params: {
		id,
	},
}

// 验证规则对象 - 根据 Id 获取文章分类
exports.get_cate_schema = {
	params: {
		id,
	},
}

// 验证规则对象 - 更新分类
exports.update_cate_schema = {
	body: {
		Id: id,
		name,
		alias,
	},
}
