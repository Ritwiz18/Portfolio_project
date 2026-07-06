// script.js - Cloud Engineer Dashboard Interactions & Canvas Engine

// ==========================================
// 1. EXTENDED PROJECT & BLOG DATABASE
// ==========================================

const PROJECTS_DB = {
    'aws-web-app': {
        title: 'AWS Web Deployment',
        duration: 'June 2024',
        tech: ['AWS EC2', 'S3', 'CodeDeploy', 'CloudWatch', 'ALB', 'Auto Scaling'],
        whyBuilt: 'I built this to master the implementation of high-availability architectures and dynamic deployment pipelines. I wanted to move away from manual server provisioning and create a system that heals itself, scales dynamically, and deploys code with zero downtime.',
        problem: 'Establishing a repeatable, automated framework to host, scale, and inspect a dynamic web application without downtime during revisions.',
        solution: 'Provisioned dynamic compute instances on EC2 with assets hosted securely in S3 buckets. Built continuous deployment lifecycles using CodeDeploy and configured CloudWatch alerts targeting CPU and load thresholds.',
        features: [
            'Automated EC2 instance scaling using target tracking configurations.',
            'Structured CodeDeploy scripts managing web asset rotations on servers.',
            'CloudWatch system metric dashboards alerting administrators on capacity warnings.'
        ],
        folderStructure: `aws-web-deployment/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── app.js
│   └── index.html
├── scripts/
│   ├── install_dependencies.sh
│   ├── start_server.sh
│   └── stop_server.sh
├── appspec.yml
└── README.md`,
        pipeline: `Github Commit ➔ GitHub Actions Build ➔ Push Artifacts to S3 ➔ Trigger CodeDeploy ➔ Rolling In-Place Upgrade ➔ Health Check validation`,
        challenges: 'Managing environment variables securely across automated CodeDeploy runtime contexts without hardcoding credentials in the repository.',
        lessons: 'Enforced the use of AWS Systems Manager (SSM) Parameter Store to inject credentials at runtime, learning the critical importance of keeping secrets out of configuration files.',
        improvements: 'Integrate AWS Secrets Manager for secret rotation and transition to ECS (Fargate) for serverless container deployment.',
        links: { github: 'https://github.com/Ritwiz18', demo: 'https://aws.amazon.com' },
        diagram: `
            <div class="arch-diagram-card">
                <h3><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="vertical-align:middle;margin-right:4px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg> AWS Web Deployment Layout</h3>
                <div class="diagram-container">
                    <svg class="svg-diagram" viewBox="0 0 600 240">
                        <defs>
                            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                <path d="M 0 0 L 10 5 L 0 10 z" fill="#06b6d4" />
                            </marker>
                        </defs>
                        <!-- User Node -->
                        <g class="svg-node" id="node-user" data-title="Client Request" data-desc="Client user accessing web host endpoints over HTTP/HTTPS.">
                            <circle cx="60" cy="120" r="24" fill="#080f1e" stroke="#8b5cf6" stroke-width="2"/>
                            <text x="60" y="124" font-family="sans-serif" font-size="9" fill="#fff" text-anchor="middle" font-weight="bold">USER</text>
                        </g>
                        <!-- EC2 Instance -->
                        <g class="svg-node" id="node-ec2" data-title="EC2 Instance Web Server" data-desc="Elastic Compute Cloud virtual server hosting active application runs.">
                            <rect x="170" y="90" width="80" height="60" rx="6" fill="#080f1e" stroke="#06b6d4" stroke-width="2"/>
                            <text x="210" y="120" font-family="sans-serif" font-size="9" fill="#fff" text-anchor="middle" font-weight="bold">EC2 Instance</text>
                            <text x="210" y="134" font-family="sans-serif" font-size="7" fill="#06b6d4" text-anchor="middle" font-family="monospace">Compute</text>
                        </g>
                        <!-- S3 Bucket -->
                        <g class="svg-node" id="node-s3" data-title="S3 Asset Bucket" data-desc="Simple Storage Service container storing static website assets, assets, and bundle packages.">
                            <rect x="330" y="30" width="80" height="60" rx="6" fill="#080f1e" stroke="#ff9900" stroke-width="2"/>
                            <text x="370" y="60" font-family="sans-serif" font-size="9" fill="#fff" text-anchor="middle" font-weight="bold">S3 Bucket</text>
                            <text x="370" y="74" font-family="sans-serif" font-size="7" fill="#ff9900" text-anchor="middle" font-family="monospace">Storage</text>
                        </g>
                        <!-- CodeDeploy -->
                        <g class="svg-node" id="node-deploy" data-title="AWS CodeDeploy Engine" data-desc="Automated deployment agent managing code release transitions to virtual server pools.">
                            <rect x="330" y="150" width="80" height="60" rx="6" fill="#080f1e" stroke="#8b5cf6" stroke-width="2"/>
                            <text x="370" y="180" font-family="sans-serif" font-size="9" fill="#fff" text-anchor="middle" font-weight="bold">CodeDeploy</text>
                            <text x="370" y="194" font-family="sans-serif" font-size="7" fill="#8b5cf6" text-anchor="middle" font-family="monospace">Deployment</text>
                        </g>
                        <!-- CloudWatch -->
                        <g class="svg-node" id="node-cw" data-title="AWS CloudWatch Monitor" data-desc="Metric recording service collecting performance statistics and raising alarms on anomalies.">
                            <rect x="490" y="90" width="80" height="60" rx="6" fill="#080f1e" stroke="#3b82f6" stroke-width="2"/>
                            <text x="530" y="120" font-family="sans-serif" font-size="9" fill="#fff" text-anchor="middle" font-weight="bold">CloudWatch</text>
                            <text x="530" y="134" font-family="sans-serif" font-size="7" fill="#3b82f6" text-anchor="middle" font-family="monospace">Monitoring</text>
                        </g>
                        <path d="M 84 120 L 162 120" fill="none" stroke="#8b5cf6" stroke-width="2" class="svg-connector" marker-end="url(#arrow)"/>
                        <path d="M 250 110 L 322 70" fill="none" stroke="#ff9900" stroke-width="1.5" class="svg-connector" marker-end="url(#arrow)"/>
                        <path d="M 250 130 L 322 170" fill="none" stroke="#8b5cf6" stroke-width="1.5" class="svg-connector" marker-end="url(#arrow)"/>
                        <path d="M 410 70 L 482 110" fill="none" stroke="#3b82f6" stroke-width="1.5" class="svg-connector" marker-end="url(#arrow)"/>
                        <path d="M 410 170 L 482 130" fill="none" stroke="#3b82f6" stroke-width="1.5" class="svg-connector" marker-end="url(#arrow)"/>
                    </svg>
                </div>
                <div class="diagram-tooltip-box" id="diagram-tooltip-content">
                    <span>INTERACTIVE NODES:</span> Hover or tap on any node above to inspect its deployment workflow.
                </div>
            </div>
        `
    },
    'multi-cloud': {
        title: 'Multi-Cloud Architecture',
        duration: 'May 2024',
        tech: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes'],
        whyBuilt: 'I designed this project to address the challenges of configuration drift and platform lock-in. By writing infrastructure as code, I wanted to showcase how a single codebase could provision completely symmetrical environments across different cloud providers.',
        problem: 'Preventing vendor lock-in and managing network configuration variations across multiple cloud providers (AWS, Azure, GCP) manually.',
        solution: 'Designed and deployed unified networking topologies and node pools across AWS, Azure, and Google Cloud Platform using Terraform declarative templates. Established container management configurations via Kubernetes clusters.',
        features: [
            'Consistent multi-cloud network configuration templates.',
            'Terraform plans orchestrating host groups, virtual subnets, and safety groups.',
            'Kubernetes configuration mappings managing container workloads across engines.'
        ],
        folderStructure: `multi-cloud-iac/
├── terraform/
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   ├── modules/
│   │   ├── aws_network/
│   │   ├── azure_network/
│   │   └── gcp_network/
│   └── providers.tf
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
└── README.md`,
        pipeline: `Local Edit ➔ Terraform Plan ➔ State locking via S3/DynamoDB ➔ Apply to cloud provider APIs ➔ Kubeconfig update ➔ Kubectl deployment apply`,
        challenges: 'Reconciling the differences between resource nomenclature and networking implementations (e.g. AWS VPCs vs Azure VNets) in modular Terraform files.',
        lessons: 'Mastered modular architecture in Terraform. Enforced state isolation and locking using S3 backends coupled with DynamoDB table configurations.',
        improvements: 'Integrate GitOps deployment using ArgoCD to automatically synchronize Kubernetes configurations from Git commits.',
        links: { github: 'https://github.com/Ritwiz18', demo: 'https://www.terraform.io' },
        diagram: `
            <div class="arch-diagram-card">
                <h3><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="vertical-align:middle;margin-right:4px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg> Multi-Cloud Network Topology</h3>
                <div class="diagram-container">
                    <svg class="svg-diagram" viewBox="0 0 600 240">
                        <defs>
                            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                <path d="M 0 0 L 10 5 L 0 10 z" fill="#06b6d4" />
                            </marker>
                        </defs>
                        <!-- Control Node -->
                        <g class="svg-node" id="node-tf" data-title="Terraform Provisioner" data-desc="Local or remote engine parsing IaC files to compile target infrastructure states.">
                            <rect x="50" y="90" width="80" height="60" rx="6" fill="#080f1e" stroke="#8b5cf6" stroke-width="2"/>
                            <text x="90" y="120" font-family="sans-serif" font-size="9" fill="#fff" text-anchor="middle" font-weight="bold">Terraform IaC</text>
                            <text x="90" y="134" font-family="sans-serif" font-size="7" fill="#8b5cf6" text-anchor="middle" font-family="monospace">Provisioner</text>
                        </g>
                        <!-- AWS Endpoint -->
                        <g class="svg-node" id="node-aws" data-title="Amazon Web Services" data-desc="AWS VPC containing compute nodes and target subnet groups.">
                            <rect x="220" y="30" width="80" height="50" rx="4" fill="#080f1e" stroke="#ff9900" stroke-width="2"/>
                            <text x="260" y="55" font-family="sans-serif" font-size="9" fill="#fff" text-anchor="middle" font-weight="bold">AWS Cloud</text>
                            <text x="260" y="67" font-family="sans-serif" font-size="7" fill="#ff9900" text-anchor="middle" font-family="monospace">VPC Infrastructure</text>
                        </g>
                        <!-- Azure Endpoint -->
                        <g class="svg-node" id="node-azure" data-title="Microsoft Azure" data-desc="Azure resource groups hosting virtual network subnets.">
                            <rect x="220" y="95" width="80" height="50" rx="4" fill="#080f1e" stroke="#00bceb" stroke-width="2"/>
                            <text x="260" y="120" font-family="sans-serif" font-size="9" fill="#fff" text-anchor="middle" font-weight="bold">Azure Cloud</text>
                            <text x="260" y="132" font-family="sans-serif" font-size="7" fill="#00bceb" text-anchor="middle" font-family="monospace">VNet Infrastructure</text>
                        </g>
                        <!-- GCP Endpoint -->
                        <g class="svg-node" id="node-gcp" data-title="Google Cloud Platform" data-desc="GCP network projects scaling virtual server pools.">
                            <rect x="220" y="160" width="80" height="50" rx="4" fill="#080f1e" stroke="#ef4444" stroke-width="2"/>
                            <text x="260" y="185" font-family="sans-serif" font-size="9" fill="#fff" text-anchor="middle" font-weight="bold">GCP Cloud</text>
                            <text x="260" y="197" font-family="sans-serif" font-size="7" fill="#ef4444" text-anchor="middle" font-family="monospace">VPC Infrastructure</text>
                        </g>
                        <!-- Kubernetes Orchestration -->
                        <g class="svg-node" id="node-k8s" data-title="Kubernetes Cluster" data-desc="Active container deployment coordinator routing instances across active cloud targets.">
                            <circle cx="430" cy="120" r="26" fill="#080f1e" stroke="#326ce5" stroke-width="2"/>
                            <text x="430" y="123" font-family="sans-serif" font-size="9" fill="#fff" text-anchor="middle" font-weight="bold">KUBERNETES</text>
                        </g>
                        <path d="M 130 110 L 212 60" fill="none" stroke="#ff9900" stroke-width="1.5" class="svg-connector" marker-end="url(#arrow)"/>
                        <path d="M 130 120 L 212 120" fill="none" stroke="#00bceb" stroke-width="1.5" class="svg-connector" marker-end="url(#arrow)"/>
                        <path d="M 130 130 L 212 180" fill="none" stroke="#ef4444" stroke-width="1.5" class="svg-connector" marker-end="url(#arrow)"/>
                        <path d="M 300 60 L 395 110" fill="none" stroke="#326ce5" stroke-width="1.5" class="svg-connector" marker-end="url(#arrow)"/>
                        <path d="M 300 120 L 395 120" fill="none" stroke="#326ce5" stroke-width="1.5" class="svg-connector" marker-end="url(#arrow)"/>
                        <path d="M 300 180 L 395 130" fill="none" stroke="#326ce5" stroke-width="1.5" class="svg-connector" marker-end="url(#arrow)"/>
                    </svg>
                </div>
                <div class="diagram-tooltip-box" id="diagram-tooltip-content">
                    <span>INTERACTIVE NODES:</span> Hover or tap on any node above to inspect its multi-cloud mapping.
                </div>
            </div>
        `
    },
    'monitoring': {
        title: 'Cloud Security & Monitoring',
        duration: 'April 2024',
        tech: ['AWS IAM', 'CloudWatch', 'Azure Monitor', 'CloudTrail'],
        whyBuilt: 'I engineered this framework because security is not an afterthought in cloud environments. I wanted to prove that setting up granular permissions, real-time telemetry, and audit trails is essential for maintaining compliance and detecting compromises immediately.',
        problem: 'Enforcing consistent security boundaries and tracking structural access operations continuously across hybrid or multi-provider workspaces.',
        solution: 'Implemented AWS IAM rules mapping identity authorizations to strict roles. Integrated resource status checking dashboards within AWS CloudWatch and Microsoft Azure Monitor platforms.',
        features: [
            'Strict IAM security policy mappings avoiding configuration risks.',
            'CloudWatch system status dashboards tracking server capacity benchmarks.',
            'Azure Monitor workspace configuration tracking resource allocations.'
        ],
        folderStructure: `cloud-sec-audit/
├── iam_policies/
│   ├── iam_restrictive_role.json
│   ├── vpc_flow_logs_policy.json
│   └── kms_key_policy.json
├── cloudwatch_alarms/
│   ├── cpu_utilization_alarm.tf
│   └── auth_failures_alarm.tf
└── README.md`,
        pipeline: `API Request Call ➔ IAM evaluation ➔ Execution allowed/denied ➔ Action logged to CloudTrail ➔ CloudWatch metric trigger ➔ SNS notification payload dispatch`,
        challenges: 'Configuring cross-provider credential paths securely without exposing access keys, and filtering out signal noise from raw CloudWatch logs.',
        lessons: 'Enforced Zero Trust architecture. Learned to set up CloudWatch Metric Filters to alert specifically on unauthorized API call sequences.',
        improvements: 'Integrate automated threat response using AWS Lambda to automatically detach policies or isolate instances when unauthorized behaviors are flagged.',
        links: { github: 'https://github.com/Ritwiz18', demo: 'https://aws.amazon.com/security' },
        diagram: `
            <div class="arch-diagram-card">
                <h3><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="vertical-align:middle;margin-right:4px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg> Security Telemetry pipeline</h3>
                <div class="diagram-container">
                    <svg class="svg-diagram" viewBox="0 0 600 240">
                        <defs>
                            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                <path d="M 0 0 L 10 5 L 0 10 z" fill="#06b6d4" />
                            </marker>
                        </defs>
                        <!-- AWS Resource -->
                        <g class="svg-node" id="node-res" data-title="Cloud Resource API" data-desc="AWS resource endpoint triggered by active application calls.">
                            <rect x="50" y="90" width="80" height="60" rx="6" fill="#080f1e" stroke="#ff9900" stroke-width="2"/>
                            <text x="90" y="120" font-family="sans-serif" font-size="9" fill="#fff" text-anchor="middle" font-weight="bold">Cloud Resource</text>
                        </g>
                        <!-- CloudTrail -->
                        <g class="svg-node" id="node-trail" data-title="AWS CloudTrail Logger" data-desc="Logs API calls made by users, roles, or AWS services.">
                            <rect x="190" y="90" width="80" height="60" rx="6" fill="#080f1e" stroke="#10b981" stroke-width="2"/>
                            <text x="230" y="120" font-family="sans-serif" font-size="9" fill="#fff" text-anchor="middle" font-weight="bold">CloudTrail</text>
                        </g>
                        <!-- CloudWatch -->
                        <g class="svg-node" id="node-cwlogs" data-title="CloudWatch Logs Stream" data-desc="Aggregates and searches log event feeds to evaluate safety rules.">
                            <rect x="330" y="90" width="80" height="60" rx="6" fill="#080f1e" stroke="#06b6d4" stroke-width="2"/>
                            <text x="370" y="120" font-family="sans-serif" font-size="9" fill="#fff" text-anchor="middle" font-weight="bold">CloudWatch Logs</text>
                        </g>
                        <!-- Alerts -->
                        <g class="svg-node" id="node-alerts" data-title="SNS Notification / SECURE Response" data-desc="Triggers email alerts or automated remediation lambdas upon detecting anomalies.">
                            <rect x="470" y="90" width="80" height="60" rx="6" fill="#080f1e" stroke="#ef4444" stroke-width="2"/>
                            <text x="510" y="120" font-family="sans-serif" font-size="9" fill="#fff" text-anchor="middle" font-weight="bold">Alerts (SNS)</text>
                        </g>
                        <path d="M 130 120 L 182 120" fill="none" stroke="#10b981" stroke-width="2" class="svg-connector" marker-end="url(#arrow)"/>
                        <path d="M 270 120 L 322 120" fill="none" stroke="#06b6d4" stroke-width="2" class="svg-connector" marker-end="url(#arrow)"/>
                        <path d="M 410 120 L 462 120" fill="none" stroke="#ef4444" stroke-width="2" class="svg-connector" marker-end="url(#arrow)"/>
                    </svg>
                </div>
                <div class="diagram-tooltip-box" id="diagram-tooltip-content">
                    <span>INTERACTIVE NODES:</span> Hover or tap on any node above to inspect its security stream.
                </div>
            </div>
        `
    }
};

