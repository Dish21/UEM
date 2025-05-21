/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sls/jbd/subbd/sljbdttcsubbduem/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
