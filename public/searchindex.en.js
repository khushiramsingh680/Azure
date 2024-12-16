var relearn_searchindex = [
  {
    "breadcrumb": "",
    "content": "Learn by doing",
    "description": "Learn by doing",
    "tags": [],
    "title": "Azure documentation",
    "uri": "/azure/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Vagrant Guide Vagrant is an open-source tool for building and managing virtualized environments. It provides easy-to-use workflows for working with different development environments.\nInstallation 1. Install VirtualBox Vagrant requires a provider such as VirtualBox. Download and install it from VirtualBox Downloads.\n2. Install Vagrant Download and install Vagrant from Vagrant Downloads.\nVerify the installation:\nvagrant --version\rGetting Started with Vagrant 1. Initialize a New Project To create a new Vagrant environment:\nvagrant init bento/ubuntu-24.04 --box-version 202407.23.0\rThis command creates a Vagrantfile in your project directory, which describes the virtual machine configuration.\n2. Start the Virtual Machine Run the following to launch the VM:\nvagrant up\r3. SSH into the Virtual Machine Log into the virtual machine using SSH:\nvagrant ssh\r4. Shut Down the Virtual Machine When done, halt the VM:\nvagrant halt\rCommon Commands Command Description vagrant init Initialize a new Vagrant environment. vagrant up Start the Vagrant environment. vagrant ssh SSH into the Vagrant machine. vagrant halt Stop the virtual machine. vagrant destroy Remove the virtual machine. vagrant status Check the status of the virtual machine. vagrant provision Apply changes in the Vagrantfile to the VM. vagrant reload Restart the VM with updated configurations. Basic Vagrantfile Example Below is a sample Vagrantfile:\nVagrant.configure(\"2\") do |config| # Define the box to use config.vm.box = \"hashicorp/bionic64\" # Define the virtual machine's network config.vm.network \"private_network\", type: \"dhcp\" # Share a folder between the host and the guest config.vm.synced_folder \"./data\", \"/vagrant_data\" # Customize VM resources config.vm.provider \"virtualbox\" do |vb| vb.memory = \"1024\" vb.cpus = 2 end end\rAdditional Resources Vagrant Official Documentation",
    "description": "Vagrant Guide Vagrant is an open-source tool for building and managing virtualized environments. It provides easy-to-use workflows for working with different development environments.\nInstallation 1. Install VirtualBox Vagrant requires a provider such as VirtualBox. Download and install it from VirtualBox Downloads.\n2. Install Vagrant Download and install Vagrant from Vagrant Downloads.\nVerify the installation:\nvagrant --version\rGetting Started with Vagrant 1. Initialize a New Project To create a new Vagrant environment:",
    "tags": [],
    "title": "Part 01",
    "uri": "/part01/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Part 02",
    "uri": "/part02/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Azure CLI Commands Overview Azure CLI is a command-line tool used to manage Azure resources. You can run Azure CLI commands to automate and streamline your workflows.\nInstallation To install Azure CLI, follow these steps:\nOn Linux (Ubuntu/Debian) curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash\rOn macOS brew update \u0026\u0026 brew install azure-cli\rOn Windows # Download the installer from the official website: https://aka.ms/installazurecliwindows\rAzure CLI Login Before using Azure CLI, you need to log in to your Azure account.\naz login\raz login --use-device\rManaging Azure Resources Create a Resource Group To create a resource group, use the following command:\naz group create --name MyResourceGroup --location eastus\rCreate a Virtual Machine To create a virtual machine (VM) in a resource group:\naz vm create \\ --resource-group MyResourceGroup \\ --name MyVM \\ --image UbuntuLTS \\ --admin-username azureuser \\ --generate-ssh-keys\rList Virtual Machines To list all the virtual machines in a resource group:\naz vm list --resource-group MyResourceGroup --output table\rStart a Virtual Machine To start a stopped VM:\naz vm start --resource-group MyResourceGroup --name MyVM\rStop a Virtual Machine To stop a running VM:\naz vm stop --resource-group MyResourceGroup --name MyVM\rManaging Storage Create a Storage Account To create a storage account:\naz storage account create \\ --name mystorageaccount \\ --resource-group MyResourceGroup \\ --location eastus \\ --sku Standard_LRS\rList Storage Accounts To list all storage accounts:\naz storage account list --resource-group MyResourceGroup --output table\rManaging Networking Create a Virtual Network To create a virtual network:\naz network vnet create \\ --resource-group MyResourceGroup \\ --name MyVNet \\ --address-prefix 10.0.0.0/16\rCreate a Subnet To create a subnet in a virtual network:\naz network vnet subnet create \\ --resource-group MyResourceGroup \\ --vnet-name MyVNet \\ --name MySubnet \\ --address-prefix 10.0.0.0/24\rOther Useful Commands Show Help for a Command To show help for a specific command:\naz \u003ccommand\u003e --help\rGet the CLI Version To check the version of the Azure CLI:\naz --version\rGet the currently logged in user az account list -o table\rConclusion Azure CLI is a powerful tool for managing Azure resources through the command line. For more detailed documentation, visit the official Azure CLI documentation here.\nAzure Cloud Shell Azure Authentications Azure Service Principle Azure Managed Identity User Assigned System Assigned",
    "description": "Azure CLI Commands Overview Azure CLI is a command-line tool used to manage Azure resources. You can run Azure CLI commands to automate and streamline your workflows.\nInstallation To install Azure CLI, follow these steps:\nOn Linux (Ubuntu/Debian) curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash\rOn macOS brew update \u0026\u0026 brew install azure-cli\rOn Windows # Download the installer from the official website: https://aka.ms/installazurecliwindows\rAzure CLI Login Before using Azure CLI, you need to log in to your Azure account.",
    "tags": [],
    "title": "Part 03",
    "uri": "/part03/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Azure Cloud Image Creation Azure Virtual Machine Scale Set Azure LoadBalancers",
    "description": "Azure Cloud Image Creation Azure Virtual Machine Scale Set Azure LoadBalancers",
    "tags": [],
    "title": "Part 04",
    "uri": "/part04/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
