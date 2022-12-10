import { CountryModel } from "./country.model";
import { GlobalModel } from "./global.model";

export class SummaryModel {
    Countries: CountryModel[] = [];
    Date: string = '';
    Global: GlobalModel[] = [];
    ID: string = '';
    Message: string = '';
}