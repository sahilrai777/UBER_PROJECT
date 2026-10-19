# User registration endpoint

## Endpoint

`POST /users/register`

The application mounts the user router at `/users`, and the router's registration route is intended to be `/register`. Therefore, the mounted URL is `/users/register` (plural). The code does not currently mount `/user/register`.

This endpoint accepts user details, hashes the password, creates a user, and returns an authentication token with the created user.

## Request

Send a JSON body with `Content-Type: application/json`:

```json
{
  "fullname": {
    "firstname": "Taylor",
    "lastname": "Morgan"
  },
  "email": "taylor@example.com",
  "password": "secure-pass"
}
```

| Field                | Required | Requirements                       |
| -------------------- | -------- | ---------------------------------- |
| `fullname.firstname` | Yes      | At least 3 characters              |
| `fullname.lastname`  | No       | If provided, at least 3 characters |
| `email`              | Yes      | Must be a valid email address      |
| `password`           | Yes      | At least 6 characters              |

The password is hashed before it is passed to user creation.

## Responses

### `201 Created`

Registration succeeded. The response contains an authentication token and the created user:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "671a2b3c4d5e6f708192a3b4",
    "fullname": {
      "firstname": "Taylor",
      "lastname": "Morgan"
    },
    "email": "taylor@example.com"
  }
}
```

The token and ID above are examples. The `user` value is the created user document; its exact serialized fields depend on the model and runtime data.

### `400 Bad Request`

One or more request fields fail validation. The response contains the validation errors:

```json
{
  "errors": [
    {
      "msg": "Invalid Email"
    }
  ]
}
```

### `500 Internal Server Error`

An unexpected error during user creation or token generation is passed to Express error handling. The exact response body depends on the configured error handler.

## Implementation note

The current route and controller code do not consistently use the request field casing: validation refers to `fullname.firstname`, while the controller reads `fullname.firstName`. The route file also contains registration syntax/import issues. As a result, this describes the intended request contract; the implementation needs those inconsistencies corrected before the endpoint can be relied on at runtime.
