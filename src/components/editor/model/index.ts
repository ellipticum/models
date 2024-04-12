export interface Color {
    name: string
    value: string
}

export interface Param {
    id: number
    name: string
    type: 'string' | 'number' | 'list'
    options?: string[]
}

export interface ParamValue {
    paramId: number
    value: string
}

export interface Model {
    paramValues: ParamValue[]
    colors: Color[]
}

export interface Props {
    params: Param[]
    model: Model
}
