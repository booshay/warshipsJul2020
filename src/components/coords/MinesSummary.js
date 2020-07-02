import React from 'react'

const MinesSummary = (coords) => {
    let mines = '';
    if (coords.coords) {
        mines = coords.coords[0].mine.map((e) => {
            return (
                <tr key={e.id}>
                    <td>{e.lvl}</td>
                    <td>{e.type}</td>
                    <td>{e.x}</td>
                    <td>{e.y}</td>
                    <td>{e.enhanced}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table className="striped">
                <thead>
                    <tr>
                        <th>LVL</th>
                        <th>Type</th>
                        <th>X</th>
                        <th>Y</th>
                        <th>Enhanced</th>
                    </tr>
                </thead>
                <tbody>
                    {mines}
                </tbody>
            </table>
        </div>
    )
}

export default MinesSummary 