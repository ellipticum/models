import './App.css'

import Editor from './components/editor/UI'

function App() {
    const params = [
        {
            id: 1,
            name: 'Назначение'
        },
        {
            id: 2,
            name: 'Длина'
        }
    ]

    const model = {
        paramValues: [
            {
                paramId: 1,
                value: 'повседневное'
            },
            {
                paramId: 2,
                value: 'макси'
            }
        ]
    }

    return (
        <>
            <Editor model={model} params={params} />
        </>
    )
}

export default App