const BLOG_DB = {
    'docker': {
        title: 'Docker in 10 Minutes: Architecture & Isolation',
        date: 'June 30, 2026',
        readtime: '5 Min Read',
        content: `
            <p>Docker has revolutionized software engineering by introducing lightweight virtual containment systems. However, containers do not use hypervisor layers. Under the hood, Docker relies directly on standard Linux kernel mechanisms to achieve isolation.</p>
            
            <h2>1. Linux Namespaces</h2>
            <p>Namespaces are Linux kernel parameters that partition system resources so that a group of processes see one set of resources while another group see a different set. Docker uses several namespace targets:</p>
            <ul>
                <li><strong>pid (Process ID):</strong> Isolates process IDs. Inside the container, the primary application processes run as PID 1, while sharing standard CPU targets safely.</li>
                <li><strong>net (Network):</strong> Creates isolated network interfaces, routing tables, and firewall rules.</li>
                <li><strong>mnt (Mount):</strong> Isolates file system mount paths.</li>
                <li><strong>uts (Hostnames):</strong> Isolates hostname and domain configurations.</li>
                <li><strong>ipc (Interprocess Communication):</strong> Isolates shared memory components.</li>
            </ul>
            
            <h2>2. Control Groups (cgroups)</h2>
            <p>While namespaces handle isolation (what process A can see), Control Groups (cgroups) handle limitation (what process A can consume). Cgroups enforce runtime bounds on:</p>
            <pre><code># Limit container memory allocations
docker run -m 512m --cpus 1.5 nginx</code></pre>
            <p>By defining limits on memory usage, CPU scheduling shares, and disk input/output access rates, cgroups prevent "noisy neighbor" processes from starving resources on host architectures.</p>
            
            <h2>3. Union File System (UnionFS)</h2>
            <p>UnionFS allows files and directories from separate file systems to be layered transparently, presenting a single cohesive filesystem. Docker uses this to build image layer patterns. The base layers remain read-only targets, while Docker attaches a thin, writable container layer at the top. Any updates write directly to this topmost layer without altering underlying image templates.</p>
            
            <blockquote>
                Docker containers are not true virtual machines; they are simply sandboxed Linux processes running on a shared host kernel, isolated by namespaces, bounded by cgroups, and layered by UnionFS.
            </blockquote>
        `
    },
    'aws-iam': {
        title: 'Understanding IAM Policies: Writing Secure Configurations',
        date: 'May 18, 2026',
        readtime: '4 Min Read',
        content: `
            <p>Identity and Access Management (IAM) is the most critical security boundary within Amazon Web Services. An insecure IAM configuration is the root cause of the vast majority of cloud breaches. Implementing robust IAM configurations requires adhering to several baseline paradigms.</p>
            
            <h2>1. Principle of Least Privilege (PoLP)</h2>
            <p>Never grant blanket access. When provisioning IAM policies, explicitly target the resources and actions required, avoiding wildcard configurations wherever possible.</p>
            
            <pre><code>{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::my-application-bucket/*"
    }
  ]
}</code></pre>
            
            <h2>2. Prefer Roles over Users</h2>
            <p>Avoid generating long-term API access key profiles. Hardcoded keys in credentials files are highly vulnerable to leakage. Instead, use IAM Roles. When running code on EC2, attach an IAM Instance Profile. When building serverless tasks, map Execution Roles. AWS automatically manages rotating short-term token assignments for roles behind the scenes.</p>
            
            <h2>3. Explicit Deny Logic</h2>
            <p>By default, all requests are denied in AWS. An explicit allow statement lets a user perform an action. However, if any statement contains an explicit deny, it overrides all allows. Utilize this to enforce organization boundaries, such as blocking root actions or locking down critical administrative tools.</p>
            
            <blockquote>
                In cloud security, trust is a vulnerability. IAM configurations should enforce zero-trust bounds by verifying authorizations at every interface.
            </blockquote>
        `
    },
    'terraform': {
        title: 'Building a Secure AWS VPC with Infrastructure as Code',
        date: 'April 22, 2026',
        readtime: '6 Min Read',
        content: `
            <p>Managing cloud architectures via manual console clicks is slow, error-prone, and impossible to audit. Infrastructure as Code (IaC) solves this problem by treating virtual components as software code. HashiCorp Terraform is the industry standard for cloud-agnostic IaC.</p>
            
            <h2>1. Declarative vs. Imperative</h2>
            <p>Terraform uses a declarative language (HCL). This means you define the desired final state of your infrastructure (e.g. "I want 3 virtual machines, a network, and a database"), and Terraform figures out the API execution steps to build it. Imperative tools, by contrast, require you to specify the execution commands sequentially.</p>
            
            <h2>2. The State File</h2>
            <p>Terraform records metadata about real-world infrastructure in a local or remote <code>terraform.tfstate</code> file. This state acts as a source of truth, mapping your declarative files to resource IDs in AWS or Azure. When running changes, Terraform compares the code against this state file to compute differences (diffs).</p>
            
            <pre><code># Check resource configuration differences
terraform plan

# Execute changes on target cloud endpoints
terraform apply</code></pre>
            
            <h2>3. State Locking</h2>
            <p>When working in teams, multiple engineers running Terraform simultaneously can corrupt the state file. Enforcing state locking using remote backends (like S3 containers coupled with DynamoDB table locks) prevents concurrent execution risks, keeping the source of truth safe.</p>
            
            <blockquote>
                IaC makes cloud architectures repeatable, version-controlled, and testable. Code reviews for system modifications become as simple as verifying pull requests.
            </blockquote>
        `
    }
};

