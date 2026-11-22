# angelvillarcorrales.com

Personal academic website of Angel Villar-Corrales: about, news, publications, projects, and CV.

It is a small React + TypeScript site built with Vite. At build time every page is pre-rendered to
static HTML (with page titles, descriptions, social-preview tags, a sitemap, and a 404 page), so it
can be hosted on GitHub Pages with no server, database, or CMS.

## Run locally

```bash
npm install
npm run dev       # development server with live reload
npm run build     # production build in dist/
npm run preview   # serve the production build locally
```

## Update content

Everything you will normally edit lives in `src/content/` and `src/data/site.ts`. Each news item,
publication, project, and CV entry is its own JSON file named `YYYY-MM-DD-short-name.json`. New files
are picked up automatically and sorted newest first. The build stops with a clear message if a file
is missing a required field.

| What | Where |
| --- | --- |
| Name, bio, interests, email, profile links | `src/data/site.ts` |
| News | `src/content/news/` |
| Publications | `src/content/publications/` |
| Projects | `src/content/projects/` |
| CV (the **cv** tab opens this PDF in a new tab) | `public/cv.pdf`, rebuilt with `npm run cv` (see below) |
| Images (portrait, paper figures) | `public/images/` |

See [`src/content/README.md`](src/content/README.md) for examples of each file type.

### Update the CV

The **cv** tab (and the CV icon on the home page) opens `public/cv.pdf` in a new browser tab. After editing your LaTeX résumé, run:

```bash
npm run cv                                   # uses ~/Documents/Work/Bonn_and_others/LaTEX Resume
npm run cv -- "/path/to/LaTEX Resume"        # or point it at another folder
```

The script compiles a temporary copy of `resume.tex` without the `\address` and `\phone` lines (so your
home address and phone number are not published) and copies the result to `public/cv.pdf`. Your LaTeX
folder is not modified. It needs `latexmk` and a TeX distribution with `moderncv`. You can also copy any
PDF to `public/cv.pdf` by hand.

## Publish on GitHub Pages at https://angelvillarcorrales.com

The workflow in `.github/workflows/deploy.yml` builds the site and publishes it on every push to `main`.
`public/CNAME` already contains `angelvillarcorrales.com`.

1. **Create a public GitHub repository** named `<user>.github.io` (this site uses
   `angelvillar96/angelvillar96.github.io`). Don't push yet.
2. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. **Push this folder to `main`.** The *Deploy website* workflow runs automatically. If it ran before
   step 2, re-run it from **Actions → Deploy website → Run workflow**. The site is now live at
   `https://<user>.github.io/`.
4. **Move DNS from the old host to GitHub.** The domain is registered at Namecheap, but its nameservers
   still point to the old InfinityFree host (`ns1–ns5.byet.org`). In Namecheap → **Domain List → Manage**:
   - **Nameservers**: switch to **Namecheap BasicDNS**.
   - **Advanced DNS**: delete every existing host record (including Namecheap's default
     `CNAME www → parkingpage.namecheap.com` and any *URL Redirect Record* on `@`; don't add a
     wildcard `*` record), then add:

     ```text
     Type    Host   Value
     A       @      185.199.108.153
     A       @      185.199.109.153
     A       @      185.199.110.153
     A       @      185.199.111.153
     AAAA    @      2606:50c0:8000::153
     AAAA    @      2606:50c0:8001::153
     AAAA    @      2606:50c0:8002::153
     AAAA    @      2606:50c0:8003::153
     CNAME   www    angelvillar96.github.io.
     ```

     Replace `angelvillar96` with the GitHub account that owns the repository.
5. **Verify the domain for your account** (prevents anyone else from claiming it): your avatar →
   **Settings → Pages** (account settings, not the repository) → **Add a domain** →
   `angelvillarcorrales.com`. Add the TXT record GitHub shows in Namecheap's Advanced DNS
   (host `_github-pages-challenge-<user>`), click **Verify**, and keep that record permanently.
6. In the repository's **Settings → Pages**, enter `angelvillarcorrales.com` as the **Custom domain**.
7. **Wait for DNS and the certificate.** After a nameserver change, propagation can take up to
   24–48 hours; `dig angelvillarcorrales.com +short` should return only the four `185.199.x.153`
   addresses. GitHub then issues a free certificate (up to another 24 hours). Tick **Enforce HTTPS**
   when it becomes available. `http://` and `www.` addresses then redirect to
   `https://angelvillarcorrales.com`. If the checkbox stays greyed out, remove and re-add the custom domain.

### Links to the old site

Several READMEs and project pages link to old addresses such as `/templates/home.php`, the old
BibTeX pages, or PDFs under `/templates/others/Publications/`. The 404 page forwards these to the
matching new page (or to the paper on arXiv). Updating those links in the repositories you control
(PlaySlot, TextOCVP, MSPred, NimbRoNet3, super-resolution-noisy-images, TemplaTorch, …) is still
worthwhile. Before cancelling the InfinityFree account, back up any files that exist only there
(for example the NimbRoNet3 poster).
