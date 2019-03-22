import React from 'react'
import { Link } from 'gatsby'
import undov from "../img/undov.svg"

const xatolar = [
    "Буюртмани ўз муддатида бажарилмаслиги",
    "Маҳсулот сифатининг пастлиги",
    "Стандартга эга эмас сим диаметри кичик дастаси юпқа ва бетартиб қуйилгани сабаб тез синади",
    "Маҳсулотнинг тайёрланиш жараёнида қимматлашуви",
    "Олдиндан тўлов қилинганидан сўнг иш бажарувчининг йўқолиб қолиши"
]

const Muammo = class extends React.Component {
    render() {
        return (<div style={{display:'flex',flexDirection:'column', marginTop: 32}}>
        <div style={{alignItems:'center', display:'flex',flexDirection:'column',}}>
            <h5 style={{textAlign: 'center'}}>БОШҚАЛАР БИЛАН ИШЛАГАН МИЗОЗЛАРДА ТЕЗ-ТЕЗ УЧРАЙДИГАН</h5>
            <h1 className={"has-text-weight-bold is-size-5-mobile is-size-4-tablet is-size-3-widescreen"}
                 style={{textAlign:'center', fontSize:35, marginTop: -10}}>5 ТА МУАММО</h1>
        </div>
            <div>
                {xatolar.map((x, i) => {
                    return <div style={{alignItems: 'center', display: 'flex', flexDirection: 'row', margin: 10 }}>
                            <div style={{ color: "#00ff00", fontSize: 55 }}>{i + 1} </div>
                            <img src={undov} alt="Summergroup" style={{ alignItems: 'center', width: 18, height: 18, marginLeft: -21 }} />
                            <div style={{margin: 15 }}>{x}</div>
                        </div>
                })}
            </div>
            </div>
        )
    }
}

export default Muammo
