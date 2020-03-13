const { override, fixBabelImports, addDecoratorsLegacy, addPostcssPlugins, addLessLoader } = require('customize-cra');
module.exports = override(
	addLessLoader({}),
	addDecoratorsLegacy(),
	// 按需加载
	fixBabelImports('import', {
		libraryName: 'antd-mobile',
		style: 'css',
	}),
	addPostcssPlugins([require('postcss-pxtorem')({
		rootValue: 37.5,
		propList: ['*']
	})])
);
