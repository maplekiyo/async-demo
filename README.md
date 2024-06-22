Sequence Diagram

![sequence-diagram](https://github.com/maplekiyo/async-demo/assets/40432693/ba8ed0db-4f81-4bd1-9618-56f4a1624707)

Remember, the key to asynchronous programming is the async and await keywords.
The async keyword enables the await keyword, and await is where the magic happens.
When the code hits the await keyword, control is returned back to the caller until the awaited task completes.
This is what prevents the application from hanging.
