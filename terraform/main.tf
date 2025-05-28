provider "aws" {
  region = var.aws_region
}

resource "aws_key_pair" "deployer" {
  key_name   = "goapp-store-key"
  public_key = file("/home/opendrasinh/.ssh/id_ed25519.pub")
}

resource "aws_default_vpc" "default" {

}
resource "aws_security_group" "allow_user_to_connect" {
  name        = "allow TLS"
  description = "Allow user to connect"
  vpc_id      = aws_default_vpc.default.id
  ingress {
    description = "port 22 allow"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    description = " allow all outgoing traffic "
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "port 80 allow"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "port 443 allow"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    description = "docker back end"
    from_port = 5000
    to_port = 5000
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]

  }
  ingress {
    description = "docker backend"
    from_port = 3000
    to_port = 3000
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]

  }
   ingress {
    description = "k8s backend"
    from_port = 30500
    to_port = 30500
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]

  }
   ingress {
    description = "k8s frontend"
    from_port = 30080
    to_port = 30080
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]

  }
  

  tags = {
    Name = "mysecurity"
  }
}

resource "aws_instance" "smart-store" {
  ami             = var.ami_id
  instance_type   = var.instance_type
  key_name        = aws_key_pair.deployer.key_name

  security_groups = [aws_security_group.allow_user_to_connect.name]
  tags = {
    Name = "Automate"
  }
  root_block_device {
    volume_size = 30 
    volume_type = "gp3"
  }
}
