/*
 * GET users listing.
 */
import express = require('express');
const router = express.Router();

router.get('apitest', (req: express.Request, res: express.Response) => {
    res.send([0,1,2,3]);
});

export default router;