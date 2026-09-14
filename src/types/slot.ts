export type TSlot = {
  time: string;
  isAvailable: boolean;
}

export type TSlots = {
  today: TSlot[];
  tomorrow: TSlot[];
}
