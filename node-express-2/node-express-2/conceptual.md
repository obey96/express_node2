### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  is a compact, URL-safe token commoly used to securely transmit
  information between parties as a JSON object.

- What is the signature portion of the JWT?  What does it do?
  Is the final component in the token structure and plays a critical
  role in verifying the integrity and authenticity of the token.

  It does: Integrity Check, and Authentication.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes, if a JWT is intercepted, the attacker can see the contents of the header and payload portions, as they are encoded but not encrypted.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  User login and token creation, Client-side storage of the token, Authorization using the token, token validation on the server, access granted or denied.

- Compare and contrast unit, integration and end-to-end tests.
  1. Unit Tests
What: Test individual parts of code (like functions) by themselves.
Speed: Fastest.
Focus: Make sure each piece works on its own.
Example: Checking if a calculateSum function returns the correct sum.
2. Integration Tests
What: Test how multiple parts work together.
Speed: Slower than unit tests.
Focus: Make sure components interact correctly.
Example: Checking if a data retrieval function properly connects to a database.
3. End-to-End (E2E) Tests
What: Test full workflows from the user’s perspective.
Speed: Slowest.
Focus: Make sure the entire app works as expected.
Example: Testing a login process from entering credentials to reaching the dashboard.

- What is a mock? What are some things you would mock?
  A mock is a simulated object or fuction used in testing to imitate the behavior of real components without relying on them directly.
  You can: test components independently, avoid  relying on external systems, and control the output of dependencies, making tests easier.

- What is continuous integration?
  is a software development practice where code changes are automatically
  tested and integrated into a shared codebase frequently. 

- What is an environment variable and what are they used for?
  is a dynamic value stored outside of the application's code, often set
  at the operating system level, that can be accessed by the application at runtime. Use for: storing secrets, configuring environments, settings
  paths, and features toggles.

- What is TDD? What are some benefits and drawbacks?
  is a software development approach in which tests are written before
  the actual code. Benefits: Improved code quality, early bug detection,
  documentation, and confidence in refactoring.

- What is the value of using JSONSchema for validation?
  is a powerful tool used for validating the structure of JSON data. It reduces the risk of errors and miscommunication, especially in collaborative and API-driven environments.

- What are some ways to decide which code to test?
  User input and data handling, regressions and bug fix, and critical
  functionality.

- What does `RETURNING` do in SQL? When would you use it?
  is used to return specific columns from rows that have been
  affected by and insert, update, and delete statement.
  Its benefits: efficiency, atomicity, convenience.

- What are some differences between Web Sockets and HTTP?
  websockets provide a persistent, bidirectional connection between clients and servers, allowing for real-time communication.
  HTTP follows a stateless request-response model, where each interaction
  is independent, resulting in higher overhead and latency.

- Did you prefer using Flask over Express? Why or why not (there is no right
flaks
  answer here --- we want to see how you think about technology)?
I found it more simple to use to build web application and more foward than express.