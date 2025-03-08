import { writeFile } from 'fs/promises';
import xlsx from 'xlsx';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { file } = req.body; 
        const buffer = Buffer.from(file, 'base64');
        await writeFile('./public/data.xlsx', buffer);

        const workbook = xlsx.read(buffer, { type: 'buffer' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const data = xlsx.utils.sheet_to_json(sheet);

        return res.status(200).json({ success: true, data });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to process file' });
    }
}
