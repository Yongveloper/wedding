export interface IWedding {
  id: number;
  date: string;
  location: ILocation;

  message: {
    intro: string;
    invitation: string;
  };
  galleryImages: string[];
  attendCount: number;

  groom: IPerson & { parents: IPerson[] };
  bride: IPerson & { parents: IPerson[] };
}

export interface ILocation {
  lat: number;
  lng: number;
  name: string;
  address: string;
  link: string;
  waytocome: {
    metro: string[];
    bus: string[];
  };
}

export interface IAccount {
  bankName: string;
  accountNumber: string;
  kakaopayLink?: string;
}

export interface IPerson {
  name: string;
  phoneNumber: string;
  account: IAccount;
}
