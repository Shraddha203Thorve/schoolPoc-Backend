const router = require('express').Router();
import { Request, Response } from 'express'
const admission = require("../model/Admission")



router.post('/add', (req: Request, res: Response) => {

    console.log('inside admission')

    const admissionData = []

    for (const option of req.body.options) {
        const opt = {
            grade: option.grade,
            fees: option.fees,
            seats: option.seats,
        }
        var newadmission = new admission({
            category: req.body.category,
            options: [opt]
        });
        newadmission.save()
        admissionData.push(newadmission)
    }
    res.json("data saved");
    console.log('created')
})

router.get('/:category', (req: Request, res: Response) => {
    console.log('inside admission')
    admission.find({ category: req.params.category })
        .then((data: Object) => res.json(data))
        .catch(() =>
            res.json("err")
        );
    console.log('created')
})

router.get('/', (req: Request, res: Response) => {
    console.log('inside admission')
    admission.find()
        .then((data: Object) => res.json(data))
        .catch(() =>
            res.json("err")
        );
    console.log('created')
})

module.exports = router;
