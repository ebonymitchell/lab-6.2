## Critical Thinking Questions

### 1. Why is it important to handle errors for each individual API call rather than just at the end of the promise chain?

Handling errors for each API call makes it easier to figure out exactly what went wrong. It also allows the rest of the application to keep working if one request fails. For example, in this project, the product reviews failed, but the sales report still loaded. One failed request shouldn't have to stop everything else.

### 2. How does using custom error classes improve debugging and error identification?

Custom error classes make it easier to tell what kind of error we're dealing with. Instead of getting a generic error message, we can see whether it's a `NetworkError` or a `DataError`. That helps narrow down the problem so we're not wasting time trying to figure out where to look.

### 3. When might a retry mechanism be more effective than an immediate failure response?

A retry mechanism would be useful when the problem is temporary, like a slow connection or a server that's having issues. Sometimes a request might fail the first time but work just fine if we try it again. It makes sense to give it a few attempts before giving up, but we also don't want the application stuck retrying something that's never going to work.