+++
title = "Part 04"

+++

- [Creating an Image of an Azure VM](#creating-an-image-of-an-azure-vm)
- [Azure Virtual Machine Scale Set](#azure-virtual-machine-scale-sets-vmss)
- [Azure Virtual Machine Restore Point](#azure-virtual-machine-restore-point)

## What is "Capture"?
In Azure, **capture** is the process of creating an image from an existing Virtual Machine (VM). This image can be used to deploy new VMs or Virtual Machine Scale Sets (VMSS) with the exact same settings and configurations as the source VM.

### Why Use Capture?
Capturing a VM provides a reusable base configuration, which includes:
- **Operating System (OS):** The OS and its current state.
- **Installed Applications:** Any software installed on the VM.
- **System Settings and Configurations:** Preserved settings, such as environment variables, installed packages, and network configurations.

### Types of Capture

1. **OS Disk Snapshot**: Captures only the OS disk, useful for backup or duplication without including data disks.
2. **Full VM Image**: Captures the complete state, including attached data disks, and is ideal for creating multiple identical VMs or scaling with VMSS.

## Creating an Image of an Azure VM

### Steps to Capture an Image of a VM (Full VM Snapshot)

1. **Navigate to Azure Portal**
   - Open the [Azure Portal](https://portal.azure.com).

2. **Locate the Virtual Machine**
   - Go to **Virtual Machines** in the portal and select the VM you want to capture.

3. **Generalize the VM (If Needed)**
   - **Linux VM**: SSH into the VM and run:
     ```bash
     sudo waagent -deprovision+user -force
     ```
   - **Windows VM**: RDP into the VM and run **sysprep**:
     - Go to `C:\Windows\System32\Sysprep`, run `sysprep.exe`, select **Enter System Out-of-Box Experience (OOBE)**, and check **Generalize**. Click **OK**.
   - **Stop the VM** after generalizing to prepare it for image creation.

4. **Capture the Image**
   - Select the VM, go to **Overview**, and click **Capture**.
   - In the **Capture** panel, configure the following:
     - **Name**: Provide a unique name for the image.
     - **Resource Group**: Select a resource group for the image.
     - **Delete VM After Image Creation**: Choose this option if you want to automatically delete the VM after creating the image.

5. **Review and Create**
   - Click **Review + create**, then **Create** to capture the VM image.

6. **Use Image for New Deployments**
   - The image will be saved under **Images** in the selected resource group, allowing you to use it for deploying new VMs based on this configuration.

---

This process captures a full image of the VM, including OS configurations and disk data, making it reusable for future deployments.


## Azure Virtual Machine Scale Sets (VMSS)

Azure **Virtual Machine Scale Sets (VMSS)** allow you to create and manage a group of identical, load-balanced virtual machines that can automatically scale in response to demand. VMSS helps build scalable, resilient applications and services without manual intervention.

### Key Features of VMSS

1. **Automatic Scaling**
   - VMSS can scale the number of VM instances up or down based on:
     - **CPU Utilization**: Increase instances when CPU usage is high, decrease them when low.
     - **Memory Usage**: Scale based on memory needs.
     - **Custom Metrics**: Use custom autoscaling rules specific to your application.
   - This ensures resources match the workload demands, optimizing costs and performance.

2. **Load Balancing**
   - VMSS distributes incoming traffic across all VM instances using an **Azure Load Balancer** or **Application Gateway**. This evens out the load, enhancing availability and performance.

3. **High Availability and Fault Tolerance**
   - VMSS can spread VM instances across **Availability Zones** or **Availability Sets** for resilience and to prevent single points of failure.

4. **Integration with Azure Networking and Storage**
   - VMSS supports Azure storage for persistent data and integrates with **Virtual Networks (VNet)**, ensuring secure communication and scalability.

5. **Custom VM Images**
   - VMSS can use either standard Azure images or **custom images** (such as images captured from existing VMs), enabling easy deployment of instances with pre-configured software and settings.

---

### Common Use Cases for VMSS

1. **Web and Application Hosting**
   - Deploy large web applications or API services that need to scale with user demand, improving response times and handling high traffic.

2. **Big Data and Batch Processing**
   - Run compute-intensive workloads (e.g., data processing, simulations) that can benefit from parallel processing on multiple VMs.

3. **Microservices Architecture**
   - Use VMSS to scale microservices components individually, each with isolated scaling and deployment options.

### Creating an Image for Azure Virtual Machine Scale Sets (VMSS)

To deploy multiple, identical VMs using a Virtual Machine Scale Set (VMSS), you can capture a VM image as the base configuration. Here’s how to create and use an image with VMSS.

### Steps to Capture an Image for VMSS

1. **Navigate to Azure Portal**
   - Open the [Azure Portal](https://portal.azure.com).

2. **Create or Customize the Source VM**
   - Deploy a VM with the desired configuration or customize an existing one (install necessary software, set configurations, etc.).

3. **Generalize the VM (If Needed)**
   - **Linux VM**: SSH into the VM and run:
     ```bash
     sudo waagent -deprovision+user -force
     ```
   - **Windows VM**: RDP into the VM and run **sysprep**:
     - Go to `C:\Windows\System32\Sysprep`, run `sysprep.exe`, select **Enter System Out-of-Box Experience (OOBE)**, and check **Generalize**. Click **OK**.
   - **Stop the VM** after generalizing to prepare it for image creation.

4. **Capture the Image**
   - Select the VM, go to **Overview**, and click **Capture**.
   - In the **Capture** panel:
     - **Name**: Enter a unique name for the image.
     - **Resource Group**: Select a resource group for the image.
     - **Delete VM After Image Creation**: Optionally, check this box if you no longer need the VM.
   - Click **Review + create** and then **Create** to capture the VM image.

5. **Create a Virtual Machine Scale Set Using the Image**
   - Go to **Virtual Machine Scale Sets** in the Azure portal and click **Create**.
   - Choose your **Subscription** and **Resource Group**.
   - Under **Image**, select **My Items** and choose the image you created in the previous step.
   - Configure VMSS settings (size, number of instances, networking, etc.) as needed.

6. **Complete the VMSS Creation**
   - After configuring, click **Review + create** and then **Create** to deploy the scale set using the custom image.

---

This image-based VMSS deployment allows you to create identical, scalable instances across multiple VMs with the same preconfigured settings.
## Azure Virtual Machine Restore Point
## Overview
Azure VM Restore Points allow you to create consistent snapshots of your virtual machines. These restore points capture the state of a VM's disk(s), which can be used to restore the VM or individual disks in the future.

## Features
- **Crash-Consistent and Application-Consistent Snapshots**
- Incremental backups to optimize storage use.
- Restore entire VM or specific disks.
- Integration with Azure Backup for automated restore point management.

## Key Components
1. **Restore Point Collection**: A container that holds restore points for a VM.
2. **Restore Point**: A snapshot of the VM’s disks at a specific point in time.
3. **Disk Snapshot**: A snapshot of an individual disk.

## Use Cases
- Disaster recovery.
- Testing and development using a point-in-time VM snapshot.
- Rollback changes after updates or application installations.

---

## Steps to Create a Restore Point

### 1. Using the Azure Portal
1. Go to **Virtual Machines** in the Azure Portal.
2. Select the VM you want to back up.
3. Navigate to **Backup** > **Restore Points**.
4. Click **+ Create** to create a restore point.
5. Select **Crash-Consistent** or **Application-Consistent** based on your needs.
6. Confirm and create the restore point.

### 2. Using Azure CLI
```bash
# Create a restore point collection
az restore-point create --resource-group <ResourceGroupName> \
    --vm-name <VMName> \
    --name <RestorePointName>
```

## Steps to Restore a Virtual Machine

## 1. Restore Entire VM
- Navigate to the **Restore Points** of the desired VM.
- Select the restore point you want to use.
- Choose **Restore VM**.
- Configure the new VM settings if required.
- Start the restore process.

## 2. Restore Individual Disks
- Navigate to **Restore Points**.
- Select the restore point and disk you want to restore.
- Use the restored disk to replace the original disk or attach it to a new VM.
