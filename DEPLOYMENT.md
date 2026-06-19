# Deployment Guide (Vercel)

Vercel is highly recommended for Vite & React projects due to its simplicity, speed, and free tier.

## Option 1: Deploy via Vercel Dashboard (Easiest)

1.  **Push your code to GitHub**:
    Make sure your portfolio code is pushed to a repository on your GitHub account.
2.  **Log in to Vercel**:
    Go to [vercel.com](https://vercel.com/) and log in using your GitHub account.
3.  **Import Project**:
    - Click on the **"Add New..."** button and select **"Project"**.
    - Find your portfolio repository from the list and click **"Import"**.
4.  **Configure Project**:
    - Vercel should automatically detect that this is a **Vite** project.
    - Keep the default settings:
        - Build Command: `npm run build`
        - Output Directory: `dist`
        - Install Command: `npm install`
5.  **Deploy**:
    Click the **"Deploy"** button. Wait a minute or two, and your portfolio will be live!

---

## Option 2: Deploy via Vercel CLI (For Terminal Users)

If you prefer deploying directly from your terminal:

1.  **Install Vercel CLI**:
    ```bash
    npm install -g vercel
    ```
2.  **Login to Vercel**:
    ```bash
    vercel login
    ```
3.  **Deploy**:
    Run the following command inside your project's root folder:
    ```bash
    vercel
    ```
4.  **Follow the prompts**:
    - Set up and deploy? **Y**
    - Which scope do you want to deploy to? **(Select your account)**
    - Link to existing project? **N**
    - What's your project's name? **(Press enter or type a name)**
    - In which directory is your code located? **(Press enter for ./)**
    - Want to modify these settings? **N**
5.  **Deploy to Production**:
    Once you're happy with the preview, run:
    ```bash
    vercel --prod
    ```

> [!TIP]
> If you encounter routing issues on reload (404 errors), you may need to add a `vercel.json` file in your project root with the following rewrite rule:
> ```json
> {
>   "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
> }
> ```
