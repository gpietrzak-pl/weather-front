import { Location } from "./location";
import { Current_observation } from "./current_observation";
import { Forecast } from "./forecast";

export class Weather {
    location!: Location;
    current_observation!: Current_observation;
    forecast!: Forecast[];
}