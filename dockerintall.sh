#!/bin/bash

set -e

echo "🔹 Updating system packages..."
sudo yum update -y

echo "🔹 Installing required dependencies..."
sudo yum install -y yum-utils device-mapper-persistent-data lvm2

echo "🔹 Adding Docker official repository..."
sudo yum-config-manager --add-repo \
https://download.docker.com/linux/centos/docker-ce.repo

echo "🔹 Installing Docker..."
sudo yum install -y docker-ce docker-ce-cli containerd.io

echo "🔹 Starting Docker service..."
sudo systemctl start docker

echo "🔹 Enabling Docker on boot..."
sudo systemctl enable docker

echo "🔹 Verifying Docker installation..."
docker --version

echo "🔹 Docker installed successfully 🎉"

sudo usermod -aG docker $USER
