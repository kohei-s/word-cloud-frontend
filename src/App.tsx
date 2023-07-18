import React, {useState} from 'react'
import { TagCloud } from 'react-tagcloud'

export default function App() {

    const data = [
        {value: 'あ', count: 38},
        {value: 'い', count: 30},
        {value: 'う', count: 28},
        {value: 'え', count: 25},
        {value: 'お', count: 33},
        {value: '大', count: 18},
        {value: '小', count: 20},
        {value: '人', count: 20},
        {value: '雲', count: 20},
        {value: '日', count: 20},
        {value: '本', count: 20},
    ]

    const SimpleCloud = () => (
        <TagCloud
            minSize={12}
            maxSize={35}
            tags={data}
            onClick={tag => alert(`'${tag.value}' was selected!`)}
        />
    )


    return (
        <>
            <div>
                <SimpleCloud></SimpleCloud>
            </div>
        </>
    )
}
