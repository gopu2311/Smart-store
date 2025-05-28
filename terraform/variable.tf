variable "aws_region" {
  description = "Aws region"
  default     = "eu-north-1"
}

variable "ami_id" {
  description = "AMI ID for the EC2 instance"
  default     = "ami-0c1ac8a41498c1a9c"
}

variable "instance_type" {
  description = "EC2 instance"
  default     = "t3.medium"
}