// ==========================================
// 2. LOADING SCREEN CONTROL
// ==========================================

const loaderLogs = [
    "Establishing connection to AWS Cloud...",
    "Validating IAM security permissions...",
    "Querying Docker container clusters...",
    "Mounting Kubernetes volume allocations...",
    "Loading dashboard modules...",
    "Connection secured. Welcome, Ritwiz Choudhary."
];

window.addEventListener('DOMContentLoaded', () => {
    const progress = document.getElementById('loader-progress');
    const statusText = document.getElementById('loader-status');
    const loader = document.getElementById('loader');

    let currentPct = 0;
    let logIndex = 0;

    const interval = setInterval(() => {
        currentPct += Math.floor(Math.random() * 8) + 4;
        if (currentPct > 100) currentPct = 100;

        if (progress) progress.style.width = currentPct + '%';

        const threshold = 100 / loaderLogs.length;
        const targetIndex = Math.floor(currentPct / threshold);

        if (targetIndex > logIndex && logIndex < loaderLogs.length - 1) {
            logIndex = targetIndex;
            if (statusText) statusText.innerText = loaderLogs[logIndex];
        }

        if (currentPct === 100) {
            clearInterval(interval);
            setTimeout(() => {
                if (loader) loader.classList.add('fade-out');
                initTypewriter();
                initLiveMetrics(); // Start background clock and statistics metrics
                initArchitectureGallery(); // Start architecture gallery details
            }, 600);
        }
    }, 60);
});

