export interface HassEntity {
    entity_id:string;
    state:string;
    attributes:Record<string,unknown>;
}

export interface HomeAssistant {
    states: Record<string,HassEntity>;
}

export interface CardConfig{
    type:string;
    entity:string;
    title?:string;
}