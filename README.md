# Nicat Samadov - Portfolio Website Link - https://nijatsamadov-portfolio.netlify.app/

Professional portfolio website for Backend Developer specializing in Java & Spring Boot.

## 🚀 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment to Netlify

### Option 1: Automatic Deployment (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Netlify will automatically detect the build settings from `netlify.toml`
4. Build command: `npm run build`
5. Publish directory: `dist`

### Option 2: Manual Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod
```

## ⚙️ Configuration Files

- `netlify.toml` - Netlify build and deployment configuration
- `vite.config.ts` - Vite build configuration
- `public/_redirects` - SPA routing configuration

## 🛠️ Tech Stack

- TypeScript
- Vite
- Vanilla CSS

## 📝 Notes

- The build output is in the `dist` directory
- Make sure to run `npm run build` before deploying
- All configuration for Netlify is in `netlify.toml`
