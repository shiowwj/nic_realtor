export interface ContactFormValues {
	typeOfConsultation: TypeOfServices;
	name: string;
	email: string;
	phone: string;
	message: string;
};

export enum TypeOfServices {
  BUY = "Buy",
  SELL = "Sell",
  RENT = "Rent",
  INVESTMENT = "Investment",
  PROPERTYWEALTHPLANNING = "Property Wealth Planning",
  OTHERS = "Others",
}