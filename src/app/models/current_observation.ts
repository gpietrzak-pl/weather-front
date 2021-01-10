import { Astronomy } from "./astronomy";
import { Atmosphere } from "./atmosphere";
import { Condition } from "./condition";
import { Wind } from "./wind";

export class Current_observation {
    wind!: Wind;
    atmosphere!: Atmosphere;
    astronomy!: Astronomy;
    condition!: Condition;
    pubDate!: number;
}