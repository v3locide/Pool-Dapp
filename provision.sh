#!/bin/bash

# Start provisioning
echo "Starting Provisioning..."

# Installing Foundry
curl -L https://foundry.paradigm.xyz | bash
source /home/vagrant/.bashrc
foundryup
apt install git -y