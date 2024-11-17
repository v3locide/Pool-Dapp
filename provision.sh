#!/bin/bash

# Start provisioning
echo "Starting Provisioning..."

# Installing Foundry
curl -L https://foundry.paradigm.xyz | bash
source /home/vagrant/.bashrc
foundryup

# Installing Git
sudo apt install git -y
git config --global user.email "moh.abbassen99@gmail.com"
git config --global user.name "v3locide"

# Backend
#mkdir backend
cd backend
#forge init --force
#rm -rf script/* src/* test/*
# Install Openzeppeling
forge install OpenZeppelin/openzeppelin-contracts --no-commit