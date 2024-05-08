export interface Offer {
  type: string;
  description: string;
  entreprise: string;
  lieu: string;
  datePublication: Date;
  dateExpiration: Date;
  competencesRequises: string[];
  experienceRequise: string[];
  niveauEtudeRequis: string;
  publicCible: string;
  duree: string;
  nombrePostes: number;
  salaire: number;
  recompense: string;
  qualificationsRequises: string;
  documents: string;
}
