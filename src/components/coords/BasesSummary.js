import React from 'react'

const BasesSummary = (coords) => {
    let bases = '';
    if (coords.coords) {
        bases = coords.coords[0].rss.map((e) => {
            return (
                <tr key={e.id}>
                    <td>{e.base}</td>
                    <td>{e.sector}</td>
                    <td>{e.x}</td>
                    <td>{e.y}</td>
                </tr>
            )
        })
    }


    return (
        <div>
            <table className="striped">
                <thead>
                    <tr>
                        <th>Base</th>
                        <th>Sector</th>
                        <th>X</th>
                        <th>Y</th>
                    </tr>
                </thead>
                <tbody>{bases}</tbody>
            </table>
        </div>
    )
}

export default BasesSummary 