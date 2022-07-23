import {
  addNewContact,
  getContact,
  getContactById,
  updateContact,
  deleteContact,
} from "../controllers/crmController";

const routes = (app) => {
  app
    .route("/contact")
    .get((req, res, next) => {
      // middleware
      console.log(`Request came from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContact)
    .post(addNewContact);

  app
    .route("/contact/:contactID")
    // Find contact by ID
    .get(getContactById)
    // Update contact with given ID
    .put(updateContact)
    // Delete contact with given ID
    .delete(deleteContact);
};

export default routes;
