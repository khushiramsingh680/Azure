+++
title = "Part 09"

+++

# Azure Storage Overview

Azure Storage is a highly scalable, durable cloud solution, supporting different data types and use cases, such as analytics, data lakes, and static web content hosting.

## Azure Storage Services

### 1. Blob Storage
Stores unstructured data like images, videos, and backups.
- **Blob Types**:
  - **Block Blobs**: Stores large binary data.
  - **Append Blobs**: Optimized for appending data, ideal for logging.
  - **Page Blobs**: Primarily used for Azure VM storage disks.
- **Access Tiers**:
  - **Hot**: Frequently accessed data.
  - **Cool**: Infrequently accessed data, stored at a lower cost.
  - **Archive**: Rarely accessed data stored at the lowest cost for long-term storage.

### 2. Azure Files
Managed file shares that can be accessed via SMB or NFS protocols.
- **Features**:
  - Mountable on both Windows and Linux systems.
  - Supports hybrid access by mounting shares on-premises.
  - Integrates with Azure AD for advanced access control.

### 3. Queue Storage
Provides message queuing for reliable communication between application components.
- **Features**:
  - Decouples distributed applications.
  - Offers ordered message processing and retries for durability.

### 4. Table Storage
A NoSQL key-value store optimized for large volumes of structured data.
- **Features**:
  - Highly scalable and designed for rapid access.
  - Suitable for non-relational data storage in various applications.

### 5. Disk Storage
Persistent storage for Azure Virtual Machines, available as **Standard HDD**, **Standard SSD**, and **Premium SSD**.
- **Managed Disks**: Automatically manages storage account allocation and is highly resilient to hardware failures.

## Redundancy Options

Azure Storage offers multiple redundancy levels to protect data against failures:

- **LRS (Locally Redundant Storage)**:
  - Stores three copies of data within a single data center.
  - Low-cost option, but data is not replicated outside the local region.

- **ZRS (Zone-Redundant Storage)**:
  - Replicates data across multiple availability zones within the same region.
  - Provides higher availability by protecting against data center failures.

- **GRS (Geo-Redundant Storage)**:
  - Stores three copies of data in the primary region and three more in a secondary region.
  - Ensures data is available even in the event of a regional outage, but the secondary region is read-only until failover.

- **RA-GRS (Read-Access Geo-Redundant Storage)**:
  - Similar to GRS but allows read access to data in the secondary region.
  - Useful for applications that require high availability during regional outages.

## Security and Access Control

- **Shared Access Signatures (SAS)**: Temporarily grant permissions to resources without sharing account keys.
- **Azure Active Directory (AD)**: Enables identity-based access controls for enhanced security.
- **Encryption**: Data is encrypted at rest by default and can be encrypted during transit.

## Pricing

Pricing depends on factors like storage capacity, redundancy options (LRS, ZRS, GRS, RA-GRS), access tiers (Hot, Cool, Archive), and data transfer volumes.

For more details, refer to the [Azure Storage Documentation](https://docs.microsoft.com/en-us/azure/storage/).








































































































































