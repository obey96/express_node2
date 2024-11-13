const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

/** Authorization Middleware: Requires user is logged in. */
function requireLogin(req, res, next) {
  try {
    if (req.curr_username) {
      return next();
    } else {
      return next({ status: 401, message: 'Unauthorized: Login required' });
    }
  } catch (err) {
    return next(err);
  }
}

/** Authorization Middleware: Requires user is logged in and is staff/admin. */
function requireAdmin(req, res, next) {
  try {
    if (req.curr_admin) {
      return next();
    } else {
      return next({ status: 401, message: 'Unauthorized: Admin access required' });
    }
  } catch (err) {
    return next(err);
  }
}

/** Authentication Middleware: Put user on request.
 * 
 * If there is a token, verify it, get payload (username/admin),
 * and store the username/admin on the request, so other middleware/routes
 * can use it.
 * 
 * If the token is invalid, an error will be raised.
 */
function authUser(req, res, next) {
  try {
    const token = req.body._token || req.query._token;
    if (token) {
      // Fixes BUG #1
      const payload = jwt.verify(token, SECRET_KEY);
      req.curr_username = payload.username;
      req.curr_admin = payload.admin;
    } else {
      req.curr_username = null;
      req.curr_admin = false;
    }
    return next();
  } catch (err) {
    err.status = 401;
    return next(err);
  }
}

module.exports = {
  requireLogin,
  requireAdmin,
  authUser
};
