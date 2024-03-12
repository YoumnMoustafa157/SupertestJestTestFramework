/* eslint-disable */
export default {
	displayName: 'ad-server-api-tests',
	preset: '../../jest.preset.js',
	testEnvironment: 'node',
	coverageDirectory: '../coverage/ad-server-api-tests',
	collectCoverageFrom: ['./specs/*.spec.ts'],
	reporters: [
		'default',
		[
			'jest-html-reporters',
			{
				publicPath: 'api-test-reports/'
			}
		]
	]
};
