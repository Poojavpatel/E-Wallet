## Notes

* Adding {timestamps: true} as second parameter in mongoose.Schema() saves createdAt and updatedAt fields in the database
* Morgan is a logging library for express, helps format logs with time stamps, headers, req object, response objects, status code etc.

### Code level Todos
* Global method (isValidId) to validate ids instead of mongoose.Types.ObjectId.isValid
* Throw error and send response to client with status code and stop processing further
* In vue router file, mode: ‘history’ means that we won’t have a hash sign between the base URL and our routes.
```javascript
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  routes: [
    {
      path: '/',
      name: 'Login',
      meta: { breadcrumb: true },
      component: Login,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      meta: { breadcrumb: true },
      component: Dashboard,
    },
  ],
});
```