// ==========================================
// 3. TYPEWRITER EFFECT
// ==========================================

function initTypewriter() {
    const textSpan = document.getElementById('typewriter-text');
    if (!textSpan) return;

    const words = JSON.parse(textSpan.getAttribute('data-words'));
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 150;

    function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            charIndex--;
            delay = 60;
        } else {
            charIndex++;
            delay = 120;
        }

        textSpan.textContent = currentWord.substring(0, charIndex);

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            delay = 1800;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            delay = 400;
        }

        setTimeout(type, delay);
    }

    setTimeout(type, 500);
}

// ==========================================
// 4. INTERACTIVE TERMINAL SIMULATION
// ==========================================

const terminalInput = document.getElementById('terminal-input');
const terminalBody = document.getElementById('terminal-body');
const terminalSimLine = document.getElementById('terminal-sim-line');

const commandOutputs = {
    'help': `Available system operations:
  about           - Display engineer identity parameters
  skills          - View deep-dive cloud/security skills map
  projects        - Show technical featured project indexes
  certifications  - List earned cloud & technology credentials
  resume          - Output download path for ATS resume PDF
  contact         - Print network communication handles
  neofetch        - Fetch simulated system specs & hardware stats
  matrix          - Trigger the matrix code rain simulation
  clear           - Wipe console memory
  exit            - De-authorize console shell`,
    'about': `Ritwiz Choudhary | B.Tech CSE (Cloud Technology & InfoSec) Student.
I enjoy designing secure, scalable infrastructure. I like understanding how systems work beneath the surface—from Linux servers and networking to cloud architecture and automation. My goal is to build solutions that are reliable, efficient, and secure by design.`,
    'whoami': `Ritwiz Choudhary | Systems Architect & Cybersecurity Student.
B.Tech CSE (Cloud Technology & InfoSec) Student at Quantum University. CGPA: 8.35/10.`,
    'skills': `--- DOCKER EXTENDED ---
  • Images: Multi-stage builds, layers caching, alpine optimization
  • Containers: Process sandboxing, limits configuration (cgroups)
  • Compose: Multi-container networks, dependencies ordering
  • Volumes: Persistent data mounts, volume configurations
--- AWS ARCHITECTURE ---
  • Compute: EC2 instance clusters, Auto Scaling groups, Lambda
  • Storage: S3 buckets, RDS databases, IAM profiles
  • Network: Secure VPC setups, subnets, Route 53, CloudFront
Type 'skills' in the interactive dashboard panels for a detailed visualization.`,
    'projects': `Featured Project Indexes:
  [1] AWS Web Deployment (EC2, S3, CodeDeploy, CloudWatch)
  [2] Multi-Cloud Architecture (AWS, Azure, GCP, Terraform, Kubernetes)
  [3] Cloud Security & Monitoring (IAM, CloudWatch, Azure Monitor)
Type 'cat project [index]' (e.g. 'cat project 1') to inspect specifications.`,
    'certifications': `Issued Credentials:
  - AWS Academy: Cloud Practitioner Essentials
  - AWS Academy: Getting Started with DevOps
  - AWS Academy: Technical Essentials
  - AWS Academy: Solutions Architecture Preparatory
  - Deloitte: Cyber Virtual Internship`,
    'resume': `Click this link to download the resume directly:
[Ritwiz Choudhary ATS Resume](file:///d:/portfolio%20project/Ritwiz%20Resume%202026.pdf)`,
    'contact': `Connection parameters:
  Email    : ritwizchoudhary010@gmail.com
  LinkedIn : www.linkedin.com/in/ritwiz-choudhary
  GitHub   : github.com/Ritwiz18
  Phone    : +91-8218578210
  Calendly : calendly.com`,
    'neofetch': `  /\\_/\\      ritwiz@cloud-terminal
 ( o.o )     ---------------------
  > ^ <      OS: Cloud Linux 2026.06
             Kernel: 6.8.0-secure-x86_64
             Uptime: 2026 days active
             Shell: zsh (interactive-console)
             CPU: AWS vCPU (Micro-allocated)
             RAM: 2048MB (Shared Pool)
             Threat Status: 0 Warnings // SSL ACTIVE`
};

