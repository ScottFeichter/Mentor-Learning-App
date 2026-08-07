# [https://word2md.com/](https://word2md.com/)

The AWS core service category Storage includes:

**Explain Amazon S3 \- Simple Storage Service**

Persistent object-level storage such that each file is an object and available through a URL.

* Data as objects within resources called buckets.  
  * Path style endpoint  
  * Virtual hosted style endpoint  
* Objects can be up to 5 TB in size.  
* Data is redundantly stored in the Region. 

**Explain Amazon EBS \- Elastic Block Storage**

Persistent block-level storage mountable as a device to an Amazon EC2 Instance. 

* Must be in same AZ as the instance  
* Only one instance at a time can mount an EBS volume  
* Snapshots \- point in time record allowing recreation of volume at any time  
* Encryption  
* Elastic

**Explain Amazon EFS \- Elastic File System**

Shared file system that multiple EC2 Instances can mount at the same time. 

On demand scaling. 

**Explain Amazon S3 Glacier**

Long term, low cost, higher latency (than S3). 

* Archive \- anything you store in Glacier  
* Vault \- container for storing archives  
* Vault Access Policy \- Determine access permissions  
* Retrieval Options:  
  * Expedited \- 1 to 5 minutes  
  * Standard 3 to 5 hours  
  * Bulk 5 to 12 hours

# 

**Amazon DBS : Relational Database Service**

\- SQL

**Amazon DynamoDB**

\- NoSQL

**Amazon Redshift**

\- SQL

**Amazon Aurora**

\- SQL