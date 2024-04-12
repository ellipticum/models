import React from 'react'
import styles from './styles.module.css'
import { Model, Param, ParamValue, Props } from '../model'

class Editor extends React.Component<any, Model> {
    constructor(props: Props) {
        super(props)

        this.state = {
            paramValues: props.model.paramValues.slice()
        }
    }

    getModel() {
        return this.state
    }

    setParamValue(paramId: number, value: string) {
        const updatedParamValues = this.state.paramValues.map((paramValue: ParamValue) => {
            if (paramValue.paramId === paramId) {
                return { ...paramValue, value }
            }
            return paramValue
        })
        this.setState({ paramValues: updatedParamValues })
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.column}>
                    {this.props.params.map((param: Param) => {
                        const paramValue = this.state.paramValues.find(
                            (paramValue: ParamValue) => paramValue.paramId === param.id
                        )

                        return (
                            <div key={param.id} className={styles.item}>
                                <label className={styles.label}>{param.name}</label>
                                {param.type === 'list' ? (
                                    <select
                                        value={paramValue ? paramValue.value : ''}
                                        onChange={(e) =>
                                            this.setParamValue(param.id, e.target.value)
                                        }
                                    >
                                        <option value=''>Выберите значение</option>
                                        {param.options?.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        type='text'
                                        maxLength={50}
                                        value={paramValue ? paramValue.value : ''}
                                        onChange={(e) =>
                                            this.setParamValue(param.id, e.target.value)
                                        }
                                    />
                                )}
                            </div>
                        )
                    })}
                </div>
                <div className={styles.structure}>
                    <code className={styles.code}>{JSON.stringify(this.getModel())}</code>
                </div>
            </div>
        )
    }
}

export default Editor
