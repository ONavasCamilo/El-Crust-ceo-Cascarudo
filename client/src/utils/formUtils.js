/**
 * Generates an initial state object based on the given form fields.
 * 
 * @param {Array<Object>} fields The form fields configuration.
 * @returns {Object} The initial state object with keys corresponding to field names and empty string values.
 * 
 * Example:
 * For this array:
 * [
 *   {
 *     type: "text",
 *     name: "username",
 *     required: true,
 *   },
 *   {
 *     type: "password",
 *     name: "password",
 *     required: true,
 *   },
 *   {
 *     type: "button",
 *     label: "Iniciar Sesión"
 *   },
 * ]
 * 
 * It will return:
 * {
 *    username: "",
 *    password: ""
 * }
 */

export const getInitialState = (fields) => {
  return fields
    .filter(field => field.name)
    .reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {});
};