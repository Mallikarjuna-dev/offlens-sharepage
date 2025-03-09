# CSK Shares Web Application

## Overview
This is a **Next.js-based** web application that displays Chennai Super Kings (CSK) share prices, allows users to submit queries, and updates data dynamically using an Excel upload and Google Sheets integration.

## Features
- ✅ **Fully responsive UI** (Mobile & Large Screens)
- ✅ **Live Share Price Chart** using Recharts
- ✅ **Contact Form with Google Sheets Integration**
- ✅ **Admin API to Upload Excel Data**
- ✅ **Postman Collection for API Testing**
- ✅ **Vercel Deployment**

## Tech Stack
- **Frontend:** Next.js, Tailwind CSS, Recharts
- **Backend:** Next.js API Routes, Google Sheets API, xlsx library
- **Database:** Google Sheets (for live query storage)


## Folder Structure
```
offlens-sharepage
├── public/          # Static assets
├── app/           # Next.js pages
├── api/             # API Routes
├── components/      # Reusable components
├── styles/          # Global styles
├── README.md        # Documentation
├── CSK-Shares.postman_collection.json  # Postman collection
```


## API Endpoints
| Method | Endpoint       | Description |
|--------|---------------|-------------|
| POST   | `/api/upload` | Uploads Excel file to update share prices |
| POST   | `/api/google-sheet` | Saves contact form queries to Google Sheets |

## Deployment
- Hosted on **Vercel**: [CSK Shares Live Page](https://offlens-sharepage.vercel.app/)

- GitHub Repository: [CSK Shares GitHub Repo](https://github.com/Mallikarjuna-dev/offlens-sharepage)

## How to Run Locally
1. Clone the repo:
```
git clone https://github.com/Mallikarjuna-dev/offlens-sharepage.git
```

2. Install dependencies:
```
npm install
```

3. Run the development server:
```
npm run dev
```