if (terminalSimLine) {
    setTimeout(() => {
        terminalSimLine.style.borderRight = "none";
    }, 1500);
}

if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const rawCmd = terminalInput.value;
            const cmd = rawCmd.trim().toLowerCase();

            const inputLine = document.createElement('div');
            inputLine.className = 'terminal-line input-cmd';
            inputLine.innerHTML = `<span class="terminal-prompt">ritwiz@cloud-terminal:~$ </span>${escapeHTML(rawCmd)}`;

            terminalBody.insertBefore(inputLine, terminalInput.parentElement);

            let output = '';

            if (cmd === '') {
                output = '';
            } else if (cmd === 'clear') {
                const lines = terminalBody.querySelectorAll('.terminal-line');
                lines.forEach(line => line.remove());
            } else if (cmd === 'exit') {
                output = "Session disconnected. Reload page to reconnect.";
                terminalInput.disabled = true;
                terminalInput.parentElement.style.display = 'none';
            } else if (cmd === 'matrix') {
                toggleMatrixRain();
                output = "Matrix mode authorized. Executing overlay grid...";
            } else if (cmd === 'sudo hire ritwiz') {
                output = `<span style="color:var(--accent-emerald)">[SECURE CONNECTION AUTHORIZED]</span><br>` +
                    `> Validating credentials for root privilege execution... SUCCESS.<br>` +
                    `> Scaling developer resource: Ritwiz Choudhary ➔ Active Hired State.<br>` +
                    `> [CHECK] Cloud deployment: PASS (AWS, Azure, GCP)<br>` +
                    `> [CHECK] Security check: PASS (VPC, IAM configuration, Least Privilege)<br>` +
                    `> [CHECK] Automation tests: PASS (Terraform, Docker Compose, CI/CD)<br>` +
                    `> STATUS: 100% ready for interview deployment.<br>` +
                    `> Command: Type 'contact' to schedule connection parameters.`;
            } else if (cmd.startsWith('cat project ')) {
                const index = cmd.replace('cat project ', '').trim();
                if (index === '1') {
                    output = `Project 1: AWS Web Deployment
Tech: AWS, S3, CodeDeploy, CloudWatch
Problem: Dynamic web application deployment and server scaling.
Solution: Scaled application on EC2 behind load balancers with automated deployments.
Result: Scalable infrastructure with active monitoring logs.`;
                } else if (index === '2') {
                    output = `Project 2: Multi-Cloud Architecture
Tech: AWS, Azure, GCP, Terraform, Kubernetes
Problem: Cloud resource provision locking and architecture complexity.
Solution: Automated environment layouts using Terraform plans and Kubernetes services.
Result: Multi-cloud architecture provisioned dynamically.`;
                } else if (index === '3') {
                    output = `Project 3: Cloud Security & Monitoring
Tech: AWS IAM, CloudWatch, Azure Monitor
Problem: Access management checking and auditing resources across platforms.
Solution: Configured IAM policies and system monitors to track authorizations.
Result: Security configurations scanned and logged.`;
                } else {
                    output = `cat: project ${escapeHTML(index)}: index not found. Try 'cat project 1'`;
                }
            } else if (commandOutputs[cmd] !== undefined) {
                output = commandOutputs[cmd];
            } else {
                output = `bash: command not found: ${escapeHTML(cmd)}. Type 'help' to inspect operations.`;
            }

            if (output !== '') {
                const outputLine = document.createElement('div');
                outputLine.className = 'terminal-line output';
                outputLine.innerHTML = output.replace(/\n/g, '<br>');
                terminalBody.insertBefore(outputLine, terminalInput.parentElement);
            }

            terminalBody.scrollTop = terminalBody.scrollHeight;
            terminalInput.value = '';
        }
    });

    const terminalWindow = document.querySelector('.terminal-window');
    if (terminalWindow) {
        terminalWindow.addEventListener('click', () => {
            if (!terminalInput.disabled) {
                terminalInput.focus();
            }
        });
    }
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g,
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}

