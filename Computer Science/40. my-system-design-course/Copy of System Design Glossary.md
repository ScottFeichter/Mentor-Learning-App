### **Does and don’ts of sys design interviews:** \- often start with a big prompt of for example let’s design reddit 	ask clarifying questions 		what are the constraints? 		traffic level?

		tradeoffs?  
		what are the mvps?  
how does design impact users?  
see the overview sheet

prioritize simplicity

### 

### 

### **System Design Key Terms Glossary**

1. **Scalability**: The ability of a system to handle increased load by adding resources (e.g., servers). It can be **vertical** (upgrading a server’s capacity) or **horizontal** (adding more servers).

2. **Latency**: The time it takes for a request to travel from the client to the server and back. It’s critical for real-time systems where responsiveness matters.

3. **Throughput**: The number of operations a system can handle in a given time period (e.g., requests per second). High throughput is essential for scalable systems.

4. **TPS (Transactions Per Second):** a metric used to measure the number of operations a system can handle in one second. It’s commonly used to assess the performance and throughput of systems, especially databases, payment gateways, and other transactional services. aka rps aka qps

   TPS \= Num Transactions / TIME (in seconds)

   600 transactions in 10 seconds 

   600 / 10 \= 60 TPS

   may have to do a conversion to get the inputs for example screen views per month calculate them to per second

   then how much TPS can a server handle

   usually in the range of 500 TPS \- 30k TPS probably about 8k TPS is good to go with

   ask the interviewer for clarification on this

   assuming 500 TPS server 

   if we need 8102 TPS then divide by server capacity 

   8102 / 500 \= 16.2 servers needed (17)

   then for db server instance

   1 db instance can handle 500 TPS out of the box for postgres up to 50k TPS on beefy hardware for reads and a little lower for writes

   then run similar calculation for reads and for writes per server or copies/shards

   

   different TPS for different rdbms so account for this also

   for example dynamo db might have more throughput than postgresql

5. **Load Balancer**: A component that distributes incoming traffic across multiple servers to ensure no single server is overwhelmed, increasing availability and reliability.

6. **Caching**: Storing copies of data in a temporary storage layer to reduce load on the database and improve access times. **Cache eviction policies** include LRU (Least Recently Used), LFU (Least Frequently Used), and FIFO (First In First Out).

7. **Database Partitioning**: Dividing a database into smaller, more manageable parts called partitions to improve performance and scalability. This can be horizontal (sharding) or vertical partitioning.

8. **Replication**: Creating copies of data across different servers or regions to ensure high availability and fault tolerance. **Leader-Follower replication** and **Leader-Leader replication** are common strategies.

9. **CAP Theorem**: States that in a distributed data system, you can only guarantee two out of the three: **Consistency**, **Availability**, and **Partition Tolerance**.

10. **Eventual Consistency**: A consistency model used in distributed systems where updates to a database will propagate and become consistent over time, but not necessarily immediately.

11. **Message Queue**: A service that allows communication between different parts of a system asynchronously. It ensures that messages are stored temporarily until the receiving component is ready to process them.

12. **Pub/Sub (Publish/Subscribe)**: A messaging pattern where a sender (publisher) sends messages to a topic, and multiple receivers (subscribers) receive messages based on their subscription.

13. **Microservices**: An architectural style where a system is composed of loosely coupled, independently deployable services. Each microservice focuses on a specific function of the overall system.

14. **Monolith**: A software architecture where the entire application is built as a single unit, making scaling and maintenance more challenging compared to microservices.

15. **API (Application Programming Interface)**: A set of rules that allows different software applications to communicate with each other. **REST** and **GraphQL** are common API design patterns.

16. **Sharding**: A type of database partitioning where data is split into shards, each stored in a separate database or server, improving performance and allowing horizontal scaling.

17. **Fault Tolerance**: The ability of a system to continue operating properly in the event of failures. This can be achieved through techniques like **replication**, **failover**, and redundancy.

18. **Consistency**: In system design, it refers to ensuring that all nodes in a distributed system reflect the same data at any given time.

19. **Availability**: The guarantee that every request to a system will receive a response, even if the response is an error. Highly available systems minimize downtime.

20. **Circuit Breaker**: A design pattern used to detect failures and encapsulate the logic of preventing an application from trying to execute operations that are likely to fail.

21. **Idempotency**: An operation that can be repeated without changing the result beyond the initial application (e.g., making the same API request multiple times will yield the same result).

22. **Indexing**: A technique used to speed up the retrieval of data in a database by creating an index of key values. It is similar to an index in a book for quick lookup.

23. **Load Shedding**: A strategy for gracefully reducing the load on a system by dropping some requests when a system is overloaded to prevent a total crash.

24. **Rate Limiting**: A technique used to limit the number of requests a client can make to a system over a specified time period, protecting systems from being overwhelmed.

25. **Data Consistency Models**: Various models of how data is synchronized across a distributed system, ranging from **strong consistency** (data is synchronized instantly) to **eventual consistency**.

26. **Elasticity**: The ability of a system to automatically adjust its resources based on the current load. Cloud-based systems often offer this feature for dynamic scaling.

27. **Performance**: Optimizing the speed and responsiveness of the system under various workloads.

28. **High-level architecture**: Defining the major components, their interactions, and the technologies used.

29. **Security**: Implementing measures to protect data and ensure secure access.

30. **Maintainability**: Ensuring the system can be easily maintained, debugged, and upgraded over time.

31. **CRDTs (Conflict-Free Replicated Data Types):** CRDTs (Conflict-Free Replicated Data Types) are a set of data structures designed to enable conflict-free, concurrent updates to a distributed system. They allow for data consistency across multiple replicas or nodes without needing complex locking mechanisms or coordination protocols, like two-phase commit.

32. **Celebrity/Hot Partition Problem:** When a small set of keys, in a distributed system, receives much more traffic than others, leading to performance bottlenecks. This occurs frequently with range-based partitioning.

33. **Scatter-Gather**: A pattern where requests are split across multiple nodes and the results are aggregated. It’s useful for distributed querying for things like searching & data aggregation. Map Reduce is an example of a concrete implementation of the scatter-gather pattern.

34. **Cassandra:**

35. **DynamoDB:**