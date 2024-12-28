+++
title = "Part 03"

+++


# Azure CLI Commands

## Overview
Azure CLI is a command-line tool used to manage Azure resources. You can run Azure CLI commands to automate and streamline your workflows.

## Installation

To install Azure CLI, follow these steps:

### On Linux (Ubuntu/Debian)
```bash
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
```

### On macOS
```bash
brew update && brew install azure-cli
```

### On Windows
```bash
# Download the installer from the official website:
https://aka.ms/installazurecliwindows
```

## Azure CLI Login
Before using Azure CLI, you need to log in to your Azure account.

```bash
az login
```
```bash
az login --use-device
```
## Managing Azure Resources

### Create a Resource Group
To create a resource group, use the following command:

```bash
az group create --name MyResourceGroup --location eastus
```

### Create a Virtual Machine
To create a virtual machine (VM) in a resource group:

```bash
az vm create \
  --resource-group MyResourceGroup \
  --name MyVM \
  --image UbuntuLTS \
  --admin-username azureuser \
  --generate-ssh-keys
```

### List Virtual Machines
To list all the virtual machines in a resource group:

```bash
az vm list --resource-group MyResourceGroup --output table
```

### Start a Virtual Machine
To start a stopped VM:

```bash
az vm start --resource-group MyResourceGroup --name MyVM
```

### Stop a Virtual Machine
To stop a running VM:

```bash
az vm stop --resource-group MyResourceGroup --name MyVM
```

## Managing Storage

### Create a Storage Account
To create a storage account:

```bash
az storage account create \
  --name mystorageaccount \
  --resource-group MyResourceGroup \
  --location eastus \
  --sku Standard_LRS
```

### List Storage Accounts
To list all storage accounts:

```bash
az storage account list --resource-group MyResourceGroup --output table
```

## Managing Networking

### Create a Virtual Network
To create a virtual network:

```bash
az network vnet create \
  --resource-group MyResourceGroup \
  --name MyVNet \
  --address-prefix 10.0.0.0/16
```

### Create a Subnet
To create a subnet in a virtual network:

```bash
az network vnet subnet create \
  --resource-group MyResourceGroup \
  --vnet-name MyVNet \
  --name MySubnet \
  --address-prefix 10.0.0.0/24
```

## Other Useful Commands

### Show Help for a Command
To show help for a specific command:

```bash
az <command> --help
```

### Get the CLI Version
To check the version of the Azure CLI:

```bash
az --version
```
### Get the currently logged in user
```bash
az account list -o table
```

## Conclusion
Azure CLI is a powerful tool for managing Azure resources through the command line. For more detailed documentation, visit the official Azure CLI documentation [here](https://learn.microsoft.com/en-us/cli/azure/).

- Azure Cloud Shell
- Azure Authentications 
    - Azure Service Principle
    - Azure Managed Identity
       - User Assigned 
       - System Assigned 