// ==========================================
// 5. INTERACTIVE SKILLS (EXPANDABLE)
// ====================do======================

const skillCards = document.querySelectorAll('.skills-card');
const skillHeaders = document.querySelectorAll('.skills-card-header');

function toggleCard(card) {
    const isExpanded = card.classList.contains('expanded');
    const header = card.querySelector('.skills-card-header');

    // Close other cards first for clean UI
    skillCards.forEach(c => {
        if (c !== card) {
            c.classList.remove('expanded');
            const h = c.querySelector('.skills-card-header');
            if (h) {
                h.setAttribute('aria-expanded', 'false');
            }
        }
    });

    // Toggle active card
    if (isExpanded) {
        card.classList.remove('expanded');
        if (header) {
            header.setAttribute('aria-expanded', 'false');
        }
    } else {
        card.classList.add('expanded');
        if (header) {
            header.setAttribute('aria-expanded', 'true');
        }
    }
}

skillHeaders.forEach((header, index) => {
    header.addEventListener('click', (e) => {
        const card = header.closest('.skills-card');
        toggleCard(card);
    });

    // Keyboard navigation
    header.addEventListener('keydown', (e) => {
        const card = header.closest('.skills-card');

        switch (e.key) {
            case ' ':
            case 'Enter':
                e.preventDefault(); // Prevent page scroll
                toggleCard(card);
                break;
            case 'Escape':
                if (card.classList.contains('expanded')) {
                    toggleCard(card);
                }
                break;
            case 'ArrowDown':
            case 'ArrowRight':
                e.preventDefault();
                const nextIndex = (index + 1) % skillHeaders.length;
                skillHeaders[nextIndex].focus();
                break;
            case 'ArrowUp':
            case 'ArrowLeft':
                e.preventDefault();
                const prevIndex = (index - 1 + skillHeaders.length) % skillHeaders.length;
                skillHeaders[prevIndex].focus();
                break;
            case 'Home':
                e.preventDefault();
                skillHeaders[0].focus();
                break;
            case 'End':
                e.preventDefault();
                skillHeaders[skillHeaders.length - 1].focus();
                break;
        }
    });
});

// Global Escape listener for Skills section collapse
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        skillCards.forEach(card => {
            if (card.classList.contains('expanded')) {
                toggleCard(card);
            }
        });
    }
});

// ==========================================
// 6. LIVE METRICS & FEED SIMULATOR
// ==========================================

function initLiveMetrics() {
    // Clock
    const uptimeVal = document.getElementById('uptime-val');
    let uptimeSecs = 175200; // random offset starting
    setInterval(() => {
        uptimeSecs++;
        const days = Math.floor(uptimeSecs / 86400);
        const hrs = Math.floor((uptimeSecs % 86400) / 3600);
        const mins = Math.floor((uptimeSecs % 3600) / 60);
        const secs = uptimeSecs % 60;

        if (uptimeVal) {
            uptimeVal.innerText = `${days}d ${hrs}h ${mins}m ${secs}s`;
        }
    }, 1000);

    // CPU and RAM indicators
    const cpuVal = document.getElementById('cpu-metric-val');
    const cpuBar = document.getElementById('cpu-metric-fill');
    const memoryVal = document.getElementById('memory-metric-val');
    const memoryBar = document.getElementById('memory-metric-fill');

    setInterval(() => {
        const cpuPct = Math.floor(Math.random() * 15) + 8; // 8% - 23%
        const ramPct = Math.floor(Math.random() * 4) + 42; // 42% - 46%

        if (cpuVal) cpuVal.innerText = `${cpuPct}%`;
        if (cpuBar) cpuBar.style.width = `${cpuPct}%`;
        if (memoryVal) memoryVal.innerText = `${ramPct}%`;
        if (memoryBar) memoryBar.style.width = `${ramPct}%`;
    }, 3000);

    // Live logging feed
    const logsContainer = document.getElementById('live-log-lines');
    const simulatedLogs = [
        "AWS VPC: Inbound security port scan completed. 0 warnings.",
        "DOCKER: Host cluster daemon initialized successfully.",
        "K8S: Node pool cluster replication checks: 100% healthy.",
        "MONITOR: Real-time latency tracking is within standard metrics [14ms].",
        "CI/CD: GitHub Actions deployment checks: Pipeline passed.",
        "SECURITY: Enforcing least privilege IAM policies globally.",
        "TERRAFORM: State locks successfully synchronized with DynamoDB.",
        "AWS CLOUDFRONT: Cache invalidated for static asset updates."
    ];

    if (logsContainer) {
        setInterval(() => {
            const time = new Date().toLocaleTimeString();
            const logText = simulatedLogs[Math.floor(Math.random() * simulatedLogs.length)];
            const line = document.createElement('div');
            line.className = 'log-line';
            line.innerHTML = `<span class="log-time">[${time}]</span> <span class="log-txt">${logText}</span>`;

            logsContainer.appendChild(line);
            logsContainer.scrollTop = logsContainer.scrollHeight;

            // Limit log lines to 15 lines to avoid memory leak
            if (logsContainer.children.length > 15) {
                logsContainer.children[0].remove();
            }
        }, 4000);
    }
}

