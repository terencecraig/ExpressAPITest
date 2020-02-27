"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET users listing.
 */
const express = require("express");
const router = express.Router();
router.get('apitest', (req, res) => {
    res.send([0, 1, 2, 3]);
});
exports.default = router;
//# sourceMappingURL=apitest.js.map