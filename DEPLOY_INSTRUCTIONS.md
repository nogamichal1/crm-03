
# Deploy on Vercel

1. **Push repo** (wraz z `.env.production` i `.env.local`) do GitHub.
2. W panelu Vercel możesz *pominąć* ręczne dodawanie zmiennych – Vercel
   odczyta je z commitowanych plików `.env.*` przy każdym buildzie.
   Jeśli wolisz dashboard, skopiuj te same wartości do *Environment Variables* (`Production` + `Preview`).
3. Kliknij **Deploy** / `vercel --prod`.

Jeśli zobaczysz ponownie `auth/invalid-api-key`, upewnij się, że zmienne
znajdują się w *Production* scope i że build startuje **po** ich dodaniu.
