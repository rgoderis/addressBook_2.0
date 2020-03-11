const router = require("express").Router();
const passport = require('passport');
const usersController = require("../../controllers/usersController");
// Matches with "/api/users"
router.route("/")
  .get(usersController.getUser);

/* Authentication Routes */
router.route("/register")
  .post(usersController.register);

router.route("/login")
  .post(passport.authenticate('local', { failureRedirect: '/login' }), usersController.login);

router.route("/logout")
  .post(usersController.logout);

router.route("/:username")
  .get(usersController.getContacts)
  .post(usersController.addContact);

router.route("/contact/:id")
  .get(usersController.getContact)

router.route("/:id/note")
  .post(usersController.addNote)

  router.route("/:contactId/note/:noteId")
  .delete(usersController.deleteNote)

// Matches with "/api/users/:id"

/* Testing Endpoint */
router
  .route("/ping")
  .get(usersController.test);

module.exports = router;