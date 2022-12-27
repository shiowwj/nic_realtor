// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { AirtableCreateContact } from "@lib/airtableapi/airtableapi";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		if (req.method !== "POST") {
			return res.status(405).json({ message: "Only POST requests allowed" });
		}
		if (req.method === "POST") {
			const createRecord = await AirtableCreateContact(req.body);
			if (!createRecord["recordId"]) {
				return res.status(402).json({ message: "No record created" });
			}
			return res.status(200).json({ message: createRecord["recordId"] });
		}
	} catch (error) {
		res.status(400).json({ message: "Something went wrong @createairtablerecord handler", errorStack: error });
	}
}