// ==========================================
// 7. ARCHITECTURE GALLERY NODES
// ==========================================

function initArchitectureGallery() {
    const galleryNodes = document.querySelectorAll('.gallery-node');
    const galleryTooltip = document.getElementById('gallery-tooltip-content');

    galleryNodes.forEach(node => {
        const showInfo = () => {
            const title = node.getAttribute('data-title');
            const desc = node.getAttribute('data-desc');
            if (galleryTooltip && title && desc) {
                galleryTooltip.innerHTML = `<strong>${title}:</strong> ${desc}`;
            }
        };

        node.addEventListener('mouseenter', showInfo);
        node.addEventListener('click', (e) => {
            e.stopPropagation();
            showInfo();
        });
    });
}

// ==========================================
// 8. MODALS (PROJECT DETAILS & BLOG READS)
// ==========================================

const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close-btn');
const modalBody = document.getElementById('modal-body-content');
const bodyTag = document.body;

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectKey = card.getAttribute('data-project');
        const data = PROJECTS_DB[projectKey];
        if (!data) return;

        let techBadges = data.tech.map(t => `<span class="project-badge">${t}</span>`).join(' ');

        let contentHTML = `
            <div class="modal-header-info">
                <h2>${data.title}</h2>
                <div class="modal-meta-row">
                    <div class="modal-meta-item">Duration: <span>${data.duration}</span></div>
                </div>
                <div class="project-tech-badges" style="margin-top: 0.5rem;">
                    ${techBadges}
                </div>
            </div>
            
            <div class="modal-project-details-grid">
                <div>
                    <div class="modal-detail-section">
                        <h3>Behind the Build</h3>
                        <p>${data.whyBuilt}</p>
                    </div>
                    <div class="modal-detail-section">
                        <h3>Problem Statement</h3>
                        <p>${data.problem}</p>
                    </div>
                    <div class="modal-detail-section">
                        <h3>Architected Solution</h3>
                        <p>${data.solution}</p>
                    </div>
                    <div class="modal-detail-section">
                        <h3>Key Implementation Features</h3>
                        <ul>
                            ${data.features.map(f => `<li>${f}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <div>
                    <div class="modal-detail-section">
                        <h3>Hardest Challenge</h3>
                        <p>${data.challenges}</p>
                    </div>
                    <div class="modal-detail-section">
                        <h3>Lessons Learned</h3>
                        <p>${data.lessons}</p>
                    </div>
                    <div class="modal-detail-section">
                        <h3>Future Improvements</h3>
                        <p>${data.improvements}</p>
                    </div>
                    <div class="modal-detail-section">
                        <h3>Source &amp; Deployments</h3>
                        <div class="hero-ctas" style="margin-top: 1rem; justify-content: flex-start;">
                            <a href="${data.links.github}" target="_blank" class="btn btn-primary" style="padding: 0.6rem 1.2rem; font-size: 0.75rem;">GitHub Source</a>
                            <a href="${data.links.demo}" target="_blank" class="btn btn-secondary" style="padding: 0.6rem 1.2rem; font-size: 0.75rem;">Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-infra-grid" style="margin-top:2rem; display:grid; grid-template-columns: 1fr 1fr; gap:1.5rem;">
                <div class="modal-detail-section">
                    <h3>Folder Structure</h3>
                    <pre style="background:var(--bg-terminal); border:1px solid var(--border-color); color:var(--accent-cyan); padding:1rem; border-radius:4px; font-family:var(--font-mono); font-size:0.8rem; overflow-x:auto;"><code>${data.folderStructure}</code></pre>
                </div>
                <div class="modal-detail-section">
                    <h3>CI/CD Deployment Pipeline</h3>
                    <pre style="background:var(--bg-terminal); border:1px solid var(--border-color); color:var(--accent-purple); padding:1rem; border-radius:4px; font-family:var(--font-mono); font-size:0.8rem; overflow-x:auto; white-space:pre-wrap;"><code>${data.pipeline}</code></pre>
                </div>
            </div>
        `;

        if (data.diagram) {
            contentHTML += data.diagram;
        }

        if (modalBody) modalBody.innerHTML = contentHTML;
        if (modal) modal.classList.add('active');
        bodyTag.classList.add('modal-open');

        if (data.diagram) {
            initInteractiveDiagram();
        }
    });
});

const blogCards = document.querySelectorAll('.blog-card');
blogCards.forEach(card => {
    card.addEventListener('click', () => {
        const postKey = card.getAttribute('data-post');
        const data = BLOG_DB[postKey];
        if (!data) return;

        let contentHTML = `
            <div class="modal-header-info">
                <h2>${data.title}</h2>
                <div class="modal-meta-row">
                    <div class="modal-meta-item">Published: <span>${data.date}</span></div>
                    <div class="modal-meta-item">Read Time: <span>${data.readtime}</span></div>
                </div>
            </div>
            
            <div class="blog-content-container">
                ${data.content}
            </div>
        `;

        if (modalBody) modalBody.innerHTML = contentHTML;
        if (modal) modal.classList.add('active');
        bodyTag.classList.add('modal-open');
    });
});

function closeModal() {
    if (modal) modal.classList.remove('active');
    bodyTag.classList.remove('modal-open');
    if (modalBody) modalBody.innerHTML = '';
}

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        closeModal();
    }
});

// ==========================================
// 9. INTERACTIVE SVG DIAGRAM LOGIC
// ==========================================

function initInteractiveDiagram() {
    const nodes = document.querySelectorAll('.svg-node');
    const tooltipBox = document.getElementById('diagram-tooltip-content');

    nodes.forEach(node => {
        const updateTooltip = () => {
            const title = node.getAttribute('data-title');
            const desc = node.getAttribute('data-desc');
            if (tooltipBox && title && desc) {
                tooltipBox.innerHTML = `<span>${title}:</span> ${desc}`;
            }
        };

        node.addEventListener('mouseenter', updateTooltip);
        node.addEventListener('click', (e) => {
            e.stopPropagation();
            updateTooltip();
        });
    });
}

// ==========================================
// 10. CONSOLE-STYLED CONTACT FORM SUBMISSION
// ==========================================

// Contact form script handler removed.

// ==========================================
// 11. MOBILE HAMBURGER MENU
// ==========================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('nav a');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');

        const lines = hamburger.querySelectorAll('span');
        if (hamburger.classList.contains('active')) {
            lines[0].style.transform = 'translateY(8px) rotate(45deg)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'translateY(-8px) rotate(-45deg)';
        } else {
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');

            const lines = hamburger.querySelectorAll('span');
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
        });
    });
}

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 150;

    document.querySelectorAll('.section').forEach(section => {
        const id = section.getAttribute('id');
        const offset = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPos >= offset && scrollPos < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Back to top button visibility
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
});

// ==========================================
// 12. THREE.JS CONSTELLATION BACKGROUND
// ==========================================

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg-canvas'),
    alpha: true,
    antialias: true
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 80;

// Reduce particle count on mobile for performance
const isMobile = window.innerWidth <= 768;
const particleCount = isMobile ? 30 : 70;
const particlesGeom = new THREE.BufferGeometry();
const particlePositions = new Float32Array(particleCount * 3);

const coordinates = [];
for (let i = 0; i < particleCount; i++) {
    const x = THREE.MathUtils.randFloatSpread(120);
    const y = THREE.MathUtils.randFloatSpread(100);
    const z = THREE.MathUtils.randFloatSpread(100);

    coordinates.push({ x, y, z, vx: THREE.MathUtils.randFloatSpread(0.12), vy: THREE.MathUtils.randFloatSpread(0.12), vz: THREE.MathUtils.randFloatSpread(0.1) });

    particlePositions[i * 3] = x;
    particlePositions[i * 3 + 1] = y;
    particlePositions[i * 3 + 2] = z;
}

particlesGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

const nodeMaterial = new THREE.PointsMaterial({
    color: 0x06b6d4,
    size: 2.2,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending
});

const particleSystem = new THREE.Points(particlesGeom, nodeMaterial);
scene.add(particleSystem);

const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x8b5cf6,
    transparent: true,
    opacity: 0.15,
    blending: THREE.AdditiveBlending
});

let lineSegments;

let targetMouseX = 0;
let targetMouseY = 0;
let currentMouseX = 0;
let currentMouseY = 0;

document.addEventListener('mousemove', (e) => {
    targetMouseX = (e.clientX - window.innerWidth / 2) * 0.05;
    targetMouseY = (e.clientY - window.innerHeight / 2) * 0.05;
});

function animate() {
    requestAnimationFrame(animate);

    const positions = particleSystem.geometry.attributes.position.array;
    const lineCoords = [];

    for (let i = 0; i < particleCount; i++) {
        const pt = coordinates[i];

        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.z += pt.vz;

        if (Math.abs(pt.x) > 75) pt.vx *= -1;
        if (Math.abs(pt.y) > 65) pt.vy *= -1;
        if (Math.abs(pt.z) > 65) pt.vz *= -1;

        positions[i * 3] = pt.x;
        positions[i * 3 + 1] = pt.y;
        positions[i * 3 + 2] = pt.z;
    }

    particleSystem.geometry.attributes.position.needsUpdate = true;

    for (let i = 0; i < particleCount; i++) {
        const nodeA = coordinates[i];
        for (let j = i + 1; j < particleCount; j++) {
            const nodeB = coordinates[j];

            const dx = nodeA.x - nodeB.x;
            const dy = nodeA.y - nodeB.y;
            const dz = nodeA.z - nodeB.z;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < 20) {
                lineCoords.push(nodeA.x, nodeA.y, nodeA.z);
                lineCoords.push(nodeB.x, nodeB.y, nodeB.z);
            }
        }
    }

    if (lineSegments) scene.remove(lineSegments);

    const linesGeom = new THREE.BufferGeometry();
    linesGeom.setAttribute('position', new THREE.Float32BufferAttribute(lineCoords, 3));
    lineSegments = new THREE.LineSegments(linesGeom, lineMaterial);
    scene.add(lineSegments);

    currentMouseX += (targetMouseX - currentMouseX) * 0.05;
    currentMouseY += (targetMouseY - currentMouseY) * 0.05;

    camera.position.x = currentMouseX;
    camera.position.y = -currentMouseY;
    camera.lookAt(scene.position);

    particleSystem.rotation.y += 0.0006;
    if (lineSegments) lineSegments.rotation.y += 0.0006;

    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// ==========================================
// 13. EASTER EGGS: KONAMI CODE & MATRIX RAIN
// ==========================================

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            toggleMatrixRain();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

let matrixInterval = null;
function toggleMatrixRain() {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;

    if (canvas.style.opacity === '1') {
        canvas.style.opacity = '0';
        setTimeout(() => {
            clearInterval(matrixInterval);
            matrixInterval = null;
        }, 1000);
        return;
    }

    canvas.style.opacity = '1';
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20) + 1;
    const ypos = Array(columns).fill(0);

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    function step() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0f0';
        ctx.font = '15pt monospace';

        ypos.forEach((y, ind) => {
            const text = String.fromCharCode(Math.random() * 128);
            const x = ind * 20;
            ctx.fillText(text, x, y);

            if (y > 100 + Math.random() * 10000) {
                ypos[ind] = 0;
            } else {
                ypos[ind] = y + 20;
            }
        });
    }

    matrixInterval = setInterval(step, 33);
}
