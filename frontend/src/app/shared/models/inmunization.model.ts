export interface IAdministrationInmunization {
  subtitle: string;
  list: string[];
}

export interface ICompositionInmunization extends IAdministrationInmunization {
  type: string;
}

export interface ISchemeInmunization {
  condition: string;
  applications: string[];
  additional?: string;
}

export interface IInmunization {
  _id?: string;
  selector: string;
  title: string;
  group: number;
  kind: string;
  description: string[];
  composition: ICompositionInmunization;
  presentation: string[];
  indications: string[];
  scheme: ISchemeInmunization[];
  dose: string[];
  conservation: string[];
  administration: IAdministrationInmunization[];
  sideEffects: IAdministrationInmunization[];
  contraindications: string[];
  simultaneousUse: string;
  __v?: number;
}
