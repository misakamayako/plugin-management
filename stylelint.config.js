module.exports = {
	extends: "@jetbrains/stylelint-config",
	rules: {
		indentation: "tab",
		"order/properties-order": "off",
		// eslint-disable-next-line no-magic-numbers
		"selector-max-specificity": ["error", 4]
	}
};
