+++
title = "Part 10"

+++
---
## Azure Backup

Azure Backup is a cloud-based data protection solution provided by Microsoft. It is designed to back up and restore data from the Microsoft Azure cloud, ensuring business continuity in case of data loss or disasters. Azure Backup supports a wide range of scenarios, including on-premises systems, Azure VMs, SQL databases, file shares, and more.

### Key Features
- **Centralized Backup Management**: Manage backups for on-premises and Azure resources from the Azure portal.
- **Data Security**: Encryption in transit and at rest, with the option to use your own keys.
- **Long-Term Retention**: Options for long-term data retention to meet regulatory requirements.
- **Cost-Effective**: Pay-as-you-go model eliminates the need for on-premises backup infrastructure.
- **Disaster Recovery Integration**: Seamless integration with Azure Site Recovery for disaster recovery.
- **Application-Aware Backups**: Supports backups for critical workloads like SQL Server, Exchange, and SharePoint.
- **Incremental Backups**: Saves storage space and reduces bandwidth consumption.

### Common Backup Scenarios
1. **Azure Virtual Machines**  
   Back up Azure VMs (Windows and Linux) using the Azure Backup service.

2. **On-Premises Servers**  
   Use the Azure Backup Agent or Azure Backup Server to back up files, folders, and applications from on-premises servers.

3. **Azure Files**  
   Backup and restore Azure file shares with point-in-time recovery.

4. **SQL Server Backups**  
   Backup SQL databases hosted on Azure.

### Benefits
- Simplified backup management.
- Scalability to meet growing data needs.
- High availability and reliability.
- Compliance with industry regulations.

