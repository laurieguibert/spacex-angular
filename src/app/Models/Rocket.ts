interface Rocket {
  id: string;
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  height: Height;
  diameter: Height;
  mass: Mass;
  payload_weights: Payloadweight[];
  first_stage: Firststage;
  second_stage: Secondstage;
  engines: Engines;
  landing_legs: Landinglegs;
  description: string;
}

interface Landinglegs {
  number: number;
  material?: string;
}

interface Engines {
  number: number;
  type: string;
  version: string;
  layout?: string;
  engine_loss_max?: number;
  propellant_1: string;
  propellant_2: string;
  thrust_sea_level: Thrustsealevel;
  thrust_vacuum: Thrustsealevel;
  thrust_to_weight?: number;
}

interface Secondstage {
  engines: number;
  fuel_amount_tons?: number;
  burn_time_sec: number;
  thrust: Thrustsealevel;
  payloads: Payload[];
}

interface Payloads {
  option_1: string;
  composite_fairing: Compositefairing;
  option_2?: string;
}

interface Compositefairing {
  height: Height2;
  diameter: Height2;
}

interface Height2 {
  meters?: number;
  feet?: number;
}

interface Thrustsealevel {
  kN: number;
  lbf: number;
}

interface Payloadweight {
  id: string;
  name: string;
  kg: number;
  lb: number;
}

interface Mass {
  kg: number;
  lb: number;
}

interface Height {
  meters: number;
  feet: number;
}
