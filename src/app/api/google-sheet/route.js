import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import fs from 'fs';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SHEET_ID = process.env.SHEET_ID;
// const KEY_FILE_PATH = '../credentials.json';

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, message } = body;
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        const credentials = JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS);
        const auth = new google.auth.GoogleAuth({
            credentials,
            scopes: SCOPES,
        });

        const sheets = google.sheets({ version: 'v4', auth });
        const timestamp = new Date().toLocaleString();

        await sheets.spreadsheets.values.append({
            spreadsheetId: SHEET_ID,
            range: 'Sheet1!A:D',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[name, email, message, timestamp]],
            },
        });

        return NextResponse.json({ success: true, message: 'Data added to Google Sheet' });
    } catch (error) {
        console.error('Error adding data to Google Sheets:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}