# Soni Arya — Personal Developer Portfolio

A responsive React + CSS portfolio with a creative purple-pink gradient theme.

## Requirements
- Node.js (LTS recommended)
- npm

## Run locally
1. Extract the ZIP.
2. Open the `soni-portfolio` folder in VS Code.
3. Open the terminal in that folder and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Build for production
```bash
npm run build
npm run preview
```

## Personalize before publishing
1. **Profile photo:** Add your image as `public/soni-photo.jpg` (create the `public` folder if needed), then in `src/App.jsx`, replace the initials placeholder with:
   ```jsx
   <img src="/soni-photo.jpg" alt="Soni Arya" className="profile-photo" />
   ```
2. **Email:** Replace `your.email@example.com` in `src/App.jsx` with your actual email.
3. **Experience:** Check all dates and job titles for accuracy before publishing.
4. **Projects:** The School Management SaaS and AI Recommendation System are marked as planned/coming soon so they are not presented as completed work. Update the status when you have working versions.
5. **Resume:** Add a PDF to `public/` and add a download link when your resume is ready.

## Links already included
- LinkedIn: https://www.linkedin.com/in/soniarya-tech/
- GitHub: https://github.com/SoniGupta-Tech


## Add your profile photo
1. Inside the project folder, create a folder named `public` (if it does not exist).
2. Choose a clear portrait photo and copy it into `public`.
3. Rename the photo exactly to `profile-photo.jpg`.
4. The path should be `soni-portfolio/public/profile-photo.jpg`.
5. Save and refresh the browser. If the photo isn't present yet, the initials placeholder remains visible.
6. Use a portrait image (JPG) with your face centered; avoid a very wide landscape image.

## Motion update
The page now includes gentle hero entrance animations, a floating profile card, orbit motion, floating chips, hover lift on cards, and animated navigation underlines. Motion is disabled for visitors who prefer reduced motion.
