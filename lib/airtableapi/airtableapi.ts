import { ContactFormValues, TypeOfServices } from "@customTypes/contactform";
import { NewsletterValues } from "@customTypes/newsletter";
import Airtable, { base } from "airtable";
import { AirtableBase } from "airtable/lib/airtable_base";

const CONTACTS_TABLE = "Contacts";
const NEWSLETTERS_TABLE = "Newsletter";
const TABLE_ID = "appygZzpjhz7Tf955";

type Contacts = {
	Name: string;
	"Email Address": string;
	Phone: string;
	"Service Selected": TypeOfServices;
	Message: string;
};

type Newsletter = {
	"Email Address": string;
};

const InitAirTable = (): AirtableBase => {
	return new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(TABLE_ID);
};

// create contact form record
export const AirtableCreateContact = async (formData: ContactFormValues):Promise<any> => {
	return new Promise((resolve, reject) => {
		const base = InitAirTable();

		let createRecord: Contacts = {
			Name: formData.name,
			"Email Address": formData.email,
			Phone: formData.phone,
			"Service Selected": formData.typeOfConsultation,
			Message: formData.message,
		};
		base(CONTACTS_TABLE).create([{ fields: createRecord }], (err, records) => {
			if (err) {
				console.error(err);
				reject(err);
			}
			if (!records) {
				resolve({"recordId": null});
			} else {
				resolve({"recordId":records[0].getId()});
			}
		});
	});
};
// create contact form record
export const AirtableCreateNewsletter = async (formData: NewsletterValues):Promise<any> => {
	return new Promise((resolve, reject) => {
		const base = InitAirTable();

		let createRecord: Newsletter = {
			"Email Address": formData.email
		};
		base(NEWSLETTERS_TABLE).create([{ fields: createRecord }], (err, records) => {
			if (err) {
				console.error(err);
				reject(err);
			}
			if (!records) {
				resolve({"recordId": null});
			} else {
				resolve({"recordId":records[0].getId()});
			}
		});
	});
};
export const config = {
  runtime: 'experimental-edge',
	unstable_allowDynamic: [
    '/node_modules/airtable/lib/airtable.umd.js',
    '/lib/airtableapi/airtableapi.ts'
  ],
}
