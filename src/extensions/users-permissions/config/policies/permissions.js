const _ = require('lodash');

module.exports = async (ctx, next) => {
  let role;

 if (ctx.state.user) {
    // request is already authenticated in a different way
    return next();
  }

  // add the detection of `token` query parameter
  if (
    (ctx.request && ctx.request.header && ctx.request.header.authorization) ||
    (ctx.request.query && ctx.request.query.token)
    ) {
    try {
      // init `id` and `isAdmin` outside of validation blocks
      let id;
      let isAdmin;

      if (ctx.request.query && ctx.request.query.token) {
        // find the token entry that match the token from the request
        const [token] = await strapi.query('token').find({token: ctx.request.query.token});

        if (!token) {
          throw new Error(`Invalid token: This token doesn't exist`);
        } else {
          if (token.user && typeof token.token === 'string') {
            id = token.user.id;
          }
          isAdmin = false;
        }

        delete ctx.request.query.token;
      } else if (ctx.request && ctx.request.header && ctx.request.header.authorization) {
        // use the current system with JWT in the header
        const decoded = await strapi.plugins[
          'users-permissions'
        ].services.jwt.getToken(ctx);

        id = decoded.id;
        isAdmin = decoded.isAdmin || false;
      }

      // this is the line that already exist in the code
      if (id === undefined) {
        throw new Error('Invalid token: Token did not contain required fields');
      }
    }catch(error){
    
    }
}
}