For more information, visit the [Azure Backup documentation](https://learn.microsoft.com/en-us/azure/backup/).

## What Can Be Backed Up with Azure Backup?

Azure Backup supports a wide variety of backup scenarios for both on-premises and cloud resources. Below is a detailed list of what you can back up:

### On-Premises
- **Files, Folders, and System State**:  
  Use the Microsoft Azure Recovery Services (MARS) agent.
- **On-Premises VMs (Hyper-V and VMware)**:  
  Protect these workloads using Data Protection Manager (DPM) or Azure Backup Server (MABS).
- **Other On-Premises Workloads**:  
  Back up applications like SQL Server, Exchange, and SharePoint using DPM or MABS.

### Azure Virtual Machines
- **Entire VMs**:  
  Back up Windows/Linux VMs using Azure Backup extensions.
- **Files, Folders, and System State**:  
  Use the MARS agent for more granular backup options.

### Azure Managed Disks
- Back up **Azure Managed Disks** directly.

### Azure File Shares
- Back up **Azure File Shares** to a storage account.

### SQL Server in Azure VMs
- Back up **SQL Server Databases** running on Azure Virtual Machines.

### SAP HANA Databases in Azure VMs
- Back up **SAP HANA Databases** running on Azure VMs.

### Azure Database for PostgreSQL
- Back up **Azure Database for PostgreSQL Servers** with retention for up to 10 years.

### Azure Blobs
- Operational backups for **Azure Blobs** provide point-in-time recovery.

### Azure Database for PostgreSQL Flexible Server
- Back up **Azure Database for PostgreSQL Flexible Server** (currently in preview).

### Azure Kubernetes Service (AKS)
- Back up workloads and configurations in **Azure Kubernetes Service (AKS)** clusters.

For more information, visit the [Azure Backup documentation](https://learn.microsoft.com/en-us/azure/backup/).
![backup](/images/backup01.png)


## MARS and MABS in Azure Backup

Azure Backup provides different tools for managing on-premises backups, tailored to various use cases. Two commonly used tools are **MARS** and **MABS**.

### **Microsoft Azure Recovery Services (MARS) Agent**
The MARS agent is designed for simple backup scenarios, specifically for protecting files, folders, and system states on individual machines.

### **Features of MARS**
- **Supported Workloads**: Files, folders, and system state.
- **Backup Target**: Azure Recovery Services Vault.
- **Supported Systems**: Windows Server (various versions) and Windows clients (e.g., Windows 10, 11).
- **Granularity**: File and folder level backup.
- **Usage**:
  - Ideal for small-scale backup needs or individual servers.
  - No dependency on on-premises infrastructure like DPM or MABS.

---

### **Microsoft Azure Backup Server (MABS)**
MABS is a more robust solution for larger-scale backup needs. It provides enterprise-grade protection for a variety of on-premises workloads.

### **Features of MABS**
- **Supported Workloads**:
  - Files and folders.
  - On-premises VMs (Hyper-V and VMware).
  - Application-aware backups for workloads like SQL Server, Exchange, and SharePoint.
- **Backup Target**:
  - Azure Recovery Services Vault for cloud backup.
  - Local disk for on-premises backup.
- **System Requirements**:
  - Requires a dedicated Windows Server to run MABS.
- **Granularity**:
  - Application and VM-level protection in addition to file-level backup.
- **Usage**:
  - Suitable for larger environments with diverse workloads.
  - Acts as a bridge between on-premises workloads and Azure for backup.

---

### **Comparison: MARS vs. MABS**
| Feature                        | MARS                              | MABS                              |
|--------------------------------|------------------------------------|------------------------------------|
| **Workloads Supported**        | Files, folders, system state      | Files, folders, VMs, applications |
| **Backup Target**              | Azure Recovery Services Vault     | Azure Vault + Local Disk          |
| **Granularity**                | File-level backup                 | Application and VM-level backup   |
| **Ideal Use Case**             | Individual machines               | Enterprise environments           |
| **Infrastructure Requirements**| No dedicated infrastructure       | Requires dedicated server          |

For more details, visit the [Azure Backup documentation](https://learn.microsoft.com/en-us/azure/backup/).


## Recovery Services vault
- Create Recovery service 
![backup05](/images/backup05.png)

- Configure Redundancy
![backup05](/images/backup06.png)

- Take Backup
![backup](/images/backup10.png)

![backup](/images/backup11.png)
## Restore Options
![backup](/images/backup12.png)
- Check backed up items

| **Restore Option**     | **Details**                                                                                                                                                                                                                                             |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Create a new VM**     | Quickly creates and gets a basic VM up and running from a restore point.<br><br>- Specify a name for the VM and select the resource group and virtual network (VNet) in which it will be placed.<br>- The new VM must be created in the same region as the source VM.<br>- If a VM restore fails (e.g., due to unavailable Azure VM SKU), disks are restored in the specified resource group. |
| **Restore Disk**        | Restores a VM disk, which can then be used to create a new VM.<br><br>- Azure Backup provides a template to help customize and create a VM.<br>- The restore job generates a downloadable template for specifying custom VM settings.<br>- Disks are copied to the specified Resource Group.<br>- Disks can be attached to an existing VM or used to create a new VM via PowerShell.<br>- Useful for customizing or adding new configurations.        |
| **Replace Existing**    | Restores a disk to replace a disk on an existing VM.<br><br>- The current VM must exist.<br>- A snapshot of the VM is taken before replacement and retained in the vault.<br>- Original disks are retained for manual deletion if needed.<br>- Supported for unencrypted managed VMs with linked resources (e.g., managed identities).<br>- Not supported for classic, unmanaged, or generalized VMs. |
| **Cross Region Restore**| Restores VMs or disks in a secondary (paired) Azure region.<br><br>- Vault-tier backups are replicated to the secondary region (snapshots are not replicated).<br>- Supports "Create a VM" and "Restore Disks" options.<br>- Not supported for the "Replace Existing" option.                                                          |
| **Cross Subscription Restore** | Restores Azure VMs or disks to a different subscription within the same tenant.<br><br>- Enabled via the Cross Subscription Restore property in the Recovery Services vault.<br>- Supported only for managed VMs.<br>- Not supported for snapshot-tier recovery points or unmanaged/ADE-encrypted VMs.                                                       |
| **Cross Zonal Restore** | Restores VMs or disks to different Azure zones.<br><br>- Restores logical zones as per the Azure subscription.<br>- Supported for managed VMs in vaults with Zonal-Redundant Storage (ZRS) or Cross Region Restore (CRR).<br>- Not supported for snapshot-tier restore points or encrypted VMs.                                            |



## ASR
![nackup](/images/backup13.png)

[Support os](https://learn.microsoft.com/en-us/azure/site-recovery/azure-to-azure-support-matrix#replicated-machine-operating-systems)


## Business Continuity Center
![bcc](/images/bcc.png)


### Learning Objectives

- **Creating Recovery Service Vault**  
  Learn how to set up a Recovery Services Vault, a foundational step for disaster recovery in Azure.

- **Replicate Azure VM to Secondary Region**  
  Configure Azure VMs to replicate data and services to a secondary region for high availability.

- **Test Failover**  
  Simulate a failover scenario to validate the disaster recovery setup without impacting production.

- **Planned Failover**  
  Execute a planned failover for maintenance or other needs while minimizing disruptions.

- **Failback**  
  Return operations to the primary region after resolving the original issue or completing planned maintenance.














































































































































---
title: Azure Cloud Networking  
description: Azure Cloud
weight: 3
icon:  fab fa-azure

---

## 1. Virtual Network (VNet)
- **Azure Virtual Network (VNet)** is the fundamental building block for private networks in Azure.
- VNets enable Azure resources, like Virtual Machines (VMs), to securely communicate with each other, the internet, and on-premises networks.
- VNets can be segmented into **subnets** for better management and security.

### Key Features:
- **Isolation and segmentation**: You can isolate VNets from each other.
- **Subnets**: Allow partitioning of a VNet into smaller network segments.
- **Network Security Groups (NSGs)**: Control inbound and outbound traffic rules.
- **Route Tables**: Direct network traffic.

## 2. Subnets
- **Subnets** allow you to divide your VNet into smaller, isolated sections.
- Each subnet can have its own Network Security Group (NSG) to control traffic.
- Subnets also allow for organizing resources into distinct groups based on service types.

## 3. Network Security Group (NSG)
- NSGs are a set of firewall rules that control traffic to and from VMs.
- NSGs can be applied at the subnet level or directly to the VM's network interface.

### Rules:
- **Inbound rules**: Define the traffic allowed to the VM.
- **Outbound rules**: Define the traffic allowed from the VM.

## 4. Virtual Private Network (VPN)
- Azure provides **VPN Gateway** for establishing secure connections between Azure and on-premises networks, or other Azure VNets.
- **Site-to-Site VPN**: Connect on-premises networks to Azure VNets.
- **Point-to-Site VPN**: Enable individual clients to connect to the Azure VNet.

## 5. ExpressRoute
- **ExpressRoute** allows for private, dedicated, high-throughput connections between on-premises networks and Azure data centers.
- Avoids using the public internet, offering greater reliability, faster speeds, and lower latencies.

## 6. Azure Load Balancer
- Distributes inbound traffic across multiple VMs, ensuring high availability.
- Supports both **public** and **internal** load balancers.
- Can be used for balancing traffic in multi-tier applications.

## 7. Azure Application Gateway
- A layer-7 load balancer that provides application-level routing decisions.
- Supports features like **SSL termination**, **cookie-based session affinity**, and **Web Application Firewall (WAF)**.

## 8. Azure Traffic Manager
- DNS-based traffic load balancer.
- Directs incoming traffic to the most appropriate endpoint (based on performance, priority, or geographic location).

## 9. Azure Firewall
- Managed, cloud-based network security service.
- Protects Azure resources with high availability and scalability.
- Offers features like **application rules**, **network rules**, and **threat intelligence**.

## 10. Azure DNS
- **Azure DNS** hosts your DNS domains and manages your DNS records.
- Allows for easy management of your domain names and supports both public and private DNS zones.

## 11. Virtual Network Peering
- Allows linking VNets within the same region or across regions, enabling resources in different VNets to communicate with each other.
- Provides low-latency and high-bandwidth connections between VNets.

## 12. Azure Bastion
- Provides secure and seamless RDP/SSH access to your VMs without exposing them to the public internet.
- **Azure Bastion** is deployed inside your VNet.

## 13. Network Watcher
- **Network Watcher** is a tool for monitoring, diagnosing, and gaining insights into your Azure network.
- It provides various capabilities like **packet capture**, **connection troubleshooting**, and **VPN diagnostics**.

---

### Networking Diagram Example

```plaintext
 +------------+       +-----------+      +-------------------+
 |            |       |           |      |                   |
 |  On-prem   |<----->|  VPN GW    |<---->|  Azure VNet       |
 |  Network   |       |           |      |                   |
 +------------+       +-----------+      +-------------------+
```




# Steps to Create an Azure Virtual Network (VNet)

## Step 1: Sign in to the Azure Portal
1. Open your web browser and go to the [Azure Portal](https://portal.azure.com).
2. Sign in with your Azure account credentials.

## Step 2: Create a Virtual Network
1. In the Azure Portal, on the left-hand menu, select **Create a resource**.
2. In the search bar, type **Virtual Network** and select it from the results.
3. Click **Create**.

### Configure Virtual Network
- **Subscription**: Select the Azure subscription to create the VNet.
- **Resource Group**: Choose an existing resource group or create a new one.
- **Name**: Enter a name for your Virtual Network (e.g., `MyVNet`).
- **Region**: Select the Azure region where you want to deploy the VNet.

## Step 3: Configure Address Space
1. Under the **IP Addresses** tab, you need to configure the address space for the VNet.
2. Enter an address space in **CIDR** notation (e.g., `10.0.0.0/16`).
    - This range must be unique within the network and large enough to contain all your subnets.

## Step 4: Add Subnets
1. In the same **IP Addresses** section, scroll down to the **Subnets**.
2. Click **Add Subnet**.
    - **Name**: Give a name to your subnet (e.g., `FrontEndSubnet`).
    - **Subnet Address Range**: Enter a subnet address range (e.g., `10.0.1.0/24`).
3. Click **Add** to add the subnet.

    *(Repeat this step if you want to add more subnets.)*

## Step 5: Configure Security (Optional)
1. In the **Security** tab, you can enable security features:
   - **BastionHost**: Secure RDP/SSH access to VMs without public IP.
   - **Firewall**: Add Azure Firewall to control traffic to/from the VNet.
   - **DDoS protection**: Enable Standard DDoS protection for better security.

2. Configure these options as required and proceed to the next step.

## Step 6: Review and Create
1. Review all the settings and ensure that everything is configured correctly.
2. Click **Review + Create**.
3. Once validation is passed, click **Create** to deploy the VNet.

## Step 7: Verify the Virtual Network
1. After the deployment is complete, navigate to **Resource Groups** and select the resource group where the VNet was created.
2. Click on the **Virtual Network** to see the details of the newly created VNet.
3. Verify the **Address Space**, **Subnets**, and other settings to ensure they are correctly configured.

---

## Additional Configurations

### Step 8: Add Network Security Groups (NSGs)
1. In the VNet page, select **Subnets**.
2. Click on the desired subnet to attach a **Network Security Group (NSG)**.
3. Select an existing NSG or create a new one to define inbound/outbound rules.

### Step 9: Enable VNet Peering (Optional)
1. If you want to connect this VNet to another VNet, go to the **Peerings** section.
2. Click **Add Peering**.
    - **Name**: Enter a name for the peering connection.
    - **Virtual Network Deployment Model**: Select the deployment model (usually Resource Manager).
    - **Peering Status**: Choose the desired configuration (Allow/Block traffic).
3. Click **Add** to establish peering.

---

## Example VNet Configuration

```plaintext
VNet: MyVNet
Address Space: 10.0.0.0/16

Subnets:
  - FrontEndSubnet: 10.0.1.0/24
  - BackEndSubnet: 10.0.2.0/24

NSGs:
  - FrontEndNSG: Applied to FrontEndSubnet
  - BackEndNSG: Applied to BackEndSubnet
```

# Azure VNet Peering Examples

## Example 1: Peering Between Two VNets in the Same Region

### Overview
- **VNet1** and **VNet2** are located in the same region.
- The goal is to enable communication between resources in both VNets via VNet peering.

### Prerequisites
- **VNet1** Address Space: `10.0.0.0/16`
- **VNet2** Address Space: `10.1.0.0/16`
- Both VNets should not have overlapping address ranges.

### Steps to Peer VNet1 with VNet2

1. **Go to VNet1**:
   - In the Azure Portal, navigate to **Virtual Networks** and select **VNet1**.
   - In the left-hand menu, select **Peerings**.
   - Click **Add Peering**.

2. **Configure Peering from VNet1 to VNet2**:
   - **Name**: `VNet1-to-VNet2`
   - **Peering Remote Virtual Network**: Select **VNet2**.
   - **Traffic to Remote Network**: Select **Allow traffic** from VNet1 to VNet2.
   - **Traffic Forwarding**: Enable **Allow Gateway Transit** (if using one VNet’s gateway to access the internet).
   - **Allow Virtual Network Access**: Yes.
   - Click **Add**.

3. **Go to VNet2**:
   - In the Azure Portal, navigate to **Virtual Networks** and select **VNet2**.
   - In the left-hand menu, select **Peerings**.
   - Click **Add Peering**.

4. **Configure Peering from VNet2 to VNet1**:
   - **Name**: `VNet2-to-VNet1`
   - **Peering Remote Virtual Network**: Select **VNet1**.
   - **Traffic to Remote Network**: Select **Allow traffic** from VNet2 to VNet1.
   - **Allow Virtual Network Access**: Yes.
   - Click **Add**.

---

## Example 2: Peering Between Two VNets in Different Regions (Global VNet Peering)

### Overview
- **VNet1** is in the East US region.
- **VNet2** is in the West Europe region.
- We will establish **Global VNet Peering** between these two VNets.

### Prerequisites
- **VNet1** Address Space: `10.0.0.0/16` (East US)
- **VNet2** Address Space: `10.2.0.0/16` (West Europe)
- Both VNets must not have overlapping IP address ranges.

### Steps to Peer VNet1 (East US) with VNet2 (West Europe)

1. **Go to VNet1 (East US)**:
   - In the Azure Portal, navigate to **Virtual Networks** and select **VNet1** (in the East US region).
   - In the left-hand menu, select **Peerings**.
   - Click **Add Peering**.

2. **Configure Peering from VNet1 to VNet2**:
   - **Name**: `VNet1-to-VNet2`
   - **Peering Remote Virtual Network**: Select **VNet2** (in the West Europe region).
   - **Traffic to Remote Network**: Allow traffic from VNet1 to VNet2.
   - **Allow Gateway Transit**: Enable this if needed (for shared VPN gateways).
   - Click **Add**.

3. **Go to VNet2 (West Europe)**:
   - In the Azure Portal, navigate to **Virtual Networks** and select **VNet2** (in the West Europe region).
   - In the left-hand menu, select **Peerings**.
   - Click **Add Peering**.

4. **Configure Peering from VNet2 to VNet1**:
   - **Name**: `VNet2-to-VNet1`
   - **Peering Remote Virtual Network**: Select **VNet1** (in the East US region).
   - **Traffic to Remote Network**: Allow traffic from VNet2 to VNet1.
   - **Allow Gateway Transit**: Enable this if needed.
   - Click **Add**.

---

## Example 3: VNet Peering with Different Subscriptions

### Overview
- **VNet1** and **VNet2** are located in different subscriptions.
- The goal is to peer these VNets for communication.

### Prerequisites
- **VNet1** Address Space: `10.0.0.0/16`
- **VNet2** Address Space: `10.3.0.0/16`
- Both VNets must belong to separate Azure subscriptions, but they must not have overlapping address ranges.
- Ensure the **subscriptions** are associated with the same Azure Active Directory (AAD) tenant.

### Steps to Peer VNet1 with VNet2 Across Subscriptions

1. **Go to VNet1 (Subscription A)**:
   - Navigate to **Virtual Networks** and select **VNet1**.
   - In the left-hand menu, select **Peerings**.
   - Click **Add Peering**.

2. **Configure Peering from VNet1 to VNet2 (in a different subscription)**:
   - **Name**: `VNet1-to-VNet2`
   - **Remote Virtual Network**: Use the **Resource ID** of VNet2.
     - To get the resource ID of VNet2, go to VNet2 in **Subscription B**, click on **Properties**, and copy the **Resource ID**.
   - **Allow Virtual Network Access**: Yes.
   - **Traffic to Remote Network**: Allow traffic from VNet1 to VNet2.
   - Click **Add**.

3. **Go to VNet2 (Subscription B)**:
   - Navigate to **Virtual Networks** and select **VNet2**.
   - In the left-hand menu, select **Peerings**.
   - Click **Add Peering**.

4. **Configure Peering from VNet2 to VNet1 (in a different subscription)**:
   - **Name**: `VNet2-to-VNet1`
   - **Remote Virtual Network**: Use the **Resource ID** of VNet1 (from Subscription A).
   - **Allow Virtual Network Access**: Yes.
   - **Traffic to Remote Network**: Allow traffic from VNet2 to VNet1.
   - Click **Add**.

---

## VNet Peering Considerations:
- **No Overlapping IP Address Ranges**: VNets being peered cannot have overlapping address spaces.
- **Data Transfer Costs**: Data transferred between peered VNets is charged, especially across regions (Global Peering).
- **Gateway Transit**: If you want one VNet to use another VNet’s VPN gateway, enable **Gateway Transit** during peering setup.
- **Security**: Use **Network Security Groups (NSGs)** to control traffic between peered VNets.

---

### Reference Links:
- [Azure VNet Peering](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview)
- [Global VNet Peering](https://learn.microsoft.com/en-us/azure/virtual-network/global-vnet-peering)


# Azure Network Watcher

## Overview
**Azure Network Watcher** is a regional service that provides tools to monitor, diagnose, and gain insights into your Azure Virtual Network (VNet). It helps troubleshoot network connectivity issues, analyze network performance, and understand network traffic in Azure.

---

## Key Features of Azure Network Watcher

1. **Connection Monitor**: Monitor the connectivity status between an Azure virtual machine and an endpoint.
2. **IP Flow Verify**: Check if traffic is allowed or denied to or from a virtual machine, based on the security group rules.
3. **Network Performance Monitor**: Measure the performance between VNets, regions, or the on-premises environment.
4. **Topology**: Visualize the network topology of resources within a VNet.
5. **Next Hop**: Analyze the next hop for network traffic from a virtual machine.
6. **Security Group View**: List the network security group (NSG) rules associated with a virtual machine.
7. **Packet Capture**: Capture packets to and from a virtual machine for analysis.
8. **Diagnostic Logs**: View diagnostic logs for network resources like NSGs, Load Balancers, and Gateways.
9. **Connection Troubleshoot**: Test the connection between a source and destination to identify any bottlenecks.

---

## How to Enable Azure Network Watcher

### Step 1: Enable Network Watcher
1. In the [Azure Portal](https://portal.azure.com), search for **Network Watcher**.
2. Select **Network Watcher** from the list.
3. Choose the **Subscription** and **Region** where your resources are located.
4. If Network Watcher is not enabled in your region, click on **Enable** to enable it for that region.

### Step 2: Verify Network Watcher is Enabled
1. After enabling, go to the **Network Watcher** resource in your selected region.
2. In the left-hand menu, you will see a list of tools like **Connection Monitor**, **IP Flow Verify**, **Topology**, etc.

---

## Network Watcher Tools

### 1. **Connection Monitor**
- **Purpose**: Monitor the connectivity between a virtual machine and a given destination (another VM, an on-premises network, or a public endpoint).
- **Steps**:
  1. Go to **Connection Monitor** under Network Watcher.
  2. Click **+ Add** to create a new monitor.
  3. Provide the source (VM) and destination (IP address, FQDN, etc.).
  4. Configure monitoring parameters like frequency and protocol.
  5. Click **Create** to start monitoring.

### 2. **IP Flow Verify**
- **Purpose**: Check if a specific packet is allowed or denied based on the Network Security Group (NSG) rules.
- **Steps**:
  1. Go to **IP Flow Verify**.
  2. Select the **Subscription** and **VM**.
  3. Enter the **Direction** (inbound or outbound), **Local IP**, **Remote IP**, **Port**, and **Protocol**.
  4. Click **Check** to determine if the traffic is allowed or denied.

### 3. **Topology**
- **Purpose**: Generate a visual map of your VNet, including subnets, virtual machines, NICs, and NSGs.
- **Steps**:
  1. Go to **Topology**.
  2. Select the **Subscription** and **Resource Group**.
  3. A visual representation of your network resources will be generated.
  4. You can export the topology as a JSON file.

### 4. **Next Hop**
- **Purpose**: Analyze the route that outbound traffic from a virtual machine will take, based on the routing table.
- **Steps**:
  1. Go to **Next Hop**.
  2. Select the **Subscription**, **Virtual Machine**, **Network Interface**, and **Source IP**.
  3. Click **Next Hop** to see the routing information.

### 5. **Packet Capture**
- **Purpose**: Capture inbound and outbound traffic from a virtual machine’s network interface.
- **Steps**:
  1. Go to **Packet Capture**.
  2. Select the **Virtual Machine** you want to capture traffic from.
  3. Configure the capture settings such as **filter**, **storage location** (Storage Account or local VM disk), and **time duration**.
  4. Start the capture and analyze the results.

### 6. **Connection Troubleshoot**
- **Purpose**: Troubleshoot the connection between a source and a destination to identify potential issues.
- **Steps**:
  1. Go to **Connection Troubleshoot**.
  2. Select the **Subscription**, **Source** (VM), and **Destination** (IP address or FQDN).
  3. Specify the **Protocol** (TCP/UDP) and **Port**.
  4. Click **Check** to troubleshoot the connection.

---

## Example: Verify IP Flow

### Scenario
You have a virtual machine that cannot reach a specific endpoint. You want to verify if the NSG rules are blocking the traffic.

### Steps
1. Navigate to **Network Watcher** in the Azure Portal.
2. Under **IP Flow Verify**, select the virtual machine having issues.
3. Input the following details:
   - **Direction**: Inbound (or Outbound)
   - **Local IP**: The IP of the virtual machine.
   - **Remote IP**: The IP of the endpoint.
   - **Local Port**: The port you are trying to access on the VM.
   - **Remote Port**: The port being accessed from the remote endpoint.
   - **Protocol**: TCP or UDP.
4. Click **Check** to see if the traffic is allowed or denied based on the current NSG rules.

---

## Pricing
Network Watcher comes with a set of free limits and paid tiers. Most features, like topology and NSG diagnostics, are free. However, features like **Packet Capture** and **Connection Monitor** may have associated costs.

### Reference Pricing:
- **Packet Capture**: Based on the amount of data captured and stored.
- **Connection Monitor**: Based on the number of checks and monitoring frequency.

For more information, check the official [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/).

---

## Reference Links
- [Azure Network Watcher Documentation](https://learn.microsoft.com/en-us/azure/network-watcher/network-watcher-monitoring-overview)
- [Troubleshoot with Network Watcher](https://learn.microsoft.com/en-us/azure/network-watcher/network-watcher-troubleshoot-manage)
- [Pricing for Network Watcher](https://azure.microsoft.com/en-us/pricing/details/network-watcher/)


# Azure Networking Tasks & Common Interview Topics

## 1. Virtual Networks (VNet)
- **Creating and Configuring VNets**: Understanding how to create, manage, and assign VNets. Knowing how to break up address spaces into subnets and how to allocate CIDR blocks.
- **Subnets**: Creating multiple subnets, routing traffic between subnets, and configuring subnet delegation to specific Azure services (e.g., Virtual Machines, App Services).
- **Service Endpoints and Private Endpoints**: Configuring service endpoints for services like Azure SQL, and creating private endpoints to secure Azure resources.

### Common Interview Questions:
1. **What is a VNet in Azure, and how does it differ from a traditional network?**
2. **How do you configure subnets within a VNet, and what considerations do you need to make for CIDR block assignment?**
3. **What are service endpoints and private endpoints in Azure? When would you use each?**
4. **How would you peer two VNets, and what are the security implications?**

## 2. Network Security Groups (NSGs)
- **Configuring NSG Rules**: Creating and managing inbound and outbound security rules. Understanding how to configure port, IP, and protocol-based access control.
- **Application Security Groups (ASGs)**: Grouping VMs into logical ASGs to simplify security rule management.

### Common Interview Questions:
1. **What are Network Security Groups, and how do they control traffic?**
2. **How do you set up an NSG rule to block all traffic except SSH (port 22) for a specific VM?**
3. **Explain the difference between an NSG and an ASG. How are they used together?**
4. **How would you troubleshoot if a VM is unable to connect due to NSG rules?**

## 3. Public and Private IP Addressing
- **Configuring Public and Private IPs**: Assigning static or dynamic public IPs and private IPs to resources like Virtual Machines or Load Balancers.
- **Elastic IPs and IP Allocation**: Understanding IP address allocation for scaling resources and avoiding IP exhaustion.

### Common Interview Questions:
1. **What’s the difference between a public and private IP in Azure, and how are they used?**
2. **How would you assign a static IP to a VM, and when would this be necessary?**
3. **How do you ensure high availability when using public IP addresses with Azure services?**

## 4. Azure Load Balancer
- **Setting up Load Balancers**: Configuring an Azure Load Balancer for distributing traffic across multiple VMs.
- **Health Probes**: Configuring health probes for monitoring VM availability.
- **Internal vs. External Load Balancers**: Understanding when to use an internal load balancer (for private resources) vs. external.

### Common Interview Questions:
1. **Explain how Azure Load Balancers work, and what types are available?**
2. **How would you configure a health probe for an Azure Load Balancer?**
3. **What is the difference between an internal and external load balancer, and in which scenarios would you use each?**

## 5. Azure Application Gateway (Layer 7 Load Balancing)
- **Application Gateway Setup**: Configuring Azure Application Gateway for Layer 7 load balancing with SSL termination and URL-based routing.
- **WAF (Web Application Firewall)**: Configuring WAF to protect applications against common web exploits.

### Common Interview Questions:
1. **What’s the difference between an Azure Load Balancer and Azure Application Gateway?**
2. **How does SSL termination work on Application Gateway, and why is it important?**
3. **When would you use WAF in conjunction with Application Gateway?**

## 6. Virtual Network Peering
- **VNet Peering**: Setting up VNet peering to connect two virtual networks, allowing resources in both networks to communicate.
- **Global VNet Peering**: Connecting VNets across different regions.

### Common Interview Questions:
1. **What is VNet peering, and how does it work in Azure?**
2. **How would you set up peering between two VNets in different regions (global VNet peering)?**
3. **How is routing between peered VNets managed, and what are the cost implications?**

## 7. Azure VPN Gateway
- **Configuring Site-to-Site VPN**: Setting up a VPN Gateway for a secure connection between on-premises networks and Azure VNets.
- **Point-to-Site VPN**: Setting up a point-to-site VPN for secure remote access from individual devices to Azure VNets.
- **ExpressRoute**: Understanding the differences between VPN Gateway and ExpressRoute for hybrid network connectivity.

### Common Interview Questions:
1. **What is the difference between Site-to-Site VPN and Point-to-Site VPN in Azure?**
2. **How does Azure VPN Gateway differ from ExpressRoute, and when would you choose one over the other?**
3. **What are the steps to configure a Site-to-Site VPN connection between an on-premises network and Azure?**

## 8. Azure DNS and Custom DNS
- **Configuring DNS**: Understanding how to set up DNS zones and records for your resources in Azure.
- **Custom DNS**: How to configure custom DNS servers for VNets and enforce DNS name resolution for resources in your network.

### Common Interview Questions:
1. **What is Azure DNS, and how is it used to manage domain names in the cloud?**
2. **How would you configure custom DNS servers for your Azure resources?**
3. **What is the difference between Azure DNS and an external DNS provider?**

## 9. Traffic Manager
- **Traffic Manager Profiles**: Configuring Azure Traffic Manager for global DNS-based traffic routing across multiple regions.
- **Routing Methods**: Understanding different routing methods (e.g., priority, performance, geographic) for distributing traffic.

### Common Interview Questions:
1. **What is Azure Traffic Manager, and how does it work?**
2. **What are the different traffic routing methods available in Traffic Manager, and when would you use them?**
3. **How do you ensure high availability across multiple regions using Azure Traffic Manager?**

---

# Common Networking Interview Questions

1. **What is the difference between a VNet and a subnet in Azure?**
2. **Explain how NSGs work and how they control traffic within a VNet.**
3. **How do you assign a public IP to a VM, and when would you use a static vs. dynamic IP?**
4. **What is VNet peering, and how is it different from using a VPN Gateway?**
5. **Describe the process of setting up a load balancer for a group of VMs in Azure.**
6. **How would you configure DNS for an Azure VNet? Can you use custom DNS servers?**
7. **What are service endpoints, and how do they help secure access to Azure resources?**
8. **How do you monitor network traffic and performance in Azure?**
9. **How does Azure handle hybrid network connectivity, and what are the differences between VPN Gateway and ExpressRoute?**
10. **What is the role of Azure Traffic Manager, and how does it differ from Azure Load Balancer?**

---

This list covers the most commonly used tasks and scenarios in **Azure Networking** and some of the key questions asked in interviews. Understanding these concepts will help you demonstrate your knowledge and problem-solving abilities during interviews.



## Azure Service Endpoint vs. Private Endpoint

Azure offers **Service Endpoints** and **Private Endpoints** to secure traffic between virtual networks (VNets) and Azure services. Below is an overview of their key differences, use cases, and benefits.

### Azure Service Endpoint

An Azure **Service Endpoint** extends a VNet to Azure services by enabling secure access through the Azure backbone network, bypassing the public internet.

### Key Features
- Secures traffic between VNet and Azure services (e.g., Azure Storage, Azure SQL Database) over the Azure backbone.
- Simplifies network architecture by removing the need for public IP whitelisting.
- Supports identity-based access control via Azure AD and service firewalls.
- No additional cost beyond standard Azure VNet charges.

### Use Cases
- Securing traffic to Azure PaaS services like Azure Storage or SQL Database from VMs or on-premises.
- Use in environments where simplicity and cost efficiency are key.

### Limitations
- Traffic still originates from the public IP address of the VNet/Subnet.
- Limited to supported Azure services.

---

## Azure Private Endpoint

An Azure **Private Endpoint** creates a private IP within your VNet that is directly connected to a specific instance of an Azure service.

### Key Features
- Provides a fully private connection to Azure services, eliminating public IP exposure.
- Works with a variety of services, including Azure Storage, SQL Database, and more.
- Supports DNS configuration to resolve the private IP for the service.
- Charged based on Private Endpoint usage.

### Use Cases
- Scenarios requiring strict isolation and compliance by keeping all traffic private.
- Connecting from on-premises environments via VPN or ExpressRoute.
- Securing Azure services used by multi-tenant applications.

### Limitations
- Requires additional setup for DNS resolution.
- Costlier compared to Service Endpoints.

---

### Comparison Table

| **Feature**                | **Service Endpoint**                                  | **Private Endpoint**                                   |
|----------------------------|-----------------------------------------------------|------------------------------------------------------|
| **Traffic Path**           | Uses Azure backbone but originates from public IP.   | Fully private connection within the VNet.            |
| **Public Exposure**        | Service IP is public but accessed securely.          | Service is completely isolated within the VNet.      |
| **Use Cases**              | Simple scenarios for securing Azure services.        | Strict compliance or private communication.          |
| **Supported Services**     | Limited to certain Azure PaaS services.              | Supported by many Azure services.                   |
| **Cost**                   | No additional cost.                                  | Charged for Private Endpoint usage.                 |
| **DNS Configuration**      | Not required.                                        | Required for resolving private IPs.                 |
| **On-Premises Access**     | Supported via VPN/ExpressRoute with public IP.       | Supported via VPN/ExpressRoute over private IP.      |

---

### Choosing Between Service Endpoint and Private Endpoint

- Use **Service Endpoint** if:
  - You need a cost-effective and simple solution to secure traffic.
  - Public IP exposure is acceptable.

- Use **Private Endpoint** if:
  - You require full isolation and compliance with strict security policies.
  - You need private connections to specific Azure service instances.