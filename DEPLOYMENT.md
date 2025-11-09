# Relius Website Deployment Guide

This guide explains how to deploy your Relius website to GitHub Pages with your custom domain `relius.ai`.

## Prerequisites

- GitHub repository for your website
- Cloudflare account with `relius.ai` domain
- Node.js and npm installed locally

## Deployment Steps

### 1. GitHub Repository Setup

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on push to main

### 2. Cloudflare DNS Configuration

Configure your DNS settings in Cloudflare:

1. **Log in to Cloudflare** and select your `relius.ai` domain

2. **Add DNS Records**:

   **Option A: Apex Domain (relius.ai)**
   - Type: `A`
   - Name: `@`
   - Content: `185.199.108.153`
   - Proxy status: DNS only (gray cloud)

   - Type: `A`
   - Name: `@`
   - Content: `185.199.109.153`
   - Proxy status: DNS only (gray cloud)

   - Type: `A`
   - Name: `@`
   - Content: `185.199.110.153`
   - Proxy status: DNS only (gray cloud)

   - Type: `A`
   - Name: `@`
   - Content: `185.199.111.153`
   - Proxy status: DNS only (gray cloud)

   **Option B: WWW Subdomain (www.relius.ai)**
   - Type: `CNAME`
   - Name: `www`
   - Content: `<your-github-username>.github.io`
   - Proxy status: DNS only (gray cloud)

   **Recommended: Set up both apex and www**
   - Add all four A records above for apex domain
   - Add CNAME for www subdomain
   - Then add a Page Rule to redirect www to apex (or vice versa)

3. **Configure HTTPS/SSL**:
   - In Cloudflare, go to **SSL/TLS** → **Overview**
   - Set SSL/TLS encryption mode to **Full** or **Full (strict)**
   - Go to **SSL/TLS** → **Edge Certificates**
   - Enable **Always Use HTTPS**
   - Enable **Automatic HTTPS Rewrites**

4. **Optional: Enable Cloudflare Proxy**:
   - After GitHub Pages custom domain is verified (step 3), you can enable Cloudflare proxy (orange cloud)
   - This provides Cloudflare's CDN, DDoS protection, and caching
   - Keep it disabled (gray cloud) during initial setup

### 3. Configure Custom Domain on GitHub

1. **Wait for DNS propagation** (can take up to 48 hours, usually much faster)
   - Check DNS propagation: https://dnschecker.org

2. **Add custom domain in GitHub**:
   - Go to your repository → **Settings** → **Pages**
   - Under **Custom domain**, enter: `relius.ai`
   - Click **Save**

3. **Enable HTTPS**:
   - After domain verification completes, check **Enforce HTTPS**
   - This may take a few minutes to become available

### 4. Verify Deployment

1. **Trigger a deployment**:
   ```bash
   git add .
   git commit -m "Test deployment"
   git push origin main
   ```

2. **Monitor the deployment**:
   - Go to **Actions** tab in your GitHub repository
   - Watch the workflow run
   - Deployment typically takes 2-5 minutes

3. **Test your site**:
   - Visit `https://relius.ai`
   - Check all pages and functionality
   - Verify images and assets load correctly

## Important Notes

### Static Export Configuration

Your Next.js app is configured for static export:
- **next.config.ts**: Configured with `output: "export"` and `images: { unoptimized: true }`
- All pages are pre-rendered as static HTML
- No server-side features (API routes, ISR, etc.)

### Files Created

- **`.github/workflows/deploy.yml`**: GitHub Actions workflow for automated deployment
- **`public/CNAME`**: Custom domain configuration
- **`public/.nojekyll`**: Prevents Jekyll processing on GitHub Pages

### Automatic Deployments

Every push to the `main` branch will automatically:
1. Build your Next.js site
2. Export static files to `out` directory
3. Deploy to GitHub Pages
4. Update your live site at `relius.ai`

## Troubleshooting

### Domain Not Working

1. **Check DNS propagation**: Use https://dnschecker.org
2. **Verify CNAME file**: Ensure `public/CNAME` contains `relius.ai`
3. **Check GitHub Pages settings**: Ensure custom domain is set correctly
4. **Disable Cloudflare proxy temporarily**: Use DNS only (gray cloud) during setup

### Build Failures

1. **Check Actions tab**: Review build logs for errors
2. **Test locally**:
   ```bash
   npm run build
   ```
3. **Verify all dependencies**: Run `npm install`

### Images Not Loading

- Images are set to `unoptimized: true` for static export
- Verify all image paths are correct
- Check that images are in the `public` directory

### 404 Errors

- Ensure `trailingSlash: true` is set in `next.config.ts`
- Links should use trailing slashes (e.g., `/about/`)
- Check that all pages are properly exported

## Updating Your Site

To update your live website:

```bash
# Make your changes
git add .
git commit -m "Your update message"
git push origin main
```

The site will automatically rebuild and deploy in 2-5 minutes.

## Custom Domain Checklist

- [ ] DNS records added in Cloudflare
- [ ] DNS propagation completed
- [ ] Custom domain added in GitHub Pages settings
- [ ] Domain verified by GitHub
- [ ] HTTPS enabled
- [ ] Site accessible at https://relius.ai
- [ ] SSL certificate active
- [ ] Cloudflare SSL/TLS configured

## Support Resources

- **Next.js Static Export**: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Cloudflare DNS Docs**: https://developers.cloudflare.com/dns/
- **GitHub Actions**: https://docs.github.com/en/actions

## Domain Migration Notes

If you need to change domains in the future:

1. Update `public/CNAME` file with new domain
2. Update Cloudflare DNS to point to GitHub Pages
3. Update custom domain in GitHub Pages settings
4. Redeploy by pushing to main

---

**Deployment Status**: Your site will be live at https://relius.ai after completing the steps above.
