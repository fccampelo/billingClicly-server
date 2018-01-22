const _ = require('lodash');

module.exports = (req, res, next) => {
  console.log('entro    uaqui')

  const bundle = res.locals.bundle;
  console.log(bundle)

  if(bundle.errors) {
    console.log('entrouaqui')
    const errors = parseErrors(bundle.errors);
    res.status(500).json({errors})
  } else {
    next();
  };
};

const parseErrors = (nodeRestfulErros) => {
  const errors = [];
  _.forIn(nodeRestfulErros, error => errors.push(error.message))
  return errors;

};