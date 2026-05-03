# 🚀 Netlify Deployment Guide for NeighborhoodIQ

## ✅ Build Complete!

Your React frontend has been successfully built and is ready for deployment. The `dist` folder contains all the files needed for Netlify.

## 📁 Build Output

```
✓ 3230 modules transformed
✓ dist/index.html (0.82 kB)
✓ dist/assets/index.css (103.84 kB gzipped: 20.30 kB)
✓ dist/assets/index.js (1,262.82 kB gzipped: 360.92 kB)
✓ Built in 12.13 seconds
```

## 🌐 Deploy to Netlify

### Option 1: Drag & Drop (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Sign in or create account
3. Drag & drop the `client/dist` folder onto Netlify
4. Done! Your site is live

### Option 2: Connect GitHub (Recommended)
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Netlify will automatically:
   - Detect `netlify.toml` configuration
   - Build on every push
   - Deploy to your live site

### Option 3: Netlify CLI (Advanced)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=client/dist

# Or for preview deployment
netlify deploy --dir=client/dist
```

## ⚙️ Configuration Files

Your project includes `netlify.toml` which configures:
- ✅ Build command
- ✅ Publish directory
- ✅ SPA routing (all routes redirect to index.html)
- ✅ Security headers
- ✅ Caching strategies
- ✅ Environment variables

## 🔧 Environment Variables for Netlify

Set these in Netlify dashboard (Site settings → Build & deploy → Environment):

```
VITE_API_URL=https://your-api-domain.com/api
VITE_APP_NAME=NeighborhoodIQ
```

Or create a `.env.production` file:
```env
VITE_API_URL=https://your-api-domain.com/api
VITE_APP_NAME=NeighborhoodIQ
```

## 📊 Deployment Checklist

Before deploying, ensure:

- [ ] Backend API is deployed and accessible
- [ ] Update `VITE_API_URL` to point to your backend
- [ ] Environment variables are set in Netlify
- [ ] `dist` folder is generated (should be ~1.3 MB)
- [ ] No console errors when testing locally

## 🧪 Test Before Deploying

```bash
# Build locally
cd client
npm run build

# Preview the build locally
npm run preview

# Visit http://localhost:4173 to test
```

## 📱 After Deployment

### 1. Configure Custom Domain
- Netlify dashboard → Domain management
- Add your custom domain (e.g., app.example.com)
- Configure DNS or use Netlify DNS

### 2. Set Up HTTPS
- Automatically provisioned by Netlify (Let's Encrypt)
- Takes 1-2 minutes

### 3. Configure Redirects
- Already configured in `netlify.toml`
- SPA routes automatically redirect to index.html
- No additional setup needed

### 4. Enable Analytics (Optional)
```bash
npm install @netlify/plugin-nextjs
# Or use Netlify's built-in analytics
```

## 🔗 Update Backend API URL

After your backend is deployed, update your environment:

```bash
# In Netlify dashboard:
Site settings → Build & deploy → Environment

VITE_API_URL=https://your-backend-api.com/api
```

Then trigger a rebuild:
```bash
netlify deploy --prod --dir=client/dist
```

## 📈 Performance Optimization

### Current Bundle Size:
- JavaScript: 1,262.82 kB (360.92 kB gzipped)
- CSS: 103.84 kB (20.30 kB gzipped)
- Total: ~400 kB gzipped

### To Optimize Further:

1. **Code Splitting** - Implement route-based code splitting:
```javascript
// In your routes
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Explore = lazy(() => import('./pages/Explore'))
```

2. **Update vite.config.js**:
```javascript
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-libs': ['react', 'react-dom'],
          'ui-libs': ['lucide-react', 'framer-motion'],
          'chart-libs': ['recharts'],
          'map-libs': ['leaflet', 'react-leaflet'],
        }
      }
    }
  }
}
```

## 🆘 Troubleshooting

### Blank Page After Deployment
- Check browser console for errors
- Verify `VITE_API_URL` is set correctly
- Clear cache and hard refresh (Ctrl+Shift+R)

### 404 Errors on Refresh
- Netlify redirects should handle this (configured in netlify.toml)
- If not working, ensure netlify.toml is in root directory

### API Connection Errors
- Check backend is deployed and running
- Verify `VITE_API_URL` environment variable
- Check CORS configuration on backend

### Build Fails
- Check build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (18+ recommended)

## 📚 Useful Links

- [Netlify Documentation](https://docs.netlify.com/)
- [Deploy a Vite app](https://docs.netlify.com/integrations/frameworks/vite/)
- [Netlify.toml Reference](https://docs.netlify.com/configure-builds/file-conventions/)
- [Custom Domain Setup](https://docs.netlify.com/domains-https/custom-domains/)

## 🎯 Quick Deploy Steps

1. **Build locally** (already done):
   ```bash
   npm run build
   ```

2. **Test preview**:
   ```bash
   npm run preview
   ```

3. **Option A - Drag & Drop**:
   - Visit [netlify.app](https://netlify.app)
   - Drag `client/dist` folder

4. **Option B - Connect GitHub**:
   - Push to GitHub
   - Connect repo in Netlify
   - Auto-deploys on push

5. **Set Environment Variables**:
   - Netlify dashboard → Settings
   - Add `VITE_API_URL`

6. **Trigger Deploy**:
   ```bash
   netlify deploy --prod --dir=client/dist
   ```

---

**Your NeighborhoodIQ frontend is ready for the world! 🚀**

Questions? Check [Netlify Docs](https://docs.netlify.com/) or see `DEPLOYMENT.md` for backend deployment.
