
Legacy Shopping Website Modernization to AWS Microservices

Project Overview :

This project demonstrates the end-to-end modernization of a legacy monolithic eCommerce application into a scalable, secure, and observable microservices-based architecture on AWS. It uses industry-standard DevOps practices, Infrastructure as Code (IaC), and modern cloud-native services to deliver high availability, automation, and zero-downtime deployments.

 Tech Stack -Infrastructure
AWS VPC – Custom networking for microservices

EKS (Elastic Kubernetes Service) – Managed Kubernetes to orchestrate microservices

RDS Aurora (MySQL/PostgreSQL) – Managed relational database

S3 – Static asset storage

CloudFront + ACM – CDN and SSL termination

Route 53 – Domain name routing

Elasticache (optional) – Caching for improved performance

Secrets Manager – Secure secrets and DB credentials

IAM – Access control and policies

 DevOps & Automation
Terraform – Infrastructure provisioning (modular IaC)

GitHub – Version control and source repository

Jenkins / GitHub Actions / CodePipeline – CI/CD automation

Docker – Containerization of microservices

Helm – Kubernetes application packaging and deployment (EKS only)

 Observability & Monitoring
AWS CloudWatch – Metrics and logs

AWS X-Ray – Distributed tracing

Prometheus + Grafana (optional) – Advanced monitoring & dashboards
 Security :
IAM Roles for Service Accounts (IRSA)

Secrets Manager for credentials

HTTPS with ACM certificates

Security Groups, Private Subnets


 Microservices :
Each service is independently developed, containerized, and deployed:

Auth Service – User registration, login, JWT handling

Product Service – Catalog, inventory APIs

Cart Service – Shopping cart logic

Payment Service – Payment gateway integration

 CI/CD Workflow :
Source: GitHub Repository

Build: Jenkins / CodeBuild

Artifact Registry: Amazon ECR (Docker images)

Deploy: Helm charts (EKS) or ECS task definitions

Test: Automated integration tests

Notify: Slack/email integration (optional)

 Infrastructure Modules (Terraform) :
Terraform modules are structured for reusability and separation of concerns:

VPC, EKS ,ALB RDS, S3,Secrets, IAM,Cloudwatch

Each module follows best practices, includes input/output variables, and uses remote backends with state locking.
 Step-by-Step Modernization Journey Assessment :

Break legacy monolith into domain-driven microservices

Infrastructure as Code

Provision all AWS resources with Terraform

Service Development

Microservices with REST APIs and Swagger docs

Dockerization

Each service is built and pushed to ECR

Orchestration

EKS setup with Helm charts or ECS Fargate setup

CI/CD Automation

Full deployment pipelines from code to production

Routing

ALB with Ingress, Route 53 DNS, CloudFront CDN

DB Migration

Legacy DB → RDS Aurora with Blue/Green strategy

Monitoring

CloudWatch, X-Ray, optional Grafana dashboards

Security

HTTPS, IAM, Secrets, network isolation

Zero-Downtime Deployment

Rolling/Blue-Green using Helm or ECS deploy strategies

Learning Outcomes:
Real-world AWS Microservices Architecture

End-to-End CI/CD pipeline setup with Terraform & Jenkins

Docker + Kubernetes deployment using Helm

Monitoring, observability, and alerting best practices

Zero-downtime deployment strategies

Securing microservices using AWS-native tools

 Demo & Documentation:
Architecture Diagrams: /docs/architecture.png

Sample Terraform Module: /terraform/modules/eks/

CI/CD Pipeline Screenshot: /docs/pipeline.png

API Swagger Docs: /services/*/swagger.yaml



 Prerequisites :

AWS Account

Git, Terraform CLI, Docker

kubectl, eksctl, and Helm (if using EKS)

Jenkins or GitHub Actions runner







