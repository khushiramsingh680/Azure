+++
title = "Part 02"

+++


## Azure VM Tasks & Common Interview Topics

### 1. Azure VM Basics
- **Creating VMs**: Understand the basics of creating and configuring VMs using both the Azure portal and Azure CLI. You should know different VM sizes, disk types, and pricing tiers.
- **Start/Stop/Deallocate**: Commands to start, stop, and deallocate VMs, and understanding the difference between stopping and deallocating a VM.
- **Resizing a VM**: Know how to resize a VM and the impact it has on the underlying infrastructure.

### 2. VM Networking
- **Public vs Private IP Addresses**: Configure and assign static/dynamic public and private IPs to Azure VMs.
- **NSG (Network Security Groups)**: Configure NSGs to control inbound and outbound traffic for VMs.
- **Load Balancing**: Understand how to set up and use Azure Load Balancers for distributing traffic to multiple VMs.
- **VNET and Subnets**: Networking for VMs, including Virtual Networks (VNET), subnets, and peering.

### 3. Disks and Storage
- **Managed vs Unmanaged Disks**: Know the difference and implications on performance and cost.
- **Attaching and Detaching Disks**: Learn how to attach additional data disks to a VM and detach them when not needed.
- **Disk Performance Tiers**: Differences between Standard, Premium, and Ultra disks, and when to use each.

### 4. VM Images and Snapshots
- **Creating Custom VM Images**: Capture a VM as an image and reuse it to deploy new VMs with pre-configured environments.
- **Snapshots**: Creating and restoring from snapshots for backups.

### 5. Automation and Scaling
- **Azure VM Scale Sets**: Use VM Scale Sets for auto-scaling applications across multiple VMs.
- **Automation**: Use **ARM Templates**, **Terraform**, or **Azure CLI** to automate VM provisioning.
- **Azure DevOps Pipelines**: Automate VM creation and deployment as part of a CI/CD pipeline.

### 6. Azure VM Security
- **Azure Bastion**: Secure RDP/SSH access to VMs without exposing public IPs.
- **Disk Encryption**: Configure Azure Disk Encryption to secure data at rest.
- **Managed Identities**: Implement MSI for secure access to Azure resources without credentials.
- **SSH Key Management**: Generate and use SSH keys for Linux VM access, as well as passwordless access for Windows VMs.

### 7. Backup and Disaster Recovery
- **Azure Backup**: Set up Azure Backup for VM snapshots and restoring VMs in case of failure.
- **Azure Site Recovery (ASR)**: Replicate and failover VMs for disaster recovery scenarios.

### 8. Troubleshooting
- **Diagnosing VM Issues**: Diagnose and troubleshoot VMs that fail to start or have performance issues (check logs, resource utilization, and network connectivity).
- **Monitoring and Alerts**: Set up monitoring using **Azure Monitor** and create alerts based on VM metrics like CPU usage, memory consumption, or disk IOPS.

### 9. Cost Management
- **Azure Reserved Instances**: Understand the concept of reserved VM instances to save on long-term costs.
- **Spot VMs**: Use Azure Spot VMs for cost-effective workloads and understand their limitations.
- **VM Pricing**: Estimate costs and optimize VMs for pricing based on workload needs.

### 10. OS-Specific Knowledge
- **Windows VMs**: Setting up **RDP**, enabling **WinRM** for remote management, configuring updates, and managing licensing.
- **Linux VMs**: SSH access, handling Linux kernel updates, and automating tasks with scripts.

---

## Common Interview Questions

1. **How would you create a virtual machine in Azure and configure it with specific VM size and OS?**
   - Testing knowledge on Azure CLI, ARM Templates, or Terraform to automate VM creation.

2. **What is the difference between deallocating and stopping a VM?**
   - Stopping still incurs costs for resources, while deallocating releases hardware and stops billing for the VM.

3. **How do you securely connect to a VM in Azure without exposing public IPs?**
   - Usage of Azure Bastion, Just-in-Time (JIT) VM access, or private endpoint configurations.

4. **Explain Azure VM scale sets and how you would configure autoscaling.**
   - Understand scaling rules, thresholds, and VM image configuration.

5. **What are managed identities, and how would you use them in Azure VMs?**
   - Assigning VMs identity in Azure AD and granting access to Azure resources without credentials.

6. **How would you troubleshoot a VM that is not responding or has network connectivity issues?**
   - Diagnose network security groups, VNET configurations, or use Azure Serial Console for troubleshooting.

7. **What are the benefits of using Spot VMs, and in what scenarios would they be appropriate?**
   - Spot VMs for cost-effective compute resources but with interruption at any time.

8. **How would you handle disk performance issues in Azure VMs?**
   - Discuss disk types, performance tiers, resizing, and application tuning.

9. **What is the difference between Azure Standard HDD, Premium SSD, and Ultra Disks?**
   - Differences in IOPS, throughput, latency, and costs.

10. **How do you back up and restore Azure VMs?**
    - Azure Backup configuration, restoring VMs from snapshots, or using recovery services.