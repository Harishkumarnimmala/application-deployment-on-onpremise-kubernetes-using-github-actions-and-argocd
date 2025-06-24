# Application Deployment on On-Premise Kubernetes using GitHub Actions and Argo CD

This project demonstrates a full DevOps workflow to deploy a React frontend application on an on-premise Kubernetes cluster using:

- **GitHub Actions** for continuous integration and continuous delivery (CI/CD) to build and push Docker images.
- **Helm** for templating Kubernetes manifests and managing releases.
- **Argo CD** for GitOps-style continuous deployment and syncing Kubernetes resources.
- **GitHub Container Registry (GHCR)** for hosting Docker container images.

---

## Project Structure

Application deployment on on-premise Kubernetes using GitHub Actions and Argo CD/
├── application-stack/          # React frontend source code and Dockerfile
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── Dockerfile
├── helm/
│   └── frontend/              # Helm chart for frontend app
│       ├── templates/
│       ├── values.yaml
│       └── Chart.yaml
├── argo-apps/                # Argo CD Application manifests
│   ├── argo-app-dev.yaml
│   └── argo-app-prod.yaml
├── .github/
│   └── workflows/
│       └── docker-build.yml  # GitHub Actions workflow file
└── README.md


---

## Prerequisites

- A Kubernetes cluster with `kubectl` configured to access it  
- Argo CD installed and running in the Kubernetes cluster  
- A GitHub repository with GitHub Actions enabled  
- Docker image hosting in GitHub Container Registry (GHCR)  
- Basic familiarity with Helm charts and Kubernetes manifests  

---

## Useful Commands

# Apply Argo CD Application manifest
kubectl apply -f argo-apps/argo-app-dev.yaml

# Force sync Argo CD app (requires argocd CLI configured)
argocd app sync frontend-dev --force

# Delete frontend pods to force Kubernetes to pull new image
kubectl delete pod -n frontend-dev -l app=frontend

# Watch pod status in the frontend-dev namespace
kubectl get pods -n frontend-dev -w

# View logs of frontend pods
kubectl logs -n frontend-dev -l app=frontend

# Forward frontend service port for local access
kubectl port-forward svc/frontend -n frontend-dev 9090:80

---

## Debugging Tips

- **InvalidImageName error:**  
  Ensure your Docker image names are all lowercase, and there are no trailing spaces or special characters (like `%`) in your Helm `values.yaml` or Argo CD manifests.

- **ImagePullBackOff error:**  
  Verify your Kubernetes cluster nodes have network access to GitHub Container Registry (GHCR).  
  If the registry is private, make sure `imagePullSecrets` are configured properly.

- **Pods stuck on old images:**  
  Use `imagePullPolicy: Always` in your Helm chart to force Kubernetes to pull the latest image.  
  Delete existing pods with `kubectl delete pod -n frontend-dev -l app=frontend` to trigger fresh pulls.

- **GitHub Actions build failures:**  
  Check the **Actions** tab in your GitHub repository for build logs and error details.

- **Argo CD sync issues:**  
  Use `argocd app sync frontend-dev --force` or delete and reapply your Argo CD Application manifest to fix stuck syncs.

---

## Debugging Tips
1. InvalidImageName error:
Ensure your Docker image names are all lowercase, and there are no trailing spaces or special characters (like %) in your Helm values.yaml or Argo CD manifests.

2. ImagePullBackOff error:
Verify your Kubernetes cluster nodes have network access to GitHub Container Registry (GHCR).
If the registry is private, make sure imagePullSecrets are configured properly.

3. Pods stuck on old images:
Use imagePullPolicy: Always in your Helm chart to force Kubernetes to pull the latest image.
Delete existing pods with kubectl delete pod -n frontend-dev -l app=frontend to trigger fresh pulls.

4. GitHub Actions build failures:
Check the Actions tab in your GitHub repository for build logs and error details.

5. Argo CD sync issues:
Use argocd app sync frontend-dev --force or delete and reapply your Argo CD Application manifest to fix stuck syncs.