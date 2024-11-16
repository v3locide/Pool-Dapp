#!/bin/bash

# Start provisioning
echo "Starting Provisioning..."

# Installing Foundry
curl -L https://foundry.paradigm.xyz | bash
source /home/vagrant/.bashrc
foundryup

# Setting up a new forge project
apt install git -y
git config --global user.email "moh.abbassen99@gmail.com"
git config --global user.name "v3locide"


#