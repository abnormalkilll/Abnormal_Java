# How to Host Your Abnormal Java Website (100% Free Forever)

You don't need to pay Google Play $25 or spend any money on hosting. The `website/` folder contains a complete, self-contained open-source software distribution website with the APK download already bundled!

Here are the 3 best free hosting options:

---

### Option 1: GitHub Pages (Recommended for Open Source)
1. Create a public repository on GitHub (e.g., `abnormal-java`).
2. Push your project or upload the contents of the `website/` folder to the repository.
   *(Note: GitHub supports files up to 100 MB via Git, and your APK is 51 MB, so it pushes smoothly).*
3. In GitHub, go to **Settings** -> **Pages**.
4. Under **Branch**, select `main` (or `gh-pages`) and root `/` (or `/docs`), then click **Save**.
5. Your website is live immediately at:
   `https://<your-username>.github.io/abnormal-java/`

---

### Option 2: Vercel (1-Click Deployment)
1. Go to [vercel.com](https://vercel.com) (free account).
2. Install Vercel CLI (`npm i -g vercel`) or connect your GitHub repository.
3. In the terminal inside the `website/` directory, simply run:
   ```bash
   vercel
   ```
4. Vercel will give you a live HTTPS link (e.g. `https://abnormal-java.vercel.app`) in under 15 seconds!

---

### Option 3: Netlify (Drag & Drop Deployment)
1. Go to [netlify.com](https://app.netlify.com/drop) (free account).
2. Simply **drag and drop** the entire `website/` folder into the Netlify Drop box in your browser.
3. Your site and direct APK download will be live instantly with a free custom subdomain!

---

### Local Preview on Your Computer:
To view the website on your local machine right now:
- Double-click [`website/index.html`](file:///c:/Users/abnor/Desktop/Summer-2026/Builds/Project_Java_Compiler/Abnormal_JAVA_App_Project_1/website/index.html) to open it in Chrome, Edge, or Firefox.
- Or run in terminal:
  ```bash
  python -m http.server 8080 --directory website
  ```
  Then visit `http://localhost:8080` in your browser.
