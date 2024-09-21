import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const locations = await req.context.models.Location.find();
  return res.send(locations);
});

router.get('/:locationId', async (req, res) => {
  const location = await req.context.models.Location.findById(
    req.params.locationId,
  );
  return res.send(location);
});

router.post('/', async (req, res) => {

  console.log("==============")
  console.log("==============",req.body)

  const location = await req.context.models.Location.create({
      "name": req.body.displayName,
      "displayName": req.body.displayName,
      "email": req.body.email,
      "phone": req.body.phone,
      "addressLine1": req.body.addressLine1,
      "addressLine2": req.body.addressLine2,
      "city": req.body.city,
      "state": req.body.state,
      "zip": req.body.zip,
      "businessHours": req.body.businessHours,
      "status": req.body.status,
      "createdOn": req.body.status,
      "createdBy": req.body.createdBy,
      "lastModifiedOn":req.body.lastModifiedOn,
      "lastModifiedBy": req.body.lastModifiedBy
  });

  return res.send(location);
});

router.delete('/:locationId', async (req, res) => {
  const location = await req.context.models.Location.findById(
    req.params.locationId,
  );

  let result = null;
  if (location) {
    result = await location.remove();
  }

  return res.send(result);
});

export default router;
