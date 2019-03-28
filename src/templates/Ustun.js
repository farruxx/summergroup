import React from 'react'
import { Link } from 'gatsby'
import bolt from "../img/bolt.svg"
import mustahkam from "../img/mustahkam.svg"
import qulay from "../img/qulay.svg"
import arzon from "../img/arzon.svg"
import chegirma from "../img/chegirma.svg"

const ustun = [{
    text: "Шуба сифатли",
    text1: "ўзидан из қолдирмайди",
    rasm: bolt
}, {
    text: "Мустаҳкам -",
    text1: "дастаси чидамли ва синиб кетмайди",
    rasm: mustahkam
}, {
    text: "Ишлатишга қулай",
    text1: "иш самарадорлигини оширади",
    rasm: qulay
}, {
    text: "Арзон нархлар",
    text1: "Юқори сифат",
    rasm: arzon
}, {
    text: "Чегирмаларга эга бўлинг",
    text1: "5-10% ва бошқа совғалар",
    rasm: chegirma
},
]

const Ustun = class extends React.Component {
    render() {
        return (<div style={{alignItems:'center', display: 'flex',flexDirection:'column',marginTop: 40 }}>
            <div>
                <h1 className={"has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"}
                 style={{textAlign:'center'}}>УСТУНЛИГИМИЗ НИМАДА?</h1>
            </div>
            <div>
                {ustun.map((u) => {
                    return <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', }}>
                        <img src={u.rasm} style={{ width: 60, height: 60, margin: 10 }} />
                        <div style={{ margin: 10 }}
                            className={"has-text-weight-bold is-size-6-mobile is-size-5-tablet is-size-6-widescreen"}>
                            {u.text} <div>{u.text1}</div></div>

                    </div>
                })}
            </div>
        </div>
        )
    }
}

export default Ustun