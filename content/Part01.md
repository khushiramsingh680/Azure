+++
title = "Part 01"

+++

# Vagrant Guide

**Vagrant** is an open-source tool for building and managing virtualized environments. It provides easy-to-use workflows for working with different development environments.

---

## Installation

### 1. Install VirtualBox
Vagrant requires a provider such as VirtualBox. Download and install it from [VirtualBox Downloads](https://www.virtualbox.org/wiki/Downloads).

### 2. Install Vagrant
Download and install Vagrant from [Vagrant Downloads](https://www.vagrantup.com/downloads).

Verify the installation:
```bash
vagrant --version
```

---

## Getting Started with Vagrant

### 1. Initialize a New Project
To create a new Vagrant environment:
```bash
vagrant init bento/ubuntu-24.04 --box-version 202407.23.0
```

This command creates a `Vagrantfile` in your project directory, which describes the virtual machine configuration.

### 2. Start the Virtual Machine
Run the following to launch the VM:
```bash
vagrant up
```

### 3. SSH into the Virtual Machine
Log into the virtual machine using SSH:
```bash
vagrant ssh
```

### 4. Shut Down the Virtual Machine
When done, halt the VM:
```bash
vagrant halt
```

---

## Common Commands

| Command                   | Description                                   |
|---------------------------|-----------------------------------------------|
| `vagrant init`            | Initialize a new Vagrant environment.        |
| `vagrant up`              | Start the Vagrant environment.               |
| `vagrant ssh`             | SSH into the Vagrant machine.                |
| `vagrant halt`            | Stop the virtual machine.                    |
| `vagrant destroy`         | Remove the virtual machine.                  |
| `vagrant status`          | Check the status of the virtual machine.     |
| `vagrant provision`       | Apply changes in the Vagrantfile to the VM.  |
| `vagrant reload`          | Restart the VM with updated configurations.  |

---

## Basic `Vagrantfile` Example

Below is a sample `Vagrantfile`:

```ruby
Vagrant.configure("2") do |config|
  # Define the box to use
  config.vm.box = "hashicorp/bionic64"

  # Define the virtual machine's network
  config.vm.network "private_network", type: "dhcp"

  # Share a folder between the host and the guest
  config.vm.synced_folder "./data", "/vagrant_data"

  # Customize VM resources
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "1024"
    vb.cpus = 2
  end
end
```

---

## Additional Resources

- [Vagrant Official Documentation](https://www.vagrantup.com/docs)


