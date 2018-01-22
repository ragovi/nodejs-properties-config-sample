var properties = require ("properties");

properties.parse ('test.properties', { path: true }, (error, obj) => {
  if (error) {
    return console.error ('Ubale to read properties file', error);
  }

  console.log (obj);
  console.log (obj.someURL);

});
