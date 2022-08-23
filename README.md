# Show the user list from the api using axios library.
1. Install the below axios package to make the api call
    > npm i axios
2. Following open API is being used to fetch the user list.
    > https://jsonplaceholder.typicode.com/user
3. Setup the base api for the common changes.
    > src/utility/services/base.ts
4. Get API service call.
    > src/utility/services/user.ts
5. User Hook: src/hook/user.ts
    > This is the user hook to load the user data by making api call. It handle errors using try, catch and finally block. We can reuse this hook anywhere in the application whenever we need user list.
# Please refer the attached information.txt and APP-DEMO file for more information.
