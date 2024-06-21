## A little note about `fetch`

- Server side errors don't trigger the catch block,
- Since the request did complete with some response, albeit without a the desired one.
  - `Solution`: throw a new Error manually by checking the **response.ok** field.
